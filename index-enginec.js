/* index-enginec.js - The 3 Core Architecture Systems (Bug Free) */

// ==========================================
// 1. DASHBOARD ENGINE (Theme, Sensory, Progress)
// ==========================================
const DashboardEngine = {
    isSoundEnabled: true,

    init: function() {
        this.isSoundEnabled = localStorage.getItem('champSounds') !== 'false';
        this.loadTheme();
        this.setupBootAndDust();
        this.bindSensoryRipples();
        
        // Wait for boot screen to finish before animating bars
        setTimeout(() => this.scanProgress(), 2200);
    },

    loadTheme: function() {
        const isLight = localStorage.getItem('champTheme') === 'light';
        const toggle = document.getElementById('themeToggle');
        if(toggle) toggle.checked = isLight;
        if(isLight) {
            document.body.classList.add('light-mode');
            document.getElementById('theme-meta').setAttribute('content', '#f8fafc');
        }
    },

    toggleTheme: function(cb) {
        if(cb.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('champTheme', 'light');
            document.getElementById('theme-meta').setAttribute('content', '#f8fafc');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('champTheme', 'dark');
            document.getElementById('theme-meta').setAttribute('content', '#09090b');
        }
    },

    setupBootAndDust: function() {
        // Boot Sequence Dismissal
        setTimeout(() => {
            const boot = document.getElementById('boot-screen');
            if(boot) {
                boot.style.opacity = '0';
                boot.style.visibility = 'hidden';
            }
        }, 2200);

        // Safe Dark Mode Cyber-Dust (No text artifacts!)
        const bgCanvas = document.getElementById('dark-bg-anim');
        if(bgCanvas) {
            for(let i=0; i<25; i++) {
                let dot = document.createElement('div');
                dot.className = 'dust-dot';
                let isPink = Math.random() > 0.5;
                dot.style.backgroundColor = isPink ? '#ec4899' : '#06b6d4';
                dot.style.boxShadow = `0 0 10px ${isPink ? '#ec4899' : '#06b6d4'}`;
                dot.style.width = dot.style.height = (Math.random() * 3 + 1) + 'px';
                dot.style.left = (Math.random() * 100) + 'vw';
                dot.style.animationDuration = (Math.random() * 10 + 5) + 's';
                dot.style.animationDelay = '-' + (Math.random() * 5) + 's';
                bgCanvas.appendChild(dot);
            }
        }
    },

    bindSensoryRipples: function() {
        document.querySelectorAll('.magnet-element').forEach(btn => {
            btn.addEventListener('pointerdown', (e) => {
                if(this.isSoundEnabled) {
                    if(navigator.vibrate) navigator.vibrate(15);
                    const audio = document.getElementById('tap-sound');
                    if(audio) { audio.currentTime = 0; audio.play().catch(()=>{}); }
                }
                const rect = btn.getBoundingClientRect();
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.left = `${e.clientX - rect.left}px`; 
                ripple.style.top = `${e.clientY - rect.top}px`;
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.marginLeft = ripple.style.marginTop = `${-size/2}px`;
                btn.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
    },

    scanProgress: function() {
        let n = localStorage.getItem('champ_name') || 'Champ';
        let style = localStorage.getItem('champ_avatar_style') || 'bottts';
        let color = localStorage.getItem('champ_color') || '06b6d4';
        let av = document.getElementById('main-avatar');
        if(av) av.src = `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(n)}&backgroundColor=${color}`;

        let cU = 0, cG = 0, cS = 0, cB = 0, cW = 0;
        for(let i=0; i<localStorage.length; i++) {
            let k = localStorage.key(i);
            if(localStorage.getItem(k) === 'true') {
                if(k.startsWith('unit_')) cU++;
                else if(k.startsWith('grammar_m')) cG++;
                else if(k.match(/^s\d+_done$/)) cS++; 
                else if(k.startsWith('part_b_')) cB++;
                else if(k.startsWith('writing_')) cW++;
            }
        }

        const updateBar = (id, val, max, base) => {
            let perc = Math.min(Math.round((val / max) * 100), 100);
            if(perc === 0 && base) perc = base; 
            let fill = document.getElementById('p-' + id);
            let text = document.getElementById('t-' + id);
            if(fill && text) { fill.style.width = perc + "%"; text.innerText = perc + "%"; }
        };

        updateBar('a', cU, 15, 0);
        updateBar('b', cB, 20, 10); 
        updateBar('c', cW, 10, 5);  
        updateBar('matrix', cG, 100, 0);
        updateBar('spoken', cS, 50, 0);
    }
};

// ==========================================
// 2. ABOUT ENGINE (Bug Free Control Hub)
// ==========================================
const AboutEngine = {
    init: function() {
        let isMascotHidden = localStorage.getItem('hideMascot') === 'true';
        let isSoundOn = localStorage.getItem('champSounds') !== 'false';
        
        let mTog = document.getElementById('mascotToggle');
        let sTog = document.getElementById('soundToggle');
        
        if(mTog) mTog.checked = !isMascotHidden;
        if(sTog) sTog.checked = isSoundOn;
    },
    
    open: function() {
        const modal = document.getElementById('hub-modal');
        if(modal) { modal.style.display = 'flex'; }
    },
    
    // Triggered when clicking the dark background
    close: function(e) {
        if(e && e.target.id === 'hub-modal') {
            document.getElementById('hub-modal').style.display = 'none';
        }
    },

    // Triggered by the X button
    forceClose: function() {
        document.getElementById('hub-modal').style.display = 'none';
    },

    toggleMascot: function(cb) {
        localStorage.setItem('hideMascot', !cb.checked);
        const mascot = document.getElementById('mascot-wrapper');
        if(mascot) mascot.style.display = cb.checked ? 'flex' : 'none';
    },

    toggleSound: function(cb) {
        localStorage.setItem('champSounds', cb.checked);
        DashboardEngine.isSoundEnabled = cb.checked;
    }
};

// ==========================================
// 3. MASCOT ENGINE (3D Trophy Auto-Tips)
// ==========================================
const MascotEngine = {
    isTyping: false,
    
    tips: [
        "🔥 Tip: Study in 25-minute Pomodoro blocks to maximize focus.",
        "💻 Info: This platform is the Creation of Asif.",
        "🎨 Info: App UI and Designing credit goes to Sha.",
        "🧠 Tip: Master the 100 Grammar Mechanics to conquer the Varsity exams.",
        "⚡ You are forging your future right now. Keep your streak alive!",
        "🏆 Champ's Camp: Built to turn students into absolute Champions."
    ],

    init: function() {
        if(localStorage.getItem('hideMascot') === 'true') {
            const m = document.getElementById('mascot-wrapper');
            if(m) m.style.display = 'none';
        }
        
        // Auto-popup every 15 seconds
        setInterval(() => {
            const m = document.getElementById('mascot-wrapper');
            if(!this.isTyping && m && m.style.display !== 'none') {
                this.triggerAuto();
            }
        }, 15000);
    },

    triggerAuto: function() {
        if(this.isTyping) return;
        let msg = "Keep grinding, Champ. Victory is near.";
        const hour = new Date().getHours();
        if(hour >= 5 && hour < 12) msg = "Morning Grind Active. Let's build, Champ.";
        else if(hour >= 18 || hour < 4) msg = "Midnight Forge online. Elite focus required.";
        
        this.displayMessage(msg);
    },

    triggerClick: function() {
        if(this.isTyping) return;
        
        // Haptics & Sound specific to mascot tap
        if(DashboardEngine.isSoundEnabled && navigator.vibrate) navigator.vibrate([30, 50, 30]);
        
        let randomTip = this.tips[Math.floor(Math.random() * this.tips.length)];
        this.displayMessage(randomTip);
    },

    displayMessage: function(text) {
        const msgBox = document.getElementById('mascot-msg');
        if(!msgBox) return;

        msgBox.innerHTML = "";
        msgBox.classList.add('active');
        this.isTyping = true;
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                msgBox.innerHTML += text.charAt(i); 
                i++;
                setTimeout(typeWriter, 30);
            } else {
                setTimeout(() => { 
                    msgBox.classList.remove('active'); 
                    this.isTyping = false; 
                }, 4000); // Wait 4 seconds after typing so user can read it
            }
        };
        typeWriter();
    },

    hide: function(e) {
        if(e) e.stopPropagation();
        const m = document.getElementById('mascot-wrapper');
        const t = document.getElementById('mascotToggle');
        if(m) m.style.display = 'none';
        if(t) t.checked = false;
        localStorage.setItem('hideMascot', 'true');
    }
};

// FIRE UP ALL ENGINES
window.addEventListener('load', () => {
    DashboardEngine.init();
    AboutEngine.init();
    MascotEngine.init();
});
