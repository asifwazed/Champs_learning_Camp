/* global-engine.js - Master Engine for Global Components & Upgrades */

function injectGlobalComponents() {
    // ==========================================
    // 1. GLOBAL STYLES (Translator + AI)
    // ==========================================
    const globalStyle = document.createElement('style');
    globalStyle.innerHTML = `
        /* Upgraded Translator Styles */
        #translate-wrapper { 
            position: fixed; bottom: 30px; left: 20px; z-index: 200; 
            background: white; padding: 10px 15px; border-radius: 16px; 
            box-shadow: 0 10px 25px rgba(0,0,0,0.15); border: 2px solid #e2e8f0;
            display: flex; flex-direction: column; align-items: center; gap: 8px;
            animation: slideUp 0.4s ease-out;
        }
        .translate-label {
            font-size: 12px; font-weight: 800; color: #3b82f6; 
            font-family: 'Plus Jakarta Sans', sans-serif;
            display: flex; align-items: center; gap: 6px; text-transform: uppercase; letter-spacing: 0.5px;
        }
        .goog-te-gadget-simple { 
            background-color: #f8fafc !important; border-radius: 8px !important; 
            padding: 6px 12px !important; border: 1px solid #cbd5e1 !important; 
            font-family: 'Plus Jakarta Sans', sans-serif !important; 
            font-size: 12px !important; font-weight: 700 !important; 
        }
        .goog-te-gadget-icon { display: none; }
        .goog-te-menu-value span { color: #0f172a !important; }
        .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
        body { top: 0 !important; } 
        .skiptranslate iframe { display: none !important; } 

        /* Mini Champ Chatbot Styles */
        .ai-fab { position: fixed; bottom: 30px; right: 20px; width: 55px; height: 55px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4); cursor: pointer; z-index: 999; transition: transform 0.2s; border: 2px solid white; }
        .ai-fab:active { transform: scale(0.9); }
        .ai-fab img { width: 40px; border-radius: 50%; }
        .ai-fab .badge { position: absolute; top: 0; right: 0; background: #ef4444; color: white; font-size: 10px; font-weight: bold; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; }

        /* Chat Window Styles */
        .ai-window { position: fixed; bottom: 100px; right: 20px; width: 340px; height: 480px; background: white; border-radius: 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.15); z-index: 998; display: none; flex-direction: column; overflow: hidden; border: 1px solid #e2e8f0; animation: slideUp 0.3s ease-out; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        
        .ai-header { background: linear-gradient(135deg, #1e293b, #334155); color: white; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; }
        .ai-header-info { display: flex; align-items: center; gap: 10px; }
        .ai-header-info img { width: 35px; border-radius: 50%; background: white; }
        .ai-header-info h3 { margin: 0; font-family: 'Outfit'; font-size: 16px; }
        .ai-header-info p { margin: 0; font-size: 11px; color: #cbd5e1; }
        .ai-close { background: none; border: none; color: white; font-size: 20px; cursor: pointer; }
        
        .ai-body { flex-grow: 1; padding: 15px; overflow-y: auto; background: #f8fafc; display: flex; flex-direction: column; gap: 10px; scroll-behavior: smooth; }
        .msg { max-width: 85%; padding: 12px 16px; border-radius: 16px; font-size: 13px; line-height: 1.5; word-wrap: break-word; }
        .msg-bot { background: white; color: #1e293b; border-bottom-left-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.02); align-self: flex-start; border: 1px solid #e2e8f0; }
        .msg-user { background: #3b82f6; color: white; border-bottom-right-radius: 4px; align-self: flex-end; }
        
        .ai-quick-replies { display: flex; gap: 8px; padding: 10px 15px; background: white; overflow-x: auto; white-space: nowrap; border-top: 1px solid #f1f5f9; }
        .ai-quick-replies::-webkit-scrollbar { display: none; }
        .qr-btn { background: #eff6ff; color: #3b82f6; border: 1px solid #bfdbfe; padding: 6px 12px; border-radius: 50px; font-size: 11px; font-weight: 700; cursor: pointer; flex-shrink: 0; transition: 0.2s; }
        .qr-btn:active { transform: scale(0.95); }
        
        .ai-footer { padding: 10px 15px; background: white; border-top: 1px solid #f1f5f9; display: flex; gap: 10px; }
        .ai-input { flex-grow: 1; border: 1px solid #e2e8f0; border-radius: 50px; padding: 10px 15px; outline: none; font-size: 13px; font-family: inherit; }
        .ai-send { background: #10b981; color: white; border: none; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; }
        .ai-send:active { transform: scale(0.9); }
    `;
    document.head.appendChild(globalStyle);

    // ==========================================
    // 2. INJECT GOOGLE TRANSLATOR 
    // ==========================================
    const translateContainer = document.createElement('div');
    translateContainer.id = "translate-wrapper";
    translateContainer.innerHTML = `
        <div class="translate-label">
            <i class="fas fa-language" style="font-size:16px;"></i> ভাষা • Bahasa
        </div>
        <div id="google_translate_element"></div>
    `;
    document.body.appendChild(translateContainer);

    const script1 = document.createElement('script');
    script1.type = "text/javascript";
    script1.innerHTML = `
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en', 
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        }
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = "text/javascript";
    script2.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script2);
// ==========================================
    // NEW: PREMIUM TEXT-TO-SPEECH (PRONUNCIATION)
    // ==========================================
    const ttsStyle = document.createElement('style');
    ttsStyle.innerHTML = `
        #champ-tts-btn {
            position: absolute; z-index: 1000;
            background: linear-gradient(135deg, #3b82f6, #6366f1);
            color: white; border: none; border-radius: 50px;
            padding: 8px 16px; font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 13px; font-weight: 700; cursor: pointer;
            box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
            display: none; align-items: center; gap: 8px;
            transform: translateY(-10px) translateX(-50%);
            animation: popIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        #champ-tts-btn:active { transform: translateY(-10px) translateX(-50%) scale(0.95); }
        .tts-playing { animation: pulseGlow 1.5s infinite !important; background: linear-gradient(135deg, #f59e0b, #d97706) !important; box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4) !important; }
    `;
    document.head.appendChild(ttsStyle);

    const ttsBtn = document.createElement('button');
    ttsBtn.id = 'champ-tts-btn';
    ttsBtn.innerHTML = '<i class="fas fa-volume-up"></i> Listen';
    document.body.appendChild(ttsBtn);

    // Logic: Detect highlighted text and show button
    document.addEventListener('mouseup', (e) => {
        let selection = window.getSelection();
        let text = selection.toString().trim();

        // If text is highlighted and they didn't click the button itself
        if (text.length > 0 && !ttsBtn.contains(e.target)) {
            let range = selection.getRangeAt(0).getBoundingClientRect();
            ttsBtn.style.top = (window.scrollY + range.top - 45) + 'px';
            ttsBtn.style.left = (window.scrollX + range.left + range.width / 2) + 'px';
            ttsBtn.style.display = 'flex';
        } else if (!ttsBtn.contains(e.target)) {
            ttsBtn.style.display = 'none';
        }
    });

    // Logic: Hide button and stop audio if clicking away
    document.addEventListener('mousedown', (e) => {
        if (e.target.id !== 'champ-tts-btn' && !ttsBtn.contains(e.target)) {
            ttsBtn.style.display = 'none';
            window.speechSynthesis.cancel(); 
        }
    });

    // ==========================================
    // 3. INJECT "MINI CHAMP" AI COMPANION
    // ==========================================
    const aiHTML = `
        <div class="ai-fab" onclick="toggleAI()">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Asif&backgroundColor=b6e3f4" alt="Asif">
            <div class="badge">1</div>
        </div>

        <div class="ai-window" id="ai-window">
            <div class="ai-header">
                <div class="ai-header-info">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Asif&backgroundColor=b6e3f4" alt="Asif">
                    <div>
                        <h3>Mini Champ</h3>
                        <p>🟢 Online • Asif's Bot</p>
                    </div>
                </div>
                <button class="ai-close" onclick="toggleAI()"><i class="fas fa-times"></i></button>
            </div>
            
            <div class="ai-body" id="ai-body">
                <div class="msg msg-bot">Hello Champ! 👋 I am Mini Champ, Asif's personal bot. Ask me about Grammar, HSC tips, or even about my creator!</div>
            </div>

            <div class="ai-quick-replies">
                <button class="qr-btn" onclick="sendQuickReply('Who is Asif?')">👨‍💻 Who is Asif?</button>
                <button class="qr-btn" onclick="sendQuickReply('What is an Article?')">🔤 Articles Rule</button>
                <button class="qr-btn" onclick="sendQuickReply('How to write an email?')">📧 Email Format</button>
            </div>

            <div class="ai-footer">
                <input type="text" class="ai-input" id="ai-input" placeholder="Ask Mini Champ..." onkeypress="handleEnter(event)">
                <button class="ai-send" onclick="sendUserMessage()"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;
    
    const aiContainer = document.createElement('div');
    aiContainer.innerHTML = aiHTML;
    document.body.appendChild(aiContainer);
    // ==========================================
    // 2. CUSTOM UNIVERSAL TRANSLATOR (UPGRADED)
    // ==========================================
    const transStyle = document.createElement('style');
    transStyle.innerHTML = `
        /* Hide the ugly native Google widget completely */
        #google_translate_element { display: none !important; }
        .skiptranslate iframe { display: none !important; }
        body { top: 0 !important; }

        /* Sleek Floating Button */
        #lang-fab {
            position: fixed; bottom: 30px; left: 20px; z-index: 999;
            background: white; padding: 10px 18px; border-radius: 50px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15); border: 2px solid #e2e8f0;
            display: flex; align-items: center; gap: 8px; cursor: pointer;
            font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; font-weight: 800; color: #3b82f6;
            transition: transform 0.2s;
        }
        #lang-fab:active { transform: scale(0.95); }

        /* The Beautiful Search Modal */
        #lang-modal {
            position: fixed; inset: 0; background: rgba(15, 23, 42, 0.6); z-index: 1005;
            display: none; align-items: center; justify-content: center; backdrop-filter: blur(4px);
            animation: popIn 0.2s; padding: 20px;
        }
        .lang-card {
            background: white; width: 100%; max-width: 400px; border-radius: 24px; overflow: hidden;
            display: flex; flex-direction: column; max-height: 80vh; box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .lang-head { padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
        .lang-head h3 { margin: 0; font-family: 'Outfit'; font-size: 18px; color: #0f172a; }
        .close-lang { background: #f1f5f9; border: none; width: 32px; height: 32px; border-radius: 50%; color: #64748b; cursor: pointer; display:flex; align-items:center; justify-content:center; transition: 0.2s; }
        .close-lang:active { transform: scale(0.9); }
        
        .lang-search-wrap { padding: 15px 20px; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
        .lang-search {
            width: 100%; padding: 12px 15px; border-radius: 12px; border: 1px solid #cbd5e1;
            font-family: inherit; font-size: 14px; outline: none; transition: 0.2s;
        }
        .lang-search:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }

        /* The Language Grid */
        .lang-list { padding: 15px; overflow-y: auto; flex-grow: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .lang-btn {
            background: white; border: 1px solid #e2e8f0; padding: 12px; border-radius: 12px; cursor: pointer;
            text-align: left; transition: 0.2s; display: flex; flex-direction: column; gap: 4px; font-family: inherit;
        }
        .lang-btn:active { transform: scale(0.95); background: #eff6ff; border-color: #bfdbfe; }
        .lang-native { font-size: 16px; font-weight: 800; color: #1e293b; }
        .lang-eng { font-size: 11px; color: #64748b; font-weight: 600; text-transform: uppercase; }
        
        .lang-reset { text-align: center; padding: 15px; background: #eff6ff; color: #3b82f6; font-weight: 800; font-size: 14px; cursor: pointer; border-top: 1px solid #e2e8f0; transition: 0.2s; }
        .lang-reset:active { background: #dbeafe; }
    `;
    document.head.appendChild(transStyle);

    // Inject Invisible Google Translate
    const googleDiv = document.createElement('div');
    googleDiv.id = "google_translate_element";
    document.body.appendChild(googleDiv);

    const script1 = document.createElement('script');
    script1.type = "text/javascript";
    script1.innerHTML = `
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'google_translate_element');
        }
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = "text/javascript";
    script2.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script2);

    // Inject Custom UI
    const customLangUI = document.createElement('div');
    customLangUI.innerHTML = `
        <button id="lang-fab" onclick="document.getElementById('lang-modal').style.display='flex'">
            <i class="fas fa-language" style="font-size:18px;"></i> English
        </button>

        <div id="lang-modal">
            <div class="lang-card">
                <div class="lang-head">
                    <h3>Select Language</h3>
                    <button class="close-lang" onclick="document.getElementById('lang-modal').style.display='none'"><i class="fas fa-times"></i></button>
                </div>
                <div class="lang-search-wrap">
                    <input type="text" class="lang-search" id="lang-search" placeholder="Search language (e.g. Bengali)..." onkeyup="filterLanguages()">
                </div>
                <div class="lang-list" id="lang-list"></div>
                <div class="lang-reset" onclick="doTranslate('en', 'English')">
                    <i class="fas fa-undo"></i> Reset to Default (English)
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(customLangUI);

    // Curated Language Database
    window.popularLangs = [
        { c: 'bn', n: 'বাংলা', e: 'Bengali' },
        { c: 'id', n: 'Bahasa Indonesia', e: 'Indonesian' },
        { c: 'hi', n: 'हिन्दी', e: 'Hindi' },
        { c: 'ur', n: 'اردو', e: 'Urdu' },
        { c: 'ar', n: 'العربية', e: 'Arabic' },
        { c: 'es', n: 'Español', e: 'Spanish' },
        { c: 'fr', n: 'Français', e: 'French' },
        { c: 'zh-CN', n: '中文', e: 'Chinese' },
        { c: 'ru', n: 'Русский', e: 'Russian' },
        { c: 'pt', n: 'Português', e: 'Portuguese' },
        { c: 'ja', n: '日本語', e: 'Japanese' },
        { c: 'ko', n: '한국어', e: 'Korean' },
        { c: 'tr', n: 'Türkçe', e: 'Turkish' },
        { c: 'it', n: 'Italiano', e: 'Italian' },
        { c: 'de', n: 'Deutsch', e: 'German' },
        { c: 'th', n: 'ไทย', e: 'Thai' },
        { c: 'vi', n: 'Tiếng Việt', e: 'Vietnamese' },
        { c: 'ta', n: 'தமிழ்', e: 'Tamil' }
    ];

    // Rendering Logic
    window.renderLangs = function(filter = "") {
        const list = document.getElementById('lang-list');
        if(!list) return;
        list.innerHTML = "";
        window.popularLangs.forEach(l => {
            if(l.n.toLowerCase().includes(filter.toLowerCase()) || l.e.toLowerCase().includes(filter.toLowerCase())) {
                list.innerHTML += `
                    <button class="lang-btn" onclick="doTranslate('${l.c}', '${l.n}')">
                        <span class="lang-native">${l.n}</span>
                        <span class="lang-eng">${l.e}</span>
                    </button>
                `;
            }
        });
    }

    window.filterLanguages = function() {
        window.renderLangs(document.getElementById('lang-search').value);
    }

    window.doTranslate = function(code, nativeName) {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = code;
            select.dispatchEvent(new Event('change'));
            document.getElementById('lang-fab').innerHTML = `<i class="fas fa-language" style="font-size:18px;"></i> ${nativeName}`;
            document.getElementById('lang-modal').style.display = 'none';
        } else {
            alert("Translator is still waking up, please wait a second and try again!");
        }
    }

    // Auto-load the list when the app starts
    setTimeout(window.renderLangs, 100);

    // ==========================================
    // NEW: SMART READER (DOUBLE-CLICK DICTIONARY)
    // ==========================================
    const dictStyle = document.createElement('style');
    dictStyle.innerHTML = `
        #champ-dict-pop { position: absolute; z-index: 1001; background: #1e293b; color: white; padding: 10px 15px; border-radius: 12px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; display: none; box-shadow: 0 10px 25px rgba(0,0,0,0.2); border: 1px solid #334155; transform: translateY(-10px) translateX(-50%); animation: popIn 0.2s; }
        .dict-word { color: #38bdf8; font-weight: 800; margin-bottom: 4px; font-size: 14px; text-transform: capitalize; }
        .dict-bn { color: #fdf4ff; font-weight: 700; font-family: 'Hind Siliguri'; font-size: 15px; }
    `;
    document.head.appendChild(dictStyle);

    const dictPop = document.createElement('div');
    dictPop.id = 'champ-dict-pop';
    document.body.appendChild(dictPop);

    document.addEventListener('dblclick', (e) => {
        let text = window.getSelection().toString().trim().toLowerCase();
        text = text.replace(/[.,\/#!$%^&*;:{}=\-_'~()]/g,""); // Remove commas/dots
   
        
        // Only works if vocab.js is linked on the page!
        if (text && typeof vocabList !== 'undefined') {
            let wordData = vocabList.find(v => v.w.toLowerCase() === text);
            if (wordData) {
                let range = window.getSelection().getRangeAt(0).getBoundingClientRect();
                dictPop.style.top = (window.scrollY + range.top - 65) + 'px';
                dictPop.style.left = (window.scrollX + range.left + range.width / 2) + 'px';
                dictPop.innerHTML = `<div class="dict-word">${wordData.w}</div><div class="dict-bn">${wordData.m}</div>`;
                dictPop.style.display = 'block';
            }
        }
    });

    document.addEventListener('mousedown', (e) => {
        if (e.target.id !== 'champ-dict-pop' && !dictPop.contains(e.target)) dictPop.style.display = 'none';
    });
} 
// AI UI Logic
window.toggleAI = function() {
    const win = document.getElementById('ai-window');
    const badge = document.querySelector('.ai-fab .badge');
    if (win.style.display === 'flex') {
        win.style.display = 'none';
    } else {
        win.style.display = 'flex';
        if(badge) badge.style.display = 'none'; 
        document.getElementById('ai-input').focus();
    }
}

window.handleEnter = function(e) {
    if(e.key === 'Enter') {
        window.sendUserMessage();
    }
}

window.sendQuickReply = function(text) {
    document.getElementById('ai-input').value = text;
    window.sendUserMessage();
}

window.sendUserMessage = function() {
    const input = document.getElementById('ai-input');
    const text = input.value.trim();
    if(!text) return;

    const body = document.getElementById('ai-body');
    body.innerHTML += `<div class="msg msg-user">${text}</div>`;
    input.value = '';
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
        const reply = getSmartReply(text);
        body.innerHTML += `<div class="msg msg-bot">${reply}</div>`;
        body.scrollTop = body.scrollHeight;
        
        // --- NEW VOICE INJECTION ---
        let cleanText = reply.replace(/<[^>]*>?/gm, ''); // Removes HTML tags so he doesn't read <br> out loud!
        window.speechSynthesis.cancel();
        let utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'en-US';
        utterance.rate = 0.95; // Speaking speed
        let voices = window.speechSynthesis.getVoices();
        let bestVoice = voices.find(v => v.name.includes('Google US English') || v.name.includes('Female'));
        if(bestVoice) utterance.voice = bestVoice;
        window.speechSynthesis.speak(utterance);
    }, 500);
}

// ==========================================
// 4. THE SUPERCHARGED KNOWLEDGE BASE (BRAIN BATCH 1)
// ==========================================
const miniChampBrain = [
    // --- ASIF'S PERSONALITY & BIO ---
    {
        triggers: ["who is asif", "tell me about asif", "who made you", "your creator", "who created you", "about your maker"],
        reply: "My creator, Asif, is an amazing developer and mentor! 🌟 He absolutely loves reading, writing, and coding. He built this app because he has a deep passion for helping people learn. Oh, and he is heavily fueled by his love for the English language and lots of Coffee! ☕"
    },
    {
        triggers: ["asif like", "hobbies of asif", "what does asif do", "asif's hobbies"],
        reply: "Asif is a true creative! He loves to write, read, and write code. He enjoys expressing his thoughts and building tools (like me!) to help students succeed. 🚀"
    },
    {
        triggers: ["coffee"],
        reply: "Did someone say coffee? ☕ That is my creator Asif's favorite fuel for coding!"
    },

    // --- GREETINGS & SMALL TALK ---
    {
        triggers: ["hello", "hi", "hey", "salam", "assalamualaikum"],
        reply: "Hello Champ! 👋 I am Mini Champ. Are you ready to level up your English today?"
    },
    {
        triggers: ["who are you", "your name", "what are you", "mini champ", "bot", "ai", "chatgpt"],
        reply: "I am **Mini Champ**! 🤖 I am NOT ChatGPT. I am a custom bot engineered exclusively by Asif to be your 24/7 HSC English guide!"
    },
    {
        triggers: ["how are you", "how r u", "are you fine"],
        reply: "I am running at 100% battery and feeling super smart today! ⚡ How are your studies going?"
    },
    {
        triggers: ["what time is it", "time"],
        reply: "I am a language bot, not a clock! ⌚ But I can tell you that right now is the perfect time to practice your English!"
    },

    // --- APP NAVIGATION ---
    {
        triggers: ["where is writing", "paragraph", "part c"],
        reply: "You can find all Paragraphs, Stories, Emails, and Dialogues in the **Part C: Writing Vault** on the Home Page! Everything is perfectly formatted for board exams."
    },
    {
        triggers: ["where is grammar", "cloze test", "with clues", "without clues", "part b"],
        reply: "Go to the Home Page and click on **Part B: Grammar**. You will find interactive Cloze Tests from past board exams with auto-grading! 💯"
    },
    {
        triggers: ["seen text", "first paper", "textbook", "part a", "passage"],
        reply: "Click on **Part A: Seen Text** on the Home Page. I have loaded all 15 Units from the official HSC textbook with Bangla translations and interactive 40-mark exams! 📖"
    },

    // --- WRITING VAULT RULES (HSC SECRETS) ---
    {
        triggers: ["summary", "summarize", "how to write summary"],
        reply: "📝 **Asif's Summary Rules:**<br>1. Make it ONE single paragraph.<br>2. Keep it 1/3rd the length of the passage.<br>3. Use your own words.<br>4. NEVER copy exact lines or add your personal opinion!"
    },
    {
        triggers: ["flow chart", "flowchart", "boxes"],
        reply: "📊 **Flow Chart Master Rule:** NEVER write full sentences! Start your boxes with a Gerund (Verb+ing), an Infinitive (To+Verb), or a Noun phrase. Example: *Going to school* ✅, *He is going to school* ❌."
    },
    {
        triggers: ["email", "how to write email", "email format"],
        reply: "📧 **Email Rules:**<br>Always include 'To:', 'Subject:', and a proper Salutation (Dear...). Keep the body concise and clear. End with a polite sign-off like 'Yours lovingly' or 'Best regards'."
    },
    {
        triggers: ["story", "completing story", "how to write a story"],
        reply: "📖 **Story Rules:**<br>1. Always give a suitable TITLE at the top.<br>2. Write in the Past Tense (unless there is dialogue).<br>3. Adding a 'Moral' at the end is optional but highly recommended to impress the examiner!"
    },

    // --- DEEP GRAMMAR DICTIONARY ---
    {
        triggers: ["what is noun", "define noun", "noun"],
        reply: "A **Noun** is a naming word. It names a Person (Asif), Place (Dhaka), Thing (Laptop), or Idea (Happiness). If you can put 'The' or 'A' in front of it, it's probably a noun! 🏷️"
    },
    {
        triggers: ["what is pronoun", "define pronoun", "pronoun"],
        reply: "A **Pronoun** replaces a noun so we don't sound repetitive. Instead of saying 'Asif loves coding because Asif is smart', we use pronouns: 'Asif loves coding because **HE** is smart'."
    },
    {
        triggers: ["what is verb", "define verb", "verb"],
        reply: "A **Verb** is the engine of the sentence! It shows Action (run, eat, play) or State of Being (is, am, are). A sentence cannot exist without a verb! 🏃‍♂️"
    },
    {
        triggers: ["what is adjective", "define adjective", "adjective"],
        reply: "An **Adjective** is a describing word. It gives more info about a Noun. Example: The **smart** boy, the **fast** car, the **beautiful** weather. ✨"
    },
    {
        triggers: ["what is adverb", "define adverb", "adverb"],
        reply: "An **Adverb** describes a Verb, an Adjective, or another Adverb. It answers *How, When, or Where*. Example: He runs **quickly**. She speaks **softly**. (Many end in -ly!) ⏩"
    },
    {
        triggers: ["what is preposition", "define preposition", "preposition"],
        reply: "A **Preposition** shows the relationship of a noun to another word. It often shows location or time. Examples: The book is **ON** the table. I will meet you **AT** 5 PM. 📍"
    },
    {
        triggers: ["conjunction", "what is conjunction"],
        reply: "🔗 A **Conjunction** is a joining word. It connects words, phrases, or clauses. Examples: And, But, Or, Because, Although. (e.g., I like coffee **AND** coding)."
    },
    {
        triggers: ["article", "a an the", "what is an article"],
        reply: "🔤 **Articles Rule:**<br>- 'A' and 'An' are indefinite (any general item).<br>- 'The' is definite (a specific item).<br>Rule: Use 'An' before vowel **SOUNDS**, not just vowel letters! (Example: *An* honest man, *A* university)."
    },
    {
        triggers: ["active passive", "voice", "passive voice"],
        reply: "🗣️ **Voice Rules:**<br>- **Active:** Subject does the action (*Asif wrote the code*).<br>- **Passive:** Action is done TO the subject (*The code was written by Asif*).<br>Rule: Passives ALWAYS use a 'Be' verb + Verb 3 (Past Participle)!"
    },
    {
        triggers: ["modal", "modals", "can could should"],
        reply: "🎯 **Modals:** Words like Can, Could, Will, Would, Shall, Should, May, Must.<br>**Golden Rule:** ALWAYS use the base form of the verb after a modal! (He can **go** ✅, He can goes ❌)."
    },
    {
        triggers: ["tense", "present tense", "past tense", "future tense"],
        reply: "⏳ **Tenses** tell us *when* something happens:<br>- **Present:** I eat apples. (Happens now/regularly)<br>- **Past:** I ate apples. (Already finished)<br>- **Future:** I will eat apples. (Hasn't happened yet)."
    },

    // --- MOTIVATION & EMOTIONS ---
    {
        triggers: ["confused", "hard", "difficult", "tough", "i can't"],
        reply: "Take a deep breath, Champ. Learning English isn't a race, it's a marathon. You don't have to be perfect today, just be 1% better than yesterday. You got this! 💪"
    },
    {
        triggers: ["depressed", "sad", "failing", "marks", "anxious"],
        reply: "Hey, grades do not define your worth. Exam pressure is tough, but Asif built this app to make it easier for you. Don't stress, just study one lesson at a time. We are with you! ❤️"
    },
    {
        triggers: ["love you", "awesome", "great app", "thank you", "thanks"],
        reply: "Thank you so much! Comments like this are exactly why Asif worked so hard to build this. Keep pushing forward! 🚀🔥"
    },
    {
        triggers: ["joke", "funny", "laugh"],
        reply: "Why was the math book sad? ...Because it had too many problems! 😂 (Okay, I'll stick to teaching English!)"
    }, 
    // --- BATCH 2: ADVANCED GRAMMAR & RULES ---
    {
        triggers: ["right form of verb", "verb rules", "verb rule"],
        reply: "📝 **Right Form of Verbs Trick:**<br>1. After 'To', ALWAYS use the base verb (To go).<br>2. After ANY OTHER preposition (in, on, of, for, with, without), add 'ing' to the verb (for going).<br>3. Universal truths are ALWAYS Present Indefinite!"
    },
    {
        triggers: ["conditional", "conditionals", "if clause", "first conditional", "second conditional"],
        reply: "⚖️ **Conditionals (If... Then):**<br>- **1st:** Real possibility. (If I *study*, I *will pass*).<br>- **2nd:** Imaginary/Unreal. (If I *studied*, I *would pass*).<br>- **3rd:** Lost past opportunity. (If I *had studied*, I *would have passed*)."
    },
    {
        triggers: ["prefix", "suffix", "affix", "prefixes", "suffixes"],
        reply: "🧩 **Prefixes & Suffixes:**<br>- **Prefix** goes BEFORE a word to change its meaning (e.g., Un + Happy = Unhappy).<br>- **Suffix** goes AFTER a word to change its Part of Speech (e.g., Happy + ness = Happiness [Noun])."
    },
    {
        triggers: ["modifier", "modifiers", "pre-modifier", "post-modifier"],
        reply: "✨ **Modifiers** are simply words that give extra info about another word! Usually, they are Adjectives or Adverbs.<br>- **Pre-modifier:** Comes BEFORE the word (The **beautiful** car).<br>- **Post-modifier:** Comes AFTER the word (The car **in the garage**)."
    },
    {
        triggers: ["connector", "connectors", "linker", "linkers", "linking word"],
        reply: "🔗 **Connectors** glue sentences together!<br>- **Addition:** And, Moreover, Besides.<br>- **Contrast:** But, However, On the other hand.<br>- **Result:** So, Therefore, Consequently. Use these in your Paragraphs to sound like a Pro!"
    },
    {
        triggers: ["punctuation", "comma", "full stop", "capital letter"],
        reply: "✍️ **Punctuation Basics:**<br>Always start a sentence with a Capital Letter. Use a Comma (,) for a short pause or making a list. Use a Full Stop (.) to completely end an idea. Don't write run-on sentences!"
    },
    
    // --- BATCH 3: SPOKEN ENGLISH & FLUENCY HACKS ---
    {
        triggers: ["introduce myself", "introduction", "how to introduce", "myself"],
        reply: "🗣️ **Spoken Hack:** NEVER say 'Myself Asif'. It is grammatically wrong! <br>Always say:<br>'Hello, I am Asif.' OR 'My name is Asif.' Keep it simple, smile, and speak clearly!"
    },
    {
        triggers: ["fluency", "fluent", "how to speak fluent", "speak english smoothly", "speak naturally"],
        reply: "🎙️ **Fluency Secret:** Do NOT worry about your accent. Fluency is about *confidence*, not sounding British or American. Practice speaking in front of a mirror for 5 minutes every day. It's okay to make mistakes!"
    },
    {
        triggers: ["vocabulary", "vocab", "new words", "how to memorize words", "forget words"],
        reply: "🧠 **Vocabulary Hack:** Never memorize long lists of words! You will forget them. Instead, learn 3 words a day, and immediately write 3 real-life sentences using them. Context is how the brain remembers."
    },

    // --- BATCH 4: EXAM PSYCHOLOGY & TIME MANAGEMENT ---
    {
        triggers: ["time management", "manage time", "running out of time", "time in exam"],
        reply: "⏱️ **Exam Time Hack:** Do NOT get stuck on one difficult grammar question! If you don't know it, skip it and move on. Leave the highest-scoring writing parts (Paragraphs/Stories) plenty of time at the end."
    },
    {
        triggers: ["handwriting", "bad handwriting", "presentation", "writing fast"],
        reply: "📝 **Presentation Matters:** Examiners have to read hundreds of papers. Even if your handwriting isn't perfect, keep it NEAT. Leave space between words, and keep margins clear. A clean paper gets higher marks!"
    },

    // --- BATCH 5: DEEP ASIF LORE (THE VISION) ---
    {
        triggers: ["why did asif build this", "vision of this app", "champ's learning camp goal", "why create this"],
        reply: "🌟 **The Vision:** Asif noticed that many students struggle with English because it's taught in a boring, scary way. He built Champ's Learning Camp to make learning English free, interactive, and friendly. He wants to empower YOU to become a true Champ!"
    },
    {
        triggers: ["asif favorite quote", "asif quote", "quote", "motivate me"],
        reply: "As Asif always says: 'You don't have to be great to start, but you have to start to be great.' Stop overthinking, pick a lesson on the dashboard, and just start! 🚀"
    },
    {
        triggers: ["what programming language", "how is this app built", "did asif code this"],
        reply: "💻 Asif engineered this entire application using HTML, CSS, and JavaScript! He designed the UI, structured the databases, and even programmed my AI brain logic. He is always learning and upgrading!"
    }, 
    // --- BATCH 4: HARD GRAMMAR (NARRATION, VOICE, PRONOUNS) ---
    {
        triggers: ["narrat", "naration", "direct", "indirect", "speech", "say to", "said to"],
        reply: "🗣️ **Narration (Speech) Hack:**<br>1. Change the Reporting Verb (said -> told/asked).<br>2. Remove commas and use 'that', 'if', or 'to'.<br>3. Shift the tense BACKWARDS (Present -> Past, Past -> Past Perfect).<br>*Exception:* If it's a Universal Truth, the tense NEVER changes!"
    },
    {
        triggers: ["voic", "voise", "activ", "passiv", "by whom", "let the"],
        reply: "🔄 **Voice Change Secrets:**<br>- **Imperative (Orders):** Always start with 'Let'. (Do it -> Let it be done).<br>- **Interrogative (Questions):** Who -> By whom. (Who did it? -> By whom was it done?).<br>Always remember: Passive voice MUST have a Be-verb + V3!"
    },
    {
        triggers: ["pronoun ref", "faulty pronoun", "unclear pronoun", "pronoun mistake"],
        reply: "🔍 **Pronoun Reference Trick:** If a passage says 'Asif and Rahim went to the store. He bought an apple.'... WHO is 'He'? It is unclear! You must replace the unclear pronoun with the actual noun: 'Asif bought an apple.' Always check 'It', 'This', and 'They'!"
    },
    {
        triggers: ["preposit", "prepo", "in on at", "appropriate prepo"],
        reply: "📍 **The IN / ON / AT Rule:**<br>- **IN:** Big things (Centuries, Years, Months, Countries). Example: *In* 2026, *In* Dhaka.<br>- **ON:** Specific Days and Dates. Example: *On* Monday, *On* your birthday.<br>- **AT:** Very specific Times or Locations. Example: *At* 5 PM, *At* the bus stop."
    },
    {
        triggers: ["synonym", "antonym", "sinonim", "opposite word", "similar word"],
        reply: "📖 **Synonym/Antonym Hack:** When replacing a word, you MUST keep the same Part of Speech! If the question asks for a synonym of 'Beauty' (Noun), you cannot write 'Beautiful' (Adjective). You must write 'Attractiveness' (Noun)."
    },

    // --- BATCH 5: HSC SPECIFIC QUESTIONS (REARRANGE, GRAPHS, THEMES) ---
    {
        triggers: ["rearrang", "re arrang", "re-arrang", "jumble", "order sentence"],
        reply: "🧩 **Rearrangement Strategy:**<br>1. Look for the 'Introduction' sentence (usually introduces a name, time, or place).<br>2. Find chronological connectors (Then, After that, Next).<br>3. Match Pronouns to Nouns. If sentence 'C' says 'He was a king', the sentence before it must mention the king's name!"
    },
    {
        triggers: ["graph", "pie chart", "bar chart", "data", "chart"],
        reply: "📈 **Graph & Chart Rules:**<br>1. NEVER give your personal opinion or reasons why the data is high/low unless it's in the chart.<br>2. Use comparing words: *fluctuated, skyrocketed, plummeted, reached a peak, remained stable.*<br>3. Summarize the main trend in the final sentence."
    },
    {
        triggers: ["theme", "poem theme", "appreciation", "literary"],
        reply: "🎭 **Writing a Theme:**<br>A theme is the hidden message. Don't summarize the story! For example, if the poem is about a dying flower, the theme isn't 'flowers die'. The theme is 'the temporary nature of youth and beauty'."
    },

    // --- BATCH 6: COMMON TYPOS & CONFUSING WORDS ---
    {
        triggers: ["effect vs affect", "affect effect", "efect", "afect"],
        reply: "🧠 **Affect vs. Effect:**<br>- **Affect (Verb):** To influence something. (The rain will *affect* the game).<br>- **Effect (Noun):** The result. (The *effect* of the rain was a muddy field).<br>Trick: **A**ffect is an **A**ction!"
    },
    {
        triggers: ["its or it's", "it's", "its"],
        reply: "📝 **It's vs Its:**<br>- **It's:** Short for 'It is' or 'It has'. (It's raining).<br>- **Its:** Shows ownership. (The dog wagged its tail). No apostrophe for ownership!"
    },
    {
        triggers: ["there their they're", "there their", "theyre"],
        reply: "📍 **There, Their, They're:**<br>- **There:** A place. (Over there).<br>- **Their:** Ownership. (Their car).<br>- **They're:** 'They are'. (They're happy)."
    },
    {
        triggers: ["to too two", "too vs to"],
        reply: "✌️ **To, Too, Two:**<br>- **To:** Direction or action (Go to sleep).<br>- **Too:** Also, or excessive (Me too! / It's too hot).<br>- **Two:** The number 2."
    },

    // --- BATCH 7: EXPANDED LORE & SMALL TALK ---
    {
        triggers: ["thank u", "thnx", "tysm", "appreciate", "helpful"],
        reply: "You are very welcome! Helping you makes my code run faster. Keep practicing, and don't forget you can always message Asif if you get stuck! 💙"
    },
    {
        triggers: ["bye", "goodbye", "cya", "see ya", "allah hafez", "khoda hafez"],
        reply: "Goodbye Champ! 👋 Allah Hafez. Don't forget to review your vocabulary today. See you later!"
    },
    {
        triggers: ["bored", "boring", "sleepy", "tired", "exhausted"],
        reply: "Take a 10-minute break! Wash your face, grab some water (or coffee, like Asif does ☕), and stretch. Studying with a tired brain doesn't work. Come back when you're refreshed!"
    },
    {
        triggers: ["what can u do", "what do you do", "ur job", "your job"],
        reply: "I am a hyper-intelligent digital guide! 🤖 I can give you exam hacks, explain confusing grammar rules, help you navigate this app, and remind you how awesome you are. Try asking me 'What is a noun?' or 'How to write a graph'!"
    },
    {
        triggers: ["smart", "genius", "clever", "intelligent", "good bot"],
        reply: "Haha, thank you! 😎 I am only smart because my creator, Asif, spent hours writing my logic. But the real genius here is YOU for studying so hard!"
    },
    // --- BATCH 8: IDIOMS, SPELLING HACKS & WRITING FORMATS ---
    {
        triggers: ["idiom", "phrase", "proverb", "piece of cake", "raining cats and dogs"],
        reply: "🎭 **Idiom Magic:** Idioms are phrases that don't mean what they literally say! 'Piece of cake' means very easy. 'Bite the bullet' means doing something difficult bravely. Try to use one in your Story writing to impress the board examiner!"
    },
    {
        triggers: ["spell", "speling", "spelling mistake", "how to spell", "i before e"],
        reply: "✍️ **Spelling Hack:** Remember the golden rule: 'I before E, except after C!' (Example: Bel**ie**ve, but Re**cei**ve). Also, break big words into syllables to memorize them: En-vi-ron-ment!"
    },
    {
        triggers: ["application", "formal letter", "letter to principal", "write a letter"],
        reply: "📝 **Application Format:**<br>1. Date<br>2. The Principal<br>3. College Name & Address<br>4. Subject (Short & clear)<br>5. Sir/Madam<br>6. Body (Keep it formal and straight to the point)<br>7. Yours obediently, [Your Name]."
    },
    {
        triggers: ["report", "newspaper report", "press report"],
        reply: "📰 **Report Writing Rules:**<br>Always include a Catchy Headline at the top! Below the headline, write your name (e.g., Staff Reporter) and the location/date. Answer the '5 Ws' in the first paragraph: Who, What, When, Where, Why!"
    },

    // --- BATCH 9: ROUTINES, PSYCHOLOGY & TROLL DEFENSE ---
    {
        triggers: ["routine", "timetable", "how many hours", "schedule"],
        reply: "⏰ **Asif's Routine Secret:** Don't measure study by hours; measure it by *topics*. Say 'I will finish Unit 1 and 2 paragraphs today', not 'I will study for 3 hours'. Quality focus is better than staring at a book all day!"
    },
    {
        triggers: ["forget", "can't remember", "memorizing", "blanking", "memory"],
        reply: "🧠 **Memory Trick:** If you keep forgetting, you are probably just passively reading. You need to write it down! Write the summary or paragraph without looking at the book. Making mistakes while practicing is the only way your brain remembers."
    },
    {
        triggers: ["stupid", "idiot", "shut up", "dumb", "bad word", "hate you", "useless"],
        reply: "Hey now! 🛑 I am just a friendly bot created by Asif to help you learn. Let's keep it respectful and focus on making you an English Champ! Ask me a grammar question instead."
    },
    {
        triggers: ["best teacher", "good teacher", "asif is great", "asif is the best"],
        reply: "I totally agree! Asif puts his heart, soul, and lots of coffee ☕ into teaching. Make sure you practice hard to make him proud! 🌟"
    }
];

function getSmartReply(userInput) {
    let msg = userInput.toLowerCase();

    // 1. Loop through the supercharged brain array
    for (let i = 0; i < miniChampBrain.length; i++) {
        let brainNode = miniChampBrain[i];
        for (let j = 0; j < brainNode.triggers.length; j++) {
            if (msg.includes(brainNode.triggers[j])) {
                return brainNode.reply; 
            }
        }
    }

    // 2. THE ULTIMATE FALLBACK
    return `That is an excellent question! 🧠 My brain is very big, but I don't have the answer to that specific query yet. I will let my creator, Asif, know so he can teach it to me!<br><br>For now, ask the real Asif directly:<br><a href="https://wa.me/8801721149369" target="_blank" style="display:inline-block; margin-top:8px; background:#25D366; color:white; padding:8px 12px; border-radius:8px; text-decoration:none; font-weight:bold;"><i class="fab fa-whatsapp"></i> Message Asif</a>`;
}

// Run the engine when page loads
window.addEventListener('DOMContentLoaded', injectGlobalComponents);
