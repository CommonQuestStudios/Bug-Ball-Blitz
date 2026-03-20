// particles.js - Particle effects system with object pooling

const MAX_POOL_SIZE = 200;

export class ParticleSystem {
    constructor() {
        // Pre-allocate particle pool
        this.pool = [];
        this.activeCount = 0;
        for (let i = 0; i < MAX_POOL_SIZE; i++) {
            this.pool.push({ x: 0, y: 0, vx: 0, vy: 0, size: 0, life: 0, decay: 0, color: '', type: '', active: false });
        }
    }
    
    // Acquire a particle from the pool
    _acquire() {
        // Look for an inactive particle
        for (let i = 0; i < this.pool.length; i++) {
            if (!this.pool[i].active) {
                this.pool[i].active = true;
                this.activeCount++;
                return this.pool[i];
            }
        }
        // Pool full — reuse oldest active particle
        const oldest = this.pool[0];
        oldest.active = true;
        return oldest;
    }
    
    // Create kick dust cloud
    createKickDust(x, y, velocityX, maxParticles = 8) {
        const numParticles = Math.min(maxParticles, 8);
        const direction = velocityX > 0 ? -1 : 1;
        
        for (let i = 0; i < numParticles; i++) {
            const p = this._acquire();
            p.x = x; p.y = y;
            p.vx = direction * (Math.random() * 3 + 2);
            p.vy = -Math.random() * 3 - 1;
            p.size = Math.random() * 4 + 2;
            p.life = 1.0; p.decay = 0.02;
            p.color = 'rgba(200, 180, 140, 0.6)';
            p.type = 'dust';
        }
    }
    
    // Create goal explosion
    createGoalExplosion(x, y, color = '#00d4ff', maxParticles = 30) {
        const numParticles = Math.min(maxParticles, 30);
        
        // Main burst ring
        for (let i = 0; i < numParticles; i++) {
            const angle = (Math.PI * 2 * i) / numParticles;
            const speed = Math.random() * 8 + 4;
            const p = this._acquire();
            p.x = x; p.y = y;
            p.vx = Math.cos(angle) * speed;
            p.vy = Math.sin(angle) * speed;
            p.size = Math.random() * 6 + 3;
            p.life = 1.0; p.decay = 0.015;
            p.color = color;
            p.type = 'explosion';
        }
        
        // Inner shimmer particles - smaller, brighter
        const shimmerCount = Math.min(Math.floor(numParticles * 0.5), this.pool.length - numParticles);
        for (let i = 0; i < shimmerCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 12 + 2;
            const p = this._acquire();
            p.x = x + (Math.random() - 0.5) * 10;
            p.y = y + (Math.random() - 0.5) * 10;
            p.vx = Math.cos(angle) * speed;
            p.vy = Math.sin(angle) * speed - 3;
            p.size = Math.random() * 2 + 1;
            p.life = 1.0; p.decay = 0.025;
            p.color = '#ffffff';
            p.type = 'spark';
        }
    }
    
    // Create impact sparks
    createImpactSparks(x, y, intensity = 1, maxParticles = 10) {
        const numParticles = Math.min(Math.floor(5 * intensity), maxParticles);
        
        for (let i = 0; i < numParticles; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 5 + 2;
            const p = this._acquire();
            p.x = x; p.y = y;
            p.vx = Math.cos(angle) * speed;
            p.vy = Math.sin(angle) * speed - 2;
            p.size = Math.random() * 3 + 1;
            p.life = 1.0; p.decay = 0.04;
            p.color = 'rgba(255, 255, 100, 0.8)';
            p.type = 'spark';
        }
    }
    
    // Create bounce particles
    createBounceDust(x, y) {
        for (let i = 0; i < 5; i++) {
            const p = this._acquire();
            p.x = x; p.y = y;
            p.vx = (Math.random() - 0.5) * 4;
            p.vy = -Math.random() * 2 - 1;
            p.size = Math.random() * 3 + 1;
            p.life = 1.0; p.decay = 0.03;
            p.color = 'rgba(180, 160, 120, 0.5)';
            p.type = 'dust';
        }
    }
    
    // Create trail effect (for fast-moving ball)
    createBallTrail(x, y, vx, vy) {
        const speed = Math.sqrt(vx * vx + vy * vy);
        if (speed < 15) return;
        
        const p = this._acquire();
        p.x = x; p.y = y;
        p.vx = 0; p.vy = 0;
        p.size = 8;
        p.life = 1.0; p.decay = 0.08;
        p.color = 'rgba(255, 255, 255, 0.3)';
        p.type = 'trail';
    }
    
    // Create goalpost hit sparks
    createPostSparks(x, y) {
        for (let i = 0; i < 8; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 6 + 3;
            const p = this._acquire();
            p.x = x; p.y = y;
            p.vx = Math.cos(angle) * speed;
            p.vy = Math.sin(angle) * speed - 2;
            p.size = Math.random() * 3 + 1;
            p.life = 1.0; p.decay = 0.05;
            p.color = 'rgba(255, 200, 50, 0.9)';
            p.type = 'spark';
        }
    }
    
    update(deltaTime = 0.016) {
        this.activeCount = 0;
        for (let i = 0; i < this.pool.length; i++) {
            const p = this.pool[i];
            if (!p.active) continue;
            
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.type !== 'trail') {
                p.vy += 0.3;
            }
            
            p.vx *= 0.98;
            p.vy *= 0.98;
            p.life -= p.decay;
            
            if (p.life <= 0) {
                p.active = false;
            } else {
                this.activeCount++;
            }
        }
    }
    
    render(ctx) {
        ctx.save();
        
        for (let i = 0; i < this.pool.length; i++) {
            const p = this.pool[i];
            if (!p.active) continue;
            
            ctx.globalAlpha = p.life;
            
            if (p.type === 'trail') {
                // Soft glow trail
                const tGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
                tGrad.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
                tGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = tGrad;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
                ctx.fill();
            } else if (p.type === 'spark') {
                // Star-cross spark
                ctx.fillStyle = p.color;
                ctx.strokeStyle = p.color;
                ctx.lineWidth = 1.2;
                const s = p.size;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y - s);
                ctx.lineTo(p.x, p.y + s);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(p.x - s, p.y);
                ctx.lineTo(p.x + s, p.y);
                ctx.stroke();
                // Tiny center dot glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, s * 0.4, 0, Math.PI * 2);
                ctx.fill();
            } else if (p.type === 'explosion') {
                // Explosion particles with soft glow
                const eGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
                eGrad.addColorStop(0, p.color);
                eGrad.addColorStop(0.6, p.color);
                eGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = eGrad;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 1.3, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        ctx.restore();
    }
    
    clear() {
        for (let i = 0; i < this.pool.length; i++) {
            this.pool[i].active = false;
        }
        this.activeCount = 0;
    }
}
