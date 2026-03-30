# Tool Verification Checklist

Use this checklist when adding a new tool or re-verifying an existing one.
The automated script (`npm run validate`) catches schema and cross-reference issues.
This checklist covers what automation can't: accuracy against the real world.

## Per-Tool Verification

For each tool, visit the official website and GitHub repo. Confirm each item below.

### Identity
- [ ] **Name** matches how the tool brands itself (capitalization, spacing)
- [ ] **URL** goes to the official site (not a mirror, fork, or third-party page)
- [ ] **Description** matches what the tool actually does today (not what it did 6 months ago)
- [ ] **GitHub URL** points to the correct repo (not a fork or archived version)

### Status & Freshness
- [ ] **Status** is current: is it still active? Has it been acquired? Gone beta? Deprecated?
- [ ] **Last commit** on GitHub is within 90 days (if open source). If not, consider marking `deprecated`
- [ ] **Website is live** and not showing "coming soon", "shutting down", or acquisition notices
- [ ] **lastVerified** updated to today's date after checking

### Category & Classification
- [ ] **Primary category** is correct. Ask: "If someone said 'I need an orchestrator,' would this tool come up?"
- [ ] **Secondary categories** (if any) are justified. The tool genuinely belongs in both
- [ ] Tool is not in the wrong layer (e.g., a terminal listed as an IDE, an extension listed as a CLI agent)

### Platforms
- [ ] **macOS** — confirmed on official site or repo README
- [ ] **Windows** — confirmed (many tools claim Linux/macOS only)
- [ ] **Linux** — confirmed
- [ ] **Web** — confirmed (only for browser-based tools)
- [ ] No platform listed that the tool doesn't actually support

### License
- [ ] **License** matches the repo's LICENSE file (not the marketing page claim)
- [ ] If proprietary, confirm there's no open-source repo with a different license
- [ ] If AGPL/GPL, noted correctly (this affects enterprise adoption)

### Pricing — Tool Cost
- [ ] **toolCost** reflects reality:
  - `free` — the tool itself costs nothing to use
  - `freemium` — has a free tier AND a paid tier with more features
  - `paid` — requires payment to use at all
- [ ] **startingPrice** is current (check the pricing page, not cached info)
- [ ] **details** string accurately describes the pricing tiers

### Pricing — AI Access
- [ ] **aiAccess** methods are verified:
  - `oauth` — confirmed the tool supports OAuth login to a provider (Claude Pro/Max, ChatGPT Plus, Google)
  - `api-key` — confirmed the tool accepts pasted API keys
  - `bundled` — confirmed AI access is included in the tool's own subscription
  - `free-tier` — confirmed a meaningful free tier exists for AI usage
  - `none` — confirmed the tool has no AI model dependency
- [ ] If tool supports `oauth`, verify WHICH providers (check against `aiModels` field)
- [ ] If tool supports `api-key`, verify it's truly BYOK (any provider) vs locked to one
- [ ] No access method listed that doesn't actually work

### AI Models
- [ ] **aiModels** list is current (check supported models page or docs)
- [ ] If `["any"]` — confirmed the tool is truly provider-agnostic (not just supporting 2-3)
- [ ] If specific models listed — confirmed each one works (not just "coming soon")
- [ ] Cross-check: if aiModels includes "claude" and aiAccess includes "oauth", the tool actually supports Claude OAuth (not just API key)

### Features
- [ ] Each `true` feature is verified against the tool's docs or UI:
  - `worktreeIsolation` — tool creates git worktrees for parallel work
  - `parallelAgents` — can run multiple AI agents simultaneously
  - `builtInBrowser` — has an integrated browser for previewing
  - `builtInTerminal` — has an integrated terminal
  - `diffReview` — shows diffs of AI-proposed changes before applying
  - `issueTracker` — integrates with issue tracking (Linear, GitHub Issues, Jira)
  - `remoteSSH` — supports remote/SSH development
  - `notifications` — sends notifications about agent progress
  - `providerAgnostic` — works with multiple AI model providers
  - `mcpSupport` — supports Model Context Protocol servers
  - `backgroundAgents` — can run agents in the background
- [ ] No feature marked `true` that is actually "planned" or "beta"
- [ ] Cross-check: if `providerAgnostic: true`, then `aiModels` should be `["any"]`

### Editorial
- [ ] **bestFor** — is this actually what the tool is best at? Would a user of this tool agree?
- [ ] **whyPeopleBounce** — is this a real reason people leave? Check GitHub issues, HN threads, Reddit complaints
- [ ] **confusedWith** — are these the tools people actually confuse this with? (check "X vs Y" search results)
- [ ] **notes** — if present, still accurate

### Traction & Funding (if present)
- [ ] **githubStars** — within 10% of current count (check repo)
- [ ] **funding** — verified against Crunchbase or official announcements
- [ ] **traction** — claim is verifiable (not just marketing copy)

## Category-Level Checks

After verifying individual tools, check each category:

- [ ] Every category has 2+ tools (except "monitor" which is flagged as Emerging)
- [ ] No tool is miscategorized (orchestrator vs terminal vs IDE confusion is common)
- [ ] Within each category, no two tools have identical descriptions
- [ ] The most popular/important tools in each category are present (check HN, Reddit, GitHub trending)

## Cross-Tool Consistency

- [ ] Similar tools have similar detail levels (don't have 5 features for Tool A and 0 for its competitor)
- [ ] Pricing details use consistent format ("Free tier, Pro $X/mo" not "free with paid option")
- [ ] Platform lists are consistent (if Tool A runs on macOS/linux, and Tool B is a fork, it probably does too)

## When to Re-Verify

- **Monthly**: Run `npm run validate:urls` to catch dead URLs
- **When a tool ships a major version**: Re-check features, pricing, platforms
- **When acquisition/shutdown news breaks**: Update status immediately
- **Before any public launch or Show HN**: Full pass on all tools

## Verification Tracking

After verifying a tool, update its `lastVerified` date in `src/data/tools.ts`.
Run `npm run validate` to confirm everything passes.
