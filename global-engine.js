/* index-engine.js - Flawless Drag-to-Dismiss & Auto-Tips Engine */

// ==========================================
// 1. DASHBOARD ENGINE 
// ==========================================
const DashboardEngine = {
    isSoundEnabled: true,

    init: function() {
        this.isSoundEnabled = localStorage.getItem('champSounds') !== 'false';
        this.loadTheme();
        this.setupBootAndDust();
        this.bindSensoryRipples();
        setTimeout(() => this.scanProgress(), 800);
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
        // ONE-TIME BOOT SCREEN LOCK
        const boot = document.getElementById('boot-screen');
        if(boot) {
            if(!sessionStorage.getItem('bootPlayed')) {
                setTimeout(() => {
                    boot.style.opacity = '0';
                    boot.style.visibility = 'hidden';
                    sessionStorage.setItem('bootPlayed', 'true');
                }, 1800);
            } else {
                boot.style.display = 'none';
            }
        }

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
// 2. ABOUT ENGINE
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
        if(modal) modal.style.display = 'flex';
    },
    
    close: function(e) {
        if(e && e.target.id === 'hub-modal') {
            document.getElementById('hub-modal').style.display = 'none';
        }
    },

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
// 3. MASCOT ENGINE (Pro Physics & Slogans)
// ==========================================
const MascotEngine = {
    isTyping: false,
    
    slogans: [
        "A true Champ never skips a day.",
        "You are forging your future. Stay sharp.",
        "I am your mentor. Let's grind today.",
        "Focus, Champ. The digital forge is waiting.",
        "Grammar is a weapon. Sharpen it.",
        "💻 This engine is the Creation of Asif.",
        "🎨 Beautiful UI designed by Sha."
    ],

    init: function() {
        // FORCE THE MASCOT OUT OF THE TRASH!
        // We override the old setting so you can see it again.
        localStorage.setItem('hideMascot', 'false');
        const m = document.getElementById('mascot-wrapper');
        if(m) m.style.display = 'flex';
        
        let mTog = document.getElementById('mascotToggle');
        if (mTog) mTog.checked = true;
        
        this.setupDragPhysics();

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
        if(DashboardEngine.isSoundEnabled && navigator.vibrate) navigator.vibrate([30, 50, 30]);
        let randomTip = this.slogans[Math.floor(Math.random() * this.slogans.length)];
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
                setTimeout(typeWriter, 35);
            } else {
                setTimeout(() => { 
                    msgBox.classList.remove('active'); 
                    this.isTyping = false; 
                }, 4000);
            }
        };
        typeWriter();
    },

    setupDragPhysics: function() {
        const wrapper = document.getElementById('mascot-wrapper');
        const zone = document.getElementById('mascot-dismiss-zone');
        if(!wrapper || !zone) return;

        let isDragging = false;
        let hasMoved = false;
        let startX, startY, initialX, initialY;

        const getClientX = (e) => e.touches ? e.touches[0].clientX : e.clientX;
        const getClientY = (e) => e.touches ? e.touches[0].clientY : e.clientY;

        const dragStart = (e) => {
            if(e.target.closest('.mascot-bubble')) return;
            
            isDragging = true;
            hasMoved = false;
            
            startX = getClientX(e);
            startY = getClientY(e);
            
            let rect = wrapper.getBoundingClientRect();
            initialX = rect.left;
            initialY = rect.top;
            
            wrapper.style.left = initialX + 'px';
            wrapper.style.top = initialY + 'px';
            wrapper.style.bottom = 'auto';
            wrapper.style.right = 'auto';
            wrapper.style.transition = 'none';

            document.addEventListener('touchmove', dragging, {passive: false});
            document.addEventListener('mousemove', dragging);
            document.addEventListener('touchend', dragEnd);
            document.addEventListener('mouseup', dragEnd);
        };

        const dragging = (e) => {
            if (!isDragging) return;
            
            let dx = getClientX(e) - startX;
            let dy = getClientY(e) - startY;
            
            if (!hasMoved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
                hasMoved = true;
                zone.classList.add('active');
                document.getElementById('mascot-msg').classList.remove('active');
                this.isTyping = false;
            }
            
            if (hasMoved) {
                e.preventDefault(); 
                wrapper.style.left = (initialX + dx) + 'px';
                wrapper.style.top = (initialY + dy) + 'px';
                
                let dzRect = zone.getBoundingClientRect();
                let wRect = wrapper.getBoundingClientRect();
                
                let wCenterY = wRect.top + wRect.height/2;
                let dzCenterY = dzRect.top + dzRect.height/2;
                let wCenterX = wRect.left + wRect.width/2;
                let dzCenterX = dzRect.left + dzRect.width/2;
                
                if (Math.hypot(wCenterX - dzCenterX, wCenterY - dzCenterY) < 70) {
                    zone.classList.add('hover');
                    wrapper.style.opacity = '0.4';
                    wrapper.style.transform = 'scale(0.5)';
                    if(navigator.vibrate) navigator.vibrate(10);
                } else {
                    zone.classList.remove('hover');
                    wrapper.style.opacity = '1';
                    wrapper.style.transform = 'scale(1)';
                }
            }
        };

        const dragEnd = (e) => {
            if (!isDragging) return;
            isDragging = false;
            
            document.removeEventListener('touchmove', dragging);
            document.removeEventListener('mousemove', dragging);
            document.removeEventListener('touchend', dragEnd);
            document.removeEventListener('mouseup', dragEnd);

            if (hasMoved) {
                let isHovering = zone.classList.contains('hover');
                zone.classList.remove('active', 'hover');
                
                wrapper.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                wrapper.style.opacity = '1';
                wrapper.style.transform = 'scale(1)';
                
                if (isHovering) {
                    // Into the trash it goes!
                    if(navigator.vibrate) navigator.vibrate([50, 50, 50]);
                    wrapper.style.display = 'none';
                    let mt = document.getElementById('mascotToggle');
                    if(mt) mt.checked = false;
                    localStorage.setItem('hideMascot', 'true');
                } else {
                    let rect = wrapper.getBoundingClientRect();
                    let snapX = rect.left < window.innerWidth / 2 ? 15 : window.innerWidth - rect.width - 15;
                    let snapY = Math.max(20, Math.min(rect.top, window.innerHeight - rect.height - 20));
                    
                    wrapper.style.left = snapX + 'px';
                    wrapper.style.top = snapY + 'px';
                }
            } else {
                this.triggerClick();
            }
        };

        wrapper.addEventListener('touchstart', dragStart, {passive: false});
        wrapper.addEventListener('mousedown', dragStart);
    }
};

// FIRE UP ALL ENGINES
window.addEventListener('load', () => {
    DashboardEngine.init();
    AboutEngine.init();
    MascotEngine.init();
});
