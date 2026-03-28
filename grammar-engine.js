/* grammar-engine.js - The Universal Dynamic Engine (Auto-Scales to Database Size) */

const GrammarEngine = {
    currentCategory: null,
    currentExercise: null,
    tableSelections: { a: null, b: null, c: null },
    tableCompleted: [],
    userRearrangeOrder: [], 

    init: function() {
        this.renderMenu();
    },

    renderMenu: function() {
        this.currentCategory = null;
        let html = `<div class="fade-in" style="display: grid; grid-template-columns: 1fr; gap: 15px;">`;

        // 1. Auto-detect "With Clues"
        if (typeof grammarData !== 'undefined' && grammarData.with_clues && grammarData.with_clues.exercises) {
            let count = grammarData.with_clues.exercises.length;
            html += `
            <div onclick="GrammarEngine.openList('with_clues')" class="magnet-element glass-card" style="padding: 25px; display: flex; align-items: center; gap: 20px; position: relative; overflow: hidden; cursor:pointer;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: var(--cyan);"></div>
                <div style="width: 60px; height: 60px; background: rgba(6, 182, 212, 0.1); color: var(--cyan); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid rgba(6, 182, 212, 0.2);"><i class="fas fa-puzzle-piece"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px;">Cloze Test (With Clues)</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: var(--text-sub); font-weight: 600;">${count} Exercises • Exact Match</p>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-sub);"></i>
            </div>`;
        }
        
        // 2. Auto-detect "Without Clues"
        if (typeof grammarData !== 'undefined' && grammarData.without_clues && grammarData.without_clues.exercises) {
            let count = grammarData.without_clues.exercises.length;
            html += `
            <div onclick="GrammarEngine.openList('without_clues')" class="magnet-element glass-card" style="padding: 25px; display: flex; align-items: center; gap: 20px; position: relative; overflow: hidden; cursor:pointer;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #6366f1;"></div>
                <div style="width: 60px; height: 60px; background: rgba(99, 102, 241, 0.1); color: #6366f1; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid rgba(99, 102, 241, 0.2);"><i class="fas fa-eye-slash"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px;">Cloze Test (Without Clues)</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: var(--text-sub); font-weight: 600;">${count} Exercises • Synonyms Accepted</p>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-sub);"></i>
            </div>`;
        }

        // 3. Auto-detect "Matrix Matcher (Table)"
        if (typeof grammarData !== 'undefined' && grammarData.table_match && grammarData.table_match.exercises) {
            let count = grammarData.table_match.exercises.length;
            html += `
            <div onclick="GrammarEngine.openList('table_match')" class="magnet-element glass-card" style="padding: 25px; display: flex; align-items: center; gap: 20px; position: relative; overflow: hidden; cursor:pointer;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #10b981;"></div>
                <div style="width: 60px; height: 60px; background: rgba(16, 185, 129, 0.1); color: #10b981; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid rgba(16, 185, 129, 0.2);"><i class="fas fa-columns"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px;">Matrix Matcher (Table)</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: var(--text-sub); font-weight: 600;">${count} Exercises • Board Standard</p>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-sub);"></i>
            </div>`;
        }

        // 4. Auto-detect "Rearrange"
        if (typeof grammarData !== 'undefined' && grammarData.rearrange && grammarData.rearrange.exercises) {
            let count = grammarData.rearrange.exercises.length;
            html += `
            <div onclick="GrammarEngine.openList('rearrange')" class="magnet-element glass-card" style="padding: 25px; display: flex; align-items: center; gap: 20px; position: relative; overflow: hidden; cursor:pointer;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #ec4899;"></div>
                <div style="width: 60px; height: 60px; background: rgba(236, 72, 153, 0.1); color: #ec4899; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid rgba(236, 72, 153, 0.2);"><i class="fas fa-sort-numeric-down"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px;">Rearranging Sentences</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: var(--text-sub); font-weight: 600;">${count} Exercises • Narrative Order</p>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-sub);"></i>
            </div>`;
        }

        html += `</div>`;
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

        // CLOZE TESTS (With & Without Clues)
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
            
            if(item.bangla) {
                html += `
                <button class="magnet-element glass-card" onclick="document.getElementById('b-context').style.display='block'; this.style.display='none';" style="margin-top:20px; padding:15px 20px; font-weight:700; cursor:pointer; width:100%; border-radius:12px; color: white; background: transparent; border: 1px solid rgba(255,255,255,0.1);"><i class="fas fa-language" style="color:var(--cyan);"></i> Show Bangla Context</button>
                <div id="b-context" class="glass-card" style="display:none; margin-top:20px; padding:15px; border-left:4px solid var(--cyan); border-radius:12px; font-size:14px; line-height:1.6;"><strong>Bangla Meaning:</strong><br>${item.bangla}</div>
                `;
            }
        } 
        
        // MATRIX MATCHER (Table)
        else if (this.currentCategory === 'table_match') {
            this.tableSelections = { a: null, b: null, c: null };
            this.tableCompleted = [];
            
            html += `<div style="color:var(--text-sub); font-size:13px; font-weight:700; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;"><i class="fas fa-link"></i> Select one from each column</div>`;
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
        
        // REARRANGE
        else if (this.currentCategory === 'rearrange') {
            this.userRearrangeOrder = [];
            html += `<div style="color:var(--text-sub); font-size:13px; font-weight:700; margin-bottom:10px; text-transform:uppercase; letter-spacing:1px;"><i class="fas fa-hand-pointer"></i> Tap sentences to order them</div>`;
            html += `<div class="order-box glass-card" id="rearrange-target" style="min-height: 100px; padding: 15px; margin-bottom: 20px; border: 1px dashed rgba(255,255,255,0.2);"></div>`;
            
            html += `<div id="rearrange-source" style="display: flex; flex-direction: column; gap: 10px;">`;
            item.sentences.forEach((sent, idx) => {
                html += `
                <div class="r-sentence glass-card magnet-element" id="rsource-${idx}" onclick="GrammarEngine.tapToOrder(${idx})" style="padding: 15px; display: flex; align-items: center; gap: 15px; cursor: pointer;">
                    <div style="background: rgba(255,255,255,0.1); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px;"><i class="fas fa-plus"></i></div>
                    <div style="line-height:1.4;">${sent}</div>
                </div>`;
            });
            html += `</div>`;
            html += `<button class="magnet-element" onclick="GrammarEngine.checkRearrange()" style="width:100%; background:linear-gradient(135deg, #ec4899, #be185d); color:white; padding:18px; border:none; border-radius:16px; font-family:'Outfit'; font-weight:800; font-size:16px; margin-top:20px; box-shadow:0 10px 20px rgba(236, 72, 153, 0.3); cursor:pointer;">Submit Sequence <i class="fas fa-check-double"></i></button>`;
        }

        html += `</div>`;
        document.getElementById('app-container').innerHTML = html;
        window.scrollTo(0, 0);
    },

    // --- LOGIC FUNCTIONS ---

    checkClozeGap: function(inputEl, encodedAnswersStr, nextId) {
        let val = inputEl.value.toLowerCase().trim();
        let decodedStr = decodeURIComponent(encodedAnswersStr);
        let validAnswers = decodedStr.split('/');

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
    },

    tapToOrder: function(originalIndex) {
        if(this.userRearrangeOrder.includes(originalIndex)) return; 
        const el = document.getElementById(`rsource-${originalIndex}`);
        el.style.opacity = '0.3';
        el.style.pointerEvents = 'none';
        this.userRearrangeOrder.push(originalIndex);
        this.renderRearrangeTarget();
    },

    removeOrder: function(orderArrayIndex) {
        let originalIndex = this.userRearrangeOrder[orderArrayIndex];
        this.userRearrangeOrder.splice(orderArrayIndex, 1);
        const el = document.getElementById(`rsource-${originalIndex}`);
        el.style.opacity = '1';
        el.style.pointerEvents = 'auto';
        this.renderRearrangeTarget();
    },

    renderRearrangeTarget: function() {
        const targetBox = document.getElementById('rearrange-target');
        if(this.userRearrangeOrder.length === 0) {
            targetBox.innerHTML = '<div style="color:var(--text-sub); text-align:center; padding:20px; font-weight:600;"><i class="fas fa-box-open" style="font-size:30px; display:block; margin-bottom:10px; opacity:0.5;"></i> Order Box is Empty</div>';
            return;
        }

        let html = '<div style="display:flex; flex-direction:column; gap:10px;">';
        this.userRearrangeOrder.forEach((originalIndex, orderArrayIndex) => {
            let sent = this.currentExercise.sentences[originalIndex];
            html += `
            <div class="glass-card fade-in" id="oslot-${orderArrayIndex}" onclick="GrammarEngine.removeOrder(${orderArrayIndex})" style="padding: 12px; display: flex; align-items: center; gap: 15px; cursor: pointer; border: 1px solid rgba(255,255,255,0.1);">
                <div style="background: rgba(255,255,255,0.1); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">${orderArrayIndex + 1}</div>
                <div style="line-height:1.4; font-size:14px;">${sent}</div>
                <i class="fas fa-times" style="margin-left:auto; color:var(--text-sub); opacity:0.5;"></i>
            </div>`;
        });
        html += '</div>';
        targetBox.innerHTML = html;
    },

    checkRearrange: function() {
        const target = this.currentExercise.correctOrder;
        const user = this.userRearrangeOrder;

        if(user.length !== target.length) {
            alert("Please arrange all the sentences before checking!");
            return;
        }

        let isPerfect = true;
        for(let i=0; i<target.length; i++) {
            let slotEl = document.getElementById(`oslot-${i}`);
            if(user[i] === target[i]) {
                slotEl.style.borderColor = '#10b981';
                slotEl.style.background = 'rgba(16, 185, 129, 0.05)';
            } else {
                slotEl.style.borderColor = '#ef4444';
                slotEl.style.background = 'rgba(239, 68, 68, 0.05)';
                isPerfect = false;
            }
        }

        if(isPerfect) {
            if(navigator.vibrate) navigator.vibrate(100);
            setTimeout(() => alert("🏆 Perfect Sequence!"), 400);
        } else {
            if(navigator.vibrate) navigator.vibrate([50, 50, 50]);
            alert("❌ Some sentences are in the wrong position (marked red). Tap them to remove and try again.");
        }
    }
};
