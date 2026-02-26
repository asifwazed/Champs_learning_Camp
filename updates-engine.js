/* ==========================================
   UPDATES ENGINE
   Controls the Status Banner and Daily Tips
========================================== */

// 1. Your Status Updates (Add as many as you want)
const statusUpdates = [
    "HSC Engine Complete! Advanced English Next.",
    "Grammar Matrix updated with new HSC Board questions.",
    "Spoken Hub AI Roleplays are now online.",
    "System running flawlessly. Keep grinding!"
];

// 2. Asif's Daily Tips (The app will pick one randomly)
const dailyTips = [
    "Consistency beats intensity. Instead of studying 5 hours once a week, do 30 minutes every single day.",
    "Don't just memorize grammar rules. Practice them by writing your own sentences in the Spoken Hub.",
    "Speak English in front of the mirror for 5 minutes daily. It builds crazy confidence.",
    "In Flow Charts, remember the 'Copy the Boss' rule. Match the grammar of Box 1 exactly!",
    "For Part C Graphs, never give your personal opinion. Just report what the data shows.",
    "Use the floating 'WM' Dictionary whenever you see a hard word. Don't just skip it!"
];

// 3. Inject into the Dashboard on Load
document.addEventListener("DOMContentLoaded", () => {
    const statusEl = document.getElementById('dynamic-status');
    const tipEl = document.getElementById('dynamic-tip');

    // Pick random items from your arrays
    const randomStatus = statusUpdates[Math.floor(Math.random() * statusUpdates.length)];
    const randomTip = dailyTips[Math.floor(Math.random() * dailyTips.length)];

    // Inject them into the HTML
    if (statusEl) {
        statusEl.innerHTML = `<strong>Status:</strong> ${randomStatus}`;
    }
    
    if (tipEl) {
        tipEl.innerText = randomTip;
    }
});
