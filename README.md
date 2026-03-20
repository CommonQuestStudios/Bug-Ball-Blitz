# 🐛⚽ Bug Ball Blitz

A modern remake of "Slime Soccer" featuring insect athletes competing in physics-based soccer matches!

## 🎮 Play Now!

### Web Version (Browser)
**[🕹️ Play Bug Ball Blitz](https://aaronc1992.github.io/Bug-Ball-Blitz/)**

Click the link above to play the latest version directly in your browser!

### Android App (Mobile)
**[📱 Download APK (latest)](https://github.com/AaronC1992/Bug-Ball-Blitz/releases/latest/download/app-release.apk)** | **[All Releases](https://github.com/AaronC1992/Bug-Ball-Blitz/releases)**

This link always points to the newest signed build. We also publish the Play-Store-ready AAB in each release.

**Installation:**
1. Click the "Download APK (latest)" link above to get the newest version
2. Enable "Install from Unknown Sources" in your Android settings
3. Open the downloaded APK file to install
4. Enjoy native mobile gameplay with touch controls!

**[📄 Privacy Policy](PRIVACY_POLICY.md)**

### iOS App (iPhone/iPad)
**[🍎 iOS Build Guide](IOS_BUILD_GUIDE.md)** - Step-by-step instructions for building the iOS version

The iOS version requires a Mac with Xcode to build. Follow the detailed guide above if you have access to a Mac, or contact someone with a Mac to help build the iOS version for you.

## 🎮 Game Overview

**Bug Ball Blitz** is a 2D physics-based soccer game where bugs compete in intense matches across natural arenas. Features a progressive Tower Campaign, Quick Play mode, and local multiplayer.

### Game Modes

1. **🏆 Tower Campaign** (Single Player)
   - Progress through 20 challenging levels
   - Levels 1-4: 1v1 matches with increasing difficulty (Easy → Pro)
   - Levels 5-8: 1v2 matches (face TWO AI opponents)
   - Levels 9-19: Advanced challenges mixing 1v1 and 1v2 battles
   - Level 20: 👑 BOSS GAUNTLET - Face all bugs consecutively!
   - Complete the tower to become the ultimate Bug Ball champion!

2. **⚡ Quick Play**
   - Instant match against AI
   - Choose your difficulty: Easy, Medium, Hard, or Pro
   - Select your favorite bug and arena
   - Customize match length and score to win

3. **🎮 Local Multiplayer**
   - Two players on the same device
   - **PC**: Player 1 (WASD) vs Player 2 (Arrow keys)
   - **Mobile/Tablet**: Dual touch controls (portrait mode only)
   - Large screens recommended for best multiplayer experience

4. **🎯 Arcade Mode**
   - Fully customizable matches with crazy modifiers!
   - Adjust gravity, ball size, player size, and physics
   - Play with multiple balls simultaneously (1-3 balls)
   - Add weather effects (rain, snow, wind)
   - Create AI-only spectator matches
   - Team up with AI partners (2v1, 2v2 modes)

## 🪲 Playable Bugs

Each bug has unique stats affecting gameplay:

| Bug | Speed | Jump | Power | Size | Unlock Requirement | Playstyle |
|-----|-------|------|-------|------|-------------------|-----------|
| **Ladybug** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Small | Starter | Balanced all-around stats |
| **Grasshopper** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Medium | Win 1st match | Maximum jump, very fast |
| **Beetle** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Large | Win 10 matches | Strong kicks, slower |
| **Ant** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | Tiny | Score 50 goals | Lightning fast, weaker |
| **Spider** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Medium | Win 10 matches | Agile with control |

## 🎨 Arenas

Play across 16 unique arenas with different visual themes:

**Starter Arenas** (Always Available):
- **Grass Field**: Classic grassy soccer pitch
- **Dirt Patch**: Dusty arena with earth tones
- **Leaf Arena**: Battle on a giant leaf surface

**Unlockable Arenas** (Earn through achievements):
- Desert Oasis, Snowy Park, Volcanic Rock
- Mushroom Forest, Beach Sand, Moon Crater
- Autumn Leaves, Ice Cave, Garden Pond
- Neon City, Candy Land, Jungle Vines, Crystal Cavern

Each arena features unique weather effects and visual atmospheres!

## 🎯 Controls

### PC/Keyboard

**Player 1:**
- **A/D**: Move Left/Right
- **W or Space**: Jump

**Player 2 (Multiplayer only):**
- **Arrow Left/Right**: Move
- **Arrow Up**: Jump

**General:**
- **⏸ Button**: Pause game

### Mobile (Touch)

- **Virtual Joystick**: Move left/right
- **Jump Button**: Jump
- Controls automatically appear on mobile devices

## 📱 Mobile Support

The game automatically detects mobile devices and:
- Hides the Local Multiplayer option
- Displays touch controls (virtual joystick + jump button)
- Scales UI elements responsively

## 💾 Save System

### Profile Management

- **Create Profile**: Start a new player profile with custom name
- **Load Profile**: Select from existing profiles
- **Auto-Save**: Progress automatically saves after each match

### Tracked Stats

- Wins / Losses
- Goals Scored / Conceded
- Total Matches Played
- Win Rate Percentage
- Current Tower Level & Progress
- Tower Completion Status
- **NEW**: Achievement Progress (18 total achievements)
- **NEW**: Unlocked Bugs, Arenas, Celebrations
- **NEW**: Goal Celebrations & Bug Animations
- **NEW**: Cosmetic Items & Customization

## 🚀 How to Run

### Option 1: Live Server (Recommended)

1. Open the project folder in VS Code
2. Install the "Live Server" extension if not already installed
3. Right-click on `index.html`
4. Select "Open with Live Server"
5. Game will launch in your browser!

### Option 2: Direct Browser

1. Navigate to the project folder
2. Double-click `index.html`
3. Game opens in your default browser

### Option 3: Python Server

```bash
# Python 3
cd "Bug Ball Blitz"
python -m http.server 8000

# Then open: http://localhost:8000
```

## 📂 Project Structure

```
Bug Ball Blitz/
├── index.html          # Main HTML structure
├── style.css           # Game styling and responsive design
├── main.js             # Core game loop and orchestration
├── bugs.js             # Bug definitions with SVG art and stats
├── arenas.js           # Arena backgrounds and rendering
├── physics.js          # Physics engine (gravity, collisions, movement)
├── ai.js               # AI behavior (4 difficulty levels + multi-AI)
├── saveSystem.js       # localStorage profile management
├── ui.js               # Menu system and UI rendering
├── audioManager.js     # Sound effects and music system
├── achievementManager.js # Achievement tracking and unlocks
├── qualitySettings.js  # Graphics quality presets
├── particles.js        # Particle effects system
├── celebrations.js     # Goal celebration animations
├── bugAnimations.js    # Bug-specific animations
├── cosmetics.js        # Cosmetic items and customization
├── menuBackground.js   # Animated menu backgrounds
├── CHEATS.js           # Developer cheat codes
└── README.md           # This file
```

## 🎲 Game Rules

1. **Match Duration**: Customizable (1-5 minutes) or first to reach goal target (3-15 goals)
2. **Scoring**: Kick the ball into opponent's goal
3. **Goals**: Located on left and right sides of the field
4. **Physics**: Realistic ball physics with gravity, bounce, and momentum
5. **Directional Kicks**: Control ball direction based on movement and positioning
6. **Reset**: Ball and players reset after each goal with 3-second countdown
7. **Weather Effects**: Rain, snow, and wind affect ball physics dynamically

## 🧠 AI Behavior

### Difficulty Levels

- **Easy (😊)**: Slow reactions, poor prediction, 30% accuracy
- **Medium (😐)**: Moderate skill, 60% accuracy
- **Hard (😠)**: Fast reactions, 85% accuracy
- **Pro (😈)**: Near-perfect play, 95% accuracy

### 2v1 AI Teamwork

In Tower Campaign levels 5-8, two AI opponents coordinate:
- One attacks aggressively toward the ball
- One defends near the goal
- Dynamic role switching based on positioning

## 🏗️ Technical Details

### Technologies Used

- **HTML5 Canvas**: Game rendering
- **ES6 Modules**: Modular JavaScript architecture
- **localStorage**: Profile and progress persistence
- **CSS Grid/Flexbox**: Responsive UI layout
- **SVG Graphics**: Inline vector bug sprites

### Key Features

- ✅ Modular code architecture
- ✅ Real-time physics simulation
- ✅ Responsive design (mobile + desktop + tablet)
- ✅ Save/Load system with multiple profiles
- ✅ Progressive difficulty tower system (20 levels)
- ✅ All artwork generated as inline SVG
- ✅ Touch controls for mobile with customizable layout
- ✅ No external dependencies
- ✅ Achievement system with 18 unlockables
- ✅ Goal celebrations and bug animations
- ✅ Cosmetic items affecting gameplay
- ✅ Weather effects (rain, snow, wind)
- ✅ Arcade mode with custom physics
- ✅ Quality settings for performance optimization

## 💰 Monetization (AdMob Integration Scaffold)

The project includes a lightweight ads abstraction (`ads.js`) that provides a unified API for:
- Interstitial ads (shown after match end, with a cooldown to avoid spamming)
- Banner placeholder (`#adBanner`) rendered on the match result screen
- Rewarded ad stub (API present; add a button to trigger and grant rewards)

### Your AdMob IDs
App ID:
```
ca-app-pub-6064374775404365~2828970201
```
Interstitial (Transitions):
```
ca-app-pub-6064374775404365/3897960551
```

These are configured in `ensureAds()` inside `main.js`. Web builds only show placeholders; real ads require a native wrapper.

### Enabling Real Ads (Android/iOS)
1. Wrap the project using Capacitor (recommended) or Cordova.
2. Install an AdMob plugin:
    - Capacitor: `@capacitor-community/admob`
    - Cordova: `admob-plus-cordova`
3. Configure your App ID:
    - Android `AndroidManifest.xml`:
       ```xml
       <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="ca-app-pub-6064374775404365~2828970201" />
       ```
    - iOS `Info.plist`:
       ```xml
       <key>GADApplicationIdentifier</key>
       <string>ca-app-pub-6064374775404365~2828970201</string>
       ```
4. Replace placeholder logic in `ads.js` with plugin calls (load/show interstitial & rewarded) per your chosen plugin’s README.
5. Build and test on a real device (use test ads; never click live ads during development).

### Rewarded Flow (Next Step)
Add a button (e.g., on the match end screen or styles shop):
```js
game.ads.showRewarded(() => {
   // Grant reward (extra cosmetics currency, bonus XP, etc.)
});
```

### Consent & Privacy
For GDPR/CCPA regions:
1. Show a consent modal on first launch.
2. Store choice in `localStorage` (e.g., `adConsent=true`).
3. Only call `ensureAds()` after consent is granted.

### Frequency Capping
`AdsManager` includes an interstitial cooldown (default 120s). Adjust via `interstitialCooldownSeconds` when constructing.


## 🎨 Artwork

All game assets are created as inline SVG graphics:
- 5 unique bug characters with animations
- 3 distinct arena backgrounds
- Soccer ball with pentagon pattern
- UI elements and menus
- Goal posts and nets

## 🔧 Customization

### Adding New Bugs

Edit `bugs.js` and add a new bug object with:
- Unique ID and name
- Stats (speed, jump, power, size)
- SVG artwork
- Color theme

### Creating New Arenas

Edit `arenas.js` and define:
- Ground and sky colors
- Visual effects (grass, dirt, etc.)
- Background gradient

### Adjusting Difficulty

Edit `ai.js` difficulty parameters:
- `reactionTime`: AI response delay
- `predictionAccuracy`: Ball trajectory prediction
- `jumpTiming`: Jump decision accuracy
- `aggressiveness`: Attack vs. defend balance

## 🐛 Troubleshooting

### Game Won't Load
- Ensure you're using a modern browser (Chrome, Firefox, Edge)
- Check browser console for errors (F12)
- Verify all files are in the same directory

### Controls Not Working
- Click on the game canvas to focus it
- Check if another window has keyboard focus
- On mobile, ensure touch is enabled

### Progress Not Saving
- Check localStorage is enabled in browser
- Don't use incognito/private mode
- Clear browser cache if issues persist

## 📝 Future Enhancements

Potential additions:
- Online multiplayer with matchmaking
- More bug characters and special abilities
- Power-ups and special moves during matches
- Tournament mode with brackets
- Replay system with highlights
- Background music and enhanced sound effects
- Advanced particle effects
- Character customization shop
- Daily challenges and events
- Leaderboards and statistics

## 📜 Version History

Current Version: **v1.24.0**

See [CHANGELOG_v1.9.0.md](CHANGELOG_v1.9.0.md) for detailed version history.

## 📜 License

This is a portfolio/educational project. Feel free to use, modify, and learn from the code!

## 👨‍💻 Development

Built with ❤️ as a complete game development demonstration showcasing:
- Game architecture design
- Physics simulation
- AI implementation
- State management
- Responsive UI/UX
- Data persistence

---

**Enjoy Bug Ball Blitz! 🐛⚽✨**
