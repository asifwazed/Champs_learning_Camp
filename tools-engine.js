/* tools-engine.js - Powering the Utility Belt */

const ToolsEngine = {
    
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
            
            <div class="tool-card" onclick="ToolsEngine.openNotebook()">
                <div class="tc-icon t-orange"><i class="fas fa-sticky-note"></i></div>
                <div style="font-weight:700;">Notebook</div>
            </div>

            <div class="tool-card" onclick="ToolsEngine.openWriter()">
                <div class="tc-icon t-purple"><i class="fas fa-pen-fancy"></i></div>
                <div style="font-weight:700;">Write Check</div>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
        this.renderHeader('Utility Belt', 'Tools to boost your score');
    },

    // --- SUGGESTIONS MODULE ---
    openSuggestions: function() {
        this.renderHeader('Premium Suggestions', 'HSC 2026 Exclusive');
        
        let html = `<div class="fade-in">`;
        
        // 1st Paper Section
        html += `<div style="font-size:12px; font-weight:800; color:#64748b; margin:15px 0 10px; letter-spacing:1px;">ENGLISH 1st PAPER</div>`;
        suggestionData.first_paper.forEach(item => {
            html += `
            <div onclick="alert('${item.content.replace(/\n/g, "\\n")}')" style="background:white; padding:15px; border-radius:16px; margin-bottom:10px; display:flex; align-items:center; gap:15px; box-shadow:0 4px 10px rgba(0,0,0,0.03); cursor:pointer;">
                <div style="width:40px; height:40px; background:#fffbeb; border-radius:10px; display:flex; align-items:center; justify-content:center; color:#b45309;"><i class="fas fa-star"></i></div>
                <div style="font-weight:700; color:#1e293b;">${item.title}</div>
            </div>`;
        });

        // 2nd Paper Section
        html += `<div style="font-size:12px; font-weight:800; color:#64748b; margin:25px 0 10px; letter-spacing:1px;">ENGLISH 2nd PAPER</div>`;
        suggestionData.second_paper.forEach(item => {
            html += `
            <div onclick="alert('${item.content.replace(/\n/g, "\\n")}')" style="background:white; padding:15px; border-radius:16px; margin-bottom:10px; display:flex; align-items:center; gap:15px; box-shadow:0 4px 10px rgba(0,0,0,0.03); cursor:pointer;">
                <div style="width:40px; height:40px; background:#eff6ff; border-radius:10px; display:flex; align-items:center; justify-content:center; color:#3b82f6;"><i class="fas fa-file-alt"></i></div>
                <div style="font-weight:700; color:#1e293b;">${item.title}</div>
            </div>`;
        });

        html += `</div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    // --- EXAM COUNTDOWN TOOL ---
    openCountdown: function() {
        this.renderHeader('Exam Countdown', 'Time is ticking!');
        
        // Check if date is saved
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
        
        // If timer is running, update it every second
        if(savedDate) {
            this.timerInterval = setInterval(() => {
                const timerBox = document.getElementById('cnt-box');
                if(timerBox) timerBox.innerHTML = ToolsEngine.calculateTime(savedDate);
            }, 1000);
        }
    },

    saveDate: function() {
        const date = document.getElementById('examDateInput').value;
        if(date) {
            localStorage.setItem('examDate', date);
            this.openCountdown();
        }
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

    // --- OTHER TOOLS (GPA, FLASHCARDS, ETC) ---
    // (Keep the GPA, Flashcards, Notebook, Writer functions from the previous code here)
    openGPA: function() { /* ...paste previous GPA code... */ 
        // For brevity, assume the previous GPA code is here. 
        // IMPORTANT: When you copy this file, make sure to include the openGPA, updateSubjects, calculateGPA, openFlashcards, etc. from the PREVIOUS file I gave you.
        // If you need the FULL combined code again, let me know.
        this.renderHeader('GPA Calculator', 'Check your result');
        const html = `<div class="fade-in"><div style="background:white; padding:20px; border-radius:24px;"><label style="font-size:12px; font-weight:700; color:#64748b; margin-bottom:5px; display:block;">SELECT YOUR GROUP</label><select id="group-select" onchange="ToolsEngine.updateSubjects()" style="width:100%; padding:12px; border-radius:12px; border:1px solid #e2e8f0; font-weight:700; color:#0f172a;"><option value="sci">🧪 Science</option><option value="bus">💼 Business Studies</option><option value="hum">🌍 Humanities</option></select></div><div id="subject-list" style="background:white; padding:20px; border-radius:24px; margin-top:10px;"></div><div style="background:#f0fdfa; padding:15px; border-radius:15px; text-align:center; margin-top:20px; display:none;" id="result-box"><div style="font-size:12px; color:#047857;">YOUR ESTIMATED GPA</div><div style="font-size:32px; font-weight:800; color:#059669;" id="final-gpa">0.00</div></div><button onclick="ToolsEngine.calculateGPA()" style="width:100%; background:#10b981; color:white; padding:15px; border:none; border-radius:50px; font-weight:700; margin-top:20px;">Calculate Now</button></div>`;
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
        
        let html = '';
        subjects.forEach(sub => {
            html += `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;"><div style="font-size:14px; font-weight:600; color:#334155;">${sub}</div><input type="number" class="mark-input" placeholder="Marks" style="width:80px; padding:8px; border-radius:8px; border:1px solid #e2e8f0; text-align:center;"></div>`;
        });
        list.innerHTML = html;
    },
    calculateGPA: function() {
        const inputs = document.querySelectorAll('.mark-input');
        let totalPoint = 0, count = 0, fail = false;
        inputs.forEach(inp => {
            let m = parseInt(inp.value)||0, p=0;
            if(m>=80)p=5; else if(m>=70)p=4; else if(m>=60)p=3.5; else if(m>=50)p=3; else if(m>=40)p=2; else if(m>=33)p=1; else {p=0; fail=true;}
            totalPoint+=p; count++;
        });
        let gpa = fail ? 0 : (totalPoint/count).toFixed(2);
        document.getElementById('result-box').style.display = 'block';
        document.getElementById('final-gpa').innerText = gpa;
    },
    openFlashcards: function() {
        // ... (Same as previous code) ...
        this.renderHeader('Vocab Arcade', 'Flip to learn');
        document.getElementById('app-container').innerHTML = `<div class="fade-in"><div style="perspective:1000px; width:100%; height:300px; margin-top:20px;"><div id="cardElement" onclick="ToolsEngine.flipCard()" style="width:100%; height:100%; position:relative; transform-style:preserve-3d; transition:transform 0.6s; border-radius:24px; box-shadow:0 15px 35px rgba(0,0,0,0.1); cursor:pointer;"><div style="position:absolute; width:100%; height:100%; backface-visibility:hidden; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; background:linear-gradient(135deg, #4f46e5, #4338ca); color:white;"><div style="font-size:12px; opacity:0.7; letter-spacing:1px;">TAP TO FLIP</div><div class="word" id="fcWord" style="font-size:32px; font-weight:800; font-family:'Outfit'; margin-bottom:10px;">Loading...</div></div><div style="position:absolute; width:100%; height:100%; backface-visibility:hidden; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; background:white; color:#1e293b; transform:rotateY(180deg); border:1px solid #e2e8f0;"><div class="meaning" id="fcMean" style="font-size:24px; font-weight:700; color:#4f46e5; margin-bottom:10px; font-family:'Hind Siliguri';">...</div><div style="background:#f1f5f9; padding:5px 12px; border-radius:20px; font-size:13px; color:#64748b;" id="fcSyn">...</div></div></div></div><div style="text-align:center; margin-top:20px;"><button onclick="ToolsEngine.nextCard()" style="background:#1e293b; color:white; padding:12px 30px; border-radius:50px; border:none; font-weight:700;">Next Word <i class="fas fa-arrow-right"></i></button></div></div>`;
        this.nextCard();
    },
    currentIdx: 0,
    flipCard: function() { document.getElementById('cardElement').classList.toggle('flipped'); },
    nextCard: function() {
        document.getElementById('cardElement').classList.remove('flipped');
        setTimeout(() => {
            let words = []; try{words=vocabList;}catch(e){words=[{w:"Error",m:"vocab.js missing",s:""}];}
            this.currentIdx = Math.floor(Math.random()*words.length);
            let item = words[this.currentIdx];
            document.getElementById('fcWord').innerText = item.w;
            document.getElementById('fcMean').innerText = item.m;
            document.getElementById('fcSyn').innerText = item.s;
        }, 300);
    },
    openNotebook: function() {
        this.renderHeader('Notebook', 'Auto-saving...');
        const saved = localStorage.getItem('champNote') || "";
        document.getElementById('app-container').innerHTML = `<div class="fade-in"><textarea id="userNote" style="width:100%; height:300px; padding:20px; border-radius:20px; border:2px solid #e2e8f0; font-family:inherit; margin-bottom:10px;">${saved}</textarea><button onclick="localStorage.setItem('champNote', document.getElementById('userNote').value); alert('Saved!');" style="width:100%; background:#f59e0b; color:white; padding:15px; border-radius:50px; border:none; font-weight:700;">Save Note</button></div>`;
    },
    openWriter: function() {
        this.renderHeader('Write Check', 'Word Counter');
        document.getElementById('app-container').innerHTML = `<div class="fade-in"><textarea id="writeArea" oninput="document.getElementById('wc').innerText = this.value.split(/\\s+/).length - 1" style="width:100%; height:200px; padding:20px; border-radius:20px; border:2px solid #e2e8f0;"></textarea><div style="margin-top:10px; font-weight:700; color:#64748b;">Words: <span id="wc">0</span></div></div>`;
    }
};
