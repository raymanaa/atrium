# Atrium — CS morning briefings

>  — the tenth. Every morning, each CS manager gets a briefing of the 3 accounts that need them today, with evidence.

## M0 — Design direction (LOCKED)

### Reference vibe
**Things 3 + Headspace + spa hotel keycard** — serene, intentional, morning-light. First project in the portfolio to go for "calm", not "confident".

### Typography
- **Display**: Instrument Serif — extreme elegant serif with expressive italic (distinct from every other serif used).
- **Body + UI**: Karla — warm humanist sans with distinctive italic; first portfolio use.
- **Mono**: IBM Plex Mono.

### Layout
- **Morning-briefing card** centered at top — a single "today's three accounts" card as the hero of the app.
- Below: at-risk grid, sorted by risk score.
- First portfolio project with a "briefing card" as primary UI.

### Palette — "Morning light"
- `--paper`:   `#eef3ed` (pale sage)
- `--paper-2`: `#dae4d9`
- `--card`:    `#ffffff`
- `--ink`:     `#1d3a2e` (deep forest)
- `--ink-2`:   `#445a4e`
- `--ink-3`:   `#7f8e84`
- `--line`:    `#cfd9ce`
- `--accent`:    `#b0762e` (warm bronze — primary)
- `--accent-soft`:`#f1e7d2`
- `--alarm`:     `#b4443c` (earthy red — at-risk)
- `--calm`:      `#417556` (confirm)

## Audience
- CS managers / directors
- Account managers with 40+ accounts each
- RevOps

## Real problem
A CSM has 40–120 accounts. Every morning's question is: "which three do I call today, and why?" Health-score dashboards are rarely actionable. Atrium ingests product usage + support tickets + CRM + contract signals, scores accounts, and writes a morning briefing with *three accounts to call today* — each with its top evidence.

## Stack
- Next 16 static export + Cloudflare Workers
- Instrument Serif + Karla + IBM Plex Mono
- framer-motion + lucide-react

## Landing requirements
1. **Animated hero diagram**: A morning briefing card materializing on a loop. First the date; then the three accounts flip in one at a time; then the evidence chips drop below each; then a bronze "CALL BY 11AM" pin stamps on the first.
2. **Inline product component**: A real `AtRiskGrid` with 6 accounts across risk tiers; clicking one opens its evidence panel.

## Milestones (compact)
- M0 — Design direction
- M1 — Scaffold + landing + deploy
- M2 — /app briefing + account reader
- M3 — Push + memory close-out
