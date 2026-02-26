/* ==========================================
   PROFILE ENGINE
   Handles Avatar Selection and Local Storage
========================================== */

// 1. The Avatar Gallery (Using DiceBear API for cool characters)
const avatarLibrary = [
    "https://ui-avatars.com/api/?name=C&background=3b82f6&color=fff&bold=true", // Default Champ
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix", // Cool Boy
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Aneka", // Cool Girl
    "https://api.dicebear.com/7.x/bottts/svg?seed=Matrix",   // Robot
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Ninja&style=circle", // Ninja
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Destiny" // Explorer
];

// 2. Check phone storage for saved avatar (or use default)
let currentAvatar = localStorage.getItem('champ_avatar') || avatarLibrary[0];

// 3. Load Avatars into the Modal
document.addEventListener("DOMContentLoaded", () => {
    const mainAvatarImage = document.getElementById('main-avatar');
    const avatarGrid = document.getElementById('avatar-container');

    // Set the dashboard profile picture to the saved one
    if (mainAvatarImage) {
        mainAvatarImage.src = currentAvatar;
    }

    // Build the grid inside the modal
    if (avatarGrid) {
        avatarLibrary.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            // Add 'selected' class if it matches their current avatar
            img.className = 'avatar-option' + (url === currentAvatar ? ' selected' : '');
            
            // What happens when they click an avatar in the grid
            img.onclick = () => selectNewAvatar(url, img);
            
            avatarGrid.appendChild(img);
        });
    }
});

// 4. The Selection Function
window.selectNewAvatar = function(url, clickedImageElement) {
    // Remove the blue border from all avatars
    document.querySelectorAll('.avatar-option').forEach(el => {
        el.classList.remove('selected');
    });

    // Add the blue border to the one they just clicked
    clickedImageElement.classList.add('selected');

    // Save to phone storage
    currentAvatar = url;
    localStorage.setItem('champ_avatar', url);

    // Instantly update the main dashboard profile picture
    document.getElementById('main-avatar').src = url;
    
    // Optional: Tiny vibration for premium feel
    if (navigator.vibrate) navigator.vibrate(50);
}
