# Awesome Agent IDEs

Navigate the AI coding tool landscape. Compare orchestrators, terminals, IDEs, CLI agents, and more.

**The taxonomy IS the product.** The space has 7 distinct categories, and helping you understand which layer you need is 80% of the value.

## Categories

- **Orchestrators** — Coordinate multiple AI agents working in parallel
- **Terminals** — AI-enhanced terminal emulators and multiplexers
- **IDEs** — Full integrated development environments with AI built in
- **CLI Agents** — AI coding assistants that run in your existing terminal
- **Extensions** — AI plugins for existing editors like VS Code
- **Cloud Platforms** — Browser-based AI development environments
- **Monitors** — Tools for observing and managing AI agent activity

## Tech Stack

- [Astro](https://astro.build) — Static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — Styling
- TypeScript — Data schema and type safety
- Vercel — Hosting

## Development

```sh
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production
```

## Contributing

Each tool is a single entry in `src/data/tools.ts`. To add a tool:

1. Fork the repo
2. Add your entry with all required fields (slug, name, url, description, primaryCategory, platforms, license, pricing, status, lastVerified)
3. Run `npm run build` to verify
4. Open a PR

## License

MIT
