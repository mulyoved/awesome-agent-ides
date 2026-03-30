export type Category = "orchestrator" | "terminal" | "ide" | "cli-agent" | "extension" | "cloud" | "monitor";
export type Platform = "macos" | "windows" | "linux" | "web";
export type License = "mit" | "apache2" | "agpl3" | "bsd" | "proprietary" | "other";
export type Status = "active" | "beta" | "deprecated" | "acquired";

export interface Pricing {
  model: "free" | "freemium" | "paid" | "byok";
  startingPrice?: string;
  details?: string;
}

export interface Features {
  worktreeIsolation?: boolean;
  parallelAgents?: boolean;
  builtInBrowser?: boolean;
  builtInTerminal?: boolean;
  diffReview?: boolean;
  issueTracker?: boolean;
  remoteSSH?: boolean;
  notifications?: boolean;
  providerAgnostic?: boolean;
  mcpSupport?: boolean;
  backgroundAgents?: boolean;
}

export interface Tool {
  slug: string;
  name: string;
  url: string;
  description: string;
  primaryCategory: Category;
  platforms: Platform[];
  license: License;
  pricing: Pricing;
  status: Status;
  lastVerified: string;
  secondaryCategories?: Category[];
  githubUrl?: string;
  githubStars?: number;
  aiModels?: string[];
  features?: Features;
  funding?: string;
  team?: string;
  traction?: string;
  notes?: string;
  evidenceLinks?: string[];
  confusedWith?: string[];
  bestFor?: string;
  whyPeopleBounce?: string;
}

export interface CategoryInfo {
  slug: Category;
  name: string;
  description: string;
  icon: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { slug: "orchestrator", name: "Orchestrators", description: "Coordinate multiple AI agents working in parallel across your codebase", icon: "OR" },
  { slug: "terminal", name: "Terminals", description: "AI-enhanced terminal emulators and multiplexers", icon: "TM" },
  { slug: "ide", name: "IDEs", description: "Full integrated development environments with AI built in", icon: "ID" },
  { slug: "cli-agent", name: "CLI Agents", description: "AI coding assistants that run in your existing terminal", icon: "CL" },
  { slug: "extension", name: "Extensions", description: "AI plugins for existing editors like VS Code", icon: "EX" },
  { slug: "cloud", name: "Cloud Platforms", description: "Browser-based AI development environments", icon: "CP" },
  { slug: "monitor", name: "Monitors", description: "Tools for observing and managing AI agent activity", icon: "MN" },
];

export function getCategoryInfo(slug: Category): CategoryInfo {
  return CATEGORIES.find(c => c.slug === slug)!;
}

export const FEATURE_LABELS: Record<keyof Features, string> = {
  worktreeIsolation: "Worktree Isolation",
  parallelAgents: "Parallel Agents",
  builtInBrowser: "Built-in Browser",
  builtInTerminal: "Built-in Terminal",
  diffReview: "Diff Review",
  issueTracker: "Issue Tracker",
  remoteSSH: "Remote/SSH",
  notifications: "Notifications",
  providerAgnostic: "Provider Agnostic",
  mcpSupport: "MCP Support",
  backgroundAgents: "Background Agents",
};
