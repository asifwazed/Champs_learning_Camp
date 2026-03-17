/* idioms-db.js - Native Interface Engine & Database */

// The Database: Add as many as you want here. The app will auto-generate them.
const nativeTerms = [
    {
        term: "Elephant in the room",
        type: "idiom",
        meaning: "A major problem or controversial issue that is obviously present but avoided as a subject for discussion.",
        example: "We need to address the elephant in the room: the budget cuts.",
        note: "PRO TIP: Used in professional and personal settings when everyone is ignoring an awkward truth."
    },
    {
        term: "Ghosting",
        type: "slang",
        meaning: "Suddenly ending all communication with someone without any explanation.",
        example: "Everything was going great, and then she just ghosted me.",
        note: "PRO TIP: Very common in modern digital communication, usually referring to text messages or dating."
    },
    {
        term: "Boil down to",
        type: "phrasal",
        meaning: "To be the main or most important result of something.",
        example: "The problem boils down to a lack of communication.",
        note: "PRO TIP: Excellent for essays or debates when summarizing a complex argument."
    },
    {
        term: "Bite the bullet",
        type: "idiom",
        meaning: "To decide to do something difficult or unpleasant that you have been putting off.",
        example: "I hate going to the dentist, but I'll just have to bite the bullet.",
        note: "PRO TIP: Implies bravery or accepting an inevitable hardship."
    },
    {
        term: "Spill the tea",
        type: "slang",
        meaning: "To share gossip or reveal hidden truths.",
        example: "Okay, tell me everything that happened at the party. Spill the tea!",
        note: "PRO TIP: Highly informal. 'Tea' in this context means 'truth' or 'gossip'."
    }
];

const container = document.getElementById('term-container');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('no-results');

// 1. Render Function
function renderTerms(data) {
    container.innerHTML = ''; // Clear current
    
    if(data.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';

    data.forEach(item => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'term-card';
        
        // Define exact styling classes based on type
        const typeClass = `type-${item.type.toLowerCase()}`;
        
        card.innerHTML = `
            <div class="term-header">
                <h3 class="term-title">${item.term}</h3>
                <span class="term-type ${typeClass}">${item.type}</span>
            </div>
            <div class="term-meaning">${item.meaning}</div>
            <div class="term-example">"${item.example}"</div>
            <div class="term-note"><i class="fas fa-lightbulb"></i> ${item.note}</div>
        `;

        // Click to expand note logic
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });

        container.appendChild(card);
    });
}

// 2. Search Logic (Fast and efficient filtering)
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    const filtered = nativeTerms.filter(item => {
        return item.term.toLowerCase().includes(query) || 
               item.meaning.toLowerCase().includes(query) ||
               item.type.toLowerCase().includes(query);
    });
    
    renderTerms(filtered);
});

// 3. Initial Load
renderTerms(nativeTerms);
