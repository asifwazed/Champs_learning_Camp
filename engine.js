/* engine.js - The Logic Behind Champ's Camp */

// 1. Get the Unit ID from the URL (e.g., lesson.html?unit=u1)
const params = new URLSearchParams(window.location.search);
const unitId = params.get('unit');

// 2. Load the Content
window.onload = function() {
    // Check if unit exists
    if (!unitData[unitId]) {
        document.body.innerHTML = "<h2 style='text-align:center; margin-top:50px;'>Unit Not Found! 🚫</h2>";
        return;
    }

    const data = unitData[unitId];

    // A. Inject Header Info
    // We use the 'loadHeader' function from components.js but override the title
    document.getElementById('header-slot').innerHTML = loadHeader(data.title, data.sub);
    document.getElementById('nav-slot').innerHTML = loadNav('home');

    // B. Inject Reading Text
    const readContainer = document.getElementById('read-content');
    let readHtml = "";
    
    data.text.forEach((segment, index) => {
        readHtml += `
        <div class="text-card">
            <div class="eng-text">${segment.en}</div>
            <button class="reveal-btn" onclick="toggleTrans(this)">
                <i class="fas fa-language"></i> Show Bangla
            </button>
            <div class="ban-box">${segment.bn}</div>
        </div>`;
    });
    readContainer.innerHTML = readHtml;

    // C. Inject Vocabulary
    const vocabContainer = document.getElementById('vocab-list');
    let vocabHtml = "";

    data.vocab.forEach(v => {
        vocabHtml += `
        <div class="vocab-item">
            <div>
                <div style="font-weight:800;">${v.w}</div>
                <div style="font-size:12px;color:#64748b;">${v.s}</div>
            </div>
            <div style="color:#4f46e5; font-weight:600;">${v.m}</div>
        </div>`;
    });
    vocabContainer.innerHTML = vocabHtml;

    // D. Update Exam Link (For Phase 3)
    // We will point this to the future 'exam.html'
    document.getElementById('exam-btn').href = `exam.html?unit=${unitId}`;
};
