/* boss-engine.js - Dedicated Varsity Simulator Logic */

const BossEngine = {
    correctCount: 0,
    totalAnswered: 0,
    answeredQuestions: new Set(),

    init: function() {
        // EXPLICITLY checking the global window object
        if (!window.bossDB || window.bossDB.length === 0) {
            const container = document.getElementById('boss-exam-container');
            if(container) {
                container.innerHTML = `
                    <div style="text-align:center; padding:50px 20px;">
                        <i class="fas fa-tools" style="font-size:50px; color:var(--text-sub); margin-bottom:20px;"></i>
                        <h3 style="font-family:'Outfit'; color:var(--text-main); font-size:22px; font-weight:800;">Forge Empty</h3>
                        <p style="color:var(--text-sub); font-size:15px; line-height:1.6;">Asif is currently loading the deadly Varsity questions into boss-db.js.<br>Prepare yourself.</p>
                    </div>`;
            }
            return;
        }

        let totalScoreEl = document.getElementById('score-total');
        if(totalScoreEl) totalScoreEl.innerText = window.bossDB.length;
        
        this.renderQuestions();
    },

    renderQuestions: function() {
        const container = document.getElementById('boss-exam-container');
        if(!container) return;

        let html = '';

        window.bossDB.forEach((qData, qIndex) => {
            html += `
            <div class="q-card" id="qcard-${qIndex}">
                <div class="q-text"><span class="q-num">${qIndex + 1}.</span> ${qData.q}</div>`;
            
            qData.options.forEach((opt, oIndex) => {
                let letter = ['A', 'B', 'C', 'D', 'E'][oIndex] || oIndex;
                html += `<button class="opt-btn" id="boss-opt-${qIndex}-${oIndex}" onclick="BossEngine.checkAnswer(${qIndex}, ${oIndex})">${letter}) ${opt}</button>`;
            });

            html += `
                <div class="exp-box" id="boss-exp-${qIndex}"></div>
            </div>`;
        });

        container.innerHTML = html;
    },

    checkAnswer: function(qIndex, selectedIndex) {
        const qData = window.bossDB[qIndex];
        const correctIndex = qData.ans;

        if(this.answeredQuestions.has(qIndex)) return;
        this.answeredQuestions.add(qIndex);

        for (let i = 0; i < qData.options.length; i++) {
            let btn = document.getElementById(`boss-opt-${qIndex}-${i}`);
            if (btn) { btn.disabled = true; btn.style.pointerEvents = 'none'; }
        }

        let selectedBtn = document.getElementById(`boss-opt-${qIndex}-${selectedIndex}`);
        let correctBtn = document.getElementById(`boss-opt-${qIndex}-${correctIndex}`);

        if (selectedIndex === correctIndex) {
            if (selectedBtn) {
                selectedBtn.classList.add('correct');
                selectedBtn.innerHTML += ' <i class="fas fa-check-circle" style="float:right;"></i>';
            }
            this.correctCount++;
            if (navigator.vibrate && localStorage.getItem('champSounds') !== 'false') navigator.vibrate(20);
        } else {
            if (selectedBtn) {
                selectedBtn.classList.add('wrong');
                selectedBtn.innerHTML += ' <i class="fas fa-times-circle" style="float:right;"></i>';
            }
            if (correctBtn) correctBtn.classList.add('correct');
            if (navigator.vibrate && localStorage.getItem('champSounds') !== 'false') navigator.vibrate([50, 50, 50]);
        }

        let expBox = document.getElementById(`boss-exp-${qIndex}`);
        if (expBox) {
            expBox.innerHTML = `<b>Varsity Rule:</b> ${qData.exp}`;
            expBox.style.display = 'block';
        }

        this.totalAnswered++;
        let scoreCorrectEl = document.getElementById('score-correct');
        if(scoreCorrectEl) scoreCorrectEl.innerText = this.correctCount;

        if (this.totalAnswered === window.bossDB.length) {
            let finishBtn = document.getElementById('finish-boss-btn');
            if(finishBtn) finishBtn.style.display = 'block';
        }
    },

    finishExam: function() {
        let percentage = Math.round((this.correctCount / window.bossDB.length) * 100);
        let msg = "";

        if (percentage >= 90) msg = "Absolutely Legendary. You are Varsity Material! 👑";
        else if (percentage >= 70) msg = "Great effort! A little more polish and you are unstoppable. 🔥";
        else msg = "The Boss got you. Go back to the Grammar Matrix and train harder! 💀";

        alert(`Final Score: ${this.correctCount} / ${window.bossDB.length} (${percentage}%)\n\n${msg}`);
        
        if (navigator.vibrate && localStorage.getItem('champSounds') !== 'false') navigator.vibrate([100, 50, 100, 50, 300]);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

window.addEventListener('load', () => {
    BossEngine.init();
});
