/* global-engine.js - The Elite UI, Full-Page Translator, and Chat Interface */

(function() {
    if (document.getElementById('champ-global-wrapper')) return;

    // INJECT STUNNING CSS
    const style = document.createElement('style');
    style.innerHTML = `
        /* OG Draggable Floating Bubbles */
        .champ-fab { width: 55px; height: 55px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.4); cursor: pointer; position: fixed; z-index: 9999; border: 2px solid rgba(255,255,255,0.2); backdrop-filter: blur(10px); transition: transform 0.2s; user-select: none; }
        .champ-fab:active { transform: scale(0.9); }
        #fab-translator { background: linear-gradient(135deg, #06b6d4, #3b82f6); bottom: 90px; right: 20px; }
        #fab-ai { background: linear-gradient(135deg, #ec4899, #8b5cf6); bottom: 20px; right: 20px; }

        /* Sleek Floating Chat Widget (No cheap modals) */
        #ai-chat-widget { position: fixed; bottom: 85px; right: 20px; width: 350px; max-width: calc(100vw - 40px); background: var(--card-bg, #1e293b); border: 1px solid var(--border-color, rgba(255,255,255,0.1)); border-radius: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.6); display: none; flex-direction: column; overflow: hidden; z-index: 10000; transform-origin: bottom right; animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        body.light-mode #ai-chat-widget { background: #ffffff; border-color: #e2e8f0; box-shadow: 0 20px 50px rgba(0,0,0,0.15); }
        @keyframes scaleUp { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        .chat-header { padding: 15px 20px; background: rgba(0,0,0,0.2); border-bottom: 1px solid var(--border-color, rgba(255,255,255,0.05)); display: flex; justify-content: space-between; align-items: center; }
        body.light-mode .chat-header { background: #f8fafc; border-bottom-color: #e2e8f0; }
        .chat-title { font-family: 'Outfit'; font-size: 16px; font-weight: 800; color: var(--text-main, white); display: flex; align-items: center; gap: 8px; margin: 0; }
        .chat-close { background: none; border: none; color: #ef4444; font-size: 20px; cursor: pointer; transition: 0.2s; }
        .chat-close:active { transform: scale(0.8); }

        .chat-body { height: 320px; overflow-y: auto; padding: 15px; display: flex; flex-direction: column; gap: 12px; background: var(--bg, #0f172a); }
        .chat-bubble { max-width: 85%; padding: 12px 16px; border-radius: 16px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; line-height: 1.5; font-weight: 500; word-wrap: break-word; }
        .bot-msg { align-self: flex-start; background: var(--card-bg, #1e293b); color: var(--text-main, #e2e8f0); border: 1px solid var(--border-color, rgba(255,255,255,0.1)); border-bottom-left-radius: 4px; }
        .user-msg { align-self: flex-end; background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white; border-bottom-right-radius: 4px; box-shadow: 0 4px 10px rgba(236,72,153,0.3); }

        .chat-input-area { padding: 12px; display: flex; gap: 8px; background: var(--header-bg, rgba(15,23,42,0.9)); border-top: 1px solid var(--border-color, rgba(255,255,255,0.05)); }
        .chat-input { flex-grow: 1; background: var(--input-bg, rgba(255,255,255,0.05)); border: 1px solid var(--border-color, rgba(255,255,255,0.1)); padding: 12px 15px; border-radius: 20px; color: var(--text-main, white); font-family: inherit; font-size: 14px; outline: none; }
        .chat-input:focus { border-color: var(--pink, #ec4899); }
        .chat-send { background: var(--pink, #ec4899); color: white; border: none; width: 42px; height: 42px; border-radius: 50%; cursor: pointer; font-size: 16px; transition: 0.2s; display: flex; justify-content: center; align-items: center; }
        .chat-send:active { transform: scale(0.9); }

        /* Full Page Translator Control Panel */
        #trans-panel { position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: var(--card-bg, #1e293b); border: 1px solid var(--cyan, #38bdf8); padding: 15px 25px; border-radius: 50px; z-index: 10000; box-shadow: 0 15px 40px rgba(0,0,0,0.5); display: none; align-items: center; gap: 15px; font-family: 'Outfit'; font-weight: 800; color: var(--text-main, white); animation: slideDownTrans 0.3s ease; }
        @keyframes slideDownTrans { from { transform: translate(-50%, -50px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
        
        .trans-btn { background: var(--cyan, #06b6d4); color: white; border: none; padding: 8px 16px; border-radius: 20px; font-weight: 800; cursor: pointer; font-family: inherit; transition: 0.2s; }
        .trans-btn.off { background: #ef4444; }
        .trans-btn:active { transform: scale(0.95); }

        /* Hide Google's Ugly Default UI */
        .goog-te-banner-frame { display: none !important; }
        body { top: 0px !important; }
        #google_translate_element { display: none !important; }
        .goog-tooltip { display: none !important; }
        .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
    `;
    document.head.appendChild(style);

    // INJECT HTML STRUCTURE
    const uiContainer = document.createElement('div');
    uiContainer.id = 'champ-global-wrapper';
    uiContainer.innerHTML = `
        <div id="google_translate_element"></div>

        <div id="trans-panel">
            <i class="fas fa-language" style="color: var(--cyan, #38bdf8); font-size: 20px;"></i>
            <span>Page Translator</span>
            <button class="trans-btn" onclick="ChampGlobal.triggerTranslate('bn')">Bengali</button>
            <button class="trans-btn off" onclick="ChampGlobal.triggerTranslate('en'); ChampGlobal.closeTransPanel();">Close</button>
        </div>

        <div id="ai-chat-widget">
            <div class="chat-header">
                <h3 class="chat-title"><i class="fas fa-cube" style="color: var(--pink, #ec4899);"></i> Champ Core AI</h3>
                <button class="chat-close" onclick="ChampGlobal.closeAI()"><i class="fas fa-times-circle"></i></button>
            </div>
            <div class="chat-body" id="ai-chat-body">
                <div class="chat-bubble bot-msg">Hello, Champ. ⚡ I am the core intelligence of this forge, engineered by Asif and designed by Shaa sha. Ask me for HSC tips, Grammar rules, or about my creators!</div>
            </div>
            <div class="chat-input-area">
                <input type="text" class="chat-input" id="ai-input" placeholder="Ask anything..." onkeypress="if(event.key === 'Enter') ChampGlobal.sendAIMessage()">
                <button class="chat-send" onclick="ChampGlobal.sendAIMessage()"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>

        <div id="fab-translator" class="champ-fab" title="Full Page Translator">
            <i class="fas fa-language"></i>
        </div>
        <div id="fab-ai" class="champ-fab" title="Champ Core AI">
            <i class="fas fa-robot"></i>
        </div>
    `;
    document.body.appendChild(uiContainer);

    // ==========================================
    // INJECT GOOGLE TRANSLATE SCRIPT
    // ==========================================
    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'bn,en', autoDisplay: false }, 'google_translate_element');
    };
    const gtScript = document.createElement('script');
    gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(gtScript);

    // ==========================================
    // LOGIC ENGINE
    // ==========================================
    window.isWaitingForAI = false;

    window.ChampGlobal = {
        // AI Logic
        openAI: function() {
            document.getElementById('ai-chat-widget').style.display = 'flex';
            setTimeout(() => document.getElementById('ai-input').focus(), 100);
        },
        closeAI: function() {
            document.getElementById('ai-chat-widget').style.display = 'none';
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
            chatBody.innerHTML += `<div class="chat-bubble bot-msg" id="${typingId}"><i class="fas fa-circle-notch fa-spin" style="color:var(--pink);"></i> Thinking...</div>`;
            chatBody.scrollTop = chatBody.scrollHeight;

            setTimeout(() => {
                document.getElementById(typingId).remove();
                let response = "Error: Offline.";
                if(typeof window.askChampAI === 'function') {
                    response = window.askChampAI(text);
                } else {
                    response = "I need my ai-database.js connected to think properly!";
                }
                
                // Format response with bold and line breaks for beauty
                let formattedResponse = response.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
                this.appendChat('bot-msg', formattedResponse);
                window.isWaitingForAI = false;
            }, 600);
        },
        appendChat: function(type, text) {
            const chatBody = document.getElementById('ai-chat-body');
            chatBody.innerHTML += `<div class="chat-bubble ${type}">${text}</div>`;
            chatBody.scrollTop = chatBody.scrollHeight;
        },

        // Full Page Translator Logic
        toggleTransPanel: function() {
            const panel = document.getElementById('trans-panel');
            panel.style.display = (panel.style.display === 'flex') ? 'none' : 'flex';
        },
        closeTransPanel: function() {
            document.getElementById('trans-panel').style.display = 'none';
        },
        triggerTranslate: function(targetLang) {
            let select = document.querySelector('.goog-te-combo');
            if (select) {
                select.value = targetLang;
                select.dispatchEvent(new Event('change'));
            } else {
                alert("Translation engine is still loading. Please wait a second.");
            }
        }
    };

    // Support for Spoken Hub Roleplay
    window.startAIRoleplay = function(promptText) {
        window.ChampGlobal.openAI();
        window.ChampGlobal.appendChat('bot-msg', `<b>[Roleplay Initiated]</b><br><br>${promptText}`);
    };

    // ==========================================
    // OG DRAGGABLE BUBBLES LOGIC
    // ==========================================
    function makeDraggable(el, clickAction) {
        let isDragging = false;
        let startX, startY, startLeft, startTop;

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
                isDragging = true; 
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
        }

        el.addEventListener('click', (e) => {
            if(isDragging) { e.preventDefault(); e.stopImmediatePropagation(); }
            else { clickAction(); }
        });
    }

    // Attach actions to bubbles
    setTimeout(() => {
        makeDraggable(document.getElementById('fab-ai'), () => window.ChampGlobal.openAI());
        makeDraggable(document.getElementById('fab-translator'), () => window.ChampGlobal.toggleTransPanel());
    }, 500);

})();
