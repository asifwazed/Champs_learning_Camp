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

const nativeTerms = [
    { term: "Elephant in the room", type: "idiom", meaning: "A major problem or controversial issue that is obviously present but avoided as a subject for discussion.", example: "We need to address the elephant in the room: the budget cuts.", note: "PRO TIP: Used in professional and personal settings when everyone is ignoring an awkward truth." },
    { term: "Ghosting", type: "slang", meaning: "Suddenly ending all communication with someone without any explanation.", example: "Everything was going great, and then she just ghosted me.", note: "PRO TIP: Very common in modern digital communication, usually referring to text messages or dating." },
    { term: "Boil down to", type: "phrasal", meaning: "To be the main or most important result of something.", example: "The problem boils down to a lack of communication.", note: "PRO TIP: Excellent for essays or debates when summarizing a complex argument." },
    { term: "Bite the bullet", type: "idiom", meaning: "To decide to do something difficult or unpleasant that you have been putting off.", example: "I hate going to the dentist, but I'll just have to bite the bullet.", note: "PRO TIP: Implies bravery or accepting an inevitable hardship." },
    { term: "Spill the tea", type: "slang", meaning: "To share gossip or reveal hidden truths.", example: "Okay, tell me everything that happened at the party. Spill the tea!", note: "PRO TIP: Highly informal. 'Tea' in this context means 'truth' or 'gossip'." },
    { term: "Catch-22", type: "idiom", meaning: "A frustrating situation in which you cannot escape because of contradictory rules/limitations.", example: "I can't get a job without experience, but I can't get experience without a job. It's a Catch-22.", note: "PRO TIP: Originates from a famous novel. Use this to describe impossible logical loops." },
    { term: "Devil's advocate", type: "idiom", meaning: "Someone who expresses a contentious opinion in order to provoke debate or test the strength of the opposing arguments.", example: "I agree with you, but let me play devil's advocate for a second: what if the market crashes?", note: "PRO TIP: Great for IELTS speaking to show you can analyze multiple sides of an argument." },
    { term: "Iron out", type: "phrasal", meaning: "To resolve or work out a problem or minor difficulty.", example: "We have a rough draft of the contract, we just need to iron out the details.", note: "PRO TIP: Often used in business or project planning." },
    { term: "Gaslight", type: "slang", meaning: "To manipulate someone by psychological means into questioning their own sanity or reality.", example: "He tried to gaslight her into believing the argument was her fault.", note: "PRO TIP: A heavy psychological term that became mainstream slang." },
    { term: "Gatekeep", type: "slang", meaning: "To control or limit access to something, or to decide who has the right to claim a certain identity.", example: "Stop gatekeeping punk music; anyone can listen to it.", note: "PRO TIP: Very common in internet culture regarding hobbies or interests." },
    { term: "Chalk it up to", type: "phrasal", meaning: "To attribute something to a particular cause.", example: "We lost the game, but we can chalk it up to a lack of practice.", note: "PRO TIP: Often used when accepting a failure and assigning a reason to it." },
    { term: "Read between the lines", type: "idiom", meaning: "To look for or discover a meaning that is hidden or implied rather than explicitly stated.", example: "She said she was fine, but reading between the lines, I could tell she was upset.", note: "PRO TIP: Crucial for advanced reading comprehension." },
    { term: "Double down", type: "phrasal", meaning: "To significantly increase one's effort, commitment, or investment in a particular strategy, especially when it is risky.", example: "Instead of apologizing, he doubled down on his controversial comments.", note: "PRO TIP: Originally a blackjack term, now used widely in politics and business." },
    { term: "Flex", type: "slang", meaning: "To boast or show off.", example: "He bought a sports car just to flex on his neighbors.", note: "PRO TIP: Often used as 'weird flex, but okay' when someone boasts about something strange." },
    { term: "Burn bridges", type: "idiom", meaning: "To do something that makes it impossible to return to a previous situation or relationship.", example: "Quitting without notice is a good way to burn bridges in this industry.", note: "PRO TIP: A warning about the consequences of impulsive actions." },
    { term: "Phase out", type: "phrasal", meaning: "To gradually stop using or providing something.", example: "The company plans to phase out single-use plastics by next year.", note: "PRO TIP: Perfect for discussing environmental or technological changes." },
    { term: "Under the weather", type: "idiom", meaning: "Feeling slightly ill.", example: "I'm going to skip the party tonight; I'm feeling a bit under the weather.", note: "PRO TIP: A polite, native way to say you are sick without giving details." },
    { term: "Touch base", type: "idiom", meaning: "To briefly make contact or reconnect with someone.", example: "Let's touch base next week to see how the project is going.", note: "PRO TIP: Corporate/office jargon. Very common in professional emails." },
    { term: "Clap back", type: "slang", meaning: "To respond quickly and sharply to criticism.", example: "The singer clapped back at the haters on Twitter.", note: "PRO TIP: Used mostly in the context of social media arguments." },
    { term: "Rule of thumb", type: "idiom", meaning: "A broadly accurate guide or principle, based on experience rather than theory.", example: "As a rule of thumb, you should save 20% of your income.", note: "PRO TIP: Use this when giving general life advice." }
];;
