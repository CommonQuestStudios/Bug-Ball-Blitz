// celebrations.js - Goal celebration animations

export const CELEBRATIONS = {
    classic: {
        id: 'classic',
        name: 'Classic',
        icon: '⚽',
        description: 'Standard goal celebration',
        unlockCondition: 'Default',
        unlocked: true
    },
    
    fireworks: {
        id: 'fireworks',
        name: 'Fireworks',
        icon: '🎆',
        description: 'Fireworks shoot from your goal',
        unlockCondition: 'Win 5 matches',
        requiredWins: 5,
        unlocked: false
    },
    
    streamers: {
        id: 'streamers',
        name: 'Streamers',
        icon: '🎊',
        description: 'Colorful streamers burst out',
        unlockCondition: 'Win 10 matches',
        requiredWins: 10,
        unlocked: false
    },
    
    discoBall: {
        id: 'discoBall',
        name: 'Disco Party',
        icon: '🪩',
        description: 'Disco ball with spinning lights',
        unlockCondition: 'Win 15 matches',
        requiredWins: 15,
        unlocked: false
    },
    
    confetti: {
        id: 'confetti',
        name: 'Confetti Blast',
        icon: '🎉',
        description: 'Massive confetti explosion',
        unlockCondition: 'Score 25 goals',
        requiredGoals: 25,
        unlocked: false
    },
    
    lightning: {
        id: 'lightning',
        name: 'Lightning Strike',
        icon: '⚡',
        description: 'Lightning bolts flash across',
        unlockCondition: 'Win 20 matches',
        requiredWins: 20,
        unlocked: false
    },
    
    rainbow: {
        id: 'rainbow',
        name: 'Rainbow Wave',
        icon: '🌈',
        description: 'Rainbow sweeps across field',
        unlockCondition: 'Score 50 goals',
        requiredGoals: 50,
        unlocked: false
    },
    
    starBurst: {
        id: 'starBurst',
        name: 'Star Burst',
        icon: '⭐',
        description: 'Stars explode from center',
        unlockCondition: 'Win 30 matches',
        requiredWins: 30,
        unlocked: false
    },
    
    heartExplosion: {
        id: 'heartExplosion',
        name: 'Heart Explosion',
        icon: '💖',
        description: 'Hearts float upward romantically',
        unlockCondition: 'Win 25 matches',
        requiredWins: 25,
        unlocked: false
    },
    
    champion: {
        id: 'champion',
        name: 'Champion Crown',
        icon: '👑',
        description: 'Golden crown appears above',
        unlockCondition: 'Complete Tower Level 20',
        requiredTowerLevel: 20,
        unlocked: false
    },
    
    explosion: {
        id: 'explosion',
        name: 'Goal Explosion',
        icon: '💥',
        description: 'Massive explosion effect',
        unlockCondition: 'Score 35 goals',
        requiredGoals: 35,
        unlocked: false
    },
    
    treasure: {
        id: 'treasure',
        name: 'Treasure Chest',
        icon: '💎',
        description: 'Treasure chest opens with gems',
        unlockCondition: 'Win 35 matches',
        requiredWins: 35,
        unlocked: false
    },
    
    meteor: {
        id: 'meteor',
        name: 'Meteor Shower',
        icon: '☄️',
        description: 'Meteors rain from the sky',
        unlockCondition: 'Score 75 goals',
        requiredGoals: 75,
        unlocked: false
    },
    
    aurora: {
        id: 'aurora',
        name: 'Aurora Borealis',
        icon: '🌌',
        description: 'Northern lights shimmer',
        unlockCondition: 'Win 40 matches',
        requiredWins: 40,
        unlocked: false
    },
    
    galaxy: {
        id: 'galaxy',
        name: 'Galaxy Swirl',
        icon: '🌀',
        description: 'Swirling galaxy appears',
        unlockCondition: 'Score 100 goals',
        requiredGoals: 100,
        unlocked: false
    },
    
    dragons: {
        id: 'dragons',
        name: 'Dragon Flight',
        icon: '🐉',
        description: 'Dragons fly across the field',
        unlockCondition: 'Win 50 matches',
        requiredWins: 50,
        unlocked: false
    },
    
    tsunami: {
        id: 'tsunami',
        name: 'Tsunami Wave',
        icon: '🌊',
        description: 'Massive wave crashes through',
        unlockCondition: 'Complete Tower Level 15',
        requiredTowerLevel: 15,
        unlocked: false
    },
    
    volcano: {
        id: 'volcano',
        name: 'Volcanic Eruption',
        icon: '🌋',
        description: 'Lava erupts from the ground',
        unlockCondition: 'Score 125 goals',
        requiredGoals: 125,
        unlocked: false
    },
    
    phoenix: {
        id: 'phoenix',
        name: 'Phoenix Rising',
        icon: '🔥',
        description: 'Phoenix rises from flames',
        unlockCondition: 'Win 60 matches',
        requiredWins: 60,
        unlocked: false
    },
    
    blackhole: {
        id: 'blackhole',
        name: 'Black Hole',
        icon: '⚫',
        description: 'Black hole pulls everything in',
        unlockCondition: 'Complete Tower Level 18',
        requiredTowerLevel: 18,
        unlocked: false
    }
};

export function getCelebrationArray() {
    return Object.values(CELEBRATIONS);
}

export function getCelebrationById(id) {
    return CELEBRATIONS[id];
}

// Check if celebration is unlocked based on profile stats
export function checkCelebrationUnlock(celebration, profile) {
    if (celebration.unlocked) return true;
    
    const stats = profile.stats;
    
    if (celebration.requiredWins && stats.wins >= celebration.requiredWins) {
        return true;
    }
    
    if (celebration.requiredGoals && stats.goalsScored >= celebration.requiredGoals) {
        return true;
    }
    
    if (celebration.requiredTowerLevel && profile.tower.highestLevel >= celebration.requiredTowerLevel) {
        return true;
    }
    
    return false;
}

// Stateful physics engine and particle cache
class Particle {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.vx = config.vx || 0;
        this.vy = config.vy || 0;
        this.gravity = config.gravity !== undefined ? config.gravity : 0;
        this.friction = config.friction !== undefined ? config.friction : 1;
        this.size = config.size || 5;
        this.color = config.color || '#fff';
        this.alpha = config.alpha !== undefined ? config.alpha : 1;
        this.fadeSpeed = config.fadeSpeed || 0;
        this.rotation = config.rotation || 0;
        this.vRotation = config.vRotation || 0;
        this.shape = config.shape || 'circle'; // circle, square, star, heart, gem, sparkle, bubble, coin
        this.glow = config.glow || false;
        this.glowColor = config.glowColor || this.color;
        this.trail = config.trail || false;
        this.trailHistory = [];
        this.custom = config.custom || {};
    }

    update() {
        if (this.trail) {
            this.trailHistory.push({ x: this.x, y: this.y, alpha: this.alpha });
            if (this.trailHistory.length > 8) this.trailHistory.shift();
        }
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.vRotation;
        this.alpha -= this.fadeSpeed;
        if (this.alpha < 0) this.alpha = 0;
    }

    draw(ctx) {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;

        if (this.glow) {
            ctx.shadowColor = this.glowColor;
            ctx.shadowBlur = 15;
        }

        if (this.trail && this.trailHistory.length > 1) {
            ctx.beginPath();
            ctx.moveTo(this.trailHistory[0].x, this.trailHistory[0].y);
            for (let i = 1; i < this.trailHistory.length; i++) {
                ctx.lineTo(this.trailHistory[i].x, this.trailHistory[i].y);
            }
            ctx.strokeStyle = this.glowColor || this.color;
            ctx.lineWidth = this.size * 0.4;
            ctx.stroke();
        }

        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;

        switch (this.shape) {
            case 'circle':
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 'square': {
                const flutterScaleY = this.custom.flutterFreq ? Math.sin((this.custom.flutterPhase || 0) + this.rotation * 2) : 1;
                ctx.save();
                ctx.scale(1, flutterScaleY);
                ctx.fillRect(-this.size, -this.size, this.size * 2, this.size * 2);
                ctx.restore();
                break;
            }
            case 'star':
                drawStarShape(ctx, 0, 0, 5, this.size, this.size * 0.4);
                break;
            case 'heart':
                drawHeartShape(ctx, 0, 0, this.size);
                break;
            case 'gem':
                ctx.beginPath();
                ctx.moveTo(0, -this.size);
                ctx.lineTo(this.size * 0.8, 0);
                ctx.lineTo(0, this.size);
                ctx.lineTo(-this.size * 0.8, 0);
                ctx.closePath();
                ctx.fill();
                break;
            case 'sparkle':
                ctx.beginPath();
                ctx.moveTo(0, -this.size);
                ctx.quadraticCurveTo(0, 0, this.size, 0);
                ctx.quadraticCurveTo(0, 0, 0, this.size);
                ctx.quadraticCurveTo(0, 0, -this.size, 0);
                ctx.quadraticCurveTo(0, 0, 0, -this.size);
                ctx.closePath();
                ctx.fill();
                break;
            case 'bubble':
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.stroke();
                ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                ctx.beginPath();
                ctx.arc(-this.size * 0.3, -this.size * 0.3, this.size * 0.2, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 'coin':
                ctx.fillStyle = '#FFD700';
                ctx.strokeStyle = '#DAA520';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = '#DAA520';
                drawStarShape(ctx, 0, 0, 4, this.size * 0.5, this.size * 0.2);
                break;
        }

        ctx.restore();
    }
}

function drawStarShape(ctx, x, y, points, outer, inner) {
    ctx.beginPath();
    ctx.moveTo(x, y - outer);
    for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outer : inner;
        const angle = (Math.PI / points) * i - Math.PI / 2;
        ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
    }
    ctx.closePath();
    ctx.fill();
}

function drawHeartShape(ctx, x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
    ctx.bezierCurveTo(x - size, y + size / 2, x, y + size, x, y + size * 1.5);
    ctx.bezierCurveTo(x, y + size, x + size, y + size / 2, x + size, y);
    ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
    ctx.closePath();
    ctx.fill();
}

function drawRoundRect(ctx, x, y, width, height, radius) {
    if (typeof radius === 'number') {
        radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
        const defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
        radius = Object.assign(defaultRadius, radius);
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
}

let celebrationState = {
    type: null,
    frame: -1,
    particles: [],
    customData: {},
    width: 0,
    height: 0,
    side: null
};

// Initialize celebration stateful particles & custom properties
function initCelebration(type, side, width, height) {
    celebrationState.type = type;
    celebrationState.frame = 0;
    celebrationState.particles = [];
    celebrationState.customData = { shake: 0 };
    celebrationState.width = width;
    celebrationState.height = height;
    celebrationState.side = side;

    const goalX = side === 'left' ? 50 : width - 50;
    const goalY = height * 0.7 - 60;

    switch (type) {
        case 'classic': {
            // Gold & silver sparkling confetti fountain from scored goal
            for (let i = 0; i < 50; i++) {
                const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.0;
                const speed = 5 + Math.random() * 9;
                celebrationState.particles.push(new Particle({
                    x: goalX,
                    y: goalY,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    gravity: 0.22,
                    friction: 0.98,
                    size: 4 + Math.random() * 6,
                    color: Math.random() > 0.5 ? '#FFD700' : '#E0E0E0',
                    alpha: 1,
                    fadeSpeed: 0.008 + Math.random() * 0.008,
                    rotation: Math.random() * Math.PI * 2,
                    vRotation: (Math.random() - 0.5) * 0.2,
                    shape: Math.random() > 0.4 ? 'sparkle' : 'star',
                    glow: true,
                    glowColor: '#FFD700'
                }));
            }
            // Shoot some stars from the screen center
            for (let i = 0; i < 30; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = 4 + Math.random() * 6;
                celebrationState.particles.push(new Particle({
                    x: width / 2,
                    y: height / 2,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    gravity: 0.1,
                    friction: 0.97,
                    size: 5 + Math.random() * 6,
                    color: '#FFF8DC',
                    alpha: 1,
                    fadeSpeed: 0.015,
                    shape: 'star',
                    glow: true,
                    glowColor: '#FFD700'
                }));
            }
            break;
        }
        case 'fireworks': {
            // Setup sequential rocket launches
            celebrationState.customData.rockets = [
                { x: goalX, y: height, targetY: height * 0.18 + Math.random() * 80, vy: -12 - Math.random() * 3, vx: (side === 'left' ? 1.5 : -1.5) * (1.5 + Math.random() * 2), color: '#FF3366', launchFrame: 0, active: false },
                { x: width - goalX, y: height, targetY: height * 0.22 + Math.random() * 80, vy: -11 - Math.random() * 3, vx: (side === 'left' ? -1.5 : 1.5) * (1.5 + Math.random() * 2), color: '#33FF66', launchFrame: 8, active: false },
                { x: width / 2, y: height, targetY: height * 0.12 + Math.random() * 80, vy: -13 - Math.random() * 3, vx: (Math.random() - 0.5) * 4, color: '#33CCFF', launchFrame: 16, active: false },
                { x: goalX + (side === 'left' ? 140 : -140), y: height, targetY: height * 0.25 + Math.random() * 80, vy: -12 - Math.random() * 3, vx: (side === 'left' ? 1.2 : -1.5) * (1 + Math.random() * 2), color: '#FFD700', launchFrame: 24, active: false },
                { x: width / 2 + (Math.random() - 0.5) * 200, y: height, targetY: height * 0.18 + Math.random() * 80, vy: -12 - Math.random() * 3, vx: (Math.random() - 0.5) * 5, color: '#FF33FF', launchFrame: 32, active: false }
            ];
            break;
        }
        case 'streamers': {
            // ribbons and falling glitter
            celebrationState.customData.ribbons = [];
            for (let i = 0; i < 16; i++) {
                const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.3;
                const speed = 7 + Math.random() * 8;
                const colors = ['#FF1493', '#FFD700', '#00FFFF', '#FF4500', '#32CD32', '#9370DB', '#FF00FF'];
                celebrationState.customData.ribbons.push({
                    points: [{ x: goalX, y: goalY }],
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    gravity: 0.18,
                    friction: 0.98,
                    color: colors[i % colors.length],
                    waveFrequency: 0.08 + Math.random() * 0.12,
                    waveAmplitude: 5 + Math.random() * 6,
                    thickness: 6 + Math.random() * 5,
                    maxPoints: 25 + Math.floor(Math.random() * 15)
                });
            }
            // Add flutter stars
            for (let i = 0; i < 40; i++) {
                celebrationState.particles.push(new Particle({
                    x: Math.random() * width,
                    y: -20,
                    vx: (Math.random() - 0.5) * 3,
                    vy: 1.5 + Math.random() * 3,
                    gravity: 0.04,
                    friction: 0.99,
                    size: 4 + Math.random() * 6,
                    color: ['#FF1493', '#FFD700', '#00FFFF', '#FF4500', '#32CD32'][i % 5],
                    alpha: 1,
                    fadeSpeed: 0.005 + Math.random() * 0.005,
                    shape: Math.random() > 0.5 ? 'star' : 'square',
                    rotation: Math.random() * Math.PI * 2,
                    vRotation: (Math.random() - 0.5) * 0.15,
                    custom: { flutterFreq: 0.08, flutterPhase: Math.random() * Math.PI * 2 }
                }));
            }
            break;
        }
        case 'discoBall': {
            celebrationState.customData.ballY = -120;
            celebrationState.customData.targetBallY = 90;
            celebrationState.customData.beams = [];
            for (let i = 0; i < 8; i++) {
                celebrationState.customData.beams.push({
                    angle: (i / 8) * Math.PI * 2,
                    speed: 0.03 + (i % 2) * 0.015,
                    color: ['rgba(255, 0, 255, 0.2)', 'rgba(0, 255, 255, 0.2)', 'rgba(255, 255, 0, 0.2)', 'rgba(0, 255, 0, 0.2)', 'rgba(147, 112, 219, 0.2)'][i % 5],
                    width: 0.2 + Math.random() * 0.1
                });
            }
            // Spawn rising bubbles/motes
            for (let i = 0; i < 40; i++) {
                celebrationState.particles.push(new Particle({
                    x: Math.random() * width,
                    y: height + 20,
                    vx: (Math.random() - 0.5) * 1.5,
                    vy: -1.2 - Math.random() * 2.2,
                    friction: 0.99,
                    size: 3 + Math.random() * 6,
                    color: ['#FF00FF', '#00FFFF', '#FFFF00', '#00FF00', '#9370DB'][i % 5],
                    alpha: 0.4 + Math.random() * 0.5,
                    fadeSpeed: 0.004 + Math.random() * 0.006,
                    glow: true,
                    shape: 'bubble'
                }));
            }
            break;
        }
        case 'confetti': {
            // Massive confetti blast from both bottom corners of screen
            for (let i = 0; i < 140; i++) {
                const sideLeft = i % 2 === 0;
                const startX = sideLeft ? 0 : width;
                const startY = height;
                const angle = sideLeft ? -Math.PI / 4 - Math.random() * Math.PI / 6 : -3 * Math.PI / 4 + Math.random() * Math.PI / 6;
                const speed = 10 + Math.random() * 9;
                celebrationState.particles.push(new Particle({
                    x: startX,
                    y: startY,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    gravity: 0.16,
                    friction: 0.98,
                    size: 4 + Math.random() * 8,
                    color: ['#FF1493', '#FFD700', '#00FFFF', '#FF4500', '#32CD32', '#9370DB'][i % 6],
                    alpha: 1,
                    fadeSpeed: 0.006 + Math.random() * 0.008,
                    shape: Math.random() > 0.6 ? 'star' : (Math.random() > 0.4 ? 'square' : 'circle'),
                    rotation: Math.random() * Math.PI * 2,
                    vRotation: (Math.random() - 0.5) * 0.25,
                    custom: { flutterFreq: 0.06 + Math.random() * 0.08, flutterPhase: Math.random() * Math.PI * 2 }
                }));
            }
            break;
        }
        case 'lightning': {
            celebrationState.customData.bolts = [];
            celebrationState.customData.strikeLocations = [];
            celebrationState.customData.flashOpacity = 0;
            break;
        }
        case 'rainbow': {
            celebrationState.customData.progress = 0;
            celebrationState.customData.butterflies = [];
            for (let i = 0; i < 15; i++) {
                celebrationState.customData.butterflies.push({
                    t: Math.random(), // percentage progress along rainbow arch (0 to 1)
                    offsetY: (Math.random() - 0.5) * 40,
                    offsetX: (Math.random() - 0.5) * 40,
                    size: 8 + Math.random() * 7,
                    color: ['#FF1493', '#00FFFF', '#FF8C00', '#FFD700', '#ADFF2F', '#EE82EE'][i % 6],
                    speed: 0.008 + Math.random() * 0.008,
                    wingFlap: Math.random() * Math.PI
                });
            }
            break;
        }
        case 'starBurst': {
            // Explode 100 stars from screen center
            for (let i = 0; i < 100; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = 4 + Math.random() * 12;
                celebrationState.particles.push(new Particle({
                    x: width / 2,
                    y: height / 2,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    friction: 0.95,
                    gravity: 0.05,
                    size: 5 + Math.random() * 8,
                    color: ['#FFD700', '#FFCC00', '#FFFFFF', '#FF3399', '#33CCFF', '#9370DB'][i % 6],
                    alpha: 1,
                    fadeSpeed: 0.01 + Math.random() * 0.01,
                    shape: 'star',
                    glow: true,
                    trail: true
                }));
            }
            celebrationState.customData.shockwaves = [0, -10, -20];
            break;
        }
        case 'heartExplosion': {
            celebrationState.customData.giantHearts = [
                { scale: 0.01, maxScale: 1.4, x: width / 2, y: height / 2, color: 'rgba(255, 20, 147, 0.3)', delay: 0 },
                { scale: 0.01, maxScale: 1.1, x: width / 2 - 160, y: height / 2 - 60, color: 'rgba(255, 105, 180, 0.2)', delay: 8 },
                { scale: 0.01, maxScale: 1.0, x: width / 2 + 160, y: height / 2 + 60, color: 'rgba(255, 105, 180, 0.2)', delay: 15 }
            ];
            celebrationState.customData.arrows = [
                { x: -50, y: height * 0.35, vx: 12, vy: 0.8, angle: Math.PI / 24, active: true },
                { x: width + 50, y: height * 0.42, vx: -12, vy: -0.8, angle: 23 * Math.PI / 24, active: true }
            ];
            break;
        }
        case 'champion': {
            celebrationState.customData.crownY = -120;
            celebrationState.customData.targetCrownY = height * 0.55;
            celebrationState.customData.laurelAngle = 0;
            break;
        }
        case 'explosion': {
            celebrationState.customData.shake = 25;
            // Spawn fire flares and smoke clouds
            for (let i = 0; i < 50; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = 2 + Math.random() * 8;
                celebrationState.particles.push(new Particle({
                    x: width / 2,
                    y: height / 2,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    friction: 0.95,
                    gravity: -0.05, // rise up
                    size: 8 + Math.random() * 15,
                    color: ['#FF4500', '#FF8C00', '#FFD700', '#FF3300'][i % 4],
                    alpha: 0.9,
                    fadeSpeed: 0.015 + Math.random() * 0.015,
                    shape: 'circle',
                    glow: true,
                    glowColor: '#FF4500'
                }));
            }
            // Spawning heavy grey dust/smoke clouds
            for (let i = 0; i < 30; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = 1 + Math.random() * 5;
                celebrationState.particles.push(new Particle({
                    x: width / 2,
                    y: height / 2,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    friction: 0.97,
                    gravity: -0.02,
                    size: 15 + Math.random() * 20,
                    color: ['#555555', '#777777', '#333333'][i % 3],
                    alpha: 0.7,
                    fadeSpeed: 0.008 + Math.random() * 0.008,
                    shape: 'circle'
                }));
            }
            celebrationState.customData.shockwaves = [0, -12];
            break;
        }
        case 'treasure': {
            celebrationState.customData.chestY = -80;
            celebrationState.customData.chestVY = 0;
            celebrationState.customData.chestTargetY = height * 0.68;
            celebrationState.customData.chestBounces = 2;
            celebrationState.customData.lidOpened = false;
            break;
        }
        case 'meteor': {
            celebrationState.customData.meteors = [];
            for (let i = 0; i < 7; i++) {
                celebrationState.customData.meteors.push({
                    x: width * 0.35 + i * 160 + Math.random() * 60,
                    y: -120 - i * 90,
                    vx: -11 - Math.random() * 4,
                    vy: 9 + Math.random() * 3,
                    size: 16 + Math.random() * 10,
                    active: true,
                    exploded: false
                });
            }
            break;
        }
        case 'aurora': {
            // No custom state needed, completely procedural waving bands
            break;
        }
        case 'galaxy': {
            // procedural stars, but let's pre-generate cluster details
            celebrationState.customData.stars = [];
            for (let i = 0; i < 150; i++) {
                const angle = (i / 150) * Math.PI * 7;
                const arm = i % 2 === 0 ? 0 : Math.PI;
                const distance = (i / 150) * (width * 0.35);
                celebrationState.customData.stars.push({
                    arm: arm,
                    baseAngle: angle,
                    distance: distance,
                    color: ['#FFFFFF', '#FFD700', '#00FFFF', '#FF00FF', '#E6E6FA'][i % 5],
                    size: 1.5 + Math.random() * 2
                });
            }
            break;
        }
        case 'dragons': {
            celebrationState.customData.dragons = [
                {
                    type: 'fire',
                    segments: [],
                    headX: -100,
                    headY: 150,
                    color: '#FF3300',
                    accentColor: '#FFD700',
                    waveFreq: 0.05,
                    waveAmp: 60,
                    speed: 7,
                    wingFlap: 0
                },
                {
                    type: 'ice',
                    segments: [],
                    headX: width + 100,
                    headY: 280,
                    color: '#00FFFF',
                    accentColor: '#FFFFFF',
                    waveFreq: 0.06,
                    waveAmp: 50,
                    speed: -7,
                    wingFlap: Math.PI / 2
                }
            ];
            // Initialize segments
            for (const d of celebrationState.customData.dragons) {
                for (let i = 0; i < 15; i++) {
                    d.segments.push({ x: d.headX, y: d.headY });
                }
            }
            break;
        }
        case 'tsunami': {
            // procedural parallax ocean waves
            break;
        }
        case 'volcano': {
            celebrationState.customData.erupted = false;
            break;
        }
        case 'phoenix': {
            celebrationState.customData.phoenixY = height + 100;
            celebrationState.customData.wingAngle = 0;
            break;
        }
        case 'blackhole': {
            break;
        }
    }
}

// Update state on each frames sequence step
function updateCelebration(type, side, width, height) {
    const goalX = side === 'left' ? 50 : width - 50;
    const goalY = height * 0.7 - 60;
    const frame = celebrationState.frame + 1;

    // Update particles first
    for (let i = celebrationState.particles.length - 1; i >= 0; i--) {
        const p = celebrationState.particles[i];
        p.update();
        
        // Custom flutter updates for streamers/confetti
        if (p.custom && p.custom.flutterFreq) {
            p.vx += Math.sin(frame * p.custom.flutterFreq + p.custom.flutterPhase) * 0.12;
        }
        
        if (p.alpha <= 0 || p.y > height + 50 || p.x < -50 || p.x > width + 50) {
            celebrationState.particles.splice(i, 1);
        }
    }

    switch (type) {
        case 'fireworks': {
            for (const r of celebrationState.customData.rockets) {
                if (frame === r.launchFrame) r.active = true;
                if (!r.active) continue;

                r.x += r.vx;
                r.y += r.vy;
                r.vy += 0.16; // gravity on rocket

                // Spawn sparkling trails
                if (Math.random() > 0.1) {
                    celebrationState.particles.push(new Particle({
                        x: r.x,
                        y: r.y,
                        vx: (Math.random() - 0.5) * 1.5,
                        vy: (Math.random() - 0.5) * 1.5,
                        size: 2 + Math.random() * 2,
                        color: '#FFF8DC',
                        alpha: 0.8,
                        fadeSpeed: 0.04,
                        glow: true,
                        glowColor: r.color
                    }));
                }

                // Explosion condition
                if (r.vy >= 0 || r.y <= r.targetY) {
                    r.active = false;
                    // Explode! Spawn 45 circular particles
                    for (let j = 0; j < 40; j++) {
                        const angle = (j / 40) * Math.PI * 2;
                        const speed = 3.5 + Math.random() * 6;
                        celebrationState.particles.push(new Particle({
                            x: r.x,
                            y: r.y,
                            vx: Math.cos(angle) * speed,
                            vy: Math.sin(angle) * speed,
                            gravity: 0.12,
                            friction: 0.94,
                            size: 3 + Math.random() * 3,
                            color: r.color,
                            alpha: 1,
                            fadeSpeed: 0.015 + Math.random() * 0.01,
                            trail: true,
                            glow: true,
                            glowColor: r.color
                        }));
                    }
                    // Flash core spark
                    celebrationState.particles.push(new Particle({
                        x: r.x,
                        y: r.y,
                        size: 16,
                        color: '#FFFFFF',
                        alpha: 1,
                        fadeSpeed: 0.12,
                        glow: true,
                        glowColor: r.color,
                        shape: 'sparkle'
                    }));
                }
            }
            break;
        }
        case 'streamers': {
            // Grow streamers head
            for (const ribbon of celebrationState.customData.ribbons) {
                const H = ribbon.points[ribbon.points.length - 1];
                const speed = Math.hypot(ribbon.vx, ribbon.vy);
                let finalX = H.x;
                let finalY = H.y;
                if (speed > 0.1) {
                    const perpX = -ribbon.vy / speed;
                    const perpY = ribbon.vx / speed;
                    const waveOffset = Math.sin(frame * ribbon.waveFrequency) * ribbon.waveAmplitude;
                    finalX = H.x + perpX * waveOffset;
                    finalY = H.y + perpY * waveOffset;
                }
                ribbon.points.push({ x: finalX, y: finalY });
                ribbon.vx *= ribbon.friction;
                ribbon.vy *= ribbon.friction;
                ribbon.vy += ribbon.gravity;
                H.x += ribbon.vx;
                H.y += ribbon.vy;

                if (ribbon.points.length > ribbon.maxPoints) {
                    ribbon.points.shift();
                }
            }
            break;
        }
        case 'discoBall': {
            // Ball slides down
            celebrationState.customData.ballY += (celebrationState.customData.targetBallY - celebrationState.customData.ballY) * 0.08;
            for (const b of celebrationState.customData.beams) {
                b.angle += b.speed;
            }
            // Random sparks near floor
            if (frame % 3 === 0) {
                celebrationState.particles.push(new Particle({
                    x: Math.random() * width,
                    y: height + 10,
                    vx: (Math.random() - 0.5) * 1.5,
                    vy: -1.5 - Math.random() * 2,
                    friction: 0.99,
                    size: 3 + Math.random() * 5,
                    color: ['#FF00FF', '#00FFFF', '#FFFF00', '#00FF00', '#9370DB'][frame % 5],
                    alpha: 0.8,
                    fadeSpeed: 0.01,
                    glow: true,
                    shape: 'bubble'
                }));
            }
            break;
        }
        case 'lightning': {
            // Trigger bolt strikes at frames 0, 18, 36
            if (frame === 1 || frame === 18 || frame === 36) {
                const strikeX = width * 0.22 + Math.random() * width * 0.56;
                const targetY = height * 0.74;
                const segments = [];
                let curX = strikeX;
                let curY = 0;
                segments.push({ x: curX, y: curY });
                while (curY < targetY) {
                    const nextY = curY + 16 + Math.random() * 26;
                    const nextX = curX + (Math.random() - 0.5) * 44;
                    segments.push({ x: nextX, y: nextY });
                    
                    // Branch bolts
                    if (Math.random() > 0.8 && nextY < targetY - 110) {
                        let bx = nextX;
                        let by = nextY;
                        const branchSegs = [{ x: bx, y: by }];
                        while (by < targetY - 60) {
                            bx += (Math.random() - 0.35) * 32;
                            by += 15 + Math.random() * 22;
                            branchSegs.push({ x: bx, y: by });
                        }
                        celebrationState.customData.bolts.push({ segments: branchSegs, frame: frame, isBranch: true, opacity: 1 });
                    }
                    curX = nextX;
                    curY = nextY;
                }
                segments.push({ x: curX, y: targetY });
                celebrationState.customData.bolts.push({ segments, frame: frame, isBranch: false, opacity: 1 });
                celebrationState.customData.strikeLocations.push({ x: curX, y: targetY });
                celebrationState.customData.flashOpacity = 0.85;
                celebrationState.customData.shake = 20;

                // Ground splash sparks
                for (let j = 0; j < 35; j++) {
                    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 2;
                    const speed = 4 + Math.random() * 11;
                    celebrationState.particles.push(new Particle({
                        x: curX,
                        y: targetY,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed,
                        gravity: 0.25,
                        friction: 0.95,
                        size: 2.5 + Math.random() * 4,
                        color: '#FFFFCC',
                        alpha: 1,
                        fadeSpeed: 0.02 + Math.random() * 0.015,
                        glow: true,
                        glowColor: '#FFFF33',
                        trail: true
                    }));
                }
            }
            celebrationState.customData.flashOpacity *= 0.84;
            for (const bolt of celebrationState.customData.bolts) {
                bolt.opacity *= 0.78;
            }
            break;
        }
        case 'rainbow': {
            celebrationState.customData.progress += (1 - celebrationState.customData.progress) * 0.07;
            for (const b of celebrationState.customData.butterflies) {
                b.t += b.speed;
                if (b.t > 1) b.t = 0;
                b.wingFlap += 0.35;
            }
            // Release gold sparkles from cloud bases
            if (frame % 2 === 0) {
                const cx = Math.random() > 0.5 ? width * 0.16 : width * 0.84;
                celebrationState.particles.push(new Particle({
                    x: cx + (Math.random() - 0.5) * 45,
                    y: height * 0.7 + (Math.random() - 0.5) * 15,
                    vx: (Math.random() - 0.5) * 1.8,
                    vy: -1 - Math.random() * 2,
                    gravity: -0.01,
                    size: 2 + Math.random() * 3,
                    color: '#FFF8DC',
                    alpha: 0.85,
                    fadeSpeed: 0.012,
                    shape: 'sparkle',
                    glow: true,
                    glowColor: '#FFD700'
                }));
            }
            break;
        }
        case 'starBurst': {
            // Decay rings
            break;
        }
        case 'heartExplosion': {
            for (const h of celebrationState.customData.giantHearts) {
                if (frame >= h.delay) {
                    h.scale += (h.maxScale - h.scale) * 0.09;
                }
            }
            for (const arrow of celebrationState.customData.arrows) {
                if (!arrow.active) continue;
                arrow.x += arrow.vx;
                arrow.y += arrow.vy;
                if (arrow.x < -80 || arrow.x > width + 80) arrow.active = false;
                // Emit heart dust trail
                celebrationState.particles.push(new Particle({
                    x: arrow.x,
                    y: arrow.y,
                    vx: -arrow.vx * 0.1 + (Math.random() - 0.5) * 2,
                    vy: -arrow.vy * 0.1 + (Math.random() - 0.5) * 2,
                    size: 4 + Math.random() * 5,
                    color: '#FF1493',
                    alpha: 0.85,
                    fadeSpeed: 0.025,
                    shape: 'heart'
                }));
            }
            // Spawn float bubbles
            if (frame % 3 === 0) {
                celebrationState.particles.push(new Particle({
                    x: Math.random() * width,
                    y: height + 20,
                    vx: (Math.random() - 0.5) * 1.5,
                    vy: -1.5 - Math.random() * 2,
                    friction: 0.99,
                    size: 5 + Math.random() * 10,
                    color: 'rgba(255, 192, 203, 0.65)',
                    alpha: 0.8,
                    fadeSpeed: 0.007,
                    shape: 'bubble'
                }));
            }
            break;
        }
        case 'champion': {
            celebrationState.customData.crownY += (celebrationState.customData.targetCrownY - celebrationState.customData.crownY) * 0.08;
            celebrationState.customData.laurelAngle += 0.045;
            // Spawn tiny crowns sparkles
            if (frame % 4 === 0) {
                celebrationState.particles.push(new Particle({
                    x: width / 2 + (Math.random() - 0.5) * 100,
                    y: celebrationState.customData.crownY + (Math.random() - 0.5) * 30,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    size: 3 + Math.random() * 4,
                    color: '#FFF',
                    alpha: 0.9,
                    fadeSpeed: 0.03,
                    shape: 'sparkle',
                    glow: true,
                    glowColor: '#FFD700'
                }));
            }
            break;
        }
        case 'explosion': {
            // Continual small smoke spawns
            if (frame < 30 && frame % 2 === 0) {
                celebrationState.particles.push(new Particle({
                    x: width / 2 + (Math.random() - 0.5) * 60,
                    y: height / 2 + (Math.random() - 0.5) * 60,
                    vx: (Math.random() - 0.5) * 4,
                    vy: -2 - Math.random() * 4,
                    friction: 0.96,
                    size: 10 + Math.random() * 15,
                    color: '#FF6600',
                    alpha: 0.85,
                    fadeSpeed: 0.02,
                    shape: 'circle',
                    glow: true,
                    glowColor: '#FF3300'
                }));
            }
            break;
        }
        case 'treasure': {
            const td = celebrationState.customData;
            if (td.chestY < td.chestTargetY) {
                td.chestVY += 0.7; // gravity
                td.chestY += td.chestVY;
                if (td.chestY >= td.chestTargetY) {
                    td.chestY = td.chestTargetY;
                    if (td.chestBounces > 0) {
                        td.chestVY = -td.chestVY * 0.5; // bounce back
                        td.chestBounces--;
                        td.shake = 10;
                        // dust clouds
                        for (let d = 0; d < 12; d++) {
                            celebrationState.particles.push(new Particle({
                                x: width / 2 + (Math.random() - 0.5) * 80,
                                y: td.chestTargetY + 45,
                                vx: (Math.random() - 0.5) * 4,
                                vy: -Math.random() * 2,
                                size: 8 + Math.random() * 10,
                                color: '#A0522D',
                                alpha: 0.6,
                                fadeSpeed: 0.02
                            }));
                        }
                    } else {
                        td.chestVY = 0;
                    }
                }
            }

            // Open lid at frame 20
            if (frame >= 20 && !td.lidOpened) {
                td.lidOpened = true;
                td.shake = 12;
                // Burst treasure out!
                for (let i = 0; i < 70; i++) {
                    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.5;
                    const speed = 6 + Math.random() * 11;
                    celebrationState.particles.push(new Particle({
                        x: width / 2,
                        y: td.chestTargetY + 10,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed,
                        gravity: 0.28,
                        friction: 0.98,
                        size: 6 + Math.random() * 6,
                        color: ['#FFD700', '#00FF00', '#0000FF', '#FF0000', '#FF00FF', '#00FFFF'][i % 6],
                        alpha: 1,
                        fadeSpeed: 0.007 + Math.random() * 0.005,
                        shape: i % 3 === 0 ? 'coin' : 'gem',
                        rotation: Math.random() * Math.PI * 2,
                        vRotation: (Math.random() - 0.5) * 0.3
                    }));
                }
            }
            break;
        }
        case 'meteor': {
            const md = celebrationState.customData;
            for (const m of md.meteors) {
                if (!m.active) continue;
                m.x += m.vx;
                m.y += m.vy;

                // Add trailing flames
                celebrationState.particles.push(new Particle({
                    x: m.x + (Math.random() - 0.5) * m.size,
                    y: m.y + (Math.random() - 0.5) * m.size,
                    vx: -m.vx * 0.2 + (Math.random() - 0.5) * 3,
                    vy: -m.vy * 0.2 + (Math.random() - 0.5) * 3,
                    size: m.size * 0.3 + Math.random() * 5,
                    color: ['#FF4500', '#FF8C00', '#FFD700'][frame % 3],
                    alpha: 0.8,
                    fadeSpeed: 0.03,
                    glow: true,
                    glowColor: '#FF4500'
                }));

                // Add dark trail smoke
                if (frame % 2 === 0) {
                    celebrationState.particles.push(new Particle({
                        x: m.x,
                        y: m.y,
                        vx: -m.vx * 0.1 + (Math.random() - 0.5) * 2,
                        vy: -m.vy * 0.1 + (Math.random() - 0.5) * 2,
                        size: m.size * 0.5 + Math.random() * 8,
                        color: '#444444',
                        alpha: 0.6,
                        fadeSpeed: 0.015
                    }));
                }

                // Crash on ground
                if (m.y >= height * 0.74) {
                    m.active = false;
                    md.shake = 16;
                    // Spawn fiery radial blast
                    for (let j = 0; j < 25; j++) {
                        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 2.2;
                        const speed = 4 + Math.random() * 8;
                        celebrationState.particles.push(new Particle({
                            x: m.x,
                            y: height * 0.74,
                            vx: Math.cos(angle) * speed,
                            vy: Math.sin(angle) * speed,
                            gravity: 0.24,
                            friction: 0.96,
                            size: 4 + Math.random() * 6,
                            color: '#FF4500',
                            alpha: 1,
                            fadeSpeed: 0.02 + Math.random() * 0.02,
                            glow: true,
                            glowColor: '#FFCC00',
                            trail: true
                        }));
                    }
                }
            }
            break;
        }
        case 'dragons': {
            const dd = celebrationState.customData;
            for (const d of dd.dragons) {
                d.wingFlap += 0.3;
                
                // Head kinematics
                d.headX += d.speed;
                const prog = d.type === 'fire' ? (d.headX + 100) / (width + 200) : (d.headX - width - 100) / (-width - 200);
                d.headY = 140 + Math.sin(prog * Math.PI * 3.5) * d.waveAmp;

                // Drag segments behind head
                let prevX = d.headX;
                let prevY = d.headY;
                for (let i = 0; i < d.segments.length; i++) {
                    const seg = d.segments[i];
                    const dx = prevX - seg.x;
                    const dy = prevY - seg.y;
                    const dist = Math.hypot(dx, dy);
                    const targetDist = 14;
                    if (dist > targetDist) {
                        const angle = Math.atan2(dy, dx);
                        seg.x = prevX - Math.cos(angle) * targetDist;
                        seg.y = prevY - Math.sin(angle) * targetDist;
                    }
                    prevX = seg.x;
                    prevY = seg.y;
                }

                // Breathing flames/frost sparks
                if (frame % 2 === 0) {
                    const breatheLeft = d.speed > 0;
                    const bAngle = breatheLeft ? -0.2 : Math.PI + 0.2;
                    const angleOffset = (Math.random() - 0.5) * 0.6;
                    const bSpeed = 6 + Math.random() * 4;
                    celebrationState.particles.push(new Particle({
                        x: d.headX + (breatheLeft ? 20 : -20),
                        y: d.headY + 5,
                        vx: Math.cos(bAngle + angleOffset) * bSpeed,
                        vy: Math.sin(bAngle + angleOffset) * bSpeed,
                        friction: 0.97,
                        size: 4 + Math.random() * 6,
                        color: d.type === 'fire' ? '#FF5500' : '#E0FFFF',
                        alpha: 0.9,
                        fadeSpeed: 0.03,
                        glow: true,
                        glowColor: d.accentColor
                    }));
                }
            }
            break;
        }
        case 'volcano': {
            const vd = celebrationState.customData;
            // Erupt on frame 10
            if (frame >= 10 && !vd.erupted) {
                vd.erupted = true;
                vd.shake = 22;
                // Huge column of ash and lava rocks
                for (let i = 0; i < 60; i++) {
                    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.5;
                    const speed = 7 + Math.random() * 11;
                    celebrationState.particles.push(new Particle({
                        x: width / 2,
                        y: height * 0.72,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed,
                        gravity: 0.25,
                        friction: 0.98,
                        size: 5 + Math.random() * 6,
                        color: '#FF3300',
                        alpha: 1,
                        fadeSpeed: 0.01 + Math.random() * 0.01,
                        glow: true,
                        glowColor: '#FFD700',
                        trail: true
                    }));
                }
                for (let i = 0; i < 40; i++) {
                    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.8;
                    const speed = 4 + Math.random() * 8;
                    celebrationState.particles.push(new Particle({
                        x: width / 2,
                        y: height * 0.72,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed,
                        friction: 0.97,
                        size: 15 + Math.random() * 18,
                        color: ['#444', '#666', '#222'][i % 3],
                        alpha: 0.8,
                        fadeSpeed: 0.007 + Math.random() * 0.006,
                        gravity: -0.01
                    }));
                }
            }
            // Continual lava sprays
            if (frame > 10 && frame % 3 === 0) {
                const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.4;
                const speed = 5 + Math.random() * 8;
                celebrationState.particles.push(new Particle({
                    x: width / 2,
                    y: height * 0.72,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    gravity: 0.22,
                    size: 4 + Math.random() * 4,
                    color: '#FF8C00',
                    alpha: 1,
                    fadeSpeed: 0.02
                }));
            }
            break;
        }
        case 'phoenix': {
            celebrationState.customData.phoenixY -= 4.2;
            celebrationState.customData.wingAngle += 0.22;
            // Spawn trailing blazing feathers
            if (frame % 2 === 0) {
                celebrationState.particles.push(new Particle({
                    x: width / 2 + (Math.random() - 0.5) * 40,
                    y: celebrationState.customData.phoenixY + 40,
                    vx: (Math.random() - 0.5) * 2,
                    vy: 2 + Math.random() * 2,
                    gravity: 0.02,
                    size: 5 + Math.random() * 7,
                    color: ['#FF4500', '#FF8C00', '#FFD700'][frame % 3],
                    alpha: 0.9,
                    fadeSpeed: 0.02,
                    glow: true,
                    glowColor: '#FF4500'
                }));
            }
            break;
        }
    }
}

// Draw the current state of celebration
function drawState(ctx, type, side, width, height, frame) {
    const goalX = side === 'left' ? 50 : width - 50;
    const goalY = height * 0.7 - 60;

    // First draw standard particle systems
    for (const p of celebrationState.particles) {
        p.draw(ctx);
    }

    switch (type) {
        case 'classic': {
            const p = frame / 60;
            ctx.save();
            ctx.shadowColor = 'rgba(255, 215, 0, 0.5)';
            ctx.shadowBlur = 20;
            const scale = frame < 15 ? 1.2 * Math.sin((frame / 15) * Math.PI / 2) : 1;
            ctx.translate(width / 2, height / 2);
            ctx.scale(scale, scale);
            
            ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 4;
            drawRoundRect(ctx, -200, -50, 400, 100, 15);
            ctx.fill();
            ctx.stroke();
            
            ctx.font = 'italic bold 60px Orbitron, Arial, sans-serif';
            ctx.fillStyle = '#FFD700';
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 2;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('GOAL!', 0, 0);
            ctx.strokeText('GOAL!', 0, 0);
            ctx.restore();
            break;
        }
        case 'fireworks': {
            // Draw active rocket heads as glowing white particles
            for (const r of celebrationState.customData.rockets) {
                if (!r.active) continue;
                ctx.save();
                ctx.shadowColor = r.color;
                ctx.shadowBlur = 10;
                ctx.fillStyle = '#FFFFFF';
                ctx.beginPath();
                ctx.arc(r.x, r.y, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
            break;
        }
        case 'streamers': {
            for (const ribbon of celebrationState.customData.ribbons) {
                if (ribbon.points.length < 2) continue;
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(ribbon.points[0].x, ribbon.points[0].y);
                for (let i = 1; i < ribbon.points.length; i++) {
                    ctx.lineTo(ribbon.points[i].x, ribbon.points[i].y);
                }
                ctx.strokeStyle = ribbon.color;
                ctx.lineWidth = ribbon.thickness;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.shadowColor = ribbon.color;
                ctx.shadowBlur = 12;
                ctx.stroke();
                ctx.restore();
            }
            break;
        }
        case 'discoBall': {
            const ballY = celebrationState.customData.ballY;
            
            // Beams
            for (const b of celebrationState.customData.beams) {
                ctx.save();
                ctx.fillStyle = b.color;
                ctx.beginPath();
                ctx.moveTo(width / 2, ballY);
                const farDist = Math.max(width, height) * 2;
                ctx.lineTo(width / 2 + Math.cos(b.angle - b.width) * farDist, ballY + Math.sin(b.angle - b.width) * farDist);
                ctx.lineTo(width / 2 + Math.cos(b.angle + b.width) * farDist, ballY + Math.sin(b.angle + b.width) * farDist);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }

            // Chain
            ctx.strokeStyle = '#8E8E93';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(width / 2, 0);
            ctx.lineTo(width / 2, ballY);
            ctx.stroke();

            // Ball Sphere
            ctx.save();
            ctx.beginPath();
            ctx.arc(width / 2, ballY, 36, 0, Math.PI * 2);
            ctx.clip();
            
            const sphereGrad = ctx.createRadialGradient(width / 2 - 10, ballY - 10, 5, width / 2, ballY, 36);
            sphereGrad.addColorStop(0, '#FFFFFF');
            sphereGrad.addColorStop(0.6, '#B0C4DE');
            sphereGrad.addColorStop(1, '#4682B4');
            ctx.fillStyle = sphereGrad;
            ctx.fillRect(width / 2 - 40, ballY - 40, 80, 80);

            // Glistening metallic tiles
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
            ctx.lineWidth = 1;
            const tileRows = 8;
            const tileCols = 10;
            const tOffset = frame * 0.4;
            for (let r = 0; r < tileRows; r++) {
                for (let c = 0; c < tileCols; c++) {
                    const tx = width / 2 - 36 + c * 7.5 + (Math.sin(tOffset + r) * 3);
                    const ty = ballY - 36 + r * 9;
                    if ((r + c + Math.floor(frame / 6)) % 4 === 0) {
                        ctx.fillStyle = '#FFFFFF';
                    } else {
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                    }
                    ctx.fillRect(tx, ty, 6.5, 7);
                }
            }
            ctx.restore();

            // Ball outline
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(width / 2, ballY, 36, 0, Math.PI * 2);
            ctx.stroke();

            // Little sparkling flares
            ctx.fillStyle = '#FFFFFF';
            if (frame % 8 < 4) {
                drawStarShape(ctx, width / 2 - 25, ballY - 20, 4, 12, 3);
            }
            if (frame % 10 > 5) {
                drawStarShape(ctx, width / 2 + 22, ballY + 15, 4, 10, 2.5);
            }
            break;
        }
        case 'confetti': {
            // Rainbow arch
            const rProg = Math.min(1, frame / 35);
            ctx.save();
            ctx.lineWidth = 8;
            ctx.globalAlpha = 0.45 * rProg;
            const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
            for (let i = 0; i < colors.length; i++) {
                ctx.strokeStyle = colors[i];
                ctx.beginPath();
                ctx.ellipse(width / 2, height, width * 0.38 - i * 8, height * 0.65 - i * 8, 0, Math.PI, Math.PI + Math.PI * rProg);
                ctx.stroke();
            }
            ctx.restore();
            break;
        }
        case 'lightning': {
            // Drawn in update / flash logic
            break;
        }
        case 'rainbow': {
            const progress = celebrationState.customData.progress;
            const centerX = width / 2;
            const centerY = height * 0.74;
            const rx = width * 0.35;
            const ry = height * 0.46;
            const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
            
            // Rainbow Arch
            ctx.save();
            ctx.globalAlpha = 0.85;
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#FFF';
            for (let i = 0; i < colors.length; i++) {
                ctx.strokeStyle = colors[i];
                ctx.lineWidth = 8;
                ctx.beginPath();
                ctx.ellipse(centerX, centerY, rx - i * 8, ry - i * 8, 0, Math.PI, Math.PI + Math.PI * progress);
                ctx.stroke();
            }
            ctx.restore();

            // Draw puffy gold-trimmed clouds at end bases
            const drawPuffyCloud = (cx, cy) => {
                ctx.save();
                ctx.fillStyle = '#FFF8DC';
                ctx.shadowColor = '#FFD700';
                ctx.shadowBlur = 15;
                ctx.beginPath();
                ctx.arc(cx, cy, 26, 0, Math.PI * 2);
                ctx.arc(cx - 20, cy + 8, 18, 0, Math.PI * 2);
                ctx.arc(cx + 20, cy + 8, 18, 0, Math.PI * 2);
                ctx.arc(cx, cy + 12, 18, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            };
            
            if (progress > 0.1) drawPuffyCloud(width * 0.16, height * 0.7);
            if (progress > 0.9) drawPuffyCloud(width * 0.84, height * 0.7);

            // Draw butterflies
            for (const b of celebrationState.customData.butterflies) {
                if (b.t > progress) continue;
                const angle = Math.PI + b.t * Math.PI;
                const bx = centerX + Math.cos(angle) * (rx - 28) + b.offsetX;
                const by = centerY + Math.sin(angle) * (ry - 28) + b.offsetY;

                ctx.save();
                ctx.translate(bx, by);
                ctx.fillStyle = b.color;
                ctx.shadowColor = b.color;
                ctx.shadowBlur = 8;
                const wingW = Math.abs(Math.sin(b.wingFlap)) * b.size;

                ctx.beginPath();
                ctx.ellipse(-wingW / 2, -b.size / 2, wingW / 2, b.size / 2, -Math.PI / 6, 0, Math.PI * 2);
                ctx.ellipse(wingW / 2, -b.size / 2, wingW / 2, b.size / 2, Math.PI / 6, 0, Math.PI * 2);
                ctx.ellipse(-wingW / 2, b.size / 2, wingW / 2, b.size * 0.4, Math.PI / 12, 0, Math.PI * 2);
                ctx.ellipse(wingW / 2, b.size / 2, wingW / 2, b.size * 0.4, -Math.PI / 12, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#222222';
                ctx.fillRect(-1, -b.size, 2, b.size * 1.8);
                ctx.restore();
            }
            break;
        }
        case 'starBurst': {
            // Procedural central burst
            ctx.save();
            const burstRad = 40 + Math.sin(frame * 0.25) * 15;
            const coreGlow = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, burstRad * 2);
            coreGlow.addColorStop(0, '#FFFFFF');
            coreGlow.addColorStop(0.3, 'rgba(255, 215, 0, 0.9)');
            coreGlow.addColorStop(0.6, 'rgba(255, 69, 0, 0.5)');
            coreGlow.addColorStop(1, 'rgba(255, 69, 0, 0)');
            ctx.fillStyle = coreGlow;
            ctx.beginPath();
            ctx.arc(width / 2, height / 2, burstRad * 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            break;
        }
        case 'heartExplosion': {
            // Draw giant soft background hearts
            for (const h of celebrationState.customData.giantHearts) {
                if (frame < h.delay) continue;
                ctx.save();
                ctx.fillStyle = h.color;
                ctx.translate(h.x, h.y);
                ctx.scale(h.scale, h.scale);
                drawHeartShape(ctx, 0, 0, 35);
                ctx.restore();
            }

            // Draw Cupid arrows
            for (const arrow of celebrationState.customData.arrows) {
                if (!arrow.active) continue;
                ctx.save();
                ctx.translate(arrow.x, arrow.y);
                ctx.rotate(arrow.angle);
                ctx.strokeStyle = '#FFD700';
                ctx.lineWidth = 3.5;
                ctx.beginPath();
                ctx.moveTo(-35, 0);
                ctx.lineTo(15, 0);
                ctx.stroke();

                // Arrow head
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.moveTo(15, -6);
                ctx.lineTo(27, 0);
                ctx.lineTo(15, 6);
                ctx.closePath();
                ctx.fill();

                // Fletching (feathers)
                ctx.fillStyle = '#FF69B4';
                ctx.beginPath();
                ctx.moveTo(-35, 0);
                ctx.lineTo(-43, -7);
                ctx.lineTo(-33, -7);
                ctx.lineTo(-25, 0);
                ctx.lineTo(-33, 7);
                ctx.lineTo(-43, 7);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
            break;
        }
        case 'champion': {
            const crownY = celebrationState.customData.crownY;
            const laurelAngle = celebrationState.customData.laurelAngle;

            // Draw laurel leaves sorted by depth (back leaves)
            const drawLaurelSegment = (front) => {
                ctx.save();
                ctx.translate(width / 2, crownY + 20);
                ctx.fillStyle = '#32CD32';
                ctx.strokeStyle = '#228B22';
                ctx.lineWidth = 1;
                
                const numLeaves = 12;
                for (let i = 0; i < numLeaves; i++) {
                    const leafAngle = laurelAngle + (i / numLeaves) * Math.PI * 2;
                    const cosA = Math.cos(leafAngle);
                    const sinA = Math.sin(leafAngle);
                    
                    // Depth sorting: front has sinA > 0, back has sinA <= 0
                    if (front && sinA <= 0) continue;
                    if (!front && sinA > 0) continue;

                    const lx = cosA * 70;
                    const ly = sinA * 22; // flattened ellipse

                    ctx.save();
                    ctx.translate(lx, ly);
                    ctx.rotate(leafAngle + Math.PI / 2);
                    ctx.beginPath();
                    ctx.ellipse(0, 0, 9, 4, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
                ctx.restore();
            };

            drawLaurelSegment(false); // Draw back leaves first

            // Cushion
            const cx = width / 2;
            const cy = height * 0.72;
            ctx.save();
            ctx.fillStyle = '#8B0000'; // Velvet
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 4;
            ctx.beginPath();
            drawRoundRect(ctx, cx - 85, cy - 15, 170, 30, 10);
            ctx.fill();
            ctx.stroke();
            // Tassels
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(cx - 80, cy + 15, 5, 0, Math.PI*2);
            ctx.arc(cx + 80, cy + 15, 5, 0, Math.PI*2);
            ctx.fill();
            ctx.restore();

            // Crown at crownY
            ctx.save();
            ctx.translate(width / 2, crownY);
            ctx.fillStyle = '#FFD700';
            ctx.strokeStyle = '#B8860B';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(-45, 25);
            ctx.lineTo(-40, -10);
            ctx.lineTo(-20, 12);
            ctx.lineTo(0, -25);
            ctx.lineTo(20, 12);
            ctx.lineTo(40, -10);
            ctx.lineTo(45, 25);
            ctx.lineTo(-45, 25);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Jewels
            const jewels = [
                { x: -40, y: -10, color: '#FF0033' },
                { x: -20, y: 12, color: '#33FF33' },
                { x: 0, y: -25, color: '#3366FF' },
                { x: 20, y: 12, color: '#FFFF33' },
                { x: 40, y: -10, color: '#FF00FF' }
            ];
            for (const j of jewels) {
                ctx.fillStyle = j.color;
                ctx.beginPath();
                ctx.arc(j.x, j.y, 4.5, 0, Math.PI * 2);
                ctx.fill();
                // Gem shine overlay
                if (frame % 12 < 4) {
                    ctx.save();
                    ctx.translate(j.x, j.y);
                    ctx.fillStyle = '#FFFFFF';
                    drawStarShape(ctx, 0, 0, 4, 10, 2.5);
                    ctx.restore();
                }
            }
            ctx.restore();

            drawLaurelSegment(true); // Draw front leaves on top of crown
            break;
        }
        case 'explosion': {
            // Draw cinematic expanding fire glow shockwave
            for (let i = 0; i < celebrationState.customData.shockwaves.length; i++) {
                const sw = frame - i * 12;
                if (sw > 0 && sw < 40) {
                    const radius = sw * 11;
                    ctx.save();
                    ctx.strokeStyle = `rgba(255, 69, 0, ${1 - sw / 40})`;
                    ctx.lineWidth = 6;
                    ctx.shadowColor = '#FF4500';
                    ctx.shadowBlur = 20;
                    ctx.beginPath();
                    ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.restore();
                }
            }
            break;
        }
        case 'treasure': {
            const td = celebrationState.customData;
            ctx.save();
            ctx.translate(width / 2, td.chestY);

            // Draw radiating golden rays if open
            if (td.lidOpened) {
                ctx.save();
                const rayAngle = frame * 0.02;
                const numRays = 8;
                ctx.fillStyle = 'rgba(255, 215, 0, 0.15)';
                for (let i = 0; i < numRays; i++) {
                    const angle = rayAngle + (i / numRays) * Math.PI * 2;
                    ctx.beginPath();
                    ctx.moveTo(0, 15);
                    const rX1 = Math.cos(angle - 0.25) * width;
                    const rY1 = Math.sin(angle - 0.25) * height;
                    const rX2 = Math.cos(angle + 0.25) * width;
                    const rY2 = Math.sin(angle + 0.25) * height;
                    ctx.lineTo(rX1, rY1);
                    ctx.lineTo(rX2, rY2);
                    ctx.closePath();
                    ctx.fill();
                }
                ctx.restore();
            }

            // Chest Body
            ctx.fillStyle = '#5C4033'; // Rich brown wood
            ctx.strokeStyle = '#FFD700'; // Gold bounds
            ctx.lineWidth = 3.5;
            ctx.beginPath();
            drawRoundRect(ctx, -42, 10, 84, 38, 5);
            ctx.fill();
            ctx.stroke();

            // Gold lock strap
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(-7, 10, 14, 18);

            // Chest Lid (opening)
            ctx.save();
            ctx.translate(0, 10);
            if (td.lidOpened) {
                // Open rotation
                ctx.rotate(-Math.PI * 0.45);
            }
            ctx.fillStyle = '#6F4E37';
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 3.5;
            ctx.beginPath();
            drawRoundRect(ctx, -42, -24, 84, 24, {tl: 8, tr: 8, br: 0, bl: 0});
            ctx.fill();
            ctx.stroke();
            ctx.restore();

            ctx.restore();
            break;
        }
        case 'meteor': {
            // Draw rocks
            for (const m of celebrationState.customData.meteors) {
                if (!m.active) continue;
                ctx.save();
                ctx.translate(m.x, m.y);
                ctx.rotate(frame * 0.05);
                
                // Outer fire glow
                ctx.shadowColor = '#FF4500';
                ctx.shadowBlur = 20;
                ctx.fillStyle = '#5C2E2E'; // magma rock
                ctx.beginPath();
                ctx.arc(0, 0, m.size, 0, Math.PI * 2);
                ctx.fill();
                
                // Draw rock texture details
                ctx.strokeStyle = '#331111';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(-m.size * 0.4, -m.size * 0.3);
                ctx.lineTo(m.size * 0.3, m.size * 0.4);
                ctx.moveTo(-m.size * 0.2, m.size * 0.5);
                ctx.lineTo(m.size * 0.4, -m.size * 0.2);
                ctx.stroke();

                ctx.restore();
            }
            break;
        }
        case 'aurora': {
            // Procedural beautiful Aurora wave bands
            const bands = 5;
            ctx.save();
            ctx.globalCompositeOperation = 'screen';
            for (let i = 0; i < bands; i++) {
                const colors = ['rgba(0, 255, 0, 0.45)', 'rgba(0, 255, 255, 0.4)', 'rgba(147, 112, 219, 0.35)', 'rgba(0, 128, 255, 0.3)', 'rgba(255, 20, 147, 0.25)'];
                ctx.fillStyle = colors[i];
                ctx.beginPath();
                ctx.moveTo(0, 50 + i * 22);

                for (let x = 0; x <= width; x += 15) {
                    const wave1 = Math.sin((x / 110) + (frame / 15) + i * 0.6) * 45;
                    const wave2 = Math.cos((x / 60) - (frame / 25) + i * 0.3) * 15;
                    ctx.lineTo(x, 70 + i * 25 + wave1 + wave2);
                }

                ctx.lineTo(width, height * 0.8);
                ctx.lineTo(0, height * 0.8);
                ctx.closePath();
                ctx.fill();
            }
            ctx.restore();
            break;
        }
        case 'galaxy': {
            // Draw dense spirals procedurally
            ctx.save();
            const cx = width / 2;
            const cy = height / 2;
            
            // Nebula backdrop
            const nebGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, width * 0.4);
            nebGrad.addColorStop(0, 'rgba(75, 0, 130, 0.3)');
            nebGrad.addColorStop(0.5, 'rgba(0, 0, 128, 0.15)');
            nebGrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = nebGrad;
            ctx.beginPath();
            ctx.arc(cx, cy, width * 0.4, 0, Math.PI * 2);
            ctx.fill();

            // Stars
            const rot = frame * 0.025;
            for (const s of celebrationState.customData.stars) {
                // spiral formula: angle increases with distance
                const angle = s.baseAngle + s.arm + rot;
                const px = cx + Math.cos(angle) * s.distance;
                const py = cy + Math.sin(angle) * s.distance;

                ctx.fillStyle = s.color;
                ctx.beginPath();
                ctx.arc(px, py, s.size, 0, Math.PI * 2);
                ctx.fill();
            }

            // Central core glow
            const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 45);
            coreGrad.addColorStop(0, '#FFFFFF');
            coreGrad.addColorStop(0.4, '#00FFFF');
            coreGrad.addColorStop(0.8, 'rgba(0, 0, 139, 0.4)');
            coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = coreGrad;
            ctx.beginPath();
            ctx.arc(cx, cy, 45, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            break;
        }
        case 'dragons': {
            for (const d of celebrationState.customData.dragons) {
                // Segment body
                for (let i = d.segments.length - 1; i >= 0; i--) {
                    const seg = d.segments[i];
                    ctx.save();
                    ctx.translate(seg.x, seg.y);
                    
                    const ratio = i / d.segments.length;
                    const size = 18 * (1 - ratio * 0.5);
                    ctx.fillStyle = i % 2 === 0 ? d.color : d.accentColor;
                    ctx.shadowColor = d.color;
                    ctx.shadowBlur = 10;
                    ctx.beginPath();
                    ctx.arc(0, 0, size, 0, Math.PI * 2);
                    ctx.fill();

                    // Spine details
                    ctx.fillStyle = '#000000';
                    ctx.fillRect(-2, -size - 3, 4, 6);
                    ctx.restore();
                }

                // Wings
                const wingS = Math.sin(d.wingFlap) * 32;
                ctx.save();
                ctx.translate(d.headX, d.headY);
                ctx.strokeStyle = d.accentColor;
                ctx.lineWidth = 4.5;
                ctx.beginPath();
                // wing 1
                ctx.moveTo(0, -5);
                ctx.lineTo(-20, -25 + wingS);
                ctx.lineTo(0, -5);
                // wing 2
                ctx.lineTo(20, -25 + wingS);
                ctx.stroke();
                ctx.restore();

                // Dragon Head
                ctx.save();
                ctx.translate(d.headX, d.headY);
                ctx.fillStyle = d.color;
                ctx.strokeStyle = d.accentColor;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                const faceSign = d.speed > 0 ? 1 : -1;
                drawRoundRect(ctx, -12, -12, 24, 20, 4);
                ctx.fill();
                ctx.stroke();

                // Eyes
                ctx.fillStyle = '#FFFF00';
                ctx.beginPath();
                ctx.arc(faceSign * 5, -3, 3.5, 0, Math.PI * 2);
                ctx.fill();

                // Horns
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                ctx.moveTo(-4, -12);
                ctx.lineTo(-faceSign * 12, -22);
                ctx.moveTo(4, -12);
                ctx.lineTo(-faceSign * 8, -22);
                ctx.stroke();

                ctx.restore();
            }
            break;
        }
        case 'tsunami': {
            // Parallax beautiful layers of waves
            const py1 = height * 0.65;
            const py2 = height * 0.69;
            const py3 = height * 0.74;

            // Wave layer 1 (Distant Deep Blue)
            ctx.save();
            ctx.fillStyle = 'rgba(0, 45, 98, 0.75)';
            ctx.beginPath();
            ctx.moveTo(0, py1);
            for (let x = 0; x <= width; x += 25) {
                const y = py1 + Math.sin((x / 80) + (frame / 8)) * 25;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.fill();

            // Wave layer 2 (Turquoise Midground)
            ctx.fillStyle = 'rgba(0, 115, 150, 0.8)';
            ctx.beginPath();
            ctx.moveTo(0, py2);
            for (let x = 0; x <= width; x += 20) {
                const y = py2 + Math.cos((x / 65) - (frame / 12)) * 18;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.fill();

            // Wave layer 3 (Foreground Teal & Sea-foam)
            ctx.fillStyle = 'rgba(0, 175, 170, 0.85)';
            ctx.beginPath();
            ctx.moveTo(0, py3);
            for (let x = 0; x <= width; x += 15) {
                const y = py3 + Math.sin((x / 50) + (frame / 15)) * 12;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.fill();

            // Foam Crest highlights
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 3.5;
            ctx.beginPath();
            ctx.moveTo(0, py3);
            for (let x = 0; x <= width; x += 15) {
                const y = py3 + Math.sin((x / 50) + (frame / 15)) * 12;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Draw cute leaping fish silhouettes
            const fishX = (frame * 6) % (width + 100) - 50;
            const fishY = height * 0.72 - Math.sin((fishX / width) * Math.PI) * 120;
            if (fishY < height * 0.72) {
                ctx.save();
                ctx.translate(fishX, fishY);
                ctx.rotate(Math.cos((fishX / width) * Math.PI) * -0.5);
                ctx.fillStyle = '#01579B';
                
                ctx.beginPath();
                ctx.ellipse(0, 0, 14, 6, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(-12, 0);
                ctx.lineTo(-20, -7);
                ctx.lineTo(-17, 0);
                ctx.lineTo(-20, 7);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
            ctx.restore();
            break;
        }
        case 'volcano': {
            const vx = width / 2;
            const vy = height * 0.74;

            // Volcano Mountain
            ctx.save();
            ctx.fillStyle = '#4B2E1E';
            ctx.strokeStyle = '#3E2723';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(vx, vy - 60);
            ctx.lineTo(vx - 90, vy);
            ctx.lineTo(vx + 90, vy);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Molten glowing cracks on volcano slopes
            ctx.save();
            ctx.strokeStyle = '#FF3300';
            ctx.lineWidth = 3;
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#FF8C00';
            ctx.beginPath();
            ctx.moveTo(vx - 10, vy - 50);
            ctx.lineTo(vx - 25, vy - 30);
            ctx.lineTo(vx - 45, vy - 10);
            ctx.moveTo(vx + 8, vy - 45);
            ctx.lineTo(vx + 20, vy - 25);
            ctx.lineTo(vx + 35, vy);
            ctx.stroke();
            ctx.restore();

            // Volcanic Vent/Caldera Rim
            ctx.fillStyle = '#261C14';
            ctx.beginPath();
            ctx.ellipse(vx, vy - 60, 20, 6, 0, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        case 'phoenix': {
            const py = celebrationState.customData.phoenixY;
            const wingAngle = celebrationState.customData.wingAngle;

            ctx.save();
            ctx.translate(width / 2, py);

            // Radiant Halo
            const haloGrad = ctx.createRadialGradient(0, 10, 0, 0, 10, 80);
            haloGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
            haloGrad.addColorStop(0.3, 'rgba(255, 215, 0, 0.7)');
            haloGrad.addColorStop(0.7, 'rgba(255, 69, 0, 0.3)');
            haloGrad.addColorStop(1, 'rgba(255, 69, 0, 0)');
            ctx.fillStyle = haloGrad;
            ctx.beginPath();
            ctx.arc(0, 10, 80, 0, Math.PI * 2);
            ctx.fill();

            // Golden Sunburst Cross
            ctx.fillStyle = '#FFFFFF';
            ctx.globalAlpha = 0.45;
            drawStarShape(ctx, 0, 10, 4, 75, 4);

            // Phoenix Body (Serpentine Flaming Silhouette)
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#FF3300';
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, -32); // beak
            ctx.lineTo(-4, -20);
            ctx.quadraticCurveTo(-10, -5, -3, 20); // body curve
            ctx.lineTo(3, 20);
            ctx.quadraticCurveTo(10, -5, 4, -20);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Head Crest Feathers
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.moveTo(-3, -24);
            ctx.quadraticCurveTo(-15, -35, -20, -32);
            ctx.quadraticCurveTo(-12, -26, -2, -21);
            ctx.fill();

            // Wings (Flapping feathered wings)
            ctx.fillStyle = '#FF4500';
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 2.5;
            
            const wingW = 75;
            const flapOffset = Math.sin(wingAngle) * 22;
            
            // Left Wing
            ctx.beginPath();
            ctx.moveTo(-4, -12);
            ctx.quadraticCurveTo(-wingW / 2, -35 + flapOffset, -wingW, -10 + flapOffset);
            ctx.quadraticCurveTo(-wingW / 2, 10 + flapOffset, -4, 0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Right Wing
            ctx.beginPath();
            ctx.moveTo(4, -12);
            ctx.quadraticCurveTo(wingW / 2, -35 + flapOffset, wingW, -10 + flapOffset);
            ctx.quadraticCurveTo(wingW / 2, 10 + flapOffset, 4, 0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Elaborate Phoenix Tail Feathers
            ctx.fillStyle = '#FF8C00';
            ctx.beginPath();
            ctx.moveTo(-3, 20);
            ctx.quadraticCurveTo(-25, 55, -28, 75);
            ctx.quadraticCurveTo(-10, 50, 0, 20);
            ctx.quadraticCurveTo(10, 50, 28, 75);
            ctx.quadraticCurveTo(25, 55, 3, 20);
            ctx.fill();

            ctx.restore();
            break;
        }
        case 'blackhole': {
            const cx = width / 2;
            const cy = height / 2;
            const r = 40 + Math.sin(frame * 0.15) * 4;

            // Accretion Disk (spinning 3D plasma)
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(frame * 0.045);
            
            const diskGrad = ctx.createLinearGradient(-r * 2.5, 0, r * 2.5, 0);
            diskGrad.addColorStop(0, 'rgba(255, 140, 0, 0)');
            diskGrad.addColorStop(0.5, 'rgba(220, 20, 60, 0.75)');
            diskGrad.addColorStop(1, 'rgba(255, 140, 0, 0)');
            ctx.strokeStyle = diskGrad;
            ctx.lineWidth = 14;
            
            ctx.beginPath();
            ctx.ellipse(0, 0, r * 2.6, r * 0.7, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();

            // Gravitational lensing distorting orbit paths
            ctx.save();
            ctx.strokeStyle = 'rgba(186, 85, 211, 0.35)';
            ctx.lineWidth = 3.5;
            for (let i = 0; i < 4; i++) {
                ctx.beginPath();
                const lRadius = r * 1.5 + i * 16;
                ctx.arc(cx, cy, lRadius, 0, Math.PI * 2);
                ctx.stroke();
            }
            ctx.restore();

            // Event Horizon center (black hole)
            ctx.save();
            ctx.fillStyle = '#000000';
            ctx.shadowColor = '#4B0082';
            ctx.shadowBlur = 24;
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            break;
        }
    }
}

// Main Draw Celebration wrapper
export function drawCelebration(ctx, celebrationType, side, width, height, animationFrame) {
    if (animationFrame === 0 || celebrationType !== celebrationState.type || animationFrame < celebrationState.frame || celebrationState.frame === -1) {
        initCelebration(celebrationType, side, width, height);
    } else if (animationFrame > celebrationState.frame) {
        const steps = animationFrame - celebrationState.frame;
        for (let s = 0; s < steps; s++) {
            updateCelebration(celebrationType, side, width, height);
        }
        celebrationState.frame = animationFrame;
    }

    // Camera shake effect if active
    let shakeX = 0;
    let shakeY = 0;
    if (celebrationState.customData && celebrationState.customData.shake && celebrationState.customData.shake > 0) {
        shakeX = (Math.random() - 0.5) * celebrationState.customData.shake;
        shakeY = (Math.random() - 0.5) * celebrationState.customData.shake;
        celebrationState.customData.shake *= 0.88;
        if (celebrationState.customData.shake < 0.4) celebrationState.customData.shake = 0;
    }

    ctx.save();
    if (shakeX !== 0 || shakeY !== 0) {
        ctx.translate(shakeX, shakeY);
    }

    drawState(ctx, celebrationType, side, width, height, animationFrame);

    ctx.restore();
}
