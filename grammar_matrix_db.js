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
            { q: "The weather is [Use an intensifier] hot today.", options: ["very", "burning", "badly"], ans: 0, exp: "Correct! Intensifiers make adjectives stronger." },
            { q: "We need a [Use a noun adjective] to cross the river.", options: ["ferry boat", "fastly boat", "beautifully boat"], ans: 0, exp: "Correct! 'Ferry' is a noun acting as an adjective to modify 'boat'." },
            { q: "He walked [Use a post-modifier adverb] to the station.", options: ["quick", "quickly", "is quick"], ans: 1, exp: "Correct! 'Quickly' modifies the verb 'walked' and sits after it." }
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
            { q: "How do you fix: 'Rahim dropped the glass on the table and broke it.'?", options: ["broke the table", "broke the glass", "Both are valid fixes"], ans: 2, exp: "Correct! 'It' is confusing, it could be the table or the glass." },
            { q: "Identify the unclear pronoun: 'When the car hit the tree, it was heavily damaged.'", options: ["the car", "the tree", "it"], ans: 2, exp: "Correct! 'It' is unclear because both the car and tree are singular things." },
            { q: "Fix the sentence: 'Sarah told Mary that she won the prize.'", options: ["Sarah told Mary that Sarah won the prize.", "Sarah told Mary that her won.", "Sarah told Mary about it."], ans: 0, exp: "Correct! Replacing 'she' with the exact name fixes the ambiguity." },
            { q: "'The police arrested the thief because he was running.' Who was running?", options: ["The police", "The thief", "It is grammatically unclear"], ans: 2, exp: "Correct! Even though logic says the thief, grammatically 'he' could be either one." }
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
            { q: "He studied very hard. ___, he got an A+.", options: ["However", "Therefore", "Moreover"], ans: 1, exp: "Correct! 'Therefore' shows the logical result." },
            { q: "Phones are useful. ___, they cause addiction.", options: ["Consequently", "Furthermore", "On the other hand"], ans: 2, exp: "Correct! It shows a contrasting or opposite idea." },
            { q: "I don't want to go out. ___, it is raining heavily.", options: ["Besides", "Therefore", "However"], ans: 0, exp: "Correct! 'Besides' adds an extra, supporting reason." },
            { q: "He missed the bus. ___, he was late for the meeting.", options: ["As a result", "Nevertheless", "Similarly"], ans: 0, exp: "Correct! Being late is the direct result of missing the bus." },
            { q: "The weather was terrible. ___, they continued playing the match.", options: ["Therefore", "Nevertheless", "Furthermore"], ans: 1, exp: "Correct! 'Nevertheless' means 'despite that fact'." }
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
            { q: "Would you mind ___ me a cup of coffee?", options: ["bring", "bringing", "brought"], ans: 1, exp: "Correct! 'Mind' is always followed by an 'ing' verb." },
            { q: "It is high time we ___ the environment.", options: ["protect", "protecting", "protected"], ans: 2, exp: "Correct! 'High time' requires the V2 (Past) form." },
            { q: "Study hard lest you ___ fail.", options: ["will", "should", "might"], ans: 1, exp: "Correct! 'Lest' is strictly paired with 'should'." },
            { q: "The book is definitely worth ___.", options: ["read", "reading", "to read"], ans: 1, exp: "Correct! 'Worth' is an exception that takes a gerund (V+ing)." },
            { q: "Walk fast lest you ___ miss the train.", options: ["would", "will", "should"], ans: 2, exp: "Correct! 'Lest' always takes 'should'." }
        ]
    }, 
    "m25": {
        title: "Punctuation & Capitalization",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">The 5-Mark Guarantee</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">This is the easiest topic in the syllabus. Master the MINTS rule.</p>
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
            { q: "my friend asif lives in sylhet.", options: ["My friend asif lives in sylhet.", "My friend Asif lives in Sylhet.", "My Friend Asif lives in Sylhet."], ans: 1, exp: "Correct! 'My' starts the sentence, 'Asif' is a name, and 'Sylhet' is a place." },
            { q: "Which is correct?", options: ["i was born in december.", "I was born in december.", "I was born in December."], ans: 2, exp: "Correct! 'I' is capital and 'December' is a month." },
            { q: "Identify the correct punctuation:", options: ["Wow! What a beautiful car.", "Wow What a beautiful car!", "wow! what a beautiful car."], ans: 0, exp: "Correct! Exclamation mark after 'Wow' and capital 'What'." },
            { q: "Which is correct?", options: ["Have you read Hamlet?", "have you read hamlet?", "Have you read hamlet?"], ans: 0, exp: "Correct! Capital 'H' for sentence start, and capital 'H' for Hamlet (a Title/Name)." }
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
            { q: "Superlative: 'He is the best student.' What is the Comparative?", options: ["He is better than any other student.", "No other student is as good as him.", "He is a good student."], ans: 0, exp: "Correct! 'The best' becomes 'better than any other'." },
            { q: "Comparative: 'Dhaka is bigger than most other cities.' What is the Positive?", options: ["Very few cities are as big as Dhaka.", "No other city is as big as Dhaka.", "Dhaka is a very big city."], ans: 0, exp: "Correct! 'than most other' translates to 'Very few' in Positive." },
            { q: "Positive: 'No other girl is as smart as her.' What is the Superlative?", options: ["She is smarter than any other girl.", "She is one of the smartest girls.", "She is the smartest girl."], ans: 2, exp: "Correct! 'No other' translates directly to 'the smartest'." },
            { q: "Superlative: 'Iron is the most useful metal.' What is the Positive?", options: ["Iron is more useful than any other metal.", "No other metal is as useful as iron.", "Very few metals are as useful as iron."], ans: 1, exp: "Correct! 'The most useful' becomes 'No other... as useful as' in Positive." }
        ]
    },
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
            { q: "The train leaves exactly ___ 4:30 PM.", options: ["in", "on", "at"], ans: 2, exp: "Correct! Use 'At' for exact clock times." },
            { q: "We celebrate Victory Day ___ December 16th.", options: ["in", "on", "at"], ans: 1, exp: "Correct! Even though there is a month, 'December 16th' is a specific DATE, so we use 'On'." },
            { q: "The weather gets very cold ___ January.", options: ["in", "on", "at"], ans: 0, exp: "Correct! Use 'In' for months." }
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
            { q: "The teacher, as well as the students, ___ excited.", options: ["is", "are", "were"], ans: 0, exp: "Correct! With 'as well as', look at the first subject ('The teacher' - singular)." },
            { q: "A bouquet of yellow roses ___ color to the room.", options: ["lend", "lends", "lending"], ans: 1, exp: "Correct! The subject is 'bouquet' (singular), not 'roses'." },
            { q: "Nobody ___ the trouble I've seen.", options: ["knows", "know", "knowing"], ans: 0, exp: "Correct! 'Nobody' is a singular pronoun, so add 's' to the verb." }
        ]
    },
    "m29": {
        title: "The 'Die' Traps (Prepositions)",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">The Varsity Trap</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">You don't just 'die'. In English, HOW you die changes the preposition completely!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Die OF:</strong> Disease/Illness. <em>(He died of cholera).</em></li>
                <li><strong>Die FROM:</strong> Overeating/Overwork/Injury. <em>(He died from overeating).</em></li>
                <li><strong>Die BY:</strong> Violence, Accident, or Suicide. <em>(He died by poison/accident).</em></li>
                <li><strong>Die FOR:</strong> A good cause or country. <em>(He died for his country).</em></li>
            </ul>
        `,
        quiz: [
            { q: "The brave soldier died ___ his motherland.", options: ["of", "by", "for"], ans: 2, exp: "Correct! Dying for a noble cause takes 'for'." },
            { q: "Many people in the village died ___ malaria.", options: ["from", "of", "by"], ans: 1, exp: "Correct! Malaria is a disease, so we use 'of'." },
            { q: "The man died ___ a tragic car crash.", options: ["by", "from", "in"], ans: 0, exp: "Correct! Accidents and violence take 'by'." },
            { q: "He ate too much at the wedding and died ___ overeating.", options: ["of", "from", "for"], ans: 1, exp: "Correct! Overeating/Overwork takes 'from'." },
            { q: "He committed suicide and died ___ poison.", options: ["by", "from", "of"], ans: 0, exp: "Correct! Suicide or weapons take 'by'." }
        ]
    },
    "m30": {
        title: "Confusing Preposition Pairs",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Context is Everything</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">One word can take two different prepositions depending on if it's a PERSON or a THING.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Deal IN vs WITH:</strong> Deal IN = Business <em>(He deals in rice)</em>. Deal WITH = Behavior/Handling <em>(He deals with customers well)</em>.</li>
                <li><strong>Part FROM vs WITH:</strong> Part FROM = A person <em>(I parted from my friend)</em>. Part WITH = A thing <em>(I parted with my phone)</em>.</li>
                <li><strong>Blind OF vs TO:</strong> Blind OF = Physically blind <em>(Blind of one eye)</em>. Blind TO = Ignoring faults <em>(Blind to his son's mistakes)</em>.</li>
            </ul>
        `,
        quiz: [
            { q: "My uncle is a businessman; he deals ___ computers.", options: ["with", "in", "for"], ans: 1, exp: "Correct! 'Deal in' means to do business or trade." },
            { q: "The mother is completely blind ___ her son's bad behavior.", options: ["of", "to", "for"], ans: 1, exp: "Correct! 'Blind to' means ignoring faults." },
            { q: "It was heartbreaking to part ___ my childhood house.", options: ["from", "with", "by"], ans: 1, exp: "Correct! A house is a THING, so you part WITH it." },
            { q: "I don't know how to deal ___ this difficult situation.", options: ["in", "with", "about"], ans: 1, exp: "Correct! Handling a situation or person takes 'with'." },
            { q: "With tears in my eyes, I parted ___ my best friend at the airport.", options: ["with", "from", "by"], ans: 1, exp: "Correct! You part FROM a person." }
        ]
    },
    "m31": {
        title: "Simple, Complex, Compound",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">The Sentence ID Card</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">How to instantly identify any sentence type in 2 seconds.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Simple:</strong> ONLY ONE subject and ONE main verb. <em>(I saw a flying bird.)</em></li>
                <li><strong>Compound:</strong> Two full sentences glued together with <strong>FANBOYS</strong> (For, And, Nor, But, Or, Yet, So). <em>(I saw a bird, AND it was flying.)</em></li>
                <li><strong>Complex:</strong> Uses markers like <strong>If, When, Because, Though, Since, As, Who, Which</strong>. <em>(I saw a bird WHICH was flying.)</em></li>
            </ul>
        `,
        quiz: [
            { q: "What kind of sentence is: 'Because it was raining, we stayed home.'?", options: ["Simple", "Compound", "Complex"], ans: 2, exp: "Correct! 'Because' is a complex marker." },
            { q: "What kind of sentence is: 'He is poor but he is honest.'?", options: ["Simple", "Compound", "Complex"], ans: 1, exp: "Correct! 'But' is a FANBOYS connector, making it Compound." },
            { q: "What kind of sentence is: 'In spite of his poverty, he is honest.'?", options: ["Simple", "Compound", "Complex"], ans: 0, exp: "Correct! It only has ONE main verb ('is'). 'In spite of' is just a phrase." },
            { q: "Identify: 'I know the man who came here.'", options: ["Simple", "Compound", "Complex"], ans: 2, exp: "Correct! 'Who' acts as a relative pronoun making it Complex." },
            { q: "Identify: 'Closing the door, he went out.'", options: ["Simple", "Compound", "Complex"], ans: 0, exp: "Correct! 'Closing' is a participle, not a main verb. Only 'went' is the main verb!" }
        ]
    },
    "m32": {
        title: "Reason Transformations",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Because vs Since/As</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">Learn the exact formula to transform reason sentences.</p>
            </div>
            <p style="font-size:14px; color:#475569; font-weight:bold;">The Transformation Path:</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Simple:</strong> Because of / Due to + (Verb+ing or Noun). <em>(Because of his illness, he couldn't come.)</em></li>
                <li><strong>Complex:</strong> Since / As / Because + Subject + Verb. <em>(Since he was ill, he couldn't come.)</em></li>
                <li><strong>Compound:</strong> Sentence 1 + And + Sentence 2. <em>(He was ill, AND he couldn't come.)</em></li>
            </ul>
        `,
        quiz: [
            { q: "Change to Complex: 'Because of his hard work, he succeeded.'", options: ["He worked hard and succeeded.", "Since he worked hard, he succeeded.", "He succeeded due to hard work."], ans: 1, exp: "Correct! 'Since' introduces the complex clause with a subject and verb." },
            { q: "Change to Compound: 'As the weather was bad, we stayed inside.'", options: ["The weather was bad, so we stayed inside.", "Because of bad weather, we stayed inside.", "We stayed inside due to the bad weather."], ans: 0, exp: "Correct! 'So' (or 'and') connects two independent clauses for a Compound sentence." },
            { q: "Change to Simple: 'Since he was tired, he went to sleep.'", options: ["He was tired and went to sleep.", "Because of being tired, he went to sleep.", "He went to sleep because he was tired."], ans: 1, exp: "Correct! 'Because of + verb-ing' creates a simple phrase with only one main verb." }
        ]
    },
    "m33": {
        title: "Contrast Transformations",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">In Spite Of vs Though</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">When two things are opposite (e.g., poor but happy), follow this formula.</p>
            </div>
            <p style="font-size:14px; color:#475569; font-weight:bold;">The Transformation Path:</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Simple:</strong> In spite of / Despite + (Verb+ing or Noun). <em>(In spite of his poverty, he is happy.)</em></li>
                <li><strong>Complex:</strong> Though / Although + Subject + Verb. <em>(Though he is poor, he is happy.)</em></li>
                <li><strong>Compound:</strong> Sentence 1 + But + Sentence 2. <em>(He is poor, BUT he is happy.)</em></li>
            </ul>
        `,
        quiz: [
            { q: "Change to Complex: 'In spite of running fast, he missed the train.'", options: ["He ran fast but missed the train.", "Though he ran fast, he missed the train.", "He missed the train despite running fast."], ans: 1, exp: "Correct! 'Though' creates the complex clause." },
            { q: "Change to Compound: 'Although he is rich, he is not happy.'", options: ["He is rich, but he is not happy.", "In spite of his riches, he is not happy.", "He is not happy despite being rich."], ans: 0, exp: "Correct! 'But' glues the compound sentences together." },
            { q: "Change to Simple: 'Though he studied hard, he failed.'", options: ["He studied hard but failed.", "Because of studying hard, he failed.", "Despite studying hard, he failed."], ans: 2, exp: "Correct! 'Despite + Verb-ing' turns it into a Simple sentence." }
        ]
    },
    "m34": {
        title: "Narration: Questions",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">The Interrogative Trap</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">In indirect narration, a question is NO LONGER a question. It becomes a flat statement!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Step 1:</strong> Change 'said to' into <strong>'asked'</strong>.</li>
                <li><strong>Step 2:</strong> If it starts with a Wh-word (Who, What, Where), keep the Wh-word!</li>
                <li><strong>Step 3:</strong> If it starts with a helping verb (Do, Is, Have), use <strong>'if'</strong> or <strong>'whether'</strong>.</li>
                <li><strong>Step 4:</strong> Swap the Subject and Verb so it's not a question anymore. (<em>Are you</em> -> <em>he was</em>).</li>
            </ul>
        `,
        quiz: [
            { q: "Direct: He said to me, 'What are you doing?'", options: ["He asked me what was I doing.", "He asked me what I was doing.", "He asked to me what I was doing."], ans: 1, exp: "Correct! 'asked me', keep 'what', and flip 'are you' into 'I was' (flat statement)." },
            { q: "Direct: She said to him, 'Do you like tea?'", options: ["She asked him if he liked tea.", "She asked him do he like tea.", "She asked him that if he liked tea."], ans: 0, exp: "Correct! Starts with 'Do', so use 'if'. Present tense (like) becomes past (liked)." },
            { q: "Direct: Asif said to me, 'Where do you live?'", options: ["Asif asked me where I lived.", "Asif asked me where did I live.", "Asif asked me if where I lived."], ans: 0, exp: "Correct! Keep 'where' and make the verb past tense (lived)." }
        ]
    },
    "m35": {
        title: "Narration: Orders & Prayers",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">Imperative & Optative</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">How to report commands, requests, and prayers.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Orders (Imperative):</strong> Change 'said to' to <strong>ordered, requested, or advised</strong>. Use <strong>'to'</strong> before the verb. <em>(He ordered me to go.)</em></li>
                <li><strong>Don't do it:</strong> Use <strong>'not to'</strong>. <em>(He advised me not to smoke.)</em> Or use 'forbade to'.</li>
                <li><strong>Prayers (Optative):</strong> Change 'said' to <strong>prayed or wished</strong>. Always use <strong>'might'</strong> after the subject. <em>(He prayed that I might live long.)</em></li>
            </ul>
        `,
        quiz: [
            { q: "Direct: The teacher said to me, 'Get out!'", options: ["The teacher told me to get out.", "The teacher ordered me to get out.", "The teacher ordered me that get out."], ans: 1, exp: "Correct! Use 'ordered' and connect with 'to'." },
            { q: "Direct: Mother said to me, 'Do not tell a lie.'", options: ["Mother advised me not to tell a lie.", "Mother advised me to not tell a lie.", "Mother ordered me do not tell a lie."], ans: 0, exp: "Correct! The negative connector is 'not to'." },
            { q: "Direct: He said, 'May God bless you.'", options: ["He prayed that God might bless me.", "He prayed if God might bless me.", "He wished that God may bless me."], ans: 0, exp: "Correct! Use 'prayed that' and change 'may' to 'might'." }
        ]
    },
    "m36": {
        title: "Voice Change: Questions",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">The Interrogative Voice</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">Changing questions into passive voice without losing the question mark.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The 'Who' Hack:</strong> 'Who' ALWAYS becomes <strong>'By whom'</strong> at the start of the sentence.</li>
                <li><strong>The 'Whom' Hack:</strong> 'Whom' ALWAYS becomes <strong>'Who'</strong>.</li>
                <li><strong>The 'Do/Does' Hack:</strong> If it starts with Do/Does, drop them and start with <strong>Am/Is/Are</strong>. <em>(Do you see the bird? -> Is the bird seen by you?)</em></li>
            </ul>
        `,
        quiz: [
            { q: "Active: Who broke the glass?", options: ["By whom was the glass broken?", "By who was the glass broken?", "The glass was broken by whom?"], ans: 0, exp: "Correct! 'Who' becomes 'By whom', followed by the helping verb (was)." },
            { q: "Active: Whom did you call?", options: ["By whom were you called?", "Who was called by you?", "Who did you call?"], ans: 1, exp: "Correct! 'Whom' becomes 'Who', followed by 'was + V3'." },
            { q: "Active: Do you play cricket?", options: ["Is cricket played by you?", "Are cricket played by you?", "Does cricket played by you?"], ans: 0, exp: "Correct! Drop 'Do', bring 'cricket' to the front, and use 'Is'." }
        ]
    },
    "m37": {
        title: "Voice Change: Imperative",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">The 'Let' Formula</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">When there is no subject (orders/commands), you must use 'Let' to make it passive.</p>
            </div>
            <p style="font-size:14px; color:#475569; font-weight:bold;">The Formula:</p>
            <p style="font-size:14px; color:#10b981; font-weight:bold;">Let + Object + be + V3</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Positive:</strong> Open the door. ➔ Let the door be opened.</li>
                <li><strong>Negative:</strong> Do not shut the window. ➔ Let not the window be shut.</li>
            </ul>
        `,
        quiz: [
            { q: "Active: Do the work.", options: ["Let the work do.", "Let the work be done.", "The work should be done."], ans: 1, exp: "Correct! Let + Object (the work) + be + V3 (done)." },
            { q: "Active: Do not waste time.", options: ["Let time not be wasted.", "Let not time be wasted.", "Both are acceptable in modern grammar."], ans: 2, exp: "Correct! 'Let not time be wasted' is traditional, but 'Let time not be wasted' is also correct." },
            { q: "Active: Post the letter.", options: ["Let the letter post.", "Let the letter be posted.", "The letter is posted."], ans: 1, exp: "Correct! Follows the 'Let + Obj + be + V3' rule." }
        ]
    },
    "m38": {
        title: "As if / As though",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">The Unreal Past Rule</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">When someone acts like a king (but isn't), we step backwards in time to show it is fake!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>If Part 1 is <strong>Present</strong>, Part 2 becomes <strong>Past Indefinite (V2)</strong>. <em>(He acts as if he knew everything.)</em></li>
                <li>If Part 1 is <strong>Past</strong>, Part 2 becomes <strong>Past Perfect (Had+V3)</strong>. <em>(He acted as if he had known everything.)</em></li>
                <li><strong>The 'Were' Hack:</strong> If you need a 'be' verb after As if / As though, it is ALWAYS <strong>were</strong> (never was)! <em>(He acts as if he were a king.)</em></li>
            </ul>
        `,
        quiz: [
            { q: "He talks to me as if he ___ my boss.", options: ["is", "was", "were"], ans: 2, exp: "Correct! Unreal situations after 'as if' always use 'were', regardless of the subject." },
            { q: "She speaks as though she ___ everything about the universe.", options: ["know", "knows", "knew"], ans: 2, exp: "Correct! Part 1 is Present (speaks), so Part 2 becomes Past Indefinite (knew)." },
            { q: "He proceeded as if he ___ not seen me.", options: ["did", "had", "has"], ans: 1, exp: "Correct! Part 1 is Past (proceeded), so Part 2 becomes Past Perfect (had not seen)." }
        ]
    },
    "m39": {
        title: "Causative Verbs",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Making Others Do It</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">Causative verbs (Make, Let, Have, Get) show that you caused someone else to do an action.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Make / Let / Have + Person:</strong> Always use the base verb (V1). <em>(I made him <strong>wash</strong> my car.)</em></li>
                <li><strong>Get + Person:</strong> Always use 'to + V1'. <em>(I got him <strong>to wash</strong> my car.)</em></li>
                <li><strong>Have / Get + THING:</strong> Always use V3. <em>(I had my car <strong>washed</strong>.)</em></li>
            </ul>
        `,
        quiz: [
            { q: "The teacher made the students ___ their homework.", options: ["do", "to do", "done"], ans: 0, exp: "Correct! 'Make' + person takes the base verb V1." },
            { q: "I got the mechanic ___ my brakes.", options: ["fix", "to fix", "fixed"], ans: 1, exp: "Correct! 'Get' + person takes 'to + V1'." },
            { q: "I went to the salon and had my hair ___.", options: ["cut", "to cut", "cutting"], ans: 0, exp: "Correct! Have + Thing (hair) takes V3. The V3 of cut is 'cut'." },
            { q: "My mother let me ___ to the party.", options: ["go", "to go", "going"], ans: 0, exp: "Correct! 'Let' + person takes the base verb V1." }
        ]
    },
    "m40": {
        title: "Parallelism",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">Matching the Rhythm</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">When making a list in a sentence, every item must be in the exact same grammatical shape.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Wrong:</strong> I like swimming, running, and <em>to bike</em>. <span style="color:#ef4444;">(Breaks rhythm)</span></li>
                <li><strong>Right:</strong> I like <strong>swimming</strong>, <strong>running</strong>, and <strong>biking</strong>.</li>
                <li><strong>Right:</strong> He wanted <strong>to eat</strong>, <strong>to sleep</strong>, and <strong>to play</strong>.</li>
            </ul>
        `,
        quiz: [
            { q: "Choose the correct sentence:", options: ["She loves baking, to paint, and reading.", "She loves baking, painting, and reading.", "She loves to bake, painting, and to read."], ans: 1, exp: "Correct! All three items in the list match the '-ing' format." },
            { q: "The boss asked us to work fast, to be accurate, and ___.", options: ["finishing early", "to finish early", "finish early"], ans: 1, exp: "Correct! It matches the 'to + V1' pattern of the previous items." },
            { q: "His skills include coding apps, designing UIs, and ___ bugs.", options: ["to fix", "fix", "fixing"], ans: 2, exp: "Correct! It matches the '-ing' rhythm." }
        ]
    },
    "m41": {
        title: "Gerund vs Participle",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">The '-ing' Confusion</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">Both end in '-ing', but they do completely different jobs in a sentence!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Gerund:</strong> Acts like a <strong>NOUN</strong>. It is an activity. <em>(<strong>Swimming</strong> is good exercise.)</em></li>
                <li><strong>Present Participle:</strong> Acts like an <strong>ADJECTIVE</strong> or part of a continuous verb. <em>(Look at that <strong>swimming</strong> boy.)</em></li>
                <li><strong>Hack:</strong> If you can replace the '-ing' word with "It", it's a Gerund! <em>(It is good exercise = Gerund).</em></li>
            </ul>
        `,
        quiz: [
            { q: "Identify the word: 'I enjoy **reading** books.'", options: ["Gerund", "Participle", "Infinitive"], ans: 0, exp: "Correct! 'Reading' is the object of the verb enjoy (acts as a Noun = Gerund)." },
            { q: "Identify the word: 'The **crying** baby needs milk.'", options: ["Gerund", "Participle", "Verb"], ans: 1, exp: "Correct! 'Crying' describes the baby, so it acts as an Adjective = Participle." },
            { q: "Identify the word: '**Walking** is my favorite hobby.'", options: ["Gerund", "Participle", "Adverb"], ans: 0, exp: "Correct! It is the subject of the sentence (Noun = Gerund)." }
        ]
    },
    "m42": {
        title: "Bare Infinitives",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">Dropping the 'To'</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">An infinitive is usually 'to + V1'. But after certain verbs, you MUST drop the 'to'!</p>
            </div>
            <p style="font-size:14px; color:#475569; font-weight:bold;">The Magic Verbs:</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Let, Make, See, Hear, Watch, Help.</strong></li>
                <li><strong>Wrong:</strong> I made him <em>to cry</em>.</li>
                <li><strong>Right:</strong> I made him <strong>cry</strong>.</li>
                <li><strong>Right:</strong> She let me <strong>go</strong>. (Not 'to go').</li>
            </ul>
        `,
        quiz: [
            { q: "The teacher let the students ___ early.", options: ["leave", "to leave", "leaving"], ans: 0, exp: "Correct! 'Let' takes a bare infinitive (no 'to')." },
            { q: "I saw the thief ___ the bag.", options: ["to steal", "steal", "stole"], ans: 1, exp: "Correct! 'See/Saw' is followed by a bare infinitive." },
            { q: "Can you help me ___ this heavy box?", options: ["carrying", "to carry", "carry"], ans: 2, exp: "Correct! 'Help' takes a bare infinitive (though 'to carry' is sometimes accepted, 'carry' is preferred)." }
        ]
    },
    "m43": {
        title: "The Subjunctive Mood",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">The Bossy Verbs</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">When you demand or suggest something, grammar rules break!</p>
            </div>
            <p style="font-size:14px; color:#475569; font-weight:bold;">The Rule:</p>
            <p style="font-size:14px; color:#475569;">After verbs like <strong>Suggest, Demand, Insist, Recommend, Require + THAT</strong>, the following verb MUST be the pure Base Form (V1), even if the subject is He/She!</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Wrong:</strong> I suggest that he <em>goes</em> to the doctor.</li>
                <li><strong>Right:</strong> I suggest that he <strong>go</strong> to the doctor.</li>
                <li><strong>Right:</strong> They demand that she <strong>be</strong> present. (Not 'is').</li>
            </ul>
        `,
        quiz: [
            { q: "The doctor recommended that he ___ smoking immediately.", options: ["stops", "stop", "stopped"], ans: 1, exp: "Correct! 'Recommended that' triggers the Subjunctive mood. Use pure V1." },
            { q: "It is crucial that Asif ___ the meeting.", options: ["attends", "attend", "attending"], ans: 1, exp: "Correct! 'It is crucial that' triggers Subjunctive. Drop the 's'." },
            { q: "The boss insisted that she ___ fired.", options: ["is", "be", "was"], ans: 1, exp: "Correct! The base form of 'am/is/are' is 'be'." }
        ]
    },
    "m44": {
        title: "Dangling Modifiers",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">The Flying Tree Trap</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">A modifier at the start of a sentence MUST describe the subject that comes immediately after the comma.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Wrong:</strong> <em>Walking down the street</em>, the trees looked beautiful. <br><span style="color:#ef4444;">(Wait... were the trees walking?!)</span></li>
                <li><strong>Right:</strong> <em>Walking down the street</em>, <strong>I</strong> saw the beautiful trees.</li>
            </ul>
        `,
        quiz: [
            { q: "Which sentence is CORRECT?", options: ["While driving to work, a dog ran across the road.", "While driving to work, I saw a dog run across the road."], ans: 1, exp: "Correct! In the first sentence, it sounds like the dog was driving the car!" },
            { q: "Fix the error: 'Exhausted after the exam, the bed felt amazing.'", options: ["Exhausted after the exam, I felt the bed was amazing.", "The bed felt amazing after the exam exhausted."], ans: 0, exp: "Correct! The person (I) was exhausted, not the bed." }
        ]
    },
    "m45": {
        title: "Inversion (Hardly/No Sooner)",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Flipping the Sentence</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">When a sentence starts with a negative word, the Subject and Verb trade places!</p>
            </div>
            <p style="font-size:14px; color:#475569; font-weight:bold;">The Pairs to Memorize:</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>No sooner + had + Subject</strong> ... <strong>than</strong> ...</li>
                <li><strong>Hardly + had + Subject</strong> ... <strong>when</strong> ...</li>
                <li><strong>Scarcely + had + Subject</strong> ... <strong>when</strong> ...</li>
                <li><em>Example:</em> No sooner had I reached the station THAN the train left.</li>
            </ul>
        `,
        quiz: [
            { q: "Hardly had we started eating ___ the power went out.", options: ["than", "when", "then"], ans: 1, exp: "Correct! 'Hardly' and 'Scarcely' ALWAYS pair with 'when'." },
            { q: "No sooner had the teacher entered the class ___ the students stood up.", options: ["than", "when", "that"], ans: 0, exp: "Correct! 'No sooner' ALWAYS pairs with 'than'." },
            { q: "Rarely ___ seen such a beautiful sunset.", options: ["I have", "have I", "I had"], ans: 1, exp: "Correct! Starting with 'Rarely' (negative) causes inversion. Verb comes before subject." }
        ]
    },
    "m46": {
        title: "Superfluous Errors",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">The Redundancy Trap</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">Bangladeshi students love saying the same thing twice. Stop it!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Return back:</strong> ❌ (Return already means going back). Say: <em>Return</em>.</li>
                <li><strong>Repeat again:</strong> ❌ Say: <em>Repeat</em>.</li>
                <li><strong>Discuss about:</strong> ❌ Say: <em>Discuss the matter</em>.</li>
                <li><strong>Despite of:</strong> ❌ Say: <em>Despite</em> or <em>In spite of</em>.</li>
            </ul>
        `,
        quiz: [
            { q: "Please ___ the book tomorrow.", options: ["return back", "return", "revert back"], ans: 1, exp: "Correct! 'Return' doesn't need 'back'." },
            { q: "Let's discuss ___ the new project.", options: ["about", "on", "no preposition needed"], ans: 2, exp: "Correct! 'Discuss' is transitive, you discuss SOMETHING directly." },
            { q: "The final conclusion was obvious. (What is the error?)", options: ["Final", "Conclusion", "Both words mean the same thing"], ans: 2, exp: "Correct! A conclusion is already final. Saying 'final conclusion' is redundant." }
        ]
    },
    "m47": {
        title: "Embedded Questions",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Questions Inside Questions</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">When you put a question INSIDE another question, the second one turns into a normal sentence!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Normal Question:</strong> Where does he live?</li>
                <li><strong>Embedded:</strong> Do you know where <strong>he lives</strong>? ❌ (NOT: Do you know where does he live?)</li>
                <li><strong>Embedded:</strong> Tell me what <strong>time it is</strong>. ❌ (NOT: Tell me what time is it).</li>
            </ul>
        `,
        quiz: [
            { q: "Can you tell me where ___?", options: ["is the bank", "the bank is", "does the bank be"], ans: 1, exp: "Correct! The embedded question becomes Subject + Verb (the bank is)." },
            { q: "I don't know why ___ so angry.", options: ["is she", "she is", "does she be"], ans: 1, exp: "Correct! It reverts to normal S+V+O structure." },
            { q: "Do you have any idea what time ___?", options: ["does the train leave", "the train leaves", "is the train leaving"], ans: 1, exp: "Correct! Drop the 'does' and use normal sentence structure." }
        ]
    },
    "m48": {
        title: "Pronoun Cases (It is I)",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">The Secret Pronoun Rules</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">What sounds 'right' in spoken English is often WRONG in formal grammar.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The 'Be' Verb Rule:</strong> A pronoun after a Be-verb (am, is, was, were) MUST be a Subject Pronoun. <br><em>It is <strong>I</strong>.</em> (NOT It is me).</li>
                <li><strong>The Preposition Rule:</strong> A pronoun after a preposition (between, with, for) MUST be an Object Pronoun. <br><em>Between you and <strong>me</strong>.</em> (NOT Between you and I).</li>
            </ul>
        `,
        quiz: [
            { q: "Hello, is Asif there? Yes, this is ___.", options: ["him", "he", "his"], ans: 1, exp: "Correct! 'Is' is a be-verb, so use the subject pronoun 'he'." },
            { q: "The secret is strictly between you and ___.", options: ["I", "me", "my"], ans: 1, exp: "Correct! 'Between' is a preposition, so use the object pronoun 'me'." },
            { q: "It was ___ who called you last night.", options: ["her", "she", "hers"], ans: 1, exp: "Correct! 'Was' requires a subject pronoun (she)." }
        ]
    },
    "m49": {
        title: "Lie vs Lay / Rise vs Raise",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">The Ultimate Boss Verbs</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">Medical admission tests love these pairs. Memorize them!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Lie (Rest yourself):</strong> Lie, Lay, Lain. <em>(I lie down. Yesterday I lay down.)</em></li>
                <li><strong>Lay (Put an object down):</strong> Lay, Laid, Laid. <em>(I lay the book on the table.)</em></li>
                <li><strong>Rise (Go up by yourself):</strong> Rise, Rose, Risen. <em>(The sun rises.)</em></li>
                <li><strong>Raise (Lift an object):</strong> Raise, Raised, Raised. <em>(Raise your hand.)</em></li>
            </ul>
        `,
        quiz: [
            { q: "I felt sick, so I ___ on the bed yesterday.", options: ["lie", "lay", "laid"], ans: 1, exp: "Correct! The past tense of 'lie' (rest yourself) is 'lay'." },
            { q: "Please ___ the heavy boxes on the floor.", options: ["lie", "lay", "lain"], ans: 1, exp: "Correct! You are putting an object down, so use 'lay'." },
            { q: "The bread dough will ___ in the oven.", options: ["raise", "rise", "rose"], ans: 1, exp: "Correct! It goes up by itself, so use 'rise'." }
        ]
    },
    "m50": {
        title: "Advanced Phrasal Traps",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Varsity Admission Vocabulary</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">Three-word verbs that don't mean what they look like.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Put up with:</strong> To tolerate. <em>(I cannot put up with this noise.)</em></li>
                <li><strong>Look forward to:</strong> Anticipate with pleasure. Takes V+ing! <em>(I look forward to meeting you.)</em></li>
                <li><strong>Look down upon:</strong> To hate or despise. <em>(Don't look down upon the poor.)</em></li>
                <li><strong>Bear with:</strong> Be patient with. <em>(Please bear with me while I load the files.)</em></li>
            </ul>
        `,
        quiz: [
            { q: "I cannot ___ this terrible heat anymore!", options: ["put down to", "put up with", "bear down"], ans: 1, exp: "Correct! 'Put up with' means to tolerate." },
            { q: "You should never ___ someone just because they have less money.", options: ["look out for", "look down upon", "look up to"], ans: 1, exp: "Correct! 'Look down upon' means to despise." },
            { q: "Please ___ me for a moment while I fix the technical issue.", options: ["bear with", "put up", "look for"], ans: 0, exp: "Correct! 'Bear with' means to be patient." }
        ]
    },
    "m51": {
        title: "Quantifiers: Few vs A Few",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">The Article Changes the Meaning</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">Adding 'A' before few/little completely flips the sentence from Negative to Positive!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Few / Little (Negative):</strong> Means almost zero. Not enough. <br><em>I have few friends. (I am lonely).</em></li>
                <li><strong>A Few / A Little (Positive):</strong> Means some. Enough to survive. <br><em>I have a few friends. (I am happy).</em></li>
                <li><em>Rule:</em> Few is for Countable (friends, pens). Little is for Uncountable (water, time).</li>
            </ul>
        `,
        quiz: [
            { q: "He cannot buy the car because he has ___ money left.", options: ["a little", "little", "few"], ans: 1, exp: "Correct! He CANNOT buy it, meaning he has almost zero money (Negative = little)." },
            { q: "I can bake a cake because there is still ___ milk in the fridge.", options: ["little", "a little", "a few"], ans: 1, exp: "Correct! 'A little' is positive (some milk is left). Milk is uncountable." },
            { q: "___ people attended the meeting, so it was cancelled.", options: ["A few", "Few", "Little"], ans: 1, exp: "Correct! The meeting was cancelled, so almost zero people came (Negative = Few)." }
        ]
    },
    "m52": {
        title: "Order of Adjectives",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">The OSASCOMP Hack</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">If you have multiple adjectives describing one noun, they must follow a strict mathematical order.</p>
            </div>
            <p style="font-size:14px; color:#475569; font-weight:bold;">OSASCOMP:</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>O</strong>pinion (Beautiful)</li>
                <li><strong>S</strong>ize (Big)</li>
                <li><strong>A</strong>ge (Old)</li>
                <li><strong>S</strong>hape (Round)</li>
                <li><strong>C</strong>olor (Red)</li>
                <li><strong>O</strong>rigin (Italian)</li>
                <li><strong>M</strong>aterial (Wooden)</li>
                <li><strong>P</strong>urpose (Racing)</li>
            </ul>
            <p style="font-size:14px; color:#10b981; font-weight:bold;">Example: A beautiful, big, old, red, wooden car.</p>
        `,
        quiz: [
            { q: "Which sentence is correct?", options: ["I bought a leather black big jacket.", "I bought a big black leather jacket.", "I bought a black big leather jacket."], ans: 1, exp: "Correct! Size (Big) -> Color (Black) -> Material (Leather)." },
            { q: "She has a ___ table.", options: ["beautiful old round", "round beautiful old", "old beautiful round"], ans: 0, exp: "Correct! Opinion (Beautiful) -> Age (Old) -> Shape (Round)." },
            { q: "He drives a ___ car.", options: ["fast red German", "German fast red", "red fast German"], ans: 0, exp: "Correct! Opinion (Fast) -> Color (Red) -> Origin (German)." }
        ]
    },
    "m53": {
        title: "Relative Pronouns",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">Who vs Whom vs Whose</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">Connecting sentences with human pronouns.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Who (Subject):</strong> Does the action. Replace it with 'He' to check. <em>(The boy WHO stole it.) -> HE stole it.</em></li>
                <li><strong>Whom (Object):</strong> Receives the action. Replace it with 'Him' to check. <em>(The boy WHOM I saw.) -> I saw HIM.</em></li>
                <li><strong>Whose (Possession):</strong> Shows ownership. <em>(The boy WHOSE car was stolen.)</em></li>
            </ul>
        `,
        quiz: [
            { q: "The man ___ is standing there is my brother.", options: ["who", "whom", "whose"], ans: 0, exp: "Correct! 'Who' is the subject performing the action of standing." },
            { q: "The woman ___ I met yesterday is a doctor.", options: ["who", "whom", "whose"], ans: 1, exp: "Correct! 'Whom' is the object. I met HER." },
            { q: "Do you know the student ___ bag was lost?", options: ["who", "whom", "whose"], ans: 2, exp: "Correct! Shows ownership of the bag." }
        ]
    },
    "m54": {
        title: "Clause Identification",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">Varsity Boss Topic</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">How to identify what a full clause is doing in a sentence.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Noun Clause:</strong> Acts like a noun. You can replace the whole clause with "IT". <br><em>I know [that he is honest]. -> I know IT.</em></li>
                <li><strong>Adjective Clause:</strong> Sits directly AFTER a noun to describe it. <br><em>The boy [who came here] is my friend.</em></li>
                <li><strong>Adverb Clause:</strong> Answers How, When, Where, or Why. <br><em>I will go [when he comes].</em></li>
            </ul>
        `,
        quiz: [
            { q: "Identify the clause: Tell me 'WHERE HE LIVES'.", options: ["Noun Clause", "Adjective Clause", "Adverb Clause"], ans: 0, exp: "Correct! You can say 'Tell me IT'. It acts as a Noun." },
            { q: "Identify the clause: The house 'WHERE HE LIVES' is old.", options: ["Noun Clause", "Adjective Clause", "Adverb Clause"], ans: 1, exp: "Correct! It describes the noun 'house', so it is an Adjective Clause." },
            { q: "Identify the clause: I will wait 'UNTIL YOU RETURN'.", options: ["Noun Clause", "Adjective Clause", "Adverb Clause"], ans: 2, exp: "Correct! It tells us WHEN the action will happen." }
        ]
    },
    "m55": {
        title: "Prefix & Suffix Basics",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">Word Shapeshifting</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">How to change a word's part of speech instantly.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Make it a Noun:</strong> Add -tion, -ment, -ness, -ity. <em>(Happy -> Happiness, Educate -> Education)</em></li>
                <li><strong>Make it an Adjective:</strong> Add -ful, -less, -ive, -ous. <em>(Care -> Careful, Danger -> Dangerous)</em></li>
                <li><strong>Make it Negative (Prefix):</strong> Add un-, in-, dis-, im-. <em>(Visible -> Invisible, Honest -> Dishonest)</em></li>
            </ul>
        `,
        quiz: [
            { q: "What is the noun form of 'Decide'?", options: ["Decidement", "Decision", "Decisive"], ans: 1, exp: "Correct! We use the '-sion' suffix to make it a noun." },
            { q: "What is the adjective form of 'Beauty'?", options: ["Beautify", "Beautiful", "Beautifully"], ans: 1, exp: "Correct! '-ful' makes it an adjective." },
            { q: "What is the correct negative prefix for 'Possible'?", options: ["Unpossible", "Impossible", "Dispossible"], ans: 1, exp: "Correct! Words starting with 'p' usually take 'im-'." }
        ]
    },
    "m56": {
        title: "Geographical Articles",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">The Map Traps</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">Why is it 'The USA' but not 'The America'? Geography has strict article rules.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Countries:</strong> Never use 'The' (Bangladesh, Japan)... UNLESS the name contains states, republic, or kingdom <em>(The USA, The UK)</em>.</li>
                <li><strong>Mountains:</strong> Use 'The' for mountain RANGES <em>(The Himalayas)</em>, but NO article for single peaks <em>(Mount Everest)</em>.</li>
                <li><strong>Water:</strong> Always use 'The' for Oceans, Seas, and Rivers <em>(The Pacific, The Padma)</em>. NO article for Lakes <em>(Lake Baikal)</em>.</li>
            </ul>
        `,
        quiz: [
            { q: "I want to visit ___ United Kingdom next year.", options: ["a", "the", "no article"], ans: 1, exp: "Correct! Kingdom/States require 'The'." },
            { q: "He climbed ___ Mount Everest.", options: ["a", "the", "no article"], ans: 2, exp: "Correct! Single mountain peaks NEVER take an article." },
            { q: "___ Meghna is a very big river.", options: ["A", "The", "No article"], ans: 1, exp: "Correct! Rivers always take 'The'." }
        ]
    },
    "m57": {
        title: "The Proximity Rule",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Either / Or & Neither / Nor</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">When you connect two subjects with 'Or' / 'Nor', which one controls the verb?</p>
            </div>
            <p style="font-size:14px; color:#475569; font-weight:bold;">The Proximity Trick:</p>
            <p style="font-size:14px; color:#475569;">The verb ONLY cares about the subject that is physically closest to it!</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>Neither the boss nor the <strong>employees WERE</strong> present. <em>(Employees is plural).</em></li>
                <li>Neither the employees nor the <strong>boss WAS</strong> present. <em>(Boss is singular).</em></li>
            </ul>
        `,
        quiz: [
            { q: "Either Asif or his friends ___ going to the market.", options: ["is", "are", "was"], ans: 1, exp: "Correct! 'Friends' is plural and closest to the verb." },
            { q: "Neither the players nor the coach ___ happy with the decision.", options: ["is", "are", "were"], ans: 0, exp: "Correct! 'Coach' is singular and closest to the verb." },
            { q: "Not only the students but also the principal ___ arrived.", options: ["has", "have", "are"], ans: 0, exp: "Correct! 'Principal' is singular, so it takes 'has'." }
        ]
    },
    "m58": {
        title: "Affirmative Agreement",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">So do I / Neither do I</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">How to agree with someone like a native speaker without repeating their sentence.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Agreeing with a Positive:</strong> Use 'So + helping verb + subject'. <br><em>He likes coffee. -> So do I.</em></li>
                <li><strong>Agreeing with a Negative:</strong> Use 'Neither + helping verb + subject'. <br><em>He doesn't like coffee. -> Neither do I.</em></li>
                <li><em>Rule:</em> The helping verb MUST match the tense of the original sentence!</li>
            </ul>
        `,
        quiz: [
            { q: "'I went to Dhaka yesterday.' -> '___'", options: ["So did I.", "So do I.", "So was I."], ans: 0, exp: "Correct! 'Went' is past tense, so the helping verb must be 'did'." },
            { q: "'I have never been to Paris.' -> '___'", options: ["Neither do I.", "Neither have I.", "So haven't I."], ans: 1, exp: "Correct! The original sentence is negative and uses 'have'." },
            { q: "'She is very tired.' -> 'So ___ he.'", options: ["does", "is", "has"], ans: 1, exp: "Correct! The verb 'is' matches the be-verb from the first sentence." }
        ]
    },
    "m59": {
        title: "Collective Nouns",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Group Mind vs Divided Mind</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">Words like Jury, Committee, Team, and Family can be BOTH singular and plural!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Singular (United):</strong> If the group acts as one single unit, the verb is singular. <br><em>The jury <strong>has</strong> given its verdict.</em></li>
                <li><strong>Plural (Divided):</strong> If the group members are fighting or acting separately, the verb is plural. <br><em>The jury <strong>are</strong> arguing with each other.</em></li>
            </ul>
        `,
        quiz: [
            { q: "The committee ___ finally reached a unanimous decision.", options: ["have", "has", "are"], ans: 1, exp: "Correct! They are united ('unanimous'), so the group acts as a single unit (has)." },
            { q: "The team ___ putting on their individual uniforms right now.", options: ["is", "are", "was"], ans: 1, exp: "Correct! 'Individual uniforms' means they are acting separately, so the verb is plural (are)." },
            { q: "My family ___ very large.", options: ["is", "are", "were"], ans: 0, exp: "Correct! Treated as one single entity." }
        ]
    },
    "m60": {
        title: "Varsity Idioms & Phrases",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">The Final Vocabulary Boss</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">These idioms appear in almost every admission test. Memorize the exact meanings.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>A white elephant:</strong> Something very expensive but useless.</li>
                <li><strong>By fits and starts:</strong> Irregularly / not steadily.</li>
                <li><strong>Out of the woods:</strong> Out of danger.</li>
                <li><strong>To smell a rat:</strong> To suspect a trick or deception.</li>
            </ul>
        `,
        quiz: [
            { q: "His new sports car is 'a white elephant'. This means it is ___.", options: ["Very fast", "Expensive but useless", "A rare and beautiful thing"], ans: 1, exp: "Correct! 'A white elephant' is a financial burden." },
            { q: "He works 'by fits and starts', so he never finishes projects.", options: ["Very aggressively", "Irregularly", "At night"], ans: 1, exp: "Correct! It means working irregularly without consistency." },
            { q: "The police started 'to smell a rat' during the interrogation.", options: ["To find a dead animal", "To suspect a trick", "To become angry"], ans: 1, exp: "Correct! 'Smell a rat' means suspecting something is wrong or deceitful." }
        ]
    },
    "m61": {
        title: "Participial Phrases",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">The Action Descriptor</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">A phrase starting with an '-ing' or '-ed' verb that acts exactly like an adjective.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Present Participle (-ing):</strong> The man <strong>wearing the black coat</strong> is my brother.</li>
                <li><strong>Past Participle (-ed):</strong> The car <strong>damaged in the accident</strong> was towed.</li>
                <li><em>Rule:</em> Keep it close to the noun it modifies!</li>
            </ul>
        `,
        quiz: [
            { q: "Identify the participial phrase: 'The boy playing the guitar is my friend.'", options: ["The boy", "playing the guitar", "is my friend"], ans: 1, exp: "Correct! 'playing the guitar' describes the boy." },
            { q: "The window, ___ by the storm, needs repair.", options: ["break", "breaking", "broken"], ans: 2, exp: "Correct! Use the past participle (broken) because the window receives the action." }
        ]
    },
    "m62": {
        title: "Appositive Phrases",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">Noun Renaming Noun</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">An appositive is a noun or noun phrase placed directly next to another noun to explain it.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>It is usually surrounded by commas.</li>
                <li><em>Example:</em> Asif, <strong>a brilliant developer</strong>, created this app.</li>
                <li><em>Example:</em> Dhaka, <strong>the capital of Bangladesh</strong>, is highly populated.</li>
            </ul>
        `,
        quiz: [
            { q: "Identify the appositive: 'My friend Rahim, a talented artist, painted this.'", options: ["My friend Rahim", "a talented artist", "painted this"], ans: 1, exp: "Correct! It renames 'Rahim'." },
            { q: "Which sentence uses an appositive correctly?", options: ["The dog, barked loudly, woke me up.", "Mr. Smith, my English teacher, is very strict."], ans: 1, exp: "Correct! 'my English teacher' is a noun phrase renaming Mr. Smith." }
        ]
    },
    "m63": {
        title: "Absolute Phrases",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">Modifying the Whole Sentence</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">A noun + participle that modifies the ENTIRE sentence, not just one word.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><em>Formula:</em> Noun + Participle (-ing/-ed) + ...</li>
                <li><em>Example:</em> <strong>The weather being fine</strong>, we went for a walk.</li>
                <li><em>Example:</em> <strong>His work finished</strong>, he went home.</li>
            </ul>
        `,
        quiz: [
            { q: "Identify the absolute phrase: 'The sun having set, we returned to the camp.'", options: ["The sun having set", "we returned", "to the camp"], ans: 0, exp: "Correct! Noun (sun) + Participle (having set) modifies the whole sentence." },
            { q: "___, the match was cancelled.", options: ["It was raining", "The rain pouring heavily", "Because rain"], ans: 1, exp: "Correct! Noun (rain) + Participle (pouring) creates an absolute phrase." }
        ]
    },
    "m64": {
        title: "Restrictive vs Non-Restrictive",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">To Comma or Not to Comma?</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">Does the sentence break if you remove the phrase? This decides the commas!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Restrictive (NO COMMAS):</strong> Essential info. <br><em>Students <strong>who study hard</strong> get good grades.</em> (If you remove it, the meaning changes).</li>
                <li><strong>Non-Restrictive (COMMAS):</strong> Extra info. <br><em>My father, <strong>who is a doctor</strong>, loves golf.</em> (If you remove it, I still have the same father).</li>
            </ul>
        `,
        quiz: [
            { q: "Which sentence implies you only have ONE brother?", options: ["My brother who lives in Dhaka is a teacher.", "My brother, who lives in Dhaka, is a teacher."], ans: 1, exp: "Correct! The commas mean the phrase is just extra info about your ONLY brother." },
            { q: "The car ___ he bought yesterday is blue.", options: ["which", ", which", "that,"], ans: 0, exp: "Correct! It is essential information specifying WHICH car. No commas." }
        ]
    },
    "m65": {
        title: "Double Comparatives",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">The More, The Better</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">When two things increase or decrease together, use two 'The's!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><em>Formula:</em> The + Comparative, The + Comparative.</li>
                <li><em>Example:</em> <strong>The more</strong> you study, <strong>the more</strong> you learn.</li>
                <li><em>Example:</em> <strong>The sooner</strong>, <strong>the better</strong>.</li>
            </ul>
        `,
        quiz: [
            { q: "___ you practice, the easier it becomes.", options: ["More", "The more", "Most"], ans: 1, exp: "Correct! Double comparatives require 'The' in front of both sides." },
            { q: "The harder you work, ___ successful you will be.", options: ["more", "the more", "most"], ans: 1, exp: "Correct! The + Comparative." }
        ]
    },
    "m66": {
        title: "Sneaky Plurals",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Looks Singular, Acts Plural</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">These words have no 's' at the end, but they are ALWAYS plural!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Police:</strong> The police <strong>are</strong> investigating.</li>
                <li><strong>Cattle:</strong> The cattle <strong>are</strong> grazing.</li>
                <li><strong>People:</strong> The people <strong>were</strong> angry.</li>
                <li><em>Note:</em> 'News', 'Physics', 'Mathematics' end in 's' but are ALWAYS SINGULAR! <em>(The news is bad).</em></li>
            </ul>
        `,
        quiz: [
            { q: "The police ___ caught the thief.", options: ["has", "have", "is"], ans: 1, exp: "Correct! 'Police' is a plural noun." },
            { q: "The news ___ very shocking.", options: ["was", "were", "are"], ans: 0, exp: "Correct! 'News' is an uncountable, singular noun despite the 's'." },
            { q: "Mathematics ___ my favorite subject.", options: ["is", "are", "were"], ans: 0, exp: "Correct! Subjects ending in -ics are singular." }
        ]
    },
    "m67": {
        title: "The 'Number' Rule",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">A Number vs The Number</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">This is a guaranteed trap in Varsity admission tests.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>A number of (Means 'Many'):</strong> ALWAYS takes a PLURAL verb. <br><em>A number of students <strong>are</strong> absent.</em></li>
                <li><strong>The number of (A specific digit):</strong> ALWAYS takes a SINGULAR verb. <br><em>The number of students <strong>is</strong> 50.</em></li>
            </ul>
        `,
        quiz: [
            { q: "A number of problems ___ been solved.", options: ["has", "have", "is"], ans: 1, exp: "Correct! 'A number of' = plural verb (have)." },
            { q: "The number of cars on the road ___ increasing.", options: ["is", "are", "were"], ans: 0, exp: "Correct! 'The number of' = singular verb (is)." }
        ]
    },
    "m68": {
        title: "Foreign Plurals",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Latin & Greek Traps</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">In scientific and formal English, plurals don't use 's'.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>Datum (Singular) ➔ <strong>Data (Plural)</strong></li>
                <li>Medium (Singular) ➔ <strong>Media (Plural)</strong></li>
                <li>Criterion (Singular) ➔ <strong>Criteria (Plural)</strong></li>
                <li>Phenomenon (Singular) ➔ <strong>Phenomena (Plural)</strong></li>
                <li>Bacterium (Singular) ➔ <strong>Bacteria (Plural)</strong></li>
            </ul>
        `,
        quiz: [
            { q: "The data ___ analyzed by the scientists.", options: ["was", "were", "is"], ans: 1, exp: "Correct! 'Data' is technically the plural of 'Datum'." },
            { q: "What is the main ___ for passing this exam?", options: ["criterion", "criteria", "criterias"], ans: 0, exp: "Correct! 'Criterion' is the singular form." },
            { q: "Social ___ have a massive impact on youth.", options: ["medium", "media", "medias"], ans: 1, exp: "Correct! 'Media' is the plural form." }
        ]
    },
    "m69": {
        title: "Hyphenated Adjectives",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">The 5-Year-Old Boy Trick</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">When you combine words to make an adjective, NEVER make them plural!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Wrong:</strong> A five-<em>years</em>-old boy. (Adjectives can't be plural!).</li>
                <li><strong>Right:</strong> A five-<strong>year</strong>-old boy.</li>
                <li><strong>Right:</strong> A ten-<strong>mile</strong> journey.</li>
                <li><strong>Right:</strong> A three-<strong>page</strong> essay.</li>
            </ul>
        `,
        quiz: [
            { q: "I found a ___ note on the street.", options: ["five-hundred-taka", "five-hundred-takas", "five-hundreds-taka"], ans: 0, exp: "Correct! Hyphenated adjectives never take an 's'." },
            { q: "We went on a ___ vacation.", options: ["two-weeks", "two-week", "two-week's"], ans: 1, exp: "Correct! Adjectives cannot be plural." }
        ]
    },
    "m70": {
        title: "Gerund Prepositions",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Forced '-ing' Combinations</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">These specific verb-preposition combos demand a Gerund (V+ing) after them.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Insist on:</strong> He insisted on <strong>going</strong>.</li>
                <li><strong>Object to:</strong> I object to <strong>working</strong> late.</li>
                <li><strong>Prevent from:</strong> They prevented him from <strong>entering</strong>.</li>
                <li><strong>Think of:</strong> I am thinking of <strong>buying</strong> a laptop.</li>
            </ul>
        `,
        quiz: [
            { q: "She insisted on ___ the bill.", options: ["pay", "to pay", "paying"], ans: 2, exp: "Correct! Prepositions (except 'to') are followed by Gerunds." },
            { q: "I strongly object to ___ treated this way.", options: ["be", "being", "been"], ans: 1, exp: "Correct! 'Object to' is a special phrase that requires an '-ing' verb." }
        ]
    },
    "m71": {
        title: "Need & Dare",
        theoryHTML: `
            <div style="background:#faf5ff; padding:15px; border-radius:12px; border-left:4px solid #9333ea; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#7e22ce;">Modal or Main Verb?</h4>
                <p style="margin:0; font-size:14px; color:#6b21a8;">Need and Dare are 'semi-modals'. They can act as normal verbs or modal verbs.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>As a Main Verb:</strong> Takes an 's' for singular, and uses 'to'. <br><em>He <strong>needs to</strong> go.</em></li>
                <li><strong>As a Modal (Negative/Question):</strong> NO 's', NO 'to'. <br><em>He <strong>need not</strong> go.</em> (NOT needs not, NOT need not to).</li>
                <li><em>How <strong>dare</strong> you speak to me like that!</em> (Modal).</li>
            </ul>
        `,
        quiz: [
            { q: "He ___ worry about the exam.", options: ["needs not to", "need not", "need not to"], ans: 1, exp: "Correct! As a negative modal, it drops the 's' and the 'to'." },
            { q: "She ___ to buy a new laptop.", options: ["need", "needs", "needing"], ans: 1, exp: "Correct! Used as a main verb, so it takes 's' and 'to'." }
        ]
    },
    "m72": {
        title: "Subjunctive 'Were'",
        theoryHTML: `
            <div style="background:#faf5ff; padding:15px; border-radius:12px; border-left:4px solid #9333ea; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#7e22ce;">Wish & If Only</h4>
                <p style="margin:0; font-size:14px; color:#6b21a8;">When expressing a strong wish or impossible dream, grammar rules break.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>After <strong>Wish, If Only, As if, As though</strong>... ALWAYS use <strong>were</strong> instead of was!</li>
                <li><em>Wrong:</em> I wish I <em>was</em> a bird.</li>
                <li><em>Right:</em> I wish I <strong>were</strong> a bird.</li>
                <li><em>Right:</em> If only he <strong>were</strong> here today.</li>
            </ul>
        `,
        quiz: [
            { q: "I wish I ___ the Prime Minister.", options: ["was", "am", "were"], ans: 2, exp: "Correct! Unreal wishes always use 'were'." },
            { q: "If only it ___ raining, we could play outside.", options: ["was not", "were not", "is not"], ans: 1, exp: "Correct! 'If only' triggers the subjunctive 'were'." }
        ]
    },
    "m73": {
        title: "Cleft Sentences",
        theoryHTML: `
            <div style="background:#faf5ff; padding:15px; border-radius:12px; border-left:4px solid #9333ea; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#7e22ce;">The Focus Structure</h4>
                <p style="margin:0; font-size:14px; color:#6b21a8;">We split a sentence to force the reader to focus on one specific piece of information.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><em>Normal:</em> Asif built this app.</li>
                <li><em>Focus on Subject:</em> <strong>It is Asif who</strong> built this app.</li>
                <li><em>Focus on Object:</em> <strong>It is this app that</strong> Asif built.</li>
                <li><strong>Rule:</strong> Match the pronoun! After "It is I", use "who". <em>(It is I who <strong>am</strong> responsible.)</em></li>
            </ul>
        `,
        quiz: [
            { q: "It is I who ___ to blame.", options: ["is", "am", "are"], ans: 1, exp: "Correct! 'Who' refers back to 'I', so the verb must be 'am'." },
            { q: "It was in 1971 ___ Bangladesh became independent.", options: ["when", "that", "which"], ans: 1, exp: "Correct! Cleft sentences focusing on a phrase usually use 'that'." }
        ]
    },
    "m74": {
        title: "Split Infinitives",
        theoryHTML: `
            <div style="background:#faf5ff; padding:15px; border-radius:12px; border-left:4px solid #9333ea; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#7e22ce;">Never Split the 'To'</h4>
                <p style="margin:0; font-size:14px; color:#6b21a8;">Formal grammar hates it when you put an adverb between 'To' and the verb.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Wrong:</strong> He wants <em>to quickly finish</em> the exam.</li>
                <li><strong>Right:</strong> He wants <strong>to finish</strong> the exam <strong>quickly</strong>.</li>
                <li><strong>Right:</strong> I asked him <strong>not to go</strong>. (Never say: to not go).</li>
            </ul>
        `,
        quiz: [
            { q: "Which sentence is grammatically superior?", options: ["I want to really understand grammar.", "I want to understand grammar really well.", "I really want to understand grammar."], ans: 2, exp: "Correct! It doesn't split the infinitive 'to understand'." },
            { q: "The teacher advised us ___ make a noise.", options: ["to not", "not to", "don't"], ans: 1, exp: "Correct! The negative 'not' must come before the full infinitive 'to make'." }
        ]
    },
    "m75": {
        title: "Ellipsis (Omission)",
        theoryHTML: `
            <div style="background:#faf5ff; padding:15px; border-radius:12px; border-left:4px solid #9333ea; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#7e22ce;">Leaving Words Out</h4>
                <p style="margin:0; font-size:14px; color:#6b21a8;">Native speakers omit words when the meaning is obvious. This explains weird pronoun rules!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><em>Why do we say:</em> "He is taller than I"?</li>
                <li>Because the full sentence is: "He is taller than I <strong>[am tall]</strong>."</li>
                <li>The "am tall" is omitted (ellipsis). This is why saying "taller than me" is technically wrong in formal writing!</li>
            </ul>
        `,
        quiz: [
            { q: "She can run much faster than ___.", options: ["I", "me", "my"], ans: 0, exp: "Correct! The hidden meaning is 'faster than I [can run]'." },
            { q: "You love pizza more than ___.", options: ["he", "him", "Both can be correct depending on meaning!"], ans: 2, exp: "Correct! 'Than he (loves pizza)' OR 'Than (you love) him'." }
        ]
    },
    "m76": {
        title: "Redundancy Vol 2",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">The Double-Word Killers</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">More phrases you need to permanently delete from your vocabulary.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Advance forward:</strong> ❌ Say: <em>Advance</em>.</li>
                <li><strong>Past history:</strong> ❌ Say: <em>History</em>.</li>
                <li><strong>Free gift:</strong> ❌ Say: <em>Gift</em> (All gifts are free!).</li>
                <li><strong>Unexpected surprise:</strong> ❌ Say: <em>Surprise</em>.</li>
                <li><strong>Absolutely essential:</strong> ❌ Say: <em>Essential</em>.</li>
            </ul>
        `,
        quiz: [
            { q: "Identify the error: 'The teacher explained the basic fundamentals.'", options: ["Explained", "Basic", "Fundamentals"], ans: 1, exp: "Correct! Fundamentals are already basic. Delete 'basic'." },
            { q: "Identify the error: 'We need to plan ahead for the future.'", options: ["Plan", "Ahead", "Future"], ans: 1, exp: "Correct! Planning is always for the future. Delete 'ahead'." }
        ]
    },
    "m77": {
        title: "Adjective vs Adverb Traps",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">Good vs Well</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">A classic error that exposes bad grammar instantly.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Good (Adjective):</strong> Describes a Noun. <em>(He is a good player.)</em></li>
                <li><strong>Well (Adverb):</strong> Describes an Action. <em>(He plays well.)</em></li>
                <li><strong>The Sense Verbs Rule:</strong> Look, Sound, Feel, Taste, Smell ALWAYS take Adjectives! <em>(You look good today. The food tastes delicious.)</em></li>
            </ul>
        `,
        quiz: [
            { q: "She did very ___ in her HSC exams.", options: ["good", "well", "nice"], ans: 1, exp: "Correct! 'Well' is an adverb describing the action 'did'." },
            { q: "This perfume smells incredibly ___.", options: ["sweetly", "sweet", "well"], ans: 1, exp: "Correct! 'Smell' is a sense verb, so it takes an adjective (sweet)." },
            { q: "He speaks English very ___.", options: ["good", "well", "better"], ans: 1, exp: "Correct! 'Well' describes HOW he speaks." }
        ]
    },
    "m78": {
        title: "Confusing Pairs",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">Spelling Traps</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">Words that sound exactly the same but destroy your exam marks if swapped.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Principal:</strong> The head of a school. <em>(The princi-PAL is your PAL).</em></li>
                <li><strong>Principle:</strong> A rule or belief. <em>(He has strong moral principles).</em></li>
                <li><strong>Stationery:</strong> Pens, paper. <em>(E for Envelope).</em></li>
                <li><strong>Stationary:</strong> Not moving. <em>(A for At rest).</em></li>
                <li><strong>Lose (Verb):</strong> To misplace. <strong>Loose (Adj):</strong> Not tight.</li>
            </ul>
        `,
        quiz: [
            { q: "The ___ of our college is very strict.", options: ["principle", "principal"], ans: 1, exp: "Correct! Principal is the head of the school." },
            { q: "The car hit a ___ truck on the highway.", options: ["stationery", "stationary"], ans: 1, exp: "Correct! Stationary means not moving." },
            { q: "These pants are too ___ for me.", options: ["lose", "loose"], ans: 1, exp: "Correct! Loose means not tight." }
        ]
    },
    "m79": {
        title: "Break & Bring Traps",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">Phrasal Verbs Vol 2</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">More high-frequency phrasal verbs for Varsity Admission.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Break down:</strong> Machine stops working / To cry.</li>
                <li><strong>Break out:</strong> Spread suddenly (disease/fire). <em>(Cholera broke out.)</em></li>
                <li><strong>Break into:</strong> Enter by force. <em>(Thieves broke into the house.)</em></li>
                <li><strong>Bring up:</strong> To raise a child / Introduce a topic.</li>
            </ul>
        `,
        quiz: [
            { q: "The burglar ___ the house while they were sleeping.", options: ["broke out", "broke into", "broke down"], ans: 1, exp: "Correct! Break into means to enter by force." },
            { q: "He was ___ by his grandmother.", options: ["brought up", "brought out", "brought in"], ans: 0, exp: "Correct! Brought up means raised." },
            { q: "Panic ___ when the earthquake hit.", options: ["broke down", "broke out", "broke into"], ans: 1, exp: "Correct! Broke out means to spread suddenly." }
        ]
    },
    "m80": {
        title: "Tag Questions Vol 2",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">The Ultimate Exceptions</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">The weirdest tag questions that defy normal logic.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>I am:</strong> ALWAYS becomes <strong>aren't I?</strong> (Never 'amn't I').</li>
                <li><strong>Let me / Let him / Let them:</strong> ALWAYS becomes <strong>will you?</strong></li>
                <li><strong>Imperatives (Orders):</strong> Open the door, <strong>will you / won't you?</strong> (Both work, but 'will you' is safest).</li>
                <li><strong>Don't:</strong> Don't forget, <strong>will you?</strong> (ALWAYS positive).</li>
            </ul>
        `,
        quiz: [
            { q: "I am your best friend, ___?", options: ["amn't I", "aren't I", "don't I"], ans: 1, exp: "Correct! 'I am' always takes 'aren't I'." },
            { q: "Let me do the work, ___?", options: ["shall we", "will you", "don't you"], ans: 1, exp: "Correct! 'Let's' takes shall we, but 'Let me' takes will you." },
            { q: "Don't open the window, ___?", options: ["will you", "do you", "won't you"], ans: 0, exp: "Correct! Negative imperatives always take 'will you'." }
        ]
    },
    "m81": {
        title: "Stop To Do vs Stop Doing",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">The Meaning Shift</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">Using a Gerund (-ing) vs an Infinitive (to + V1) completely changes what happened.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Stop + Gerund (doing):</strong> You quit the action completely. <br><em>He stopped <strong>smoking</strong>.</em> (He doesn't smoke anymore).</li>
                <li><strong>Stop + Infinitive (to do):</strong> You stopped walking/driving IN ORDER to start a new action. <br><em>He stopped <strong>to smoke</strong>.</em> (He paused his journey to light a cigarette).</li>
            </ul>
        `,
        quiz: [
            { q: "While driving to Sylhet, we stopped ___ some food.", options: ["eating", "to eat", "eat"], ans: 1, exp: "Correct! You paused your driving IN ORDER TO eat." },
            { q: "My doctor told me my lungs are bad, so I stopped ___ immediately.", options: ["smoking", "to smoke", "smoke"], ans: 0, exp: "Correct! You quit the habit completely, so use the gerund." }
        ]
    },
    "m82": {
        title: "Forget & Remember",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">Past vs Future Memory</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">Memory verbs change meaning based on whether the action already happened or still needs to happen.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Remember/Forget + to do (Future Task):</strong> A task you need to perform. <br><em>Don't forget <strong>to lock</strong> the door.</em> (You haven't locked it yet).</li>
                <li><strong>Remember/Forget + doing (Past Memory):</strong> A memory of something you already did. <br><em>I remember <strong>visiting</strong> Cox's Bazar.</em> (You went there in the past).</li>
            </ul>
        `,
        quiz: [
            { q: "I will never forget ___ you for the first time.", options: ["to meet", "meeting", "meet"], ans: 1, exp: "Correct! It is a memory of a past event." },
            { q: "Please remember ___ the email before 5 PM.", options: ["to send", "sending", "send"], ans: 0, exp: "Correct! It is a task that needs to be done in the future." }
        ]
    },
    "m83": {
        title: "Mixed Conditionals",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">Time Traveling Logic</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">Sometimes an unreal past action changes your PRESENT situation.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><em>Formula:</em> If + Past Perfect (Past), + Would + V1 (Present).</li>
                <li><em>Example:</em> If I <strong>had studied</strong> yesterday (past), I <strong>would be</strong> ready for the exam today (present).</li>
                <li>Normally, Past Perfect pairs with 'Would have', but here 'today' forces it to be 'Would + V1'.</li>
            </ul>
        `,
        quiz: [
            { q: "If I had eaten breakfast, I ___ hungry now.", options: ["would not have been", "would not be", "will not be"], ans: 1, exp: "Correct! The 'now' makes the result in the present, so we use 'would + V1'." },
            { q: "If he had taken the map, he ___ lost right now.", options: ["wouldn't be", "wouldn't have been", "isn't"], ans: 0, exp: "Correct! Past action (not taking map) affecting the present moment (now)." }
        ]
    },
    "m84": {
        title: "Make vs Do",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">The Collocation Rule</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">There is no strict grammar logic here—native speakers just memorized which one goes with what.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>DO (Tasks & Actions):</strong> Do homework, Do business, Do someone a favor, Do your best, Do the laundry.</li>
                <li><strong>MAKE (Creating & Producing):</strong> Make a mistake, Make a promise, Make money, Make a noise, Make a decision.</li>
            </ul>
        `,
        quiz: [
            { q: "Can you ___ me a favor and hold this bag?", options: ["make", "do", "give"], ans: 1, exp: "Correct! You 'do' someone a favor." },
            { q: "He was very careful not to ___ any mistakes on the test.", options: ["make", "do", "create"], ans: 0, exp: "Correct! You 'make' a mistake." },
            { q: "I need to ___ my homework before playing games.", options: ["make", "do", "write"], ans: 1, exp: "Correct! Homework is a task, so you 'do' it." }
        ]
    },
    "m85": {
        title: "Say vs Tell",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">Who are you talking to?</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">Both mean to communicate, but they require different structures.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>TELL:</strong> MUST be followed by a person (object). <br><em>He told <strong>me</strong> a secret.</em> (Never 'He told a secret').</li>
                <li><strong>SAY:</strong> Is NOT directly followed by a person. Focuses on the words. <br><em>He said <strong>that</strong> he was happy.</em> (If you add a person, you must use 'to': <em>He said to me</em>).</li>
            </ul>
        `,
        quiz: [
            { q: "She ___ me that the exam was cancelled.", options: ["said", "told", "spoke"], ans: 1, exp: "Correct! 'Me' is a person, so you must use 'told'." },
            { q: "Did he ___ anything about the meeting?", options: ["tell", "say", "speak"], ans: 0, exp: "Correct! There is no person receiving the action directly, so use 'say'." }
        ]
    },
    "m86": {
        title: "Institution Articles",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Hospital vs The Hospital</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">Schools, prisons, hospitals, and beds have a secret article rule!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>No Article (Primary Purpose):</strong> If you go for the normal reason (sick/study/sleep), DO NOT use 'the'. <br><em>He is sick, so he went to <strong>hospital</strong>.</em></li>
                <li><strong>Use 'The' (Visiting):</strong> If you go just to visit or look around, use 'The'. <br><em>I went to <strong>the hospital</strong> to visit my sick friend.</em></li>
            </ul>
        `,
        quiz: [
            { q: "Rahim broke his leg and was taken to ___ hospital.", options: ["a", "the", "no article"], ans: 2, exp: "Correct! He is the patient (primary purpose), so no article." },
            { q: "My mother went to ___ school to meet my principal.", options: ["a", "the", "no article"], ans: 1, exp: "Correct! She went to visit, not to be a student, so we use 'the'." }
        ]
    },
    "m87": {
        title: "So vs Such",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Amplifying the Sentence</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">Both mean 'very', but they attach to different parts of speech.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>SO + Adjective/Adverb:</strong> <br><em>The car is <strong>so fast</strong>.</em> (No noun after fast).</li>
                <li><strong>SUCH + (Article) + Adjective + NOUN:</strong> <br><em>It is <strong>such a fast car</strong>.</em> (Because 'car' is there, we use such).</li>
            </ul>
        `,
        quiz: [
            { q: "It was ___ beautiful day that we went to the beach.", options: ["so", "such a", "so a"], ans: 1, exp: "Correct! 'Day' is a noun, so we use 'such a'." },
            { q: "The exam was ___ difficult that many students failed.", options: ["such", "so", "such a"], ans: 1, exp: "Correct! 'Difficult' is an adjective without a noun following it, so use 'so'." }
        ]
    },
    "m88": {
        title: "Too vs Enough",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Positioning is Everything</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">Where you place these words decides if the sentence is correct or garbage.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Too + Adjective:</strong> Comes BEFORE the adjective. Means 'excessive/negative'. <br><em>The coffee is <strong>too hot</strong> to drink.</em></li>
                <li><strong>Adjective + Enough:</strong> Comes AFTER the adjective. Means 'sufficient'. <br><em>The coffee is <strong>cool enough</strong> to drink.</em> (Never say 'enough cool').</li>
            </ul>
        `,
        quiz: [
            { q: "He is not ___ to ride the roller coaster.", options: ["tall enough", "enough tall", "too tall"], ans: 0, exp: "Correct! 'Enough' must come AFTER the adjective 'tall'." },
            { q: "The box is ___ for me to lift.", options: ["heavy too", "enough heavy", "too heavy"], ans: 2, exp: "Correct! 'Too' comes BEFORE the adjective." }
        ]
    },
    "m89": {
        title: "As vs Like",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">The Comparison Trap</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">They look similar but follow strict structural rules.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Like + Noun/Pronoun:</strong> Means 'similar to'. <br><em>He fights <strong>like a lion</strong>.</em></li>
                <li><strong>As + Subject + Verb:</strong> A full clause must follow. <br><em>Do exactly <strong>as I say</strong>.</em></li>
                <li><strong>As (Job/Role):</strong> <br><em>He works <strong>as a teacher</strong>.</em> (He IS a teacher, not just similar to one).</li>
            </ul>
        `,
        quiz: [
            { q: "She looks exactly ___ her mother.", options: ["as", "like", "same"], ans: 1, exp: "Correct! Followed only by a noun phrase (her mother), use 'like'." },
            { q: "He was hired to work ___ a manager.", options: ["as", "like", "for"], ans: 0, exp: "Correct! It is his actual profession/role, so use 'as'." },
            { q: "Nobody loves you ___ I do.", options: ["like", "as", "such"], ans: 1, exp: "Correct! Followed by a full subject and verb (I do), so use 'as'." }
        ]
    },
    "m90": {
        title: "Unless vs Until",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Condition vs Time</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">Never mix these two up! One is a threat, the other is a stopwatch.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Unless (If not):</strong> A condition. <br><em>You will fail <strong>unless</strong> you study.</em> (Condition: studying).</li>
                <li><strong>Until (Up to the time):</strong> Time-based. <br><em>Wait here <strong>until</strong> I return.</em> (Time: my return).</li>
                <li><em>Rule:</em> NEVER use 'not' after unless or until. They are already negative!</li>
            </ul>
        `,
        quiz: [
            { q: "I will not forgive him ___ he apologizes.", options: ["until", "unless", "if"], ans: 1, exp: "Correct! It is a condition (if he does not apologize)." },
            { q: "Please hold the line ___ the operator connects you.", options: ["unless", "until", "by"], ans: 0, exp: "Correct! It is related to waiting for a specific time." },
            { q: "Which is correct?", options: ["Unless you don't work hard, you will fail.", "Unless you work hard, you will fail."], ans: 1, exp: "Correct! 'Unless' is already negative. You cannot use 'don't' with it." }
        ]
    },
    "m91": {
        title: "Used to vs Be Used to",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Habit vs Adaptation</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">Adding an 'am/is/are' completely changes the verb that comes next!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Used to + V1:</strong> A past habit you stopped doing. <br><em>I <strong>used to play</strong> cricket.</em> (I don't play now).</li>
                <li><strong>Be verb + Used to + V+ing:</strong> Being adapted to a current situation. <br><em>I <strong>am used to waking</strong> up early.</em> (It is normal for me now).</li>
            </ul>
        `,
        quiz: [
            { q: "When I was a kid, I ___ watch a lot of cartoons.", options: ["used to", "was used to", "am used to"], ans: 0, exp: "Correct! It is a dead past habit. Takes 'Used to + V1'." },
            { q: "I just moved to Dhaka, so I am not used to ___ in heavy traffic.", options: ["drive", "driving", "drove"], ans: 1, exp: "Correct! 'Be used to' requires an '-ing' gerund." }
        ]
    },
    "m92": {
        title: "Since vs For",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Points vs Periods</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">Used heavily in Present Perfect Continuous tenses.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Since (Starting Point):</strong> A specific calendar date, time, or event. <br><em>Since 2015, Since Monday, Since I was born.</em></li>
                <li><strong>For (Duration/Amount):</strong> A length of time. You can usually count it. <br><em>For 3 hours, For 10 years, For a long time.</em></li>
            </ul>
        `,
        quiz: [
            { q: "I have been waiting here ___ three hours.", options: ["since", "for", "from"], ans: 1, exp: "Correct! 3 hours is a measurable duration." },
            { q: "She has known Asif ___ 2020.", options: ["since", "for", "in"], ans: 0, exp: "Correct! 2020 is a specific starting point." }
        ]
    },
    "m93": {
        title: "By vs Until",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Deadlines vs Continuation</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">Both refer to a time limit, but they have completely different actions.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>By (Deadline):</strong> The action will happen AT or BEFORE that time. <br><em>Submit the assignment <strong>by</strong> 5 PM.</em></li>
                <li><strong>Until (Continuation):</strong> The action will KEEP HAPPENING continuously up to that time. <br><em>I will study <strong>until</strong> 5 PM.</em></li>
            </ul>
        `,
        quiz: [
            { q: "I need you to finish this project ___ Friday.", options: ["by", "until", "for"], ans: 0, exp: "Correct! It is a deadline. The project must be done before Friday." },
            { q: "We played video games ___ midnight.", options: ["by", "until", "since"], ans: 1, exp: "Correct! The action of playing continued continuously up to midnight." }
        ]
    },
    "m94": {
        title: "Farther vs Further",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Distance vs Depth</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">Both are comparatives of 'Far', but they are not interchangeable.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Farther:</strong> Physical, measurable distance. <br><em>Sylhet is <strong>farther</strong> from Dhaka than Comilla.</em></li>
                <li><strong>Further:</strong> Metaphorical depth, time, or 'additional'. <br><em>I don't want to discuss this any <strong>further</strong>.</em> (Additional details).</li>
            </ul>
        `,
        quiz: [
            { q: "If you need any ___ information, please contact the manager.", options: ["farther", "further", "farthest"], ans: 1, exp: "Correct! It means 'additional' information, not physical distance." },
            { q: "My house is ___ down the road than yours.", options: ["farther", "further", "more far"], ans: 0, exp: "Correct! It refers to physical, measurable distance." }
        ]
    },
    "m95": {
        title: "Between vs Among",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Two vs Many</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">A classic high school rule that is still heavily tested in universities.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Between:</strong> Used when dividing or comparing exactly TWO people/things. <br><em>The secret is <strong>between</strong> Asif and Rahim.</em></li>
                <li><strong>Among:</strong> Used for THREE or more people/things in a group. <br><em>The prize money was divided <strong>among</strong> the five players.</em></li>
            </ul>
        `,
        quiz: [
            { q: "The treaty was signed ___ the two nations.", options: ["among", "between", "with"], ans: 1, exp: "Correct! Exactly two nations are involved." },
            { q: "He felt lonely even ___ his friends.", options: ["between", "among", "in"], ans: 1, exp: "Correct! 'Friends' implies a group of more than two." }
        ]
    },
    "m96": {
        title: "Fractions & Percentages",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">Subject-Verb Boss Trap</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">When you say 'Half of...', is the verb singular or plural? It depends on what the pie is made of!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>Look at the noun <strong>AFTER</strong> the 'of'.</li>
                <li><em>Half of the <strong>cake IS</strong> eaten.</em> (Cake is singular/uncountable = singular verb).</li>
                <li><em>Half of the <strong>students ARE</strong> absent.</em> (Students is plural = plural verb).</li>
                <li>This same rule applies to: A lot of, Some of, All of, 50% of!</li>
            </ul>
        `,
        quiz: [
            { q: "Fifty percent of the water ___ polluted.", options: ["is", "are", "were"], ans: 0, exp: "Correct! 'Water' is uncountable, so it takes a singular verb." },
            { q: "One-third of the voters ___ against the new law.", options: ["was", "were", "is"], ans: 1, exp: "Correct! 'Voters' is plural, so the verb is plural." }
        ]
    },
    "m97": {
        title: "Hard vs Hardly",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">The 'LY' Trap</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">We are taught that adverbs end in '-ly'. But 'Hardly' does not mean 'working hard'!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Hard:</strong> Means difficult, or with great effort. <br><em>He works <strong>hard</strong>.</em> (Positive).</li>
                <li><strong>Hardly:</strong> Means almost zero or barely. <br><em>He <strong>hardly</strong> works.</em> (Negative = He is lazy!).</li>
            </ul>
        `,
        quiz: [
            { q: "She studied very ___ to pass the exam.", options: ["hard", "hardly", "hardest"], ans: 0, exp: "Correct! You want to say she put in great effort (hard)." },
            { q: "I could ___ hear him because the music was so loud.", options: ["hard", "hardly", "harder"], ans: 1, exp: "Correct! You could barely hear him (almost zero)." }
        ]
    },
    "m98": {
        title: "Late vs Lately",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">Time Traps</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">Another pair where adding '-ly' completely changes the time frame.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Late:</strong> Not on time. <br><em>He arrived <strong>late</strong> to the meeting.</em></li>
                <li><strong>Lately:</strong> Means 'Recently'. Used heavily with Present Perfect tense. <br><em>Have you seen Asif <strong>lately</strong>?</em></li>
            </ul>
        `,
        quiz: [
            { q: "The train was 20 minutes ___.", options: ["late", "lately"], ans: 0, exp: "Correct! It was not on time." },
            { q: "I haven't been feeling very well ___.", options: ["late", "lately"], ans: 1, exp: "Correct! It means recently." }
        ]
    },
    "m99": {
        title: "Emphatic 'Do'",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">Adding Absolute Power</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">Normally, 'do/does' is hidden in positive sentences. But what if we force it to appear?</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li>If you put 'do/does/did' in front of a normal verb, it adds massive emphasis or emotion!</li>
                <li><em>Normal:</em> I like your app.</li>
                <li><em>Emphatic:</em> I <strong>DO like</strong> your app! (It proves you really mean it).</li>
                <li><em>Rule:</em> The main verb MUST return to V1 base form. <em>(He DOES <strong>know</strong> it).</em></li>
            </ul>
        `,
        quiz: [
            { q: "He said I don't care about my studies, but I ___ care!", options: ["does", "do", "did"], ans: 1, exp: "Correct! Used for strong emphasis in the present tense (I do care)." },
            { q: "She ___ look beautiful in that dress yesterday.", options: ["do", "does", "did"], ans: 2, exp: "Correct! Emphasizing a past event requires 'did'." }
        ]
    },
    "m100": {
        title: "Chameleon Words",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">The Ultimate Test</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">Words don't have permanent identities. A noun can suddenly become a verb based on where it sits!</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Water:</strong> <br>- He drinks <strong>water</strong> (Noun). <br>- Please <strong>water</strong> the plants (Verb!).</li>
                <li><strong>Book:</strong> <br>- Read a <strong>book</strong> (Noun). <br>- <strong>Book</strong> the flight tickets (Verb!).</li>
                <li><strong>Fast:</strong> <br>- A <strong>fast</strong> car (Adjective). <br>- He drives <strong>fast</strong> (Adverb).</li>
            </ul>
        `,
        quiz: [
            { q: "Identify the word 'BACK' in this sentence: 'Go back to your seat.'", options: ["Noun", "Verb", "Adverb"], ans: 2, exp: "Correct! It modifies the verb 'Go' (telling you WHERE to go)." },
            { q: "Identify the word 'PARK' in this sentence: 'You cannot park your car here.'", options: ["Noun", "Verb", "Adjective"], ans: 1, exp: "Correct! It is an action (parking a vehicle), so it is a verb." },
            { q: "Identify the word 'LIGHT' in this sentence: 'Turn on the light.'", options: ["Noun", "Verb", "Adjective"], ans: 0, exp: "Correct! It is the object of the sentence (a thing)." }
        ]
    }
};
