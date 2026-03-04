/* global-engine.js - The Core AI, Translator & UI Injector */

// 1. API CONFIGURATION
const GEMINI_API_KEY = "AIzaSyD5SI8Os1eVsHNCEfSWXvSRfk8hv30DP2o"; 

window.isRoleplayMode = false; 
window.chatHistory = []; 
window.isWaitingForAI = false; 
window.isAiMuted = false;

// 2. UI INJECTION (Profile, Translator, Dictionary & AI)
function injectGlobalComponents() {
    const globalStyle = document.createElement('style');
    globalStyle.innerHTML = `
        body { padding-bottom: 90px !important; }
        .profile-fab { display: none !important; }
        
        #profile-modal { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.7); z-index: 3000; display: none; align-items: center; justify-content: center; backdrop-filter: blur(5px); animation: popIn 0.2s; padding: 20px; }
        .prof-card { background: white; width: 100%; max-width: 350px; border-radius: 24px; padding: 25px; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.2); position: relative; }
        .prof-card input { width: 100%; padding: 12px 15px; border-radius: 12px; border: 1px solid #cbd5e1; font-family: inherit; font-size: 15px; margin-bottom: 15px; text-align: center; font-weight: 700; color: #1e293b; outline: none; }
        .prof-btn { background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; border: none; padding: 12px 20px; border-radius: 50px; font-weight: 800; width: 100%; font-size: 15px; cursor: pointer; box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3); }
        .avatar-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px; }
        .avatar-option { width: 100%; aspect-ratio: 1; border-radius: 50%; border: 3px solid transparent; cursor: pointer; transition: 0.2s; background: #e2e8f0; }
        .avatar-option.selected { border-color: #3b82f6; transform: scale(1.1); }

        .fab-btn { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; color: white; box-shadow: 0 8px 20px rgba(0,0,0,0.2); cursor: pointer; border: 2px solid rgba(255,255,255,0.2); position: fixed; z-index: 1000; transition: transform 0.2s; }
        .fab-btn:active { transform: scale(0.9); }
        #fab-wm-btn { background: linear-gradient(135deg, #10b981, #059669); bottom: 90px; right: 20px; }
        #fab-ai-btn { background: linear-gradient(135deg, #8b5cf6, #6d28d9); bottom: 25px; right: 20px; }

        .ai-window { position: fixed; bottom: 95px; right: 20px; width: 320px; height: 450px; background: white; border-radius: 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.2); z-index: 2998; display: none; flex-direction: column; overflow: hidden; border: 1px solid #e2e8f0; animation: popIn 0.2s ease-out; }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
        .ai-header { background: linear-gradient(135deg, #1e293b, #334155); color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center; }
        .ai-body { flex-grow: 1; padding: 15px; overflow-y: auto; background: #f8fafc; display: flex; flex-direction: column; gap: 10px; }
        .msg { max-width: 85%; padding: 10px 15px; border-radius: 16px; font-size: 13px; line-height: 1.5; }
        .msg-bot { background: white; color: #1e293b; border-bottom-left-radius: 4px; border: 1px solid #e2e8f0; align-self: flex-start; }
        .msg-user { background: #3b82f6; color: white; border-bottom-right-radius: 4px; align-self: flex-end; }
        
        /* NEW: AI Nav Buttons and Voice Mic */
        .ai-nav-btn { display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white !important; padding: 8px 14px; border-radius: 12px; text-decoration: none; font-weight: 700; margin-top: 10px; margin-right: 8px; font-size: 12px; box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3); transition: 0.2s; }
        .ai-nav-btn:active { transform: scale(0.95); }
        .ai-mic-btn { background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); padding: 10px 12px; border-radius: 50%; cursor: pointer; transition: 0.3s; display: flex; align-items: center; justify-content: center; }

        #google_translate_element { display: none !important; }
        .skiptranslate { display: none !important; }
        body { top: 0px !important; }
    `;
    document.head.appendChild(globalStyle);

    // --- PROFILE SYSTEM ---
    let savedName = localStorage.getItem('champ_name') || 'Champ';
    let seed = savedName !== 'Champ' ? savedName : 'Asif';
    window.avatarLibrary = [
        `https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=3b82f6&textColor=ffffff`,
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix", "https://api.dicebear.com/7.x/adventurer/svg?seed=Aneka",
        "https://api.dicebear.com/7.x/bottts/svg?seed=Matrix", "https://api.dicebear.com/7.x/avataaars/svg?seed=Ninja&style=circle"
    ];
    window.currentAvatar = localStorage.getItem('champ_avatar') || window.avatarLibrary[0];

    const profileHTML = `
        <div id="profile-modal">
            <div class="prof-card">
                <button onclick="document.getElementById('profile-modal').style.display='none'" style="position:absolute; top:15px; right:15px; background:none; border:none; font-size:18px; color:#94a3b8; cursor:pointer;"><i class="fas fa-times"></i></button>
                <div style="display:flex; justify-content:center; margin-bottom:20px;">
                    <img src="${window.currentAvatar}" id="modal-avatar" style="width:100px; height:100px; border-radius:50%; border:4px solid white; box-shadow:0 10px 25px rgba(0,0,0,0.1); background:#e2e8f0;">
                </div>
                <input type="text" id="prof-name-input" placeholder="Your Name" value="${savedName !== 'Champ' ? savedName : ''}">
                <div class="avatar-grid" id="avatar-container"></div>
                <button class="prof-btn" onclick="saveProfile()"><i class="fas fa-save"></i> Save Profile</button>
            </div>
        </div>`;
    const profContainer = document.createElement('div'); profContainer.innerHTML = profileHTML; document.body.appendChild(profContainer);

    const avatarGrid = document.getElementById('avatar-container');
    window.avatarLibrary.forEach(url => {
        const img = document.createElement('img'); img.src = url;
        img.className = 'avatar-option' + (url === window.currentAvatar ? ' selected' : '');
        img.onclick = () => { document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('selected')); img.classList.add('selected'); window.currentAvatar = url; document.getElementById('modal-avatar').src = url; };
        avatarGrid.appendChild(img);
    });

    window.saveProfile = function() {
        let name = document.getElementById('prof-name-input').value.trim() || 'Champ';
        localStorage.setItem('champ_name', name); localStorage.setItem('champ_avatar', window.currentAvatar);
        if(document.getElementById('main-avatar')) document.getElementById('main-avatar').src = window.currentAvatar; 
        document.getElementById('profile-modal').style.display = 'none';
    }

    // --- MEGA TRANSLATOR (RESTORED) ---
    const googleDiv = document.createElement('div'); googleDiv.id = "google_translate_element"; document.body.appendChild(googleDiv);
    const script1 = document.createElement('script'); script1.innerHTML = `function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'google_translate_element'); }`; document.body.appendChild(script1);
    const script2 = document.createElement('script'); script2.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"; document.body.appendChild(script2);

    const transModalHTML = `
        <div id="lang-modal" style="position:fixed; inset:0; background:rgba(15,23,42,0.6); z-index:3005; display:none; align-items:center; justify-content:center; backdrop-filter:blur(4px);">
            <div style="background:white; width:90%; max-width:350px; border-radius:24px; overflow:hidden; display:flex; flex-direction:column; max-height:80vh;">
                <div style="padding:20px; border-bottom:1px solid #e2e8f0; display:flex; justify-content:space-between;"><h3 style="margin:0; font-family:'Outfit';">Select Language</h3><button onclick="document.getElementById('lang-modal').style.display='none'" style="background:none; border:none; color:#64748b; font-size:16px; cursor:pointer;"><i class="fas fa-times"></i></button></div>
                <div style="padding:15px; border-bottom:1px solid #e2e8f0; background:#f8fafc;"><input type="text" id="lang-search" placeholder="Search any language..." onkeyup="filterLangs()" style="width:100%; padding:10px; border-radius:10px; border:1px solid #cbd5e1; outline:none; font-family:inherit;"></div>
                <div id="lang-list" style="padding:15px; overflow-y:auto; flex-grow:1; display:grid; grid-template-columns:1fr 1fr; gap:10px;"></div>
                <div onclick="restoreLang()" style="text-align:center; padding:15px; background:#fee2e2; color:#ef4444; font-weight:800; font-size:14px; cursor:pointer;"><i class="fas fa-undo"></i> Restore Original</div>
            </div>
        </div>`;
    const transContainer = document.createElement('div'); transContainer.innerHTML = transModalHTML; document.body.appendChild(transContainer);

    window.curatedLangs = [
        {c:'en',e:'English'},{c:'bn',e:'Bengali'},{c:'hi',e:'Hindi'},{c:'id',e:'Indonesian'},{c:'ar',e:'Arabic'},
        {c:'ur',e:'Urdu'},{c:'es',e:'Spanish'},{c:'fr',e:'French'},{c:'de',e:'German'},{c:'pt',e:'Portuguese'},
        {c:'ru',e:'Russian'},{c:'zh-CN',e:'Chinese'},{c:'ja',e:'Japanese'},{c:'ko',e:'Korean'},{c:'tr',e:'Turkish'}
    ];
    window.renderLangs = function(filter = "") {
        const list = document.getElementById('lang-list'); list.innerHTML = "";
        window.curatedLangs.forEach(l => {
            if(l.e.toLowerCase().includes(filter.toLowerCase())) {
                list.innerHTML += `<button onclick="doTranslate('${l.c}')" style="background:white; border:1px solid #e2e8f0; padding:10px; border-radius:10px; cursor:pointer; font-weight:700; color:#1e293b; font-family:inherit;">${l.e}</button>`;
            }
        });
    }
    window.filterLangs = function() { window.renderLangs(document.getElementById('lang-search').value); }
    window.doTranslate = function(code) {
        if(window.isBubbleDragging) return;
        const select = document.querySelector('.goog-te-combo');
        if (select) { select.value = code; select.dispatchEvent(new Event('change')); document.getElementById('lang-modal').style.display = 'none'; }
    }
    window.restoreLang = function() { document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; location.reload(); }
    setTimeout(window.renderLangs, 100);

    // --- FLOATING ACTION BUTTONS & AI WINDOW ---
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
                    <div><h3 style="margin:0; font-family:'Outfit'; font-size:15px;">Mini Champ</h3><p style="margin:0; font-size:10px; color:#cbd5e1;">✨ Asif's AI Engine</p></div>
                </div>
                <div style="display:flex; gap:12px; align-items:center;">
                    <button onclick="window.toggleAiMute()" id="ai-mute-btn" style="background:none; border:none; color:#cbd5e1; font-size:15px; cursor:pointer;"><i class="fas fa-volume-up"></i></button>
                    <button onclick="window.toggleAI()" style="background:none; border:none; color:white; font-size:18px; cursor:pointer;"><i class="fas fa-times"></i></button>
                </div>
            </div>
            <div class="ai-body" id="ai-body"><div class="msg msg-bot">Hello! 👋 I am Mini Champ. How can I help you today?</div></div>
            
            <div style="padding: 10px 15px; background: white; border-top: 1px solid #f1f5f9; display: flex; flex-direction: column; gap: 8px;">
                <div style="display: flex; gap: 8px; align-items: center;">
                    <button id="ai-mic-btn" onclick="window.toggleAIVoiceCommand()" class="ai-mic-btn"><i class="fas fa-microphone"></i></button>
                    <input type="text" id="ai-input" placeholder="Ask anything..." onkeypress="window.handleEnter(event)" style="flex-grow: 1; border: 1px solid #e2e8f0; border-radius: 50px; padding: 10px 15px; outline: none; font-size: 13px;">
                    <button onclick="window.sendUserMessage()" style="background: #10b981; color: white; border: none; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    `;
    const actionContainer = document.createElement('div'); actionContainer.innerHTML = actionMenuHTML; document.body.appendChild(actionContainer);

    // --- DOUBLE TAP DICTIONARY (RESTORED) ---
    const dictStyle = document.createElement('style');
    dictStyle.innerHTML = `#champ-dict-pop { position:absolute; z-index:1001; background:#1e293b; color:white; padding:10px 15px; border-radius:12px; font-size:13px; display:none; box-shadow:0 10px 25px rgba(0,0,0,0.2); transform:translateY(-10px) translateX(-50%); animation:popIn 0.2s; } .dict-word { color:#38bdf8; font-weight:800; font-size:14px; text-transform:capitalize; } .dict-bn { color:#fdf4ff; }`;
    document.head.appendChild(dictStyle);
    const dictPop = document.createElement('div'); dictPop.id = 'champ-dict-pop'; document.body.appendChild(dictPop);

    function checkSelection(e) {
        setTimeout(() => {
            let text = window.getSelection().toString().trim().toLowerCase();
            text = text.replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g,""); 
            if (text && !text.includes(' ')) {
                let wordData = (typeof vocabList !== 'undefined') ? vocabList.find(v => v.w.toLowerCase() === text) : null;
                if (!wordData && typeof unitData !== 'undefined' && typeof urlParams !== 'undefined') {
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
            } else if(e.target.id !== 'champ-dict-pop' && !dictPop.contains(e.target)) dictPop.style.display = 'none';
        }, 150); 
    }
    document.addEventListener('mouseup', checkSelection); document.addEventListener('touchend', checkSelection);
} 

// 3. AI LOGIC (RAG + Fallback)
window.toggleAI = function() {
    if(window.isBubbleDragging) return;
    const win = document.getElementById('ai-window');
    win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
    if(win.style.display === 'flex') document.getElementById('ai-input').focus();
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
    window.isRoleplayMode = true;
    document.getElementById('ai-window').style.display = 'flex';
    const body = document.getElementById('ai-body');
    body.innerHTML = `<div class="msg msg-bot" style="background:#fefce8; border-color:#eab308; color:#854d0e; text-align:center; font-weight:bold;">🎭 Roleplay Mode Activated! Type to begin.</div>`;
    window.chatHistory = [{ role: "user", parts: [{ text: "SYSTEM INSTRUCTION: " + systemPrompt }] }];
    window.fetchGeminiResponse("", "Champ");
}

window.sendUserMessage = function() {
    if (window.isWaitingForAI) return; 
    const input = document.getElementById('ai-input'); 
    const text = input.value.trim(); 
    if(!text) return;
    
    window.isWaitingForAI = true; 
    let userName = localStorage.getItem('champ_name') || 'Champ'; 
    const body = document.getElementById('ai-body');
    
    const userMsgDiv = document.createElement('div'); 
    userMsgDiv.className = 'msg msg-user'; 
    userMsgDiv.innerText = text; 
    body.appendChild(userMsgDiv); 
    input.value = ''; 
    body.scrollTop = body.scrollHeight;

    if (window.isRoleplayMode) {
        window.chatHistory.push({ role: "user", parts: [{ text: text }] });
        window.fetchGeminiResponse(text, userName);
        return;
    }

    // --- VERIFIED DATABASE SCANNER (RAG) ---
    let dbContext = "";
    
    if (typeof spokenData !== 'undefined') {
        for (const key in spokenData) {
            if (text.toLowerCase().includes(spokenData[key].title.toLowerCase())) {
                dbContext += `Spoken Rule: ${spokenData[key].theoryHTML.replace(/<[^>]*>?/gm, ' ')}\n`;
            }
        }
    }
    
    if (typeof matrixDB !== 'undefined') {
        for (const type in matrixDB) {
            if (text.toLowerCase().includes(matrixDB[type].title.toLowerCase())) {
                dbContext += `Grammar Rule: ${matrixDB[type].theoryHTML.replace(/<[^>]*>?/gm, ' ')}\n`;
            }
        }
    }

    if (typeof writingData !== 'undefined') {
        for (const cat in writingData) {
            if(writingData[cat].items) {
                writingData[cat].items.forEach(item => {
                    if (text.toLowerCase().includes(item.title.toLowerCase())) {
                        dbContext += `Writing Topic: ${item.content}\n`;
                    }
                });
            }
        }
    }

    let localReply = null;
    if (typeof window.processOfflineResponse === 'function') {
        localReply = window.processOfflineResponse(text);
    }

    if (GEMINI_API_KEY === "AIzaSyD5SI8Os1eVsHNCEfSWXvSRfk8hv30DP2o" || GEMINI_API_KEY === "" || (localReply && dbContext === "")) {
        setTimeout(() => {
            let finalReply = localReply || "⚡ My cloud brain is offline, but my local systems are active! Ask me about English grammar, exam tips, or the app.";
            const botMsgDiv = document.createElement('div'); 
            botMsgDiv.className = 'msg msg-bot'; 
            botMsgDiv.innerHTML = finalReply; 
            body.appendChild(botMsgDiv); 
            body.scrollTop = body.scrollHeight;
            window.speakText(finalReply);
            window.isWaitingForAI = false; 
        }, 400);
        return;
    }

    if (localReply) dbContext += `\nAdditional Info: ${localReply}`; 
    let promptToSend = text;
    if (dbContext !== "") {
        promptToSend = `[SYSTEM: I have pulled verified course data. Use this data to formulate your answer naturally as a teacher.]\n\nDATA:\n${dbContext}\n\nSTUDENT'S QUESTION: ${text}`;
    }

    // NEW: Website Aware System Instruction
    if (window.chatHistory.length === 0) {
        window.chatHistory = [{ role: "user", parts: [{ text: `SYSTEM INSTRUCTION: You are 'Mini Champ', an elite AI English Tutor and the official guide for 'Champ's Learning Camp'. Creator: Asif. Designer: Sha. Student: ${userName}. You are smarter than a human teacher. YOU KNOW THE WEBSITE STRUCTURE: 'units.html' (Seen Text), 'part_b.html' (Board Grammar), 'grammar_matrix.html' (100 Grammar Rules), 'writing.html' (Essays), 'basic_english.html' (Spoken Hub), 'tools.html' (Vocab Arcade/GPA). If the student asks where to find something, tell them the exact section. Keep answers short. \n\n${promptToSend}` }] }];
    } else {
        window.chatHistory.push({ role: "user", parts: [{ text: promptToSend }] });
    }
    
    window.fetchGeminiResponse(text, userName);
}

window.fetchGeminiResponse = async function(originalText, userName) {
    const body = document.getElementById('ai-body'); 
    let typingIndicator = document.getElementById('ai-typing');
    
    if(!typingIndicator) { 
        typingIndicator = document.createElement('div'); 
        typingIndicator.id = 'ai-typing'; 
        typingIndicator.style = "font-size:12px; color:#94a3b8; padding:5px 15px;"; 
        typingIndicator.innerText = "Mini Champ is thinking..."; 
        body.appendChild(typingIndicator); 
    }
    typingIndicator.style.display = 'block'; 
    body.scrollTop = body.scrollHeight;
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, { 
            method: "POST", 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify({ contents: window.chatHistory }) 
        });
        
        const data = await response.json(); 
        if (!response.ok) throw new Error("API Failure");

        let aiText = data.candidates[0].content.parts[0].text;
        let formattedHtml = aiText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
        
        typingIndicator.style.display = 'none'; 
        const botMsgDiv = document.createElement('div'); 
        botMsgDiv.className = 'msg msg-bot'; 
        botMsgDiv.innerHTML = formattedHtml; 
        body.insertBefore(botMsgDiv, typingIndicator); 
        body.scrollTop = body.scrollHeight;
        
        window.chatHistory.push({ role: "model", parts: [{ text: aiText }] });
        window.speakText(formattedHtml); // Uses html version for speech cleaning
        window.isWaitingForAI = false; 

    } catch (error) { 
        typingIndicator.style.display = 'none'; 
        
        let fallbackReply = "⚡ My cloud connection dropped, but my local systems are active! Ask me a grammar or exam question.";
        if (typeof window.processOfflineResponse === 'function') {
            let local = window.processOfflineResponse(originalText);
            if (local) fallbackReply = local;
        }

        body.innerHTML += `<div class='msg msg-bot'>${fallbackReply}</div>`; 
        
        if(window.chatHistory.length > 0 && window.chatHistory[window.chatHistory.length-1].role === 'user') {
            window.chatHistory.pop();
        }
        window.speakText(fallbackReply);
        window.isWaitingForAI = false; 
        body.scrollTop = body.scrollHeight;
    }
}

// 🎤 NEW: AI VOICE COMMAND (SPEECH TO TEXT)
window.toggleAIVoiceCommand = function() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Your browser does not support Voice Commands. Use Google Chrome!");
        return;
    }

    const micBtn = document.getElementById('ai-mic-btn');
    const aiInput = document.getElementById('ai-input');
    
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = function() {
        micBtn.style.background = "#ef4444";
        micBtn.style.color = "white";
        micBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        aiInput.placeholder = "Listening...";
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        aiInput.value = transcript;
        setTimeout(() => { window.sendUserMessage(); }, 500); // Auto-send!
    };

    recognition.onerror = function() {
        resetMic();
    };

    recognition.onend = function() {
        resetMic();
    };

    function resetMic() {
        micBtn.style.background = "rgba(239, 68, 68, 0.1)";
        micBtn.style.color = "#ef4444";
        micBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        aiInput.placeholder = "Ask anything...";
    }

    recognition.start();
};

// 🔊 Text-To-Speech function
window.speakText = function(htmlText) {
    if(window.isAiMuted) return; // Respect the mute button
    
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Stop current speech
        
        // Clean HTML tags and emojis from the response so it sounds natural
        let cleanText = htmlText.replace(/<[^>]*>?/gm, ' ')
                                  .replace(/&#?[a-z0-9]+;/g, ' ') 
                                  .replace(/Champ's Learning Camp/g, "Champs Learning Camp")
                                  .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
                                  .trim();

        let utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'en-US';
        utterance.rate = 1.0; 
        
        window.speechSynthesis.speak(utterance);
    }
}

// 4. INITIALIZATION & DRAG LOGIC
window.addEventListener('DOMContentLoaded', injectGlobalComponents);

function makeFloatingDraggable(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        let isDragging = false;
        let startX, startY, startLeft, startTop;

        el.addEventListener('mousedown', dragStart);
        el.addEventListener('touchstart', dragStart, {passive: false});

        function dragStart(e) {
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
            if(Math.abs(dx) > 15 || Math.abs(dy) > 15) {
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

        el.addEventListener('click', (e) => {
            if(isDragging) { e.preventDefault(); e.stopImmediatePropagation(); }
        }, true);
    });
}

setTimeout(() => { makeFloatingDraggable('.draggable-bubble'); }, 1000);
