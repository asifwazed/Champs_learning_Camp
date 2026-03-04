/* global-engine.js - The Ultimate Offline Core & Universal Translator */

window.isRoleplayMode = false; 
window.chatHistory = []; 
window.isWaitingForAI = false; 
window.isAiMuted = false;

function injectGlobalComponents() {
    // Prevent duplicate injections
    if (document.getElementById('champ-global-ui')) return;

    const globalStyle = document.createElement('style');
    globalStyle.innerHTML = `
        /* Floating Draggable Bubbles (OG Feature) */
        .fab-btn { width: 52px; height: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; color: white; box-shadow: 0 10px 25px rgba(0,0,0,0.3); cursor: pointer; position: fixed; z-index: 2999; transition: transform 0.2s, filter 0.3s; border: 2px solid rgba(255,255,255,0.2); backdrop-filter: blur(5px); }
        .fab-btn:active { transform: scale(0.9); }
        #fab-wm-btn { background: linear-gradient(135deg, #06b6d4, #3b82f6); bottom: 90px; right: 20px; }
        #fab-ai-btn { background: linear-gradient(135deg, #ec4899, #8b5cf6); bottom: 25px; right: 20px; }

        /* Modern Glassmorphism Modals */
        .champ-modal { position: fixed; inset: 0; background: rgba(9, 9, 11, 0.7); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); z-index: 10000; display: none; align-items: center; justify-content: center; padding: 20px; animation: modalFade 0.3s ease; }
        @keyframes modalFade { from { opacity: 0; } to { opacity: 1; } }
        
        .champ-modal-box { width: 100%; max-width: 420px; background: var(--card-bg, #1e293b); border-radius: 24px; border: 1px solid var(--border-color, rgba(255,255,255,0.1)); box-shadow: 0 25px 50px rgba(0,0,0,0.5); display: flex; flex-direction: column; overflow: hidden; transform: scale(1); animation: popScale 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes popScale { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        .modal-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color, rgba(255,255,255,0.05)); background: rgba(0,0,0,0.2); }
        .modal-title { font-family: 'Outfit'; font-size: 18px; font-weight: 800; margin: 0; color: var(--text-main, white); display: flex; align-items: center; gap: 10px; }
        .close-modal { background: none; border: none; color: #ef4444; font-size: 24px; cursor: pointer; transition: 0.2s; }
        .close-modal:active { transform: scale(0.8); }

        /* AI Chat Interface */
        .chat-body { height: 380px; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 15px; background: var(--bg, #0f172a); }
        .chat-bubble { max-width: 85%; padding: 14px 18px; border-radius: 18px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14.5px; line-height: 1.5; font-weight: 500; }
        .bot-msg { align-self: flex-start; background: var(--card-bg, #1e293b); color: var(--text-main, #e2e8f0); border: 1px solid var(--border-color, rgba(255,255,255,0.1)); border-bottom-left-radius: 4px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .user-msg { align-self: flex-end; background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white; border-bottom-right-radius: 4px; box-shadow: 0 4px 10px rgba(236,72,153,0.2); }
        
        .chat-input-area { padding: 15px; border-top: 1px solid var(--border-color, rgba(255,255,255,0.05)); display: flex; gap: 10px; background: var(--header-bg, rgba(15,23,42,0.9)); align-items: center; }
        .chat-input { flex-grow: 1; background: var(--input-bg, rgba(255,255,255,0.05)); border: 1px solid var(--border-color, rgba(255,255,255,0.1)); padding: 14px 18px; border-radius: 50px; color: var(--text-main, white); font-family: inherit; font-size: 15px; outline: none; }
        .chat-input:focus { border-color: var(--cyan, #38bdf8); }
        .chat-send { background: var(--cyan, #38bdf8); color: white; border: none; width: 48px; height: 48px; border-radius: 50%; cursor: pointer; font-size: 18px; transition: 0.2s; display: flex; justify-content: center; align-items: center; }
        .chat-send:active { transform: scale(0.9); }
        .ai-mic-btn { background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); width: 48px; height: 48px; border-radius: 50%; cursor: pointer; transition: 0.3s; display: flex; align-items: center; justify-content: center; font-size: 18px; }

        /* Translator Interface */
        .trans-body { padding: 20px; display: flex; flex-direction: column; gap: 15px; background: var(--bg, #0f172a); }
        .trans-box { width: 100%; height: 130px; background: var(--input-bg, rgba(255,255,255,0.03)); border: 1px solid var(--border-color, rgba(255,255,255,0.1)); border-radius: 16px; padding: 15px; color: var(--text-main, #e2e8f0); font-family: inherit; font-size: 16px; resize: none; outline: none; transition: 0.3s; font-weight: 500; line-height: 1.5; }
        .trans-box:focus { border-color: var(--cyan, #38bdf8); }
        .trans-action-btn { background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; border: none; padding: 16px 20px; border-radius: 16px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 16px; width: 100%; box-shadow: 0 8px 20px rgba(6,182,212,0.3); font-family: 'Outfit'; }
        .trans-action-btn:active { transform: scale(0.97); }

        .ai-nav-btn { display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #38bdf8, #2563eb); color: white !important; padding: 10px 16px; border-radius: 12px; text-decoration: none; font-weight: 700; margin-top: 10px; margin-right: 8px; font-size: 13px; box-shadow: 0 4px 10px rgba(56, 189, 248, 0.3); transition: 0.2s; }
        .ai-nav-btn:active { transform: scale(0.95); }

        /* Google Translate Hiding */
        #google_translate_element { display: none !important; }
        .skiptranslate { display: none !important; }
        body { top: 0px !important; }
    `;
    document.head.appendChild(globalStyle);

    // ==========================================
    // 1. INJECT THE UI HTML (FABs + Modals)
    // ==========================================
    const uiContainer = document.createElement('div');
    uiContainer.id = 'champ-global-ui';
    uiContainer.innerHTML = `
        <div id="fab-wm-btn" class="fab-btn draggable-bubble" onclick="if(!window.isBubbleDragging) ChampUI.openTranslator()">
            <i class="fas fa-language"></i>
        </div>
        <div id="fab-ai-btn" class="fab-btn draggable-bubble" onclick="if(!window.isBubbleDragging) ChampUI.openAI()">
            <i class="fas fa-robot"></i>
        </div>

        <div class="champ-modal" id="modal-ai">
            <div class="champ-modal-box">
                <div class="modal-header">
                    <div class="modal-title"><i class="fas fa-cube" style="color:var(--pink, #ec4899);"></i> Champ Core AI</div>
                    <div style="display:flex; gap:15px; align-items:center;">
                        <button onclick="window.toggleAiMute()" id="ai-mute-btn" style="background:none; border:none; color:var(--text-sub, #94a3b8); font-size:18px; cursor:pointer;"><i class="fas fa-volume-up"></i></button>
                        <button class="close-modal" onclick="ChampUI.closeAll()"><i class="fas fa-times-circle"></i></button>
                    </div>
                </div>
                <div class="chat-body" id="ai-chat-body">
                    <div class="chat-bubble bot-msg">Hello, Champ. ⚡ I am the intelligence of this forge, engineered by Asif and designed by Shaa sha. Ask me for HSC tips, Grammar rules, or about my creators!</div>
                </div>
                <div class="chat-input-area">
                    <button id="ai-mic-btn" onclick="window.toggleAIVoiceCommand()" class="ai-mic-btn"><i class="fas fa-microphone"></i></button>
                    <input type="text" class="chat-input" id="ai-input" placeholder="Message Champ Core..." onkeypress="if(event.key === 'Enter') ChampUI.sendAIMessage()">
                    <button class="chat-send" onclick="ChampUI.sendAIMessage()"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>

        <div class="champ-modal" id="modal-trans">
            <div class="champ-modal-box">
                <div class="modal-header">
                    <div class="modal-title"><i class="fas fa-language" style="color:var(--cyan, #06b6d4);"></i> Neural Translator</div>
                    <button class="close-modal" onclick="ChampUI.closeAll()"><i class="fas fa-times-circle"></i></button>
                </div>
                <div class="trans-body">
                    <textarea class="trans-box" id="trans-input" placeholder="Type English text here to translate..."></textarea>
                    <button class="trans-action-btn" onclick="ChampUI.translateText()"><i class="fas fa-bolt"></i> Translate to Bengali</button>
                    <textarea class="trans-box" id="trans-output" placeholder="Bengali translation will appear here..." readonly style="background:var(--active-bg, rgba(6,182,212,0.1)); border-color:var(--cyan, #06b6d4);"></textarea>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(uiContainer);

    // ==========================================
    // 2. DOUBLE TAP DICTIONARY
    // ==========================================
    const dictStyle = document.createElement('style');
    dictStyle.innerHTML = `#champ-dict-pop { position:absolute; z-index:4000; background:var(--card-bg, #1e293b); color:var(--text-main, white); padding:12px 18px; border-radius:14px; font-size:14px; display:none; box-shadow:0 15px 35px rgba(0,0,0,0.4); transform:translateY(-10px) translateX(-50%); animation:popIn 0.2s; pointer-events:none; border: 1px solid var(--cyan, #38bdf8); } .dict-word { color:var(--cyan, #38bdf8); font-weight:900; font-size:16px; text-transform:capitalize; margin-bottom: 2px; font-family:'Outfit'; } .dict-bn { font-weight:600; }`;
    document.head.appendChild(dictStyle);
    
    const dictPop = document.createElement('div'); 
    dictPop.id = 'champ-dict-pop'; 
    document.body.appendChild(dictPop);

    document.addEventListener('mouseup', checkSelection); 
    document.addEventListener('touchend', checkSelection);

    function checkSelection(e) {
        setTimeout(() => {
            let text = window.getSelection().toString().trim().toLowerCase();
            text = text.replace(/[.,\/#!$%^&*;:{}=\-_'~()]/g,""); 
            if (text && !text.includes(' ')) {
                let wordData = (typeof vocabList !== 'undefined') ? vocabList.find(v => v.w.toLowerCase() === text) : null;
                // Search units if available
                if (!wordData && typeof unitData !== 'undefined' && typeof URLSearchParams !== 'undefined') {
                    const urlParams = new URLSearchParams(window.location.search);
                    const uid = urlParams.get('unit');
                    if (uid && unitData[uid] && unitData[uid].vocab) wordData = unitData[uid].vocab.find(v => v.w.toLowerCase() === text);
                }
                
                if (wordData) {
                    let range = window.getSelection().getRangeAt(0).getBoundingClientRect();
                    dictPop.style.top = (window.scrollY + range.top - 75) + 'px';
                    dictPop.style.left = (window.scrollX + range.left + range.width / 2) + 'px';
                    dictPop.innerHTML = `<div class="dict-word">${wordData.w}</div><div class="dict-bn">${wordData.m}</div>`;
                    dictPop.style.display = 'block';
                    if(navigator.vibrate && localStorage.getItem('champSounds') !== 'false') navigator.vibrate(10);
                }
            } else if(e.target.id !== 'champ-dict-pop' && !dictPop.contains(e.target)) {
                dictPop.style.display = 'none';
            }
        }, 150); 
    }

    // ==========================================
    // 3. LOGIC ENGINE (UI & API)
    // ==========================================
    window.ChampUI = {
        openAI: function() {
            document.getElementById('modal-ai').style.display = 'flex';
            setTimeout(() => document.getElementById('ai-input').focus(), 100);
        },
        openTranslator: function() {
            document.getElementById('modal-trans').style.display = 'flex';
            setTimeout(() => document.getElementById('trans-input').focus(), 100);
        },
        closeAll: function() {
            document.getElementById('modal-ai').style.display = 'none';
            document.getElementById('modal-trans').style.display = 'none';
        },
        
        sendAIMessage: function() {
            if (window.isWaitingForAI) return;
            const inputEl = document.getElementById('ai-input');
            const text = inputEl.value.trim();
            if(!text) return;
            
            window.isWaitingForAI = true;
            this.appendChat('user-msg', text);
            inputEl.value = '';
            
            const chatBody = document.getElementById('ai-chat-body');
            const typingId = 'typing-' + Date.now();
            chatBody.innerHTML += `<div class="chat-bubble bot-msg" id="${typingId}"><i class="fas fa-circle-notch fa-spin" style="color:var(--cyan);"></i> Accessing Core Memory...</div>`;
            chatBody.scrollTop = chatBody.scrollHeight;

            setTimeout(() => {
                document.getElementById(typingId).remove();
                let userName = localStorage.getItem('champ_name') || 'Champ';
                let response = "";
                
                if(typeof window.getSmartReply === 'function') {
                    response = window.getSmartReply(text, userName);
                }
                
                if (!response) {
                    response = "⚡ I am primarily trained on HSC English, Grammar mechanics, Varsity Traps, and the lore of Asif & Shaa sha. Ask me something related to that!";
                }

                // Append the box first, then type into it
                const msgId = 'msg-' + Date.now();
                chatBody.innerHTML += `<div class="chat-bubble bot-msg" id="${msgId}"></div>`;
                window.typeWriterEffect(document.getElementById(msgId), response);
            }, 600);
        },

        appendChat: function(type, text) {
            const chatBody = document.getElementById('ai-chat-body');
            chatBody.innerHTML += `<div class="chat-bubble ${type}">${text}</div>`;
            chatBody.scrollTop = chatBody.scrollHeight;
        },

        translateText: async function() {
            const input = document.getElementById('trans-input').value.trim();
            const outBox = document.getElementById('trans-output');
            if(!input) return;
            
            outBox.value = "Translating matrix...";
            try {
                let res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(input)}&langpair=en|bn`);
                let data = await res.json();
                if(data && data.responseData && data.responseData.translatedText) {
                    outBox.value = data.responseData.translatedText;
                } else {
                    outBox.value = "Translation node failed. Please try again.";
                }
            } catch (err) {
                outBox.value = "Network error. Make sure you are online.";
            }
        }
    };

    // ==========================================
    // 4. SPEECH & TYPEWRITER ENGINE
    // ==========================================
    window.toggleAiMute = function() {
        window.isAiMuted = !window.isAiMuted;
        const btn = document.getElementById('ai-mute-btn');
        if(window.isAiMuted) {
            btn.innerHTML = '<i class="fas fa-volume-mute"></i>'; btn.style.color = '#ef4444';
            window.speechSynthesis.cancel();
        } else {
            btn.innerHTML = '<i class="fas fa-volume-up"></i>'; btn.style.color = 'var(--text-sub)';
        }
    }

    window.typeWriterEffect = function(msgElement, text) {
        if (text.includes('<') && text.includes('>')) {
            msgElement.innerHTML = text;
            document.getElementById('ai-chat-body').scrollTop = document.getElementById('ai-chat-body').scrollHeight;
            window.speakText(text);
            window.isWaitingForAI = false;
            return;
        }
        
        let i = 0;
        function type() {
            if (i < text.length) {
                msgElement.innerHTML += text.charAt(i);
                i++;
                document.getElementById('ai-chat-body').scrollTop = document.getElementById('ai-chat-body').scrollHeight;
                setTimeout(type, 15);
            } else {
                window.speakText(text);
                window.isWaitingForAI = false;
            }
        }
        type();
    };

    window.speakText = function(htmlText) {
        if(window.isAiMuted) return;
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            let cleanText = htmlText.replace(/<[^>]*>?/gm, ' ').replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim();
            let utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = 'en-US'; utterance.rate = 1.0; 
            window.speechSynthesis.speak(utterance);
        }
    }

    window.toggleAIVoiceCommand = function() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) { alert("Voice Commands not supported in this browser."); return; }
        
        const micBtn = document.getElementById('ai-mic-btn');
        const aiInput = document.getElementById('ai-input');
        const recognition = new SpeechRecognition();
        
        recognition.lang = 'en-US'; recognition.interimResults = false;
        
        recognition.onstart = function() { 
            micBtn.style.background = "#ef4444"; micBtn.style.color = "white"; 
            aiInput.placeholder = "Listening..."; 
        };
        recognition.onresult = function(event) { 
            aiInput.value = event.results[0][0].transcript; 
            setTimeout(() => { window.ChampUI.sendAIMessage(); }, 500); 
        };
        recognition.onend = function() { 
            micBtn.style.background = "rgba(239, 68, 68, 0.1)"; micBtn.style.color = "#ef4444"; 
            aiInput.placeholder = "Message Champ Core..."; 
        };
        recognition.start();
    };

    window.startAIRoleplay = function(systemPrompt) {
        window.ChampUI.openAI();
        window.ChampUI.appendChat('bot-msg', `<b>[Spoken Hub Roleplay Initiated]</b><br><br>${systemPrompt}`);
    };

    // ==========================================
    // 5. DRAGGABLE BUBBLE LOGIC
    // ==========================================
    function makeFloatingDraggable(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            let isDragging = false; let startX, startY, startLeft, startTop;

            el.addEventListener('mousedown', dragStart);
            el.addEventListener('touchstart', dragStart, {passive: false});

            function dragStart(e) {
                if(e.target.closest('.champ-modal')) return;
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
                    isDragging = true; window.isBubbleDragging = true; 
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

            el.addEventListener('click', (e) => {
                if(isDragging) { e.preventDefault(); e.stopImmediatePropagation(); }
            }, true);
        });
    }

    setTimeout(() => { makeFloatingDraggable('.draggable-bubble'); }, 1000);
}

// Initialize everything when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectGlobalComponents);
} else {
    injectGlobalComponents();
}
