/* tools-engine.js - The Upgraded Utility Belt */

const ToolsEngine = {
    
    init: function() {
        this.renderHeader('Utility Belt', 'Tools to boost your score');
        this.renderMainMenu();
    },

    renderHeader: function(title, sub) {
        document.getElementById('header-slot').innerHTML = `
            <div class="header">
                <a href="index.html" class="back-btn"><i class="fas fa-arrow-left"></i></a>
                <div>
                    <h2 class="header-title">${title}</h2>
                    <div class="header-sub">${sub}</div>
                </div>
            </div>`;
    },

    renderMainMenu: function() {
        const html = `
        <div class="tool-grid fade-in">
            <div class="tool-card" onclick="ToolsEngine.openFlashcards()">
                <div class="tc-icon t-blue"><i class="fas fa-gamepad"></i></div>
                <div style="font-weight:700;">Vocab Arcade</div>
            </div>
            <div class="tool-card" onclick="ToolsEngine.openStudyTimer()">
                <div class="tc-icon t-rose"><i class="fas fa-clock"></i></div>
                <div style="font-weight:700;">Pomodoro</div>
            </div>
            <div class="tool-card" onclick="ToolsEngine.openGPA()">
                <div class="tc-icon t-green"><i class="fas fa-calculator"></i></div>
                <div style="font-weight:700;">GPA Calc</div>
            </div>
            <div class="tool-card" onclick="ToolsEngine.openSuggestions()">
                <div class="tc-icon t-gold"><i class="fas fa-crown"></i></div>
                <div style="font-weight:700;">Suggestions</div>
            </div>
            <div class="tool-card" onclick="ToolsEngine.openCountdown()">
                <div class="tc-icon t-rose" style="background:#fce7f3; color:#e11d48;"><i class="fas fa-hourglass-half"></i></div>
                <div style="font-weight:700;">Countdown</div>
            </div>
            <div class="tool-card" onclick="ToolsEngine.openWriter()">
                <div class="tc-icon t-purple"><i class="fas fa-pen-fancy"></i></div>
                <div style="font-weight:700;">Write Check</div>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
        this.renderHeader('Utility Belt', 'Tools to boost your score');
    },

    // --- 1. UPGRADED GPA CALCULATOR ---
    openGPA: function() {
        this.renderHeader('GPA Calculator', 'Predict your HSC result');
        const html = `
        <div class="fade-in" style="padding:20px;">
            <div style="background:white; padding:20px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
                <label style="font-size:12px; font-weight:800; color:#64748b; display:block; margin-bottom:10px;">SELECT YOUR GROUP</label>
                <select id="group-select" onchange="ToolsEngine.updateSubjects()" style="width:100%; padding:15px; border-radius:12px; border:1px solid #cbd5e1; font-weight:700; color:#0f172a; margin-bottom:20px; background:#f8fafc; outline:none;">
                    <option value="sci">🧪 Science</option>
                    <option value="bus">💼 Business Studies</option>
                    <option value="hum">🌍 Humanities</option>
                </select>
                
                <div id="subject-list"></div>
                
                <button onclick="ToolsEngine.calculateGPA()" style="width:100%; background:#3b82f6; color:white; padding:15px; border:none; border-radius:16px; font-family:'Outfit'; font-weight:800; font-size:16px; margin-top:20px; cursor:pointer;">Calculate GPA</button>

                <div id="result-box" style="text-align:center; margin-top:25px; display:none; background:#f8fafc; padding:20px; border-radius:16px; border:1px solid #e2e8f0;">
                    <div style="font-size:13px; font-weight:700; color:#64748b;">EXPECTED HSC RESULT</div>
                    <div id="final-gpa" style="font-size:45px; font-family:'Outfit'; font-weight:800; color:#10b981; margin:5px 0;">0.00</div>
                    <div id="gpa-comment" style="font-size:14px; font-weight:700; color:#1e293b;"></div>
                </div>
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
        if(group === 'sci') subjects = [...common, 'Physics', 'Chemistry', 'Biology/Math'];
        if(group === 'bus') subjects = [...common, 'Accounting', 'Management', 'Finance'];
        if(group === 'hum') subjects = [...common, 'Economics', 'Civics', 'History'];

        const gradesHTML = `
            <option value="5.0">A+ (80-100)</option>
            <option value="4.0">A  (70-79)</option>
            <option value="3.5">A- (60-69)</option>
            <option value="3.0">B  (50-59)</option>
            <option value="2.0">C  (40-49)</option>
            <option value="1.0">D  (33-39)</option>
            <option value="0.0">F  (0-32)</option>
        `;

        let html = '';
        subjects.forEach((sub) => {
            html += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; background:#f8fafc; padding:12px 15px; border-radius:12px; border:1px solid #e2e8f0;">
                <div style="font-size:14px; font-weight:700; color:#334155;">${sub}</div>
                <select class="mark-input" style="padding:8px 10px; border-radius:8px; border:1px solid #cbd5e1; font-weight:700; font-family:inherit; outline:none;">${gradesHTML}</select>
            </div>`;
        });
        list.innerHTML = html;
    },

    calculateGPA: function() {
        const inputs = document.querySelectorAll('.mark-input');
        let totalPoint = 0, failed = false;

        inputs.forEach(input => {
            let p = parseFloat(input.value);
            totalPoint += p;
            if(p === 0) failed = true;
        });

        let gpa = totalPoint / inputs.length;
        let resultBox = document.getElementById('result-box');
        let finalGpaTxt = document.getElementById('final-gpa');
        let commentTxt = document.getElementById('gpa-comment');

        resultBox.style.display = 'block';

        if(failed) {
            finalGpaTxt.innerText = "F";
            finalGpaTxt.style.color = "#ef4444";
            commentTxt.innerText = "You failed a subject. Keep studying! 🚨";
        } else {
            finalGpaTxt.innerText = gpa.toFixed(2);
            finalGpaTxt.style.color = (gpa === 5.0) ? "#f59e0b" : "#10b981";
            if(gpa === 5.0) commentTxt.innerText = "Golden A+! Brilliant Job! 🌟";
            else if(gpa >= 4.0) commentTxt.innerText = "Excellent! Keep pushing! 🔥";
            else commentTxt.innerText = "Good job, but there's room to improve! 💪";
        }
        resultBox.scrollIntoView({ behavior: 'smooth' });
    },

    // --- 2. UPGRADED VOCAB ARCADE & FLASHCARDS ---
    openFlashcards: function() {
        this.renderHeader('Vocab Hub', 'Flashcards & Arcade');
        const html = `
        <div class="fade-in" style="padding:20px; display:flex; flex-direction:column; gap:15px;">
            <div style="background:linear-gradient(135deg, #3b82f6, #6366f1); padding:25px; border-radius:20px; color:white; cursor:pointer; box-shadow:0 10px 20px rgba(59,130,246,0.3);" onclick="ToolsEngine.startFlashcardLearn()">
                <h3 style="margin:0; font-family:'Outfit'; font-size:20px;"><i class="fas fa-clone"></i> Learn Words</h3>
                <p style="margin:5px 0 0; font-size:13px; opacity:0.9;">Study with flip flashcards.</p>
            </div>
            
            <div style="background:linear-gradient(135deg, #f59e0b, #ef4444); padding:25px; border-radius:20px; color:white; cursor:pointer; box-shadow:0 10px 20px rgba(239,68,68,0.3);" onclick="ToolsEngine.startArcadeTest()">
                <h3 style="margin:0; font-family:'Outfit'; font-size:20px;"><i class="fas fa-bolt"></i> Vocab Arcade</h3>
                <p style="margin:5px 0 0; font-size:13px; opacity:0.9;">Test your speed & memory!</p>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    currentIdx: 0,
    startFlashcardLearn: function() {
        this.renderHeader('Flashcards', 'Tap to flip');
        this.currentIdx = 0;
        const html = `
        <div class="fade-in" style="padding:20px; perspective:1000px; display:flex; flex-direction:column; align-items:center;">
            <div style="font-weight:800; color:#64748b; margin-bottom:15px;" id="fc-counter">Card 1</div>
            <div id="fc-card" onclick="ToolsEngine.flipCard()" style="width:100%; max-width:320px; height:220px; position:relative; transform-style:preserve-3d; transition:transform 0.5s; cursor:pointer; box-shadow:0 20px 40px rgba(0,0,0,0.1); border-radius:24px;">
                <div style="position:absolute; width:100%; height:100%; backface-visibility:hidden; background:white; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; border:2px solid #e2e8f0;">
                    <span style="color:#94a3b8; font-size:12px; font-weight:800; letter-spacing:1px; margin-bottom:15px;">ENGLISH</span>
                    <span id="fc-en" style="font-size:32px; font-weight:800; color:#1e293b; font-family:'Outfit'; text-transform:capitalize;">...</span>
                </div>
                <div style="position:absolute; width:100%; height:100%; backface-visibility:hidden; background:linear-gradient(135deg,#3b82f6,#6366f1); color:white; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; transform:rotateY(180deg);">
                    <span style="opacity:0.8; font-size:12px; font-weight:800; letter-spacing:1px; margin-bottom:15px;">BENGALI MEANING</span>
                    <span id="fc-bn" style="font-size:35px; font-weight:800; margin-bottom:10px;">...</span>
                </div>
            </div>
            <button onclick="ToolsEngine.nextCard()" style="margin-top:30px; background:#1e293b; color:white; border:none; padding:15px 40px; border-radius:50px; font-size:16px; font-weight:800; cursor:pointer; box-shadow:0 10px 20px rgba(30,41,59,0.3);"><i class="fas fa-arrow-right"></i> Next Word</button>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
        this.loadCard();
    },
    loadCard: function() {
        let words = []; try{ words = vocabList; } catch(e){ words = [{w:"Error", m:"Missing File"}]; }
        if(this.currentIdx >= words.length) this.currentIdx = 0;
        document.getElementById('fc-en').innerText = words[this.currentIdx].w;
        document.getElementById('fc-bn').innerText = words[this.currentIdx].m;
        document.getElementById('fc-counter').innerText = 'Card ' + (this.currentIdx + 1) + ' of ' + words.length;
        document.getElementById('fc-card').style.transform = 'rotateY(0deg)';
    },
    flipCard: function() {
        const card = document.getElementById('fc-card');
        card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        if(navigator.vibrate) navigator.vibrate(50);
    },
    nextCard: function() { this.currentIdx++; this.loadCard(); },

    // ARCADE LOGIC
    arcadeScore: 0,
    arcadeTimer: null,
    arcadeTimeLeft: 30,
    currentWordItem: null,

    startArcadeTest: function() {
        localStorage.setItem('lastVocabPlay', Date.now()); 
        this.renderHeader('Vocab Arcade', 'Type fast. Score high!');
        this.arcadeScore = 0;
        
        const html = `
        <div class="fade-in" style="padding:20px; text-align:center;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <div style="font-weight:800; color:#3b82f6; font-size:18px;">Score: <span id="arc-score">0</span></div>
                <div style="font-weight:900; color:white; background:#ef4444; padding:6px 16px; border-radius:50px; font-size:16px;"><i class="fas fa-clock"></i> <span id="arc-time">30</span>s</div>
            </div>
            
            <div style="background:white; padding:40px 20px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border:2px solid transparent;" id="arc-box">
                <div style="font-size:12px; color:#64748b; font-weight:800; margin-bottom:10px; letter-spacing:1px;">TRANSLATE TO ENGLISH</div>
                <div id="arc-bengali" style="font-size:32px; font-weight:800; color:#1e293b; margin-bottom:25px;">Loading...</div>
                <input type="text" id="arc-input" onkeypress="ToolsEngine.checkArcadeEnter(event)" placeholder="Type english word..." autocomplete="off" spellcheck="false" style="width:100%; padding:15px; border-radius:12px; border:2px solid #e2e8f0; font-size:18px; text-align:center; font-weight:800; outline:none; font-family:inherit;">
                <div id="arc-feedback" style="min-height:24px; margin-top:15px; font-weight:800; font-size:15px;"></div>
            </div>
            <button onclick="ToolsEngine.checkArcadeAnswer()" style="width:100%; background:#1e293b; color:white; border:none; padding:15px; border-radius:50px; font-size:16px; font-weight:800; cursor:pointer; margin-top:20px;">Submit Answer</button>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
        this.nextArcadeWord();
    },
    nextArcadeWord: function() {
        clearInterval(this.arcadeTimer);
        this.arcadeTimeLeft = 30;
        document.getElementById('arc-time').innerText = this.arcadeTimeLeft;
        
        const input = document.getElementById('arc-input');
        input.value = ''; input.disabled = false; input.focus();
        document.getElementById('arc-feedback').innerText = '';
        document.getElementById('arc-input').style.borderColor = '#e2e8f0';
        
        let words = []; try { words = vocabList; } catch(e) { words = [{w:"Error", m:"Missing vocab.js"}]; }
        this.currentWordItem = words[Math.floor(Math.random() * words.length)];
        document.getElementById('arc-bengali').innerText = this.currentWordItem.m;
        
        this.arcadeTimer = setInterval(() => {
            this.arcadeTimeLeft--;
            document.getElementById('arc-time').innerText = this.arcadeTimeLeft;
            if(this.arcadeTimeLeft <= 0) {
                clearInterval(this.arcadeTimer);
                this.arcadeTimeOut();
            }
        }, 1000);
    },
    checkArcadeEnter: function(e) { if(e.key === 'Enter') this.checkArcadeAnswer(); },
    checkArcadeAnswer: function() {
        clearInterval(this.arcadeTimer);
        const inputEl = document.getElementById('arc-input');
        const ans = inputEl.value.trim().toLowerCase();
        const correctWord = this.currentWordItem.w.toLowerCase();
        const feedback = document.getElementById('arc-feedback');
        inputEl.disabled = true;

        if(ans === correctWord) {
            this.arcadeScore += 10;
            document.getElementById('arc-score').innerText = this.arcadeScore;
            inputEl.style.borderColor = '#10b981';
            feedback.innerHTML = `<span style="color:#10b981;"><i class="fas fa-check-circle"></i> Brilliant!</span>`;
        } else {
            inputEl.style.borderColor = '#ef4444';
            feedback.innerHTML = `<span style="color:#ef4444;"><i class="fas fa-times-circle"></i> It was: <b>${this.currentWordItem.w}</b></span>`;
            if(navigator.vibrate) navigator.vibrate(200);
        }
        setTimeout(() => { this.nextArcadeWord(); }, 1500);
    },
    arcadeTimeOut: function() {
        const inputEl = document.getElementById('arc-input');
        const feedback = document.getElementById('arc-feedback');
        inputEl.disabled = true; inputEl.style.borderColor = '#f59e0b';
        
        let currentHigh = parseInt(localStorage.getItem('vocabHighScore')) || 0;
        if(this.arcadeScore > currentHigh) {
            localStorage.setItem('vocabHighScore', this.arcadeScore);
            feedback.innerHTML = `<span style="color:#10b981;"><i class="fas fa-trophy"></i> NEW HIGH SCORE: ${this.arcadeScore}!</span>`;
        } else {
            feedback.innerHTML = `<span style="color:#f59e0b;"><i class="fas fa-clock"></i> Time's up! It was: <b>${this.currentWordItem.w}</b></span>`;
        }
        if(navigator.vibrate) navigator.vibrate([100, 100, 100]);
        setTimeout(() => { this.nextArcadeWord(); }, 2500);
    },

    // --- 3. UPGRADED POMODORO TIMER ---
    studyTimerInterval: null,
    studyTimeLeft: 25 * 60,
    isTimerRunning: false,

    openStudyTimer: function() {
        this.renderHeader('Study Timer', 'Focus mode');
        if(this.studyTimerInterval) clearInterval(this.studyTimerInterval);
        this.isTimerRunning = false;
        this.studyTimeLeft = 25 * 60; 

        const html = `
        <div class="fade-in" style="padding:20px;">
            <div style="background:white; border-radius:24px; padding:30px; text-align:center; box-shadow:0 10px 30px rgba(0,0,0,0.05); border:1px solid #e2e8f0;">
                <div style="display:flex; justify-content:center; gap:10px; margin-bottom:20px;">
                    <button onclick="ToolsEngine.setTimer(25)" style="flex:1; background:#f1f5f9; border:none; padding:10px; border-radius:10px; font-weight:700; color:#475569; cursor:pointer;">25 Min</button>
                    <button onclick="ToolsEngine.setTimer(50)" style="flex:1; background:#f1f5f9; border:none; padding:10px; border-radius:10px; font-weight:700; color:#475569; cursor:pointer;">50 Min</button>
                    <button onclick="ToolsEngine.setTimer(5)" style="flex:1; background:#f1f5f9; border:none; padding:10px; border-radius:10px; font-weight:700; color:#475569; cursor:pointer;">Break</button>
                </div>
                
                <div style="width:200px; height:200px; border-radius:50%; border:8px solid #3b82f6; display:flex; align-items:center; justify-content:center; margin:0 auto 25px; box-shadow:0 15px 35px rgba(59,130,246,0.2);">
                    <div id="studyTimerDisplay" style="font-size:45px; font-weight:800; color:#1e293b; font-family:'Outfit';">25:00</div>
                </div>

                <div style="display:flex; justify-content:center; gap:15px;">
                    <button id="timerBtn" onclick="ToolsEngine.toggleStudyTimer()" style="background:#10b981; color:white; width:60px; height:60px; border-radius:50%; border:none; font-size:20px; cursor:pointer; box-shadow:0 10px 20px rgba(16,185,129,0.3);"><i class="fas fa-play" id="play-icon"></i></button>
                    <button onclick="ToolsEngine.setTimer(25)" style="background:#ef4444; color:white; width:60px; height:60px; border-radius:50%; border:none; font-size:20px; cursor:pointer; box-shadow:0 10px 20px rgba(239,68,68,0.3);"><i class="fas fa-redo"></i></button>
                </div>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
    },
    setTimer: function(mins) {
        clearInterval(this.studyTimerInterval);
        this.isTimerRunning = false;
        this.studyTimeLeft = mins * 60;
        document.getElementById('play-icon').className = "fas fa-play";
        document.getElementById('timerBtn').style.background = "#10b981";
        this.updateTimerDisplay();
    },
    toggleStudyTimer: function() {
        const btn = document.getElementById('timerBtn');
        const icon = document.getElementById('play-icon');
        if(this.isTimerRunning) {
            clearInterval(this.studyTimerInterval);
            this.isTimerRunning = false;
            icon.className = "fas fa-play";
            btn.style.background = "#10b981";
        } else {
            this.isTimerRunning = true;
            icon.className = "fas fa-pause";
            btn.style.background = "#f59e0b";
            
            this.studyTimerInterval = setInterval(() => {
                if(this.studyTimeLeft > 0) {
                    this.studyTimeLeft--;
                    this.updateTimerDisplay();
                } else {
                    clearInterval(this.studyTimerInterval);
                    this.isTimerRunning = false;
                    icon.className = "fas fa-check";
                    btn.style.background = "#3b82f6";
                    if(navigator.vibrate) navigator.vibrate([500, 500, 500]);
                    alert("Time's Up! Great focus session.");
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

    // --- YOUR ORIGINAL UNTOUCHED FEATURES ---
    openSuggestions: function() {
        this.renderHeader('Exam Blueprint', 'Top Suggestions');
        let html = `<div class="fade-in" style="padding:20px;">`;
        html += `<div style="background:linear-gradient(135deg, #3b82f6, #1d4ed8); padding:20px; border-radius:20px; color:white; margin-bottom:15px;"><h3 style="margin:0;">60 Marks Blueprint</h3></div>`;
        try {
            suggestionData.tips_60.forEach(tip => {
                html += `<div style="background:white; border-radius:16px; padding:15px; margin-bottom:12px; border-left:5px solid #3b82f6;"><b>${tip.title}</b><p style="font-size:13px; margin-top:5px;">${tip.content}</p></div>`;
            });
        } catch(e) {}
        document.getElementById('app-container').innerHTML = html + `</div>`;
    },

    openCountdown: function() {
        this.renderHeader('Exam Countdown', 'Time is ticking!');
        const savedDate = localStorage.getItem('examDate');
        let displayHtml = '';
        if(savedDate) {
            displayHtml = `<div style="text-align:center; padding:40px 20px; background:linear-gradient(135deg, #f43f5e, #be123c); color:white; border-radius:24px;"><div id="cnt-box" style="font-size:35px; font-weight:800;">${this.calculateTime(savedDate)}</div><button onclick="localStorage.removeItem('examDate'); ToolsEngine.openCountdown()" style="margin-top:20px; padding:8px 20px; border-radius:50px; border:none;">Reset Date</button></div>`;
            if(this.examTimerInterval) clearInterval(this.examTimerInterval);
            this.examTimerInterval = setInterval(() => {
                const b = document.getElementById('cnt-box');
                if(b) b.innerHTML = ToolsEngine.calculateTime(savedDate);
            }, 1000);
        } else {
            displayHtml = `<div style="padding:30px; background:white; border-radius:20px; text-align:center;"><h3>When is your Exam?</h3><input type="date" id="examDateInput" style="width:100%; padding:15px; margin:15px 0;"><button onclick="ToolsEngine.saveDate()" style="background:#f43f5e; color:white; padding:12px 30px; border-radius:50px; border:none;">Start Countdown</button></div>`;
        }
        document.getElementById('app-container').innerHTML = `<div class="fade-in" style="padding:20px;">${displayHtml}</div>`;
    },
    saveDate: function() { const date = document.getElementById('examDateInput').value; if(date) { localStorage.setItem('examDate', date); this.openCountdown(); } },
    calculateTime: function(dateStr) {
        const dist = new Date(dateStr).getTime() - new Date().getTime();
        if (dist < 0) return "EXAM STARTED!";
        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        return `${d}d ${h}h ${Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60))}m`;
    },

    openWriter: function() {
        this.renderHeader('Write Check', 'Word Counter');
        document.getElementById('app-container').innerHTML = `
        <div class="fade-in" style="padding:20px;">
            <textarea id="writeArea" oninput="document.getElementById('wc').innerText = this.value.split(/\\s+/).filter(w => w.length > 0).length" style="width:100%; height:200px; padding:20px; border-radius:20px; border:2px solid #e2e8f0; font-family:inherit; font-size:15px; outline:none;"></textarea>
            <div style="margin-top:10px; font-weight:800; color:#3b82f6;">Words: <span id="wc">0</span></div>
        </div>`;
    }
};
