/* global-engine.js - The Core AI & UI Injector */

// 1. API CONFIGURATION
// Add your NEW Google AI Studio API key here. If it is blank or blocked, the AI will automatically use ai-database.js!
const GEMINI_API_KEY = "YOUR_API_KEY_HERE"; 

window.isRoleplayMode = false; 
window.chatHistory = []; 
window.isWaitingForAI = false; 
window.isAiMuted = false;

// 2. UI INJECTION
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
        #fab-ai-btn { background: linear-gradient(135deg, #8b5cf6, #6d28d9); bottom: 25px; right: 20px; }

        .ai-window { position: fixed; bottom: 95px; right: 20px; width: 320px; height: 450px; background: white; border-radius: 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.2); z-index: 2998; display: none; flex-direction: column; overflow: hidden; border: 1px solid #e2e8f0; animation: popIn 0.2s ease-out; }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
        .ai-header { background: linear-gradient(135deg, #1e293b, #334155); color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center; }
        .ai-body { flex-grow: 1; padding: 15px; overflow-y: auto; background: #f8fafc; display: flex; flex-direction: column; gap: 10px; }
        .msg { max-width: 85%; padding: 10px 15px; border-radius: 16px; font-size: 13px; line-height: 1.5; }
        .msg-bot { background: white; color: #1e293b; border-bottom-left-radius: 4px; border: 1px solid #e2e8f0; align-self: flex-start; }
        .msg-user { background: #3b82f6; color: white; border-bottom-right-radius: 4px; align-self: flex-end; }
        .ai-footer { padding: 10px; background: white; border-top: 1px solid #f1f5f9; display: flex; gap: 8px; }
        .ai-input { flex-grow: 1; border: 1px solid #e2e8f0; border-radius: 50px; padding: 10px 15px; outline: none; font-size: 13px; }
        .ai-send { background: #10b981; color: white; border: none; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; }
    `;
    document.head.appendChild(globalStyle);

    let savedName = localStorage.getItem('champ_name') || 'Champ';
    let seed = savedName !== 'Champ' ? savedName : 'Asif';
    window.avatarLibrary = [
        `https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=3b82f6&textColor=ffffff`,
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix", "https://api.dicebear.com/7.x/adventurer/svg?seed=Aneka",
        "https://api.dicebear.com/7.x/bottts/svg?seed=Matrix", "https://api.dicebear.com/7.x/avataaars/svg?seed=Ninja&style=circle"
    ];
    window.currentAvatar = localStorage.getItem('champ_avatar') || window.avatarLibrary[0];

    const actionMenuHTML = `
        <div id="fab-ai-btn" class="fab-btn fab-ai draggable-bubble" onclick="if(!window.isBubbleDragging) window.toggleAI()">
            <i class="fas fa-robot"></i>
        </div>
        
        <div class="ai-window" id="ai-window">
            <div class="ai-header">
                <div style="display:flex; align-items:center; gap:10px;">
                    <i class="fas fa-robot" style="font-size:24px; color:#60a5fa;"></i>
                    <div><h3 style="margin:0; font-family:'Outfit'; font-size:15px;">Mini Champ</h3><p style="margin:0; font-size:10px; color:#cbd5e1;">🟢 Asif's AI Engine</p></div>
                </div>
                <div style="display:flex; gap:12px; align-items:center;">
                    <button onclick="window.toggleAiMute()" id="ai-mute-btn" style="background:none; border:none; color:#cbd5e1; font-size:15px; cursor:pointer;"><i class="fas fa-volume-up"></i></button>
                    <button onclick="window.toggleAI()" style="background:none; border:none; color:white; font-size:18px; cursor:pointer;"><i class="fas fa-times"></i></button>
                </div>
            </div>
            <div class="ai-body" id="ai-body"><div class="msg msg-bot">Hello! 👋 I am Mini Champ. How can I help you today?</div></div>
            <div class="ai-footer">
                <input type="text" class="ai-input" id="ai-input" placeholder="Ask anything..." onkeypress="window.handleEnter(event)">
                <button class="ai-send" onclick="window.sendUserMessage()"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;
    const actionContainer = document.createElement('div'); actionContainer.innerHTML = actionMenuHTML; document.body.appendChild(actionContainer);
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
    
    // 1. Spoken Hub Check (Uses spokenData)
    if (typeof spokenData !== 'undefined') {
        for (const key in spokenData) {
            if (text.toLowerCase().includes(spokenData[key].title.toLowerCase())) {
                dbContext += `Spoken Rule: ${spokenData[key].theoryHTML.replace(/<[^>]*>?/gm, ' ')}\n`;
            }
        }
    }
    
    // 2. Grammar Matrix Check (Uses matrixDB)
    if (typeof matrixDB !== 'undefined') {
        for (const type in matrixDB) {
            if (text.toLowerCase().includes(matrixDB[type].title.toLowerCase())) {
                dbContext += `Grammar Rule: ${matrixDB[type].theoryHTML.replace(/<[^>]*>?/gm, ' ')}\n`;
            }
        }
    }

    // 3. Writing Vault Check (Uses writingData)
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

    // Check Offline Brain first
    let localReply = null;
    if (typeof window.getSmartReply === 'function') {
        localReply = window.getSmartReply(text, userName);
    }

    // If No API key, or it's just a simple greeting, bypass Google and use local brain instantly
    if (GEMINI_API_KEY === "YOUR_API_KEY_HERE" || GEMINI_API_KEY === "" || (localReply && dbContext === "")) {
        setTimeout(() => {
            let finalReply = localReply || "🤖 My cloud brain is offline, but my local systems are active! Ask me about English grammar, exam tips, or the app.";
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

    // Send to Google API with context
    if (localReply) dbContext += `\nAdditional Info: ${localReply}`; 
    let promptToSend = text;
    if (dbContext !== "") {
        promptToSend = `[SYSTEM: I have pulled verified course data. Use this data to formulate your answer naturally as a teacher.]\n\nDATA:\n${dbContext}\n\nSTUDENT'S QUESTION: ${text}`;
    }

    if (window.chatHistory.length === 0) {
        window.chatHistory = [{ role: "user", parts: [{ text: `SYSTEM INSTRUCTION: You are 'Mini Champ', English tutor for HSC. Creator is Asif. Designer is Sha. Student is ${userName}. Keep answers short, use emojis. \n\n${promptToSend}` }] }];
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
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, { 
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
        window.speakText(aiText);
        window.isWaitingForAI = false; 

    } catch (error) { 
        typingIndicator.style.display = 'none'; 
        
        // SILENT FALLBACK: If API fails, it uses ai-database.js without showing an ugly error!
        let fallbackReply = "🤖 My cloud connection dropped, but my local systems are active! Ask me a grammar or exam question.";
        if (typeof window.getSmartReply === 'function') {
            let local = window.getSmartReply(originalText, userName);
            if (local) fallbackReply = local;
        }

        body.innerHTML += `<div class='msg msg-bot'>${fallbackReply}</div>`; 
        
        if(window.chatHistory.length > 0 && window.chatHistory[window.chatHistory.length-1].role === 'user') {
            window.chatHistory.pop();
        }
        window.isWaitingForAI = false; 
        body.scrollTop = body.scrollHeight;
    }
}

window.speakText = function(htmlText) {
    if(!window.isAiMuted) {
        let cleanText = htmlText.replace(/<[^>]*>?/gm, ''); 
        cleanText = cleanText.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, ''); 
        window.speechSynthesis.cancel();
        let utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'en-US'; utterance.rate = 0.95; 
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
