/* exam-engine.js - Powering the Board Exams */

// 1. Get Unit Data
const params = new URLSearchParams(window.location.search);
const unitId = params.get('unit');
let currentScore = 0;

window.onload = function() {
    // Safety Check
    if (!unitData[unitId]) {
        document.body.innerHTML = "<h1 style='text-align:center; padding:50px;'>Exam Not Found! 🚫</h1>";
        return;
    }
    
    const data = unitData[unitId];

    // 2. Set Header Info
    document.getElementById('exam-title').innerText = data.title;
    document.getElementById('exam-sub').innerText = data.sub;

    // 3. Render MCQs
    const mcqBox = document.getElementById('mcq-area');
    let mcqHtml = "";
    
    data.exam.mcq.forEach((item, index) => {
        let optionsHtml = "";
        item.opts.forEach((opt, optIndex) => {
            // We store the option index to check against answer later
            optionsHtml += `<div class="option" onclick="selectOption(this, ${index})" data-oid="${optIndex}">${opt}</div>`;
        });
        
        mcqHtml += `
            <div class="q-card" id="q-${index}" data-ans="${item.ans}">
                <div class="q-text">${item.q}</div>
                <div class="opt-row">${optionsHtml}</div>
            </div>
        `;
    });
    mcqBox.innerHTML = mcqHtml;

    // 4. Render Written Questions
    const writtenBox = document.getElementById('written-area');
    let writtenHtml = "";
    
    data.exam.written.forEach((q) => {
        // Detect Flow Chart Question to add a special visual
        let specialAddon = "";
        if(q.includes("Flow Chart")) {
            specialAddon = `<div style="margin-top:10px; padding:10px; background:#e0f2fe; border:1px dashed #0ea5e9; color:#0369a1; border-radius:8px; font-size:12px;"><i class="fas fa-project-diagram"></i> Draw 6 boxes in your notebook</div>`;
        }

        writtenHtml += `
        <div class="written-card">
            <div class="w-text">${q}</div>
            ${specialAddon}
        </div>`;
    });
    writtenBox.innerHTML = writtenHtml;

    // 5. Start Timer (25 Minutes)
    startTimer(25 * 60);
};

// --- LOGIC FUNCTIONS ---

function selectOption(el, qIndex) {
    // Deselect siblings
    const parent = el.parentElement;
    const allOpts = parent.querySelectorAll('.option');
    allOpts.forEach(opt => opt.classList.remove('selected'));
    
    // Select clicked
    el.classList.add('selected');
}

function checkMCQ() {
    const data = unitData[unitId];
    let score = 0;
    let attempted = 0;

    data.exam.mcq.forEach((item, index) => {
        const card = document.getElementById(`q-${index}`);
        const selected = card.querySelector('.option.selected');
        
        if (selected) {
            attempted++;
            const chosen = parseInt(selected.dataset.oid);
            if (chosen === item.ans) {
                score++;
                selected.classList.add('correct');
            } else {
                selected.classList.add('wrong');
                // Show correct answer
                const correctOpt = card.querySelectorAll('.option')[item.ans];
                correctOpt.classList.add('correct');
            }
        }
    });

    currentScore = score;
    const total = data.exam.mcq.length;
    alert(`You scored ${score} / ${total} in MCQs!`);
    
    // Update WhatsApp Link
    updateWhatsApp(score, total);
}

function updateWhatsApp(score, total) {
    const btn = document.getElementById('wa-btn');
    const msg = `Sir, I finished the ${unitData[unitId].title} Exam. My MCQ Score is ${score}/${total}. Here is the photo of my written answers:`;
    const link = `https://wa.me/8801721149369?text=${encodeURIComponent(msg)}`;
    
    btn.href = link;
    btn.innerHTML = `<i class="fab fa-whatsapp"></i> Send Score (${score}) & Photo`;
    btn.style.background = "#25D366";
}

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    const display = document.getElementById('timer');
    
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            alert("Time is up! Please submit your paper.");
        }
    }, 1000);
}
