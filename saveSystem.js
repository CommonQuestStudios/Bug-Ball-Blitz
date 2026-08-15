// saveSystem.js - Profile management and localStorage operations

const SAVE_PREFIX = 'bugBall_save_';

export class SaveSystem {
    static createProfile(name) {
        if (!name || name.trim() === '') {
            return { success: false, error: 'Name cannot be empty' };
        }
        
        // Sanitize and validate name
        const trimmed = name.trim().replace(/[^a-zA-Z0-9 _-]/g, '').substring(0, 15);
        if (trimmed.length === 0) {
            return { success: false, error: 'Name must contain letters or numbers' };
        }
        
        const profileKey = SAVE_PREFIX + trimmed.toLowerCase().replace(/\s+/g, '_');
        
        try {
            const existingData = localStorage.getItem(profileKey);
            if (existingData) {
                return { success: false, error: 'Profile already exists' };
            }
        } catch (e) {
            console.error('Error checking existing profile:', e);
            return { success: false, error: 'Failed to access storage' };
        }
        
        const isCheat = trimmed.toLowerCase() === 'maxx';
        
        const profile = {
            name: trimmed,
            created: Date.now(),
            stats: {
                wins: isCheat ? 1000 : 0,
                losses: isCheat ? 100 : 0,
                goalsScored: isCheat ? 5000 : 0,
                goalsConceded: isCheat ? 1000 : 0,
                matchesPlayed: isCheat ? 1100 : 0 // wins (1000) + losses (100)
            },
            tower: {
                currentLevel: 1,
                highestLevel: isCheat ? 20 : 0,
                isComplete: isCheat,
                levelsCompleted: isCheat ? 20 : 0
            },
            preferences: {
                selectedBug: 'ladybug',
                selectedArena: 'grassField'
            },
            selectedCelebration: 'classic',
            selectedBugAnimation: 'none',
            equippedCosmetics: [], // Array of equipped cosmetic IDs
            tutorialCompleted: isCheat,
            // Achievement progress (starts fresh for each profile)
            achievementProgress: {
                stats: {
                    totalGoals: isCheat ? 5000 : 0,
                    totalWins: isCheat ? 1000 : 0,
                    totalMatches: isCheat ? 1100 : 0, // totalWins (1000) + losses (100)
                    perfectGames: isCheat ? 500 : 0,
                    quickGoals: isCheat ? 200 : 0,
                    comebacks: isCheat ? 100 : 0,
                    blowouts: isCheat ? 300 : 0,
                    goalsInMatch: isCheat ? 20 : 0,
                    visitedArenas: isCheat ? [
                        'grassField', 'dirtPatch', 'leafArena', 'desertOasis', 'snowyPark', 'volcanicRock',
                        'mushroomForest', 'beachSand', 'moonCrater', 'autumnLeaves', 'iceCave', 'gardenPond',
                        'neonCity', 'candyLand', 'jungleVines', 'crystalCavern'
                    ] : []
                },
                achievements: {}
            }
        };

        if (isCheat) {
            const allAchievementIds = [
                'firstGoal', 'goalMachine', 'centurion', 'legendary',
                'firstVictory', 'champion', 'unbeatable',
                'perfectGame', 'shutoutKing',
                'hatTrick', 'quickDraw', 'comeback', 'blowout',
                'marathonMan', 'worldTraveler', 'bugCollector', 'arenaExplorer'
            ];
            allAchievementIds.forEach(id => {
                profile.achievementProgress.achievements[id] = {
                    unlocked: true,
                    unlockedAt: Date.now()
                };
            });
        }
        
        try {
            localStorage.setItem(profileKey, JSON.stringify(profile));
            return { success: true, profile };
        } catch (e) {
            console.error('Error saving profile:', e);
            if (e.name === 'QuotaExceededError') {
                return { success: false, error: 'Storage quota exceeded. Please delete old profiles.' };
            }
            return { success: false, error: 'Failed to save profile' };
        }
    }
    
    static loadProfile(name) {
        const profileKey = SAVE_PREFIX + name.toLowerCase().replace(/\s+/g, '_');
        
        try {
            const data = localStorage.getItem(profileKey);
            
            if (!data) {
                return null;
            }
            
            const profile = JSON.parse(data);
            
            // Validate profile structure
            if (!profile.name || !profile.stats || !profile.tower) {
                console.error('Invalid profile structure:', profile);
                return null;
            }
            
            // Migrate old profiles to new format
            if (!profile.selectedCelebration) {
                profile.selectedCelebration = 'classic';
            }
            if (!profile.selectedBugAnimation) {
                profile.selectedBugAnimation = 'none';
            }
            if (!profile.equippedCosmetics) {
                profile.equippedCosmetics = [];
            }
            if (!profile.tower.highestLevel) {
                profile.tower.highestLevel = profile.tower.levelsCompleted || 0;
            }
            // Add achievement progress if missing (for old profiles)
            if (!profile.achievementProgress) {
                profile.achievementProgress = {
                    stats: {
                        totalGoals: 0,
                        totalWins: 0,
                        totalMatches: 0,
                        perfectGames: 0,
                        quickGoals: 0,
                        comebacks: 0,
                        blowouts: 0,
                        goalsInMatch: 0,
                        visitedArenas: []
                    },
                    achievements: {}
                };
            }
            
            return profile;
        } catch (e) {
            console.error('Error loading profile:', e);
            return null;
        }
    }
    
    static saveProfile(profile) {
        const profileKey = SAVE_PREFIX + profile.name.toLowerCase().replace(/\s+/g, '_');
        try {
            localStorage.setItem(profileKey, JSON.stringify(profile));
        } catch (e) {
            console.error('Error saving profile:', e);
            if (e.name === 'QuotaExceededError') {
                alert('Storage quota exceeded! Please delete old profiles.');
            }
        }
    }
    
    static getAllProfiles() {
        const profiles = [];
        
        try {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(SAVE_PREFIX)) {
                    try {
                        const data = localStorage.getItem(key);
                        if (data) {
                            const profile = JSON.parse(data);
                            // Basic validation
                            if (profile && profile.name && profile.stats) {
                                profiles.push(profile);
                            }
                        }
                    } catch (parseError) {
                        console.error('Error parsing profile:', key, parseError);
                        // Continue to next profile
                    }
                }
            }
        } catch (e) {
            console.error('Error loading profiles:', e);
        }
        
        return profiles.sort((a, b) => (b.created || 0) - (a.created || 0));
    }
    
    static deleteProfile(name) {
        const profileKey = SAVE_PREFIX + name.toLowerCase().replace(/\s+/g, '_');
        try {
            localStorage.removeItem(profileKey);
        } catch (e) {
            console.error('Error deleting profile:', e);
        }
    }
    
    static updateStats(profile, matchResult) {
        profile.stats.matchesPlayed++;
        profile.stats.goalsScored += matchResult.playerGoals;
        profile.stats.goalsConceded += matchResult.opponentGoals;
        
        if (matchResult.playerGoals > matchResult.opponentGoals) {
            profile.stats.wins++;
        } else if (matchResult.playerGoals < matchResult.opponentGoals) {
            profile.stats.losses++;
        }
        
        this.saveProfile(profile);
    }
    
    static updateTowerProgress(profile, levelCompleted) {
        if (levelCompleted > profile.tower.levelsCompleted) {
            profile.tower.levelsCompleted = levelCompleted;
            profile.tower.currentLevel = levelCompleted + 1;
        }
        
        this.saveProfile(profile);
    }
    
    static completeTower(profile) {
        profile.tower.isComplete = true;
        this.saveProfile(profile);
    }
    
    static updatePreferences(profile, preferences) {
        profile.preferences = { ...profile.preferences, ...preferences };
        this.saveProfile(profile);
    }
}
