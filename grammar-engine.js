/* grammar-engine.js - Part B Logic (Cloze Tests & Rearrange) */

const GrammarEngine = {
    currentCategory: null,
    currentExercise: null,
    userRearrangeOrder: [], // Stores user's tapped sequence

    init: function() {
        this.renderMenu();
    },

    renderMenu: function() {
        this.currentCategory = null;
        const html = `
        <div class="fade-in" style="display: grid; grid-template-columns: 1fr; gap: 15px;">
            
            <div onclick="GrammarEngine.openList('clozeWith')" class="magnet-element" style="background: white; padding: 25px; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); display: flex; align-items: center; gap: 20px; border: 1px solid #ccfbf1; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #14b8a6;"></div>
                <div style="width: 60px; height: 60px; background: #f0fdfa; color: #14b8a6; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px;"><i class="fas fa-puzzle-piece"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px; color: #1e293b;">Cloze Test (With Clues)</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: #64748b; font-weight: 600;">5 Marks • Board Questions</p>
                </div>
                <i class="fas fa-chevron-right" style="color: #99f6e4;"></i>
            </div>
            
            <div onclick="GrammarEngine.openList('clozeWithout')" class="magnet-element" style="background: white; padding: 25px; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); display: flex; align-items: center; gap: 20px; border: 1px solid #e0e7ff; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #6366f1;"></div>
                <div style="width: 60px; height: 60px; background: #eef2ff; color: #6366f1; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px;"><i class="fas fa-eye-slash"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px; color: #1e293b;">Cloze Test (Without Clues)</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: #64748b; font-weight: 600;">5 Marks • Board Questions</p>
                </div>
                <i class="fas fa-chevron-right" style="color: #c7d2fe;"></i>
            </div>

            <div onclick="GrammarEngine.openList('rearrange')" class="magnet-element" style="background: white; padding: 25px; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); display: flex; align-items: center; gap: 20px; border: 1px solid #fce7f3; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: #ec4899;"></div>
                <div style="width: 60px; height: 60px; background: #fdf2f8; color: #ec4899; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px;"><i class="fas fa-sort-numeric-down"></i></div>
                <div style="flex-grow: 1;">
                    <h3 style="margin: 0; font-family: 'Outfit'; font-size: 18px; color: #1e293b;">Rearranging Sentences</h3>
                    <p style="margin: 4px 0 0; font-size: 12px; color: #64748b; font-weight: 600;">10 Marks • Board Questions</p>
                </div>
                <i class="fas fa-chevron-right" style="color: #fbcfe8;"></i>
            </div>

        </div>`;
        document.getElementById('app-container').innerHTML = html;
        window.scrollTo(0, 0);
    },

    openList: function(category) {
        this.currentCategory = category;
        const dataList = grammarDB[category];
        
        let html = `
        <div class="fade-in">
            <button onclick="GrammarEngine.renderMenu()" class="magnet-element" style="background: white; border: 1px solid #e2e8f0; padding: 12px 20px; border-radius: 50px; font-weight: 700; color: #64748b; margin-bottom: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.03);"><i class="fas fa-arrow-left"></i> Categories</button>
            <div style="display:flex; flex-direction:column; gap:12px;">
        `;

        dataList.forEach((item, idx) => {
            html += `
            <div class="magnet-element" onclick="GrammarEngine.openExercise(${idx})" style="background: white; padding: 20px; border-radius: 16px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 5px 15px rgba(0,0,0,0.02);">
                <div style="font-weight: 700; color: #1e293b; font-size: 16px;"><i class="fas fa-file-alt" style="color:#94a3b8; margin-right:10px;"></i> ${item.title}</div>
                <i class="fas fa-chevron-right" style="color: #cbd5e1;"></i>
            </div>`;
        });

        html += `</div></div>`;
        document.getElementById('app-container').innerHTML = html;
        window.scrollTo(0, 0);
    },

    openExercise: function(index) {
        const item = grammarDB[this.currentCategory][index];
        this.currentExercise = item;
        
        let html = `<div class="fade-in">
            <button onclick="GrammarEngine.openList('${this.currentCategory}')" class="magnet-element" style="background: white; border: 1px solid #e2e8f0; padding: 12px 20px; border-radius: 50px; font-weight: 700; color: #64748b; margin-bottom: 20px;"><i class="fas fa-arrow-left"></i> Back to List</button>
            <h2 style="font-family:'Outfit'; color:#1e293b; margin: 0 0 20px;">${item.title}</h2>
        `;

        if (this.currentCategory === 'clozeWith' || this.currentCategory === 'clozeWithout') {
            
            // Build Clue Box if it exists
            if (item.clues) {
                html += `<div class="clue-box">`;
                item.clues.forEach(c => html += `<div class="clue-word">${c}</div>`);
                html += `</div>`;
            }

            // Build Passage with Inputs
            let parsedText = item.text;
            let gapCounter = 0;
            
            // Replace [gap] with magical inputs
            parsedText = parsedText.replace(/\[gap\]/g, () => {
                let validAnswersStr = JSON.stringify(item.answers[gapCounter]); // Pass array as string
                let nextId = `gap-${gapCounter + 1}`;
                let currentId = `gap-${gapCounter}`;
                let inputHtml = `<input type="text" id="${currentId}" class="gap-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" onkeyup="GrammarEngine.checkClozeGap(this, '${validAnswersStr}', '${nextId}')">`;
                gapCounter++;
                return inputHtml;
            });

            html += `<div class="passage-box">${parsedText}</div>`;
            
            // Bangla Context Toggle
            html += `
            <button onclick="document.getElementById('b-context').style.display='block'; this.style.display='none';" style="margin-top:20px; background:rgba(0,0,0,0.05); color:#64748b; border:none; padding:10px 20px; border-radius:12px; font-weight:700; cursor:pointer; width:100%;"><i class="fas fa-language"></i> Show Bangla Context</button>
            <div id="b-context" style="display:none; margin-top:20px; padding:15px; background:#eff6ff; border-left:4px solid #3b82f6; border-radius:12px; color:#1e40af; font-size:14px; line-height:1.6;"><strong>Bangla Meaning:</strong><br>${item.bangla}</div>
            `;

        } else if (this.currentCategory === 'rearrange') {
            this.userRearrangeOrder = [];
            html += `<div style="color:#94a3b8; font-size:13px; font-weight:700; margin-bottom:10px; text-transform:uppercase; letter-spacing:1px;"><i class="fas fa-hand-pointer"></i> Tap sentences to order them</div>`;
            
            // The Box where selected sentences go
            html += `<div class="order-box" id="rearrange-target"></div>`;
            
            // The available scrambled sentences
            html += `<div id="rearrange-source">`;
            item.sentences.forEach((sent, idx) => {
                html += `
                <div class="r-sentence magnet-element" id="rsource-${idx}" onclick="GrammarEngine.tapToOrder(${idx})">
                    <div class="r-index"><i class="fas fa-plus"></i></div>
                    <div style="line-height:1.4;">${sent}</div>
                </div>`;
            });
            html += `</div>`;
            
            html += `<button class="magnet-element" onclick="GrammarEngine.checkRearrange()" style="width:100%; background:linear-gradient(135deg, #14b8a6, #0d9488); color:white; padding:18px; border:none; border-radius:16px; font-family:'Outfit'; font-weight:800; font-size:16px; margin-top:20px; box-shadow:0 10px 20px rgba(20, 184, 166, 0.3);">Submit Sequence <i class="fas fa-check-double"></i></button>`;
        }

        html += `</div>`;
        document.getElementById('app-container').innerHTML = html;
        window.scrollTo(0, 0);
    },

    // --- CLOZE LOGIC ---
    checkClozeGap: function(inputEl, validAnswersStr, nextId) {
        let val = inputEl.value.toLowerCase().trim();
        let validAnswers = JSON.parse(validAnswersStr); // Array of acceptable words

        if (validAnswers.includes(val)) {
            inputEl.classList.add('correct');
            inputEl.classList.remove('wrong');
            inputEl.disabled = true; // Lock it
            
            // Auto Focus Next
            let nextEl = document.getElementById(nextId);
            if (nextEl) {
                nextEl.focus();
            } else {
                // Done with all gaps!
                if(navigator.vibrate) navigator.vibrate(100);
                setTimeout(() => alert("🎉 Brilliant! You completed the passage!"), 300);
            }
        } else if (val.length > 2) {
            // Only show red if they typed more than 2 letters and it's wrong
            inputEl.classList.add('wrong');
        } else {
            inputEl.classList.remove('wrong');
        }
    },

    // --- REARRANGE LOGIC (Tap-to-Order) ---
    tapToOrder: function(originalIndex) {
        if(this.userRearrangeOrder.includes(originalIndex)) return; // Already selected
        
        // Hide from source
        document.getElementById(`rsource-${originalIndex}`).classList.add('used');
        
        // Add to order array
        this.userRearrangeOrder.push(originalIndex);
        this.renderRearrangeTarget();
    },

    removeOrder: function(orderArrayIndex) {
        let originalIndex = this.userRearrangeOrder[orderArrayIndex];
        
        // Remove from order array
        this.userRearrangeOrder.splice(orderArrayIndex, 1);
        
        // Show in source again
        document.getElementById(`rsource-${originalIndex}`).classList.remove('used');
        this.renderRearrangeTarget();
    },

    renderRearrangeTarget: function() {
        const targetBox = document.getElementById('rearrange-target');
        if(this.userRearrangeOrder.length === 0) {
            targetBox.innerHTML = '<div style="color:#64748b; text-align:center; margin-top:50px; font-weight:600;"><i class="fas fa-box-open" style="font-size:30px; display:block; margin-bottom:10px; opacity:0.5;"></i> Order Box is Empty</div>';
            return;
        }

        let html = '';
        this.userRearrangeOrder.forEach((originalIndex, orderArrayIndex) => {
            let sent = this.currentExercise.sentences[originalIndex];
            html += `
            <div class="order-slot magnet-element" id="oslot-${orderArrayIndex}" onclick="GrammarEngine.removeOrder(${orderArrayIndex})">
                <div style="background:rgba(255,255,255,0.1); width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; flex-shrink:0;">${orderArrayIndex + 1}</div>
                <div style="line-height:1.4; font-size:14px;">${sent}</div>
                <i class="fas fa-times" style="margin-left:auto; color:#94a3b8; opacity:0.5;"></i>
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
