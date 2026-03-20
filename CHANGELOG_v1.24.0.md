# Bug Ball Blitz v1.24.0 — Changelog

## New Features
- **Match Modes**: Choose from Normal, Sudden Death (first goal wins), Golden Goal (next goal wins in overtime), and First to 3 (no timer) in Quick Play and Multiplayer
- **Penalty Shootout**: New standalone mini-game — aim, set power, and beat the keeper in best-of-5 penalty rounds
- **Challenge System**: 3 rotating challenges shown on the main menu with progress tracking; refresh when all are complete
- **Instant Goal Replay**: After every goal, the last ~2 seconds replay in slow motion with an "INSTANT REPLAY" banner
- **Goalpost Hit Feedback**: Ball hitting the post/crossbar triggers a metallic sound, haptic vibration, and spark particles
- **Dynamic Difficulty**: AI adjusts based on your win/loss streak (±0.2 modifier to AI parameters)
- **Weather Physics**: Rain reduces friction, snow reduces it further, and wind applies lateral force to the ball
- **AI Velocity Prediction**: AI now tracks opponent movement and anticipates direction in defensive positioning
- **Unlock Progress Display**: Locked bugs and arenas show achievement progress (e.g., "Score 50 goals (32/50)")
- **Pause Screen Context**: Pause menu now shows current game mode, level, and match mode
- **Golden Goal Overlay**: Visual "GOLDEN GOAL" indicator when overtime rules are active

## Performance
- **Particle Object Pooling**: 200-slot pre-allocated particle pool with active-flag recycling (no GC pressure)
- **Frame-Rate Independent Physics**: Fixed-timestep accumulator (1/60s steps) prevents physics divergence on varying frame rates
- **SVG Pre-Rendering**: Bug sprites are pre-rendered to offscreen canvases via Blob URL for faster draw calls

## Code Quality
- **Constants Extraction**: Magic numbers centralized in `constants.js` (PHYSICS, AI_PARAMS, MATCH, BALL, PLAYER, etc.)
- **Mobile Control Leak Fix**: `AbortController` pattern ensures window event listeners are properly cleaned up
- **Profile Name Validation**: Names sanitized to alphanumeric/space/underscore/dash, capped at 15 characters

## UX Improvements
- **Revisitable Tutorial**: Tutorial button on main menu now launches the interactive step-by-step overlay
- **Timer Display**: First to 3 mode shows elapsed time; other modes show remaining time
- **Match Mode Selection Screen**: Clean card-based UI matching existing difficulty/arena selection style
