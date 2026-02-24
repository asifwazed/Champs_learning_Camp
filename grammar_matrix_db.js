// =====================================================================
// THE GRAMMAR MATRIX DATABASE
// =====================================================================

const matrixDB = {
    "m1": {
        title: "The Alphabet Engine (A vs. An)",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">The Golden Rule of Sounds</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">Forget what you learned in childhood. 'A' and 'An' are NOT based on letters (a, e, i, o, u). They are based strictly on <strong>SOUNDS</strong>.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🔊 The Vowel Sound Rule (Use 'An')</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>If the word sounds like it starts with A, E, I, O, U, use <strong>An</strong>.</li>
                <li><em>Example:</em> An apple, An hour (the 'h' is silent, it sounds like 'our').</li>
                <li><em>Example:</em> An FBI agent (F sounds like 'ef', starting with an 'e' sound).</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">🧱 The Consonant Sound Rule (Use 'A')</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>If the word starts with a hard consonant sound (including 'Y' or 'W' sounds), use <strong>A</strong>.</li>
                <li><em>Example:</em> A car, A university (starts with a 'Yoo' sound).</li>
                <li><em>Example:</em> A one-taka note (starts with a 'Wa' sound).</li>
            </ul>
        `,
        quiz: [
            { q: "He is ___ honest man.", options: ["a", "an", "the"], ans: 1, exp: "Correct! 'Honest' has a silent 'H', so it starts with an 'O' vowel sound." },
            { q: "She studies at ___ university in Dhaka.", options: ["a", "an", "no article"], ans: 0, exp: "Correct! 'University' starts with a 'Yoo' consonant sound, so we use 'A'." },
            { q: "I need ___ umbrella because it's raining.", options: ["a", "an", "the"], ans: 1, exp: "Correct! 'Umbrella' starts with an 'Uh' vowel sound." },
            { q: "Give me ___ one-taka note, please.", options: ["a", "an", "the"], ans: 0, exp: "Correct! 'One' starts with a 'Wa' consonant sound." },
            { q: "My brother is ___ MBA student.", options: ["a", "an", "the"], ans: 1, exp: "Correct! 'M' is pronounced as 'em', starting with an 'E' vowel sound." }
        ]
    },

    "m2": {
        title: "Word DNA (Syllables)",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">Hack Your Spelling</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">A syllable is a single, unbroken sound of a spoken word. Breaking words into syllables stops spelling mistakes.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🧩 How to count them:</h4>
            <p style="font-size:14px; color:#475569; line-height:1.6;">Place your hand under your chin. Say the word. Every time your chin drops, that is one syllable!</p>
            
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Cat</strong> = 1 Syllable (Cat)</li>
                <li><strong>Water</strong> = 2 Syllables (Wa - ter)</li>
                <li><strong>Computer</strong> = 3 Syllables (Com - pu - ter)</li>
                <li><strong>Education</strong> = 4 Syllables (E - du - ca - tion)</li>
            </ul>
        `,
        quiz: [
            { q: "How many syllables are in the word 'Beautiful'?", options: ["2", "3", "4"], ans: 1, exp: "Correct! Beau - ti - ful (3 syllables)." },
            { q: "How many syllables are in the word 'Dog'?", options: ["1", "2", "3"], ans: 0, exp: "Correct! 'Dog' is a single unbroken sound." },
            { q: "How many syllables are in the word 'Important'?", options: ["2", "3", "4"], ans: 1, exp: "Correct! Im - por - tant (3 syllables)." },
            { q: "How many syllables are in the word 'Banana'?", options: ["2", "3", "4"], ans: 1, exp: "Correct! Ba - na - na (3 syllables)." },
            { q: "How many syllables are in the word 'Information'?", options: ["3", "4", "5"], ans: 1, exp: "Correct! In - for - ma - tion (4 syllables)." }
        ]
    },

    "m3": {
        title: "The Sentence Skeleton",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">The Mathematics of English</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">Every basic English sentence follows a strict mathematical formula: <strong>S + V + O</strong>.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🦴 The 3 Bones of a Sentence:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Subject (The Doer):</strong> Who or what is doing the action.</li>
                <li><strong>Verb (The Action):</strong> What is happening.</li>
                <li><strong>Object (The Receiver):</strong> Who or what receives the action.</li>
            </ul>

            <div style="background:#f8fafc; padding:15px; border-radius:12px; margin-top:20px; border:1px dashed #cbd5e1;">
                <strong>Example: Asif writes code.</strong><br>
                <span style="color:#3b82f6;">Subject:</span> Asif (He does it)<br>
                <span style="color:#10b981;">Verb:</span> writes (The action)<br>
                <span style="color:#f97316;">Object:</span> code (What is being written)
            </div>
        `,
        quiz: [
            { q: "In the sentence 'The dog bit the mailman', what is the Subject?", options: ["The dog", "bit", "the mailman"], ans: 0, exp: "Correct! 'The dog' is doing the action." },
            { q: "In the sentence 'She drinks coffee', what is the Verb?", options: ["She", "drinks", "coffee"], ans: 1, exp: "Correct! 'drinks' is the action." },
            { q: "In the sentence 'I bought a new laptop', what is the Object?", options: ["I", "bought", "a new laptop"], ans: 2, exp: "Correct! 'a new laptop' is the thing receiving the action." },
            { q: "Who is the 'Doer' in 'We love Bangladesh'?", options: ["We", "love", "Bangladesh"], ans: 0, exp: "Correct! 'We' is the Subject doing the loving." },
            { q: "Identify the Verb: 'The students passed the exam.'", options: ["The students", "passed", "the exam"], ans: 1, exp: "Correct! 'passed' is the action they performed." }
        ]
    },

    "m4": {
        title: "Number & Person (s/es Rule)",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">The Most Common Mistake</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">Why do we say "I go" but "He goes"? Welcome to the Third-Person Singular rule.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">👤 The Persons:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>1st Person:</strong> I, We</li>
                <li><strong>2nd Person:</strong> You</li>
                <li><strong>3rd Person:</strong> He, She, It, Asif, The Cat (Everyone else!)</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">⚠️ The Golden Rule of Present Tense:</h4>
            <p style="font-size:14px; color:#475569;">If the Subject is <strong>3rd Person</strong> AND <strong>Singular</strong> (only one person/thing), you MUST add 's' or 'es' to the verb.</p>
            
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>I play. (1st person)</li>
                <li>They play. (3rd person PLURAL)</li>
                <li><strong>He plays.</strong> (3rd person SINGULAR - Add 's'!)</li>
            </ul>
        `,
        quiz: [
            { q: "He ___ to the market every day.", options: ["go", "goes", "going"], ans: 1, exp: "Correct! 'He' is 3rd Person Singular, so we add 'es'." },
            { q: "I always ___ my homework on time.", options: ["finish", "finishes", "finished"], ans: 0, exp: "Correct! 'I' is 1st person, so the verb stays normal." },
            { q: "The boy ___ loudly when he is hungry.", options: ["cry", "cries", "crying"], ans: 1, exp: "Correct! 'The boy' is 3rd Person Singular, so 'cry' becomes 'cries'." },
            { q: "My friends ___ cricket on Fridays.", options: ["play", "plays", "playing"], ans: 0, exp: "Correct! 'Friends' is plural, so we do NOT add 's'." },
            { q: "Asif ___ highly optimized web apps.", options: ["build", "builds", "building"], ans: 1, exp: "Correct! 'Asif' is a single person (3rd Person Singular), so we add 's'." }
        ]
    }
};
