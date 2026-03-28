/* grammar-engine.js - Part B Logic (Cloze & Matrix Matcher ONLY) */

const GrammarEngine = {
    currentCategory: null,
    currentExercise: null,
    tableSelections: { a: null, b: null, c: null },
    tableCompleted: [],

    init: function() {
        this.renderMenu();
    },

    renderMenu: function() {
        this.currentCategory = null;
        const html = `
        <div class="fade-in" style="display: grid; grid-template-columns: 1fr; gap: 15px;">
            
            <div onclick="GrammarEngine.openList('with_clues')" class="magnet-element glass-card" style="padding: 25px; display: flex; align-items: center; gap: 20px; position: relative; overflow: hidden; cursor:pointer;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: var(--cyan);"></div>
                <div style="width: 60px; height: 60px; background: rgba(6, 182, 212, 0.1); color: var(--cyan); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid rgba(6, 182, 212, 0.2);"><i class="fas fa-puzzle-piece"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px;">Cloze Test (With Clues)</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: var(--text-sub); font-weight: 600;">5 Marks • Exact Match</p>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-sub);"></i>
            </div>
            
            <div onclick="GrammarEngine.openList('without_clues')" class="magnet-element glass-card" style="padding: 25px; display: flex; align-items: center; gap: 20px; position: relative; overflow: hidden; cursor:pointer;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #6366f1;"></div>
                <div style="width: 60px; height: 60px; background: rgba(99, 102, 241, 0.1); color: #6366f1; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid rgba(99, 102, 241, 0.2);"><i class="fas fa-eye-slash"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px;">Cloze Test (Without Clues)</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: var(--text-sub); font-weight: 600;">10 Marks • Synonyms Accepted</p>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-sub);"></i>
            </div>

            <div onclick="GrammarEngine.openList('table_match')" class="magnet-element glass-card" style="padding: 25px; display: flex; align-items: center; gap: 20px; position: relative; overflow: hidden; cursor:pointer;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #10b981;"></div>
                <div style="width: 60px; height: 60px; background: rgba(16, 185, 129, 0.1); color: #10b981; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid rgba(16, 185, 129, 0.2);"><i class="fas fa-columns"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px;">Matrix Matcher (Table)</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: var(--text-sub); font-weight: 600;">Match A, B, C • Board Standard</p>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-sub);"></i>
            </div>

        </div>`;
        document.getElementById('app-container').innerHTML = html;
        window.scrollTo(0, 0);
    },

    openList: function(category) {
        this.currentCategory = category;
        const dataList = grammarData[category].exercises;
        
        let html = `
        <div class="fade-in">
            <button onclick="GrammarEngine.renderMenu()" class="magnet-element glass-card" style="padding: 12px 20px; border-radius: 50px; font-weight: 700; margin-bottom: 20px; cursor:pointer; color: white; border: 1px solid rgba(255,255,255,0.1); background: transparent;"><i class="fas fa-arrow-left"></i> Categories</button>
            <div style="display:flex; flex-direction:column; gap:12px;">
        `;

        dataList.forEach((item, idx) => {
            html += `
            <div class="magnet-element glass-card" onclick="GrammarEngine.openExercise(${idx})" style="padding: 20px; display: flex; justify-content: space-between; align-items: center; cursor:pointer;">
                <div style="font-weight: 700; font-size: 16px;"><i class="fas fa-file-alt" style="color:var(--text-sub); margin-right:10px;"></i> ${item.title}</div>
                <i class="fas fa-chevron-right" style="color: var(--text-sub);"></i>
            </div>`;
        });

        html += `</div></div>`;
        document.getElementById('app-container').innerHTML = html;
        window.scrollTo(0, 0);
    },

    openExercise: function(index) {
        const item = grammarData[this.currentCategory].exercises[index];
        this.currentExercise = item;
        
        let html = `<div class="fade-in">
            <button onclick="GrammarEngine.openList('${this.currentCategory}')" class="magnet-element glass-card" style="padding: 12px 20px; border-radius: 50px; font-weight: 700; margin-bottom: 20px; cursor:pointer; color: white; border: 1px solid rgba(255,255,255,0.1); background: transparent;"><i class="fas fa-arrow-left"></i> Back to List</button>
            <h2 style="font-family:'Outfit'; margin: 0 0 20px;">${item.title}</h2>
        `;

        if (this.currentCategory === 'with_clues' || this.currentCategory === 'without_clues') {
            if (item.clues) {
                html += `<div class="clue-box" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 20px; padding: 15px; background: rgba(6, 182, 212, 0.05); border: 1px solid rgba(6, 182, 212, 0.2); border-radius: 12px;">`;
                item.clues.forEach(c => html += `<div style="background: rgba(255,255,255,0.1); padding: 5px 12px; border-radius: 50px; font-size: 15px; font-weight: 600; color: var(--cyan);">${c}</div>`);
                html += `</div>`;
            }

            let parsedText = item.text;
            parsedText = parsedText.replace(/\[([a-j])\]/g, (match, letter) => {
                let answerObj = item.answers[letter];
                if (!answerObj) return match; 
                let validAnswersStr = encodeURIComponent(answerObj.ans.toLowerCase()); 
                let nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
                let nextId = (nextLetter <= 'j') ? `gap-${nextLetter}` : '';

                return `<input type="text" id="gap-${letter}" style="background: transparent; border: none; border-bottom: 2px solid var(--text-sub); color: var(--cyan); font-weight: bold; width: 90px; text-align: center; outline: none; transition: 0.3s;" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="[${letter}]" onkeyup="GrammarEngine.checkClozeGap(this, '${validAnswersStr}', '${nextId}')">`;
            });

            html += `<div class="passage-box glass-card" style="padding: 20px; line-height: 2.2; font-size: 16px;">${parsedText}</div>`;

        } else if (this.currentCategory === 'table_match') {
            this.tableSelections = { a: null, b: null, c: null };
            this.tableCompleted = [];
            
            html += `<div style="color:var(--text-sub); font-size:13px; font-weight:700; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;"><i class="fas fa-link"></i> Select one from each column to form a sentence</div>`;
            
            html += `<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 20px;">`;
            
            ['a', 'b', 'c'].forEach(col => {
                html += `<div style="display: flex; flex-direction: column; gap: 8px;">`;
                html += `<div style="text-align: center; font-weight: bold; color: var(--cyan); margin-bottom: 5px;">Col ${col.toUpperCase()}</div>`;
                item.columns[col.toUpperCase()].forEach((text, idx) => {
                    html += `<div id="tm-${col}-${idx}" onclick="GrammarEngine.selectTableItem('${col}', ${idx})" class="glass-card" style="padding: 12px; font-size: 13px; cursor: pointer; border: 1px solid rgba(255,255,255,0.1); transition: 0.2s; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 60px;">${text}</div>`;
                });
                html += `</div>`;
            });
            html += `</div>`;

            html += `
            <div id="table-results" style="margin-top: 20px;">
                <h4 style="margin-bottom: 10px; color: #10b981;"><i class="fas fa-check-circle"></i> Completed Sentences</h4>
                <div id="table-completed-list" style="display: flex; flex-direction: column; gap: 10px;"></div>
            </div>`;
        }

        html += `</div>`;
        document.getElementById('app-container').innerHTML = html;
        window.scrollTo(0, 0);
    },

    // --- CLOZE LOGIC (Supports multiple answers split by '/') ---
    checkClozeGap: function(inputEl, encodedAnswersStr, nextId) {
        let val = inputEl.value.toLowerCase().trim();
        let decodedStr = decodeURIComponent(encodedAnswersStr);
        let validAnswers = decodedStr.split('/'); // Splits "vital/important/crucial" into an array

        if (validAnswers.includes(val)) {
            inputEl.style.borderColor = '#10b981';
            inputEl.style.color = '#10b981';
            inputEl.disabled = true; 
            
            if (nextId && document.getElementById(nextId)) {
                document.getElementById(nextId).focus();
            } else {
                if(navigator.vibrate) navigator.vibrate(100);
            }
        } else if (val.length > 2) {
            inputEl.style.borderColor = '#ef4444';
            inputEl.style.color = '#ef4444';
        } else {
            inputEl.style.borderColor = 'var(--text-sub)';
            inputEl.style.color = 'var(--cyan)';
        }
    },

    // --- MATRIX MATCHER LOGIC ---
    selectTableItem: function(col, idx) {
        if(document.getElementById(`tm-${col}-${idx}`).style.opacity === '0.3') return;

        if(this.tableSelections[col] !== null) {
            document.getElementById(`tm-${col}-${this.tableSelections[col]}`).style.borderColor = 'rgba(255,255,255,0.1)';
            document.getElementById(`tm-${col}-${this.tableSelections[col]}`).style.background = 'transparent';
        }

        this.tableSelections[col] = idx;
        const el = document.getElementById(`tm-${col}-${idx}`);
        el.style.borderColor = 'var(--cyan)';
        el.style.background = 'rgba(6, 182, 212, 0.1)';

        if(this.tableSelections.a !== null && this.tableSelections.b !== null && this.tableSelections.c !== null) {
            this.evaluateTableMatch();
        }
    },

    evaluateTableMatch: function() {
        const item = this.currentExercise;
        const sa = this.tableSelections.a;
        const sb = this.tableSelections.b;
        const sc = this.tableSelections.c;

        const isCorrect = item.correct_matches.some(match => match.a === sa && match.b === sb && match.c === sc);

        if(isCorrect) {
            if(navigator.vibrate) navigator.vibrate(50);
            
            const sentence = `${item.columns.A[sa]} ${item.columns.B[sb]} ${item.columns.C[sc]}`;
            this.tableCompleted.push(sentence);

            ['a', 'b', 'c'].forEach(col => {
                const el = document.getElementById(`tm-${col}-${this.tableSelections[col]}`);
                el.style.opacity = '0.3';
                el.style.borderColor = 'rgba(255,255,255,0.05)';
                el.style.background = 'transparent';
                this.tableSelections[col] = null;
            });

            let listHtml = '';
            this.tableCompleted.forEach((sent, i) => {
                listHtml += `<div class="glass-card fade-in" style="padding: 12px; border-left: 3px solid #10b981; font-size: 14px;">${i+1}. ${sent}</div>`;
            });
            document.getElementById('table-completed-list').innerHTML = listHtml;

            if(this.tableCompleted.length === item.correct_matches.length) {
                setTimeout(() => alert("🏆 Excellent! You matched all sentences correctly."), 300);
            }

        } else {
            if(navigator.vibrate) navigator.vibrate([50, 50]);
            
            ['a', 'b', 'c'].forEach(col => {
                const el = document.getElementById(`tm-${col}-${this.tableSelections[col]}`);
                el.style.borderColor = '#ef4444';
                el.style.background = 'rgba(239, 68, 68, 0.1)';
                
                setTimeout(() => {
                    if(el.style.opacity !== '0.3') {
                        el.style.borderColor = 'rgba(255,255,255,0.1)';
                        el.style.background = 'transparent';
                    }
                }, 500);
                this.tableSelections[col] = null;
            });
        }
    }
};
