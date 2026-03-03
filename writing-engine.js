/* writing-engine.js - Premium Interactive engine for Part C */

const WritingEngine = {
    currentCategory: null,

    init: function() {
        this.renderMenu();
    },

    renderMenu: function() {
        this.currentCategory = null;
        const html = `
        <div class="fade-in" style="display: grid; grid-template-columns: 1fr; gap: 15px;">
            
            <div onclick="WritingEngine.openList('stories')" class="magnet-element" style="background: white; padding: 25px; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); display: flex; align-items: center; gap: 20px; border: 1px solid #ffe4e6; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #f43f5e;"></div>
                <div style="width: 65px; height: 65px; background: linear-gradient(135deg, #fff1f2, #ffe4e6); color: #f43f5e; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 28px; box-shadow: 0 5px 15px rgba(244, 63, 94, 0.1);"><i class="fas fa-book-open"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 20px; color: #1e293b;">Stories</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: #64748b; font-weight: 600;">15 Marks • 15 Board Items</p>
                </div>
                <i class="fas fa-chevron-right" style="color: #fca5a5; font-size: 20px;"></i>
            </div>
            
            <div onclick="WritingEngine.openList('paragraphs')" class="magnet-element" style="background: white; padding: 25px; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); display: flex; align-items: center; gap: 20px; border: 1px solid #ede9fe; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #8b5cf6;"></div>
                <div style="width: 65px; height: 65px; background: linear-gradient(135deg, #f5f3ff, #ede9fe); color: #8b5cf6; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 28px; box-shadow: 0 5px 15px rgba(139, 92, 246, 0.1);"><i class="fas fa-align-left"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 20px; color: #1e293b;">Paragraphs</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: #64748b; font-weight: 600;">15 Marks • 15 Board Items</p>
                </div>
                <i class="fas fa-chevron-right" style="color: #c4b5fd; font-size: 20px;"></i>
            </div>

            <div onclick="WritingEngine.openList('letters')" class="magnet-element" style="background: white; padding: 25px; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); display: flex; align-items: center; gap: 20px; border: 1px solid #d1fae5; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #10b981;"></div>
                <div style="width: 65px; height: 65px; background: linear-gradient(135deg, #ecfdf5, #d1fae5); color: #10b981; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 28px; box-shadow: 0 5px 15px rgba(16, 185, 129, 0.1);"><i class="fas fa-envelope-open-text"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 20px; color: #1e293b;">Letters & Emails</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: #64748b; font-weight: 600;">10 Marks • 15 Board Items</p>
                </div>
                <i class="fas fa-chevron-right" style="color: #6ee7b7; font-size: 20px;"></i>
            </div>

            <div onclick="WritingEngine.openList('dialogues')" class="magnet-element" style="background: white; padding: 25px; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); display: flex; align-items: center; gap: 20px; border: 1px solid #dbeafe; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #3b82f6;"></div>
                <div style="width: 65px; height: 65px; background: linear-gradient(135deg, #eff6ff, #dbeafe); color: #3b82f6; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 28px; box-shadow: 0 5px 15px rgba(59, 130, 246, 0.1);"><i class="fas fa-comments"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 20px; color: #1e293b;">Dialogues</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: #64748b; font-weight: 600;">10 Marks • 15 Board Items</p>
                </div>
                <i class="fas fa-chevron-right" style="color: #93c5fd; font-size: 20px;"></i>
            </div>

        </div>`;
        document.getElementById('app-container').innerHTML = html;
        window.scrollTo(0, 0);
    },

    openList: function(type) {
        this.currentCategory = type;
        const data = writingData[type];
        
        let color = '#f43f5e';
        let bg = '#fff1f2';
        if(type === 'paragraphs') { color = '#8b5cf6'; bg = '#f5f3ff'; }
        if(type === 'letters') { color = '#10b981'; bg = '#ecfdf5'; }
        if(type === 'dialogues') { color = '#3b82f6'; bg = '#eff6ff'; }

        let html = `
        <div class="fade-in">
            <button onclick="WritingEngine.renderMenu()" class="magnet-element" style="background: white; border: 1px solid #e2e8f0; padding: 12px 20px; border-radius: 50px; font-weight: 700; color: #64748b; margin-bottom: 20px; cursor: pointer; box-shadow: 0 5px 15px rgba(0,0,0,0.03);"><i class="fas fa-arrow-left"></i> Back to Vault</button>
            
            <div style="background: white; border-radius: 24px; padding: 25px; margin-bottom: 20px; border-left: 5px solid ${color}; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
                <h3 style="margin: 0 0 12px 0; font-family: 'Outfit'; color: #1e293b; font-size: 18px;"><i class="fas fa-crown" style="color: #f59e0b; margin-right: 5px;"></i> Golden Rules</h3>
                <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #475569; line-height: 1.7;">
                    ${data.rules.map(rule => `<li style="margin-bottom: 6px;">${rule}</li>`).join('')}
                </ul>
            </div>

            <div style="position: relative; margin-bottom: 20px;">
                <i class="fas fa-search" style="position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: #94a3b8;"></i>
                <input type="text" id="writing-search" onkeyup="WritingEngine.filterItems()" placeholder="Search ${data.title}..." style="width: 100%; padding: 16px 20px 16px 45px; border-radius: 16px; border: 2px solid white; background: #e2e8f0; outline: none; font-family: inherit; font-size: 15px; color: #1e293b; font-weight: 600; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); transition: 0.2s;">
            </div>

            <div id="item-list-container" style="display:flex; flex-direction:column; gap:12px;">
        `;

        data.items.forEach((item, idx) => {
            html += `
            <div class="writing-item magnet-element" data-title="${item.title.toLowerCase()}" onclick="WritingEngine.openItem('${type}', ${idx})" style="background: white; padding: 20px; border-radius: 16px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 5px 15px rgba(0,0,0,0.02); border: 1px solid transparent; transition: 0.2s;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="width: 35px; height: 35px; background: ${bg}; color: ${color}; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px;">${idx + 1}</div>
                    <div style="font-weight: 700; color: #1e293b; font-size: 16px;">${item.title}</div>
                </div>
                <i class="fas fa-chevron-right" style="color: #cbd5e1;"></i>
            </div>`;
        });

        html += `</div></div>`;
        document.getElementById('app-container').innerHTML = html;
        window.scrollTo(0, 0);

        // Focus style for search bar
        const searchInput = document.getElementById('writing-search');
        searchInput.addEventListener('focus', () => { searchInput.style.borderColor = color; searchInput.style.background = 'white'; });
        searchInput.addEventListener('blur', () => { searchInput.style.borderColor = 'white'; searchInput.style.background = '#e2e8f0'; });
    },

    // NEW: Search Filter Logic
    filterItems: function() {
        const query = document.getElementById('writing-search').value.toLowerCase();
        const items = document.querySelectorAll('.writing-item');
        items.forEach(item => {
            if(item.getAttribute('data-title').includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    },

   openItem: function(type, index) {
        const item = writingData[type].items[index];
        
        let color = '#f43f5e';
        let bg = '#fff1f2';
        if(type === 'paragraphs') { color = '#8b5cf6'; bg = '#f5f3ff'; }
        if(type === 'letters') { color = '#10b981'; bg = '#ecfdf5'; }
        if(type === 'dialogues') { color = '#3b82f6'; bg = '#eff6ff'; }

        // Clean text for text-to-speech
        let speakText = item.content.replace(/['"]/g, '').replace(/\n/g, ' ');

        let html = `
        <div class="fade-in">
            <button onclick="WritingEngine.openList('${type}')" class="magnet-element" style="background: white; border: 1px solid #e2e8f0; padding: 12px 20px; border-radius: 50px; font-weight: 700; color: #64748b; margin-bottom: 20px; cursor: pointer; box-shadow: 0 5px 15px rgba(0,0,0,0.03);"><i class="fas fa-arrow-left"></i> Back to List</button>
            
            <div class="blur-target" style="background: white; padding: 30px 25px; border-radius: 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.05); position: relative; overflow: hidden;">
                
                <button class="magnet-element" onclick="window.speakText('${speakText}')" style="position: absolute; top: 25px; right: 20px; background: ${bg}; border: none; color: ${color}; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 18px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);"><i class="fas fa-volume-up"></i></button>
                
                <h2 style="margin: 0 50px 20px 0; font-family: 'Outfit'; color: #1e293b; font-size: 22px; line-height: 1.3;">${item.title}</h2>
                
                <div style="font-size: 16px; line-height: 1.9; color: #334155; white-space: pre-wrap; margin-bottom: 25px; letter-spacing: 0.2px;">${item.content}</div>
        `;

        if (item.moral) {
            html += `
            <div style="background: ${bg}; padding: 18px; border-radius: 16px; border-left: 5px solid ${color}; margin-bottom: 10px;">
                <strong style="color: ${color}; font-size: 15px;"><i class="fas fa-star"></i> Moral:</strong> <span style="color: #1e293b; font-weight: 600; font-size: 15px;">${item.moral}</span>
            </div>`;
        }

        html += `</div>`; // Close blur-target

        // PREMIUM AI GRADER UI
        html += `
            <div style="margin-top: 30px; background: linear-gradient(135deg, #1e293b, #0f172a); padding: 25px; border-radius: 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.2); position: relative; border: 1px solid rgba(255,255,255,0.1);">
                <div style="position: absolute; top: -15px; left: 25px; background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: white; padding: 5px 15px; border-radius: 50px; font-size: 12px; font-weight: 800; letter-spacing: 1px; box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);"><i class="fas fa-bolt"></i> PRO FEATURE</div>
                
                <h3 style="font-family: 'Outfit'; font-size: 20px; color: white; margin: 15px 0 5px;"><i class="fas fa-robot" style="color: #60a5fa;"></i> Mini Champ Grader</h3>
                <p style="font-size: 13px; color: #94a3b8; margin-bottom: 20px; line-height: 1.5;">Type your own version of this topic. The AI will scan it, grade it out of 10, and fix your grammar mistakes instantly.</p>
                
                <textarea id="ai-essay-input" placeholder="Start writing your essay/story here..." style="width: 100%; height: 180px; padding: 20px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.2); color: white; outline: none; font-family: inherit; font-size: 15px; resize: vertical; line-height: 1.6;"></textarea>
                
                <button class="magnet-element" onclick="WritingEngine.gradeEssay('${item.title}')" style="width: 100%; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; border: none; padding: 18px; border-radius: 16px; font-weight: 800; font-size: 16px; margin-top: 15px; cursor: pointer; box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4); font-family: 'Outfit'; display: flex; justify-content: center; align-items: center; gap: 8px;"><i class="fas fa-magic"></i> Grade My Writing</button>
            </div>
        </div>`;
        
        document.getElementById('app-container').innerHTML = html;
        window.scrollTo(0, 0);
    },

    gradeEssay: function(topicTitle) {
        const text = document.getElementById('ai-essay-input').value.trim();
        if(!text) {
            alert("You can't submit an empty paper! Write something first.");
            return;
        }

        // Bulletproof Prompt for Global AI
        const prompt = `I have written a piece about '${topicTitle}'. Please act as a strict HSC board examiner. \n1. Give it a score out of 10.\n2. Point out my biggest grammar mistakes.\n3. Give me one specific tip to improve.\n\nHere is my writing: "${text}"`;
        
        // Open Global AI Window and Send
        if (typeof window.toggleAI === 'function') {
            const aiWin = document.getElementById('ai-window');
            if (aiWin && aiWin.style.display !== 'flex') {
                window.toggleAI();
            }
            
            const aiInput = document.getElementById('ai-input');
            if(aiInput) {
                aiInput.value = prompt;
                window.sendUserMessage();
            }
        } else {
            alert("AI Engine is offline. Make sure you are connected to the internet!");
        }
    }
};
