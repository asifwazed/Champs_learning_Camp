/* index-enginec.js - The 3 Core Architecture Systems (Drag to Dismiss & Fixes) */

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
        setTimeout(() => {
            const boot = document.getElementById('boot-screen');
            if(boot) {
                boot.style.opacity = '0';
                boot.style.visibility = 'hidden';
            }
        }, 2200);

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
        if(mascot) {
            mascot.style.display = cb.checked ? 'flex' : 'none';
            if(cb.checked) mascot.style.transform = 'scale(1)'; // Reset scale just in case
        }
    },

    toggleSound: function(cb) {
        localStorage.setItem('champSounds', cb.checked);
        DashboardEngine.isSoundEnabled = cb.checked;
    }
};

// ==========================================
// 3. MASCOT ENGINE (Trophy, Tips & Drag-to-Dismiss)
// ==========================================
const MascotEngine = {
    isTyping: false,
    isDragging: false,
    
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
        
        this.setupDragToDismiss();

        // Auto-popup every 15 seconds
        setInterval(() => {
            const m = document.getElementById('mascot-wrapper');
            if(!this.isTyping && !this.isDragging && m && m.style.display !== 'none') {
                this.triggerAuto();
            }
        }, 15000);
    },

    triggerAuto: function() {
        if(this.isTyping || this.isDragging) return;
        let msg = "Keep grinding, Champ. Victory is near.";
        const hour = new Date().getHours();
        if(hour >= 5 && hour < 12) msg = "Morning Grind Active. Let's build, Champ.";
        else if(hour >= 18 || hour < 4) msg = "Midnight Forge online. Elite focus required.";
        
        this.displayMessage(msg);
    },

    triggerClick: function() {
        if(this.isTyping || this.isDragging) return;
        
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
                }, 4000);
            }
        };
        typeWriter();
    },

    hide: function() {
        const m = document.getElementById('mascot-wrapper');
        const t = document.getElementById('mascotToggle');
        if(m) {
            m.style.transform = 'scale(0)';
            setTimeout(() => m.style.display = 'none', 300);
        }
        if(t) t.checked = false;
        localStorage.setItem('hideMascot', 'true');
    },

    // --- PHYSICS: DRAG TO DISMISS ---
    setupDragToDismiss: function() {
        const wrapper = document.getElementById('mascot-wrapper');
        const zone = document.getElementById('mascot-dismiss-zone');
        if(!wrapper || !zone) return;

        let startX, startY, initialX, initialY;

        const dragStart = (e) => {
            let evt = e.type === 'touchstart' ? e.touches[0] : e;
            startX = evt.clientX;
            startY = evt.clientY;
            
            let rect = wrapper.getBoundingClientRect();
            initialX = rect.left;
            initialY = rect.top;
            
            wrapper.style.left = initialX + 'px';
            wrapper.style.top = initialY + 'px';
            wrapper.style.bottom = 'auto';
            wrapper.style.right = 'auto';
            wrapper.style.transition = 'none'; // remove smooth transition for instant finger tracking
            
            this.isDragging = false;

            document.addEventListener('touchmove', dragging, {passive: false});
            document.addEventListener('mousemove', dragging);
            document.addEventListener('touchend', dragEnd);
            document.addEventListener('mouseup', dragEnd);
        };

        const dragging = (e) => {
            let evt = e.type === 'touchmove' ? e.touches[0] : e;
            let dx = evt.clientX - startX;
            let dy = evt.clientY - startY;
            
            // Only trigger drag if moved more than 10px (prevents accidental clicks)
            if (!this.isDragging && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) {
                this.isDragging = true;
                zone.classList.add('active');
                
                // Hide chat bubble instantly while dragging
                const msgBox = document.getElementById('mascot-msg');
                if(msgBox) msgBox.classList.remove('active');
                this.isTyping = false;
            }
            
            if (this.isDragging) {
                e.preventDefault(); // Stop screen from scrolling
                
                let currentX = initialX + dx;
                let currentY = initialY + dy;
                wrapper.style.left = currentX + 'px';
                wrapper.style.top = currentY + 'px';
                
                // Check if hovering over the dismiss zone at the bottom
                let dzRect = zone.getBoundingClientRect();
                let wRect = wrapper.getBoundingClientRect();
                
                let wCenterX = wRect.left + wRect.width/2;
                let wCenterY = wRect.top + wRect.height/2;
                let dzCenterX = dzRect.left + dzRect.width/2;
                let dzCenterY = dzRect.top + dzRect.height/2;
                
                let dist = Math.hypot(wCenterX - dzCenterX, wCenterY - dzCenterY);
                
                // If near the trash can
                if (dist < 70) {
                    zone.classList.add('hover');
                    wrapper.style.opacity = '0.5';
                    wrapper.style.transform = 'scale(0.7)';
                    if(navigator.vibrate) navigator.vibrate(10); // subtle pull haptic
                } else {
                    zone.classList.remove('hover');
                    wrapper.style.opacity = '1';
                    wrapper.style.transform = 'scale(1)';
                }
            }
        };

        const dragEnd = (e) => {
            document.removeEventListener('touchmove', dragging);
            document.removeEventListener('mousemove', dragging);
            document.removeEventListener('touchend', dragEnd);
            document.removeEventListener('mouseup', dragEnd);

            if (this.isDragging) {
                let isHoveringDismiss = zone.classList.contains('hover');
                zone.classList.remove('active');
                zone.classList.remove('hover');
                
                wrapper.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                wrapper.style.opacity = '1';
                wrapper.style.transform = 'scale(1)';
                
                if (isHoveringDismiss) {
                    if(navigator.vibrate) navigator.vibrate([50, 50, 50]); // Success haptic
                    this.hide();
                } else {
                    // Snap back to left or right edge automatically!
                    let rect = wrapper.getBoundingClientRect();
                    let snapX = rect.left < window.innerWidth/2 ? 15 : window.innerWidth - rect.width - 15;
                    let snapY = Math.max(20, Math.min(rect.top, window.innerHeight - rect.height - 20));
                    
                    wrapper.style.left = snapX + 'px';
                    wrapper.style.top = snapY + 'px';
                }
                
                // Delay resetting isDragging so the click event doesn't trigger immediately
                setTimeout(() => this.isDragging = false, 100); 
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
