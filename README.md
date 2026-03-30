# Bug Ball Blitz

**Physics-based soccer with insect athletes — play instantly on any device.**

<p align="center">
  <a href="https://aaronc1992.github.io/Bug-Ball-Blitz/">
    <img src="https://img.shields.io/badge/▶%20PLAY%20NOW-00d4ff?style=for-the-badge&logoColor=white" alt="Play Now" height="50">
  </a>
</p>

---

## What It Is

Bug Ball Blitz is a casual sports game where players pick an insect character and compete in fast-paced 2D soccer matches. It runs entirely in the browser — no download, no install, no account required. One tap and you're playing.

The game blends accessible pick-up-and-play mechanics with deep progression systems that drive long-term retention: a 20-level campaign, unlockable characters, 16 arenas, 24 cosmetic items, 20 goal celebrations, and 17 achievements.

## Why It Matters

**Instant access** — Runs on any device with a browser. Desktop, tablet, phone. No app store friction. Zero load time.

**Built for retention** — Tower Campaign progression, achievement-gated unlocks, and cosmetic customization create repeating engagement loops. Players come back to unlock the next bug, beat the next level, or earn the next celebration.

**Multiplayer-ready** — Local multiplayer works today (same device, split controls). The architecture supports extending to online multiplayer.

**Monetization surface area** — 24 cosmetic items, 20 celebrations, and 16 arenas form a natural cosmetic store. The game was designed with in-app purchase and ad integration points from the start.

## Product Overview

### Game Modes

| Mode | Description |
|------|------------|
| **Tower Campaign** | 20 progressive levels — 1v1, 1v2, and a final boss gauntlet |
| **Quick Play** | Instant match with customizable difficulty, bug, and arena |
| **Local Multiplayer** | Two players on one device (keyboard or dual touch) |
| **Arcade Mode** | Custom physics, multi-ball, weather effects, AI spectator matches, team modes |

### Content Depth

| Category | Count | Details |
|----------|-------|---------|
| Playable Characters | 5 | Each with unique speed, jump, power, and size stats |
| Arenas | 16 | Unlockable environments with distinct visual themes |
| Cosmetic Items | 24 | Hats, glasses, accessories — equipped per character |
| Goal Celebrations | 20 | Visual effects triggered on scoring (Fireworks, Phoenix, Black Hole, etc.) |
| Achievements | 17 | Progression milestones that gate new content unlocks |
| AI Difficulties | 4 | Easy, Medium, Hard, Pro — with coordinated multi-AI in 1v2 modes |

### Platform Support

| Platform | Status |
|----------|--------|
| Desktop browsers (Chrome, Firefox, Edge, Safari) | Live |
| Mobile browsers (iOS Safari, Android Chrome) | Live — touch controls auto-detected |
| Tablet | Live — responsive UI scaling |

## Technical Architecture

Built with **zero dependencies** — vanilla JavaScript (ES6 modules), HTML5 Canvas 2D, and CSS. No frameworks, no build tools, no server required. The entire game is static files that deploy anywhere.

| System | Implementation |
|--------|---------------|
| Rendering | HTML5 Canvas with 3D-shaded ball (truncated icosahedron geometry) |
| Physics | Fixed-timestep simulation with accumulator — gravity, collisions, momentum |
| AI | 4-tier difficulty system with multi-agent coordination for 1v2 modes |
| Replay | Instant replay captures the last 3 seconds before every goal |
| Persistence | localStorage-based save system with multi-profile support |
| Responsive | Auto-detects device type — adapts controls, layout, and UI scaling |
| Performance | Configurable quality presets for lower-end hardware |
| Weather | Dynamic rain, snow, and wind systems that affect ball physics |

### Why Zero Dependencies Matters

- **No supply chain risk** — nothing to audit, nothing to break
- **Instant deployment** — push static files to any CDN or hosting provider
- **Tiny footprint** — the entire game is a handful of JS files
- **Full control** — every system is purpose-built and optimizable

## Growth Opportunities

**Online multiplayer** — The game loop and physics are deterministic. Adding netcode for real-time online matches is a natural next step that would significantly expand the addressable audience.

**Mobile app distribution** — The codebase wraps cleanly into native apps via Capacitor/Cordova for App Store and Google Play distribution, opening up push notifications, in-app purchases, and broader discovery.

**Cosmetic store** — The existing 24 cosmetics, 20 celebrations, and 16 arenas are structured for monetization. Adding a soft currency and storefront is a UI layer on top of systems that already exist.

**Seasonal content** — The arena and cosmetic systems are modular. New themed content (holiday events, limited-time arenas, seasonal celebrations) can be shipped without touching core game code.

**Competitive/social features** — Leaderboards, tournaments, replays sharing, and friend challenges would deepen engagement for the competitive segment.

## Contact

Built by **Aaron C.** — [GitHub Profile](https://github.com/AaronC1992)

---

<p align="center">
  <a href="https://aaronc1992.github.io/Bug-Ball-Blitz/">
    <img src="https://img.shields.io/badge/▶%20PLAY%20NOW-00d4ff?style=for-the-badge&logoColor=white" alt="Play Now" height="40">
  </a>
</p>
