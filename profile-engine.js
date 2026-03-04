/* profile-engine.js - Avatar Generator & Gamification Math */

const ProfileEngine = {
    modulesDone: 0,
    streak: 0,
    xp: 0,
    level: 1,

    init: function() {
        this.calculateStats();
        this.loadProfileData();
        this.renderBadges();
    },

    calculateStats: function() {
        // 1. Calculate Modules Done from LocalStorage
        this.modulesDone = 0;
        Object.keys(localStorage).forEach(key => {
            if(key.endsWith('_done') && localStorage.getItem(key) === 'true') {
                this.modulesDone++;
            }
        });
        
        // 2. Get Streak
        this.streak = parseInt(localStorage.getItem('currentStreak')) || 0;

        // 3. Math: Gamification Formula
        // 50 XP per module, 20 XP per day streak
        this.xp = (this.modulesDone * 50) + (this.streak * 20);
        
        // 1 Level = 500 XP
        this.level = Math.floor(this.xp / 500) + 1;
    },

    loadProfileData: function() {
        // Load raw data
        const n = localStorage.getItem('champ_name') || 'Champ';
        const a = localStorage.getItem('champ_age') || 'Not set';
        const g = localStorage.getItem('champ_goal') || 'Not set';
        const style = localStorage.getItem('champ_avatar_style') || 'bottts';
        const color = localStorage.getItem('champ_color') || '3b82f6';

        // Set text UI
        document.getElementById('display-name').innerText = n;
        document.getElementById('display-age').innerText = 'Age: ' + a;
        document.getElementById('display-goal').innerText = 'Goal: ' + g;
        
        // Generate Avatar URL via DiceBear API v7
        const seed = encodeURIComponent(n);
        const avatarUrl = `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&backgroundColor=${color}`;
        document.getElementById('display-avatar').src = avatarUrl;
        window.currentAvatar = avatarUrl; // Global access

        // Update Stats UI
        document.getElementById('stat-modules').innerText = this.modulesDone;
        document.getElementById('stat-streak').innerText = this.streak;
        document.getElementById('display-level').innerText = this.level;
        document.getElementById('total-xp-text').innerText = this.xp;

        // Rank System
        let rankName = "Novice"; let rankColor = "#94a3b8"; let rankIcon = "fa-star";
        if(this.level >= 3) { rankName = "Apprentice"; rankColor = "#3b82f6"; rankIcon = "fa-book-reader"; }
        if(this.level >= 6) { rankName = "Scholar"; rankColor = "#10b981"; rankIcon = "fa-graduation-cap"; }
        if(this.level >= 10) { rankName = "Elite Champ"; rankColor = "#8b5cf6"; rankIcon = "fa-bolt"; }
        if(this.level >= 15) { rankName = "Grandmaster"; rankColor = "#ef4444"; rankIcon = "fa-crown"; }
        
        const rankEl = document.getElementById('display-rank');
        rankEl.innerHTML = `<i class="fas ${rankIcon}" style="color:${rankColor};"></i> ${rankName} Rank`;
        rankEl.style.color = rankColor;

        // XP Progress Bar Math
        let currentLevelXp = this.xp % 500;
        let progressPercent = (currentLevelXp / 500) * 100;
        document.getElementById('xp-progress-text').innerText = `${currentLevelXp} / 500 to Level ${this.level + 1}`;
        setTimeout(() => {
            document.getElementById('xp-fill-bar').style.width = `${progressPercent}%`;
        }, 500);

        // Pre-fill Edit Modal
        document.getElementById('input-name').value = n !== 'Champ' ? n : '';
        document.getElementById('input-age').value = a !== 'Not set' ? a : '';
        document.getElementById('input-goal').value = g !== 'Not set' ? g : '';
        document.getElementById('input-style').value = style;
        document.getElementById('input-color').value = color;
    },

    renderBadges: function() {
        const badges = [
            { id: 'b1', name: 'First Step', desc: 'Finish 1 Module', icon: 'fa-shoe-prints', color: '#3b82f6', req: this.modulesDone >= 1 },
            { id: 'b2', name: 'Explorer', desc: 'Finish 10 Modules', icon: 'fa-compass', color: '#10b981', req: this.modulesDone >= 10 },
            { id: 'b3', name: 'Addicted', desc: '3 Day Streak', icon: 'fa-fire', color: '#f59e0b', req: this.streak >= 3 },
            { id: 'b4', name: 'Unstoppable', desc: '7 Day Streak', icon: 'fa-meteor', color: '#ef4444', req: this.streak >= 7 },
            { id: 'b5', name: 'Scholar', desc: 'Reach Level 5', icon: 'fa-graduation-cap', color: '#8b5cf6', req: this.level >= 5 },
            { id: 'b6', name: 'The Champ', desc: 'Finish 50 Modules', icon: 'fa-trophy', color: '#fbbf24', req: this.modulesDone >= 50 }
        ];

        let html = '';
        badges.forEach(b => {
            let stateClass = b.req ? '' : 'locked';
            let iconColor = b.req ? b.color : '#cbd5e1';
            html += `
            <div class="badge-card magnet-element ${stateClass}">
                <i class="fas ${b.icon} badge-icon" style="color:${iconColor};"></i>
                <div class="badge-name">${b.name}</div>
                <div class="badge-desc">${b.desc}</div>
                ${!b.req ? '<i class="fas fa-lock" style="position:absolute; top:10px; right:10px; color:#94a3b8; font-size:10px;"></i>' : ''}
            </div>`;
        });
        document.getElementById('badges-container').innerHTML = html;
    },

    openEditModal: function() {
        this.updatePreview(); // Ensure live preview is ready
        document.getElementById('edit-modal').style.display = 'flex';
    },

    updatePreview: function() {
        const n = document.getElementById('input-name').value.trim() || 'Champ';
        const style = document.getElementById('input-style').value;
        const color = document.getElementById('input-color').value;
        
        const seed = encodeURIComponent(n);
        const url = `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&backgroundColor=${color}`;
        document.getElementById('modal-avatar-preview').src = url;
    },

    saveProfile: function() {
        const n = document.getElementById('input-name').value.trim();
        const a = document.getElementById('input-age').value.trim();
        const g = document.getElementById('input-goal').value.trim();
        const style = document.getElementById('input-style').value;
        const color = document.getElementById('input-color').value;

        if(n) localStorage.setItem('champ_name', n);
        if(a) localStorage.setItem('champ_age', a);
        if(g) localStorage.setItem('champ_goal', g);
        
        localStorage.setItem('champ_avatar_style', style);
        localStorage.setItem('champ_color', color);
        
        document.getElementById('edit-modal').style.display = 'none';
        this.init(); // Reload UI instantly without refreshing the page!
    }
};

window.onload = () => ProfileEngine.init();
