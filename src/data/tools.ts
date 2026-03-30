import type { Tool } from "../types";

export const tools: Tool[] = [
  // ──────────────────────────────────────────────
  // ORCHESTRATORS
  // ──────────────────────────────────────────────

  {
    slug: "emdash",
    name: "emdash",
    url: "https://emdash.ai",
    githubUrl: "https://github.com/nichochar/emdash",
    description:
      "YC W26 startup. Multi-agent orchestrator for macOS that coordinates parallel Claude Code sessions with worktree isolation.",
    primaryCategory: "orchestrator",
    platforms: ["macos"],
    license: "agpl3",
    pricing: { model: "free" },
    status: "active",
    lastVerified: "2026-03-30",
    features: {
      worktreeIsolation: true,
      parallelAgents: true,
      diffReview: true,
      notifications: true,
    },
    bestFor:
      "Parallel agent orchestration with worktree isolation on macOS",
    whyPeopleBounce: "macOS only, AGPL license",
  },

  {
    slug: "superset",
    name: "Superset",
    url: "https://github.com/superset-ai/superset",
    description:
      "Multi-agent terminal orchestrator for running AI coding agents in parallel.",
    primaryCategory: "orchestrator",
    platforms: ["macos", "linux"],
    license: "mit",
    pricing: { model: "free" },
    status: "active",
    lastVerified: "2026-03-30",
    features: {
      parallelAgents: true,
      builtInTerminal: true,
    },
    bestFor: "Lightweight multi-agent orchestration in terminal",
  },

  {
    slug: "t3-code",
    name: "T3 Code",
    url: "https://t3.chat/code",
    description:
      "Agent orchestrator that coordinates AI agents for collaborative coding workflows.",
    primaryCategory: "orchestrator",
    platforms: ["macos", "linux"],
    license: "mit",
    pricing: { model: "free" },
    status: "active",
    lastVerified: "2026-03-30",
    features: {
      parallelAgents: true,
    },
    bestFor: "Lightweight agent orchestration with multi-model support",
    whyPeopleBounce: "Newer entrant, smaller community than Emdash",
  },

  {
    slug: "conductor",
    name: "Conductor",
    url: "https://github.com/conductor-ai/conductor",
    description:
      "Open-source agent orchestrator that coordinates parallel AI agents across providers.",
    primaryCategory: "orchestrator",
    platforms: ["macos", "linux", "windows"],
    license: "mit",
    pricing: { model: "free" },
    status: "active",
    lastVerified: "2026-03-30",
    features: {
      parallelAgents: true,
      providerAgnostic: true,
    },
    bestFor: "Cross-platform agent orchestration with provider flexibility",
    whyPeopleBounce: "Early stage, fewer integrations than established tools",
  },

  {
    slug: "maestro",
    name: "Maestro",
    url: "https://github.com/maestro-org/maestro",
    githubUrl: "https://github.com/maestro-org/maestro",
    description: "Multi-agent orchestrator that coordinates AI coding agents with task decomposition and parallel execution.",
    primaryCategory: "orchestrator",
    platforms: ["macos", "linux"],
    license: "mit",
    pricing: { model: "free" },
    status: "active",
    lastVerified: "2026-03-30",
    features: {
      parallelAgents: true,
      providerAgnostic: true,
    },
    bestFor: "Task decomposition across multiple agents with provider flexibility",
    whyPeopleBounce: "Newer project, documentation still catching up",
  },

  {
    slug: "dmux",
    name: "dmux",
    url: "https://github.com/dmux-io/dmux",
    githubUrl: "https://github.com/dmux-io/dmux",
    description: "Terminal multiplexer designed for running multiple AI agent sessions side by side with shared context.",
    primaryCategory: "orchestrator",
    platforms: ["macos", "linux"],
    license: "mit",
    pricing: { model: "free" },
    status: "active",
    lastVerified: "2026-03-30",
    features: {
      parallelAgents: true,
      builtInTerminal: true,
    },
    bestFor: "Side-by-side agent sessions with shared terminal context",
    whyPeopleBounce: "Niche use case, requires comfort with terminal multiplexing",
  },

  // ──────────────────────────────────────────────
  // TERMINALS
  // ──────────────────────────────────────────────

  {
    slug: "ghostty",
    name: "Ghostty",
    url: "https://ghostty.org",
    githubUrl: "https://github.com/ghostty-org/ghostty",
    githubStars: 46700,
    description:
      "Fast, GPU-accelerated terminal emulator created by Mitchell Hashimoto (HashiCorp founder). Not AI-focused but the native foundation that AI terminals build on.",
    primaryCategory: "terminal",
    platforms: ["macos", "linux"],
    license: "mit",
    pricing: { model: "free" },
    status: "active",
    lastVerified: "2026-03-30",
    bestFor: "Fast, native terminal that AI tools build on top of",
    whyPeopleBounce:
      "No built-in AI features — it's a foundation, not an AI tool",
  },

  {
    slug: "cmux",
    name: "cmux",
    url: "https://github.com/nichochar/cmux",
    description:
      "AI-native terminal multiplexer built on libghostty with awareness of AI agent sessions.",
    primaryCategory: "terminal",
    platforms: ["macos", "linux"],
    license: "mit",
    pricing: { model: "free" },
    status: "active",
    lastVerified: "2026-03-30",
    features: {
      parallelAgents: true,
      builtInTerminal: true,
    },
    bestFor: "Terminal multiplexing with AI agent awareness",
    whyPeopleBounce: "Newer project, still maturing",
  },

  {
    slug: "warp",
    name: "Warp",
    url: "https://www.warp.dev",
    description:
      "AI-powered terminal with modern UX, team collaboration features, and built-in AI command assistance.",
    primaryCategory: "terminal",
    secondaryCategories: ["orchestrator"],
    platforms: ["macos", "linux", "windows"],
    license: "proprietary",
    pricing: {
      model: "freemium",
      details: "Free tier, Pro $18/month",
    },
    status: "active",
    lastVerified: "2026-03-30",
    funding: "$73.6M Series B",
    features: {
      builtInTerminal: true,
      mcpSupport: true,
    },
    bestFor: "AI-augmented terminal with polished UX and team features",
    whyPeopleBounce: "Proprietary, Electron-based, telemetry concerns",
  },

  {
    slug: "calyx",
    name: "Calyx",
    url: "https://github.com/calyx-term/calyx",
    githubUrl: "https://github.com/calyx-term/calyx",
    description: "MIT-licensed terminal emulator built on libghostty with AI-aware session management.",
    primaryCategory: "terminal",
    platforms: ["macos", "linux"],
    license: "mit",
    pricing: { model: "free" },
    status: "active",
    lastVerified: "2026-03-30",
    features: {
      builtInTerminal: true,
    },
    bestFor: "MIT-licensed Ghostty alternative with AI session awareness",
    whyPeopleBounce: "Smaller community than Ghostty, fewer features",
  },

  // ──────────────────────────────────────────────
  // IDEs
  // ──────────────────────────────────────────────

  {
    slug: "cursor",
    name: "Cursor",
    url: "https://cursor.com",
    description:
      "AI-first code editor (VS Code fork) with tab completion, inline chat, and agentic coding mode. Rumored $29.3B valuation.",
    primaryCategory: "ide",
    platforms: ["macos", "linux", "windows"],
    license: "proprietary",
    pricing: {
      model: "freemium",
      startingPrice: "$20/month",
      details: "Free tier, Pro $20/month, Business $40/month",
    },
    status: "active",
    lastVerified: "2026-03-30",
    traction: "Most popular AI IDE by market share",
    features: {
      builtInTerminal: true,
      diffReview: true,
      mcpSupport: true,
      backgroundAgents: true,
    },
    bestFor:
      "Full AI IDE experience with tab completion, chat, and agent mode",
    whyPeopleBounce:
      "VS Code fork lock-in, pricing adds up for teams",
  },

  {
    slug: "windsurf",
    name: "Windsurf",
    url: "https://windsurf.com",
    description:
      "AI IDE (VS Code fork) with Cascade flow-based agent, acquired by Cognition (Devin).",
    primaryCategory: "ide",
    platforms: ["macos", "linux", "windows"],
    license: "proprietary",
    pricing: {
      model: "freemium",
      startingPrice: "$15/month",
    },
    status: "acquired",
    lastVerified: "2026-03-30",
    features: {
      builtInTerminal: true,
      diffReview: true,
      mcpSupport: true,
    },
    bestFor: "AI IDE with Cascade flow-based agent",
    whyPeopleBounce:
      "Uncertain future after Cognition acquisition",
  },

  {
    slug: "zed",
    name: "Zed",
    url: "https://zed.dev",
    githubUrl: "https://github.com/zed-industries/zed",
    description:
      "High-performance Rust-based editor with integrated AI features and real-time collaboration.",
    primaryCategory: "ide",
    platforms: ["macos", "linux"],
    license: "other",
    pricing: {
      model: "freemium",
      details: "Free editor, Zed AI add-on",
    },
    status: "active",
    lastVerified: "2026-03-30",
    features: {
      builtInTerminal: true,
      diffReview: true,
      providerAgnostic: true,
      mcpSupport: true,
    },
    bestFor:
      "Fast native editor with integrated AI and collaboration",
    whyPeopleBounce:
      "No Windows support, extension ecosystem still growing",
  },

  {
    slug: "kiro",
    name: "Kiro",
    url: "https://kiro.dev",
    description:
      "AI IDE by AWS/Amazon (VS Code based) with spec-driven development approach and steering files.",
    primaryCategory: "ide",
    platforms: ["macos", "linux", "windows"],
    license: "proprietary",
    pricing: { model: "freemium" },
    status: "active",
    lastVerified: "2026-03-30",
    features: {
      builtInTerminal: true,
      diffReview: true,
      mcpSupport: true,
    },
    notes: "Spec-driven development approach with steering files",
    bestFor: "Spec-driven AI development with AWS ecosystem integration",
    whyPeopleBounce: "Amazon-backed, unclear long-term independence",
  },

  {
    slug: "antigravity",
    name: "Google Antigravity",
    url: "https://idx.google.com",
    description: "Google's cloud-based AI IDE (Project IDX evolution) with Gemini integration and Firebase deployment.",
    primaryCategory: "ide",
    platforms: ["web"],
    license: "proprietary",
    pricing: { model: "freemium" },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["gemini"],
    features: {
      builtInTerminal: true,
      builtInBrowser: true,
      mcpSupport: true,
    },
    bestFor: "Google ecosystem developers wanting cloud-native AI IDE",
    whyPeopleBounce: "Web-only, Google ecosystem lock-in, early stage",
  },

  {
    slug: "jetbrains-air",
    name: "JetBrains Air",
    url: "https://www.jetbrains.com/air/",
    description: "JetBrains' AI-native lightweight IDE built from scratch with deep AI integration across all workflows.",
    primaryCategory: "ide",
    platforms: ["macos", "linux", "windows"],
    license: "proprietary",
    pricing: { model: "freemium" },
    status: "beta",
    lastVerified: "2026-03-30",
    features: {
      builtInTerminal: true,
      diffReview: true,
      mcpSupport: true,
    },
    bestFor: "JetBrains users wanting a lightweight AI-first editor",
    whyPeopleBounce: "Beta stage, unclear how it relates to existing JetBrains IDEs",
  },

  // ──────────────────────────────────────────────
  // CLI AGENTS
  // ──────────────────────────────────────────────

  {
    slug: "claude-code",
    name: "Claude Code",
    url: "https://claude.ai/code",
    githubUrl: "https://github.com/anthropics/claude-code",
    description:
      "Anthropic's CLI coding agent with deep codebase understanding, tool use, and top-tier coding performance.",
    primaryCategory: "cli-agent",
    platforms: ["macos", "linux", "windows"],
    license: "proprietary",
    pricing: {
      model: "byok",
      details: "Included with Claude Pro/Max/Team plans",
    },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["claude"],
    features: {
      worktreeIsolation: true,
      parallelAgents: true,
      diffReview: true,
      mcpSupport: true,
      backgroundAgents: true,
    },
    bestFor:
      "Agentic coding with deep codebase understanding and tool use",
    whyPeopleBounce:
      "Claude-only, usage-based pricing can spike",
  },

  {
    slug: "codex-cli",
    name: "Codex CLI",
    url: "https://github.com/openai/codex",
    githubUrl: "https://github.com/openai/codex",
    description:
      "OpenAI's open-source CLI coding agent with sandboxed execution.",
    primaryCategory: "cli-agent",
    platforms: ["macos", "linux"],
    license: "mit",
    pricing: { model: "byok" },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["codex"],
    features: {
      diffReview: true,
      mcpSupport: true,
    },
    bestFor:
      "OpenAI-native CLI agent with sandboxed execution",
    whyPeopleBounce:
      "OpenAI models only, newer than Claude Code",
  },

  {
    slug: "gemini-cli",
    name: "Gemini CLI",
    url: "https://github.com/google-gemini/gemini-cli",
    githubUrl: "https://github.com/google-gemini/gemini-cli",
    description:
      "Google's CLI agent for Gemini models with generous free tier and Google ecosystem integration.",
    primaryCategory: "cli-agent",
    platforms: ["macos", "linux", "windows"],
    license: "apache2",
    pricing: {
      model: "byok",
      details: "Free tier with Gemini API",
    },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["gemini"],
    features: {
      diffReview: true,
      mcpSupport: true,
    },
    bestFor:
      "Google ecosystem integration with generous free tier",
    whyPeopleBounce:
      "Gemini models only, less agentic than competitors",
  },

  {
    slug: "opencode",
    name: "OpenCode",
    url: "https://github.com/opencode-ai/opencode",
    githubUrl: "https://github.com/opencode-ai/opencode",
    githubStars: 120000,
    description:
      "Open-source TUI coding agent with provider-agnostic model support.",
    primaryCategory: "cli-agent",
    platforms: ["macos", "linux"],
    license: "mit",
    pricing: { model: "byok" },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["any"],
    features: {
      providerAgnostic: true,
      diffReview: true,
    },
    bestFor: "Open-source TUI agent with any model provider",
    whyPeopleBounce: "TUI-only, less polished than commercial alternatives",
  },

  {
    slug: "aider",
    name: "Aider",
    url: "https://aider.chat",
    githubUrl: "https://github.com/Aider-AI/aider",
    description:
      "AI pair programming in your terminal with deep git integration and provider-agnostic model support.",
    primaryCategory: "cli-agent",
    platforms: ["macos", "linux", "windows"],
    license: "apache2",
    pricing: { model: "byok" },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["any"],
    features: {
      providerAgnostic: true,
      diffReview: true,
    },
    bestFor:
      "Provider-agnostic AI pair programming with git integration",
    whyPeopleBounce:
      "CLI-only UX, learning curve for non-terminal users",
  },

  {
    slug: "goose",
    name: "Goose",
    url: "https://github.com/block/goose",
    githubUrl: "https://github.com/block/goose",
    description:
      "Block's open-source AI agent with MCP support and provider-agnostic model access.",
    primaryCategory: "cli-agent",
    platforms: ["macos", "linux"],
    license: "apache2",
    pricing: { model: "byok" },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["any"],
    funding: "Block (Square)",
    features: {
      providerAgnostic: true,
      mcpSupport: true,
    },
    bestFor: "MCP-first extensible agent from a major fintech company",
    whyPeopleBounce: "Block backing raises questions about long-term OSS commitment",
  },

  {
    slug: "amp",
    name: "Amp",
    url: "https://ampcode.com",
    description:
      "Sourcegraph's AI coding agent with background agents and multi-provider model support.",
    primaryCategory: "cli-agent",
    platforms: ["macos", "linux", "windows", "web"],
    license: "proprietary",
    pricing: {
      model: "freemium",
      details: "Free tier, Pro plans available",
    },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["claude", "codex", "gemini"],
    features: {
      diffReview: true,
      backgroundAgents: true,
      mcpSupport: true,
    },
    bestFor: "Multi-provider agent with background execution and web access",
    whyPeopleBounce: "Sourcegraph pivot, pricing model still evolving",
  },

  {
    slug: "copilot-cli",
    name: "GitHub Copilot CLI",
    url: "https://github.com/features/copilot",
    description:
      "GitHub/Microsoft's CLI coding agent with multi-model support and deep GitHub integration.",
    primaryCategory: "cli-agent",
    platforms: ["macos", "linux", "windows"],
    license: "proprietary",
    pricing: {
      model: "freemium",
      startingPrice: "$10/month",
      details: "Free tier, Individual $10/mo, Business $19/mo",
    },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["codex", "claude", "gemini"],
    features: {
      diffReview: true,
      mcpSupport: true,
    },
    bestFor: "GitHub-native agent with deep repo and PR integration",
    whyPeopleBounce: "Less autonomous than Claude Code, tied to GitHub ecosystem",
  },

  {
    slug: "junie",
    name: "Junie",
    url: "https://www.jetbrains.com/junie/",
    description: "JetBrains' AI coding agent that works inside JetBrains IDEs with deep project understanding.",
    primaryCategory: "cli-agent",
    platforms: ["macos", "linux", "windows"],
    license: "proprietary",
    pricing: { model: "freemium" },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["claude", "gemini"],
    features: {
      diffReview: true,
      builtInTerminal: true,
    },
    bestFor: "JetBrains IDE users wanting an integrated AI agent",
    whyPeopleBounce: "JetBrains-only, not usable outside their IDE ecosystem",
  },

  {
    slug: "gptme",
    name: "gptme",
    url: "https://github.com/ErikBjare/gptme",
    githubUrl: "https://github.com/ErikBjare/gptme",
    description: "Open-source personal AI assistant in the terminal with tool use, self-correction, and provider-agnostic model support.",
    primaryCategory: "cli-agent",
    platforms: ["macos", "linux"],
    license: "mit",
    pricing: { model: "byok" },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["any"],
    features: {
      providerAgnostic: true,
      builtInBrowser: true,
    },
    bestFor: "Personal AI terminal assistant with broad tool integration",
    whyPeopleBounce: "Smaller community, less coding-specific than dedicated agents",
  },

  {
    slug: "qwen-code",
    name: "Qwen Code",
    url: "https://github.com/QwenLM/qwen-code",
    githubUrl: "https://github.com/QwenLM/qwen-code",
    description: "Alibaba's open-source CLI coding agent powered by Qwen models with multilingual support.",
    primaryCategory: "cli-agent",
    platforms: ["macos", "linux", "windows"],
    license: "apache2",
    pricing: { model: "byok" },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["any"],
    features: {
      diffReview: true,
      providerAgnostic: true,
    },
    bestFor: "Multilingual coding with Qwen models and open-source flexibility",
    whyPeopleBounce: "Less established in Western markets, Qwen model ecosystem",
  },

  // ──────────────────────────────────────────────
  // EXTENSIONS
  // ──────────────────────────────────────────────

  {
    slug: "cline",
    name: "Cline",
    url: "https://cline.bot",
    githubUrl: "https://github.com/cline/cline",
    description:
      "Autonomous AI coding agent for VS Code with provider-agnostic model support, browser preview, and MCP integration.",
    primaryCategory: "extension",
    platforms: ["macos", "linux", "windows"],
    license: "apache2",
    pricing: { model: "byok" },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["any"],
    features: {
      providerAgnostic: true,
      diffReview: true,
      mcpSupport: true,
      builtInBrowser: true,
      builtInTerminal: true,
    },
    bestFor: "Autonomous AI agent inside VS Code with browser preview",
    whyPeopleBounce: "BYOK cost can be unpredictable, resource-heavy in VS Code",
  },

  {
    slug: "roo-code",
    name: "Roo Code",
    url: "https://roocode.com",
    githubUrl: "https://github.com/RooVetGit/Roo-Code",
    description:
      "Fork of Cline with added features, provider-agnostic model support, and enhanced agent capabilities.",
    primaryCategory: "extension",
    platforms: ["macos", "linux", "windows"],
    license: "apache2",
    pricing: { model: "byok" },
    status: "active",
    lastVerified: "2026-03-30",
    aiModels: ["any"],
    features: {
      providerAgnostic: true,
      diffReview: true,
      mcpSupport: true,
      builtInBrowser: true,
      builtInTerminal: true,
    },
    bestFor: "Enhanced Cline fork with additional agent modes and features",
    whyPeopleBounce: "Fork sustainability concerns, diverging from upstream",
  },

  // ──────────────────────────────────────────────
  // CLOUD
  // ──────────────────────────────────────────────

  {
    slug: "devin",
    name: "Devin",
    url: "https://devin.ai",
    description:
      "Cognition's autonomous AI software engineer that runs in the cloud with its own browser, terminal, and issue tracking.",
    primaryCategory: "cloud",
    platforms: ["web"],
    license: "proprietary",
    pricing: {
      model: "paid",
      startingPrice: "$500/month",
      details: "Team plans, usage-based",
    },
    status: "active",
    lastVerified: "2026-03-30",
    funding: "Cognition Labs, $175M raised",
    features: {
      backgroundAgents: true,
      builtInBrowser: true,
      builtInTerminal: true,
      issueTracker: true,
    },
    bestFor: "Fully autonomous cloud-based AI engineer for delegated tasks",
    whyPeopleBounce: "$500/month entry price, output quality inconsistent for complex tasks",
  },

  {
    slug: "replit",
    name: "Replit",
    url: "https://replit.com",
    description:
      "AI-powered cloud IDE with instant deployment, collaboration, and full development environment in the browser.",
    primaryCategory: "cloud",
    platforms: ["web"],
    license: "proprietary",
    pricing: {
      model: "freemium",
      details: "Free tier, Core $20/mo, Teams $40/mo",
    },
    status: "active",
    lastVerified: "2026-03-30",
    features: {
      builtInTerminal: true,
      builtInBrowser: true,
      backgroundAgents: true,
    },
    bestFor: "Zero-setup cloud development with instant deployment",
    whyPeopleBounce: "Performance limitations for large projects, vendor lock-in",
  },

  {
    slug: "lovable",
    name: "Lovable",
    url: "https://lovable.dev",
    description:
      "AI full-stack app builder that generates and deploys web applications from natural language prompts.",
    primaryCategory: "cloud",
    platforms: ["web"],
    license: "proprietary",
    pricing: {
      model: "freemium",
      startingPrice: "$20/month",
    },
    status: "active",
    lastVerified: "2026-03-30",
    features: {
      builtInBrowser: true,
      backgroundAgents: true,
    },
    bestFor: "Non-technical founders building full-stack web apps from prompts",
    whyPeopleBounce: "Generated code quality varies, limited customization for experienced devs",
  },

  {
    slug: "emergent",
    name: "Emergent",
    url: "https://emergent.sh",
    description: "AI-powered development platform reportedly reaching $100M ARR, focused on enterprise AI application development.",
    primaryCategory: "cloud",
    platforms: ["web"],
    license: "proprietary",
    pricing: {
      model: "paid",
      details: "Enterprise pricing",
    },
    status: "active",
    lastVerified: "2026-03-30",
    traction: "Reported $100M ARR",
    features: {
      builtInBrowser: true,
      builtInTerminal: true,
      backgroundAgents: true,
    },
    bestFor: "Enterprise teams building AI-powered applications at scale",
    whyPeopleBounce: "Enterprise-focused pricing, less suited for individual developers",
  },

  // ──────────────────────────────────────────────
  // MONITORS
  // ──────────────────────────────────────────────

  {
    slug: "solo",
    name: "Solo",
    url: "https://soloproxy.dev",
    description:
      "AI agent activity monitor that tracks what agents are doing across tools and sessions.",
    primaryCategory: "monitor",
    platforms: ["macos"],
    license: "proprietary",
    pricing: { model: "free" },
    status: "beta",
    lastVerified: "2026-03-30",
    bestFor: "Visibility into what AI agents are doing across your machine",
    whyPeopleBounce: "macOS only, beta stage, limited integrations",
  },
];
