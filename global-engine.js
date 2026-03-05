/* global-engine.js - Pure Offline AI, Advanced Translator & Glassmorphism UI */

window.isWaitingForAI = false; 
window.isAiMuted = false;

function injectGlobalComponents() {
    if(document.getElementById('champ-global-ui-wrapper')) return;

    const globalStyle = document.createElement('style');
    globalStyle.innerHTML = `
        body { padding-bottom: 90px !important; }
        .profile-fab { display: none !important; }
        
        /* Glassmorphism & Theme Sync */
        .glass-panel { 
            background: var(--card-bg, rgba(255,255,255,0.1)) !important; 
            backdrop-filter: blur(15px); 
            -webkit-backdrop-filter: blur(15px); 
            border: 1px solid var(--border-color, rgba(255,255,255,0.2)); 
            color: var(--text-main, white);
            box-shadow: 0 15px 35px rgba(0,0,0,0.3);
        }

        /* User Profile Setup (Glassmorphism) */
        #profile-modal { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.7); z-index: 4000; display: none; align-items: center; justify-content: center; backdrop-filter: blur(5px); animation: popIn 0.2s; padding: 20px; }
        .prof-card { width: 100%; max-width: 350px; border-radius: 24px; padding: 25px; text-align: center; position: relative; }
        .prof-card input { width: 100%; padding: 12px 15px; border-radius: 12px; border: 1px solid var(--border-color, #cbd5e1); font-family: inherit; font-size: 15px; margin-bottom: 15px; text-align: center; font-weight: 700; color: var(--text-main, #1e293b); outline: none; background: rgba(255,255,255,0.05); }
        .prof-btn { background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; border: none; padding: 12px 20px; border-radius: 50px; font-weight: 800; width: 100%; font-size: 15px; cursor: pointer; box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3); transition: 0.2s; }
        .prof-btn:active { transform: scale(0.95); }
        .avatar-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px; }
        .avatar-option { width: 100%; aspect-ratio: 1; border-radius: 50%; border: 3px solid transparent; cursor: pointer; transition: 0.2s; background: rgba(255,255,255,0.1); }
        .avatar-option.selected { border-color: var(--cyan, #3b82f6); transform: scale(1.1); }

        /* Draggable Bubbles (Neon Glow) */
        .fab-btn { width: 55px; height: 55px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; cursor: pointer; position: fixed; z-index: 1000; transition: transform 0.2s; user-select: none; border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px); }
        .fab-btn:active { transform: scale(0.9); }
        #fab-wm-btn { background: rgba(6, 182, 212, 0.2); bottom: 90px; right: 20px; color: var(--cyan); box-shadow: 0 0 15px rgba(6, 182, 212, 0.3); }
        #fab-ai-btn { background: rgba(236, 72, 153, 0.2); bottom: 25px; right: 20px; color: var(--pink); box-shadow: 0 0 15px rgba(236, 72, 153, 0.3); }

        /* AI Floating Chat Window (Glassmorphism) */
        .ai-window { position: fixed; bottom: 95px; right: 20px; width: 340px; height: 480px; max-width: calc(100vw - 40px); max-height: calc(100vh - 120px); border-radius: 24px; z-index: 2998; display: none; flex-direction: column; overflow: hidden; animation: popIn 0.2s ease-out; transform-origin: bottom right; }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.5); } 100% { opacity: 1; transform: scale(1); } }
        .ai-header { padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); background: rgba(0,0,0,0.2); }
        .ai-body { flex-grow: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; }
        .msg { max-width: 85%; padding: 12px 16px; border-radius: 16px; font-size: 14px; line-height: 1.5; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 500; word-wrap: break-word; }
        .msg-bot { background: rgba(255,255,255,0.05); color: var(--text-main); border-bottom-left-radius: 4px; border: 1px solid var(--border-color); align-self: flex-start; }
        .msg-user { background: var(--cyan); color: white; border-bottom-right-radius: 4px; align-self: flex-end; box-shadow: 0 4px 10px rgba(6, 182, 212, 0.3); }
        .ai-footer { padding: 15px; border-top: 1px solid var(--border-color); display: flex; gap: 8px; align-items: center; background: rgba(0,0,0,0.1); }
        .ai-input { flex-grow: 1; border: 1px solid var(--border-color); border-radius: 50px; padding: 12px 15px; outline: none; font-size: 14px; background: rgba(255,255,255,0.05); color: var(--text-main); font-family: inherit; }
        .ai-input:focus { border-color: var(--pink); }
        .ai-send, .ai-mic { border: none; width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; font-size: 16px; color: white; }
        .ai-send { background: var(--pink); } .ai-mic { background: var(--cyan); }
        .ai-send:active, .ai-mic:active { transform: scale(0.9); }

        /* Double Tap Dictionary & Smart Translate Popups */
        #champ-dict-pop, #smart-trans-pop { position:absolute; z-index:5000; padding:12px 18px; border-radius:14px; font-size:14px; display:none; transform:translateY(-10px) translateX(-50%); animation:popIn 0.2s; border: 1px solid var(--cyan, #38bdf8); } 
        #champ-dict-pop { pointer-events:none; }
        .dict-word { color:var(--cyan, #38bdf8); font-weight:900; font-size:16px; text-transform:capitalize; margin-bottom: 2px; font-family:'Outfit'; } .dict-bn { font-weight:600; }

        /* Full Page Google Translate Fixes */
        #google_translate_element { display: none !important; }
        .skiptranslate { display: none !important; }
        .goog-te-banner-frame { display: none !important; }
        body { top: 0px !important; }
        .goog-tooltip { display: none !important; }
        .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
    `;
    document.head.appendChild(globalStyle);

    const uiWrapper = document.createElement('div');
    uiWrapper.id = 'champ-global-ui-wrapper';
    document.body.appendChild(uiWrapper);

    // --- PROFILE SYSTEM (Retained Completely) ---
    let savedName = localStorage.getItem('champ_name') || 'Champ';
    let seed = savedName !== 'Champ' ? savedName : 'Asif';
    window.avatarLibrary = [
        `https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=06b6d4&textColor=ffffff`,
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix", "https://api.dicebear.com/7.x/adventurer/svg?seed=Aneka",
        "https://api.dicebear.com/7.x/bottts/svg?seed=Matrix", "https://api.dicebear.com/7.x/avataaars/svg?seed=Ninja&style=circle"
    ];
    window.currentAvatar = localStorage.getItem('champ_avatar') || window.avatarLibrary[0];

    const profileHTML = `
        <div id="profile-modal">
            <div class="prof-card glass-panel">
                <button onclick="document.getElementById('profile-modal').style.display='none'" style="position:absolute; top:15px; right:15px; background:none; border:none; font-size:20px; color:#ef4444; cursor:pointer;"><i class="fas fa-times-circle"></i></button>
                <div style="display:flex; justify-content:center; margin-bottom:20px;">
                    <img src="${window.currentAvatar}" id="modal-avatar" style="width:100px; height:100px; border-radius:50%; border:4px solid var(--cyan); box-shadow:0 10px 25px rgba(0,0,0,0.1); background:rgba(255,255,255,0.1);">
                </div>
                <input type="text" id="prof-name-input" placeholder="Your Name" value="${savedName !== 'Champ' ? savedName : ''}">
                <div class="avatar-grid" id="avatar-container"></div>
                <button class="prof-btn" onclick="saveProfile()"><i class="fas fa-save"></i> Save Profile</button>
            </div>
        </div>`;
    uiWrapper.innerHTML += profileHTML;

    const avatarGrid = document.getElementById('avatar-container');
    if(avatarGrid) {
        window.avatarLibrary.forEach(url => {
            const img = document.createElement('img'); img.src = url;
            img.className = 'avatar-option' + (url === window.currentAvatar ? ' selected' : '');
            img.onclick = () => { document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('selected')); img.classList.add('selected'); window.currentAvatar = url; document.getElementById('modal-avatar').src = url; };
            avatarGrid.appendChild(img);
        });
    }

    window.saveProfile = function() {
        let name = document.getElementById('prof-name-input').value.trim() || 'Champ';
        localStorage.setItem('champ_name', name); localStorage.setItem('champ_avatar', window.currentAvatar);
        if(document.getElementById('main-avatar')) document.getElementById('main-avatar').src = window.currentAvatar; 
        document.getElementById('profile-modal').style.display = 'none';
    }

    // --- FULL PAGE GOOGLE TRANSLATOR SCRIPT (Retained Completely) ---
    const googleDiv = document.createElement('div'); googleDiv.id = "google_translate_element"; document.body.appendChild(googleDiv);
    const script1 = document.createElement('script'); script1.innerHTML = `function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'google_translate_element'); }`; document.body.appendChild(script1);
    const script2 = document.createElement('script'); script2.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"; document.body.appendChild(script2);

    const transModalHTML = `
        <div id="lang-modal" style="position:fixed; inset:0; background:rgba(0, 0, 0, 0.7); z-index:3005; display:none; align-items:center; justify-content:center; backdrop-filter:blur(8px);">
            <div class="glass-panel" style="width:90%; max-width:380px; border-radius:24px; overflow:hidden; display:flex; flex-direction:column; max-height:80vh;">
                <div style="padding:20px; border-bottom:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.2);"><h3 style="margin:0; font-family:'Outfit'; font-size:18px; color:var(--text-main);"><i class="fas fa-language" style="color:var(--cyan);"></i> Page Translator</h3><button onclick="document.getElementById('lang-modal').style.display='none'" style="background:none; border:none; color:#ef4444; font-size:20px; cursor:pointer;"><i class="fas fa-times-circle"></i></button></div>
                <div style="padding:15px; border-bottom:1px solid var(--border-color);"><input type="text" id="lang-search" placeholder="Search 100+ languages..." onkeyup="filterLangs()" style="width:100%; padding:12px; border-radius:12px; border:1px solid var(--border-color); outline:none; font-family:inherit; background:rgba(255,255,255,0.05); color:var(--text-main);"></div>
                <div id="lang-list" style="padding:15px; overflow-y:auto; flex-grow:1; display:grid; grid-template-columns:1fr 1fr; gap:10px;"></div>
                <div onclick="restoreLang()" style="text-align:center; padding:18px; background:rgba(239, 68, 68, 0.1); color:#ef4444; font-weight:800; font-size:15px; cursor:pointer; font-family:'Outfit';"><i class="fas fa-undo"></i> Revert to English</div>
            </div>
        </div>`;
    uiWrapper.innerHTML += transModalHTML;

    // 100+ Google Translate Supported Languages (Exact original array)
    window.curatedLangs = [
        {c:'af',e:'Afrikaans'},{c:'sq',e:'Albanian'},{c:'am',e:'Amharic'},{c:'ar',e:'Arabic'},{c:'hy',e:'Armenian'},{c:'az',e:'Azerbaijani'},{c:'eu',e:'Basque'},{c:'be',e:'Belarusian'},{c:'bn',e:'Bengali'},{c:'bs',e:'Bosnian'},{c:'bg',e:'Bulgarian'},{c:'ca',e:'Catalan'},{c:'ceb',e:'Cebuano'},{c:'ny',e:'Chichewa'},{c:'zh-CN',e:'Chinese (Simplified)'},{c:'zh-TW',e:'Chinese (Traditional)'},{c:'co',e:'Corsican'},{c:'hr',e:'Croatian'},{c:'cs',e:'Czech'},{c:'da',e:'Danish'},{c:'nl',e:'Dutch'},{c:'en',e:'English'},{c:'eo',e:'Esperanto'},{c:'et',e:'Estonian'},{c:'tl',e:'Filipino'},{c:'fi',e:'Finnish'},{c:'fr',e:'French'},{c:'fy',e:'Frisian'},{c:'gl',e:'Galician'},{c:'ka',e:'Georgian'},{c:'de',e:'German'},{c:'el',e:'Greek'},{c:'gu',e:'Gujarati'},{c:'ht',e:'Haitian Creole'},{c:'ha',e:'Hausa'},{c:'haw',e:'Hawaiian'},{c:'iw',e:'Hebrew'},{c:'hi',e:'Hindi'},{c:'hmn',e:'Hmong'},{c:'hu',e:'Hungarian'},{c:'is',e:'Icelandic'},{c:'ig',e:'Igbo'},{c:'id',e:'Indonesian'},{c:'ga',e:'Irish'},{c:'it',e:'Italian'},{c:'ja',e:'Japanese'},{c:'jw',e:'Javanese'},{c:'kn',e:'Kannada'},{c:'kk',e:'Kazakh'},{c:'km',e:'Khmer'},{c:'ko',e:'Korean'},{c:'ku',e:'Kurdish'},{c:'ky',e:'Kyrgyz'},{c:'lo',e:'Lao'},{c:'la',e:'Latin'},{c:'lv',e:'Latvian'},{c:'lt',e:'Lithuanian'},{c:'lb',e:'Luxembourgish'},{c:'mk',e:'Macedonian'},{c:'mg',e:'Malagasy'},{c:'ms',e:'Malay'},{c:'ml',e:'Malayalam'},{c:'mt',e:'Maltese'},{c:'mi',e:'Maori'},{c:'mr',e:'Marathi'},{c:'mn',e:'Mongolian'},{c:'my',e:'Myanmar (Burmese)'},{c:'ne',e:'Nepali'},{c:'no',e:'Norwegian'},{c:'ps',e:'Pashto'},{c:'fa',e:'Persian'},{c:'pl',e:'Polish'},{c:'pt',e:'Portuguese'},{c:'pa',e:'Punjabi'},{c:'ro',e:'Romanian'},{c:'ru',e:'Russian'},{c:'sm',e:'Samoan'},{c:'gd',e:'Scots Gaelic'},{c:'sr',e:'Serbian'},{c:'st',e:'Sesotho'},{c:'sn',e:'Shona'},{c:'sd',e:'Sindhi'},{c:'si',e:'Sinhala'},{c:'sk',e:'Slovak'},{c:'sl',e:'Slovenian'},{c:'so',e:'Somali'},{c:'es',e:'Spanish'},{c:'su',e:'Sundanese'},{c:'sw',e:'Swahili'},{c:'sv',e:'Swedish'},{c:'tg',e:'Tajik'},{c:'ta',e:'Tamil'},{c:'te',e:'Telugu'},{c:'th',e:'Thai'},{c:'tr',e:'Turkish'},{c:'uk',e:'Ukrainian'},{c:'ur',e:'Urdu'},{c:'uz',e:'Uzbek'},{c:'vi',e:'Vietnamese'},{c:'cy',e:'Welsh'},{c:'xh',e:'Xhosa'},{c:'yi',e:'Yiddish'},{c:'yo',e:'Yoruba'},{c:'zu',e:'Zulu'}
    ];

    window.renderLangs = function(filter = "") {
        const list = document.getElementById('lang-list'); 
        if(!list) return;
        list.innerHTML = "";
        window.curatedLangs.forEach(l => {
            if(l.e.toLowerCase().includes(filter.toLowerCase())) {
                list.innerHTML += `<button onclick="doTranslate('${l.c}')" style="background:rgba(255,255,255,0.05); border:1px solid var(--border-color); padding:10px; border-radius:10px; cursor:pointer; font-weight:700; color:var(--text-main); font-family:inherit;">${l.e}</button>`;
            }
        });
    }
    window.filterLangs = function() { window.renderLangs(document.getElementById('lang-search').value); }
    
    window.doTranslate = function(code) {
        if(window.isBubbleDragging) return;
        const select = document.querySelector('.goog-te-combo');
        if (select) { 
            select.value = code; 
            select.dispatchEvent(new Event('change')); 
            document.getElementById('lang-modal').style.display = 'none'; 
        } else {
            alert("Google Engine is still loading. Please wait a second.");
        }
    }
    window.restoreLang = function() { 
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; 
        location.reload(); 
    }
    setTimeout(window.renderLangs, 500);

    // --- FLOATING ACTION BUBBLES & AI WINDOW (With Mic for STT) ---
    const actionMenuHTML = `
        <div id="fab-wm-btn" class="fab-btn draggable-bubble" onclick="if(!window.isBubbleDragging) document.getElementById('lang-modal').style.display='flex'">
            <i class="fas fa-language"></i>
        </div>
        <div id="fab-ai-btn" class="fab-btn draggable-bubble" onclick="if(!window.isBubbleDragging) window.toggleAI()">
            <i class="fas fa-robot"></i>
        </div>
        
        <div class="ai-window glass-panel" id="ai-window">
            <div class="ai-header">
                <div style="display:flex; align-items:center; gap:10px;">
                    <i class="fas fa-microchip" style="font-size:24px; color:var(--pink);"></i>
                    <div><h3 style="margin:0; font-family:'Outfit'; font-size:16px;">Champ's AI</h3><p style="margin:0; font-size:10px; color:var(--text-sub); text-transform:uppercase; letter-spacing:1px;">Asif's Forge</p></div>
                </div>
                <div style="display:flex; gap:15px; align-items:center;">
                    <button onclick="window.toggleAiMute()" id="ai-mute-btn" style="background:none; border:none; color:var(--text-sub); font-size:16px; cursor:pointer;" title="Toggle AI Voice"><i class="fas fa-volume-up"></i></button>
                    <button onclick="window.toggleAI()" style="background:none; border:none; color:var(--pink); font-size:20px; cursor:pointer;"><i class="fas fa-times-circle"></i></button>
                </div>
            </div>
            <div class="ai-body" id="ai-body"><div class="msg msg-bot">Hello! 🤖 I am Champ's AI, coded by Asif. I am trained on your grammar data and HSC rules! Ask me anything.</div></div>
            <div class="ai-footer">
                <input type="text" class="ai-input" id="ai-input" placeholder="Message Champ's AI..." onkeypress="window.handleEnter(event)">
                <button class="ai-mic" id="ai-mic-btn" onclick="window.startListening()" title="Speak to AI"><i class="fas fa-microphone"></i></button>
                <button class="ai-send" onclick="window.sendUserMessage()"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;
    uiWrapper.innerHTML += actionMenuHTML;

    // --- DOUBLE TAP DICTIONARY & SMART TRANSLATE POPUP ---
    const dictPop = document.createElement('div'); dictPop.id = 'champ-dict-pop'; dictPop.className = 'glass-panel'; document.body.appendChild(dictPop);
    const transPop = document.createElement('div'); transPop.id = 'smart-trans-pop'; transPop.className = 'glass-panel'; document.body.appendChild(transPop);

    function checkSelection(e) {
        setTimeout(() => {
            let textRaw = window.getSelection().toString().trim();
            let textLower = textRaw.toLowerCase().replace(/[.,\/#!$%^&*;:{}=\-_'~()]/g,""); 

            // 1. Dictionary Logic (Single Word)
            if (textLower && !textLower.includes(' ')) {
                let wordData = (typeof vocabList !== 'undefined') ? vocabList.find(v => v.w.toLowerCase() === textLower) : null;
                if (!wordData && typeof unitData !== 'undefined' && typeof URLSearchParams !== 'undefined') {
                    const uid = new URLSearchParams(window.location.search).get('unit');
                    if (uid && unitData[uid] && unitData[uid].vocab) wordData = unitData[uid].vocab.find(v => v.w.toLowerCase() === textLower);
                }
                if (wordData) {
                    let range = window.getSelection().getRangeAt(0).getBoundingClientRect();
                    dictPop.style.top = (window.scrollY + range.top - 75) + 'px';
                    dictPop.style.left = (window.scrollX + range.left + range.width / 2) + 'px';
                    dictPop.innerHTML = `<div class="dict-word">${wordData.w}</div><div class="dict-bn">${wordData.m}</div>`;
                    dictPop.style.display = 'block';
                    if(navigator.vibrate && localStorage.getItem('champSounds') !== 'false') navigator.vibrate(10);
                }
            } 
            // 2. Smart Translate Logic (Sentence)
            else if (textRaw.length > 5 && textRaw.includes(' ')) {
                let range = window.getSelection().getRangeAt(0).getBoundingClientRect();
                transPop.style.top = (window.scrollY + range.top - 60) + 'px';
                transPop.style.left = (window.scrollX + range.left + range.width / 2) + 'px';
                transPop.innerHTML = `<div style="font-weight:700; color:var(--cyan); margin-bottom:5px; text-align:center;">Translate Selection?</div><button onclick="window.open('https://translate.google.com/?sl=en&tl=bn&text='+encodeURIComponent('${textRaw.replace(/'/g, "\\'")}'), '_blank')" style="background:var(--cyan); color:white; border:none; padding:6px 10px; border-radius:8px; cursor:pointer; width:100%; font-family:inherit; font-weight:bold;">Translate to BN</button>`;
                transPop.style.display = 'block';
            }

            // Hide popups if clicking elsewhere
            if(e.target.id !== 'champ-dict-pop' && !dictPop.contains(e.target)) dictPop.style.display = 'none';
            if(e.target.id !== 'smart-trans-pop' && !transPop.contains(e.target)) transPop.style.display = 'none';
        }, 150); 
    }
    document.addEventListener('mouseup', checkSelection); document.addEventListener('touchend', checkSelection);

    // --- DRAGGABLE BUBBLES LOGIC (Retained Completely) ---
    function makeFloatingDraggable(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            let isDragging = false; let startX, startY, startLeft, startTop;
            el.addEventListener('mousedown', dragStart);
            el.addEventListener('touchstart', dragStart, {passive: false});

            function dragStart(e) {
                let ev = e.type === 'touchstart' ? e.touches[0] : e;
                startX = ev.clientX; startY = ev.clientY;
                let rect = el.getBoundingClientRect();
                startLeft = rect.left; startTop = rect.top;
                isDragging = false;
                document.addEventListener('mousemove', dragging);
                document.addEventListener('touchmove', dragging, {passive: false});
                document.addEventListener('mouseup', dragEnd);
                document.addEventListener('touchend', dragEnd);
            }

            function dragging(e) {
                let ev = e.type === 'touchmove' ? e.touches[0] : e;
                let dx = ev.clientX - startX; let dy = ev.clientY - startY;
                if(Math.abs(dx) > 10 || Math.abs(dy) > 10) {
                    isDragging = true; window.isBubbleDragging = true; e.preventDefault();
                    el.style.left = (startLeft + dx) + 'px'; el.style.top = (startTop + dy) + 'px';
                    el.style.bottom = 'auto'; el.style.right = 'auto';
                }
            }

            function dragEnd() {
                document.removeEventListener('mousemove', dragging);
                document.removeEventListener('touchmove', dragging);
                document.removeEventListener('mouseup', dragEnd);
                document.removeEventListener('touchend', dragEnd);
                setTimeout(() => window.isBubbleDragging = false, 100); 
            }
            el.addEventListener('click', (e) => { if(isDragging) { e.preventDefault(); e.stopImmediatePropagation(); } }, true);
        });
    }
    setTimeout(() => { makeFloatingDraggable('.draggable-bubble'); }, 1000);
} 

// --- CHAMP'S AI LOGIC (Voice Speaking & Listening) ---
window.toggleAI = function() {
    if(window.isBubbleDragging) return;
    const win = document.getElementById('ai-window');
    win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
    if(win.style.display === 'flex') document.getElementById('ai-input').focus();
}

// TTS: Text-to-Speech Toggle
window.toggleAiMute = function() {
    window.isAiMuted = !window.isAiMuted;
    const btn = document.getElementById('ai-mute-btn');
    if(window.isAiMuted) {
        btn.innerHTML = '<i class="fas fa-volume-mute"></i>'; btn.style.color = '#ef4444';
        if('speechSynthesis' in window) window.speechSynthesis.cancel();
    } else {
        btn.innerHTML = '<i class="fas fa-volume-up"></i>'; btn.style.color = 'var(--text-sub)';
    }
}

window.handleEnter = function(e) { if(e.key === 'Enter') window.sendUserMessage(); }

// TTS Function
window.speakText = function(htmlText) {
    if(!window.isAiMuted && 'speechSynthesis' in window) {
        let cleanText = htmlText.replace(/<[^>]*>?/gm, ''); 
        cleanText = cleanText.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, ''); 
        window.speechSynthesis.cancel();
        let utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'en-US'; utterance.rate = 1.0; 
        window.speechSynthesis.speak(utterance);
    }
}

// NEW: STT Speech-to-Text Listening Function
window.startListening = function() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Your browser does not support Voice Input. Try Google Chrome.");
        return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    
    const micBtn = document.getElementById('ai-mic-btn');
    micBtn.style.color = '#ef4444'; // Turns red while listening
    
    recognition.onresult = function(event) {
        document.getElementById('ai-input').value = event.results[0][0].transcript;
        window.sendUserMessage(); // Auto-send after speaking
    };
    
    recognition.onend = function() {
        micBtn.style.color = 'white'; // Revert color
    };
    
    recognition.start();
}

window.sendUserMessage = function() {
    if (window.isWaitingForAI) return; 
    const input = document.getElementById('ai-input'); 
    const text = input.value.trim(); 
    if(!text) return;
    
    window.isWaitingForAI = true; 
    const body = document.getElementById('ai-body');
    
    const userMsgDiv = document.createElement('div'); 
    userMsgDiv.className = 'msg msg-user'; 
    userMsgDiv.innerText = text; 
    body.appendChild(userMsgDiv); 
    input.value = ''; 
    body.scrollTop = body.scrollHeight;

    const typingId = 'typing-' + Date.now();
    body.innerHTML += `<div class="msg msg-bot" id="${typingId}"><i class="fas fa-circle-notch fa-spin" style="color:var(--pink);"></i> Accessing Forge...</div>`;
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
        const typingIndicator = document.getElementById(typingId);
        if(typingIndicator) typingIndicator.remove();

        let response = "Error: Database offline.";
        if(typeof window.askChampAI === 'function') {
            response = window.askChampAI(text);
        } else {
            response = "Connect ai-database.js so I can think properly!";
        }

        let formattedResponse = response.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');

        const botMsgDiv = document.createElement('div'); 
        botMsgDiv.className = 'msg msg-bot'; 
        botMsgDiv.innerHTML = formattedResponse; 
        body.appendChild(botMsgDiv); 
        body.scrollTop = body.scrollHeight;
        
        window.speakText(formattedResponse);
        window.isWaitingForAI = false; 
    }, 600);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectGlobalComponents);
} else {
    injectGlobalComponents();
}
