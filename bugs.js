// bugs.js - Bug definitions with SVG art and stats

export const BUGS = {
    ladybug: {
        id: 'ladybug',
        name: 'Ladybug',
        stats: {
            speed: 0.78,
            jump: 0.8,
            power: 0.75,
            size: 0.8
        },
        color: '#ff4444',
        unlocked: true, // Always unlocked (starter bug)
        unlockRequirement: 'Starter Bug',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="ladybugShell" cx="45%" cy="45%" r="60%">
                    <stop offset="0%" stop-color="#ff6b6b"/>
                    <stop offset="70%" stop-color="#e60000"/>
                    <stop offset="100%" stop-color="#990000"/>
                </radialGradient>
                <radialGradient id="ladybugHead" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stop-color="#4a4a4a"/>
                    <stop offset="100%" stop-color="#1a1a1a"/>
                </radialGradient>
                <linearGradient id="jerseyStripes" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#0056b3"/>
                    <stop offset="33%" stop-color="#0056b3"/>
                    <stop offset="33%" stop-color="#ffffff"/>
                    <stop offset="66%" stop-color="#ffffff"/>
                    <stop offset="66%" stop-color="#0056b3"/>
                    <stop offset="100%" stop-color="#0056b3"/>
                </linearGradient>
            </defs>
            <ellipse cx="50" cy="72" rx="24" ry="10" fill="#000" opacity="0.25"/>
            <path d="M 28 65 L 18 78 L 10 78 Q 8 78, 10 74 L 18 68" stroke="#1a1a1a" stroke-width="3" fill="#1a1a1a" stroke-linecap="round" stroke-linejoin="round"/>
            <ellipse cx="14" cy="77" rx="5" ry="3" fill="#ffffff" stroke="#1a1a1a" stroke-width="1.5"/>
            <circle cx="12" cy="79" r="1" fill="#ffcc00"/>
            <circle cx="15" cy="79" r="1" fill="#ffcc00"/>
            <path d="M 72 65 L 82 78 L 90 78 Q 92 78, 90 74 L 82 68" stroke="#1a1a1a" stroke-width="3" fill="#1a1a1a" stroke-linecap="round" stroke-linejoin="round"/>
            <ellipse cx="86" cy="77" rx="5" ry="3" fill="#ffffff" stroke="#1a1a1a" stroke-width="1.5"/>
            <circle cx="84" cy="79" r="1" fill="#ffcc00"/>
            <circle cx="87" cy="79" r="1" fill="#ffcc00"/>
            <path d="M 25 55 L 14 55" stroke="#1a1a1a" stroke-width="3.5" stroke-linecap="round"/>
            <rect x="16" y="53" width="5" height="4" rx="1" fill="#ffcc00"/>
            <path d="M 75 55 L 86 55" stroke="#1a1a1a" stroke-width="3.5" stroke-linecap="round"/>
            <rect x="79" y="53" width="5" height="4" rx="1" fill="#ffcc00"/>
            <path d="M 26 42 Q 15 38, 12 34" stroke="#1a1a1a" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M 74 42 Q 85 38, 88 34" stroke="#1a1a1a" stroke-width="3" fill="none" stroke-linecap="round"/>
            <ellipse cx="50" cy="55" rx="20" ry="26" fill="url(#ladybugShell)"/>
            <path d="M 33 46 C 33 66, 67 66, 67 46 C 67 36, 33 36, 33 46 Z" fill="url(#jerseyStripes)" opacity="0.9"/>
            <path d="M 40 40 L 50 48 L 60 40" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
            <polygon points="50,49 51,52 54,52 52,54 53,57 50,55 47,57 48,54 46,52 49,52" fill="#ffcc00"/>
            <path d="M 50 35 L 50 81" stroke="#2d2d2d" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="38" cy="45" r="4.5" fill="#202020"/>
            <circle cx="36" cy="43" r="1.5" fill="#ffffff" opacity="0.4"/>
            <circle cx="62" cy="45" r="4.5" fill="#202020"/>
            <circle cx="64" cy="43" r="1.5" fill="#ffffff" opacity="0.4"/>
            <circle cx="36" cy="62" r="4" fill="#202020"/>
            <circle cx="34" cy="60" r="1.2" fill="#ffffff" opacity="0.4"/>
            <circle cx="64" cy="62" r="4" fill="#202020"/>
            <circle cx="66" cy="60" r="1.2" fill="#ffffff" opacity="0.4"/>
            <ellipse cx="50" cy="31" rx="14" ry="13" fill="url(#ladybugHead)"/>
            <rect x="38" y="22" width="24" height="6" rx="2" fill="#ffffff"/>
            <rect x="38" y="24" width="24" height="2" fill="#ff3333"/>
            <ellipse cx="44" cy="30" rx="3.5" ry="4.5" fill="#ffffff"/>
            <ellipse cx="44" cy="30" rx="1.8" ry="2.2" fill="#000000"/>
            <circle cx="43" cy="28.5" r="0.8" fill="#ffffff"/>
            <ellipse cx="56" cy="30" rx="3.5" ry="4.5" fill="#ffffff"/>
            <ellipse cx="56" cy="30" rx="1.8" ry="2.2" fill="#000000"/>
            <circle cx="55" cy="28.5" r="0.8" fill="#ffffff"/>
            <path d="M 39 24 Q 44 23, 48 26" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M 61 24 Q 56 23, 52 26" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>`
    },
    
    grasshopper: {
        id: 'grasshopper',
        name: 'Grasshopper',
        stats: {
            speed: 0.82,
            jump: 1.15,
            power: 0.7,
            size: 0.9
        },
        color: '#7ed321',
        unlocked: false,
        unlockAchievement: 'firstVictory', // Win your first match
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="hopperBody" cx="45%" cy="45%" r="65%">
                    <stop offset="0%" stop-color="#9bf03b"/>
                    <stop offset="70%" stop-color="#7ed321"/>
                    <stop offset="100%" stop-color="#4e8c10"/>
                </radialGradient>
                <radialGradient id="hopperHead" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stop-color="#a6f642"/>
                    <stop offset="100%" stop-color="#5fb304"/>
                </radialGradient>
                <linearGradient id="hopperJersey" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#2d2d2d"/>
                    <stop offset="50%" stop-color="#f5e022"/>
                    <stop offset="100%" stop-color="#2d2d2d"/>
                </linearGradient>
            </defs>
            <ellipse cx="50" cy="78" rx="22" ry="8" fill="#000" opacity="0.25"/>
            <path d="M 35 55 Q 22 55, 18 68 Q 15 78, 12 84 L 8 84 Q 6 84, 8 80 L 14 70 Q 18 58, 30 52" stroke="#4e8c10" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M 12 84 L 5 84 C 4 84, 4 80, 7 78 L 12 80 Z" fill="#1a1a1a" stroke="#ffffff" stroke-width="1"/>
            <ellipse cx="8" cy="85" rx="3" ry="1.5" fill="#f5e022"/>
            <path d="M 65 55 Q 78 55, 82 68 Q 85 78, 88 84 L 92 84 Q 94 84, 92 80 L 86 70 Q 82 58, 70 52" stroke="#4e8c10" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M 88 84 L 95 84 C 96 84, 96 80, 93 78 L 88 80 Z" fill="#1a1a1a" stroke="#ffffff" stroke-width="1"/>
            <ellipse cx="92" cy="85" rx="3" ry="1.5" fill="#f5e022"/>
            <path d="M 38 60 L 26 68 L 18 72" stroke="#4e8c10" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M 62 60 L 74 68 L 82 72" stroke="#4e8c10" stroke-width="3" fill="none" stroke-linecap="round"/>
            <rect x="65" y="61" width="6" height="5" transform="rotate(15 65 61)" fill="#f5e022" rx="1"/>
            <text x="66" y="65" font-family="monospace" font-weight="bold" font-size="4" fill="#000" transform="rotate(15 65 61)">C</text>
            <ellipse cx="50" cy="58" rx="17" ry="24" fill="url(#hopperBody)"/>
            <path d="M 34 50 C 34 70, 66 70, 66 50 C 66 42, 34 42, 34 50 Z" fill="url(#hopperJersey)" opacity="0.85"/>
            <circle cx="50" cy="50" r="4" fill="#ffffff" opacity="0.3"/>
            <ellipse cx="50" cy="35" rx="11" ry="13" fill="url(#hopperHead)"/>
            <path d="M 46 25 Q 38 15, 36 10" stroke="#4e8c10" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M 54 25 Q 62 15, 64 10" stroke="#4e8c10" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M 40 27 Q 50 25, 60 27" stroke="#ffffff" stroke-width="3.5" fill="none" stroke-linecap="round"/>
            <path d="M 40 27 Q 50 25, 60 27" stroke="#ff3333" stroke-width="1" fill="none" stroke-linecap="round"/>
            <ellipse cx="45" cy="34" rx="3" ry="4" fill="#ffffff"/>
            <circle cx="45.5" cy="34" r="1.8" fill="#1a1a1a"/>
            <circle cx="44.5" cy="32.5" r="0.7" fill="#ffffff"/>
            <ellipse cx="55" cy="34" rx="3" ry="4" fill="#ffffff"/>
            <circle cx="54.5" cy="34" r="1.8" fill="#1a1a1a"/>
            <circle cx="53.5" cy="32.5" r="0.7" fill="#ffffff"/>
            <path d="M 47 42 Q 50 44, 53 42" stroke="#224400" stroke-width="2" fill="none" stroke-linecap="round"/>
            <ellipse cx="50" cy="52" rx="14" ry="10" fill="#ffffff" opacity="0.4"/>
            <path d="M 40 50 Q 50 45, 60 50 M 42 53 Q 50 49, 58 53" stroke="#ffffff" stroke-width="1" opacity="0.6"/>
        </svg>`
    },
    
    stagBeetle: {
        id: 'stagBeetle',
        name: 'Beetle',
        stats: {
            speed: 0.62,
            jump: 0.68,
            power: 1.0,
            size: 1.2
        },
        color: '#8B4513',
        unlocked: false,
        unlockAchievement: 'champion', // Win 10 matches
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="beetleShell" cx="45%" cy="45%" r="65%">
                    <stop offset="0%" stop-color="#a65d26"/>
                    <stop offset="70%" stop-color="#733c10"/>
                    <stop offset="100%" stop-color="#401f05"/>
                </radialGradient>
                <radialGradient id="beetleHead" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stop-color="#8c4715"/>
                    <stop offset="100%" stop-color="#4a2205"/>
                </radialGradient>
                <linearGradient id="goalieJersey" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ff5f00"/>
                    <stop offset="40%" stop-color="#ff00a0"/>
                    <stop offset="70%" stop-color="#ff5f00"/>
                    <stop offset="100%" stop-color="#990055"/>
                </linearGradient>
            </defs>
            <ellipse cx="50" cy="84" rx="30" ry="10" fill="#000" opacity="0.25"/>
            <path d="M 28 65 L 14 74 L 6 74" stroke="#401f05" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <rect x="5" y="71" width="5" height="5" rx="1.5" fill="#1a1a1a"/>
            <circle cx="6" cy="76" r="0.8" fill="#ff5f00"/>
            <circle cx="8" cy="76" r="0.8" fill="#ff5f00"/>
            <path d="M 72 65 L 86 74 L 94 74" stroke="#401f05" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <rect x="90" y="71" width="5" height="5" rx="1.5" fill="#1a1a1a"/>
            <circle cx="92" cy="76" r="0.8" fill="#ff5f00"/>
            <circle cx="94" cy="76" r="0.8" fill="#ff5f00"/>
            <path d="M 24 55 L 12 58" stroke="#401f05" stroke-width="4" stroke-linecap="round"/>
            <rect x="10" y="55" width="4" height="4" fill="#ffffff"/>
            <path d="M 76 55 L 88 58" stroke="#401f05" stroke-width="4" stroke-linecap="round"/>
            <rect x="86" y="55" width="4" height="4" fill="#ffffff"/>
            <ellipse cx="50" cy="58" rx="23" ry="28" fill="url(#beetleShell)"/>
            <path d="M 30 46 C 30 72, 70 72, 70 46 C 70 34, 30 34, 30 46 Z" fill="url(#goalieJersey)" opacity="0.9"/>
            <path d="M 34 44 L 42 50 L 50 44 L 58 50 L 66 44" stroke="#00ffff" stroke-width="2" fill="none" opacity="0.8"/>
            <path d="M 34 52 L 42 58 L 50 52 L 58 58 L 66 52" stroke="#00ffff" stroke-width="2" fill="none" opacity="0.8"/>
            <text x="46" y="64" font-family="Impact, Arial Black, sans-serif" font-weight="bold" font-size="12" fill="#ffffff">1</text>
            <ellipse cx="50" cy="34" rx="14" ry="12" fill="url(#beetleHead)"/>
            <rect x="36" y="24" width="28" height="5" rx="1.5" fill="#00ffff"/>
            <rect x="36" y="26" width="28" height="1.5" fill="#ffffff"/>
            <ellipse cx="44" cy="33" rx="4.5" ry="4" fill="#ffffff"/>
            <ellipse cx="44" cy="33" rx="2" ry="2" fill="#000000"/>
            <circle cx="43" cy="31" r="0.8" fill="#ffffff"/>
            <ellipse cx="56" cy="33" rx="4.5" ry="4" fill="#ffffff"/>
            <ellipse cx="56" cy="33" rx="2" ry="2" fill="#000000"/>
            <circle cx="55" cy="31" r="0.8" fill="#ffffff"/>
            <path d="M 38 25 Q 32 15, 26 8 Q 23 6, 21 9 Q 20 12, 23 15 Q 26 18, 30 22" stroke="#401f05" stroke-width="3" fill="#ff5f00"/>
            <path d="M 26 8 Q 21 14, 25 18" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <circle cx="28" cy="13" r="1.5" fill="#ffffff"/>
            <path d="M 62 25 Q 68 15, 74 8 Q 77 6, 79 9 Q 80 12, 77 15 Q 74 18, 70 22" stroke="#401f05" stroke-width="3" fill="#ff5f00"/>
            <path d="M 74 8 Q 79 14, 75 18" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <circle cx="72" cy="13" r="1.5" fill="#ffffff"/>
            <path d="M 26 38 L 18 36" stroke="#401f05" stroke-width="3" stroke-linecap="round"/>
            <path d="M 74 38 L 82 36" stroke="#401f05" stroke-width="3" stroke-linecap="round"/>
        </svg>`
    },
    
    ant: {
        id: 'ant',
        name: 'Ant',
        stats: {
            speed: 1.05,
            jump: 0.7,
            power: 0.5,
            size: 0.6
        },
        color: '#2d2d2d',
        unlocked: false,
        unlockRequirement: 'Score 50 goals',
        unlockAchievement: 'goalMachine', // Links to achievement ID
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="antBody" cx="45%" cy="45%" r="65%">
                    <stop offset="0%" stop-color="#4a4a4a"/>
                    <stop offset="80%" stop-color="#212121"/>
                    <stop offset="100%" stop-color="#0a0a0a"/>
                </radialGradient>
                <radialGradient id="antHead" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stop-color="#5a5a5a"/>
                    <stop offset="100%" stop-color="#1c1c1c"/>
                </radialGradient>
                <linearGradient id="antJersey" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#00f6ff"/>
                    <stop offset="50%" stop-color="#ffffff"/>
                    <stop offset="100%" stop-color="#00f6ff"/>
                </linearGradient>
            </defs>
            <ellipse cx="50" cy="80" rx="16" ry="6" fill="#000" opacity="0.25"/>
            <path d="M 38 65 L 24 74 L 14 74" stroke="#212121" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <polygon points="14,72 10,74 14,76" fill="#ff3333"/>
            <path d="M 62 65 L 76 74 L 86 74" stroke="#212121" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <polygon points="86,72 90,74 86,76" fill="#ff3333"/>
            <path d="M 36 55 L 20 58 L 12 60" stroke="#212121" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <polygon points="12,58 8,60 12,62" fill="#ff3333"/>
            <path d="M 64 55 L 80 58 L 88 60" stroke="#212121" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <polygon points="88,58 92,60 88,62" fill="#ff3333"/>
            <path d="M 38 45 Q 26 40, 22 32" stroke="#212121" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M 62 45 Q 74 40, 78 32" stroke="#212121" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <ellipse cx="50" cy="66" rx="11" ry="14" fill="url(#antBody)"/>
            <circle cx="50" cy="53" r="9.5" fill="url(#antBody)"/>
            <circle cx="50" cy="53" r="9.5" fill="url(#antJersey)" opacity="0.85"/>
            <path d="M 44 45 Q 50 49, 56 45" stroke="#ffffff" stroke-width="1.5" fill="none"/>
            <circle cx="50" cy="38" r="7.5" fill="url(#antHead)"/>
            <rect x="44" y="32" width="12" height="3" rx="1" fill="#ffffff"/>
            <rect x="44" y="33" width="12" height="1" fill="#00f6ff"/>
            <path d="M 47 31 Q 42 22, 40 16" stroke="#212121" stroke-width="1.8" fill="none" stroke-linecap="round"/>
            <path d="M 53 31 Q 58 22, 60 16" stroke="#212121" stroke-width="1.8" fill="none" stroke-linecap="round"/>
            <ellipse cx="46.5" cy="37" rx="1.8" ry="2.2" fill="#ffffff" transform="rotate(-15 46.5 37)"/>
            <circle cx="46.5" cy="37" r="0.8" fill="#000000"/>
            <ellipse cx="53.5" cy="37" rx="1.8" ry="2.2" fill="#ffffff" transform="rotate(15 53.5 37)"/>
            <circle cx="53.5" cy="37" r="0.8" fill="#000000"/>
            <path d="M 50 78 A 8 8 0 0 1 50 82" stroke="#00f6ff" stroke-width="2" opacity="0.4"/>
        </svg>`
    },
    
    spider: {
        id: 'spider',
        name: 'Spider',
        stats: {
            speed: 0.88,
            jump: 0.85,
            power: 0.8,
            size: 1.0
        },
        color: '#4a235a',
        unlocked: false,
        unlockRequirement: 'Win 10 matches',
        unlockAchievement: 'champion', // Links to achievement ID
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="spiderBody" cx="45%" cy="45%" r="65%">
                    <stop offset="0%" stop-color="#884ea0"/>
                    <stop offset="70%" stop-color="#5b2c6f"/>
                    <stop offset="100%" stop-color="#341348"/>
                </radialGradient>
                <radialGradient id="spiderHead" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stop-color="#9b59b6"/>
                    <stop offset="100%" stop-color="#4a235a"/>
                </radialGradient>
                <linearGradient id="spiderJersey" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#2d2d2d"/>
                    <stop offset="50%" stop-color="#10e010"/>
                    <stop offset="100%" stop-color="#2d2d2d"/>
                </linearGradient>
            </defs>
            <ellipse cx="50" cy="80" rx="22" ry="7" fill="#000" opacity="0.25"/>
            <path d="M 34 60 Q 18 64, 10 78" stroke="#341348" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <ellipse cx="10" cy="78" rx="2.5" ry="4" fill="#10e010" transform="rotate(-30 10 78)"/>
            <path d="M 66 60 Q 82 64, 90 78" stroke="#341348" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <ellipse cx="90" cy="78" rx="2.5" ry="4" fill="#10e010" transform="rotate(30 90 78)"/>
            <path d="M 34 52 Q 16 54, 8 64" stroke="#341348" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <ellipse cx="8" cy="64" rx="2.5" ry="4" fill="#10e010" transform="rotate(-45 8 64)"/>
            <path d="M 66 52 Q 84 54, 92 64" stroke="#341348" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <ellipse cx="92" cy="64" rx="2.5" ry="4" fill="#10e010" transform="rotate(45 92 64)"/>
            <path d="M 36 46 Q 18 42, 10 32" stroke="#341348" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <ellipse cx="10" cy="32" rx="2.5" ry="4" fill="#10e010" transform="rotate(-60 10 32)"/>
            <path d="M 64 46 Q 82 42, 90 32" stroke="#341348" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <ellipse cx="90" cy="32" rx="2.5" ry="4" fill="#10e010" transform="rotate(60 90 32)"/>
            <path d="M 38 40 Q 22 28, 16 18" stroke="#341348" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <ellipse cx="16" cy="18" rx="2.5" ry="4" fill="#10e010" transform="rotate(-75 16 18)"/>
            <path d="M 62 40 Q 78 28, 84 18" stroke="#341348" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <ellipse cx="84" cy="18" rx="2.5" ry="4" fill="#10e010" transform="rotate(75 84 18)"/>
            <ellipse cx="50" cy="55" rx="18" ry="22" fill="url(#spiderBody)"/>
            <path d="M 33 46 C 33 66, 67 66, 67 46 C 67 36, 33 36, 33 46 Z" fill="url(#spiderJersey)" opacity="0.9"/>
            <polygon points="50,47 52,50 55,50 53,52 54,55 50,53 46,55 47,52 45,50 48,50" fill="#f5e022"/>
            <circle cx="50" cy="35" r="10" fill="url(#spiderHead)"/>
            <path d="M 40 38 L 48 38 M 52 38 L 60 38" stroke="#10e010" stroke-width="1.5" stroke-linecap="round"/>
            <ellipse cx="45" cy="32" rx="2.5" ry="3.5" fill="#e74c3c"/>
            <circle cx="45" cy="32" r="1" fill="#ffffff"/>
            <ellipse cx="55" cy="32" rx="2.5" ry="3.5" fill="#e74c3c"/>
            <circle cx="55" cy="32" r="1" fill="#ffffff"/>
            <circle cx="41" cy="34" r="1.5" fill="#c0392b"/>
            <circle cx="59" cy="34" r="1.5" fill="#c0392b"/>
            <circle cx="43" cy="28" r="1.2" fill="#c0392b"/>
            <circle cx="57" cy="28" r="1.2" fill="#c0392b"/>
            <circle cx="48" cy="27" r="1" fill="#e74c3c"/>
            <circle cx="52" cy="27" r="1" fill="#e74c3c"/>
        </svg>`
    }
};

export function getBugArray() {
    return Object.values(BUGS);
}

export function getBugById(id) {
    return BUGS[id];
}

export function isBugUnlocked(bugId, achievementManager) {
    const bug = BUGS[bugId];
    if (!bug) return false;
    
    // Always unlocked bugs (starters)
    if (bug.unlocked === true) return true;
    
    // Check if linked achievement is unlocked
    if (bug.unlockAchievement && achievementManager) {
        const achievement = achievementManager.achievements[bug.unlockAchievement];
        return achievement ? achievement.unlocked : false;
    }
    
    return false;
}

export function getUnlockedBugs(achievementManager) {
    return getBugArray().filter(bug => isBugUnlocked(bug.id, achievementManager));
}

export function getLockedBugs(achievementManager) {
    return getBugArray().filter(bug => !isBugUnlocked(bug.id, achievementManager));
}
