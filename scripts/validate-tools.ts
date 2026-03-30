/**
 * Tool Data Validation Script
 *
 * Run: npx tsx scripts/validate-tools.ts
 * Run with URL checks: npx tsx scripts/validate-tools.ts --check-urls
 *
 * Validates every tool entry against the schema and cross-references.
 * Outputs a matrix showing pass/fail for each tool x check.
 */

import { tools } from "../src/data/tools";
import type { Tool, Category, Platform, License, Status, ToolCost, AiAccessMethod } from "../src/types";

const VALID_CATEGORIES: Category[] = ["orchestrator", "terminal", "ide", "cli-agent", "extension", "cloud", "monitor"];
const VALID_PLATFORMS: Platform[] = ["macos", "windows", "linux", "web"];
const VALID_LICENSES: License[] = ["mit", "apache2", "agpl3", "bsd", "proprietary", "other"];
const VALID_STATUSES: Status[] = ["active", "beta", "deprecated", "acquired"];
const VALID_TOOL_COSTS: ToolCost[] = ["free", "freemium", "paid"];
const VALID_AI_ACCESS: AiAccessMethod[] = ["oauth", "api-key", "bundled", "free-tier", "none"];

const CHECK_URLS = process.argv.includes("--check-urls");

// ─── Check Definitions ────────────────────────────────────────────

interface CheckResult {
  pass: boolean;
  detail?: string;
}

type Check = {
  id: string;
  name: string;
  run: (tool: Tool, allTools: Tool[]) => CheckResult | Promise<CheckResult>;
};

const checks: Check[] = [
  // ── Required Fields ──
  {
    id: "slug",
    name: "Slug valid",
    run: (t) => {
      if (!t.slug) return { pass: false, detail: "missing" };
      if (!/^[a-z0-9-]+$/.test(t.slug)) return { pass: false, detail: `invalid chars: "${t.slug}"` };
      return { pass: true };
    },
  },
  {
    id: "name",
    name: "Name present",
    run: (t) => ({ pass: !!t.name && t.name.length > 0 }),
  },
  {
    id: "url-format",
    name: "URL format",
    run: (t) => {
      try {
        new URL(t.url);
        return { pass: true };
      } catch {
        return { pass: false, detail: `invalid: "${t.url}"` };
      }
    },
  },
  {
    id: "description",
    name: "Description",
    run: (t) => {
      if (!t.description) return { pass: false, detail: "missing" };
      if (t.description.length < 20) return { pass: false, detail: `too short (${t.description.length} chars)` };
      if (t.description.length > 300) return { pass: false, detail: `too long (${t.description.length} chars)` };
      return { pass: true };
    },
  },
  {
    id: "category",
    name: "Category valid",
    run: (t) => ({
      pass: VALID_CATEGORIES.includes(t.primaryCategory),
      detail: VALID_CATEGORIES.includes(t.primaryCategory) ? undefined : `invalid: "${t.primaryCategory}"`,
    }),
  },
  {
    id: "platforms",
    name: "Platforms valid",
    run: (t) => {
      if (!t.platforms || t.platforms.length === 0) return { pass: false, detail: "empty" };
      const invalid = t.platforms.filter((p) => !VALID_PLATFORMS.includes(p));
      if (invalid.length > 0) return { pass: false, detail: `invalid: ${invalid.join(", ")}` };
      return { pass: true };
    },
  },
  {
    id: "license",
    name: "License valid",
    run: (t) => ({
      pass: VALID_LICENSES.includes(t.license),
      detail: VALID_LICENSES.includes(t.license) ? undefined : `invalid: "${t.license}"`,
    }),
  },
  {
    id: "status",
    name: "Status valid",
    run: (t) => ({
      pass: VALID_STATUSES.includes(t.status),
      detail: VALID_STATUSES.includes(t.status) ? undefined : `invalid: "${t.status}"`,
    }),
  },
  {
    id: "last-verified",
    name: "Date valid",
    run: (t) => {
      if (!t.lastVerified) return { pass: false, detail: "missing" };
      const d = new Date(t.lastVerified);
      if (isNaN(d.getTime())) return { pass: false, detail: `invalid: "${t.lastVerified}"` };
      const age = (Date.now() - d.getTime()) / (1000 * 60 * 60 * 24);
      if (age > 90) return { pass: false, detail: `stale: ${Math.round(age)} days old` };
      return { pass: true };
    },
  },

  // ── Pricing ──
  {
    id: "tool-cost",
    name: "Tool cost valid",
    run: (t) => ({
      pass: VALID_TOOL_COSTS.includes(t.pricing.toolCost),
      detail: VALID_TOOL_COSTS.includes(t.pricing.toolCost) ? undefined : `invalid: "${t.pricing.toolCost}"`,
    }),
  },
  {
    id: "ai-access",
    name: "AI access valid",
    run: (t) => {
      if (!Array.isArray(t.pricing.aiAccess) || t.pricing.aiAccess.length === 0)
        return { pass: false, detail: "empty array" };
      const invalid = t.pricing.aiAccess.filter((a) => !VALID_AI_ACCESS.includes(a));
      if (invalid.length > 0) return { pass: false, detail: `invalid: ${invalid.join(", ")}` };
      return { pass: true };
    },
  },
  {
    id: "pricing-coherence",
    name: "Pricing coherent",
    run: (t) => {
      // Free tools shouldn't have "bundled" (that implies a paid tool subscription)
      if (t.pricing.toolCost === "free" && t.pricing.aiAccess.includes("bundled"))
        return { pass: false, detail: "free tool with bundled AI — should be freemium or use oauth/api-key" };
      // Paid/freemium tools with "none" doesn't make sense (paying for a non-AI tool?)
      if (t.pricing.toolCost === "paid" && t.pricing.aiAccess.includes("none"))
        return { pass: false, detail: "paid tool with no AI access" };
      // Freemium with "none" is unusual (non-AI tools are usually just free)
      if (t.pricing.toolCost === "freemium" && t.pricing.aiAccess.includes("none"))
        return { pass: false, detail: "freemium with no AI — unusual for a non-AI tool" };
      // startingPrice should exist for paid/freemium when there's a bundled price
      if (t.pricing.toolCost === "paid" && !t.pricing.startingPrice && !t.pricing.details)
        return { pass: false, detail: "paid tool with no price info" };
      return { pass: true };
    },
  },

  // ── Editorial Quality ──
  {
    id: "best-for",
    name: "bestFor filled",
    run: (t) => ({
      pass: !!t.bestFor && t.bestFor.length > 10,
      detail: t.bestFor ? undefined : "missing",
    }),
  },
  {
    id: "why-bounce",
    name: "whyBounce filled",
    run: (t) => ({
      pass: !!t.whyPeopleBounce && t.whyPeopleBounce.length > 10,
      detail: t.whyPeopleBounce ? undefined : "missing",
    }),
  },

  // ── Cross-References ──
  {
    id: "no-dup-slug",
    name: "Slug unique",
    run: (t, all) => {
      const dupes = all.filter((o) => o.slug === t.slug);
      return { pass: dupes.length === 1, detail: dupes.length > 1 ? `${dupes.length} entries` : undefined };
    },
  },
  {
    id: "confused-with",
    name: "confusedWith refs",
    run: (t, all) => {
      if (!t.confusedWith || t.confusedWith.length === 0) return { pass: true };
      const missing = t.confusedWith.filter((slug) => !all.find((o) => o.slug === slug));
      if (missing.length > 0) return { pass: false, detail: `broken refs: ${missing.join(", ")}` };
      return { pass: true };
    },
  },
  {
    id: "secondary-cats",
    name: "Secondary cats valid",
    run: (t) => {
      if (!t.secondaryCategories || t.secondaryCategories.length === 0) return { pass: true };
      const invalid = t.secondaryCategories.filter((c) => !VALID_CATEGORIES.includes(c));
      if (invalid.length > 0) return { pass: false, detail: `invalid: ${invalid.join(", ")}` };
      if (t.secondaryCategories.includes(t.primaryCategory))
        return { pass: false, detail: "secondary includes primary" };
      return { pass: true };
    },
  },

  // ── GitHub ──
  {
    id: "github-url-format",
    name: "GitHub URL format",
    run: (t) => {
      if (!t.githubUrl) return { pass: true }; // optional
      try {
        const u = new URL(t.githubUrl);
        if (!u.hostname.includes("github.com")) return { pass: false, detail: "not github.com" };
        return { pass: true };
      } catch {
        return { pass: false, detail: `invalid: "${t.githubUrl}"` };
      }
    },
  },
  {
    id: "stars-without-github",
    name: "Stars have GitHub",
    run: (t) => {
      if (t.githubStars && !t.githubUrl) return { pass: false, detail: "stars without githubUrl" };
      return { pass: true };
    },
  },
];

// ── URL Reachability (optional, slow) ──
if (CHECK_URLS) {
  checks.push(
    {
      id: "url-reachable",
      name: "URL reachable",
      run: async (t) => {
        try {
          const res = await fetch(t.url, {
            method: "HEAD",
            signal: AbortSignal.timeout(10000),
            headers: { "User-Agent": "awesome-agent-ides-validator/1.0" },
          });
          if (res.ok || res.status === 301 || res.status === 302 || res.status === 308)
            return { pass: true };
          return { pass: false, detail: `HTTP ${res.status}` };
        } catch (e: any) {
          return { pass: false, detail: e.message?.slice(0, 40) || "unreachable" };
        }
      },
    },
    {
      id: "github-reachable",
      name: "GitHub reachable",
      run: async (t) => {
        if (!t.githubUrl) return { pass: true };
        try {
          const res = await fetch(t.githubUrl, {
            method: "HEAD",
            signal: AbortSignal.timeout(10000),
            headers: { "User-Agent": "awesome-agent-ides-validator/1.0" },
          });
          if (res.ok || res.status === 301 || res.status === 302) return { pass: true };
          return { pass: false, detail: `HTTP ${res.status}` };
        } catch (e: any) {
          return { pass: false, detail: e.message?.slice(0, 40) || "unreachable" };
        }
      },
    }
  );
}

// ─── Run All Checks ───────────────────────────────────────────────

async function main() {
  console.log(`\nValidating ${tools.length} tools against ${checks.length} checks...\n`);

  // Results matrix: tool slug -> check id -> result
  const results: Map<string, Map<string, CheckResult>> = new Map();

  for (const tool of tools) {
    const toolResults = new Map<string, CheckResult>();
    for (const check of checks) {
      const result = await check.run(tool, tools);
      toolResults.set(check.id, result);
    }
    results.set(tool.slug, toolResults);
  }

  // ── Summary Stats ──
  let totalChecks = 0;
  let totalPassed = 0;
  let totalFailed = 0;
  const failedByCheck: Map<string, string[]> = new Map();
  const failedByTool: Map<string, { id: string; name: string; detail?: string }[]> = new Map();

  for (const [slug, toolResults] of results) {
    for (const [checkId, result] of toolResults) {
      totalChecks++;
      if (result.pass) {
        totalPassed++;
      } else {
        totalFailed++;
        if (!failedByCheck.has(checkId)) failedByCheck.set(checkId, []);
        failedByCheck.get(checkId)!.push(slug);
        if (!failedByTool.has(slug)) failedByTool.set(slug, []);
        const check = checks.find((c) => c.id === checkId)!;
        failedByTool.get(slug)!.push({ id: checkId, name: check.name, detail: result.detail });
      }
    }
  }

  // ── Matrix Output ──
  const checkIds = checks.map((c) => c.id);
  const maxSlug = Math.max(...tools.map((t) => t.slug.length), 4);

  // Header
  console.log("VALIDATION MATRIX");
  console.log("═".repeat(80));
  const header = "Tool".padEnd(maxSlug + 2) + checks.map((c) => c.id.slice(0, 6).padEnd(7)).join("");
  console.log(header);
  console.log("─".repeat(header.length));

  // Rows
  for (const tool of tools) {
    const toolResults = results.get(tool.slug)!;
    const cells = checkIds.map((id) => {
      const r = toolResults.get(id)!;
      return (r.pass ? "  ✓  " : "  ✗  ").padEnd(7);
    });
    console.log(tool.slug.padEnd(maxSlug + 2) + cells.join(""));
  }

  console.log("");

  // ── Check Legend ──
  console.log("CHECK LEGEND");
  console.log("─".repeat(50));
  for (const check of checks) {
    const failCount = failedByCheck.get(check.id)?.length ?? 0;
    const status = failCount === 0 ? "✓ ALL PASS" : `✗ ${failCount} FAIL`;
    console.log(`  ${check.id.padEnd(20)} ${check.name.padEnd(22)} ${status}`);
  }

  console.log("");

  // ── Failures Detail ──
  if (totalFailed > 0) {
    console.log("FAILURES");
    console.log("═".repeat(80));
    for (const [slug, failures] of failedByTool) {
      console.log(`\n  ${slug}:`);
      for (const f of failures) {
        console.log(`    ✗ ${f.name}${f.detail ? ` — ${f.detail}` : ""}`);
      }
    }
    console.log("");
  }

  // ── Coverage Stats ──
  console.log("SUMMARY");
  console.log("─".repeat(50));
  console.log(`  Tools:     ${tools.length}`);
  console.log(`  Checks:    ${checks.length}`);
  console.log(`  Total:     ${totalChecks} (${tools.length} × ${checks.length})`);
  console.log(`  Passed:    ${totalPassed} (${((totalPassed / totalChecks) * 100).toFixed(1)}%)`);
  console.log(`  Failed:    ${totalFailed}`);

  // Category coverage
  const catCounts = new Map<string, number>();
  for (const t of tools) {
    catCounts.set(t.primaryCategory, (catCounts.get(t.primaryCategory) || 0) + 1);
  }
  console.log("\n  Category coverage:");
  for (const [cat, count] of [...catCounts.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`    ${cat.padEnd(15)} ${count} tools ${count < 2 ? "⚠️  needs more" : ""}`);
  }

  console.log("");

  // Exit code
  process.exit(totalFailed > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
