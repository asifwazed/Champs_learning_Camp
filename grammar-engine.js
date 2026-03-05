/* grammar-engine.js - Part B Logic (Cloze Tests & Rearrange) - Dual Theme Ready */

const GrammarEngine = {
    currentCategory: null,
    currentExercise: null,
    userRearrangeOrder: [], 

    init: function() {
        this.renderMenu();
    },

    renderMenu: function() {
        this.currentCategory = null;
        const html = `
        <div class="fade-in" style="display: grid; grid-template-columns: 1fr; gap: 15px;">
            
            <div onclick="GrammarEngine.openList('with_clues')" class="magnet-element glass-card" style="padding: 25px; display: flex; align-items: center; gap: 20px; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: var(--cyan);"></div>
                <div style="width: 60px; height: 60px; background: rgba(6, 182, 212, 0.1); color: var(--cyan); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid rgba(6, 182, 212, 0.2);"><i class="fas fa-puzzle-piece"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px;">Cloze Test (With Clues)</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: var(--text-sub); font-weight: 600;">5 Marks • Board Questions</p>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-sub);"></i>
            </div>
            
            <div onclick="GrammarEngine.openList('without_clues')" class="magnet-element glass-card" style="padding: 25px; display: flex; align-items: center; gap: 20px; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #6366f1;"></div>
                <div style="width: 60px; height: 60px; background: rgba(99, 102, 241, 0.1); color: #6366f1; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid rgba(99, 102, 241, 0.2);"><i class="fas fa-eye-slash"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px;">Cloze Test (Without Clues)</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: var(--text-sub); font-weight: 600;">10 Marks • Board Questions</p>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-sub);"></i>
            </div>

            <div onclick="GrammarEngine.openList('rearrange')" class="magnet-element glass-card" style="padding: 25px; display: flex; align-items: center; gap: 20px; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #ec4899;"></div>
                <div style="width: 60px; height: 60px; background: rgba(236, 72, 153, 0.1); color: #ec4899; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid rgba(236, 72, 153, 0.2);"><i class="fas fa-sort-numeric-down"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px;">Rearranging Sentences</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: var(--text-sub); font-weight: 600;">10 Marks • Board Questions</p>
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
            <button onclick="GrammarEngine.renderMenu()" class="magnet-element glass-card" style="padding: 12px 20px; border-radius: 50px; font-weight: 700; margin-bottom: 20px; cursor:pointer;"><i class="fas fa-arrow-left"></i> Categories</button>
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
            <button onclick="GrammarEngine.openList('${this.currentCategory}')" class="magnet-element glass-card" style="padding: 12px 20px; border-radius: 50px; font-weight: 700; margin-bottom: 20px; cursor:pointer;"><i class="fas fa-arrow-left"></i> Back to List</button>
            <h2 style="font-family:'Outfit'; margin: 0 0 20px;">${item.title}</h2>
        `;

        if (this.currentCategory === 'with_clues' || this.currentCategory === 'without_clues') {
            
            if (item.clues) {
                html += `<div class="clue-box">`;
                item.clues.forEach(c => html += `<div class="clue-word">${c}</div>`);
                html += `</div>`;
            }

            let parsedText = item.text;
            
            // Replacing [a], [b], [c] with inputs
            parsedText = parsedText.replace(/\[([a-j])\]/g, (match, letter) => {
                let answerObj = item.answers[letter];
                if (!answerObj) return match; 
                
                let validAnswersStr = encodeURIComponent(answerObj.ans.toLowerCase()); 
                let nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
                let nextId = (nextLetter <= 'j') ? `gap-${nextLetter}` : '';

                let inputHtml = `<input type="text" id="gap-${letter}" class="gap-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" onkeyup="GrammarEngine.checkClozeGap(this, '${validAnswersStr}', '${nextId}')">`;
                return inputHtml;
            });

            html += `<div class="passage-box glass-card">${parsedText}</div>`;
            
            if(item.bangla) {
                html += `
                <button class="magnet-element glass-card" onclick="document.getElementById('b-context').style.display='block'; this.style.display='none';" style="margin-top:20px; padding:15px 20px; font-weight:700; cursor:pointer; width:100%; border-radius:12px;"><i class="fas fa-language" style="color:var(--cyan);"></i> Show Bangla Context</button>
                <div id="b-context" class="glass-card" style="display:none; margin-top:20px; padding:15px; border-left:4px solid var(--cyan); border-radius:12px; font-size:14px; line-height:1.6;"><strong>Bangla Meaning:</strong><br>${item.bangla}</div>
                `;
            }

        } else if (this.currentCategory === 'rearrange') {
            this.userRearrangeOrder = [];
            html += `<div style="color:var(--text-sub); font-size:13px; font-weight:700; margin-bottom:10px; text-transform:uppercase; letter-spacing:1px;"><i class="fas fa-hand-pointer"></i> Tap sentences to order them</div>`;
            
            html += `<div class="order-box" id="rearrange-target"></div>`;
            
            html += `<div id="rearrange-source">`;
            item.sentences.forEach((sent, idx) => {
                html += `
                <div class="r-sentence glass-card magnet-element" id="rsource-${idx}" onclick="GrammarEngine.tapToOrder(${idx})">
                    <div class="r-index"><i class="fas fa-plus"></i></div>
                    <div style="line-height:1.4;">${sent}</div>
                </div>`;
            });
            html += `</div>`;
            
            html += `<button class="magnet-element" onclick="GrammarEngine.checkRearrange()" style="width:100%; background:linear-gradient(135deg, var(--cyan), #0284c7); color:white; padding:18px; border:none; border-radius:16px; font-family:'Outfit'; font-weight:800; font-size:16px; margin-top:20px; box-shadow:0 10px 20px rgba(6, 182, 212, 0.3); cursor:pointer;">Submit Sequence <i class="fas fa-check-double"></i></button>`;
        }

        html += `</div>`;
        document.getElementById('app-container').innerHTML = html;
        window.scrollTo(0, 0);
    },

    checkClozeGap: function(inputEl, encodedAnswersStr, nextId) {
        let val = inputEl.value.toLowerCase().trim();
        let decodedStr = decodeURIComponent(encodedAnswersStr);
        let validAnswers = decodedStr.split('/');

        if (validAnswers.includes(val)) {
            inputEl.classList.add('correct');
            inputEl.classList.remove('wrong');
            inputEl.disabled = true; 
            
            if (nextId && document.getElementById(nextId)) {
                document.getElementById(nextId).focus();
            } else {
                if(navigator.vibrate) navigator.vibrate(100);
            }
        } else if (val.length > 2) {
            inputEl.classList.add('wrong');
        } else {
            inputEl.classList.remove('wrong');
        }
    },

    tapToOrder: function(originalIndex) {
        if(this.userRearrangeOrder.includes(originalIndex)) return; 
        
        document.getElementById(`rsource-${originalIndex}`).classList.add('used');
        this.userRearrangeOrder.push(originalIndex);
        this.renderRearrangeTarget();
    },

    removeOrder: function(orderArrayIndex) {
        let originalIndex = this.userRearrangeOrder[orderArrayIndex];
        this.userRearrangeOrder.splice(orderArrayIndex, 1);
        document.getElementById(`rsource-${originalIndex}`).classList.remove('used');
        this.renderRearrangeTarget();
    },

    renderRearrangeTarget: function() {
        const targetBox = document.getElementById('rearrange-target');
        if(this.userRearrangeOrder.length === 0) {
            targetBox.innerHTML = '<div style="color:var(--text-sub); text-align:center; margin-top:50px; font-weight:600;"><i class="fas fa-box-open" style="font-size:30px; display:block; margin-bottom:10px; opacity:0.5;"></i> Order Box is Empty</div>';
            return;
        }

        let html = '';
        this.userRearrangeOrder.forEach((originalIndex, orderArrayIndex) => {
            let sent = this.currentExercise.sentences[originalIndex];
            html += `
            <div class="order-slot magnet-element" id="oslot-${orderArrayIndex}" onclick="GrammarEngine.removeOrder(${orderArrayIndex})">
                <div style="background:var(--input-bg); width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; flex-shrink:0; border: 1px solid var(--border-color);">${orderArrayIndex + 1}</div>
                <div style="line-height:1.4; font-size:14px;">${sent}</div>
                <i class="fas fa-times" style="margin-left:auto; color:var(--text-sub); opacity:0.5;"></i>
            </div>`;
        });
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
                slotEl.className = "order-slot success";
            } else {
                slotEl.className = "order-slot error";
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
