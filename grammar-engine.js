/* grammar-engine.js - Interactive engine for Part B */

const GrammarEngine = {
    init: function() {
        this.renderMenu();
    },

    renderMenu: function() {
        const html = `
        <div class="fade-in">
            <div onclick="GrammarEngine.openList('with_clues')" style="background:white; padding:20px; border-radius:24px; margin-bottom:15px; box-shadow:0 10px 30px rgba(0,0,0,0.04); cursor:pointer; display:flex; align-items:center; gap:20px;">
                <div style="width:60px; height:60px; background:#f0fdfa; color:#14b8a6; border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:24px;"><i class="fas fa-puzzle-piece"></i></div>
                <div>
                    <h3 style="margin:0; font-family:'Outfit'; font-size:18px; color:#1e293b;">With Clues</h3>
                    <p style="margin:5px 0 0; font-size:13px; color:#64748b; font-weight:600;">10 Gaps • 0.5 Marks Each</p>
                </div>
                <i class="fas fa-chevron-right" style="margin-left:auto; color:#cbd5e1;"></i>
            </div>

            <div onclick="GrammarEngine.openList('without_clues')" style="background:white; padding:20px; border-radius:24px; margin-bottom:15px; box-shadow:0 10px 30px rgba(0,0,0,0.04); cursor:pointer; display:flex; align-items:center; gap:20px;">
                <div style="width:60px; height:60px; background:#eff6ff; color:#3b82f6; border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:24px;"><i class="fas fa-keyboard"></i></div>
                <div>
                    <h3 style="margin:0; font-family:'Outfit'; font-size:18px; color:#1e293b;">Without Clues</h3>
                    <p style="margin:5px 0 0; font-size:13px; color:#64748b; font-weight:600;">10 Gaps • 1 Mark Each</p>
                </div>
                <i class="fas fa-chevron-right" style="margin-left:auto; color:#cbd5e1;"></i>
            </div>
        </div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    openList: function(type) {
        const data = grammarData[type];
        const title = type === 'with_clues' ? 'With Clues Practice' : 'Without Clues Practice';
        const iconColor = type === 'with_clues' ? '#14b8a6' : '#3b82f6';
        
        let html = `
        <div class="fade-in">
            <button onclick="GrammarEngine.renderMenu()" style="background:white; border:none; padding:10px 20px; border-radius:50px; font-weight:700; color:#64748b; margin-bottom:15px; cursor:pointer; box-shadow:0 5px 15px rgba(0,0,0,0.05);"><i class="fas fa-arrow-left"></i> Back to Menu</button>
            
            <div style="background:white; border-radius:20px; padding:20px; margin-bottom:20px; border-left:4px solid ${iconColor}; box-shadow:0 10px 30px rgba(0,0,0,0.04);">
                <h3 style="margin:0 0 10px 0; font-family:'Outfit'; color:#1e293b;"><i class="fas fa-lightbulb" style="color:#fbbf24;"></i> Asif's Golden Rules</h3>
                <ul style="margin:0; padding-left:20px; font-size:13px; color:#475569; line-height:1.6;">
                    ${data.tips.map(tip => `<li style="margin-bottom:5px;">${tip}</li>`).join('')}
                </ul>
            </div>
        `;

        data.exercises.forEach((ex, idx) => {
            html += `
            <div onclick="GrammarEngine.openExercise('${type}', ${idx})" style="background:white; padding:15px 20px; border-radius:16px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; box-shadow:0 5px 15px rgba(0,0,0,0.03); border:1px solid #f1f5f9;">
                <div style="font-weight:700; color:#334155;"><i class="fas fa-file-alt" style="color:${iconColor}; margin-right:10px;"></i> ${ex.title}</div>
                <button style="background:${iconColor}20; color:${iconColor}; border:none; padding:5px 15px; border-radius:50px; font-weight:800; font-size:12px;">Start</button>
            </div>`;
        });

        html += `</div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    openExercise: function(type, index) {
        const ex = grammarData[type].exercises[index];
        
        // Convert [a], [b] etc into text inputs
        let interactiveText = ex.text.replace(/\[([a-j])\]/g, `<input type="text" class="gap-input" data-gap="$1" placeholder="$1" autocomplete="off" autocapitalize="none">`);

        let html = `
        <div class="fade-in">
            <button onclick="GrammarEngine.openList('${type}')" style="background:white; border:none; padding:10px 20px; border-radius:50px; font-weight:700; color:#64748b; margin-bottom:15px; cursor:pointer; box-shadow:0 5px 15px rgba(0,0,0,0.05);"><i class="fas fa-arrow-left"></i> Back to List</button>
            
            <div style="background:white; padding:25px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.05);">
                <h2 style="margin:0 0 15px 0; font-family:'Outfit'; color:#1e293b; font-size:20px;">${ex.title}</h2>
        `;

        if (ex.clues) {
            html += `
            <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:20px; background:#f8fafc; padding:15px; border-radius:12px; border:1px solid #e2e8f0;">
                <div style="width:100%; font-size:11px; font-weight:800; color:#64748b; margin-bottom:5px;">WORDS IN BOX (USE PROPER FORM)</div>
                ${ex.clues.map(word => `<span style="background:white; padding:5px 12px; border-radius:8px; font-weight:600; font-size:14px; color:#0ea5e9; border:1px solid #cbd5e1;">${word}</span>`).join('')}
            </div>`;
        }

        html += `
                <div style="font-size:16px; line-height:2.2; color:#334155;" id="exercise-text">
                    ${interactiveText}
                </div>
                
                <button onclick="GrammarEngine.checkAnswers('${type}', ${index})" style="width:100%; background:#14b8a6; color:white; padding:15px; border-radius:50px; border:none; font-weight:800; font-size:16px; margin-top:25px; cursor:pointer; box-shadow:0 5px 15px rgba(20, 184, 166, 0.4);">Check My Answers</button>
                
                <div id="explanation-container" style="margin-top:25px;"></div>
            </div>
        </div>`;
        
        document.getElementById('app-container').innerHTML = html;
    },

    checkAnswers: function(type, index) {
        const answers = grammarData[type].exercises[index].answers;
        const inputs = document.querySelectorAll('.gap-input');
        let score = 0;
        let expHtml = `<h3 style="font-family:'Outfit'; margin-bottom:10px;">Results & Explanations:</h3>`;

        inputs.forEach(input => {
            const gapId = input.getAttribute('data-gap');
            const userAnswer = input.value.trim().toLowerCase();
            const correctData = answers[gapId];
            
            // Allow multiple possible answers separated by "/" in DB, e.g., "importance/value"
            const possibleAnswers = correctData.ans.toLowerCase().split('/');
            
            if (possibleAnswers.includes(userAnswer)) {
                input.classList.remove('wrong');
                input.classList.add('correct');
                score++;
                expHtml += `<div class="explanation-box" style="display:block; border-left-color:#10b981;"><strong>[${gapId}] Correct!</strong> (${correctData.ans}) - ${correctData.exp}</div>`;
            } else {
                input.classList.remove('correct');
                input.classList.add('wrong');
                expHtml += `<div class="explanation-box" style="display:block; border-left-color:#ef4444; background:#fef2f2;"><strong>[${gapId}] Wrong.</strong> Correct: <span style="color:#ef4444; font-weight:bold;">${correctData.ans}</span>. <br><span style="color:#64748b; font-size:12px;">Why? ${correctData.exp}</span></div>`;
            }
        });

        expHtml = `
        <div style="background:#f0fdfa; padding:15px; border-radius:12px; text-align:center; font-size:24px; font-weight:800; color:#0f766e; margin-bottom:20px;">
            You scored: ${score} / 10
        </div>` + expHtml;

        document.getElementById('explanation-container').innerHTML = expHtml;
    }
};
