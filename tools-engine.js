/* tools-engine.js - Premium Utility Belt (Dual-Theme Ready & Fully Featured) */

const ToolsEngine = {
    currentView: 'menu', 
    
    init: function() {
        this.currentView = 'menu';
        this.injectSpecialStyles();
        this.renderHeader('Utility Belt', 'Productivity & Offline Tools');
        this.renderMainMenu();
    },

    injectSpecialStyles: function() {
        if(document.getElementById('special-tools-css')) return;
        const style = document.createElement('style');
        style.id = 'special-tools-css';
        style.innerHTML = `
            /* Zen Mode Styles (Overrides Dual Theme) */
            body.zen-mode { background: #020617 !important; transition: background 0.8s ease; }
            .zen-hidden { opacity: 0; pointer-events: none; transition: 0.5s; }
            .zen-ring { box-shadow: 0 0 50px rgba(56, 189, 248, 0.4), inset 0 0 30px rgba(56, 189, 248, 0.2); border-color: #38bdf8 !important; }
            
            /* Combo Animations */
            .combo-text { font-family: 'Outfit'; font-weight: 900; font-size: 24px; color: var(--gold); text-shadow: 0 0 15px rgba(245, 158, 11, 0.6); animation: popScale 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
            @keyframes popScale { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
            
            /* Shared inputs */
            .themed-input { width:100%; padding:18px; border-radius:16px; border:1px solid var(--border-color); background:var(--input-bg); color:var(--text-main); font-family:inherit; outline:none; font-size:16px; }
        `;
        document.head.appendChild(style);
    },

    renderHeader: function(title, sub) {
        document.getElementById('header-slot').innerHTML = `
            <div class="header" id="tools-header">
                <a href="#" onclick="ToolsEngine.handleBack(); return false;" class="back-btn magnet-element"><i class="fas fa-arrow-left"></i></a>
                <div class="header-title-box">
                    <h2 class="header-title">${title}</h2>
                    <div class="header-sub">${sub}</div>
                </div>
            </div>`;
    },

    handleBack: function() {
        if(this.currentView === 'menu') {
            window.location.href = 'index.html'; 
        } else {
            this.init(); 
        }
    },

    renderMainMenu: function() {
        this.currentView = 'menu';
        document.body.classList.remove('zen-mode');
        
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
            <div class="tool-card magnet-element" onclick="ToolsEngine.openNotes()">
                <div class="tc-icon t-cyan" style="background:rgba(6,182,212,0.1); color:var(--cyan);"><i class="fas fa-sticky-note"></i></div>
                <div class="tc-title">Smart Notes</div>
                <div class="tc-sub">Save your thoughts</div>
            </div>
            <div class="tool-card magnet-element col-full" onclick="ToolsEngine.openWriter()" style="flex-direction: row; align-items: center; gap: 15px; padding: 25px 20px;">
                <div class="tc-icon t-purple" style="margin: 0;"><i class="fas fa-keyboard"></i></div>
                <div style="flex-grow: 1; text-align: left;">
                    <h3 class="tc-title" style="font-size: 18px;">Offline Drafting Pad</h3>
                    <p class="tc-sub" style="font-size: 12px;">Write essays & count words safely.</p>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-sub);"></i>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    // ==========================================
    // 1. SMART NOTE MAKER (Glassmorphism Upgrade)
    // ==========================================
    openNotes: function() {
        this.currentView = 'notes';
        this.renderHeader('Note Maker', 'Your Personal Study Diary');
        
        let savedNotes = localStorage.getItem('champ_notes') || '';
        
        document.getElementById('app-container').innerHTML = `
        <div class="fade-in" style="padding:20px;">
            <div class="glass-panel" style="padding: 20px; border-radius: 20px; position: relative;">
                
                <div style="position:absolute; top:20px; left:-10px; width:20px; height:6px; background:var(--text-sub); border-radius:10px;"></div>
                <div style="position:absolute; top:60px; left:-10px; width:20px; height:6px; background:var(--text-sub); border-radius:10px;"></div>
                <div style="position:absolute; top:100px; left:-10px; width:20px; height:6px; background:var(--text-sub); border-radius:10px;"></div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; padding-left:15px;">
                    <div style="font-weight:800; color:var(--gold); font-family:'Outfit';"><i class="fas fa-pen"></i> Quick Notes</div>
                    <div id="save-status" style="font-size:11px; color:var(--cyan); font-weight:700;">Saved locally</div>
                </div>

                <textarea id="notes-input" oninput="ToolsEngine.autoSaveNote()" placeholder="Write down important grammar rules, vocab, or daily tasks here..." style="width:100%; height:400px; border:none; background:transparent; outline:none; font-family:inherit; font-size:16px; color:var(--text-main); resize:none; line-height:30px; background-image: linear-gradient(var(--border-color) 1px, transparent 1px); background-size: 100% 30px; padding: 0 15px;">${savedNotes}</textarea>
            </div>
            <button class="magnet-element" onclick="ToolsEngine.clearNotes()" style="width:100%; background:rgba(239,68,68,0.1); color:#ef4444; border:1px solid #fca5a5; padding:15px; border-radius:16px; font-weight:800; font-family:'Outfit'; font-size:15px; margin-top:20px; cursor:pointer;">Clear Notes <i class="fas fa-trash" style="margin-left:5px;"></i></button>
        </div>`;
    },

    saveTimeout: null,
    autoSaveNote: function() {
        let val = document.getElementById('notes-input').value;
        localStorage.setItem('champ_notes', val);
        document.getElementById('save-status').innerText = "Saving...";
        clearTimeout(this.saveTimeout);
        this.saveTimeout = setTimeout(() => {
            document.getElementById('save-status').innerText = "Saved locally";
        }, 1000);
    },

    clearNotes: function() {
        if(confirm("Are you sure you want to clear your notes?")) {
            document.getElementById('notes-input').value = '';
            localStorage.removeItem('champ_notes');
            document.getElementById('save-status').innerText = "Cleared";
        }
    },

    // ==========================================
    // 2. OFFLINE DRAFTING PAD
    // ==========================================
    openWriter: function() {
        this.currentView = 'writer';
        this.renderHeader('Drafting Pad', 'Word Counter & Offline Save');
        
        let savedEssay = localStorage.getItem('champ_essay') || '';
        let initialWC = savedEssay.split(/\s+/).filter(w => w.length > 0).length;

        document.getElementById('app-container').innerHTML = `
        <div class="fade-in" style="padding:20px;">
            <div class="glass-panel" style="padding:25px; border-radius:24px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                    <h3 style="font-family:'Outfit'; font-size:18px; color:var(--text-main); margin:0;"><i class="fas fa-keyboard" style="color:#c084fc;"></i> Editor</h3>
                    <div style="background:var(--input-bg); border:1px solid var(--border-color); color:#c084fc; padding:6px 14px; border-radius:50px; font-size:13px; font-weight:800;"><span id="wc">${initialWC}</span> WORDS</div>
                </div>
                <textarea id="essay-input" oninput="ToolsEngine.handleEssayInput(this)" placeholder="Start typing your essay or paragraph here. It will automatically save..." class="themed-input" style="height:300px; resize:none;">${savedEssay}</textarea>
            </div>
            <button class="magnet-element" onclick="ToolsEngine.copyEssay()" style="width:100%; background:#c084fc; color:white; border:none; padding:18px; border-radius:16px; font-weight:800; font-family:'Outfit'; font-size:16px; margin-top:20px; cursor:pointer; box-shadow:0 10px 25px rgba(192, 132, 252, 0.3);">Copy to Clipboard <i class="fas fa-copy" style="margin-left:5px;"></i></button>
        </div>`;
    },

    handleEssayInput: function(el) {
        let words = el.value.split(/\s+/).filter(w => w.length > 0).length;
        document.getElementById('wc').innerText = words;
        localStorage.setItem('champ_essay', el.value);
    },

    copyEssay: function() {
        let text = document.getElementById('essay-input').value;
        if(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert("📋 Copied to clipboard!");
            });
        }
    },

    // ==========================================
    // 3. PREMIUM GPA CALCULATOR
    // ==========================================
    openGPA: function() {
        this.currentView = 'gpa';
        this.renderHeader('GPA Calculator', 'Predict your future');
        const html = `
        <div class="fade-in" style="padding:20px;">
            <div class="glass-panel" style="padding:30px 20px; border-radius:24px;">
                
                <div style="display:flex; align-items:center; gap:15px; margin-bottom:25px; background:var(--input-bg); padding:15px; border-radius:16px; border:1px solid var(--border-color);">
                    <div style="background:rgba(59,130,246,0.1); color:#3b82f6; width:40px; height:40px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:20px;"><i class="fas fa-users"></i></div>
                    <div style="flex-grow:1;">
                        <label style="font-size:11px; font-weight:800; color:var(--text-sub); letter-spacing:1px;">SELECT GROUP</label>
                        <select id="group-select" onchange="ToolsEngine.updateSubjects()" style="width:100%; border:none; background:transparent; font-weight:800; font-family:'Outfit'; font-size:18px; color:var(--text-main); outline:none; margin-top:2px;">
                            <option value="sci" style="color:black;">Science</option>
                            <option value="bus" style="color:black;">Business Studies</option>
                            <option value="hum" style="color:black;">Humanities</option>
                        </select>
                    </div>
                </div>
                
                <div id="subject-list" style="display:flex; flex-direction:column; gap:10px;"></div>
                
                <button class="magnet-element" onclick="ToolsEngine.calculateGPA()" style="width:100%; background:linear-gradient(135deg, #10b981, #059669); color:white; padding:18px; border:none; border-radius:16px; font-family:'Outfit'; font-weight:800; font-size:16px; margin-top:25px; box-shadow:0 10px 25px rgba(16, 185, 129, 0.3);">Calculate Result <i class="fas fa-check-double" style="margin-left:5px;"></i></button>

                <div id="result-box" style="text-align:center; margin-top:25px; display:none; background:rgba(0,0,0,0.2); padding:30px 20px; border-radius:20px; border:1px solid var(--border-color);">
                    <div style="font-size:12px; font-weight:800; color:var(--cyan); letter-spacing:2px;">EXPECTED HSC GPA</div>
                    <div id="final-gpa" style="font-size:55px; font-family:'Outfit'; font-weight:800; color:var(--text-main); margin:5px 0 10px;">0.00</div>
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
            <option value="5.0" style="color:black;">A+ (80-100)</option>
            <option value="4.0" style="color:black;">A  (70-79)</option>
            <option value="3.5" style="color:black;">A- (60-69)</option>
            <option value="3.0" style="color:black;">B  (50-59)</option>
            <option value="2.0" style="color:black;">C  (40-49)</option>
            <option value="1.0" style="color:black;">D  (33-39)</option>
            <option value="0.0" style="color:black;">F  (0-32)</option>
        `;

        let html = '';
        subjects.forEach((sub) => {
            html += `
            <div style="display:flex; justify-content:space-between; align-items:center; background:var(--input-bg); padding:15px 20px; border-radius:16px; border:1px solid var(--border-color);">
                <div style="font-size:15px; font-weight:800; color:var(--text-main);">${sub}</div>
                <select class="mark-input" style="padding:8px 12px; border-radius:10px; border:1px solid var(--border-color); font-weight:800; font-family:inherit; outline:none; background:transparent; color:var(--text-main);">${gradesHTML}</select>
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
            finalGpaTxt.style.color = (gpa === 5.0) ? "var(--gold)" : "var(--text-main)";
            if(gpa === 5.0) {
                commentTxt.innerHTML = "<i class='fas fa-trophy'></i> Golden A+! Absolute Masterclass!";
                commentTxt.style.color = "var(--gold)"; commentTxt.style.background = "rgba(245,158,11,0.1)";
            } else if(gpa >= 4.0) {
                commentTxt.innerHTML = "<i class='fas fa-star'></i> Excellent! You are Varsity material.";
                commentTxt.style.color = "#6ee7b7"; commentTxt.style.background = "rgba(16,185,129,0.1)";
            } else {
                commentTxt.innerHTML = "<i class='fas fa-arrow-up'></i> Good job, but let's aim higher!";
                commentTxt.style.color = "var(--cyan)"; commentTxt.style.background = "rgba(6,182,212,0.1)";
            }
        }
        resultBox.scrollIntoView({ behavior: 'smooth' });
    },

    // ==========================================
    // 4. PREMIUM VOCAB ARCADE
    // ==========================================
    openFlashcards: function() {
        this.currentView = 'vocab_menu';
        this.renderHeader('Vocab Hub', 'Flashcards & Arcade');
        const html = `
        <div class="fade-in" style="padding:20px; display:flex; flex-direction:column; gap:15px;">
            <div class="magnet-element" style="background:linear-gradient(135deg, #3b82f6, #2563eb); padding:30px 25px; border-radius:24px; color:white; box-shadow:0 15px 30px rgba(59,130,246,0.3);" onclick="ToolsEngine.startFlashcardLearn()">
                <div style="background:rgba(255,255,255,0.2); width:50px; height:50px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:24px; margin-bottom:15px;"><i class="fas fa-layer-group"></i></div>
                <h3 style="margin:0; font-family:'Outfit'; font-size:22px; font-weight:800;">Learn Words</h3>
                <p style="margin:5px 0 0; font-size:14px; opacity:0.9;">Study the database with 3D flip cards.</p>
            </div>
            
            <div class="magnet-element" style="background:linear-gradient(135deg, var(--pink), #be123c); padding:30px 25px; border-radius:24px; color:white; box-shadow:0 15px 30px rgba(244,63,94,0.3);" onclick="ToolsEngine.startArcadeTest()">
                <div style="background:rgba(255,255,255,0.2); width:50px; height:50px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:24px; margin-bottom:15px;"><i class="fas fa-bolt"></i></div>
                <h3 style="margin:0; font-family:'Outfit'; font-size:22px; font-weight:800;">Vocab Arcade</h3>
                <p style="margin:5px 0 0; font-size:14px; opacity:0.9;">Test your speed with the new Combo System.</p>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    currentIdx: 0,
    startFlashcardLearn: function() {
        this.currentView = 'flashcards';
        this.renderHeader('Flashcards', 'Tap card to flip');
        this.currentIdx = 0;
        const html = `
        <div class="fade-in" style="padding:20px; perspective:1000px; display:flex; flex-direction:column; align-items:center;">
            <div style="font-weight:800; color:var(--text-sub); margin-bottom:15px; letter-spacing:1px; font-size:13px;" id="fc-counter">CARD 1</div>
            
            <div id="fc-card" onclick="ToolsEngine.flipCard()" style="width:100%; max-width:340px; height:250px; position:relative; transform-style:preserve-3d; transition:transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); cursor:pointer; box-shadow:0 20px 40px rgba(0,0,0,0.2); border-radius:24px;">
                <div class="glass-panel" style="position:absolute; width:100%; height:100%; backface-visibility:hidden; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                    <span style="color:var(--text-sub); font-size:12px; font-weight:800; letter-spacing:2px; margin-bottom:15px;"><i class="fas fa-language" style="color:var(--cyan);"></i> ENGLISH</span>
                    <span id="fc-en" style="font-size:36px; font-weight:800; color:var(--text-main); font-family:'Outfit'; text-transform:capitalize;">...</span>
                </div>
                <div style="position:absolute; width:100%; height:100%; backface-visibility:hidden; background:linear-gradient(135deg,#3b82f6,#2563eb); color:white; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; transform:rotateY(180deg); border:2px solid #60a5fa;">
                    <span style="opacity:0.8; font-size:12px; font-weight:800; letter-spacing:2px; margin-bottom:15px;">BENGALI MEANING</span>
                    <span id="fc-bn" style="font-size:32px; font-weight:800; margin-bottom:10px; text-align:center; padding:0 20px;">...</span>
                </div>
            </div>

            <div style="display:flex; gap:15px; margin-top:30px; width:100%; max-width:340px;">
                <button class="magnet-element glass-panel" onclick="ToolsEngine.prevCard()" style="flex:1; padding:18px; border-radius:16px; font-size:18px; font-weight:800;"><i class="fas fa-arrow-left"></i></button>
                <button class="magnet-element" onclick="ToolsEngine.nextCard()" style="flex:2; background:var(--text-main); color:var(--bg); border:none; padding:18px; border-radius:16px; font-size:16px; font-weight:800; font-family:'Outfit';">Next Word <i class="fas fa-arrow-right" style="margin-left:5px;"></i></button>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
        this.loadCard();
    },
    loadCard: function() {
        let words = []; try{ words = vocabList; } catch(e){ words = [{w:"Error", m:"Missing vocab file"}]; }
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
        if(navigator.vibrate) navigator.vibrate(30);
    },
    nextCard: function() { this.currentIdx++; this.loadCard(); },
    prevCard: function() { this.currentIdx--; this.loadCard(); },

    arcadeScore: 0,
    arcadeTimer: null,
    arcadeTimeLeft: 30,
    currentWordItem: null,
    arcadeCombo: 1,

    startArcadeTest: function() {
        this.currentView = 'arcade';
        localStorage.setItem('lastVocabPlay', Date.now()); 
        this.renderHeader('Vocab Arcade', 'Neon survival mode');
        this.arcadeScore = 0;
        this.arcadeCombo = 1;
        
        const html = `
        <div class="fade-in" style="padding:20px; text-align:center;">
            <div class="glass-panel" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; padding:15px 20px; border-radius:16px;">
                <div style="font-weight:800; font-family:'Outfit'; font-size:18px;"><i class="fas fa-star" style="color:var(--gold);"></i> Score: <span id="arc-score">0</span></div>
                <div id="combo-display" style="font-size:14px; font-weight:800; color:var(--text-sub); display:none;">Combo x<span id="arc-combo">1</span></div>
                <div style="font-weight:900; color:#ef4444; font-size:18px;"><i class="fas fa-clock"></i> <span id="arc-time">30</span>s</div>
            </div>
            
            <div class="glass-panel" style="padding:40px 20px; border-radius:24px; border:3px solid transparent; transition:0.3s;" id="arc-box">
                <div style="font-size:12px; color:var(--text-sub); font-weight:800; margin-bottom:15px; letter-spacing:2px;">TRANSLATE TO ENGLISH</div>
                <div id="arc-bengali" style="font-size:35px; font-weight:800; color:var(--text-main); margin-bottom:30px; font-family:'Outfit';">Loading...</div>
                <input type="text" id="arc-input" onkeypress="ToolsEngine.checkArcadeEnter(event)" placeholder="Type english word..." autocomplete="off" spellcheck="false" class="themed-input" style="font-size:20px; text-align:center; transition:0.2s;">
                <div id="arc-feedback" style="min-height:24px; margin-top:20px; font-weight:800; font-size:16px;"></div>
            </div>
            
            <button class="magnet-element" onclick="ToolsEngine.checkArcadeAnswer()" style="width:100%; background:linear-gradient(135deg, var(--pink), #be123c); color:white; border:none; padding:20px; border-radius:16px; font-size:18px; font-weight:800; font-family:'Outfit'; cursor:pointer; margin-top:20px; box-shadow:0 10px 25px rgba(236, 72, 153, 0.3);">Submit Answer <i class="fas fa-bolt" style="margin-left:5px;"></i></button>
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
        input.style.borderColor = 'var(--border-color)';
        
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
        const comboDisplay = document.getElementById('combo-display');
        inputEl.disabled = true;

        if(ans === correctWord) {
            let pointsEarned = 10 * this.arcadeCombo;
            this.arcadeScore += pointsEarned;
            this.arcadeCombo++;
            
            document.getElementById('arc-score').innerText = this.arcadeScore;
            boxEl.style.borderColor = '#10b981';
            inputEl.style.borderColor = '#10b981';
            
            if(this.arcadeCombo > 2) {
                comboDisplay.style.display = 'block';
                document.getElementById('arc-combo').innerText = this.arcadeCombo - 1;
                comboDisplay.className = 'combo-text';
                setTimeout(() => comboDisplay.classList.remove('combo-text'), 300);
                feedback.innerHTML = `<span style="color:var(--gold);"><i class="fas fa-fire"></i> COMBO! +${pointsEarned} Points</span>`;
            } else {
                feedback.innerHTML = `<span style="color:#10b981;"><i class="fas fa-check-circle"></i> +10 Points!</span>`;
            }
            if(navigator.vibrate) navigator.vibrate(50);

        } else {
            this.arcadeCombo = 1;
            comboDisplay.style.display = 'none';
            boxEl.style.borderColor = '#ef4444';
            inputEl.style.borderColor = '#ef4444';
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
        boxEl.style.borderColor = 'var(--gold)';
        this.arcadeCombo = 1;
        document.getElementById('combo-display').style.display = 'none';
        
        let currentHigh = parseInt(localStorage.getItem('vocabHighScore')) || 0;
        if(this.arcadeScore > currentHigh) {
            localStorage.setItem('vocabHighScore', this.arcadeScore);
            feedback.innerHTML = `<span style="color:#10b981;"><i class="fas fa-trophy"></i> NEW HIGH SCORE: ${this.arcadeScore}!</span>`;
        } else {
            feedback.innerHTML = `<span style="color:var(--gold);"><i class="fas fa-clock"></i> Time's up! It was: <b style="font-size:20px; font-family:'Outfit'; text-transform:uppercase;">${this.currentWordItem.w}</b></span>`;
        }
        if(navigator.vibrate) navigator.vibrate([150, 150, 150]);
        setTimeout(() => { this.nextArcadeWord(); }, 2500);
    },

    // ==========================================
    // 5. POMODORO TIMER (ZEN MODE overrides theme)
    // ==========================================
    openStudyTimer: function() {
        this.currentView = 'timer';
        this.renderHeader('Pomodoro Timer', 'Deep focus mode');
        if(this.studyTimerInterval) clearInterval(this.studyTimerInterval);
        this.isTimerRunning = false;
        this.studyTimeLeft = 25 * 60; 

        const html = `
        <div class="fade-in" style="padding:20px;">
            <div id="pomodoro-box" class="glass-panel" style="border-radius:30px; padding:40px 20px; text-align:center; position:relative; transition: 0.5s;">
                
                <button onclick="ToolsEngine.toggleZenMode()" class="magnet-element" style="position:absolute; top:20px; right:20px; background:none; border:none; color:var(--text-sub); font-size:20px; cursor:pointer;" id="zen-btn"><i class="fas fa-moon"></i></button>

                <div class="zen-target" style="display:flex; justify-content:center; gap:10px; margin-bottom:40px; transition: 0.3s;">
                    <button class="magnet-element" onclick="ToolsEngine.setTimer(25)" style="flex:1; background:rgba(59,130,246,0.1); color:#3b82f6; border:1px solid rgba(59,130,246,0.2); padding:12px; border-radius:12px; font-weight:800; cursor:pointer;">25 Min</button>
                    <button class="magnet-element" onclick="ToolsEngine.setTimer(50)" style="flex:1; background:rgba(139,92,246,0.1); color:#8b5cf6; border:1px solid rgba(139,92,246,0.2); padding:12px; border-radius:12px; font-weight:800; cursor:pointer;">50 Min</button>
                    <button class="magnet-element" onclick="ToolsEngine.setTimer(5)" style="flex:1; background:rgba(16,185,129,0.1); color:#10b981; border:1px solid rgba(16,185,129,0.2); padding:12px; border-radius:12px; font-weight:800; cursor:pointer;">Break</button>
                </div>
                
                <div id="timer-ring" style="width:240px; height:240px; border-radius:50%; border:8px solid var(--border-color); display:flex; align-items:center; justify-content:center; margin:0 auto 40px; position:relative; transition:0.8s;">
                    <div id="studyTimerDisplay" style="font-size:65px; font-weight:800; color:var(--text-main); font-family:'Outfit'; letter-spacing:-2px; transition: 0.5s;">25:00</div>
                </div>

                <div style="display:flex; justify-content:center; gap:20px;">
                    <button id="timerBtn" class="magnet-element" onclick="ToolsEngine.toggleStudyTimer()" style="background:linear-gradient(135deg, #10b981, #059669); color:white; width:80px; height:80px; border-radius:50%; border:none; font-size:28px; cursor:pointer; box-shadow:0 15px 30px rgba(16,185,129,0.3); display:flex; align-items:center; justify-content:center;"><i class="fas fa-play" id="play-icon" style="margin-left:5px;"></i></button>
                    
                    <button class="zen-target magnet-element glass-panel" onclick="ToolsEngine.setTimer(25)" style="color:#ef4444; width:80px; height:80px; border-radius:50%; font-size:22px; cursor:pointer; transition: 0.3s;"><i class="fas fa-redo"></i></button>
                </div>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
    },
    
    isZenMode: false,
    toggleZenMode: function() {
        this.isZenMode = !this.isZenMode;
        const body = document.body;
        const box = document.getElementById('pomodoro-box');
        const header = document.getElementById('tools-header');
        const text = document.getElementById('studyTimerDisplay');
        const ring = document.getElementById('timer-ring');
        const zenBtn = document.getElementById('zen-btn');
        
        if(this.isZenMode) {
            body.classList.add('zen-mode');
            box.style.background = 'transparent';
            box.style.border = 'none';
            box.style.boxShadow = 'none';
            if(header) header.style.display = 'none';
            text.style.color = '#f8fafc';
            ring.classList.add('zen-ring');
            zenBtn.innerHTML = '<i class="fas fa-sun" style="color:#fcd34d;"></i>';
            document.querySelectorAll('.zen-target').forEach(el => el.classList.add('zen-hidden'));
        } else {
            body.classList.remove('zen-mode');
            box.style.background = 'var(--card-bg)';
            box.style.border = '1px solid var(--border-color)';
            box.style.boxShadow = '0 15px 35px var(--shadow-color)';
            if(header) header.style.display = 'flex';
            text.style.color = 'var(--text-main)';
            ring.classList.remove('zen-ring');
            zenBtn.innerHTML = '<i class="fas fa-moon" style="color:var(--text-sub);"></i>';
            document.querySelectorAll('.zen-target').forEach(el => el.classList.remove('zen-hidden'));
        }
    },

    setTimer: function(mins) {
        clearInterval(this.studyTimerInterval);
        this.isTimerRunning = false;
        this.studyTimeLeft = mins * 60;
        document.getElementById('play-icon').className = "fas fa-play";
        document.getElementById('play-icon').style.marginLeft = "5px";
        document.getElementById('timerBtn').style.background = "linear-gradient(135deg, #10b981, #059669)";
        document.getElementById('timerBtn').style.boxShadow = "0 15px 30px rgba(16,185,129,0.3)";
        this.updateTimerDisplay();
    },
    toggleStudyTimer: function() {
        const btn = document.getElementById('timerBtn');
        const icon = document.getElementById('play-icon');
        
        if(this.isTimerRunning) {
            clearInterval(this.studyTimerInterval);
            this.isTimerRunning = false;
            icon.className = "fas fa-play";
            icon.style.marginLeft = "5px";
            btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
            btn.style.boxShadow = "0 15px 30px rgba(16,185,129,0.3)";
        } else {
            this.isTimerRunning = true;
            icon.className = "fas fa-pause";
            icon.style.marginLeft = "0";
            btn.style.background = "linear-gradient(135deg, var(--gold), #d97706)";
            btn.style.boxShadow = "0 15px 30px rgba(245,158,11,0.3)";
            
            if(!this.isZenMode) this.toggleZenMode();
            
            this.studyTimerInterval = setInterval(() => {
                if(this.studyTimeLeft > 0) {
                    this.studyTimeLeft--;
                    this.updateTimerDisplay();
                } else {
                    clearInterval(this.studyTimerInterval);
                    this.isTimerRunning = false;
                    icon.className = "fas fa-check";
                    btn.style.background = "linear-gradient(135deg, var(--cyan), #0284c7)";
                    if(this.isZenMode) this.toggleZenMode(); 
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

    // ==========================================
    // 6. SUGGESTIONS
    // ==========================================
    openSuggestions: function() {
        this.currentView = 'suggestions';
        this.renderHeader('Exam Blueprint', 'Top Suggestions');
        let html = `<div class="fade-in" style="padding:20px;">`;
        html += `<div style="background:linear-gradient(135deg, var(--gold), #d97706); padding:25px; border-radius:24px; color:white; margin-bottom:20px; box-shadow:0 10px 25px rgba(245,158,11,0.3);"><h3 style="margin:0; font-family:'Outfit'; font-size:22px;"><i class="fas fa-crown"></i> 60 Marks Blueprint</h3><p style="margin:5px 0 0; font-size:13px; opacity:0.9;">Focus on these to secure maximum marks.</p></div>`;
        try {
            suggestionData.tips_60.forEach((tip, idx) => {
                html += `
                <div class="glass-panel" style="border-radius:20px; padding:20px; margin-bottom:15px; border-left:6px solid var(--gold);">
                    <div style="display:flex; align-items:center; gap:12px; margin-bottom:10px;">
                        <div style="background:rgba(245,158,11,0.1); color:var(--gold); width:30px; height:30px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:14px;">${idx+1}</div>
                        <b style="color:var(--text-main); font-size:16px;">${tip.title}</b>
                    </div>
                    <p style="font-size:14px; color:var(--text-sub); line-height:1.6; margin:0;">${tip.content}</p>
                </div>`;
            });
        } catch(e) {}
        document.getElementById('app-container').innerHTML = html + `</div>`;
    },

    // ==========================================
    // 7. EXAM COUNTDOWN
    // ==========================================
    openCountdown: function() {
        this.currentView = 'countdown';
        this.renderHeader('Exam Countdown', 'Time is ticking!');
        const savedDate = localStorage.getItem('examDate');
        let displayHtml = '';
        if(savedDate) {
            displayHtml = `
            <div style="text-align:center; padding:50px 20px; background:rgba(0,0,0,0.3); border:1px solid var(--border-color); color:white; border-radius:24px; box-shadow:0 20px 40px rgba(0,0,0,0.2); position:relative; overflow:hidden;">
                <i class="fas fa-hourglass-half" style="position:absolute; top:-20px; right:-20px; font-size:120px; color:rgba(255,255,255,0.05);"></i>
                <div style="font-size:12px; font-weight:800; color:var(--cyan); letter-spacing:3px; margin-bottom:15px;">TIME UNTIL EXAM</div>
                <div id="cnt-box" style="font-size:45px; font-weight:800; font-family:'Outfit'; text-shadow:0 0 20px rgba(6, 182, 212, 0.4); line-height:1.2;">${this.calculateTime(savedDate)}</div>
                
                <button class="magnet-element" onclick="localStorage.removeItem('examDate'); ToolsEngine.openCountdown()" style="margin-top:40px; background:rgba(255,255,255,0.1); color:white; padding:12px 25px; border-radius:50px; border:1px solid rgba(255,255,255,0.2); font-weight:700; cursor:pointer;"><i class="fas fa-calendar-alt"></i> Change Date</button>
            </div>`;
            
            if(this.examTimerInterval) clearInterval(this.examTimerInterval);
            this.examTimerInterval = setInterval(() => {
                const b = document.getElementById('cnt-box');
                if(b) b.innerHTML = ToolsEngine.calculateTime(savedDate);
            }, 1000);
        } else {
            displayHtml = `
            <div class="glass-panel" style="padding:40px 25px; border-radius:24px; text-align:center;">
                <div style="width:70px; height:70px; background:rgba(6,182,212,0.1); color:var(--cyan); border-radius:20px; display:flex; align-items:center; justify-content:center; font-size:30px; margin:0 auto 20px;"><i class="fas fa-calendar-check"></i></div>
                <h3 style="font-family:'Outfit'; font-size:22px; margin-bottom:10px;">When is your Board Exam?</h3>
                <p style="font-size:14px; color:var(--text-sub); margin-bottom:25px;">Set your target date to activate the pressure engine.</p>
                
                <input type="date" id="examDateInput" class="themed-input" style="margin-bottom:20px;">
                
                <button class="magnet-element" onclick="ToolsEngine.saveDate()" style="background:linear-gradient(135deg, var(--cyan), #0284c7); color:white; width:100%; padding:18px; border-radius:16px; border:none; font-weight:800; font-family:'Outfit'; font-size:16px; cursor:pointer; box-shadow:0 10px 25px rgba(6,182,212,0.3);">Start Countdown <i class="fas fa-rocket" style="margin-left:5px;"></i></button>
            </div>`;
        }
        document.getElementById('app-container').innerHTML = `<div class="fade-in" style="padding:20px;">${displayHtml}</div>`;
    },
    saveDate: function() { 
        const date = document.getElementById('examDateInput').value; 
        if(date) { localStorage.setItem('examDate', date); this.openCountdown(); } 
    },
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

window.onload = () => ToolsEngine.init();
