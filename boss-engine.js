/* boss-engine.js - The Elite Varsity Deathmatch Logic */

const BossEngine = {
    currentMode: null, // 'time' or 'death'
    questionPool: [],
    currentIndex: 0,
    score: 0,
    lives: 3,
    timeLeft: 0,
    timerInterval: null,
    isProcessing: false,

    init: function() {
        // STRICT ENGLISH ZONE: Disable global AI and Translator
        this.disableGlobalTools();

        if (!window.bossDB || window.bossDB.length === 0) {
            document.getElementById('app-container').innerHTML = `<h2 style="color:var(--text-main); text-align:center; padding:50px;">Database Offline. Tell Asif to fix boss-db.js.</h2>`;
            return;
        }
        
        this.renderMainMenu();
    },

    disableGlobalTools: function() {
        // Hides the AI and Translator Bubbles from global-engine.js
        const wrapper = document.getElementById('champ-global-ui-wrapper');
        if (wrapper) wrapper.style.display = 'none';
    },

    restoreGlobalTools: function() {
        const wrapper = document.getElementById('champ-global-ui-wrapper');
        if (wrapper) wrapper.style.display = 'block';
    },

    shuffleArray: function(array) {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    renderMainMenu: function() {
        this.currentMode = null;
        clearInterval(this.timerInterval);

        const html = `
        <div class="fade-in" style="padding: 20px;">
            
            <div style="background:linear-gradient(135deg, #1e293b, #0f172a); border:1px solid rgba(255,255,255,0.1); padding:40px 20px; border-radius:24px; text-align:center; box-shadow:0 20px 40px rgba(0,0,0,0.3); margin-bottom:20px; position:relative; overflow:hidden;">
                <i class="fas fa-skull" style="position:absolute; top:-20px; right:-20px; font-size:120px; color:rgba(255,255,255,0.03);"></i>
                <h2 style="font-family:'Outfit'; font-size:32px; color:var(--text-main); font-weight:900; letter-spacing:1px; margin:0 0 10px;">THE BOSS</h2>
                <div style="font-size:12px; font-weight:800; color:#ef4444; letter-spacing:3px; background:rgba(239,68,68,0.1); padding:6px 15px; border-radius:50px; display:inline-block; border:1px solid rgba(239,68,68,0.3);">VARSITY SIMULATOR</div>
                <p style="color:var(--text-sub); font-size:14px; margin-top:15px; line-height:1.6;">AI is deactivated. Translator is blocked. Only your brain can save you now.</p>
            </div>

            <div style="display:flex; flex-direction:column; gap:15px;">
                <div class="magnet-element" onclick="BossEngine.startMode('time')" style="background:var(--card-bg); backdrop-filter:blur(15px); border:1px solid var(--cyan); padding:25px 20px; border-radius:20px; display:flex; gap:20px; align-items:center; cursor:pointer; box-shadow:0 10px 30px rgba(6,182,212,0.1);">
                    <div style="width:60px; height:60px; border-radius:16px; background:rgba(6,182,212,0.1); color:var(--cyan); display:flex; align-items:center; justify-content:center; font-size:24px;"><i class="fas fa-stopwatch"></i></div>
                    <div style="flex-grow:1;">
                        <h3 style="margin:0; font-family:'Outfit'; font-size:20px; color:var(--text-main);">Time Attack</h3>
                        <p style="margin:4px 0 0; font-size:13px; color:var(--text-sub);">15 Questions • 3 Minutes limit</p>
                    </div>
                    <i class="fas fa-chevron-right" style="color:var(--text-sub);"></i>
                </div>

                <div class="magnet-element" onclick="BossEngine.startMode('death')" style="background:var(--card-bg); backdrop-filter:blur(15px); border:1px solid #ef4444; padding:25px 20px; border-radius:20px; display:flex; gap:20px; align-items:center; cursor:pointer; box-shadow:0 10px 30px rgba(239,68,68,0.15);">
                    <div style="width:60px; height:60px; border-radius:16px; background:rgba(239,68,68,0.1); color:#ef4444; display:flex; align-items:center; justify-content:center; font-size:24px;"><i class="fas fa-heart-broken"></i></div>
                    <div style="flex-grow:1;">
                        <h3 style="margin:0; font-family:'Outfit'; font-size:20px; color:var(--text-main);">Death Mode</h3>
                        <p style="margin:4px 0 0; font-size:13px; color:var(--text-sub);">Unlimited • 3 Mistakes = Dead</p>
                    </div>
                    <i class="fas fa-chevron-right" style="color:var(--text-sub);"></i>
                </div>
                
                <button onclick="BossEngine.exitExam()" class="magnet-element" style="background:var(--input-bg); color:var(--text-main); border:1px solid var(--border-color); padding:15px; border-radius:16px; font-weight:800; margin-top:10px; cursor:pointer;"><i class="fas fa-arrow-left"></i> Escape the Forge</button>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    startMode: function(mode) {
        this.currentMode = mode;
        this.score = 0;
        this.currentIndex = 0;
        this.isProcessing = false;
        
        let dbCopy = this.shuffleArray(window.bossDB);

        if (mode === 'time') {
            this.questionPool = dbCopy.slice(0, 15); // 15 questions
            this.timeLeft = 3 * 60; // 3 mins
            this.startTimer();
        } else if (mode === 'death') {
            this.questionPool = dbCopy; // As many as possible
            this.lives = 3;
        }

        this.renderGameUI();
        this.loadQuestion();
    },

    startTimer: function() {
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            let min = Math.floor(this.timeLeft / 60);
            let sec = this.timeLeft % 60;
            let timeTxt = `${min}:${sec < 10 ? '0'+sec : sec}`;
            let el = document.getElementById('boss-timer');
            if(el) el.innerText = timeTxt;

            if (this.timeLeft <= 0) {
                clearInterval(this.timerInterval);
                this.endGame("⏰ TIME'S UP! You couldn't finish the test.");
            }
        }, 1000);
    },

    renderGameUI: function() {
        let statsHtml = '';
        if (this.currentMode === 'time') {
            statsHtml = `<div style="font-weight:900; font-size:20px; color:var(--cyan); font-family:'Outfit';"><i class="fas fa-clock"></i> <span id="boss-timer">3:00</span></div>`;
        } else {
            statsHtml = `<div id="boss-lives" style="font-size:20px; color:#ef4444;"><i class="fas fa-heart"></i> <i class="fas fa-heart"></i> <i class="fas fa-heart"></i></div>`;
        }

        const html = `
        <div class="fade-in" style="padding: 20px;">
            
            <div class="glass-panel" style="display:flex; justify-content:space-between; align-items:center; padding:15px 20px; border-radius:16px; margin-bottom:20px;">
                <div style="font-weight:800; font-family:'Outfit'; color:var(--gold); font-size:18px;"><i class="fas fa-star"></i> Score: <span id="boss-score">0</span></div>
                ${statsHtml}
            </div>

            <div id="boss-q-area"></div>
            
            <button onclick="BossEngine.renderMainMenu()" style="margin-top:30px; background:none; border:none; color:var(--text-sub); font-weight:700; cursor:pointer; width:100%; text-decoration:underline;">Surrender & Quit</button>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    loadQuestion: function() {
        if (this.currentIndex >= this.questionPool.length) {
            this.endGame("🏆 INCREDIBLE! You exhausted the Boss's database!");
            return;
        }

        const qData = this.questionPool[this.currentIndex];
        const qArea = document.getElementById('boss-q-area');
        
        let progressTxt = this.currentMode === 'time' ? `QUESTION ${this.currentIndex + 1} OF ${this.questionPool.length}` : `STREAK: ${this.currentIndex}`;

        let optsHtml = '';
        qData.options.forEach((opt, idx) => {
            optsHtml += `<button class="boss-opt-btn magnet-element" onclick="BossEngine.submitAnswer(${idx})" id="opt-${idx}" style="width:100%; background:var(--input-bg); color:var(--text-main); border:1px solid var(--border-color); padding:18px 20px; border-radius:16px; font-size:16px; font-weight:700; text-align:left; margin-bottom:12px; font-family:inherit; cursor:pointer; transition:0.2s;">${opt}</button>`;
        });

        qArea.innerHTML = `
            <div class="fade-in glass-panel" style="padding:30px 20px; border-radius:24px; position:relative;">
                <div style="font-size:12px; font-weight:800; color:var(--text-sub); letter-spacing:2px; margin-bottom:15px;">${progressTxt}</div>
                <div style="font-size:20px; font-weight:700; color:var(--text-main); line-height:1.5; margin-bottom:30px; font-family:'Outfit';">${qData.q}</div>
                
                <div id="opts-container">${optsHtml}</div>

                <div id="exp-box" style="display:none; margin-top:20px; background:rgba(6,182,212,0.1); border-left:4px solid var(--cyan); padding:15px; border-radius:12px; font-size:14px; font-weight:600; color:var(--text-main);">
                    <div style="color:var(--cyan); font-weight:800; margin-bottom:5px; font-size:12px; letter-spacing:1px;">VARSITY RULE</div>
                    ${qData.exp}
                </div>
                
                <button id="next-btn" class="magnet-element" onclick="BossEngine.nextQuestion()" style="display:none; width:100%; background:var(--text-main); color:var(--bg); border:none; padding:18px; border-radius:16px; font-weight:800; font-family:'Outfit'; font-size:16px; margin-top:20px; cursor:pointer;">Next Question <i class="fas fa-arrow-right"></i></button>
            </div>
        `;
    },

    submitAnswer: function(selectedIndex) {
        if(this.isProcessing) return;
        this.isProcessing = true;

        const qData = this.questionPool[this.currentIndex];
        const correctIndex = qData.ans;
        
        // Disable all buttons
        for(let i=0; i < qData.options.length; i++) {
            document.getElementById(`opt-${i}`).style.pointerEvents = 'none';
        }

        const selectedBtn = document.getElementById(`opt-${selectedIndex}`);
        const correctBtn = document.getElementById(`opt-${correctIndex}`);

        if (selectedIndex === correctIndex) {
            // Correct
            selectedBtn.style.background = 'rgba(16, 185, 129, 0.1)';
            selectedBtn.style.borderColor = '#10b981';
            selectedBtn.style.color = '#10b981';
            selectedBtn.innerHTML += ` <i class="fas fa-check-circle" style="float:right;"></i>`;
            
            this.score += 10;
            document.getElementById('boss-score').innerText = this.score;
            if(navigator.vibrate) navigator.vibrate(20);
            
            // Auto advance on correct for speed
            setTimeout(() => this.nextQuestion(), 1000);
            
        } else {
            // Wrong
            selectedBtn.style.background = 'rgba(239, 68, 68, 0.1)';
            selectedBtn.style.borderColor = '#ef4444';
            selectedBtn.style.color = '#ef4444';
            selectedBtn.innerHTML += ` <i class="fas fa-times-circle" style="float:right;"></i>`;
            
            correctBtn.style.background = 'rgba(16, 185, 129, 0.1)';
            correctBtn.style.borderColor = '#10b981';
            correctBtn.style.color = '#10b981';
            
            if(navigator.vibrate) navigator.vibrate([100, 50, 100]);

            // Show explanation
            document.getElementById('exp-box').style.display = 'block';
            document.getElementById('next-btn').style.display = 'block'; // Require manual next on wrong answer

            if (this.currentMode === 'death') {
                this.lives--;
                this.updateLivesDisplay();
                if (this.lives <= 0) {
                    setTimeout(() => this.endGame("💀 DEAD. You made 3 mistakes."), 1500);
                }
            }
        }
    },

    updateLivesDisplay: function() {
        let hearts = '';
        for(let i=0; i<3; i++) {
            hearts += i < this.lives ? '<i class="fas fa-heart"></i> ' : '<i class="fas fa-heart-broken" style="color:var(--text-sub); opacity:0.3;"></i> ';
        }
        document.getElementById('boss-lives').innerHTML = hearts;
    },

    nextQuestion: function() {
        this.currentIndex++;
        this.isProcessing = false;
        this.loadQuestion();
    },

    endGame: function(message) {
        clearInterval(this.timerInterval);
        
        let rank = "";
        if(this.score >= 150) rank = "👑 VARSITY LEGEND";
        else if (this.score >= 80) rank = "🔥 ELITE SCHOLAR";
        else rank = "⚰️ FRESHMAN (Needs work)";

        const html = `
        <div class="fade-in" style="padding:20px; text-align:center;">
            <div class="glass-panel" style="padding:40px 20px; border-radius:24px;">
                <div style="font-size:60px; margin-bottom:10px;">${this.lives <= 0 ? '💀' : '🏆'}</div>
                <h2 style="font-family:'Outfit'; color:var(--text-main); font-size:28px; margin:0 0 10px;">TEST OVER</h2>
                <p style="color:var(--text-sub); font-size:16px; font-weight:600;">${message}</p>
                
                <div style="background:var(--input-bg); border:1px solid var(--border-color); padding:20px; border-radius:16px; margin:25px 0;">
                    <div style="font-size:12px; font-weight:800; color:var(--cyan); letter-spacing:2px; margin-bottom:5px;">FINAL SCORE</div>
                    <div style="font-size:45px; font-weight:900; font-family:'Outfit'; color:var(--text-main);">${this.score}</div>
                    <div style="margin-top:10px; font-weight:700; color:var(--gold);">${rank}</div>
                </div>

                <button class="magnet-element" onclick="BossEngine.renderMainMenu()" style="width:100%; background:var(--text-main); color:var(--bg); border:none; padding:18px; border-radius:16px; font-weight:800; font-family:'Outfit'; font-size:16px; cursor:pointer;">Play Again <i class="fas fa-redo" style="margin-left:5px;"></i></button>
            </div>
        </div>`;
        
        document.getElementById('app-container').innerHTML = html;
        if(navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 400]);
    },

    exitExam: function() {
        this.restoreGlobalTools(); // Bring AI back!
        window.location.href = 'index.html';
    }
};

window.addEventListener('load', () => { BossEngine.init(); });
