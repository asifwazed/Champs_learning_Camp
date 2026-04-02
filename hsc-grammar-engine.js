const HSCGrammarEngine = {
    init: function() {
        this.renderGrammarRules();
    },

    renderGrammarRules: function() {
        const container = document.getElementById('grammar-container');
        if(!container) return;

        let html = '';
        hscGrammarDB.forEach((rule, index) => {
            let testsHtml = '';
            rule.tests.forEach((test, qIndex) => {
                let optionsHtml = '';
                test.options.forEach((opt, oIndex) => {
                    optionsHtml += `<button class="opt-btn" onclick="HSCGrammarEngine.checkAns(this, ${oIndex}, ${test.ans})">${opt}</button>`;
                });
                
                testsHtml += `
                <div class="g-test-box">
                    <div class="g-q">${qIndex + 1}. ${test.q}</div>
                    <div class="g-opts">${optionsHtml}</div>
                </div>`;
            });

            html += `
            <div class="formula-card animate-up" style="animation-delay: ${(index % 5) * 0.1}s;">
                <div class="f-title"><i class="fas fa-hashtag"></i> Rule ${rule.id}: ${rule.title}</div>
                <div class="f-code">${rule.shortcut}</div>
                <div class="f-desc">${rule.description}</div>
                
                <div class="test-zone">
                    <div class="t-zone-title"><i class="fas fa-bolt"></i> Test Your Instinct</div>
                    ${testsHtml}
                </div>
            </div>`;
        });
        
        container.innerHTML = html;
    },

    checkAns: function(btn, selected, correct) {
        // Prevent clicking again
        const parent = btn.parentElement;
        Array.from(parent.children).forEach(b => b.style.pointerEvents = 'none');
        
        if(selected === correct) {
            btn.classList.add('correct');
            btn.innerHTML += ' <i class="fas fa-check-circle"></i>';
            if(localStorage.getItem('champSounds') !== 'false' && navigator.vibrate) navigator.vibrate(20);
        } else {
            btn.classList.add('wrong');
            btn.innerHTML += ' <i class="fas fa-times-circle"></i>';
            // Show the correct one
            parent.children[correct].classList.add('correct');
            if(localStorage.getItem('champSounds') !== 'false' && navigator.vibrate) navigator.vibrate([30, 50, 30]);
        }
    }
};

window.addEventListener('load', () => {
    if(document.getElementById('grammar-container')) {
        HSCGrammarEngine.init();
    }
});
