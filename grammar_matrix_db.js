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
    },
    // ---------------------------------------------------
    // TIER 2: THE TOOLKIT (Parts of Speech)
    // ---------------------------------------------------
    "m5": {
        title: "Nouns & Pronouns",
        theoryHTML: `
            <div style="background:#fff7ed; padding:15px; border-radius:12px; border-left:4px solid #f97316; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#c2410c;">The Actors of the Sentence</h4>
                <p style="margin:0; font-size:14px; color:#c2410c;">Nouns name things. Pronouns replace them so we don't sound like broken records.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🛑 Uncountable Noun Trap!</h4>
            <p style="font-size:14px; color:#475569;">You CANNOT add 's' to uncountable nouns. In English, these words are always singular:</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Advice</strong> (NOT advices)</li>
                <li><strong>Information</strong> (NOT informations)</li>
                <li><strong>Furniture</strong> (NOT furnitures)</li>
            </ul>
        `,
        quiz: [
            { q: "I need some ___ about the exam.", options: ["informations", "information", "inform"], ans: 1, exp: "Correct! 'Information' is uncountable, so it never takes an 's'." },
            { q: "My teacher gave me a lot of good ___.", options: ["advices", "advice", "advise"], ans: 1, exp: "Correct! 'Advice' is uncountable." },
            { q: "Asif is a coder. ___ writes code very fast.", options: ["He", "She", "They"], ans: 0, exp: "Correct! 'He' replaces the noun 'Asif'." },
            { q: "The dogs are barking outside. ___ are hungry.", options: ["It", "They", "We"], ans: 1, exp: "Correct! 'They' is the plural pronoun replacing 'dogs'." },
            { q: "We bought some new ___ for the living room.", options: ["furnitures", "furniture", "furnish"], ans: 1, exp: "Correct! 'Furniture' is an uncountable noun." }
        ]
    },
    "m6": {
        title: "Adjectives (The Decorators)",
        theoryHTML: `
            <div style="background:#fff7ed; padding:15px; border-radius:12px; border-left:4px solid #f97316; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#c2410c;">Paint a Picture</h4>
                <p style="margin:0; font-size:14px; color:#c2410c;">Adjectives describe nouns. They tell us <em>which one, what kind, or how many</em>.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">📏 The Rules of Comparison:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Base (1 thing):</strong> Tall, Beautiful.</li>
                <li><strong>Comparative (2 things):</strong> Add '-er' or use 'more'. (Taller, More beautiful). Always followed by 'than'.</li>
                <li><strong>Superlative (3+ things):</strong> Add '-est' or use 'most'. (Tallest, Most beautiful). Always preceded by 'the'.</li>
            </ul>
        `,
        quiz: [
            { q: "This is the ___ book I have ever read.", options: ["good", "better", "best"], ans: 2, exp: "Correct! 'Best' is the superlative form of good." },
            { q: "He is ___ than his older brother.", options: ["tall", "taller", "tallest"], ans: 1, exp: "Correct! We are comparing two people, so we use 'taller than'." },
            { q: "She wore a ___ dress to the party.", options: ["beautiful", "beautifully", "beauty"], ans: 0, exp: "Correct! 'Beautiful' is an adjective describing the noun 'dress'." },
            { q: "Today is ___ than yesterday.", options: ["hot", "hotter", "hottest"], ans: 1, exp: "Correct! Comparing two days requires the '-er' form." },
            { q: "That was an ___ movie!", options: ["excite", "excited", "exciting"], ans: 2, exp: "Correct! 'Exciting' describes the movie itself." }
        ]
    },
    "m7": {
        title: "Adverbs (The Action Modifiers)",
        theoryHTML: `
            <div style="background:#fff7ed; padding:15px; border-radius:12px; border-left:4px solid #f97316; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#c2410c;">How, When, and Where</h4>
                <p style="margin:0; font-size:14px; color:#c2410c;">Adverbs don't describe things (nouns); they describe <strong>actions (verbs)</strong>.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">⚡ The 'LY' Hack:</h4>
            <p style="font-size:14px; color:#475569;">Most adverbs of manner end in '-ly'.</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>She runs <strong>quickly</strong>. (How?)</li>
                <li>I will see you <strong>tomorrow</strong>. (When?)</li>
                <li>Look <strong>everywhere</strong>. (Where?)</li>
            </ul>
        `,
        quiz: [
            { q: "The cheetah runs very ___.", options: ["quick", "quickly", "quickness"], ans: 1, exp: "Correct! 'Quickly' describes HOW the cheetah runs." },
            { q: "The birds sang ___ in the morning.", options: ["beautiful", "beautifully", "beauty"], ans: 1, exp: "Correct! We need the adverb '-ly' to describe the action of singing." },
            { q: "I will finish this project ___.", options: ["tomorrow", "nice", "heavy"], ans: 0, exp: "Correct! 'Tomorrow' is an adverb of time." },
            { q: "They searched ___ for the missing keys.", options: ["everywhere", "silent", "happy"], ans: 0, exp: "Correct! 'Everywhere' is an adverb of place." },
            { q: "He is ___ late for his math class.", options: ["always", "slow", "loud"], ans: 0, exp: "Correct! 'Always' is an adverb of frequency." }
        ]
    },
    "m8": {
        title: "The Article Masterclass",
        theoryHTML: `
            <div style="background:#fff7ed; padding:15px; border-radius:12px; border-left:4px solid #f97316; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#c2410c;">The Zero Article Rule</h4>
                <p style="margin:0; font-size:14px; color:#c2410c;">Sometimes, the correct answer is NO article at all!</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🚫 When to leave it blank (Zero Article):</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>General Plurals:</strong> "I love dogs." (Not 'the dogs').</li>
                <li><strong>Uncountable Nouns in General:</strong> "Water is good for you." (Not 'the water').</li>
                <li><strong>Languages & Meals:</strong> "I speak Bengali" / "I am having breakfast."</li>
            </ul>
        `,
        quiz: [
            { q: "I like listening to ___ music.", options: ["a", "the", "no article"], ans: 2, exp: "Correct! 'Music' is an uncountable noun in a general sense, so no article is needed." },
            { q: "___ sun sets in the west.", options: ["A", "An", "The"], ans: 2, exp: "Correct! 'The' is used for unique objects in the universe." },
            { q: "She is reading ___ book I gave her yesterday.", options: ["a", "an", "the"], ans: 2, exp: "Correct! We use 'The' because it is a specific book (the one I gave her)." },
            { q: "I drink ___ milk every morning.", options: ["a", "the", "no article"], ans: 2, exp: "Correct! 'Milk' is uncountable and spoken in a general sense." },
            { q: "He bought ___ apple and ___ banana.", options: ["a / an", "an / a", "the / a"], ans: 1, exp: "Correct! 'An apple' (vowel sound) and 'a banana' (consonant sound)." }
        ]
    },

    // ---------------------------------------------------
    // TIER 3: THE TIME MACHINE (Tense Grids)
    // ---------------------------------------------------
    "m10": {
        title: "Present Grid",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">Habits vs. Right Now</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">The #1 mistake is using 'am/is/are + ing' for everything. Stop doing that!</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">⏰ Present Simple (Habits & Facts):</h4>
            <p style="font-size:14px; color:#475569;">Use this for things you do every day, or universal truths.</p>
            <p style="font-size:14px; color:#10b981; font-weight:bold;">Formula: S + V1 (Add s/es for He/She/It)</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>I drink coffee every morning.</li>
                <li>The sun rises in the east.</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">🏃 Present Continuous (Right Now):</h4>
            <p style="font-size:14px; color:#475569;">Use this ONLY if the action is happening at this exact second.</p>
            <p style="font-size:14px; color:#10b981; font-weight:bold;">Formula: S + am/is/are + Verb(ing)</p>
        `,
        quiz: [
            { q: "I usually ___ coffee in the morning.", options: ["drink", "am drinking", "drinks"], ans: 0, exp: "Correct! 'Usually' implies a daily habit, so we use Present Simple." },
            { q: "Look! The boy ___ across the street.", options: ["run", "runs", "is running"], ans: 2, exp: "Correct! 'Look!' means it is happening right now, so Present Continuous." },
            { q: "Water ___ at 100 degrees Celsius.", options: ["boil", "boils", "is boiling"], ans: 1, exp: "Correct! A universal truth uses Present Simple. Water is an 'It', so add 's'." },
            { q: "We ___ English grammar right now.", options: ["learn", "learns", "are learning"], ans: 2, exp: "Correct! 'Right now' triggers the continuous tense." },
            { q: "She never ___ to the gym on Sundays.", options: ["go", "goes", "is going"], ans: 1, exp: "Correct! 'Never' shows a habit/routine. 'She' requires 'es'." }
        ]
    },
    "m12": {
        title: "Past Grid",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">Storytelling Mechanics</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">How to talk about yesterday without messing up your verbs.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">⏪ Past Simple (Finished Actions):</h4>
            <p style="font-size:14px; color:#10b981; font-weight:bold;">Formula: S + V2 (Past Form)</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>I <strong>went</strong> to the store yesterday.</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">🎥 Past Continuous (Interrupted Actions):</h4>
            <p style="font-size:14px; color:#10b981; font-weight:bold;">Formula: S + was/were + Verb(ing)</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>I <strong>was watching</strong> TV when the phone rang.</li>
            </ul>
        `,
        quiz: [
            { q: "I ___ to the electronics store yesterday.", options: ["go", "goes", "went"], ans: 2, exp: "Correct! 'Yesterday' is a finished past action, so we use V2 (went)." },
            { q: "I ___ TV when the phone suddenly rang.", options: ["watch", "watched", "was watching"], ans: 2, exp: "Correct! You were in the middle of doing it when interrupted." },
            { q: "They ___ a new car last month.", options: ["buy", "bought", "were buying"], ans: 1, exp: "Correct! 'Last month' means the action is fully finished." },
            { q: "While she was reading, he ___ on the sofa.", options: ["sleep", "slept", "was sleeping"], ans: 2, exp: "Correct! 'While' triggers two simultaneous continuous actions." },
            { q: "We ___ our homework before dinner.", options: ["finish", "finished", "were finishing"], ans: 1, exp: "Correct! A simple completed action in the past." }
        ]
    },
    "m13": {
        title: "Future Grid",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">Will vs. Going to</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">They both mean the future, but native speakers use them differently!</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🔮 Use 'Will' for:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Instant Decisions:</strong> "The phone is ringing! I <em>will</em> get it."</li>
                <li><strong>Promises:</strong> "I <em>will</em> always love you."</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">📅 Use 'Going to' for:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Pre-made Plans:</strong> "I bought tickets. I am <em>going to</em> visit Dhaka."</li>
                <li><strong>Predictions with Evidence:</strong> "Look at those black clouds. It is <em>going to</em> rain."</li>
            </ul>
        `,
        quiz: [
            { q: "I promise I ___ help you with the exam.", options: ["will", "am going to", "help"], ans: 0, exp: "Correct! 'Will' is used for promises." },
            { q: "Look at those dark clouds! It ___ rain.", options: ["will", "is going to", "rains"], ans: 1, exp: "Correct! There is physical evidence (clouds), so we use 'going to'." },
            { q: "I ___ visit my grandmother next weekend. I already bought the bus tickets.", options: ["will", "am going to", "visited"], ans: 1, exp: "Correct! It is a pre-made plan, so we use 'going to'." },
            { q: "Hold on, I ___ open the door for you.", options: ["will", "am going to", "getting"], ans: 0, exp: "Correct! It is an instant, on-the-spot decision." },
            { q: "She ___ be a doctor when she grows up. That's her solid plan.", options: ["will", "is going to", "was"], ans: 1, exp: "Correct! It is a long-term plan." }
        ]
    },

    // ---------------------------------------------------
    // TIER 4: HSC CORE
    // ---------------------------------------------------
    "m14": {
        title: "Right Forms of Verbs",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #e11d48; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#9f1239;">Board Exam Goldmine</h4>
                <p style="margin:0; font-size:14px; color:#be123c;">These are the top rules tested in HSC Part B grammar.</p>
            </div>
            
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Rule 1:</strong> Prepositions (in, on, of, for, without) are ALWAYS followed by <strong>Verb + ing</strong>. <em>(Exception: 'To' takes V1).</em></li>
                <li><strong>Rule 2:</strong> "Look forward to", "With a view to", and "Used to" are special. They take <strong>Verb + ing</strong>.</li>
                <li><strong>Rule 3:</strong> Modals (Can, must, should) are ALWAYS followed by the base verb <strong>(V1)</strong>.</li>
            </ul>
        `,
        quiz: [
            { q: "I look forward to ___ you soon.", options: ["see", "seeing", "saw"], ans: 1, exp: "Correct! 'Look forward to' is a special phrase that takes V+ing." },
            { q: "He went to the market to ___ some food.", options: ["buy", "buying", "bought"], ans: 0, exp: "Correct! The preposition 'to' is usually followed by the base verb V1 (Infinitive)." },
            { q: "Without ___ hard, you will fail the HSC exam.", options: ["study", "studying", "studied"], ans: 1, exp: "Correct! 'Without' is a preposition, so the verb must take +ing." },
            { q: "I am used to ___ up early in the morning.", options: ["wake", "waking", "woke"], ans: 1, exp: "Correct! 'To be used to' takes V+ing." },
            { q: "They must ___ the traffic rules.", options: ["follow", "following", "followed"], ans: 0, exp: "Correct! 'Must' is a modal verb and takes the base verb V1." }
        ]
    },
    "m15": {
        title: "Modal Verbs",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #e11d48; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#9f1239;">The Mood Changers</h4>
                <p style="margin:0; font-size:14px; color:#be123c;">Modals change the feeling of a sentence from a fact to a possibility, ability, or command.</p>
            </div>
            
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Ability:</strong> Can (Present), Could (Past).</li>
                <li><strong>Obligation (100%):</strong> Must.</li>
                <li><strong>Advice (50%):</strong> Should.</li>
                <li><strong>Possibility/Permission:</strong> May, Might.</li>
            </ul>
        `,
        quiz: [
            { q: "___ I come in, sir?", options: ["Must", "May", "Should"], ans: 1, exp: "Correct! 'May' is used to politely ask for permission." },
            { q: "You ___ wear a helmet when riding a bike. It's the law!", options: ["must", "can", "might"], ans: 0, exp: "Correct! 'Must' is used for strong obligation or rules." },
            { q: "It ___ rain later, so take an umbrella just in case.", options: ["might", "should", "can"], ans: 0, exp: "Correct! 'Might' shows a possibility." },
            { q: "I ___ swim very fast when I was 5 years old.", options: ["can", "could", "should"], ans: 1, exp: "Correct! 'Could' is the past tense of 'can' (past ability)." },
            { q: "You ___ respect your parents.", options: ["can", "might", "should"], ans: 2, exp: "Correct! 'Should' is used to give strong moral advice." }
        ]
    },
    "m16": {
        title: "Tag Questions",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #e11d48; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#9f1239;">The Confirmation Hook</h4>
                <p style="margin:0; font-size:14px; color:#be123c;">Turning a statement into a quick question to get agreement.</p>
            </div>
            
            <p style="font-size:14px; color:#475569; font-weight:bold;">The Golden Rule:</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>If the sentence is <strong>Positive</strong>, the tag is <strong>Negative</strong>. <em>(He is a boy, isn't he?)</em></li>
                <li>If the sentence is <strong>Negative</strong>, the tag is <strong>Positive</strong>. <em>(She didn't go, did she?)</em></li>
                <li><strong>Let's</strong> always becomes <strong>shall we?</strong></li>
            </ul>
        `,
        quiz: [
            { q: "He is a brilliant student, ___?", options: ["is he", "isn't he", "does he"], ans: 1, exp: "Correct! Positive statement (is) -> Negative tag (isn't)." },
            { q: "They didn't go to the park yesterday, ___?", options: ["did they", "didn't they", "do they"], ans: 0, exp: "Correct! Negative statement (didn't) -> Positive tag (did)." },
            { q: "Let's play football, ___?", options: ["will you", "shall we", "do we"], ans: 1, exp: "Correct! 'Let's' always takes the tag 'shall we?'." },
            { q: "You are coming with us, ___?", options: ["are you", "aren't you", "won't you"], ans: 1, exp: "Correct! Positive statement -> Negative tag." },
            { q: "She never plays tennis, ___?", options: ["isn't she", "does she", "doesn't she"], ans: 1, exp: "Correct! 'Never' makes the statement negative, so the tag must be positive (does she)." }
        ]
    },

    // ---------------------------------------------------
    // TIER 5: THE SHAPE-SHIFTER
    // ---------------------------------------------------
    "m18": {
        title: "Voice Change (Basics)",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Flipping the Sentence</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">Active voice focuses on WHO does it. Passive voice focuses on WHAT was done.</p>
            </div>
            
            <p style="font-size:14px; color:#475569; font-weight:bold;">The Passive Formula:</p>
            <p style="font-size:14px; color:#10b981; font-weight:bold;">Object + 'Be' verb + V3 (Past Participle) + by + Subject</p>
            
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Active:</strong> I (Sub) ate (Verb) the apple (Obj).</li>
                <li><strong>Passive:</strong> The apple (Obj) was eaten (V3) by me (Sub).</li>
            </ul>
        `,
        quiz: [
            { q: "Active: I eat an apple. Passive: An apple is ___ by me.", options: ["eat", "ate", "eaten"], ans: 2, exp: "Correct! Passive voice always uses V3 (Past Participle)." },
            { q: "Active: He wrote a letter. Passive: A letter ___ written by him.", options: ["is", "was", "were"], ans: 1, exp: "Correct! Since 'wrote' is past tense, the 'be' verb becomes 'was'." },
            { q: "Active: They are playing football. Passive: Football is ___ played by them.", options: ["be", "being", "been"], ans: 1, exp: "Correct! Continuous tense requires 'being' in passive voice." },
            { q: "Active: She has done the work. Passive: The work has ___ done by her.", options: ["be", "been", "being"], ans: 1, exp: "Correct! Perfect tense requires 'been' in passive voice." },
            { q: "Active: I will help you. Passive: You will ___ helped by me.", options: ["be", "been", "being"], ans: 0, exp: "Correct! Future 'will' takes the base form 'be'." }
        ]
    },
    "m19": {
        title: "Narration Intro",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Reporting Speech</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">When you tell someone what another person said, you must step backward in time!</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🔙 The Backshift Rule:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>Present Simple ➔ Past Simple (am/is -> was)</li>
                <li>Will ➔ Would</li>
                <li>Can ➔ Could</li>
                <li>Today ➔ That day</li>
            </ul>
        `,
        quiz: [
            { q: "Direct: He said, 'I am happy.' \nIndirect: He said that he ___ happy.", options: ["is", "was", "were"], ans: 1, exp: "Correct! 'am' backshifts to 'was'." },
            { q: "Direct: 'I will go,' she said. \nIndirect: She said that she ___ go.", options: ["will", "would", "should"], ans: 1, exp: "Correct! 'will' backshifts to 'would'." },
            { q: "Direct: 'I am playing,' he said. \nIndirect: He said that he ___ playing.", options: ["is", "was", "were"], ans: 1, exp: "Correct! Present continuous becomes past continuous." },
            { q: "Direct: 'I have done it,' she said. \nIndirect: She said that she ___ done it.", options: ["has", "had", "have"], ans: 1, exp: "Correct! Present Perfect (have) backshifts to Past Perfect (had)." },
            { q: "Direct: He said, 'I went there.' \nIndirect: He said that he ___ gone there.", options: ["had", "has", "was"], ans: 0, exp: "Correct! Past Simple (went) backshifts to Past Perfect (had gone)." }
        ]
    },
    "m20": {
        title: "Conditionals",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">The 'If' Logic</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">Conditionals are cause-and-effect formulas.</p>
            </div>
            
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Zero (Facts):</strong> If + Present, Present. <em>(If you heat ice, it melts.)</em></li>
                <li><strong>1st (Real Future):</strong> If + Present, Will + V1. <em>(If it rains, I will stay.)</em></li>
                <li><strong>2nd (Unreal/Dream):</strong> If + Past, Would + V1. <em>(If I won the lottery, I would buy a car.)</em></li>
            </ul>
        `,
        quiz: [
            { q: "If you heat ice, it ___.", options: ["melt", "melts", "will melt"], ans: 1, exp: "Correct! Zero conditional (scientific fact) uses Present tense on both sides." },
            { q: "If it rains tomorrow, I ___ stay home.", options: ["stay", "will stay", "would stay"], ans: 1, exp: "Correct! First conditional (real future possibility) uses 'will'." },
            { q: "If I won the lottery, I ___ buy a sports car.", options: ["will", "would", "should"], ans: 1, exp: "Correct! Second conditional (unreal dream) uses Past tense (won) and 'would'." },
            { q: "If she studies hard, she ___ pass the exam.", options: ["pass", "will pass", "would pass"], ans: 1, exp: "Correct! First conditional (real possibility)." },
            { q: "If I were a bird, I ___ fly across the ocean.", options: ["will", "would", "can"], ans: 1, exp: "Correct! Second conditional (impossible scenario) uses 'would'." }
        ]
    }, 
    "m21": {
        title: "Modifiers (HSC Boss)",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">The Art of Detail</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">Modifiers give extra information about a noun or verb.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Pre-modifier:</strong> Sits <em>before</em> the noun (The <strong>beautiful</strong> car).</li>
                <li><strong>Post-modifier (Appositive):</strong> Sits <em>after</em> the noun (Asif, <strong>a brilliant developer</strong>).</li>
                <li><strong>Intensifier:</strong> Boosts the adjective (He is <strong>extremely</strong> smart).</li>
            </ul>
        `,
        quiz: [
            { q: "[Use an adjective to pre-modify the noun] ___ people suffer from poverty.", options: ["Many", "Quickly", "Walk"], ans: 0, exp: "Correct! 'Many' acts as an adjective giving extra info." },
            { q: "Kazi Nazrul Islam, [Use an appositive], wrote many poems.", options: ["who is a poet", "our national poet", "in the morning"], ans: 1, exp: "Correct! An appositive identifies the noun directly." },
            { q: "The weather is [Use an intensifier] hot today.", options: ["very", "burning", "badly"], ans: 0, exp: "Correct! Intensifiers make adjectives stronger." }
        ]
    },
    "m22": {
        title: "Pronoun Reference",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">The Clarity Protocol</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">A pronoun MUST point clearly to ONE specific noun.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Ambiguous:</strong> Asif and Rahim went to the store. <em>He</em> bought an apple. <span style="color:#ef4444;">(Who is 'He'?)</span></li>
                <li><strong>Fixed:</strong> Asif and Rahim went to the store. <strong>Rahim</strong> bought an apple.</li>
            </ul>
        `,
        quiz: [
            { q: "'The teacher told the student that he was wrong.' What is the problem here?", options: ["Wrong tense", "Ambiguous pronoun", "Spelling mistake"], ans: 1, exp: "Correct! We don't know who 'he' is." },
            { q: "How do you fix: 'Rahim dropped the glass on the table and broke it.'?", options: ["broke the table", "broke the glass", "Both are valid fixes"], ans: 2, exp: "Correct! 'It' is confusing." }
        ]
    },
    "m23": {
        title: "Sentence Connectors",
        theoryHTML: `
            <div style="background:#f0fdfa; padding:15px; border-radius:12px; border-left:4px solid #0d9488; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#0f766e;">The Logical Glue</h4>
                <p style="margin:0; font-size:14px; color:#115e59;">Connectors link sentences together smoothly.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Addition:</strong> Moreover, Furthermore, Besides.</li>
                <li><strong>Contrast:</strong> However, On the other hand, Nevertheless.</li>
                <li><strong>Result:</strong> Therefore, Consequently, As a result.</li>
            </ul>
        `,
        quiz: [
            { q: "He studied very hard. ___, he got an A+.", options: ["However", "Therefore", "Moreover"], ans: 1, exp: "Correct! 'Therefore' shows the result." },
            { q: "Phones are useful. ___, they cause addiction.", options: ["Consequently", "Furthermore", "On the other hand"], ans: 2, exp: "Correct! Shows contrast." }
        ]
    },
    "m24": {
        title: "Verbs (Advanced Exceptions)",
        theoryHTML: `
            <div style="background:#faf5ff; padding:15px; border-radius:12px; border-left:4px solid #9333ea; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#7e22ce;">The Exception Rules</h4>
                <p style="margin:0; font-size:14px; color:#6b21a8;">Master these 3 specific board exceptions.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Mind / Worth:</strong> Always take <strong>Verb + ing</strong>.</li>
                <li><strong>It is high time:</strong> Requires a <strong>Past Tense (V2)</strong> verb!</li>
                <li><strong>Lest:</strong> MUST use <strong>should + V1</strong>.</li>
            </ul>
        `,
        quiz: [
            { q: "Would you mind ___ me a cup of coffee?", options: ["bring", "bringing", "brought"], ans: 1, exp: "Correct! Followed by an 'ing' verb." },
            { q: "It is high time we ___ the environment.", options: ["protect", "protecting", "protected"], ans: 2, exp: "Correct! Requires the V2 (Past) form." },
            { q: "Study hard lest you ___ fail.", options: ["will", "should", "might"], ans: 1, exp: "Correct! 'Lest' is paired with 'should'." }
        ]
    }, 
    "m25": {
        title: "Punctuation & Capitalization",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">The 5-Mark Guarantee</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">This is the easiest topic in the BOU syllabus. Master the MINTS rule.</p>
            </div>
            <h4 style="color:#334155; margin-bottom:10px;">🔠 The Capitalization Trick (MINTS):</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>M</strong>onths, Days, Holidays (January, Friday).</li>
                <li><strong>I</strong> - The pronoun 'I' is ALWAYS capital.</li>
                <li><strong>N</strong>ames of people, places, and brands (Asif, Dhaka).</li>
                <li><strong>T</strong>itles of books or movies.</li>
                <li><strong>S</strong>tart of a sentence.</li>
            </ul>
        `,
        quiz: [
            { q: "Which sentence is punctuated correctly?", options: ["he said, i will go.", "He said, 'I will go.'", "He said 'i will go'"], ans: 1, exp: "Correct! First letter capital, comma before quote, capital 'I', and period inside the quote." },
            { q: "my friend asif lives in sylhet.", options: ["My friend asif lives in sylhet.", "My friend Asif lives in Sylhet.", "My Friend Asif lives in Sylhet."], ans: 1, exp: "Correct! 'My' starts the sentence, 'Asif' is a name, and 'Sylhet' is a place." }
        ]
    },
    "m26": {
        title: "Degree of Comparison",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">Transformation of Sentences</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">Changing sentence structures without changing the meaning.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Positive:</strong> No other boy in the class is <em>as tall as</em> Asif.</li>
                <li><strong>Comparative:</strong> Asif is <em>taller than any other</em> boy in the class.</li>
                <li><strong>Superlative:</strong> Asif is <em>the tallest</em> boy in the class.</li>
            </ul>
        `,
        quiz: [
            { q: "Positive: 'Very few metals are as precious as gold.' What is the Superlative?", options: ["Gold is the most precious metal.", "Gold is one of the most precious metals.", "Gold is more precious than any other metal."], ans: 1, exp: "Correct! 'Very few' in positive turns into 'one of the' in superlative." },
            { q: "Superlative: 'He is the best student.' What is the Comparative?", options: ["He is better than any other student.", "No other student is as good as him.", "He is a good student."], ans: 0, exp: "Correct! 'The best' becomes 'better than any other'." }
        ]
    }, // Don't forget the comma!
    "m27": {
        title: "The Time Triangle (In, On, At)",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">The Preposition Triangle</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">Think of an upside-down triangle. 'In' is the widest part, 'At' is the sharpest point.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>IN (Big & General):</strong> Years, Months, Centuries. <em>(In 2024, In January, In the 90s)</em>.</li>
                <li><strong>ON (Medium & Specific):</strong> Days and Dates. <em>(On Monday, On my birthday, On May 5th)</em>.</li>
                <li><strong>AT (Small & Exact):</strong> Clock times and precise moments. <em>(At 5:00 PM, At midnight, At sunrise)</em>.</li>
            </ul>
        `,
        quiz: [
            { q: "Our final exam begins ___ Monday.", options: ["in", "on", "at"], ans: 1, exp: "Correct! Use 'On' for specific days." },
            { q: "I was born ___ 2005.", options: ["in", "on", "at"], ans: 0, exp: "Correct! Use 'In' for years." },
            { q: "The train leaves exactly ___ 4:30 PM.", options: ["in", "on", "at"], ans: 2, exp: "Correct! Use 'At' for exact clock times." }
        ]
    },
    "m28": {
        title: "Subject-Verb Agreement Tricks",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">The Invisible Trap</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">Examiners love to put extra words between the subject and the verb to confuse you.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The Preposition Trap:</strong> "The box of chocolates <strong>is</strong> empty." (The subject is 'box', NOT chocolates!).</li>
                <li><strong>The 'Everyone' Rule:</strong> Words like <em>Everyone, Someone, Nobody, Each</em> are ALWAYS singular. (Everyone <strong>is</strong> here).</li>
                <li><strong>Along with / As well as:</strong> The verb follows the FIRST subject. ("Asif, along with his friends, <strong>is</strong> going.")</li>
            </ul>
        `,
        quiz: [
            { q: "The quality of the apples ___ not good.", options: ["was", "were", "are"], ans: 0, exp: "Correct! The subject is 'quality' (singular), not 'apples'." },
            { q: "Everyone in the class ___ finished the test.", options: ["have", "has", "are"], ans: 1, exp: "Correct! 'Everyone' is always singular." },
            { q: "The teacher, as well as the students, ___ excited.", options: ["is", "are", "were"], ans: 0, exp: "Correct! With 'as well as', look at the first subject ('The teacher' - singular)." }
        ]
    }
};
