// arenas.js - Arena/background definitions

export const ARENAS = {
    grassField: {
        id: 'grassField',
        name: 'Grass Field',
        groundColor: '#4a7c2c',
        skyColors: ['#87CEEB', '#4A90E2'],
        grassBlades: true,
        description: 'Classic grassy soccer field',
        weather: 'clear',
        unlocked: true,
        unlockRequirement: 'Starter Arena'
    },
    
    dirtPatch: {
        id: 'dirtPatch',
        name: 'Dirt Patch',
        groundColor: '#8B6914',
        skyColors: ['#CD853F', '#8B6914'],
        grassBlades: false,
        description: 'Dusty dirt arena',
        weather: 'dusty',
        unlocked: true,
        unlockRequirement: 'Starter Arena'
    },
    
    leafArena: {
        id: 'leafArena',
        name: 'Leaf Arena',
        groundColor: '#6B8E23',
        skyColors: ['#90EE90', '#228B22'],
        grassBlades: true,
        description: 'Arena on a giant leaf',
        weather: 'clear',
        unlocked: true,
        unlockRequirement: 'Starter Arena'
    },
    
    desertOasis: {
        id: 'desertOasis',
        name: 'Desert Oasis',
        groundColor: '#EDC9AF',
        skyColors: ['#FFE4B5', '#DEB887'],
        grassBlades: false,
        description: 'Hot sandy desert arena',
        weather: 'hot',
        unlocked: false,
        unlockRequirement: 'Win your first match',
        unlockAchievement: 'firstVictory'
    },
    
    snowyPark: {
        id: 'snowyPark',
        name: 'Snowy Park',
        groundColor: '#E6F2FF',
        skyColors: ['#B0C4DE', '#778899'],
        grassBlades: false,
        description: 'Winter wonderland field',
        weather: 'snowy',
        unlocked: false,
        unlockRequirement: 'Score 50 goals',
        unlockAchievement: 'goalMachine'
    },
    
    volcanicRock: {
        id: 'volcanicRock',
        name: 'Volcanic Rock',
        groundColor: '#3d2817',
        skyColors: ['#FF4500', '#8B0000'],
        grassBlades: false,
        description: 'Dangerous volcanic terrain',
        weather: 'hot',
        unlocked: false,
        unlockRequirement: 'Win 10 matches',
        unlockAchievement: 'champion'
    },
    
    mushroomForest: {
        id: 'mushroomForest',
        name: 'Mushroom Forest',
        groundColor: '#8B4513',
        skyColors: ['#DDA0DD', '#BA55D3'],
        grassBlades: true,
        description: 'Magical mushroom grove',
        weather: 'foggy',
        unlocked: false,
        unlockRequirement: 'Win without conceding',
        unlockAchievement: 'perfectGame'
    },
    
    beachSand: {
        id: 'beachSand',
        name: 'Beach Sand',
        groundColor: '#F4A460',
        skyColors: ['#87CEEB', '#00BFFF'],
        grassBlades: false,
        description: 'Tropical beach paradise',
        weather: 'sunny',
        unlocked: false,
        unlockRequirement: 'Score 3 goals in one match',
        unlockAchievement: 'hatTrick'
    },
    
    moonCrater: {
        id: 'moonCrater',
        name: 'Moon Crater',
        groundColor: '#696969',
        skyColors: ['#000000', '#1a1a2e'],
        grassBlades: false,
        description: 'Low gravity lunar surface',
        weather: 'space',
        unlocked: false,
        unlockRequirement: 'Score 100 goals',
        unlockAchievement: 'centurion'
    },
    
    autumnLeaves: {
        id: 'autumnLeaves',
        name: 'Autumn Leaves',
        groundColor: '#8B4513',
        skyColors: ['#FF8C00', '#FF6347'],
        grassBlades: true,
        description: 'Colorful fall foliage',
        weather: 'windy',
        unlocked: false,
        unlockRequirement: 'Win by 5+ goals',
        unlockAchievement: 'blowout'
    },
    
    iceCave: {
        id: 'iceCave',
        name: 'Ice Cave',
        groundColor: '#B0E0E6',
        skyColors: ['#4682B4', '#5F9EA0'],
        grassBlades: false,
        description: 'Slippery frozen cavern',
        weather: 'icy',
        unlocked: false,
        unlockRequirement: 'Win after being 2+ down',
        unlockAchievement: 'comeback'
    },
    
    gardenPond: {
        id: 'gardenPond',
        name: 'Garden Pond',
        groundColor: '#2E8B57',
        skyColors: ['#98FB98', '#3CB371'],
        grassBlades: true,
        description: 'Peaceful garden setting',
        weather: 'clear',
        unlocked: false,
        unlockRequirement: 'Win 50 matches',
        unlockAchievement: 'unbeatable'
    },
    
    neonCity: {
        id: 'neonCity',
        name: 'Neon City',
        groundColor: '#2F4F4F',
        skyColors: ['#FF00FF', '#00FFFF'],
        grassBlades: false,
        description: 'Futuristic cyberpunk arena',
        weather: 'neon',
        unlocked: false,
        unlockRequirement: 'Play 100 matches',
        unlockAchievement: 'marathonMan'
    },
    
    candyLand: {
        id: 'candyLand',
        name: 'Candy Land',
        groundColor: '#FFB6C1',
        skyColors: ['#FFE4E1', '#FFC0CB'],
        grassBlades: false,
        description: 'Sweet sugary wonderland',
        weather: 'sweet',
        unlocked: false,
        unlockRequirement: 'Score in first 10 seconds',
        unlockAchievement: 'quickDraw'
    },
    
    jungleVines: {
        id: 'jungleVines',
        name: 'Jungle Vines',
        groundColor: '#2F4F2F',
        skyColors: ['#9ACD32', '#556B2F'],
        grassBlades: true,
        description: 'Dense tropical jungle',
        weather: 'humid',
        unlocked: false,
        unlockRequirement: 'Win 10 perfect games',
        unlockAchievement: 'shutoutKing'
    },
    
    crystalCavern: {
        id: 'crystalCavern',
        name: 'Crystal Cavern',
        groundColor: '#663399',
        skyColors: ['#9370DB', '#8A2BE2'],
        grassBlades: false,
        description: 'Glittering gem-filled cave',
        weather: 'sparkly',
        unlocked: false,
        unlockRequirement: 'Score 1000 goals',
        unlockAchievement: 'legendary'
    }
};

export function getArenaArray() {
    return Object.values(ARENAS);
}

export function getArenaById(id) {
    return ARENAS[id];
}

export function drawArenaBackground(ctx, arena, width, height, qualitySettings = null, gameMode = null, towerLevel = 1) {
    const groundHeight = height * 0.3;
    const groundY = height - groundHeight;
    
    // Sky gradient (richer with midpoint)
    const skyGradient = ctx.createLinearGradient(0, 0, 0, height);
    skyGradient.addColorStop(0, arena.skyColors[0]);
    skyGradient.addColorStop(0.6, arena.skyColors[1]);
    skyGradient.addColorStop(1, shadeColor(arena.skyColors[1], -15));
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, width, height);
    
    // Atmospheric haze near horizon
    const hazeGrad = ctx.createLinearGradient(0, groundY - 40, 0, groundY + 10);
    hazeGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
    hazeGrad.addColorStop(1, 'rgba(255, 255, 255, 0.06)');
    ctx.fillStyle = hazeGrad;
    ctx.fillRect(0, groundY - 40, width, 50);
    
    // Special weather effects in background (skip on low quality)
    const showWeatherEffects = !qualitySettings || (typeof qualitySettings.getSetting === 'function' ? qualitySettings.getSetting('grassBlades') !== false : qualitySettings.grassBlades !== false);
    if (showWeatherEffects) {
        if (arena.weather === 'snowy') {
            drawSnowfall(ctx, width, height);
        } else if (arena.weather === 'space') {
            drawStars(ctx, width, height);
        } else if (arena.weather === 'neon') {
            drawNeonGrid(ctx, width, height);
        } else if (arena.weather === 'sparkly') {
            drawSparkles(ctx, width, height);
        }
    }
    
    // 1. Draw distant background scenery (sun, clouds, hills, mountains, skylines, giant mushrooms)
    drawDistantScenery(ctx, arena, width, height, groundY, showWeatherEffects);
    
    // Ground
    const groundGradient = ctx.createLinearGradient(0, groundY, 0, height);
    groundGradient.addColorStop(0, arena.groundColor);
    groundGradient.addColorStop(0.4, shadeColor(arena.groundColor, -8));
    groundGradient.addColorStop(1, shadeColor(arena.groundColor, -25));
    ctx.fillStyle = groundGradient;
    ctx.fillRect(0, groundY, width, groundHeight);
    
    // Ground line (softer glow)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(width, groundY);
    ctx.stroke();
    
    // Subtle ground shadow at the top of the ground
    const groundShadow = ctx.createLinearGradient(0, groundY, 0, groundY + 8);
    groundShadow.addColorStop(0, 'rgba(0, 0, 0, 0.12)');
    groundShadow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = groundShadow;
    ctx.fillRect(0, groundY, width, 8);
    
    // Special ground textures
    if (!arena.grassBlades) {
        if (arena.weather === 'dusty' || arena.weather === 'hot') {
            drawDirtTexture(ctx, width, height, groundHeight);
        } else if (arena.weather === 'icy') {
            drawIceTexture(ctx, width, height, groundHeight);
        } else if (arena.weather === 'sweet') {
            drawCandyTexture(ctx, width, height, groundHeight);
        }
    }
    
    // 2. Draw ground details / scenery (flowers, grass, sand patterns, water lilies, crystals, etc.)
    drawGroundDetails(ctx, arena, width, height, groundY, groundHeight, showWeatherEffects);
    
    // --- Field Markings ---
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
    ctx.lineWidth = 2;
    
    // Center line (solid, subtle)
    ctx.beginPath();
    ctx.moveTo(width / 2, groundY);
    ctx.lineTo(width / 2, height);
    ctx.stroke();
    
    // Center circle
    const circleRadius = groundHeight * 0.5;
    ctx.beginPath();
    ctx.arc(width / 2, groundY + groundHeight / 2, circleRadius, 0, Math.PI * 2);
    ctx.stroke();
    
    // Center dot
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.arc(width / 2, groundY + groundHeight / 2, 4, 0, Math.PI * 2);
    ctx.fill();
    
    // Left penalty area
    const penWidth = 80;
    const penHeight = groundHeight * 0.7;
    const penTop = groundY + (groundHeight - penHeight) / 2;
    ctx.strokeRect(0, penTop, penWidth, penHeight);
    
    // Right penalty area
    ctx.strokeRect(width - penWidth, penTop, penWidth, penHeight);
    
    ctx.restore();
    
    // 3. Draw foreground scenery (overhanging branches, vines, framing details)
    drawForegroundScenery(ctx, arena, width, height, groundY, showWeatherEffects);
    
    // Subtle vignette overlay
    const vigGrad = ctx.createRadialGradient(width / 2, height / 2, height * 0.3, width / 2, height / 2, height * 0.9);
    vigGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vigGrad.addColorStop(1, 'rgba(0, 0, 0, 0.15)');
    ctx.fillStyle = vigGrad;
    ctx.fillRect(0, 0, width, height);
}

function drawDistantScenery(ctx, arena, width, height, groundY, showWeather) {
    ctx.save();
    switch (arena.id) {
        case 'grassField': {
            // Warm sun with radial glow
            ctx.fillStyle = 'rgba(255, 253, 230, 0.9)';
            ctx.shadowColor = 'rgba(255, 240, 150, 0.5)';
            ctx.shadowBlur = 30;
            ctx.beginPath();
            ctx.arc(width * 0.25, height * 0.25, 35, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            // Distant rolling hills
            ctx.fillStyle = '#396322';
            ctx.beginPath();
            ctx.ellipse(width * 0.3, groundY + 10, width * 0.4, 50, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#417228';
            ctx.beginPath();
            ctx.ellipse(width * 0.75, groundY + 15, width * 0.5, 40, 0, 0, Math.PI * 2);
            ctx.fill();

            // Clouds
            const t = Date.now() * 0.005;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
            let cx1 = (width * 0.1 + t * 4) % (width + 200) - 100;
            ctx.beginPath();
            ctx.arc(cx1, height * 0.2, 20, 0, Math.PI * 2);
            ctx.arc(cx1 + 15, height * 0.18, 25, 0, Math.PI * 2);
            ctx.arc(cx1 + 35, height * 0.2, 18, 0, Math.PI * 2);
            ctx.fill();

            let cx2 = (width * 0.6 + t * 2.5) % (width + 200) - 100;
            ctx.beginPath();
            ctx.arc(cx2, height * 0.15, 15, 0, Math.PI * 2);
            ctx.arc(cx2 + 12, height * 0.13, 20, 0, Math.PI * 2);
            ctx.arc(cx2 + 25, height * 0.15, 12, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        case 'dirtPatch': {
            // Hazy Sun
            ctx.fillStyle = 'rgba(255, 200, 150, 0.4)';
            ctx.beginPath();
            ctx.arc(width * 0.5, height * 0.3, 50, 0, Math.PI * 2);
            ctx.fill();

            // Mesas/Canyons
            ctx.fillStyle = '#735213';
            ctx.beginPath();
            ctx.moveTo(width * 0.1, groundY);
            ctx.lineTo(width * 0.15, groundY - 60);
            ctx.lineTo(width * 0.35, groundY - 60);
            ctx.lineTo(width * 0.4, groundY);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = '#8B651B';
            ctx.beginPath();
            ctx.moveTo(width * 0.55, groundY);
            ctx.lineTo(width * 0.6, groundY - 45);
            ctx.lineTo(width * 0.85, groundY - 45);
            ctx.lineTo(width * 0.9, groundY);
            ctx.closePath();
            ctx.fill();
            break;
        }
        case 'leafArena': {
            // Giant canopy silhouettes
            ctx.fillStyle = 'rgba(34, 139, 34, 0.15)';
            ctx.beginPath();
            ctx.arc(width * 0.2, groundY, 150, 0, Math.PI * 2);
            ctx.arc(width * 0.8, groundY, 180, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = 'rgba(107, 142, 35, 0.1)';
            ctx.beginPath();
            ctx.arc(width * 0.5, groundY - 50, 120, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        case 'desertOasis': {
            // Intense Sun with flare
            ctx.fillStyle = 'rgba(255, 255, 220, 0.95)';
            ctx.shadowColor = 'rgba(255, 200, 100, 0.8)';
            ctx.shadowBlur = 40;
            ctx.beginPath();
            ctx.arc(width * 0.8, height * 0.2, 40, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            // Dunes
            ctx.fillStyle = '#D2B48C';
            ctx.beginPath();
            ctx.moveTo(0, groundY);
            ctx.quadraticCurveTo(width * 0.3, groundY - 50, width * 0.6, groundY);
            ctx.lineTo(0, groundY);
            ctx.fill();

            ctx.fillStyle = '#C5A059';
            ctx.beginPath();
            ctx.moveTo(width * 0.4, groundY);
            ctx.quadraticCurveTo(width * 0.75, groundY - 35, width, groundY);
            ctx.lineTo(width * 0.4, groundY);
            ctx.fill();

            // Glistening water line
            ctx.fillStyle = '#4682B4';
            ctx.beginPath();
            ctx.ellipse(width * 0.35, groundY - 2, 70, 6, 0, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        case 'snowyPark': {
            // Snowy hills
            ctx.fillStyle = '#D2E6F5';
            ctx.beginPath();
            ctx.moveTo(0, groundY);
            ctx.quadraticCurveTo(width * 0.25, groundY - 30, width * 0.5, groundY);
            ctx.quadraticCurveTo(width * 0.75, groundY - 45, width, groundY);
            ctx.lineTo(width, groundY);
            ctx.lineTo(0, groundY);
            ctx.fill();

            // Pine trees
            ctx.fillStyle = '#5A758C';
            for (let px of [width * 0.15, width * 0.45, width * 0.8]) {
                ctx.beginPath();
                ctx.moveTo(px, groundY);
                ctx.lineTo(px - 15, groundY - 40);
                ctx.lineTo(px + 15, groundY - 40);
                ctx.closePath();
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(px, groundY - 20);
                ctx.lineTo(px - 10, groundY - 55);
                ctx.lineTo(px + 10, groundY - 55);
                ctx.closePath();
                ctx.fill();
            }
            break;
        }
        case 'volcanicRock': {
            // Volcano
            ctx.fillStyle = '#211812';
            ctx.beginPath();
            ctx.moveTo(width * 0.3, groundY);
            ctx.lineTo(width * 0.5, groundY - 120);
            ctx.lineTo(width * 0.7, groundY);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = '#FF4500';
            ctx.beginPath();
            ctx.ellipse(width * 0.5, groundY - 120, 15, 5, 0, 0, Math.PI * 2);
            ctx.fill();

            // Glowing smoke
            const t = Date.now() * 0.001;
            ctx.fillStyle = 'rgba(255, 69, 0, 0.15)';
            ctx.beginPath();
            ctx.arc(width * 0.5 + Math.sin(t) * 10, groundY - 140, 30 + Math.sin(t) * 5, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        case 'mushroomForest': {
            const colors = ['#9370DB', '#BA55D3', '#DDA0DD'];
            for (let i = 0; i < 3; i++) {
                const mx = [width * 0.2, width * 0.5, width * 0.8][i];
                const mH = [80, 110, 70][i];
                const mS = [20, 25, 18][i];

                ctx.fillStyle = 'rgba(230, 200, 250, 0.4)';
                ctx.fillRect(mx - mS / 4, groundY - mH, mS / 2, mH);

                ctx.fillStyle = colors[i % colors.length];
                ctx.beginPath();
                ctx.arc(mx, groundY - mH, mS, Math.PI, 0);
                ctx.fill();

                ctx.shadowColor = colors[i % colors.length];
                ctx.shadowBlur = 15;
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(mx - mS / 2, groundY - mH - mS / 3, mS / 6, 0, Math.PI * 2);
                ctx.arc(mx + mS / 3, groundY - mH - mS * 0.6, mS / 8, 0, Math.PI * 2);
                ctx.arc(mx, groundY - mH - mS * 0.4, mS / 7, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
            break;
        }
        case 'beachSand': {
            const t = Date.now() * 0.0015;
            const waveY = groundY - 10;
            ctx.fillStyle = '#1E90FF';
            ctx.fillRect(0, waveY, width, height - waveY);

            ctx.fillStyle = '#E0F6FF';
            ctx.beginPath();
            ctx.moveTo(0, groundY);
            for (let x = 0; x <= width; x += 30) {
                let wy = waveY + Math.sin(t + x * 0.05) * 3;
                ctx.lineTo(x, wy);
            }
            ctx.lineTo(width, groundY);
            ctx.closePath();
            ctx.fill();
            break;
        }
        case 'moonCrater': {
            ctx.shadowColor = 'rgba(74, 144, 226, 0.6)';
            ctx.shadowBlur = 25;
            ctx.fillStyle = '#1e3c72';
            ctx.beginPath();
            ctx.arc(width * 0.75, height * 0.25, 45, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#4a90e2';
            ctx.beginPath();
            ctx.arc(width * 0.75 + 10, height * 0.25 - 5, 20, 0, Math.PI * 2);
            ctx.arc(width * 0.75 - 15, height * 0.25 + 10, 15, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.beginPath();
            ctx.ellipse(width * 0.75, height * 0.25, 45, 12, Math.PI * 0.25, 0, Math.PI * 2);
            ctx.fill();
            
            // Reset shadow properties explicitly
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;

            ctx.fillStyle = '#505050';
            ctx.beginPath();
            ctx.moveTo(0, groundY);
            ctx.lineTo(width * 0.1, groundY - 25);
            ctx.lineTo(width * 0.25, groundY - 10);
            ctx.lineTo(width * 0.4, groundY - 35);
            ctx.lineTo(width * 0.6, groundY - 15);
            ctx.lineTo(width * 0.8, groundY - 40);
            ctx.lineTo(width, groundY);
            ctx.closePath();
            ctx.fill();
            break;
        }
        case 'autumnLeaves': {
            ctx.fillStyle = '#D2691E';
            ctx.beginPath();
            ctx.ellipse(width * 0.25, groundY + 10, width * 0.4, 45, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#CD853F';
            ctx.beginPath();
            ctx.ellipse(width * 0.75, groundY + 12, width * 0.45, 35, 0, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        case 'iceCave': {
            ctx.fillStyle = 'rgba(135, 206, 235, 0.25)';
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                let cx = (i * width / 5);
                ctx.moveTo(cx, 0);
                ctx.lineTo(cx - 20, height * 0.4);
                ctx.lineTo(cx + 20, height * 0.4);
                ctx.closePath();
            }
            ctx.fill();
            break;
        }
        case 'gardenPond': {
            ctx.fillStyle = '#2E8B57';
            ctx.fillRect(0, groundY - 15, width, 15);

            ctx.fillStyle = '#8B4513';
            ctx.strokeStyle = '#228B22';
            ctx.lineWidth = 2;
            for (let px of [width * 0.1, width * 0.12, width * 0.88, width * 0.9]) {
                ctx.beginPath();
                ctx.moveTo(px, groundY);
                ctx.lineTo(px + 3, groundY - 45);
                ctx.stroke();

                ctx.fillRect(px + 1, groundY - 45, 4, 15);
            }
            break;
        }
        case 'neonCity': {
            ctx.save();
            const bWidths = [60, 80, 50, 90, 70];
            const bHeights = [180, 220, 140, 260, 170];
            const bPositions = [width * 0.05, width * 0.22, width * 0.4, width * 0.58, width * 0.8];

            for (let i = 0; i < 5; i++) {
                const bx = bPositions[i];
                const bw = bWidths[i];
                const bh = bHeights[i];

                ctx.fillStyle = '#12121c';
                ctx.fillRect(bx, groundY - bh, bw, bh);

                ctx.fillStyle = i % 2 === 0 ? '#FF00FF' : '#00FFFF';
                for (let wy = groundY - bh + 20; wy < groundY - 10; wy += 35) {
                    for (let wx = bx + 10; wx < bx + bw - 10; wx += 20) {
                        if ((wx + wy) % 3 === 0) {
                            ctx.fillRect(wx, wy, 6, 8);
                        }
                    }
                }
            }
            ctx.restore();
            break;
        }
        case 'candyLand': {
            ctx.fillStyle = '#FFF0F5';
            ctx.beginPath();
            ctx.ellipse(width * 0.3, groundY, width * 0.35, 55, 0, 0, Math.PI * 2);
            ctx.ellipse(width * 0.7, groundY, width * 0.4, 45, 0, 0, Math.PI * 2);
            ctx.fill();

            const candyColors = ['#FF69B4', '#FFD700', '#ADD8E6'];
            for (let i = 0; i < 3; i++) {
                const cx = [width * 0.15, width * 0.5, width * 0.85][i];
                const cH = [75, 100, 65][i];
                const cR = [20, 28, 18][i];

                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(cx, groundY);
                ctx.lineTo(cx, groundY - cH);
                ctx.stroke();

                ctx.fillStyle = candyColors[i];
                ctx.beginPath();
                ctx.arc(cx, groundY - cH, cR, 0, Math.PI * 2);
                ctx.fill();

                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(cx, groundY - cH, cR * 0.6, 0, Math.PI * 1.5);
                ctx.stroke();
            }
            break;
        }
        case 'jungleVines': {
            ctx.fillStyle = 'rgba(34, 75, 34, 0.4)';
            ctx.beginPath();
            ctx.arc(width * 0.2, groundY, 180, 0, Math.PI * 2);
            ctx.arc(width * 0.8, groundY, 200, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = 'rgba(20, 50, 20, 0.5)';
            ctx.beginPath();
            ctx.arc(width * 0.45, groundY - 20, 150, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        case 'crystalCavern': {
            ctx.fillStyle = 'rgba(128, 0, 128, 0.25)';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(width * 0.2, height * 0.35);
            ctx.lineTo(width * 0.35, height * 0.2);
            ctx.lineTo(width * 0.6, height * 0.4);
            ctx.lineTo(width * 0.75, height * 0.25);
            ctx.lineTo(width, height * 0.35);
            ctx.lineTo(width, 0);
            ctx.closePath();
            ctx.fill();
            break;
        }
    }
    ctx.restore();
}

function drawGroundDetails(ctx, arena, width, height, groundY, groundHeight, showWeather) {
    ctx.save();
    switch (arena.id) {
        case 'grassField': {
            if (showWeather) {
                ctx.strokeStyle = '#5a903c';
                ctx.lineWidth = 1.2;
                for (let i = 0; i < 45; i++) {
                    let gx = (i * 17) % width;
                    let gy = groundY + ((i * 11) % groundHeight);
                    ctx.beginPath();
                    ctx.moveTo(gx, gy);
                    ctx.lineTo(gx - 2, gy - 7);
                    ctx.stroke();
                }
            }
            for (let i = 0; i < 15; i++) {
                let fx = (i * 47) % width;
                let fy = groundY + ((i * 23) % groundHeight);
                ctx.fillStyle = '#FFFFFF';
                ctx.beginPath();
                ctx.arc(fx, fy, 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.arc(fx, fy, 0.8, 0, Math.PI * 2);
                ctx.fill();
            }
            break;
        }
        case 'dirtPatch': {
            ctx.fillStyle = 'rgba(65, 45, 20, 0.4)';
            for (let i = 0; i < 30; i++) {
                let rx = (i * 29) % width;
                let ry = groundY + ((i * 19) % groundHeight);
                let rs = 2 + (i % 3);
                ctx.fillRect(rx, ry, rs, rs);
            }
            break;
        }
        case 'leafArena': {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, groundY + groundHeight / 2);
            ctx.quadraticCurveTo(width * 0.5, groundY + groundHeight * 0.4, width, groundY + groundHeight * 0.5);
            ctx.stroke();

            ctx.lineWidth = 1.5;
            for (let i = 1; i <= 6; i++) {
                let vx = (i * width / 7);
                ctx.beginPath();
                ctx.moveTo(vx, groundY + groundHeight * 0.45);
                ctx.lineTo(vx - 20, groundY);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(vx, groundY + groundHeight * 0.45);
                ctx.lineTo(vx + 20, groundY + groundHeight);
                ctx.stroke();
            }

            ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.lineWidth = 0.8;
            for (let i = 0; i < 4; i++) {
                let dx = [width * 0.2, width * 0.45, width * 0.75, width * 0.9][i];
                let dy = groundY + [25, 45, 15, 35][i];
                ctx.beginPath();
                ctx.arc(dx, dy, 6, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = '#FFFFFF';
                ctx.beginPath();
                ctx.arc(dx - 2, dy - 2, 1.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
            }
            break;
        }
        case 'desertOasis': {
            ctx.fillStyle = '#2E8B57';
            for (let i = 0; i < 3; i++) {
                let cx = [width * 0.15, width * 0.5, width * 0.85][i];
                let cy = groundY + [30, 15, 40][i];
                ctx.fillRect(cx - 3, cy - 15, 6, 15);
                ctx.fillRect(cx - 8, cy - 10, 5, 3);
                ctx.fillRect(cx - 8, cy - 14, 3, 5);
                ctx.fillRect(cx + 3, cy - 8, 5, 3);
                ctx.fillRect(cx + 6, cy - 12, 3, 5);
            }
            break;
        }
        case 'snowyPark': {
            ctx.fillStyle = '#FFFFFF';
            for (let i = 0; i < 15; i++) {
                let sx = (i * 59) % width;
                let sy = groundY + ((i * 17) % groundHeight);
                ctx.beginPath();
                ctx.ellipse(sx, sy, 12, 4, 0, 0, Math.PI * 2);
                ctx.fill();
            }
            break;
        }
        case 'volcanicRock': {
            ctx.strokeStyle = '#FF4500';
            ctx.shadowColor = '#FF0000';
            ctx.shadowBlur = 8;
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            for (let i = 0; i < 4; i++) {
                let lx = (i * width / 3) + 20;
                ctx.moveTo(lx, groundY);
                ctx.lineTo(lx + 20, groundY + groundHeight * 0.3);
                ctx.lineTo(lx - 10, groundY + groundHeight * 0.7);
                ctx.lineTo(lx + 15, groundY + groundHeight);
            }
            ctx.stroke();
            ctx.shadowBlur = 0;
            break;
        }
        case 'mushroomForest': {
            ctx.fillStyle = 'rgba(0, 255, 255, 0.15)';
            ctx.shadowColor = '#00FFFF';
            ctx.shadowBlur = 10;
            for (let i = 0; i < 8; i++) {
                let mx = (i * 89) % width;
                let my = groundY + ((i * 27) % groundHeight);
                ctx.beginPath();
                ctx.arc(mx, my, 8, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.shadowBlur = 0;
            break;
        }
        case 'beachSand': {
            ctx.fillStyle = 'rgba(255, 245, 230, 0.8)';
            for (let i = 0; i < 6; i++) {
                let sx = [width * 0.25, width * 0.4, width * 0.7, width * 0.82, width * 0.1, width * 0.95][i];
                let sy = groundY + [10, 45, 25, 40, 30, 15][i];
                ctx.beginPath();
                ctx.arc(sx, sy, 3, Math.PI, 0);
                ctx.closePath();
                ctx.fill();
            }
            ctx.fillStyle = '#FF7F50';
            for (let i = 0; i < 4; i++) {
                let sx = [width * 0.35, width * 0.6, width * 0.18, width * 0.88][i];
                let sy = groundY + [35, 12, 42, 28][i];
                ctx.beginPath();
                ctx.arc(sx, sy, 2, 0, Math.PI * 2);
                ctx.fill();
            }
            break;
        }
        case 'moonCrater': {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
            ctx.lineWidth = 1.5;
            for (let i = 0; i < 6; i++) {
                let cx = (i * 137) % width;
                let cy = groundY + ((i * 31) % groundHeight);
                let cr = 8 + (i % 4) * 4;
                ctx.beginPath();
                ctx.ellipse(cx, cy, cr, cr * 0.4, 0, 0, Math.PI * 2);
                ctx.stroke();
            }
            break;
        }
        case 'autumnLeaves': {
            const leafColors = ['#CD5C5C', '#FF8C00', '#FFD700', '#8B4513'];
            for (let i = 0; i < 25; i++) {
                let lx = (i * 37) % width;
                let ly = groundY + ((i * 19) % groundHeight);
                ctx.fillStyle = leafColors[i % leafColors.length];
                ctx.beginPath();
                ctx.ellipse(lx, ly, 4, 2, Math.PI * 0.25 * (i % 4), 0, Math.PI * 2);
                ctx.fill();
            }
            break;
        }
        case 'iceCave': {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
            for (let i = 0; i < 6; i++) {
                let ix = (i * 149) % width;
                let iy = groundY + ((i * 23) % groundHeight);
                ctx.beginPath();
                ctx.moveTo(ix, iy);
                ctx.lineTo(ix + 60, iy);
                ctx.lineTo(ix + 40, iy + 4);
                ctx.lineTo(ix - 20, iy + 4);
                ctx.closePath();
                ctx.fill();
            }
            break;
        }
        case 'gardenPond': {
            ctx.fillStyle = '#228B22';
            for (let i = 0; i < 8; i++) {
                let lx = (i * 113) % width;
                let ly = groundY + ((i * 21) % groundHeight);
                ctx.beginPath();
                ctx.arc(lx, ly, 7, 0, Math.PI * 1.75);
                ctx.lineTo(lx, ly);
                ctx.closePath();
                ctx.fill();

                if (i % 3 === 0) {
                    ctx.fillStyle = '#FFC0CB';
                    ctx.beginPath();
                    ctx.arc(lx, ly, 3, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = '#228B22';
                }
            }
            break;
        }
        case 'neonCity': {
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.25)';
            ctx.lineWidth = 1;
            for (let gy = groundY; gy < height; gy += 15) {
                ctx.beginPath();
                ctx.moveTo(0, gy);
                ctx.lineTo(width, gy);
                ctx.stroke();
            }
            break;
        }
        case 'candyLand': {
            const sprinkleColors = ['#FF69B4', '#1E90FF', '#FFD700', '#FFFFFF', '#00FF00'];
            for (let i = 0; i < 40; i++) {
                let sx = (i * 41) % width;
                let sy = groundY + ((i * 13) % groundHeight);
                ctx.fillStyle = sprinkleColors[i % sprinkleColors.length];
                ctx.fillRect(sx, sy, 4, 1.5);
            }
            break;
        }
        case 'jungleVines': {
            ctx.fillStyle = '#2E4F2F';
            for (let i = 0; i < 15; i++) {
                let jx = (i * 61) % width;
                let jy = groundY + ((i * 23) % groundHeight);
                ctx.beginPath();
                ctx.ellipse(jx, jy, 15, 6, 0, 0, Math.PI * 2);
                ctx.fill();
            }
            break;
        }
        case 'crystalCavern': {
            const crystalColors = ['#BA55D3', '#3CB371', '#FF69B4'];
            for (let i = 0; i < 4; i++) {
                let cx = [width * 0.1, width * 0.35, width * 0.65, width * 0.85][i];
                let cy = groundY + [10, 35, 15, 45][i];

                ctx.fillStyle = crystalColors[i % crystalColors.length];
                ctx.shadowColor = crystalColors[i % crystalColors.length];
                ctx.shadowBlur = 8;

                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx - 5, cy - 12);
                ctx.lineTo(cx, cy - 18);
                ctx.lineTo(cx + 5, cy - 12);
                ctx.closePath();
                ctx.fill();

                ctx.shadowBlur = 0;
            }
            break;
        }
    }
    ctx.restore();
}

function drawForegroundScenery(ctx, arena, width, height, groundY, showWeather) {
    ctx.save();
    switch (arena.id) {
        case 'beachSand': {
            ctx.fillStyle = '#228B22';
            ctx.beginPath();
            ctx.ellipse(0, 0, 100, 35, Math.PI * 0.15, 0, Math.PI * 2);
            ctx.ellipse(0, 0, 120, 25, Math.PI * 0.25, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.ellipse(width, 0, 100, 35, -Math.PI * 0.15, 0, Math.PI * 2);
            ctx.ellipse(width, 0, 120, 25, -Math.PI * 0.25, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        case 'jungleVines': {
            ctx.strokeStyle = '#228B22';
            ctx.lineWidth = 3;
            for (let px of [30, 80, width - 40, width - 110]) {
                ctx.beginPath();
                ctx.moveTo(px, 0);
                ctx.quadraticCurveTo(px - 10, height * 0.2, px + 5, height * 0.35);
                ctx.stroke();

                ctx.fillStyle = '#556B2F';
                for (let l = 1; l <= 3; l++) {
                    ctx.beginPath();
                    ctx.ellipse(px, height * 0.1 * l, 8, 4, Math.PI * 0.15, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            break;
        }
        case 'iceCave': {
            ctx.fillStyle = 'rgba(175, 238, 238, 0.4)';
            for (let px = 0; px < width; px += 40) {
                ctx.beginPath();
                ctx.moveTo(px, 0);
                ctx.lineTo(px + 20, 15 + (px % 3) * 10);
                ctx.lineTo(px + 40, 0);
                ctx.closePath();
                ctx.fill();
            }
            break;
        }
        case 'leafArena': {
            ctx.fillStyle = 'rgba(46, 139, 87, 0.85)';
            ctx.beginPath();
            ctx.ellipse(0, 0, 150, 40, Math.PI * 0.2, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        case 'candyLand': {
            ctx.strokeStyle = '#FF69B4';
            ctx.lineWidth = 8;
            ctx.beginPath();
            ctx.moveTo(0, height);
            ctx.lineTo(0, height * 0.6);
            ctx.quadraticCurveTo(5, height * 0.5, 20, height * 0.55);
            ctx.stroke();
            break;
        }
        case 'volcanicRock': {
            if (showWeather) {
                const t = Date.now() * 0.001;
                ctx.fillStyle = 'rgba(255, 99, 71, 0.6)';
                for (let i = 0; i < 15; i++) {
                    let ax = (i * 73 + t * 10) % width;
                    let ay = (height - (i * 53 + t * 40) % height) % height;
                    ctx.beginPath();
                    ctx.arc(ax, ay, 1.5 + (i % 3), 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            break;
        }
        case 'mushroomForest': {
            if (showWeather) {
                const t = Date.now() * 0.0008;
                ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
                for (let i = 0; i < 10; i++) {
                    let sx = (i * 97 + Math.sin(t + i) * 30) % width;
                    let sy = (height - (i * 61 + t * 25) % height) % height;
                    ctx.beginPath();
                    ctx.arc(sx, sy, 2 + (i % 2), 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            break;
        }
    }
    ctx.restore();
}

function drawDirtTexture(ctx, width, height, groundHeight) {
    ctx.fillStyle = 'rgba(101, 67, 33, 0.3)';
    
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * width;
        const y = height - groundHeight + Math.random() * groundHeight;
        const size = 1 + Math.random() * 3;
        
        ctx.fillRect(x, y, size, size);
    }
}

function drawIceTexture(ctx, width, height, groundHeight) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    
    // Draw ice cracks
    for (let i = 0; i < 15; i++) {
        const startX = Math.random() * width;
        const startY = height - groundHeight + Math.random() * groundHeight;
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + (Math.random() - 0.5) * 100, startY + (Math.random() - 0.5) * 50);
        ctx.stroke();
    }
}

function drawCandyTexture(ctx, width, height, groundHeight) {
    // Draw subtle pastel stripes instead of dots
    const stripeColors = ['rgba(255, 182, 193, 0.2)', 'rgba(255, 192, 203, 0.2)', 'rgba(255, 228, 225, 0.2)'];
    const stripeWidth = 40;
    
    for (let i = 0; i < width / stripeWidth; i++) {
        ctx.fillStyle = stripeColors[i % stripeColors.length];
        ctx.fillRect(i * stripeWidth, height - groundHeight, stripeWidth, groundHeight);
    }
    
    // Add a subtle candy cane border at the top
    ctx.strokeStyle = 'rgba(255, 105, 180, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, height - groundHeight);
    ctx.lineTo(width, height - groundHeight);
    ctx.stroke();
}

function drawSnowfall(ctx, width, height) {
    const time = Date.now() / 1000;
    for (let i = 0; i < 60; i++) {
        const x = (i * 37 + time * (15 + (i % 5) * 3) + Math.sin(time * 0.5 + i) * 15) % width;
        const y = (i * 53 + time * (25 + (i % 4) * 5)) % height;
        const size = 1.5 + (i % 4);
        const alpha = 0.3 + (i % 3) * 0.15;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawStars(ctx, width, height) {
    const time = Date.now() / 1000;
    // Fixed star positions with twinkling
    for (let i = 0; i < 120; i++) {
        const x = (i * 73) % width;
        const y = (i * 127) % (height * 0.7);
        const size = 0.5 + (i % 4);
        const twinkle = 0.4 + 0.4 * Math.sin(time * (1 + (i % 3) * 0.5) + i);
        
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawNeonGrid(ctx, width, height) {
    const time = Date.now() / 2000;
    
    // Perspective neon grid
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 50) {
        const pulse = 0.15 + 0.1 * Math.sin(time + x * 0.01);
        ctx.strokeStyle = `rgba(255, 0, 255, ${pulse})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height * 0.7);
        ctx.stroke();
    }
    
    for (let y = 0; y < height * 0.7; y += 50) {
        const pulse = 0.15 + 0.1 * Math.sin(time * 1.5 + y * 0.01);
        ctx.strokeStyle = `rgba(0, 255, 255, ${pulse})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
    
    // Scanline effect
    ctx.fillStyle = 'rgba(0, 255, 255, 0.03)';
    const scanY = ((time * 80) % (height * 0.7));
    ctx.fillRect(0, scanY, width, 3);
}

function drawSparkles(ctx, width, height) {
    const time = Date.now() / 500;
    const colors = ['rgba(255, 215, 0, 0.6)', 'rgba(255, 105, 180, 0.6)', 'rgba(138, 43, 226, 0.6)'];
    
    for (let i = 0; i < 30; i++) {
        const x = (i * 67 + Math.sin(time + i) * 20) % width;
        const y = (i * 43 + Math.cos(time + i) * 20) % (height * 0.7);
        const size = 2 + Math.sin(time * 2 + i) * 2;
        
        ctx.fillStyle = colors[i % colors.length];
        ctx.beginPath();
        ctx.arc(x, y, Math.abs(size), 0, Math.PI * 2);
        ctx.fill();
    }
}

function shadeColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255))
        .toString(16).slice(1);
}

export function isArenaUnlocked(arenaId, achievementManager) {
    const arena = ARENAS[arenaId];
    if (!arena) return false;
    
    // Always unlocked arenas (starters)
    if (arena.unlocked === true) return true;
    
    // Check if linked achievement is unlocked
    if (arena.unlockAchievement && achievementManager) {
        const achievement = achievementManager.achievements[arena.unlockAchievement];
        return achievement ? achievement.unlocked : false;
    }
    
    return false;
}

export function getUnlockedArenas(achievementManager) {
    return getArenaArray().filter(arena => isArenaUnlocked(arena.id, achievementManager));
}

export function getLockedArenas(achievementManager) {
    return getArenaArray().filter(arena => !isArenaUnlocked(arena.id, achievementManager));
}
