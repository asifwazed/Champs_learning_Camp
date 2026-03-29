/* grammar-engine.js - Universal Dynamic Engine (Auto-Shuffling & 5 Categories) */

const GrammarEngine = {
    currentCategory: null,
    currentExercise: null,
    tableSelections: { a: null, b: null, c: null },
    tableCompleted: [],
    userRearrangeOrder: [], 

    init: function() {
        this.renderMenu();
    },

    // Utility: Fisher-Yates Shuffle Algorithm
    shuffleArray: function(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    },

    renderMenu: function() {
        this.currentCategory = null;
        let html = `<div class="fade-in" style="display: grid; grid-template-columns: 1fr; gap: 15px;">`;

        if (typeof grammarData !== 'undefined' && grammarData.with_clues && grammarData.with_clues.exercises) {
            html += this.createMenuCard('with_clues', 'Cloze Test (With Clues)', `${grammarData.with_clues.exercises.length} Exercises • Exact Match`, 'fa-puzzle-piece', 'var(--cyan)');
        }
        if (typeof grammarData !== 'undefined' && grammarData.without_clues && grammarData.without_clues.exercises) {
            html += this.createMenuCard('without_clues', 'Cloze Test (Without Clues)', `${grammarData.without_clues.exercises.length} Exercises • Synonyms Accepted`, 'fa-eye-slash', '#6366f1');
        }
        if (typeof grammarData !== 'undefined' && grammarData.table_match && grammarData.table_match.exercises) {
            html += this.createMenuCard('table_match', 'Sentence Matrix (3-Column)', `${grammarData.table_match.exercises.length} Exercises • Shuffled Board`, 'fa-table', '#f59e0b');
        }
        if (typeof grammarData !== 'undefined' && grammarData.vocab_match && grammarData.vocab_match.exercises) {
            html += this.createMenuCard('vocab_match', 'Vocabulary Match (2-Column)', `${grammarData.vocab_match.exercises.length} Exercises • PDF Standard`, 'fa-columns', '#10b981');
        }
        if (typeof grammarData !== 'undefined' && grammarData.rearrange && grammarData.rearrange.exercises) {
            html += this.createMenuCard('rearrange', 'Rearranging Sentences', `${grammarData.rearrange.exercises.length} Exercises • Narrative Order`, 'fa-sort-numeric-down', '#ec4899');
        }

        html += `</div>`;
        document.getElementById('app-container').innerHTML = html;
        window.scrollTo(0, 0);
    },

    createMenuCard: function(id, title, subtitle, icon, color) {
        return `
        <div onclick="GrammarEngine.openList('${id}')" class="magnet-element glass-card" style="padding: 25px; display: flex; align-items: center; gap: 20px; position: relative; overflow: hidden; cursor:pointer;">
            <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: ${color};"></div>
            <div style="width: 60px; height: 60px; background: ${color}1A; color: ${color}; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid ${color}33;"><i class="fas ${icon}"></i></div>
            <div style="flex-grow: 1;">
                <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px;">${title}</h3>
                <p style="margin: 4px 0 0; font-size: 12px; color: var(--text-sub); font-weight: 600;">${subtitle}</p>
            </div>
            <i class="fas fa-chevron-right" style="color: var(--text-sub);"></i>
        </div>`;
    },

    openList: function(category) {
        this.currentCategory = category;
        const dataList = grammarData[category].exercises;
        
        let html = `
        <div class="fade-in">
            <button onclick="GrammarEngine.renderMenu()" class="magnet-element glass-card" style="padding: 12px 20px; border-radius: 50px; font-weight: 700; margin-bottom: 20px; cursor:pointer; color: white; border: 1px solid rgba(255,255,255,0.1); background: transparent;"><i class="fas fa-arrow-left"></i> Categories</button>
            <div style="display:flex; flex-direction:column; gap:12px;">`;

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
            <h2 style="font-family:'Outfit'; margin: 0 0 20px;">${item.title}</h2>`;

        // CLOZE TESTS
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
        } 
        
        // 3-COLUMN TABLE MATCH (SHUFFLED)
        else if (this.currentCategory === 'table_match') {
            this.tableSelections = { a: null, b: null, c: null };
            this.tableCompleted = [];
            html += `<div style="color:var(--text-sub); font-size:13px; font-weight:700; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;"><i class="fas fa-random"></i> Match to form sentences</div>`;
            html += `<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 20px;">`;
            
            // Generate shuffled arrays with their original indexes kept intact
            let cols = {
                a: this.shuffleArray(item.columns.A.map((text, idx) => ({text, idx}))),
                b: this.shuffleArray(item.columns.B.map((text, idx) => ({text, idx}))),
                c: this.shuffleArray(item.columns.C.map((text, idx) => ({text, idx})))
            };

            ['a', 'b', 'c'].forEach(col => {
                html += `<div style="display: flex; flex-direction: column; gap: 8px;">`;
                html += `<div style="text-align: center; font-weight: bold; color: var(--cyan); margin-bottom: 5px;">Col ${col.toUpperCase()}</div>`;
                cols[col].forEach((obj) => {
                    html += `<div id="tm-${col}-${obj.idx}" onclick="GrammarEngine.selectTableItem('${col}', ${obj.idx})" class="glass-card" style="padding: 12px; font-size: 13px; cursor: pointer; border: 1px solid rgba(255,255,255,0.1); transition: 0.2s; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 60px;">${obj.text}</div>`;
                });
                html += `</div>`;
            });
            html += `</div>`;

            html += `<div id="table-results" style="margin-top: 20px;"><div id="table-completed-list" style="display: flex; flex-direction: column; gap: 10px;"></div></div>`;
        } 
        
        // 2-COLUMN VOCAB MATCH (PDF FORMAT - SHUFFLED)
        else if (this.currentCategory === 'vocab_match') {
            this.tableSelections = { a: null, b: null };
            this.tableCompleted = [];
            html += `<div style="color:var(--text-sub); font-size:13px; font-weight:700; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;"><i class="fas fa-link"></i> Match the Word with its Meaning</div>`;
            html += `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">`;
            
            let words = item.pairs.map((p, idx) => ({text: p.word, idx})); // A stays in order
            let meanings = this.shuffleArray(item.pairs.map((p, idx) => ({text: p.meaning, idx}))); // B is scrambled

            // Column A (Words)
            html += `<div style="display: flex; flex-direction: column; gap: 8px;"><div style="text-align: center; font-weight: bold; color: var(--cyan); margin-bottom: 5px;">Words</div>`;
            words.forEach((obj) => {
                html += `<div id="vm-a-${obj.idx}" onclick="GrammarEngine.selectVocabItem('a', ${obj.idx})" class="glass-card" style="padding: 12px; font-size: 15px; font-weight: bold; cursor: pointer; border: 1px solid rgba(255,255,255,0.1); transition: 0.2s; text-align: center;">${obj.text}</div>`;
            });
            html += `</div>`;

            // Column B (Meanings)
            html += `<div style="display: flex; flex-direction: column; gap: 8px;"><div style="text-align: center; font-weight: bold; color: #10b981; margin-bottom: 5px;">Meanings</div>`;
            meanings.forEach((obj) => {
                html += `<div id="vm-b-${obj.idx}" onclick="GrammarEngine.selectVocabItem('b', ${obj.idx})" class="glass-card" style="padding: 12px; font-size: 13px; cursor: pointer; border: 1px solid rgba(255,255,255,0.1); transition: 0.2s; text-align: center; line-height: 1.4; min-height: 45px; display: flex; align-items: center; justify-content: center;">${obj.text}</div>`;
            });
            html += `</div></div>`;

            html += `<div id="vocab-results" style="margin-top: 20px;"><div id="vocab-completed-list" style="display: flex; flex-direction: column; gap: 10px;"></div></div>`;
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
        let validAnswers = decodeURIComponent(encodedAnswersStr).split('/');
        if (validAnswers.includes(val)) {
            inputEl.style.borderColor = '#10b981'; inputEl.style.color = '#10b981'; inputEl.disabled = true; 
            if (nextId && document.getElementById(nextId)) document.getElementById(nextId).focus();
        } else if (val.length > 2) {
            inputEl.style.borderColor = '#ef4444'; inputEl.style.color = '#ef4444';
        }
    },

    // 3-Column Table Logic
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
        const sa = this.tableSelections.a; const sb = this.tableSelections.b; const sc = this.tableSelections.c;
        const isCorrect = this.currentExercise.correct_matches.some(m => m.a === sa && m.b === sb && m.c === sc);

        if(isCorrect) {
            const sentence = `${this.currentExercise.columns.A[sa]} ${this.currentExercise.columns.B[sb]} ${this.currentExercise.columns.C[sc]}`;
            this.tableCompleted.push(sentence);
            ['a', 'b', 'c'].forEach(col => {
                const el = document.getElementById(`tm-${col}-${this.tableSelections[col]}`);
                el.style.opacity = '0.3'; el.style.borderColor = 'rgba(255,255,255,0.05)'; el.style.background = 'transparent';
                this.tableSelections[col] = null;
            });
            this.updateCompletedList('table-completed-list', this.tableCompleted, this.currentExercise.correct_matches.length);
        } else {
            if(navigator.vibrate) navigator.vibrate([50, 50]);
            ['a', 'b', 'c'].forEach(col => {
                const el = document.getElementById(`tm-${col}-${this.tableSelections[col]}`);
                el.style.borderColor = '#ef4444'; el.style.background = 'rgba(239, 68, 68, 0.1)';
                setTimeout(() => { if(el.style.opacity !== '0.3') { el.style.borderColor = 'rgba(255,255,255,0.1)'; el.style.background = 'transparent'; } }, 500);
                this.tableSelections[col] = null;
            });
        }
    },

    // 2-Column Vocab Logic
    selectVocabItem: function(col, idx) {
        if(document.getElementById(`vm-${col}-${idx}`).style.opacity === '0.3') return;
        if(this.tableSelections[col] !== null) {
            document.getElementById(`vm-${col}-${this.tableSelections[col]}`).style.borderColor = 'rgba(255,255,255,0.1)';
            document.getElementById(`vm-${col}-${this.tableSelections[col]}`).style.background = 'transparent';
        }
        this.tableSelections[col] = idx;
        const el = document.getElementById(`vm-${col}-${idx}`);
        el.style.borderColor = col === 'a' ? 'var(--cyan)' : '#10b981';
        el.style.background = col === 'a' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(16, 185, 129, 0.1)';

        if(this.tableSelections.a !== null && this.tableSelections.b !== null) {
            this.evaluateVocabMatch();
        }
    },

    evaluateVocabMatch: function() {
        const sa = this.tableSelections.a; const sb = this.tableSelections.b;
        if(sa === sb) { // Match! (Since they share the same index in the DB pair)
            const sentence = `<span style="color:var(--cyan); font-weight:bold;">${this.currentExercise.pairs[sa].word}</span> <i class="fas fa-arrow-right" style="color:var(--text-sub); margin: 0 10px;"></i> ${this.currentExercise.pairs[sb].meaning}`;
            this.tableCompleted.push(sentence);
            ['a', 'b'].forEach(col => {
                const el = document.getElementById(`vm-${col}-${this.tableSelections[col]}`);
                el.style.opacity = '0.3'; el.style.borderColor = 'rgba(255,255,255,0.05)'; el.style.background = 'transparent';
                this.tableSelections[col] = null;
            });
            this.updateCompletedList('vocab-completed-list', this.tableCompleted, this.currentExercise.pairs.length);
        } else {
            if(navigator.vibrate) navigator.vibrate([50, 50]);
            ['a', 'b'].forEach(col => {
                const el = document.getElementById(`vm-${col}-${this.tableSelections[col]}`);
                el.style.borderColor = '#ef4444'; el.style.background = 'rgba(239, 68, 68, 0.1)';
                setTimeout(() => { if(el.style.opacity !== '0.3') { el.style.borderColor = 'rgba(255,255,255,0.1)'; el.style.background = 'transparent'; } }, 500);
                this.tableSelections[col] = null;
            });
        }
    },

    updateCompletedList: function(containerId, list, total) {
        let listHtml = '';
        list.forEach((sent, i) => listHtml += `<div class="glass-card fade-in" style="padding: 12px; border-left: 3px solid #10b981; font-size: 14px;">${i+1}. ${sent}</div>`);
        document.getElementById(containerId).innerHTML = listHtml;
        if(list.length === total) setTimeout(() => alert("🏆 Excellent! You matched them all correctly."), 300);
    },

    // Rearrange Logic
    tapToOrder: function(idx) {
        if(this.userRearrangeOrder.includes(idx)) return; 
        document.getElementById(`rsource-${idx}`).style.opacity = '0.3'; document.getElementById(`rsource-${idx}`).style.pointerEvents = 'none';
        this.userRearrangeOrder.push(idx);
        this.renderRearrangeTarget();
    },
    removeOrder: function(arrIdx) {
        let origIdx = this.userRearrangeOrder[arrIdx];
        this.userRearrangeOrder.splice(arrIdx, 1);
        document.getElementById(`rsource-${origIdx}`).style.opacity = '1'; document.getElementById(`rsource-${origIdx}`).style.pointerEvents = 'auto';
        this.renderRearrangeTarget();
    },
    renderRearrangeTarget: function() {
        const targetBox = document.getElementById('rearrange-target');
        if(this.userRearrangeOrder.length === 0) return targetBox.innerHTML = '<div style="color:var(--text-sub); text-align:center; padding:20px; font-weight:600;">Order Box is Empty</div>';
        let html = '<div style="display:flex; flex-direction:column; gap:10px;">';
        this.userRearrangeOrder.forEach((origIdx, arrIdx) => {
            html += `<div class="glass-card fade-in" id="oslot-${arrIdx}" onclick="GrammarEngine.removeOrder(${arrIdx})" style="padding: 12px; display: flex; align-items: center; gap: 15px; cursor: pointer; border: 1px solid rgba(255,255,255,0.1);"><div style="background: rgba(255,255,255,0.1); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">${arrIdx + 1}</div><div style="line-height:1.4; font-size:14px;">${this.currentExercise.sentences[origIdx]}</div></div>`;
        });
        targetBox.innerHTML = html + '</div>';
    },
    checkRearrange: function() {
        const target = this.currentExercise.correctOrder; const user = this.userRearrangeOrder;
        if(user.length !== target.length) return alert("Please arrange all the sentences before checking!");
        let isPerfect = true;
        for(let i=0; i<target.length; i++) {
            let slotEl = document.getElementById(`oslot-${i}`);
            if(user[i] === target[i]) { slotEl.style.borderColor = '#10b981'; slotEl.style.background = 'rgba(16, 185, 129, 0.05)'; } 
            else { slotEl.style.borderColor = '#ef4444'; slotEl.style.background = 'rgba(239, 68, 68, 0.05)'; isPerfect = false; }
        }
        if(isPerfect) setTimeout(() => alert("🏆 Perfect Sequence!"), 400);
        else alert("❌ Some sentences are in the wrong position (marked red). Tap them to remove and try again.");
    }
};
