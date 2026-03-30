# Design System — Awesome Agent IDEs

## Product Context
- **What this is:** A data-driven comparison site for the AI coding tool landscape
- **Who it's for:** Technical developers choosing between AI coding tools
- **Space/industry:** Developer tools, AI coding assistants
- **Project type:** Static reference/comparison site (like Best of JS)

## Aesthetic Direction
- **Direction:** Industrial/Utilitarian
- **Decoration level:** Minimal. Thin rule lines, monospace accents, no illustrations.
- **Mood:** A terminal-native reference system. Feels like the tool was built by an engineer who needed it, not designed by a marketing team.
- **Reference sites:** bestofjs.org, caniuse.com

## Typography
- **Display/Hero:** IBM Plex Sans 600 — industrial, serious, infrastructure-grade
- **Body:** IBM Plex Sans 400/500 — same family, dense and readable at all sizes
- **UI/Labels:** IBM Plex Sans 500 — same as body
- **Data/Tables:** IBM Plex Mono 400 — tabular-nums, perfect pairing with Plex Sans
- **Code:** IBM Plex Mono 400
- **Loading:** Google Fonts `family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500`
- **Scale:** 12px (meta) / 13px (small) / 14px (body) / 15px (large body) / 20px (h3) / 24px (h2) / 36px (h1) / 48px (hero)

## Color
- **Approach:** Restrained. One accent + neutrals. Color is rare and meaningful.
- **Background:** #070a08 — near-black with green undertone
- **Surface:** #0c120e — dark panel
- **Surface Hover:** #141e18 — visible on interaction
- **Border:** #1a2a1e — warm green-tinted separator
- **Text:** #e0ece4 — off-white with slight green warmth
- **Text Muted:** #5a7a64 — subdued green-gray
- **Accent:** #4ade80 — phosphor green (terminal)
- **Accent Hover:** #86efac — lighter green
- **Semantic:**
  - Success: #4ade80 (same as accent)
  - Warning: #fbbf24 (amber)
  - Error: #f87171 (red)
  - Info: #60a5fa (steel blue)
- **Dark mode:** This IS the dark mode. No light mode for v1.

## Spacing
- **Base unit:** 4px
- **Density:** Comfortable
- **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64)

## Layout
- **Approach:** Grid-disciplined with left-anchored asymmetry
- **Grid:** Single column content, max-width constrained
- **Max content width:** 1200px
- **Border radius:** 0px everywhere. Square corners only. No rounded cards.
- **Category marks:** Two-letter monospace codes (OR, TM, ID, CL, EX, CP, MN) instead of emoji

## Motion
- **Approach:** Minimal-functional
- **Easing:** enter(ease-out) exit(ease-in)
- **Duration:** micro(50ms) short(150ms) — hover transitions only, no scroll animations

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-30 | Initial design system | Created by /design-consultation. IBM Plex + Phosphor green. |
| 2026-03-30 | Rejected Instrument Serif | Too editorial/magazine. Wanted engineering-solid feel. |
| 2026-03-30 | Chose IBM Plex Sans over Space Grotesk and Geist | Most industrial and serious of the three options. |
| 2026-03-30 | Chose Phosphor over Warm Gold and Steel | Terminal/hacker aesthetic fits the developer audience. |
| 2026-03-30 | Two-letter category codes over emoji | Reference-system aesthetic, consistent rendering. |
| 2026-03-30 | Square corners, no border-radius | Industrial feel, anti-AI-slop signal. |
