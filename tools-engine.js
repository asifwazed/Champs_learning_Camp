/* tools-engine.js - The Premium Utility Belt */

const ToolsEngine = {
    
    init: function() {
        this.renderHeader('Utility Belt', 'Productivity & Tools');
        this.renderMainMenu();
    },

    renderHeader: function(title, sub) {
        document.getElementById('header-slot').innerHTML = `
            <div class="header">
                <a href="#" onclick="ToolsEngine.handleBack(); return false;" class="back-btn magnet-element"><i class="fas fa-arrow-left"></i></a>
                <div class="header-title-box">
                    <h2 class="header-title">${title}</h2>
                    <div class="header-sub">${sub}</div>
                </div>
            </div>`;
    },

    handleBack: function() {
        // If we are already on the main menu, go to dashboard. Otherwise, go back to main menu.
        const container = document.getElementById('app-container');
        if(container.innerHTML.includes('Vocab Arcade')) {
            window.location.href = 'index.html';
        } else {
            this.init();
        }
    },

    renderMainMenu: function() {
        const html = `
        <div class="tool-grid fade-in">
            <div class="tool-card magnet-element" onclick="ToolsEngine.openFlashcards()">
                <div class="tc-icon t-blue"><i class="fas fa-gamepad"></i></div>
                <div class="tc-title">Vocab Hub</div>
                <div class="tc-sub">Arcade & Flashcards</div>
            </div>
            <div class="tool-card magnet-element" onclick="ToolsEngine.openStudyTimer()">
                <div class="tc-icon t-rose"><i class="fas fa-clock"></i></div>
                <div class="tc-title">Pomodoro</div>
                <div class="tc-sub">Focus Study Timer</div>
            </div>
            <div class="tool-card magnet-element" onclick="ToolsEngine.openGPA()">
                <div class="tc-icon t-green"><i class="fas fa-calculator"></i></div>
                <div class="tc-title">GPA Calc</div>
                <div class="tc-sub">Predict HSC Result</div>
            </div>
            <div class="tool-card magnet-element" onclick="ToolsEngine.openSuggestions()">
                <div class="tc-icon t-gold"><i class="fas fa-crown"></i></div>
                <div class="tc-title">Suggestions</div>
                <div class="tc-sub">Board Blueprints</div>
            </div>
            <div class="tool-card magnet-element" onclick="ToolsEngine.openCountdown()">
                <div class="tc-icon t-teal"><i class="fas fa-hourglass-half"></i></div>
                <div class="tc-title">Countdown</div>
                <div class="tc-sub">Exam Day Tracker</div>
            </div>
            <div class="tool-card magnet-element" onclick="ToolsEngine.openWriter()">
                <div class="tc-icon t-purple"><i class="fas fa-magic"></i></div>
                <div class="tc-title">AI Essay Studio</div>
                <div class="tc-sub">Grade & Count Words</div>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    // --- 1. PREMIUM GPA CALCULATOR ---
    openGPA: function() {
        this.renderHeader('GPA Calculator', 'Predict your future');
        const html = `
        <div class="fade-in" style="padding:20px;">
            <div style="background:white; padding:30px 20px; border-radius:24px; box-shadow:0 15px 40px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
                
                <div style="display:flex; align-items:center; gap:15px; margin-bottom:25px; background:#f8fafc; padding:15px; border-radius:16px; border:1px solid #e2e8f0;">
                    <div style="background:#dbeafe; color:#3b82f6; width:40px; height:40px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:20px;"><i class="fas fa-users"></i></div>
                    <div style="flex-grow:1;">
                        <label style="font-size:11px; font-weight:800; color:#64748b; letter-spacing:1px;">SELECT GROUP</label>
                        <select id="group-select" onchange="ToolsEngine.updateSubjects()" style="width:100%; border:none; background:transparent; font-weight:800; font-family:'Outfit'; font-size:18px; color:#1e293b; outline:none; margin-top:2px;">
                            <option value="sci">Science</option>
                            <option value="bus">Business Studies</option>
                            <option value="hum">Humanities</option>
                        </select>
                    </div>
                </div>
                
                <div id="subject-list" style="display:flex; flex-direction:column; gap:10px;"></div>
                
                <button class="magnet-element" onclick="ToolsEngine.calculateGPA()" style="width:100%; background:linear-gradient(135deg, #10b981, #059669); color:white; padding:18px; border:none; border-radius:16px; font-family:'Outfit'; font-weight:800; font-size:16px; margin-top:25px; box-shadow:0 10px 25px rgba(16, 185, 129, 0.3);">Calculate Result <i class="fas fa-check-double" style="margin-left:5px;"></i></button>

                <div id="result-box" style="text-align:center; margin-top:25px; display:none; background:linear-gradient(135deg, #1e293b, #0f172a); padding:30px 20px; border-radius:20px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 20px 40px rgba(0,0,0,0.2);">
                    <div style="font-size:12px; font-weight:800; color:#38bdf8; letter-spacing:2px;">EXPECTED HSC GPA</div>
                    <div id="final-gpa" style="font-size:55px; font-family:'Outfit'; font-weight:800; color:white; margin:5px 0 10px;">0.00</div>
                    <div id="gpa-comment" style="font-size:15px; font-weight:700; color:#a7f3d0; background:rgba(16,185,129,0.1); padding:10px; border-radius:12px; display:inline-block;"></div>
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
            <div style="display:flex; justify-content:space-between; align-items:center; background:#f8fafc; padding:15px 20px; border-radius:16px; border:1px solid #e2e8f0;">
                <div style="font-size:15px; font-weight:800; color:#334155;">${sub}</div>
                <select class="mark-input" style="padding:8px 12px; border-radius:10px; border:2px solid #cbd5e1; font-weight:800; font-family:inherit; outline:none; background:white; color:#1e293b;">${gradesHTML}</select>
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
            finalGpaTxt.innerText = "FAILED";
            finalGpaTxt.style.color = "#ef4444";
            commentTxt.innerHTML = "<i class='fas fa-exclamation-triangle'></i> You failed a subject. Keep pushing!";
            commentTxt.style.color = "#fca5a5"; commentTxt.style.background = "rgba(239,68,68,0.1)";
        } else {
            finalGpaTxt.innerText = gpa.toFixed(2);
            finalGpaTxt.style.color = (gpa === 5.0) ? "#fcd34d" : "white";
            if(gpa === 5.0) {
                commentTxt.innerHTML = "<i class='fas fa-trophy'></i> Golden A+! Absolute Masterclass!";
                commentTxt.style.color = "#fcd34d"; commentTxt.style.background = "rgba(245,158,11,0.1)";
            } else if(gpa >= 4.0) {
                commentTxt.innerHTML = "<i class='fas fa-star'></i> Excellent! You are Varsity material.";
                commentTxt.style.color = "#6ee7b7"; commentTxt.style.background = "rgba(16,185,129,0.1)";
            } else {
                commentTxt.innerHTML = "<i class='fas fa-arrow-up'></i> Good job, but let's aim higher!";
                commentTxt.style.color = "#93c5fd"; commentTxt.style.background = "rgba(59,130,246,0.1)";
            }
        }
        resultBox.scrollIntoView({ behavior: 'smooth' });
    },

    // --- 2. PREMIUM VOCAB ARCADE & FLASHCARDS ---
    openFlashcards: function() {
        this.renderHeader('Vocab Hub', 'Flashcards & Arcade');
        const html = `
        <div class="fade-in" style="padding:20px; display:flex; flex-direction:column; gap:15px;">
            <div class="magnet-element" style="background:linear-gradient(135deg, #3b82f6, #2563eb); padding:30px 25px; border-radius:24px; color:white; box-shadow:0 15px 30px rgba(59,130,246,0.3);" onclick="ToolsEngine.startFlashcardLearn()">
                <div style="background:rgba(255,255,255,0.2); width:50px; height:50px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:24px; margin-bottom:15px;"><i class="fas fa-layer-group"></i></div>
                <h3 style="margin:0; font-family:'Outfit'; font-size:22px; font-weight:800;">Learn Words</h3>
                <p style="margin:5px 0 0; font-size:14px; opacity:0.9;">Study the database with 3D flip cards.</p>
            </div>
            
            <div class="magnet-element" style="background:linear-gradient(135deg, #f43f5e, #be123c); padding:30px 25px; border-radius:24px; color:white; box-shadow:0 15px 30px rgba(244,63,94,0.3);" onclick="ToolsEngine.startArcadeTest()">
                <div style="background:rgba(255,255,255,0.2); width:50px; height:50px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:24px; margin-bottom:15px;"><i class="fas fa-bolt"></i></div>
                <h3 style="margin:0; font-family:'Outfit'; font-size:22px; font-weight:800;">Vocab Arcade</h3>
                <p style="margin:5px 0 0; font-size:14px; opacity:0.9;">Test your speed & memory under pressure.</p>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    currentIdx: 0,
    startFlashcardLearn: function() {
        this.renderHeader('Flashcards', 'Tap card to flip');
        this.currentIdx = 0;
        const html = `
        <div class="fade-in" style="padding:20px; perspective:1000px; display:flex; flex-direction:column; align-items:center;">
            <div style="font-weight:800; color:#64748b; margin-bottom:15px; letter-spacing:1px; font-size:13px;" id="fc-counter">CARD 1</div>
            
            <div id="fc-card" onclick="ToolsEngine.flipCard()" style="width:100%; max-width:340px; height:250px; position:relative; transform-style:preserve-3d; transition:transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); cursor:pointer; box-shadow:0 20px 40px rgba(0,0,0,0.1); border-radius:24px;">
                <div style="position:absolute; width:100%; height:100%; backface-visibility:hidden; background:white; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; border:2px solid #e2e8f0;">
                    <span style="color:#94a3b8; font-size:12px; font-weight:800; letter-spacing:2px; margin-bottom:15px;"><i class="fas fa-language"></i> ENGLISH</span>
                    <span id="fc-en" style="font-size:36px; font-weight:800; color:#1e293b; font-family:'Outfit'; text-transform:capitalize;">...</span>
                </div>
                <div style="position:absolute; width:100%; height:100%; backface-visibility:hidden; background:linear-gradient(135deg,#3b82f6,#2563eb); color:white; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; transform:rotateY(180deg); border:2px solid #60a5fa;">
                    <span style="opacity:0.8; font-size:12px; font-weight:800; letter-spacing:2px; margin-bottom:15px;">BENGALI MEANING</span>
                    <span id="fc-bn" style="font-size:32px; font-weight:800; margin-bottom:10px; text-align:center; padding:0 20px;">...</span>
                </div>
            </div>

            <div style="display:flex; gap:15px; margin-top:30px; width:100%; max-width:340px;">
                <button class="magnet-element" onclick="ToolsEngine.prevCard()" style="flex:1; background:white; color:#475569; border:2px solid #e2e8f0; padding:18px; border-radius:16px; font-size:18px; font-weight:800;"><i class="fas fa-arrow-left"></i></button>
                <button class="magnet-element" onclick="ToolsEngine.nextCard()" style="flex:2; background:#1e293b; color:white; border:none; padding:18px; border-radius:16px; font-size:16px; font-weight:800; font-family:'Outfit'; box-shadow:0 10px 20px rgba(30,41,59,0.3);">Next Word <i class="fas fa-arrow-right" style="margin-left:5px;"></i></button>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
        this.loadCard();
    },
    loadCard: function() {
        let words = []; try{ words = vocabList; } catch(e){ words = [{w:"Error", m:"Missing File"}]; }
        if(this.currentIdx >= words.length) this.currentIdx = 0;
        if(this.currentIdx < 0) this.currentIdx = words.length - 1;
        document.getElementById('fc-en').innerText = words[this.currentIdx].w;
        document.getElementById('fc-bn').innerText = words[this.currentIdx].m;
        document.getElementById('fc-counter').innerText = `CARD ${this.currentIdx + 1} OF ${words.length}`;
        document.getElementById('fc-card').style.transform = 'rotateY(0deg)';
    },
    flipCard: function() {
        const card = document.getElementById('fc-card');
        card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        if(navigator.vibrate) navigator.vibrate(50);
    },
    nextCard: function() { this.currentIdx++; this.loadCard(); },
    prevCard: function() { this.currentIdx--; this.loadCard(); },

    // ARCADE LOGIC
    arcadeScore: 0,
    arcadeTimer: null,
    arcadeTimeLeft: 30,
    currentWordItem: null,

    startArcadeTest: function() {
        localStorage.setItem('lastVocabPlay', Date.now()); 
        this.renderHeader('Vocab Arcade', 'Neon survival mode');
        this.arcadeScore = 0;
        
        const html = `
        <div class="fade-in" style="padding:20px; text-align:center;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; background:#1e293b; padding:15px 20px; border-radius:16px; color:white;">
                <div style="font-weight:800; font-family:'Outfit'; font-size:18px;"><i class="fas fa-star" style="color:#fcd34d;"></i> Score: <span id="arc-score">0</span></div>
                <div style="font-weight:900; color:#ef4444; font-size:18px;"><i class="fas fa-clock"></i> <span id="arc-time">30</span>s</div>
            </div>
            
            <div style="background:white; padding:40px 20px; border-radius:24px; box-shadow:0 15px 40px rgba(0,0,0,0.08); border:3px solid transparent; transition:0.3s;" id="arc-box">
                <div style="font-size:12px; color:#64748b; font-weight:800; margin-bottom:15px; letter-spacing:2px;">TRANSLATE TO ENGLISH</div>
                <div id="arc-bengali" style="font-size:35px; font-weight:800; color:#1e293b; margin-bottom:30px; font-family:'Outfit';">Loading...</div>
                <input type="text" id="arc-input" onkeypress="ToolsEngine.checkArcadeEnter(event)" placeholder="Type english word..." autocomplete="off" spellcheck="false" style="width:100%; padding:18px; border-radius:16px; border:2px solid #cbd5e1; font-size:20px; text-align:center; font-weight:800; outline:none; font-family:inherit; color:#1e293b; background:#f8fafc; transition:0.2s;">
                <div id="arc-feedback" style="min-height:24px; margin-top:20px; font-weight:800; font-size:16px;"></div>
            </div>
            
            <button class="magnet-element" onclick="ToolsEngine.checkArcadeAnswer()" style="width:100%; background:linear-gradient(135deg, #f43f5e, #be123c); color:white; border:none; padding:20px; border-radius:16px; font-size:18px; font-weight:800; font-family:'Outfit'; cursor:pointer; margin-top:20px; box-shadow:0 10px 25px rgba(244,63,94,0.3);">Submit Answer <i class="fas fa-bolt" style="margin-left:5px;"></i></button>
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
        document.getElementById('arc-box').style.borderColor = 'transparent';
        input.style.borderColor = '#cbd5e1';
        
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
        const boxEl = document.getElementById('arc-box');
        const ans = inputEl.value.trim().toLowerCase();
        const correctWord = this.currentWordItem.w.toLowerCase();
        const feedback = document.getElementById('arc-feedback');
        inputEl.disabled = true;

        if(ans === correctWord) {
            this.arcadeScore += 10;
            document.getElementById('arc-score').innerText = this.arcadeScore;
            boxEl.style.borderColor = '#10b981';
            inputEl.style.borderColor = '#10b981';
            inputEl.style.background = '#ecfdf5';
            inputEl.style.color = '#10b981';
            feedback.innerHTML = `<span style="color:#10b981;"><i class="fas fa-check-circle"></i> +10 Points!</span>`;
            if(navigator.vibrate) navigator.vibrate(50);
        } else {
            boxEl.style.borderColor = '#ef4444';
            inputEl.style.borderColor = '#ef4444';
            inputEl.style.background = '#fef2f2';
            inputEl.style.color = '#ef4444';
            feedback.innerHTML = `<span style="color:#ef4444;"><i class="fas fa-times-circle"></i> It was: <b style="font-size:20px; font-family:'Outfit'; text-transform:uppercase;">${this.currentWordItem.w}</b></span>`;
            if(navigator.vibrate) navigator.vibrate([100, 50, 100]);
        }
        setTimeout(() => { this.nextArcadeWord(); }, 1500);
    },
    arcadeTimeOut: function() {
        const inputEl = document.getElementById('arc-input');
        const boxEl = document.getElementById('arc-box');
        const feedback = document.getElementById('arc-feedback');
        inputEl.disabled = true; 
        boxEl.style.borderColor = '#f59e0b';
        
        let currentHigh = parseInt(localStorage.getItem('vocabHighScore')) || 0;
        if(this.arcadeScore > currentHigh) {
            localStorage.setItem('vocabHighScore', this.arcadeScore);
            feedback.innerHTML = `<span style="color:#10b981;"><i class="fas fa-trophy"></i> NEW HIGH SCORE: ${this.arcadeScore}!</span>`;
        } else {
            feedback.innerHTML = `<span style="color:#f59e0b;"><i class="fas fa-clock"></i> Time's up! It was: <b style="font-size:20px; font-family:'Outfit'; text-transform:uppercase;">${this.currentWordItem.w}</b></span>`;
        }
        if(navigator.vibrate) navigator.vibrate([150, 150, 150]);
        setTimeout(() => { this.nextArcadeWord(); }, 2500);
    },

    // --- 3. PREMIUM POMODORO TIMER ---
    studyTimerInterval: null,
    studyTimeLeft: 25 * 60,
    isTimerRunning: false,

    openStudyTimer: function() {
        this.renderHeader('Pomodoro Timer', 'Deep focus mode');
        if(this.studyTimerInterval) clearInterval(this.studyTimerInterval);
        this.isTimerRunning = false;
        this.studyTimeLeft = 25 * 60; 

        const html = `
        <div class="fade-in" style="padding:20px;">
            <div style="background:white; border-radius:24px; padding:40px 20px; text-align:center; box-shadow:0 15px 40px rgba(0,0,0,0.05); border:1px solid #e2e8f0; position:relative; overflow:hidden;">
                
                <div style="display:flex; justify-content:center; gap:10px; margin-bottom:40px; position:relative; z-index:2;">
                    <button class="magnet-element" onclick="ToolsEngine.setTimer(25)" style="flex:1; background:#eff6ff; color:#3b82f6; border:1px solid #bfdbfe; padding:12px; border-radius:12px; font-weight:800; cursor:pointer;">25 Min</button>
                    <button class="magnet-element" onclick="ToolsEngine.setTimer(50)" style="flex:1; background:#f5f3ff; color:#8b5cf6; border:1px solid #ddd6fe; padding:12px; border-radius:12px; font-weight:800; cursor:pointer;">50 Min</button>
                    <button class="magnet-element" onclick="ToolsEngine.setTimer(5)" style="flex:1; background:#ecfdf5; color:#10b981; border:1px solid #a7f3d0; padding:12px; border-radius:12px; font-weight:800; cursor:pointer;">Break</button>
                </div>
                
                <div id="timer-ring" style="width:240px; height:240px; border-radius:50%; border:10px solid #e2e8f0; display:flex; align-items:center; justify-content:center; margin:0 auto 40px; position:relative; z-index:2; transition:0.3s;">
                    <div id="studyTimerDisplay" style="font-size:60px; font-weight:800; color:#1e293b; font-family:'Outfit'; letter-spacing:-2px;">25:00</div>
                </div>

                <div style="display:flex; justify-content:center; gap:20px; position:relative; z-index:2;">
                    <button id="timerBtn" class="magnet-element" onclick="ToolsEngine.toggleStudyTimer()" style="background:linear-gradient(135deg, #10b981, #059669); color:white; width:75px; height:75px; border-radius:50%; border:none; font-size:26px; cursor:pointer; box-shadow:0 15px 30px rgba(16,185,129,0.3); display:flex; align-items:center; justify-content:center;"><i class="fas fa-play" id="play-icon" style="margin-left:5px;"></i></button>
                    
                    <button class="magnet-element" onclick="ToolsEngine.setTimer(25)" style="background:white; color:#ef4444; width:75px; height:75px; border-radius:50%; border:2px solid #fee2e2; font-size:22px; cursor:pointer; box-shadow:0 10px 20px rgba(239,68,68,0.1);"><i class="fas fa-redo"></i></button>
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
        document.getElementById('play-icon').style.marginLeft = "5px";
        document.getElementById('timerBtn').style.background = "linear-gradient(135deg, #10b981, #059669)";
        document.getElementById('timerBtn').style.boxShadow = "0 15px 30px rgba(16,185,129,0.3)";
        document.getElementById('timer-ring').classList.remove('timer-running');
        this.updateTimerDisplay();
    },
    toggleStudyTimer: function() {
        const btn = document.getElementById('timerBtn');
        const icon = document.getElementById('play-icon');
        const ring = document.getElementById('timer-ring');
        
        if(this.isTimerRunning) {
            clearInterval(this.studyTimerInterval);
            this.isTimerRunning = false;
            icon.className = "fas fa-play";
            icon.style.marginLeft = "5px";
            btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
            btn.style.boxShadow = "0 15px 30px rgba(16,185,129,0.3)";
            ring.classList.remove('timer-running');
        } else {
            this.isTimerRunning = true;
            icon.className = "fas fa-pause";
            icon.style.marginLeft = "0";
            btn.style.background = "linear-gradient(135deg, #f59e0b, #d97706)";
            btn.style.boxShadow = "0 15px 30px rgba(245,158,11,0.3)";
            ring.classList.add('timer-running');
            
            this.studyTimerInterval = setInterval(() => {
                if(this.studyTimeLeft > 0) {
                    this.studyTimeLeft--;
                    this.updateTimerDisplay();
                } else {
                    clearInterval(this.studyTimerInterval);
                    this.isTimerRunning = false;
                    icon.className = "fas fa-check";
                    btn.style.background = "linear-gradient(135deg, #3b82f6, #2563eb)";
                    ring.classList.remove('timer-running');
                    if(navigator.vibrate) navigator.vibrate([500, 200, 500, 200, 500]);
                    alert("⏰ Time's Up! Great focus session. Take a break.");
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

    // --- 4. PREMIUM AI ESSAY STUDIO (REPLACES WRITE CHECK) ---
    openWriter: function() {
        this.renderHeader('AI Essay Studio', 'Write & Grade');
        document.getElementById('app-container').innerHTML = `
        <div class="fade-in" style="padding:20px;">
            <div style="background:linear-gradient(135deg, #1e293b, #0f172a); padding:25px; border-radius:24px; box-shadow:0 15px 40px rgba(0,0,0,0.2); position:relative; border:1px solid rgba(255,255,255,0.05);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                    <h3 style="font-family:'Outfit'; font-size:18px; color:white; margin:0;"><i class="fas fa-robot" style="color:#60a5fa; margin-right:8px;"></i> Mini Champ Grader</h3>
                    <div style="background:rgba(255,255,255,0.1); color:#38bdf8; padding:5px 12px; border-radius:50px; font-size:12px; font-weight:800;"><span id="wc">0</span> WORDS</div>
                </div>
                
                <textarea id="ai-essay-input" oninput="document.getElementById('wc').innerText = this.value.split(/\\s+/).filter(w => w.length > 0).length" placeholder="Start writing your paragraph or story here. The AI will scan it, grade it out of 10, and fix your grammar mistakes..." style="width:100%; height:250px; padding:20px; border-radius:16px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.3); color:white; outline:none; font-family:inherit; font-size:15px; resize:vertical; line-height:1.7;"></textarea>
                
                <button class="magnet-element" onclick="ToolsEngine.gradeWithAI()" style="width:100%; background:linear-gradient(135deg, #3b82f6, #2563eb); color:white; border:none; padding:18px; border-radius:16px; font-weight:800; font-size:16px; margin-top:20px; cursor:pointer; box-shadow:0 10px 25px rgba(59, 130, 246, 0.3); font-family:'Outfit'; display:flex; justify-content:center; align-items:center; gap:8px;">
                    <i class="fas fa-magic"></i> Analyze with AI
                </button>
            </div>
        </div>`;
    },

    gradeWithAI: function() {
        const text = document.getElementById('ai-essay-input').value.trim();
        if(!text) {
            alert("You can't submit an empty paper! Write something first.");
            return;
        }

        const prompt = `I have written an essay. Please act as a strict HSC board examiner. \n1. Give it a score out of 10.\n2. Point out my biggest grammar mistakes.\n3. Give me one specific tip to improve.\n\nHere is my writing: "${text}"`;
        
        // Connect to Mini Champ Global Engine
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
    },

    // --- 5. SUGGESTIONS & COUNTDOWN ---
    openSuggestions: function() {
        this.renderHeader('Exam Blueprint', 'Top Suggestions');
        let html = `<div class="fade-in" style="padding:20px;">`;
        html += `<div style="background:linear-gradient(135deg, #f59e0b, #d97706); padding:25px; border-radius:24px; color:white; margin-bottom:20px; box-shadow:0 10px 25px rgba(245,158,11,0.3);"><h3 style="margin:0; font-family:'Outfit'; font-size:22px;"><i class="fas fa-crown"></i> 60 Marks Blueprint</h3><p style="margin:5px 0 0; font-size:13px; opacity:0.9;">Focus on these to secure maximum marks.</p></div>`;
        try {
            suggestionData.tips_60.forEach((tip, idx) => {
                html += `
                <div style="background:white; border-radius:20px; padding:20px; margin-bottom:15px; border-left:6px solid #f59e0b; box-shadow:0 5px 15px rgba(0,0,0,0.03);">
                    <div style="display:flex; align-items:center; gap:12px; margin-bottom:10px;">
                        <div style="background:#fffbeb; color:#d97706; width:30px; height:30px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:14px;">${idx+1}</div>
                        <b style="color:#1e293b; font-size:16px;">${tip.title}</b>
                    </div>
                    <p style="font-size:14px; color:#475569; line-height:1.6; margin:0;">${tip.content}</p>
                </div>`;
            });
        } catch(e) {}
        document.getElementById('app-container').innerHTML = html + `</div>`;
    },

    openCountdown: function() {
        this.renderHeader('Exam Countdown', 'Time is ticking!');
        const savedDate = localStorage.getItem('examDate');
        let displayHtml = '';
        if(savedDate) {
            displayHtml = `
            <div style="text-align:center; padding:50px 20px; background:linear-gradient(135deg, #1e293b, #0f172a); color:white; border-radius:24px; box-shadow:0 20px 40px rgba(0,0,0,0.2); position:relative; overflow:hidden;">
                <i class="fas fa-hourglass-half" style="position:absolute; top:-20px; right:-20px; font-size:120px; color:rgba(255,255,255,0.03);"></i>
                <div style="font-size:12px; font-weight:800; color:#38bdf8; letter-spacing:3px; margin-bottom:15px;">TIME UNTIL EXAM</div>
                <div id="cnt-box" style="font-size:45px; font-weight:800; font-family:'Outfit'; text-shadow:0 0 20px rgba(56, 189, 248, 0.4); line-height:1.2;">${this.calculateTime(savedDate)}</div>
                
                <button class="magnet-element" onclick="localStorage.removeItem('examDate'); ToolsEngine.openCountdown()" style="margin-top:40px; background:rgba(255,255,255,0.1); color:white; padding:12px 25px; border-radius:50px; border:1px solid rgba(255,255,255,0.2); font-weight:700; cursor:pointer;"><i class="fas fa-calendar-alt"></i> Change Date</button>
            </div>`;
            
            if(this.examTimerInterval) clearInterval(this.examTimerInterval);
            this.examTimerInterval = setInterval(() => {
                const b = document.getElementById('cnt-box');
                if(b) b.innerHTML = ToolsEngine.calculateTime(savedDate);
            }, 1000);
        } else {
            displayHtml = `
            <div style="padding:40px 25px; background:white; border-radius:24px; text-align:center; box-shadow:0 15px 40px rgba(0,0,0,0.05); border:1px solid #e2e8f0;">
                <div style="width:70px; height:70px; background:#eff6ff; color:#3b82f6; border-radius:20px; display:flex; align-items:center; justify-content:center; font-size:30px; margin:0 auto 20px;"><i class="fas fa-calendar-check"></i></div>
                <h3 style="font-family:'Outfit'; font-size:22px; color:#1e293b; margin-bottom:10px;">When is your Board Exam?</h3>
                <p style="font-size:14px; color:#64748b; margin-bottom:25px;">Set your target date to activate the pressure engine.</p>
                
                <input type="date" id="examDateInput" style="width:100%; padding:18px; border-radius:16px; border:2px solid #e2e8f0; font-family:inherit; font-weight:800; color:#1e293b; margin-bottom:20px; outline:none; font-size:16px;">
                
                <button class="magnet-element" onclick="ToolsEngine.saveDate()" style="background:linear-gradient(135deg, #3b82f6, #2563eb); color:white; width:100%; padding:18px; border-radius:16px; border:none; font-weight:800; font-family:'Outfit'; font-size:16px; cursor:pointer; box-shadow:0 10px 25px rgba(59,130,246,0.3);">Start Countdown <i class="fas fa-rocket" style="margin-left:5px;"></i></button>
            </div>`;
        }
        document.getElementById('app-container').innerHTML = `<div class="fade-in" style="padding:20px;">${displayHtml}</div>`;
    },
    saveDate: function() { const date = document.getElementById('examDateInput').value; if(date) { localStorage.setItem('examDate', date); this.openCountdown(); } },
    calculateTime: function(dateStr) {
        const dist = new Date(dateStr).getTime() - new Date().getTime();
        if (dist < 0) return "<span style='color:#ef4444;'>EXAM STARTED!</span>";
        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);
        return `${d}d <br> ${h}h ${m}m ${s}s`;
    }
};
