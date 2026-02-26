/* adv-engine.js - The Logic for the Boss Level */

let toastTimeout;

// 1. Lock Click Handler
window.showLockToast = function(featureName) {
    const toast = document.getElementById('lock-toast');
    const msg = document.getElementById('toast-msg');
    
    // Custom messages based on what they click
    const lockMessages = [
        `Access Denied. <b>${featureName}</b> is currently locked.`,
        `Asif is writing the algorithm for <b>${featureName}</b>. Check back later!`,
        `You need Mastery Level 5 to unlock <b>${featureName}</b>.`,
        `<b>${featureName}</b> is sealed in the Vault.`
    ];

    // Pick a random cool message
    const randomMsg = lockMessages[Math.floor(Math.random() * lockMessages.length)];
    msg.innerHTML = randomMsg;

    // Vibrate phone slightly for feedback (if supported)
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }

    // Show Toast
    toast.classList.add('show');

    // Hide after 3 seconds
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// 2. Future Expansion Hook
// When we are ready to unlock a feature, we will add the logic here.
window.unlockFeature = function(featureId) {
    console.log("System Ready: Decrypting " + featureId);
    // Logic to open AI roleplays or IELTS models will go here.
}
