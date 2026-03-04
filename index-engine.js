/* index-engine.js - Flawless Drag-to-Dismiss & Memory Boot Engine */

// ==========================================
// 1. DASHBOARD ENGINE 
// ==========================================
const DashboardEngine = {
    isSoundEnabled: true,

    init: function() {
        this.isSoundEnabled = localStorage.getItem('champSounds') !== 'false';
        this.setupBootSequence();
        this.bindSensoryRipples();
        setTimeout(() => this.scanProgress(), 800);
    },

    setupBootSequence: function() {
        const boot = document.getElementById('boot-screen');
        if(boot) {
            if(!sessionStorage.getItem('bootPlayed')) {
                setTimeout(() => {
                    boot.style.opacity = '0';
                    boot.style.visibility = 'hidden';
                    sessionStorage.setItem('bootPlayed', 'true');
                }, 1800); // Quick, premium loading time
            } else {
                boot.style.display = 'none'; // Instant skip if already played
            }
        }
    },

    bindSensoryRipples: function() {
        document.querySelectorAll('.magnet-element').forEach(btn => {
            btn.addEventListener('pointerdown', (e) => {
                if(this.isSoundEnabled) {
                    if(navigator.vibrate) navigator.vibrate(10);
                }
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
            if(fill) { fill.style.width = perc + "%"; }
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
    close: function(e) {
        if(e && e.target.id === 'aboutModal') {
            document.getElementById('aboutModal').classList.remove('active');
        }
    },
    forceClose: function() {
        document.getElementById('aboutModal').classList.remove('active');
    }
};

// ==========================================
// 3. MASCOT ENGINE (OG Pro Physics)
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
        if(localStorage.getItem('hideMascot') === 'true') {
            const m = document.getElementById('mascot-wrapper');
            if(m) m.style.display = 'none';
        }
        
        this.setupDragPhysics();

        setInterval(() => {
            const m = document.getElementById('mascot-wrapper');
            if(!this.isTyping && m && m.style.display !== 'none') {
                this.triggerAuto();
            }
        }, 20000);
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
        const mascotBall = document.getElementById('drag-mascot');
        if(!wrapper || !zone || !mascotBall) return;

        let isDragging = false;
        let hasMoved = false;
        let startX, startY, initialX, initialY;

        const getClientX = (e) => e.touches ? e.touches[0].clientX : e.clientX;
        const getClientY = (e) => e.touches ? e.touches[0].clientY : e.clientY;

        const dragStart = (e) => {
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
                    if(navigator.vibrate) navigator.vibrate([50, 50, 50]);
                    wrapper.style.display = 'none';
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

        mascotBall.addEventListener('touchstart', dragStart, {passive: false});
        mascotBall.addEventListener('mousedown', dragStart);
    }
};

// FIRE UP ALL ENGINES
window.addEventListener('load', () => {
    DashboardEngine.init();
    MascotEngine.init();
});
