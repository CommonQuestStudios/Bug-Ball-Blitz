# Bug Ball Blitz

A physics-based soccer game starring insect athletes — inspired by classic Slime Soccer.

## Play Now

**[Play in Browser](https://aaronc1992.github.io/Bug-Ball-Blitz/)**

## Game Modes

**Tower Campaign** — Progress through 20 levels of increasing difficulty. Early levels are 1v1, mid-levels introduce 1v2 battles against two AI opponents, and Level 20 is a boss gauntlet against every bug back-to-back.

**Quick Play** — Pick a bug, an arena, a difficulty (Easy / Medium / Hard / Pro), and jump straight into a match. Customize match length or set a goal target.

**Local Multiplayer** — Two players on one device. Player 1 uses WASD, Player 2 uses Arrow Keys. On mobile/tablet, dual touch controls appear automatically.

**Arcade Mode** — Tweak everything: gravity, ball size, player size, ball speed, weather effects, number of balls (up to 3). Set up AI-only spectator matches or team modes like 2v1 and 2v2.

## Bugs

Five playable bugs, each with different stats for speed, jump, power, and size:

| Bug | Speed | Jump | Power | Size | Style |
|-----|-------|------|-------|------|-------|
| Ladybug | Balanced | Balanced | Balanced | Small | All-rounder starter |
| Grasshopper | High | Very High | Medium | Medium | Aerial specialist |
| Beetle | Low | Low | Very High | Large | Power hitter |
| Ant | Very High | Low | Low | Tiny | Speed demon |
| Spider | High | High | High | Medium | Agile all-rounder |

Bugs are unlocked through achievements — winning matches, scoring goals, and completing challenges.

## Arenas

16 arenas ranging from Grass Field, Dirt Patch, and Leaf Arena (available from the start) to unlockable environments like Desert Oasis, Snowy Park, Volcanic Rock, Mushroom Forest, Beach Sand, Moon Crater, Autumn Leaves, Ice Cave, Garden Pond, Neon City, Candy Land, Jungle Vines, and Crystal Cavern.

## Customization

**Cosmetics** — 24 items across hats (11), glasses (3), and accessories (10). Equip items like Top Hat, Crown, Viking Helmet, Cape, Wings, Lightning Aura, and more.

**Celebrations** — 20 goal celebrations including Fireworks, Disco Party, Lightning Strike, Rainbow Wave, Meteor Shower, Aurora Borealis, Galaxy Swirl, Phoenix, Black Hole, and others.

**Bug Animations** — Special animations that play on your bug when you score.

## Achievements

17 achievements tracking goals, wins, perfect games, and milestones. Achievements unlock new bugs, arenas, and cosmetics.

## Controls

**Keyboard** — Player 1: A/D to move, W or Space to jump. Player 2: Arrow Keys to move, Up Arrow to jump.

**Touch** — Virtual joystick and jump button appear automatically on mobile devices.

## How to Run Locally

Open the project folder in VS Code and use the Live Server extension, or just open `index.html` directly in a browser. No build step or dependencies required.

```bash
# Or use a local server
python -m http.server 8000
# Open http://localhost:8000
```

## Project Structure

```
index.html           — Game page
style.css            — Styling and responsive layout
main.js              — Core game engine, rendering, state management
physics.js           — Physics simulation (gravity, collisions, ball movement)
ai.js                — AI opponents (4 difficulty levels, multi-AI teamwork)
bugs.js              — Bug definitions with inline SVG art and stats
arenas.js            — Arena backgrounds and rendering
ui.js                — Menu system and screen management
saveSystem.js        — Profile persistence via localStorage
audioManager.js      — Sound effects and haptic feedback
achievementManager.js — Achievement tracking and unlock logic
particles.js         — Particle effects (kick dust, sparks, trails)
celebrations.js      — Goal celebration animations
bugAnimations.js     — Scored-goal bug animations
cosmetics.js         — Cosmetic items and hitbox modifiers
menuBackground.js    — Animated AI match on the menu screen
qualitySettings.js   — Graphics quality presets
```

## Technical Details

Built with vanilla JavaScript (ES6 modules), HTML5 Canvas for rendering, and CSS for UI. No frameworks or external dependencies. All artwork is inline SVG. Game state persists via localStorage with support for multiple player profiles.

Key systems:
- Fixed-timestep physics loop with accumulator
- 3D-shaded soccer ball with truncated icosahedron geometry
- Instant replay system (records last 3 seconds before each goal)
- Responsive design across desktop, tablet, and mobile
- Weather effects (rain, snow, wind) that affect ball physics
- Quality settings for performance tuning on lower-end devices

## License

Portfolio project — feel free to use, modify, and learn from the code.
