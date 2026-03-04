/* global-engine.js - The Ultimate Offline Core & Universal Translator */

window.isRoleplayMode = false; 
window.chatHistory = []; 
window.isWaitingForAI = false; 
window.isAiMuted = false;

function injectGlobalComponents() {
    const globalStyle = document.createElement('style');
    globalStyle.innerHTML = `
        body { padding-bottom: 90px !important; }
        
        /* Floating Buttons */
        .fab-btn { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; color: white; box-shadow: 0 8px 20px rgba(0,0,0,0.2); cursor: pointer; border: 2px solid rgba(255,255,255,0.2); position: fixed; z-index: 1000; transition: transform 0.2s; }
        .fab-btn:active { transform: scale(0.9); }
        #fab-wm-btn { background: linear-gradient(135deg, #10b981, #059669); bottom: 90px; right: 20px; }
        #fab-ai-btn { background: linear-gradient(135deg, #8b5cf6, #6d28d9); bottom: 25px; right: 20px; }

        /* AI Window */
        .ai-window { position: fixed; bottom: 95px; right: 20px; width: 320px; height: 450px; background: white; border-radius: 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.3); z-index: 2998; display: none; flex-direction: column; overflow: hidden; border: 1px solid #e2e8f0; animation: popIn 0.2s ease-out; }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
        .ai-header { background: linear-gradient(135deg, #1e293b, #334155); color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center; }
        .ai-body { flex-grow: 1; padding: 15px; overflow-y: auto; background: #f8fafc; display: flex; flex-direction: column; gap: 10px; scroll-behavior: smooth; }
        .msg { max-width: 85%; padding: 10px 15px; border-radius: 16px; font-size: 13px; line-height: 1.5; word-wrap: break-word; }
        .msg-bot { background: white; color: #1e293b; border-bottom-left-radius: 4px; border: 1px solid #e2e8f0; align-self: flex-start; }
        .msg-user { background: #3b82f6; color: white; border-bottom-right-radius: 4px; align-self: flex-end; }
        .ai-footer { padding: 10px; background: white; border-top: 1px solid #f1f5f9; display: flex; gap: 8px; align-items: center; }
        .ai-input { flex-grow: 1; border: 1px solid #e2e8f0; border-radius: 50px; padding: 10px 15px; outline: none; font-size: 13px; font-family: inherit; }
        .ai-send { background: #10b981; color: white; border: none; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .ai-nav-btn { display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white !important; padding: 8px 14px; border-radius: 12px; text-decoration: none; font-weight: 700; margin-top: 10px; margin-right: 8px; font-size: 12px; box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3); transition: 0.2s; }
        .ai-nav-btn:active { transform: scale(0.95); }
        .ai-mic-btn { background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); padding: 10px 12px; border-radius: 50%; cursor: pointer; transition: 0.3s; display: flex; align-items: center; justify-content: center; }

        /* Google Translate Hiding */
        #google_translate_element { display: none !important; }
        .skiptranslate { display: none !important; }
        body { top: 0px !important; }
    `;
    document.head.appendChild(globalStyle);

    // ==========================================
    // 1. MEGA TRANSLATOR SYSTEM (ALL LANGUAGES)
    // ==========================================
    const googleDiv = document.createElement('div'); 
    googleDiv.id = "google_translate_element"; 
    document.body.appendChild(googleDiv);
    
    const script1 = document.createElement('script'); 
    script1.innerHTML = `function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'google_translate_element'); }`; 
    document.body.appendChild(script1);
    
    const script2 = document.createElement('script'); 
    script2.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"; 
    document.body.appendChild(script2);

    const transModalHTML = `
        <div id="lang-modal" style="position:fixed; inset:0; background:rgba(15,23,42,0.6); z-index:3005; display:none; align-items:center; justify-content:center; backdrop-filter:blur(4px);">
            <div style="background:white; width:90%; max-width:350px; border-radius:24px; overflow:hidden; display:flex; flex-direction:column; max-height:80vh; box-shadow: 0 20px 50px rgba(0,0,0,0.3); animation: popIn 0.3s;">
                <div style="padding:20px; border-bottom:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center;">
                    <h3 style="margin:0; font-family:'Outfit'; font-size:18px; color:#1e293b;"><i class="fas fa-globe"></i> Universal Translator</h3>
                    <button onclick="document.getElementById('lang-modal').style.display='none'" style="background:none; border:none; color:#64748b; font-size:20px; cursor:pointer;"><i class="fas fa-times-circle"></i></button>
                </div>
                <div style="padding:15px; border-bottom:1px solid #e2e8f0; background:#f8fafc;">
                    <input type="text" id="lang-search" placeholder="Search any language (e.g. Spanish, Bengali)..." onkeyup="window.filterLangs()" style="width:100%; padding:12px; border-radius:12px; border:1px solid #cbd5e1; outline:none; font-family:inherit; font-weight:600; color:#1e293b;">
                </div>
                <div id="lang-list" style="padding:15px; overflow-y:auto; flex-grow:1; display:grid; grid-template-columns:1fr 1fr; gap:10px;"></div>
                <div onclick="window.restoreLang()" style="text-align:center; padding:15px; background:#fef2f2; color:#ef4444; font-weight:800; font-size:14px; cursor:pointer; font-family:'Outfit'; border-top:1px solid #fecaca;"><i class="fas fa-undo"></i> Restore to English</div>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', transModalHTML);

    // The Ultimate 100+ Languages Database
    window.allCuratedLangs = [
        {c:'af',e:'Afrikaans'}, {c:'sq',e:'Albanian'}, {c:'am',e:'Amharic'}, {c:'ar',e:'Arabic'},
        {c:'hy',e:'Armenian'}, {c:'az',e:'Azerbaijani'}, {c:'bn',e:'Bengali'}, {c:'bs',e:'Bosnian'},
        {c:'bg',e:'Bulgarian'}, {c:'ca',e:'Catalan'}, {c:'ceb',e:'Cebuano'}, {c:'zh-CN',e:'Chinese (Simp)'},
        {c:'zh-TW',e:'Chinese (Trad)'}, {c:'co',e:'Corsican'}, {c:'hr',e:'Croatian'}, {c:'cs',e:'Czech'},
        {c:'da',e:'Danish'}, {c:'nl',e:'Dutch'}, {c:'en',e:'English'}, {c:'eo',e:'Esperanto'},
        {c:'et',e:'Estonian'}, {c:'tl',e:'Filipino'}, {c:'fi',e:'Finnish'}, {c:'fr',e:'French'},
        {c:'gl',e:'Galician'}, {c:'ka',e:'Georgian'}, {c:'de',e:'German'}, {c:'el',e:'Greek'},
        {c:'gu',e:'Gujarati'}, {c:'ht',e:'Haitian Creole'}, {c:'ha',e:'Hausa'}, {c:'haw',e:'Hawaiian'},
        {c:'he',e:'Hebrew'}, {c:'hi',e:'Hindi'}, {c:'hmn',e:'Hmong'}, {c:'hu',e:'Hungarian'},
        {c:'is',e:'Icelandic'}, {c:'ig',e:'Igbo'}, {c:'id',e:'Indonesian'}, {c:'ga',e:'Irish'},
        {c:'it',e:'Italian'}, {c:'ja',e:'Japanese'}, {c:'jw',e:'Javanese'}, {c:'kn',e:'Kannada'},
        {c:'kk',e:'Kazakh'}, {c:'km',e:'Khmer'}, {c:'ko',e:'Korean'}, {c:'ku',e:'Kurdish'},
        {c:'ky',e:'Kyrgyz'}, {c:'lo',e:'Lao'}, {c:'la',e:'Latin'}, {c:'lv',e:'Latvian'},
        {c:'lt',e:'Lithuanian'}, {c:'lb',e:'Luxembourgish'}, {c:'mk',e:'Macedonian'}, {c:'mg',e:'Malagasy'},
        {c:'ms',e:'Malay'}, {c:'ml',e:'Malayalam'}, {c:'mt',e:'Maltese'}, {c:'mi',e:'Maori'},
        {c:'mr',e:'Marathi'}, {c:'mn',e:'Mongolian'}, {c:'my',e:'Myanmar (Burmese)'}, {c:'ne',e:'Nepali'},
        {c:'no',e:'Norwegian'}, {c:'ps',e:'Pashto'}, {c:'fa',e:'Persian'}, {c:'pl',e:'Polish'},
        {c:'pt',e:'Portuguese'}, {c:'pa',e:'Punjabi'}, {c:'ro',e:'Romanian'}, {c:'ru',e:'Russian'},
        {c:'sm',e:'Samoan'}, {c:'gd',e:'Scots Gaelic'}, {c:'sr',e:'Serbian'}, {c:'st',e:'Sesotho'},
        {c:'sn',e:'Shona'}, {c:'sd',e:'Sindhi'}, {c:'si',e:'Sinhala'}, {c:'sk',e:'Slovak'},
        {c:'sl',e:'Slovenian'}, {c:'so',e:'Somali'}, {c:'es',e:'Spanish'}, {c:'su',e:'Sundanese'},
        {c:'sw',e:'Swahili'}, {c:'sv',e:'Swedish'}, {c:'tg',e:'Tajik'}, {c:'ta',e:'Tamil'},
        {c:'te',e:'Telugu'}, {c:'th',e:'Thai'}, {c:'tr',e:'Turkish'}, {c:'uk',e:'Ukrainian'},
        {c:'ur',e:'Urdu'}, {c:'uz',e:'Uzbek'}, {c:'vi',e:'Vietnamese'}, {c:'cy',e:'Welsh'},
        {c:'xh',e:'Xhosa'}, {c:'yi',e:'Yiddish'}, {c:'yo',e:'Yoruba'}, {c:'zu',e:'Zulu'}
    ];
    
    window.renderLangs = function(filter = "") {
        const list = document.getElementById('lang-list'); 
        list.innerHTML = "";
        window.allCuratedLangs.forEach(l => {
            if(l.e.toLowerCase().includes(filter.toLowerCase())) {
                list.innerHTML += `<button onclick="window.doTranslate('${l.c}')" style="background:white; border:1px solid #e2e8f0; padding:10px; border-radius:10px; cursor:pointer; font-weight:700; color:#334155; font-family:inherit; transition:0.2s;">${l.e}</button>`;
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
            alert("Google Translate is still loading, please wait a second.");
        }
    }
    window.restoreLang = function() { 
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; 
        location.reload(); 
    }
    setTimeout(window.renderLangs, 300); // Give it time to load

    // ==========================================
    // 2. FLOATING ACTION BUTTONS & AI UI
    // ==========================================
    const actionMenuHTML = `
        <div id="fab-wm-btn" class="fab-btn fab-wm draggable-bubble" onclick="if(!window.isBubbleDragging) document.getElementById('lang-modal').style.display='flex'">
            <i class="fas fa-language"></i>
        </div>
        <div id="fab-ai-btn" class="fab-btn fab-ai draggable-bubble" onclick="if(!window.isBubbleDragging) window.toggleAI()">
            <i class="fas fa-robot"></i>
        </div>
        
        <div class="ai-window" id="ai-window">
            <div class="ai-header">
                <div style="display:flex; align-items:center; gap:10px;">
                    <i class="fas fa-robot" style="font-size:24px; color:#60a5fa;"></i>
                    <div><h3 style="margin:0; font-family:'Outfit'; font-size:15px;">Mini Champ</h3><p style="margin:0; font-size:10px; color:#a7f3d0;">⚡ 100% Offline Core Active</p></div>
                </div>
                <div style="display:flex; gap:12px; align-items:center;">
                    <button onclick="window.toggleAiMute()" id="ai-mute-btn" style="background:none; border:none; color:#cbd5e1; font-size:15px; cursor:pointer;"><i class="fas fa-volume-up"></i></button>
                    <button onclick="window.toggleAI()" style="background:none; border:none; color:white; font-size:18px; cursor:pointer;"><i class="fas fa-times"></i></button>
                </div>
            </div>
            <div class="ai-body" id="ai-body">
                <div class="msg msg-bot">Hello! 👋 My cloud API is currently disabled, but my massive Offline Brain is fully active! How can I help you today?</div>
            </div>
            <div class="ai-footer">
                <button id="ai-mic-btn" onclick="window.toggleAIVoiceCommand()" class="ai-mic-btn"><i class="fas fa-microphone"></i></button>
                <input type="text" class="ai-input" id="ai-input" placeholder="Ask anything..." onkeypress="window.handleEnter(event)">
                <button class="ai-send" onclick="window.sendUserMessage()"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', actionMenuHTML);

    // ==========================================
    // 3. DOUBLE TAP DICTIONARY
    // ==========================================
    const dictStyle = document.createElement('style');
    dictStyle.innerHTML = `#champ-dict-pop { position:absolute; z-index:4000; background:#1e293b; color:white; padding:10px 15px; border-radius:12px; font-size:13px; display:none; box-shadow:0 10px 25px rgba(0,0,0,0.3); transform:translateY(-10px) translateX(-50%); animation:popIn 0.2s; pointer-events:none; } .dict-word { color:#38bdf8; font-weight:800; font-size:14px; text-transform:capitalize; } .dict-bn { color:#fdf4ff; }`;
    document.head.appendChild(dictStyle);
    
    const dictPop = document.createElement('div'); 
    dictPop.id = 'champ-dict-pop'; 
    document.body.appendChild(dictPop);

    function checkSelection(e) {
        setTimeout(() => {
            let text = window.getSelection().toString().trim().toLowerCase();
            text = text.replace(/[.,\/#!$%^&*;:{}=\-_'~()]/g,""); 
            if (text && !text.includes(' ')) {
                let wordData = (typeof vocabList !== 'undefined') ? vocabList.find(v => v.w.toLowerCase() === text) : null;
                // Also search units if available
                if (!wordData && typeof unitData !== 'undefined' && typeof URLSearchParams !== 'undefined') {
                    const urlParams = new URLSearchParams(window.location.search);
                    const uid = urlParams.get('unit');
                    if (uid && unitData[uid] && unitData[uid].vocab) wordData = unitData[uid].vocab.find(v => v.w.toLowerCase() === text);
                }
                
                if (wordData) {
                    let range = window.getSelection().getRangeAt(0).getBoundingClientRect();
                    dictPop.style.top = (window.scrollY + range.top - 65) + 'px';
                    dictPop.style.left = (window.scrollX + range.left + range.width / 2) + 'px';
                    dictPop.innerHTML = `<div class="dict-word">${wordData.w}</div><div class="dict-bn">${wordData.m}</div>`;
                    dictPop.style.display = 'block';
                }
            } else if(e.target.id !== 'champ-dict-pop' && !dictPop.contains(e.target)) {
                dictPop.style.display = 'none';
            }
        }, 150); 
    }
    document.addEventListener('mouseup', checkSelection); 
    document.addEventListener('touchend', checkSelection);
} 

// ==========================================
// 4. PURE OFFLINE AI LOGIC
// ==========================================
window.toggleAI = function() {
    if(window.isBubbleDragging) return;
    const win = document.getElementById('ai-window');
    win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
    if(win.style.display === 'flex') {
        setTimeout(() => document.getElementById('ai-input').focus(), 100);
    }
}

window.toggleAiMute = function() {
    window.isAiMuted = !window.isAiMuted;
    const btn = document.getElementById('ai-mute-btn');
    if(window.isAiMuted) {
        btn.innerHTML = '<i class="fas fa-volume-mute"></i>'; btn.style.color = '#ef4444';
        window.speechSynthesis.cancel();
    } else {
        btn.innerHTML = '<i class="fas fa-volume-up"></i>'; btn.style.color = '#cbd5e1';
    }
}

window.handleEnter = function(e) { if(e.key === 'Enter') window.sendUserMessage(); }

window.startAIRoleplay = function(systemPrompt) {
    document.getElementById('ai-window').style.display = 'flex';
    const body = document.getElementById('ai-body');
    body.innerHTML += `<div class="msg msg-bot" style="background:#fefce8; border-color:#eab308; color:#854d0e; text-align:center; font-weight:bold;">🎭 Roleplay Request: ${systemPrompt} <br><br> (Note: Deep interactive roleplay requires the Cloud API. Currently running in Local Offline Mode).</div>`;
    body.scrollTop = body.scrollHeight;
}

window.sendUserMessage = function() {
    if (window.isWaitingForAI) return; 
    const input = document.getElementById('ai-input'); 
    const text = input.value.trim(); 
    if(!text) return;
    
    window.isWaitingForAI = true; 
    let userName = localStorage.getItem('champ_name') || 'Champ'; 
    const body = document.getElementById('ai-body');
    
    body.innerHTML += `<div class='msg msg-user'>${text}</div>`; 
    input.value = ''; 
    body.scrollTop = body.scrollHeight;

    const typingId = 'typing-' + Date.now();
    body.innerHTML += `<div class="msg msg-bot" id="${typingId}"><i class="fas fa-circle-notch fa-spin"></i> Processing Offline...</div>`; 
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
        let finalReply = "";
        let lowerText = text.toLowerCase();

        // A. Hardcoded Actions
        if (lowerText.includes("flow chart")) {
            finalReply = "📊 **Flow Chart Generated (Offline Mode):**<br><br>1. Fighting against white minority rule ⬇️<br>2. Being imprisoned for nearly three decades ⬇️<br>3. Never losing his resolve ⬇️<br>4. Determining to bring down apartheid ⬇️<br>5. Avoiding a civil war ⬇️<br>6. Winning the support of the world";
        } else if (lowerText.includes("summary")) {
            finalReply = "📝 **Summary Generated (Offline Mode):**<br>Nelson Mandela dedicated his life to breaking the chains of Apartheid in South Africa. Despite spending 27 years in prison, he never lost his vision of a democratic, free society where all races live in harmony. His incredible prestige and charisma eventually won global support, making him a worldwide icon of peace.";
        } else if (lowerText.includes("quiz")) {
            finalReply = "❓ **Quiz Generated (Offline Mode):**<br>1. What did Mandela fight against?<br>a) Poverty b) Apartheid c) Climate Change<br><br>2. How long was he imprisoned?<br>a) 10 years b) 20 years c) Nearly 3 decades<br><br>*(Answers: 1-b, 2-c)*";
        } else if (lowerText.includes("grade it") || lowerText.includes("grade my writing") || lowerText.includes("analyze")) {
            finalReply = "🤖 **AI Essay Grader (Offline):**<br>My cloud server is currently disabled, so I cannot dynamically grade this essay right now. However, to score well, ensure you have:<br>1. A strong topic sentence.<br>2. No spelling mistakes.<br>3. Proper use of connectors (Moreover, Therefore).";
        }

        // B. Query the ai-database.js
        if (!finalReply && typeof window.getSmartReply === 'function') {
            let smart = window.getSmartReply(text, userName);
            if(smart) finalReply = smart;
        }

        // C. RAG File Search (Offline DBs)
        if (!finalReply) {
            let dbContext = "";
            if (typeof spokenData !== 'undefined') {
                for (const key in spokenData) {
                    if (lowerText.includes(spokenData[key].title.toLowerCase())) {
                        dbContext += `📖 **From Spoken Hub:** ${spokenData[key].theoryHTML.replace(/<[^>]*>?/gm, ' ')}<br><br>`;
                    }
                }
            }
            if (typeof matrixDB !== 'undefined') {
                for (const type in matrixDB) {
                    if (lowerText.includes(matrixDB[type].title.toLowerCase())) {
                        dbContext += `📖 **From Grammar Matrix:** ${matrixDB[type].theoryHTML.replace(/<[^>]*>?/gm, ' ')}<br><br>`;
                    }
                }
            }
            if (dbContext !== "") finalReply = dbContext;
        }

        // D. Ultimate Fallback
        if (!finalReply) {
            finalReply = "⚡ My cloud API is disabled, but my local systems are active! Ask me about English grammar, tag questions, prepositions, vocabulary, slang, or exam tips!";
        }

        const typingEl = document.getElementById(typingId);
        typingEl.innerHTML = "";
        window.typeWriterEffect(typingEl, finalReply);

    }, 500); 
}

// ⌨️ Typewriter Effect
window.typeWriterEffect = function(msgElement, text) {
    // If it contains HTML tags, render it instantly so it doesn't break UI
    if (text.includes('<') && text.includes('>')) {
        msgElement.innerHTML = text;
        document.getElementById('ai-body').scrollTop = document.getElementById('ai-body').scrollHeight;
        window.speakText(text);
        window.isWaitingForAI = false;
        return;
    }
    
    let i = 0;
    function type() {
        if (i < text.length) {
            msgElement.innerHTML += text.charAt(i);
            i++;
            document.getElementById('ai-body').scrollTop = document.getElementById('ai-body').scrollHeight;
            setTimeout(type, 15);
        } else {
            window.speakText(text);
            window.isWaitingForAI = false;
        }
    }
    type();
};

// 🔊 TEXT TO SPEECH
window.speakText = function(htmlText) {
    if(window.isAiMuted) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        // Clean out emojis and HTML tags before speaking
        let cleanText = htmlText.replace(/<[^>]*>?/gm, ' ').replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim();
        let utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'en-US';
        utterance.rate = 1.0; 
        window.speechSynthesis.speak(utterance);
    }
}

// 🎤 VOICE COMMAND
window.toggleAIVoiceCommand = function() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) { alert("Voice Commands not supported in this browser."); return; }
    
    const micBtn = document.getElementById('ai-mic-btn');
    const aiInput = document.getElementById('ai-input');
    const recognition = new SpeechRecognition();
    
    recognition.lang = 'en-US'; 
    recognition.interimResults = false;
    
    recognition.onstart = function() { 
        micBtn.style.background = "#ef4444"; 
        micBtn.style.color = "white"; 
        aiInput.placeholder = "Listening..."; 
    };
    recognition.onresult = function(event) { 
        aiInput.value = event.results[0][0].transcript; 
        setTimeout(() => { window.sendUserMessage(); }, 500); 
    };
    recognition.onend = function() { 
        micBtn.style.background = "rgba(239, 68, 68, 0.1)"; 
        micBtn.style.color = "#ef4444"; 
        aiInput.placeholder = "Ask anything..."; 
    };
    recognition.start();
};

// ==========================================
// 5. INITIALIZATION & DRAG LOGIC
// ==========================================
window.addEventListener('DOMContentLoaded', injectGlobalComponents);

function makeFloatingDraggable(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        let isDragging = false; let startX, startY, startLeft, startTop;

        el.addEventListener('mousedown', dragStart);
        el.addEventListener('touchstart', dragStart, {passive: false});

        function dragStart(e) {
            // Prevent dragging if touching inside the opened window
            if(e.target.closest('.ai-window') || e.target.closest('#lang-modal')) return;
            
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
            
            // Only consider it a drag if moved more than 15px
            if(Math.abs(dx) > 15 || Math.abs(dy) > 15) {
                isDragging = true; 
                window.isBubbleDragging = true; 
                e.preventDefault();
                el.style.left = (startLeft + dx) + 'px'; 
                el.style.top = (startTop + dy) + 'px';
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

        // Stop the click event if we were just dragging
        el.addEventListener('click', (e) => {
            if(isDragging) { e.preventDefault(); e.stopImmediatePropagation(); }
        }, true);
    });
}

setTimeout(() => { makeFloatingDraggable('.draggable-bubble'); }, 1000);
