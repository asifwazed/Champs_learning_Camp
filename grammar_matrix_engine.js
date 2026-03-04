const MatrixEngine = {
    init: function() {
        this.renderMatrix();
    },
    
    renderMatrix: function() {
        const container = document.getElementById('matrix-container');
        let html = '';
        
        const tiers = [
            { limit: 10, name: "Tier 1: Foundations", color: "#10b981", bg: "rgba(16, 185, 129, 0.1)" },
            { limit: 20, name: "Tier 2: Sentence Mechanics", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.1)" },
            { limit: 30, name: "Tier 3: The Board Traps", color: "#3b82f6", bg: "rgba(59, 130, 246, 0.1)" },
            { limit: 40, name: "Tier 4: Voice & Narration", color: "#ec4899", bg: "rgba(236, 72, 153, 0.1)" },
            { limit: 50, name: "Tier 5: Confusing Pairs", color: "#8b5cf6", bg: "rgba(139, 92, 246, 0.1)" },
            { limit: 60, name: "Tier 6: Varsity Modifiers", color: "#06b6d4", bg: "rgba(6, 182, 212, 0.1)" },
            { limit: 70, name: "Tier 7: Plurals & Prepositions", color: "#f97316", bg: "rgba(249, 115, 22, 0.1)" },
            { limit: 80, name: "Tier 8: Phrasal Verbs", color: "#d946ef", bg: "rgba(217, 70, 239, 0.1)" },
            { limit: 90, name: "Tier 9: Advanced Connectors", color: "#14b8a6", bg: "rgba(20, 184, 166, 0.1)" },
            { limit: 100, name: "Tier 10: Grandmaster Rules", color: "#ef4444", bg: "rgba(239, 68, 68, 0.1)" }
        ];

        const funIcons = ['fa-bolt', 'fa-fire', 'fa-crown', 'fa-star', 'fa-rocket', 'fa-gem', 'fa-brain', 'fa-lightbulb', 'fa-compass', 'fa-magic'];
        
        let availableModules = [];
        if(typeof matrixDB !== 'undefined') {
            availableModules = Object.keys(matrixDB).map(k => ({
                id: k,
                num: parseInt(k.replace('m', '')),
                data: matrixDB[k]
            })).sort((a, b) => a.num - b.num);
        }

        let currentTierIndex = -1;

        if(availableModules.length === 0) {
            container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-sub);">Database is updating. Check back soon.</div>`;
            return;
        }

        availableModules.forEach((mod) => {
            let tierIndex = tiers.findIndex(t => mod.num <= t.limit);
            if(tierIndex === -1) tierIndex = tiers.length - 1;

            if(tierIndex !== currentTierIndex) {
                currentTierIndex = tierIndex;
                let tierDef = tiers[tierIndex];
                html += `<div class="section-title"><i class="fas fa-layer-group" style="color:${tierDef.color};"></i> ${tierDef.name}</div>`;
            }

            let iconClass = funIcons[mod.num % funIcons.length];
            let isDone = localStorage.getItem('grammar_' + mod.id + '_done') === 'true';

            html += `
            <div class="magnet-card magnet-element" onclick="MatrixEngine.openModule('${mod.id}')">
                <div class="card-icon" style="background:${tiers[tierIndex].bg}; color:${tiers[tierIndex].color};">
                    <i class="fas ${isDone ? 'fa-check-double' : iconClass}"></i>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${mod.num}. ${mod.data.title}</h3>
                    <p class="card-desc">${isDone ? 'Completed Masterfully' : 'Tap to read & take exam'}</p>
                </div>
                <i class="fas ${isDone ? 'fa-check-circle' : 'fa-chevron-right'} status-icon" style="color: ${isDone ? '#10b981' : 'var(--text-sub)'}"></i>
            </div>`;
        });

        container.innerHTML = html;
    },

    openModule: function(modId) {
        window.currentModId = modId;
        const data = matrixDB[modId];
        
        document.getElementById('theory-title').innerText = data.title;
        document.getElementById('theory-content').innerHTML = data.theoryHTML;
        document.getElementById('theory-overlay').style.display = 'flex';
        document.getElementById('theory-overlay').scrollTop = 0;
    },

    closeOverlay: function(id) {
        document.getElementById(id).style.display = 'none';
    },

    startRapidFire: function() {
        const data = matrixDB[window.currentModId];
        if(!data || !data.quiz || data.quiz.length === 0) {
            alert("Asif is adding exam questions for this module soon!");
            return;
        }
        
        this.closeOverlay('theory-overlay');
        document.getElementById('quiz-overlay').style.display = 'flex';
        document.getElementById('finish-btn').style.display = 'none';
        this.loadQuizQuestions();
    },

    loadQuizQuestions: function() {
        const data = matrixDB[window.currentModId];
        let html = '';
        
        data.quiz.forEach((qData, qIndex) => {
            html += `<div style="background:var(--card-bg); padding:20px; border-radius:16px; margin-bottom:20px; border:1px solid var(--border-color); box-shadow:0 4px 15px rgba(0,0,0,0.05);">
                <div style="font-size: 16px; font-weight: 800; color: var(--text-main); margin-bottom: 15px; line-height: 1.4;">${qIndex + 1}. ${qData.q}</div>`;
            
            qData.options.forEach((opt, oIndex) => {
                html += `<button class="opt-btn-new" id="gm-opt-${qIndex}-${oIndex}" onclick="MatrixEngine.checkQuizAnswer(${qIndex}, ${oIndex})">${['a','b','c','d'][oIndex]}) ${opt}</button>`;
            });
            
            html += `<div id="gm-exp-${qIndex}" style="display:none; margin-top:15px; padding:15px; background:rgba(6, 182, 212, 0.1); border-left:4px solid var(--cyan); border-radius:8px; font-size:14px; color:var(--text-main); line-height:1.5;"></div>
            </div>`;
        });
        
        document.getElementById('quiz-questions-container').innerHTML = html;
        document.getElementById('quiz-overlay').scrollTop = 0;
    },

    checkQuizAnswer: function(qIndex, selectedIndex) {
        const data = matrixDB[window.currentModId];
        const qData = data.quiz[qIndex];
        const correctIndex = qData.ans;
        
        for(let i=0; i < qData.options.length; i++) {
            let btn = document.getElementById(`gm-opt-${qIndex}-${i}`);
            if(btn) { btn.disabled = true; btn.style.pointerEvents = 'none'; }
        }
        
        let selectedBtn = document.getElementById(`gm-opt-${qIndex}-${selectedIndex}`);
        let correctBtn = document.getElementById(`gm-opt-${qIndex}-${correctIndex}`);
        
        if(selectedIndex === correctIndex) {
            selectedBtn.classList.add('correct');
            selectedBtn.innerHTML += ' <i class="fas fa-check-circle" style="float:right;"></i>';
            if(navigator.vibrate && localStorage.getItem('champSounds') !== 'false') navigator.vibrate(20);
        } else {
            selectedBtn.classList.add('wrong');
            selectedBtn.innerHTML += ' <i class="fas fa-times-circle" style="float:right;"></i>';
            correctBtn.classList.add('correct');
            if(navigator.vibrate && localStorage.getItem('champSounds') !== 'false') navigator.vibrate([50, 50, 50]);
        }
        
        let expBox = document.getElementById(`gm-exp-${qIndex}`);
        expBox.innerHTML = `<b>Rule:</b> ${qData.exp}`;
        expBox.style.display = 'block';

        const allAnswered = document.querySelectorAll('.correct, .wrong').length >= data.quiz.length;
        if(allAnswered) document.getElementById('finish-btn').style.display = 'block';
    },

    finishExam: function() {
        localStorage.setItem(`grammar_${window.currentModId}_done`, 'true');
        this.closeOverlay('quiz-overlay');
        this.renderMatrix(); 
        
        if(navigator.vibrate && localStorage.getItem('champSounds') !== 'false') navigator.vibrate([100, 50, 100, 50, 200]);
        setTimeout(() => alert("🎉 Module Completed! Great job."), 200);
    }
};

window.onload = () => MatrixEngine.init();
