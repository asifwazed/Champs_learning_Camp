/* index-engine.js - The Brain of the Home Dashboard */
function renderHomePage() {
    const root = document.getElementById('app-root');
    root.innerHTML = `
        <div class="header">
            <h1 class="m-title">Champ's Learning</h1>
            <div class="m-sub">Your Ultimate English Guide</div>
        </div>

        <div class="container">
            <div class="section-title"><i class="fas fa-graduation-cap" style="color:#3b82f6;"></i> HSC Syllabus</div>
            
            <a href="units.html" class="nav-card">
                <div class="nc-icon" style="background:#eff6ff; color:#3b82f6;"><i class="fas fa-book-open"></i></div>
                <div class="nc-info"><h3>Part A: Seen Text</h3><p>Textbook passages & translation</p></div>
            </a>
            <a href="part_b.html" class="nav-card">
                <div class="nc-icon" style="background:#fef2f2; color:#ef4444;"><i class="fas fa-spell-check"></i></div>
                <div class="nc-info"><h3>Part B: Grammar</h3><p>Interactive rules & practice</p></div>
            </a>
            <a href="writing.html" class="nav-card">
                <div class="nc-icon" style="background:#fdf4ff; color:#d946ef;"><i class="fas fa-pen-nib"></i></div>
                <div class="nc-info"><h3>Part C: Writing Vault</h3><p>Paragraphs, Emails & Stories</p></div>
            </a>

            <div class="section-title"><i class="fas fa-microphone-alt" style="color:#10b981;"></i> Spoken & Real-World</div>
            
            <a href="basic_english.html" class="nav-card">
                <div class="nc-icon" style="background:#ecfdf5; color:#10b981;"><i class="fas fa-comments"></i></div>
                <div class="nc-info"><h3>Basic English</h3><p>Learn to build basic sentences</p></div>
            </a>
            <a href="adv_english.html" class="nav-card">
                <div class="nc-icon" style="background:#fffbeb; color:#f59e0b;"><i class="fas fa-chart-line"></i></div>
                <div class="nc-info"><h3>Advanced Fluency</h3><p>Professional speaking skills</p></div>
            </a>

            <div class="section-title"><i class="fas fa-toolbox" style="color:#6366f1;"></i> Study Tools</div>
            
            <a href="tools.html" class="nav-card">
                <div class="nc-icon" style="background:#eef2ff; color:#6366f1;"><i class="fas fa-tools"></i></div>
                <div class="nc-info"><h3>Vocab & Utilities</h3><p>Flashcards, Arcade & Dictionary</p></div>
            </a>
        </div>
    `;
}
document.addEventListener('DOMContentLoaded', renderHomePage);
