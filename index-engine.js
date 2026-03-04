/* index-engine.js - The Brains of the Dashboard */

// 1. THEME TOGGLE
function toggleTheme(cb) {
    if(cb.checked) {
        document.body.classList.add('light-mode');
        localStorage.setItem('champTheme', 'light');
        document.getElementById('theme-meta').setAttribute('content', '#f8fafc');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('champTheme', 'dark');
        document.getElementById('theme-meta').setAttribute('content', '#09090b');
    }
}

// 2. EXPANDABLE HUB & SETTINGS
function toggleHub() {
    const hub = document.getElementById('settingsHub');
    hub.style.display = hub.style.display === 'block' ? 'none' : 'block';
}

function toggleMascotSetting(cb) {
    localStorage.setItem('hideMascot', !cb.checked);
    document.getElementById('mascot-container').style.display = cb.checked ? 'block' : 'none';
}

let isSoundEnabled = localStorage.getItem('champSounds') !== 'false';
function toggleSoundSetting(cb) {
    isSoundEnabled = cb.checked;
    localStorage.setItem('champSounds', isSoundEnabled);
}

// 3. THE QUANTUM CORE MASCOT LOGIC
let mascotTyping = false;

function getSmartGreeting() {
    const hour = new Date().getHours();
    if(hour >= 5 && hour < 12) return "Morning Grind Active. Let's build, Champ.";
    if(hour >= 12 && hour < 18) return "Mid-day momentum. Keep the streak alive.";
    return "Midnight Forge online. Elite focus required.";
}

const smartMsgs = [
    getSmartGreeting(), 
    "Your cognitive engine is leveling up.", 
    "Grammar core ready for processing.", 
    "Maintain your focus, Champ.", 
    "Creation of Asif! 💻", 
    "Credit to Sha! 🎨"
];

function triggerMascot() {
    if(mascotTyping) return;
    const container = document.getElementById('mascot-container');
    const msgBox = document.getElementById('mascot-msg');
    if(!container || !msgBox) return;
    
    container.classList.add('active');
    
    smartMsgs[0] = getSmartGreeting();
    let text = smartMsgs[Math.floor(Math.random() * smartMsgs.length)];
    
    msgBox.innerHTML = "";
    mascotTyping = true;
    if(isSoundEnabled && navigator.vibrate) navigator.vibrate(20);
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            msgBox.innerHTML += text.charAt(i); i++;
            setTimeout(typeWriter, 35);
        } else {
            setTimeout(() => { container.classList.remove('active'); mascotTyping = false; }, 3500);
        }
    }
    typeWriter();
}

setInterval(() => {
    const mc = document.getElementById('mascot-container');
    if(!mascotTyping && mc && mc.style.display !== 'none') triggerMascot();
}, 15000);

function removeMascot(e) {
    e.stopPropagation();
    document.getElementById('mascot-container').style.display = 'none';
    const tg = document.getElementById('mascotToggle');
    if(tg) tg.checked = false;
    localStorage.setItem('hideMascot', 'true');
}

// 4. ON-LOAD INITIALIZATION (Boot, Dust, Haptics, Progress)
window.addEventListener('load', () => {
    
    // --- Theme Check ---
    if(localStorage.getItem('champTheme') === 'light') {
        const tb = document.getElementById('themeToggle');
        if(tb) tb.checked = true;
    }

    // --- Sensory Haptics & Ripples ---
    document.querySelectorAll('.magnet-element').forEach(btn => {
        btn.addEventListener('pointerdown', function(e) {
            if(isSoundEnabled) {
                if(navigator.vibrate) navigator.vibrate(15);
                const audio = document.getElementById('tap-sound');
                if(audio) { audio.currentTime = 0; audio.play().catch(()=>{}); }
            }
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left; const y = e.clientY - rect.top;
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`; ripple.style.top = `${y}px`;
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.marginLeft = ripple.style.marginTop = `${-size/2}px`;
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // --- Cinematic Boot Memory Sequence ---
    const boot = document.getElementById('boot-screen');
    if(boot) {
        if(!sessionStorage.getItem('bootComplete')) {
            setTimeout(() => {
                boot.style.opacity = '0';
                boot.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    boot.style.display = 'none';
                    sessionStorage.setItem('bootComplete', 'true');
                }, 800);
            }, 2500); 
        } else {
            boot.style.display = 'none';
        }
    }

    // --- Dark Dust Generation ---
    const dustBox = document.getElementById('dark-bg-anim');
    if(dustBox) {
        for(let i=0; i<30; i++) {
            let d = document.createElement('div');
            d.className = 'dust-particle';
            d.style.left = (Math.random() * 100) + 'vw';
            d.style.top = (Math.random() * 100) + 'vh';
            d.style.width = d.style.height = (Math.random() * 3 + 1) + 'px';
            d.style.animationDuration = (Math.random() * 10 + 5) + 's';
            d.style.animationDelay = '-' + (Math.random() * 5) + 's';
            d.style.color = Math.random() > 0.5 ? 'var(--pink)' : 'var(--cyan)';
            dustBox.appendChild(d);
        }
    }

    // --- Settings UI Init ---
    if(localStorage.getItem('hideMascot') === 'true') {
        const mc = document.getElementById('mascot-container');
        const mt = document.getElementById('mascotToggle');
        if(mc) mc.style.display = 'none';
        if(mt) mt.checked = false;
    }
    const st = document.getElementById('soundToggle');
    if(st) st.checked = isSoundEnabled;

    // --- Real-Time Progress Bar Scanner ---
    setTimeout(() => {
        let n = localStorage.getItem('champ_name') || 'Champ';
        let style = localStorage.getItem('champ_avatar_style') || 'bottts';
        let color = localStorage.getItem('champ_color') || '06b6d4';
        const av = document.getElementById('main-avatar');
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

        let pA = Math.min(Math.round((cU / 15) * 100), 100);
        let pB = Math.min(Math.round((cB / 20) * 100), 10); 
        let pC = Math.min(Math.round((cW / 10) * 100), 5); 
        let pMatrix = Math.min(Math.round((cG / 100) * 100), 100);
        let pSpoken = Math.min(Math.round((cS / 50) * 100), 100);

        function updateProg(id, val) {
            let fill = document.getElementById('prog-' + id);
            let txt = document.getElementById('text-' + id);
            if(fill) fill.style.width = val + "%";
            if(txt) txt.innerText = val + "%";
        }

        updateProg('a', pA);
        updateProg('b', pB);
        updateProg('c', pC);
        updateProg('matrix', pMatrix);
        updateProg('spoken', pSpoken);
        
    }, 800); 
});
