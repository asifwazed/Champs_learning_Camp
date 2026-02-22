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

        /* Mini Asif Chatbot Styles */
        .ai-fab { position: fixed; bottom: 30px; right: 20px; width: 55px; height: 55px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4); cursor: pointer; z-index: 999; transition: transform 0.2s; border: 2px solid white; }
        .ai-fab:active { transform: scale(0.9); }
        .ai-fab img { width: 40px; border-radius: 50%; }
        .ai-fab .badge { position: absolute; top: 0; right: 0; background: #ef4444; color: white; font-size: 10px; font-weight: bold; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; }

        /* Chat Window Styles */
        .ai-window { position: fixed; bottom: 100px; right: 20px; width: 320px; height: 450px; background: white; border-radius: 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.15); z-index: 998; display: none; flex-direction: column; overflow: hidden; border: 1px solid #e2e8f0; animation: slideUp 0.3s ease-out; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        
        .ai-header { background: linear-gradient(135deg, #1e293b, #334155); color: white; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; }
        .ai-header-info { display: flex; align-items: center; gap: 10px; }
        .ai-header-info img { width: 35px; border-radius: 50%; background: white; }
        .ai-header-info h3 { margin: 0; font-family: 'Outfit'; font-size: 16px; }
        .ai-header-info p { margin: 0; font-size: 11px; color: #cbd5e1; }
        .ai-close { background: none; border: none; color: white; font-size: 20px; cursor: pointer; }
        
        .ai-body { flex-grow: 1; padding: 15px; overflow-y: auto; background: #f8fafc; display: flex; flex-direction: column; gap: 10px; }
        .msg { max-width: 85%; padding: 12px 16px; border-radius: 16px; font-size: 13px; line-height: 1.5; }
        .msg-bot { background: white; color: #1e293b; border-bottom-left-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.02); align-self: flex-start; border: 1px solid #e2e8f0; }
        .msg-user { background: #3b82f6; color: white; border-bottom-right-radius: 4px; align-self: flex-end; }
        
        .ai-quick-replies { display: flex; gap: 8px; padding: 10px 15px; background: white; overflow-x: auto; white-space: nowrap; border-top: 1px solid #f1f5f9; }
        .ai-quick-replies::-webkit-scrollbar { display: none; }
        .qr-btn { background: #eff6ff; color: #3b82f6; border: 1px solid #bfdbfe; padding: 6px 12px; border-radius: 50px; font-size: 11px; font-weight: 700; cursor: pointer; flex-shrink: 0; }
        
        .ai-footer { padding: 10px 15px; background: white; border-top: 1px solid #f1f5f9; display: flex; gap: 10px; }
        .ai-input { flex-grow: 1; border: 1px solid #e2e8f0; border-radius: 50px; padding: 10px 15px; outline: none; font-size: 13px; font-family: inherit; }
        .ai-send { background: #10b981; color: white; border: none; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; }
    `;
    document.head.appendChild(globalStyle);

    // ==========================================
    // 2. INJECT GOOGLE TRANSLATOR (UPGRADED UI)
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
                // Notice there is NO 'includedLanguages' limit here! 
                // It is fully unlocked for EVERY language in the world.
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
    // 3. INJECT "MINI ASIF" AI COMPANION
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
                        <h3>Mini Asif</h3>
                        <p>🟢 Online • Your AI Guide</p>
                    </div>
                </div>
                <button class="ai-close" onclick="toggleAI()"><i class="fas fa-times"></i></button>
            </div>
            
            <div class="ai-body" id="ai-body">
                <div class="msg msg-bot">Hello Champ! 👋 I am Mini Asif. I am here to guide you while the real Asif is busy. What do you need help with?</div>
            </div>

            <div class="ai-quick-replies">
                <button class="qr-btn" onclick="sendQuickReply('Give me a study tip')">💡 Study Tip</button>
                <button class="qr-btn" onclick="sendQuickReply('How to write a summary?')">📝 Summary Rules</button>
                <button class="qr-btn" onclick="sendQuickReply('I am confused')">🤔 I'm Confused</button>
            </div>

            <div class="ai-footer">
                <input type="text" class="ai-input" id="ai-input" placeholder="Ask me something...">
                <button class="ai-send" onclick="sendUserMessage()"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;
    
    const aiContainer = document.createElement('div');
    aiContainer.innerHTML = aiHTML;
    document.body.appendChild(aiContainer);
}

// AI Toggle Logic 
window.toggleAI = function() {
    const win = document.getElementById('ai-window');
    const badge = document.querySelector('.ai-fab .badge');
    if (win.style.display === 'flex') {
        win.style.display = 'none';
    } else {
        win.style.display = 'flex';
        if(badge) badge.style.display = 'none'; 
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
    // Add User Message
    body.innerHTML += `<div class="msg msg-user">${text}</div>`;
    input.value = '';
    body.scrollTop = body.scrollHeight;

    // Simulate Bot Thinking
    setTimeout(() => {
        body.innerHTML += `<div class="msg msg-bot">I am still loading my brain! Asif and his partner are building my logic right now. 🧠</div>`;
        body.scrollTop = body.scrollHeight;
    }, 600);
}

// Run the engine when page loads
window.addEventListener('DOMContentLoaded', injectGlobalComponents);
