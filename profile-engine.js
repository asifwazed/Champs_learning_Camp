// profile-engine.js - Calculates XP, Streaks, and Unlocks Badges

const ProfileEngine = {
    init: function() {
        this.calculateStreak();
        this.calculateStats();
    },

    calculateStreak: function() {
        const today = new Date().toLocaleDateString();
        let lastLogin = localStorage.getItem('lastLoginDate');
        let currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;

        if (lastLogin !== today) {
            // Check if it was exactly yesterday
            let yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            let yesterdayString = yesterday.toLocaleDateString();

            if (lastLogin === yesterdayString) {
                currentStreak++; // Streak continues!
            } else if (lastLogin !== null) {
                currentStreak = 1; // Streak broken, reset to 1
            } else {
                currentStreak = 1; // First time ever
            }
            
            localStorage.setItem('lastLoginDate', today);
            localStorage.setItem('currentStreak', currentStreak);
        }
        
        document.getElementById('stat-streak').innerText = currentStreak;
        
        // Unlock Fire Badge if streak >= 3
        if (currentStreak >= 3) {
            document.getElementById('badge-streak').classList.add('unlocked');
        }
    },

    calculateStats: function() {
        let grammarCount = 0;
        let spokenCount = 0;
        let totalXP = 0;

        // Loop through localStorage to find completed modules
        Object.keys(localStorage).forEach(key => {
            if (key.endsWith('_done') && localStorage.getItem(key) === 'true') {
                if (key.startsWith('grammar_m')) {
                    grammarCount++;
                    totalXP += 50; // 50 XP per grammar rule
                } else if (key.startsWith('s')) {
                    spokenCount++;
                    totalXP += 100; // 100 XP per spoken scenario
                } else if (key.startsWith('unit')) {
                    totalXP += 25; // 25 XP per textbook lesson
                }
            }
        });

        // Add Vocab High Score to XP
        let vocabScore = parseInt(localStorage.getItem('vocabHighScore')) || 0;
        totalXP += vocabScore;

        // Update UI
        document.getElementById('stat-grammar').innerText = grammarCount;
        document.getElementById('stat-spoken').innerText = spokenCount;
        document.getElementById('stat-vocab').innerText = vocabScore;
        
        // Animated XP Counter
        this.animateValue('xp-display', 0, totalXP, 1000);

        // Rank Calculation
        const rankIcon = document.getElementById('rank-icon');
        if (totalXP > 5000) rankIcon.innerHTML = '<i class="fas fa-crown" style="color:white;"></i>'; // Diamond/Crown
        else if (totalXP > 2000) rankIcon.innerHTML = '<i class="fas fa-chess-knight" style="color:white;"></i>'; // Platinum
        else if (totalXP > 500) rankIcon.innerHTML = '<i class="fas fa-shield-alt" style="color:white;"></i>'; // Gold

        // Unlock Badges
        if (grammarCount >= 20) document.getElementById('badge-matrix').classList.add('unlocked');
        if (spokenCount >= 10) document.getElementById('badge-spoken').classList.add('unlocked');
        if (vocabScore >= 200) document.getElementById('badge-vocab').classList.add('unlocked');
    },

    animateValue: function(id, start, end, duration) {
        let obj = document.getElementById(id);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + " XP TOTAL";
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    }
};

window.onload = () => ProfileEngine.init();
