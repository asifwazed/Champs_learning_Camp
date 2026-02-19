/* tools-engine.js - Powering the Utility Belt */

const ToolsEngine = {
    
    // --- 1. INITIALIZER ---
    init: function() {
        this.renderHeader('Utility Belt', 'Tools to boost your score');
        this.renderMainMenu();
    },

    renderHeader: function(title, sub) {
        document.getElementById('header-slot').innerHTML = loadHeader(title, sub);
    },

    renderMainMenu: function() {
        const html = `
        <div class="tool-grid fade-in">
            <div class="tool-card" onclick="ToolsEngine.openGPA()">
                <div class="tc-icon t-green"><i class="fas fa-calculator"></i></div>
                <div style="font-weight:700;">GPA Calc</div>
            </div>

            <div class="tool-card" onclick="ToolsEngine.openSuggestions()">
                <div class="tc-icon t-gold"><i class="fas fa-crown"></i></div>
                <div style="font-weight:700;">Suggestions</div>
            </div>

            <div class="tool-card" onclick="ToolsEngine.openCountdown()">
                <div class="tc-icon t-rose"><i class="fas fa-hourglass-half"></i></div>
                <div style="font-weight:700;">Countdown</div>
            </div>

            <div class="tool-card" onclick="ToolsEngine.openFlashcards()">
                <div class="tc-icon t-blue"><i class="fas fa-layer-group"></i></div>
                <div style="font-weight:700;">Vocab Arcade</div>
            </div>
            
            <div class="tool-card" onclick="ToolsEngine.openStudyTimer()">
                <div class="tc-icon t-rose" style="background:#fff1f2; color:#e11d48;"><i class="fas fa-brain"></i></div>
                <div style="font-weight:700;">Study Timer</div>
            </div>

            <div class="tool-card" onclick="ToolsEngine.openWriter()">
                <div class="tc-icon t-purple"><i class="fas fa-pen-fancy"></i></div>
                <div style="font-weight:700;">Write Check</div>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
        this.renderHeader('Utility Belt', 'Tools to boost your score');
    },

    // --- 2. GPA CALCULATOR ---
    openGPA: function() {
        this.renderHeader('GPA Calculator', 'Check your result');
        const html = `
        <div class="fade-in">
            <div style="background:white; padding:20px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.05);">
                <div style="margin-bottom:20px;">
                    <label style="font-size:12px; font-weight:700; color:#64748b; margin-bottom:5px; display:block;">SELECT YOUR GROUP</label>
                    <select id="group-select" onchange="ToolsEngine.updateSubjects()" style="width:100%; padding:12px; border-radius:12px; border:1px solid #e2e8f0; font-weight:700; color:#0f172a;">
                        <option value="sci">🧪 Science</option>
                        <option value="bus">💼 Business Studies</option>
                        <option value="hum">🌍 Humanities</option>
                    </select>
                </div>
                <div id="subject-list"></div>
                <div style="background:#f0fdfa; padding:15px; border-radius:15px; text-align:center; margin-top:20px; display:none;" id="result-box">
                    <div style="font-size:12px; color:#047857;">YOUR ESTIMATED GPA</div>
                    <div style="font-size:32px; font-weight:800; color:#059669;" id="final-gpa">0.00</div>
                    <div style="font-size:12px; color:#047857;" id="final-grade">(-grade)</div>
                </div>
                <button onclick="ToolsEngine.calculateGPA()" style="width:100%; background:#10b981; color:white; padding:15px; border:none; border-radius:50px; font-weight:700; margin-top:20px;">Calculate Now</button>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
        this.updateSubjects(); 
    },

    updateSubjects: function() {
        const group = document.getElementById('group-select').value;
        const list = document.getElementById('subject-list');
        const common = ['Bangla', 'English', 'ICT'];
        let subjects = [];
        if(group === 'sci') subjects = [...common, 'Physics', 'Chemistry', 'Biology/Math', 'Optional Sub'];
        if(group === 'bus') subjects = [...common, 'Accounting', 'Management', 'Finance/Mkt', 'Optional Sub'];
        if(group === 'hum') subjects = [...common, 'Economics', 'Civics', 'History/Logic', 'Optional Sub'];

        let html = '';
        subjects.forEach((sub) => {
            html += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <div style="font-size:14px; font-weight:600; color:#334155;">${sub}</div>
                <input type="number" class="mark-input" placeholder="Marks" style="width:80px; padding:8px; border-radius:8px; border:1px solid #e2e8f0; text-align:center;">
            </div>`;
        });
        list.innerHTML = html;
    },

    calculateGPA: function() {
        const inputs = document.querySelectorAll('.mark-input');
        let totalPoint = 0, totalSubs = 0, fail = false;

        inputs.forEach(input => {
            const m = parseInt(input.value) || 0;
            let p = 0;
            if(m >= 80) p = 5.00;
            else if(m >= 70) p = 4.00;
            else if(m >= 60) p = 3.50;
            else if(m >= 50) p = 3.00;
            else if(m >= 40) p = 2.00;
            else if(m >= 33) p = 1.00;
            else { p = 0.00; fail = true; }
            totalPoint += p;
            totalSubs++;
        });

        const gpa = fail ? 0.00 : (totalPoint / totalSubs).toFixed(2);
        const grade = fail ? "F (Fail)" : (gpa == 5.00 ? "A+" : "Passed");

        document.getElementById('result-box').style.display = 'block';
        document.getElementById('final-gpa').innerText = gpa;
        document.getElementById('final-grade').innerText = grade;
    },

        // --- 3. SUGGESTIONS MODULE (BEAUTIFUL INTERACTIVE VERSION) ---
    openSuggestions: function() {
        this.renderHeader('Exam Blueprint', 'Top 1% HSC Suggestions');
        
        let html = `<div class="fade-in" style="padding-bottom:20px;">`;
        
        // --- 60 MARKS: READING HACKS ---
        html += `
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:15px; background:linear-gradient(135deg, #3b82f6, #1d4ed8); padding:20px; border-radius:20px; color:white; box-shadow:0 10px 20px rgba(59, 130, 246, 0.3);">
            <i class="fas fa-brain" style="font-size:35px; opacity:0.9;"></i>
            <div>
                <div style="font-weight:800; font-size:18px; font-family:'Outfit';">60 Marks Blueprint</div>
                <div style="font-size:12px; opacity:0.8;">Hacks for the Reading Part</div>
            </div>
        </div>`;
        
        try {
            suggestionData.tips_60.forEach(tip => {
                html += `
                <div style="background:white; border-radius:16px; padding:15px 20px; margin-bottom:12px; border-left:5px solid #3b82f6; box-shadow:0 5px 15px rgba(0,0,0,0.03);">
                    <div style="font-weight:800; color:#1e293b; margin-bottom:8px; font-size:15px;">${tip.title}</div>
                    <div style="font-size:13px; color:#64748b; line-height:1.6;">${tip.content}</div>
                </div>`;
            });
        } catch(e) { html += "<div>Error loading 60 Marks tips</div>"; }

        // --- 40 MARKS: WRITING VAULT ---
        html += `
        <div style="display:flex; align-items:center; gap:15px; margin:30px 0 15px; background:linear-gradient(135deg, #f43f5e, #be123c); padding:20px; border-radius:20px; color:white; box-shadow:0 10px 20px rgba(244, 63, 94, 0.3);">
            <i class="fas fa-pen-nib" style="font-size:35px; opacity:0.9;"></i>
            <div>
                <div style="font-weight:800; font-size:18px; font-family:'Outfit';">40 Marks Vault</div>
                <div style="font-size:12px; opacity:0.8;">Top 15 Writing Suggestions</div>
            </div>
        </div>`;

        // Helper function to create interactive dropdown lists
        const createList = (title, icon, color, bg, listData, id) => {
            let listHtml = listData.map(item => `
                <div style="padding:12px 0; border-bottom:1px solid #f1f5f9; font-size:13px; color:#334155; display:flex; gap:12px; align-items:flex-start;">
                    <i class="fas fa-check-circle" style="color:${color}; margin-top:3px; font-size:14px;"></i> 
                    <span style="font-weight:600;">${item}</span>
                </div>
            `).join('');
            
            return `
            <div style="background:white; border-radius:20px; margin-bottom:12px; box-shadow:0 5px 15px rgba(0,0,0,0.04); overflow:hidden;">
                <div onclick="document.getElementById('${id}').classList.toggle('open'); this.querySelector('.arrow').classList.toggle('rotate');" style="padding:15px 20px; display:flex; align-items:center; justify-content:space-between; cursor:pointer; background:${bg}; transition:0.3s;">
                    <div style="display:flex; align-items:center; gap:15px;">
                        <div style="width:40px; height:40px; background:white; border-radius:12px; display:flex; align-items:center; justify-content:center; color:${color}; font-size:18px;"><i class="fas ${icon}"></i></div>
                        <div style="font-weight:800; color:#1e293b; font-size:15px;">${title}</div>
                    </div>
                    <i class="fas fa-chevron-down arrow" style="color:#94a3b8; transition:transform 0.3s;"></i>
                </div>
                <div id="${id}" class="sug-dropdown">
                    <div style="padding:5px 20px 15px; background:white;">
                        ${listHtml}
                    </div>
                </div>
            </div>`;
        };

        try {
            html += createList('Top 15 Paragraphs', 'fa-align-left', '#8b5cf6', '#f5f3ff', suggestionData.writing_40.paragraphs, 'sug-para');
            html += createList('Top 15 Stories', 'fa-book-open', '#f59e0b', '#fffbeb', suggestionData.writing_40.stories, 'sug-story');
            html += createList('Top 15 Letters/Emails', 'fa-envelope-open-text', '#10b981', '#ecfdf5', suggestionData.writing_40.letters, 'sug-letter');
            html += createList('Top 15 Dialogues', 'fa-comments', '#0ea5e9', '#e0f2fe', suggestionData.writing_40.dialogues, 'sug-dialogue');
        } catch(e) { html += "<div>Error loading Writing data</div>"; }

        html += `</div>`;
        document.getElementById('app-container').innerHTML = html;
        
        // Add CSS for the smooth dropdown animation if not already there
        if (!document.getElementById('sug-styles')) {
            const style = document.createElement('style');
            style.id = 'sug-styles';
            style.innerHTML = `
                .sug-dropdown { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out; }
                .sug-dropdown.open { max-height: 1000px; }
                .arrow.rotate { transform: rotate(180deg); }
            `;
            document.head.appendChild(style);
        }
    },


    // --- 4. EXAM COUNTDOWN ---
    openCountdown: function() {
        this.renderHeader('Exam Countdown', 'Time is ticking!');
        const savedDate = localStorage.getItem('examDate');
        let displayHtml = '';
        if(savedDate) {
            displayHtml = this.getTimerHtml(savedDate);
        } else {
            displayHtml = `
            <div style="text-align:center; padding:30px; background:white; border-radius:20px;">
                <h3>When is your Exam?</h3>
                <input type="date" id="examDateInput" style="padding:15px; border-radius:10px; border:1px solid #cbd5e1; width:100%; margin-bottom:15px; font-family:inherit;">
                <button onclick="ToolsEngine.saveDate()" style="background:#f43f5e; color:white; padding:12px 30px; border-radius:50px; border:none; font-weight:700;">Start Countdown</button>
            </div>`;
        }
        document.getElementById('app-container').innerHTML = `<div class="fade-in">${displayHtml}</div>`;
        
        if(savedDate) {
            if(this.examTimerInterval) clearInterval(this.examTimerInterval);
            this.examTimerInterval = setInterval(() => {
                const timerBox = document.getElementById('cnt-box');
                if(timerBox) timerBox.innerHTML = ToolsEngine.calculateTime(savedDate);
            }, 1000);
        }
    },
    saveDate: function() {
        const date = document.getElementById('examDateInput').value;
        if(date) { localStorage.setItem('examDate', date); this.openCountdown(); }
    },
    getTimerHtml: function(dateStr) {
        return `
        <div style="text-align:center; background:linear-gradient(135deg, #f43f5e, #be123c); color:white; padding:40px 20px; border-radius:24px; box-shadow:0 10px 30px rgba(190, 18, 60, 0.3);">
            <div style="font-size:14px; opacity:0.8; margin-bottom:10px;">TIME REMAINING</div>
            <div id="cnt-box" style="font-size:35px; font-weight:800; font-family:monospace;">${this.calculateTime(dateStr)}</div>
            <button onclick="localStorage.removeItem('examDate'); ToolsEngine.openCountdown()" style="margin-top:20px; background:rgba(255,255,255,0.2); color:white; border:none; padding:8px 20px; border-radius:50px; font-size:12px;">Reset Date</button>
        </div>`;
    },
    calculateTime: function(dateStr) {
        const now = new Date().getTime();
        const exam = new Date(dateStr).getTime();
        const dist = exam - now;
        if (dist < 0) return "EXAM STARTED!";
        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);
        return `${d}d ${h}h ${m}m ${s}s`;
    },

    // --- 5. FLASHCARDS (FIXED CSS FLIP) ---
    openFlashcards: function() {
        this.renderHeader('Vocab Arcade', 'Flip to learn');
        const html = `
        <div class="fade-in">
            <div style="perspective:1000px; width:100%; height:300px; margin-top:20px;">
                <div id="cardElement" onclick="ToolsEngine.flipCard()" style="width:100%; height:100%; position:relative; transform-style:preserve-3d; transition:transform 0.6s; border-radius:24px; box-shadow:0 15px 35px rgba(0,0,0,0.1); cursor:pointer; transform:rotateY(0deg);">
                    <div style="position:absolute; width:100%; height:100%; backface-visibility:hidden; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; background:linear-gradient(135deg, #4f46e5, #4338ca); color:white;">
                        <div style="font-size:12px; opacity:0.7; letter-spacing:1px;">TAP TO FLIP</div>
                        <div class="word" id="fcWord" style="font-size:32px; font-weight:800; font-family:'Outfit'; margin-bottom:10px;">Loading...</div>
                    </div>
                    <div style="position:absolute; width:100%; height:100%; backface-visibility:hidden; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; background:white; color:#1e293b; transform:rotateY(180deg); border:1px solid #e2e8f0;">
                        <div class="meaning" id="fcMean" style="font-size:24px; font-weight:700; color:#4f46e5; margin-bottom:10px; font-family:'Hind Siliguri';">...</div>
                        <div style="background:#f1f5f9; padding:5px 12px; border-radius:20px; font-size:13px; color:#64748b;" id="fcSyn">...</div>
                    </div>
                </div>
            </div>
            <div style="text-align:center; margin-top:20px;">
                <button onclick="ToolsEngine.nextCard()" style="background:#1e293b; color:white; padding:12px 30px; border-radius:50px; border:none; font-weight:700;">Next Word <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
        this.nextCard(); 
    },

    currentIdx: 0,
    flipCard: function() {
        const el = document.getElementById('cardElement');
        // Pure JS CSS check fixes the animation bug
        if(el.style.transform === 'rotateY(180deg)') {
            el.style.transform = 'rotateY(0deg)';
        } else {
            el.style.transform = 'rotateY(180deg)';
        }
    },
    nextCard: function() {
        const el = document.getElementById('cardElement');
        el.style.transform = 'rotateY(0deg)'; // Force back to front view
        
        setTimeout(() => {
            let words = [];
            try { words = vocabList; } catch(e) { words = [{w:"Error", m:"vocab.js missing", s:""}]; }
            
            let newIdx;
            do {
                newIdx = Math.floor(Math.random() * words.length);
            } while (newIdx === this.currentIdx && words.length > 1);
            
            this.currentIdx = newIdx;
            const item = words[newIdx];
            
            document.getElementById('fcWord').innerText = item.w;
            document.getElementById('fcMean').innerText = item.m;
            document.getElementById('fcSyn').innerText = item.s;
        }, 300); // 300ms matches the animation speed so user doesn't see text switch
    },

    // --- 6. STUDY TIMER WITH TIPS (NEW) ---
    studyTimerInterval: null,
    studyTimeLeft: 25 * 60,
    isTimerRunning: false,

    openStudyTimer: function() {
        this.renderHeader('Study Timer', 'Focus & Learn');
        const tips = [
            "💡 Tip: Drink a glass of water. Hydration boosts memory!",
            "💡 Tip: Use the Feynman Technique. Explain the topic like you're teaching a kid.",
            "💡 Tip: Put your phone in another room. Out of sight, out of mind.",
            "💡 Tip: Active recall (testing yourself) is 3x more effective than re-reading.",
            "💡 Tip: Break big chapters into 3 small chunks. Don't eat the whole elephant at once.",
            "💡 Tip: Highlight only the keywords, not the whole sentence."
        ];
        const randomTip = tips[Math.floor(Math.random() * tips.length)];

        // Reset variables when opening the tool
        if(this.studyTimerInterval) clearInterval(this.studyTimerInterval);
        this.isTimerRunning = false;
        this.studyTimeLeft = 25 * 60; 

        const html = `
        <div class="fade-in">
            <div style="background:white; border-radius:24px; padding:30px; text-align:center; box-shadow:0 10px 30px rgba(0,0,0,0.05);">
                <i class="fas fa-brain" style="font-size:40px; color:#e11d48; margin-bottom:15px;"></i>
                
                <div style="font-size:13px; line-height:1.6; color:#be123c; margin-bottom:20px; font-weight:600; background:#fff1f2; padding:12px; border-radius:12px; text-align:left;">
                    ${randomTip}
                </div>
                
                <div id="studyTimerDisplay" style="font-size:60px; font-weight:800; color:#0ea5e9; font-family:monospace; margin-bottom:20px;">25:00</div>
                
                <div style="display:flex; gap:10px; justify-content:center; margin-bottom:20px;">
                    <button onclick="ToolsEngine.setTimer(25)" style="flex:1; background:#f1f5f9; border:none; padding:10px; border-radius:10px; font-weight:700; color:#475569; cursor:pointer;">25 Min</button>
                    <button onclick="ToolsEngine.setTimer(50)" style="flex:1; background:#f1f5f9; border:none; padding:10px; border-radius:10px; font-weight:700; color:#475569; cursor:pointer;">50 Min</button>
                    <button onclick="ToolsEngine.setTimer(5)" style="flex:1; background:#f1f5f9; border:none; padding:10px; border-radius:10px; font-weight:700; color:#475569; cursor:pointer;">Break</button>
                </div>

                <button id="timerBtn" onclick="ToolsEngine.toggleStudyTimer()" style="background:#0ea5e9; color:white; padding:15px 40px; border-radius:50px; border:none; font-weight:700; width:100%; font-size:16px;">Start Focus</button>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    setTimer: function(mins) {
        clearInterval(this.studyTimerInterval);
        this.isTimerRunning = false;
        this.studyTimeLeft = mins * 60;
        document.getElementById('timerBtn').innerText = "Start Focus";
        document.getElementById('timerBtn').style.background = "#0ea5e9";
        this.updateTimerDisplay();
    },

    toggleStudyTimer: function() {
        const btn = document.getElementById('timerBtn');
        if(this.isTimerRunning) {
            clearInterval(this.studyTimerInterval);
            this.isTimerRunning = false;
            btn.innerText = "Resume Focus";
            btn.style.background = "#10b981";
        } else {
            this.isTimerRunning = true;
            btn.innerText = "Pause Timer";
            btn.style.background = "#f59e0b";
            
            this.studyTimerInterval = setInterval(() => {
                if(this.studyTimeLeft > 0) {
                    this.studyTimeLeft--;
                    this.updateTimerDisplay();
                } else {
                    clearInterval(this.studyTimerInterval);
                    this.isTimerRunning = false;
                    btn.innerText = "Time's Up!";
                    btn.style.background = "#ef4444";
                    alert("Time's up! Great session.");
                }
            }, 1000);
        }
    },

    updateTimerDisplay: function() {
        const d = document.getElementById('studyTimerDisplay');
        if(!d) return;
        let m = Math.floor(this.studyTimeLeft / 60);
        let s = this.studyTimeLeft % 60;
        d.innerText = (m < 10 ? "0"+m : m) + ":" + (s < 10 ? "0"+s : s);
    },

    // --- 7. WRITER ---
    openWriter: function() {
        this.renderHeader('Write Check', 'Word Counter');
        document.getElementById('app-container').innerHTML = `
        <div class="fade-in">
            <textarea id="writeArea" oninput="document.getElementById('wc').innerText = this.value.split(/\\s+/).filter(w => w.length > 0).length" style="width:100%; height:200px; padding:20px; border-radius:20px; border:2px solid #e2e8f0; font-family:inherit; font-size:15px;"></textarea>
            <div style="margin-top:10px; font-weight:700; color:#64748b;">Words: <span id="wc">0</span></div>
        </div>`;
    }
};
