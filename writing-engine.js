/* writing-engine.js - Interactive engine for Part C */

const WritingEngine = {
    init: function() {
        this.renderMenu();
    },

    renderMenu: function() {
        const html = `
        <div class="fade-in">
            
            <div onclick="WritingEngine.openList('stories')" style="background:white; padding:20px; border-radius:24px; margin-bottom:15px; box-shadow:0 10px 30px rgba(0,0,0,0.04); cursor:pointer; display:flex; align-items:center; gap:20px; transition:transform 0.2s;">
                <div style="width:60px; height:60px; background:#fff1f2; color:#f43f5e; border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:24px;"><i class="fas fa-book-open"></i></div>
                <div>
                    <h3 style="margin:0; font-family:'Outfit'; font-size:18px; color:#1e293b;">Stories</h3>
                    <p style="margin:5px 0 0; font-size:13px; color:#64748b; font-weight:600;">15 Marks • 15 Board Items</p>
                </div>
                <i class="fas fa-chevron-right" style="margin-left:auto; color:#cbd5e1;"></i>
            </div>
            
            <div onclick="WritingEngine.openList('paragraphs')" style="background:white; padding:20px; border-radius:24px; margin-bottom:15px; box-shadow:0 10px 30px rgba(0,0,0,0.04); cursor:pointer; display:flex; align-items:center; gap:20px; transition:transform 0.2s;">
                <div style="width:60px; height:60px; background:#f5f3ff; color:#8b5cf6; border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:24px;"><i class="fas fa-align-left"></i></div>
                <div>
                    <h3 style="margin:0; font-family:'Outfit'; font-size:18px; color:#1e293b;">Paragraphs</h3>
                    <p style="margin:5px 0 0; font-size:13px; color:#64748b; font-weight:600;">15 Marks • 15 Board Items</p>
                </div>
                <i class="fas fa-chevron-right" style="margin-left:auto; color:#cbd5e1;"></i>
            </div>

            <div onclick="WritingEngine.openList('letters')" style="background:white; padding:20px; border-radius:24px; margin-bottom:15px; box-shadow:0 10px 30px rgba(0,0,0,0.04); cursor:pointer; display:flex; align-items:center; gap:20px; transition:transform 0.2s;">
                <div style="width:60px; height:60px; background:#ecfdf5; color:#10b981; border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:24px;"><i class="fas fa-envelope-open-text"></i></div>
                <div>
                    <h3 style="margin:0; font-family:'Outfit'; font-size:18px; color:#1e293b;">Letters & Emails</h3>
                    <p style="margin:5px 0 0; font-size:13px; color:#64748b; font-weight:600;">10 Marks • 15 Board Items</p>
                </div>
                <i class="fas fa-chevron-right" style="margin-left:auto; color:#cbd5e1;"></i>
            </div>

            <div onclick="WritingEngine.openList('dialogues')" style="background:white; padding:20px; border-radius:24px; margin-bottom:15px; box-shadow:0 10px 30px rgba(0,0,0,0.04); cursor:pointer; display:flex; align-items:center; gap:20px; transition:transform 0.2s;">
                <div style="width:60px; height:60px; background:#eff6ff; color:#3b82f6; border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:24px;"><i class="fas fa-comments"></i></div>
                <div>
                    <h3 style="margin:0; font-family:'Outfit'; font-size:18px; color:#1e293b;">Dialogues</h3>
                    <p style="margin:5px 0 0; font-size:13px; color:#64748b; font-weight:600;">10 Marks • 15 Board Items</p>
                </div>
                <i class="fas fa-chevron-right" style="margin-left:auto; color:#cbd5e1;"></i>
            </div>

        </div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    openList: function(type) {
        const data = writingData[type];
        
        // Dynamic colors based on type
        let color = '#f43f5e';
        if(type === 'paragraphs') color = '#8b5cf6';
        if(type === 'letters') color = '#10b981';
        if(type === 'dialogues') color = '#3b82f6';

        let html = `
        <div class="fade-in">
            <button onclick="WritingEngine.renderMenu()" style="background:white; border:none; padding:10px 20px; border-radius:50px; font-weight:700; color:#64748b; margin-bottom:15px; cursor:pointer; box-shadow:0 5px 15px rgba(0,0,0,0.05);"><i class="fas fa-arrow-left"></i> Back</button>
            
            <div style="background:white; border-radius:20px; padding:20px; margin-bottom:20px; border-left:4px solid ${color}; box-shadow:0 10px 30px rgba(0,0,0,0.04);">
                <h3 style="margin:0 0 10px 0; font-family:'Outfit'; color:#1e293b;"><i class="fas fa-gavel" style="color:#f59e0b;"></i> Golden Rules for ${data.title}</h3>
                <ul style="margin:0; padding-left:20px; font-size:13px; color:#475569; line-height:1.6;">
                    ${data.rules.map(rule => `<li style="margin-bottom:5px;">${rule}</li>`).join('')}
                </ul>
            </div>
        `;

        data.items.forEach((item, idx) => {
            html += `
            <div onclick="WritingEngine.openItem('${type}', ${idx})" style="background:white; padding:15px 20px; border-radius:16px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; box-shadow:0 5px 15px rgba(0,0,0,0.03); border:1px solid #f1f5f9;">
                <div style="font-weight:700; color:#334155;">${item.title}</div>
                <i class="fas fa-chevron-right" style="color:${color};"></i>
            </div>`;
        });

        html += `</div>`;
        document.getElementById('app-container').innerHTML = html;
    },

   openItem: function(type, index) {
        const item = writingData[type].items[index];
        
        let color = '#f43f5e';
        let bg = '#fff1f2';
        if(type === 'paragraphs') { color = '#8b5cf6'; bg = '#f5f3ff'; }
        if(type === 'letters') { color = '#10b981'; bg = '#ecfdf5'; }
        if(type === 'dialogues') { color = '#3b82f6'; bg = '#eff6ff'; }

        // Escape text for the Read Aloud function
        let safeText = item.content.replace(/'/g, "\\'").replace(/"/g, "&quot;").replace(/\n/g, " ");

        let html = `
        <div class="fade-in">
            <button onclick="WritingEngine.openList('${type}')" style="background:white; border:none; padding:10px 20px; border-radius:50px; font-weight:700; color:#64748b; margin-bottom:15px; cursor:pointer; box-shadow:0 5px 15px rgba(0,0,0,0.05);"><i class="fas fa-arrow-left"></i> Back to List</button>
            
            <div style="background:white; padding:25px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.05); position:relative;">
                
                <button onclick="playLessonAudio('${safeText}')" style="position:absolute; top:20px; right:20px; background:#eff6ff; border:1px solid #bfdbfe; color:#3b82f6; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:0.2s;"><i class="fas fa-volume-up"></i></button>
                
                <h2 style="margin:0 40px 15px 0; font-family:'Outfit'; color:#1e293b; font-size:20px;">${item.title}</h2>
                <div style="font-size:15px; line-height:1.8; color:#334155; white-space: pre-wrap; margin-bottom:20px;">${item.content}</div>
        `;

        if (item.moral) {
            html += `
            <div style="background:${bg}; padding:15px; border-radius:12px; border-left:4px solid ${color}; margin-bottom: 25px;">
                <strong style="color:${color};">Moral:</strong> <span style="color:#1e293b;">${item.moral}</span>
            </div>`;
        }

        // NEW: AI Essay Grader Box
        html += `
            <div style="margin-top: 30px; border-top: 2px dashed #e2e8f0; padding-top: 20px;">
                <h3 style="font-family:'Outfit'; font-size:16px; color:#1e293b; margin-bottom:10px;"><i class="fas fa-robot" style="color:#6366f1;"></i> AI Grader: Write Your Own</h3>
                <p style="font-size:12px; color:#64748b; margin-bottom:15px;">Type your version of <b>${item.title}</b> below. Mini Champ will grade it out of 10 and fix your grammar!</p>
                
                <textarea id="ai-essay-input" placeholder="Start typing here..." style="width:100%; height:150px; padding:15px; border-radius:12px; border:2px solid #cbd5e1; outline:none; font-family:inherit; font-size:14px; resize:vertical;"></textarea>
                
                <button onclick="WritingEngine.gradeEssay('${item.title}')" style="width:100%; background:linear-gradient(135deg, #8b5cf6, #6366f1); color:white; border:none; padding:15px; border-radius:12px; font-weight:800; margin-top:15px; cursor:pointer; box-shadow:0 5px 15px rgba(139, 92, 246, 0.3);"><i class="fas fa-magic"></i> Grade My Writing</button>
            </div>
        </div></div>`;
        
        document.getElementById('app-container').innerHTML = html;
        window.scrollTo(0, 0);
    },

    // NEW: Function to send the essay to the Global AI Engine
    gradeEssay: function(topicTitle) {
        const text = document.getElementById('ai-essay-input').value.trim();
        if(!text) {
            alert("Please write something first!");
            return;
        }

        // Construct the prompt for the AI
        const prompt = `I have written a piece about '${topicTitle}'. Please grade it out of 10. Point out any major grammar mistakes, and give me a 1-sentence tip to improve. Here is my writing: "${text}"`;
        
        // Open the AI Window
        toggleAI();
        
        // Feed it directly into the Global Engine's chat box and trigger a send
        const aiInput = document.getElementById('ai-input');
        if(aiInput) {
            aiInput.value = prompt;
            sendUserMessage();
        }
    }
