// =====================================================================
// SPOKEN HUB DATABASE (Basic to Intermediate)
// =====================================================================

const spokenData = {
    // ---------------------------------------------------
    // TIER 1: SURVIVAL & POLITENESS
    // ---------------------------------------------------
    "s1": {
        title: "The 30-Second Intro",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">Stop saying: "Myself Asif" ❌</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">Native speakers never introduce themselves like this. Keep it natural and confident.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;"><i class="fas fa-check-circle" style="color:#10b981;"></i> The Smart Intro Formula:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Name:</strong> Hi, I'm [Name]. / Hello, my name is [Name].</li>
                <li><strong>Location:</strong> I am from [City], but currently living in [City].</li>
                <li><strong>Status:</strong> I am currently studying at [College Name].</li>
                <li><strong>Hobbies (Optional):</strong> In my free time, I enjoy [gaming / reading / coding].</li>
            </ul>

            <div style="background:#f8fafc; padding:15px; border-radius:12px; margin-top:20px;">
                <strong>Example:</strong><br>
                "Hi, I'm Asif. I am from Sylhet, and I'm currently studying for my HSC exams. In my free time, I really enjoy coding and playing video games."
            </div>
        `,
        aiPrompt: "Act as a friendly college student meeting me for the first time on campus. Start by saying 'Hi, I haven't seen you around here before! I'm Mini Champ, what's your name?' Keep your replies short and conversational. Ask me where I'm from and what I study.",
        gameData: [
            { bn: "হ্যালো, আমার নাম আসিফ।", en: "Hello, my name is Asif.", words: ["Hello,", "name", "my", "is", "Asif."] },
            { bn: "আমি বর্তমানে ঢাকায় থাকছি।", en: "I am currently living in Dhaka.", words: ["I", "am", "currently", "living", "in", "Dhaka."] },
            { bn: "অবসর সময়ে আমি বই পড়তে পছন্দ করি।", en: "In my free time, I enjoy reading.", words: ["In", "my", "free", "time,", "I", "enjoy", "reading."] }
        ]
    },
    "s2": {
        title: "Smart Greetings & Farewells",
        theoryHTML: `
            <div style="background:#fefce8; padding:15px; border-radius:12px; border-left:4px solid #eab308; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#854d0e;">Level Up Your 'Hello'</h4>
                <p style="margin:0; font-size:14px; color:#a16207;">Saying "How are you?" every time sounds robotic. Use these instead!</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">👋 Informal (Friends & Classmates)</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>What's up?</strong> (কী অবস্থা?) -> <em>Reply: Not much, you?</em></li>
                <li><strong>How is it going?</strong> (দিনকাল কেমন যাচ্ছে?) -> <em>Reply: Pretty good!</em></li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">👔 Formal (Teachers & Seniors)</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>It's a pleasure to meet you.</strong> (আপনার সাথে দেখা হয়ে ভালো লাগল।)</li>
                <li><strong>How have you been?</strong> (আপনি কেমন আছেন? - যদি অনেকদিন পর দেখা হয়)</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">🚶 Smart Farewells</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Catch you later!</strong> (পরে দেখা হবে।)</li>
                <li><strong>Have a good one!</strong> (আপনার দিনটি শুভ হোক।)</li>
                <li><strong>I gotta run!</strong> (আমাকে এখন দৌড়াতে/যেতে হবে।)</li>
            </ul>
        `,
        aiPrompt: "Act as a native English speaker walking into a coffee shop. You see me (an old friend you haven't seen in months). Greet me using modern, natural English (like 'Hey! How have you been?'). Wait for my response and keep the small talk going for a few turns.",
        gameData: [
            { bn: "কী অবস্থা?", en: "What's up?", words: ["What's", "up?"] },
            { bn: "আপনার সাথে দেখা হয়ে ভালো লাগল।", en: "It is a pleasure to meet you.", words: ["It", "is", "a", "pleasure", "to", "meet", "you."] },
            { bn: "আমাকে এখন যেতে হবে, পরে দেখা হবে!", en: "I gotta run, catch you later!", words: ["I", "gotta", "run,", "catch", "you", "later!"] }
        ]
    },
    "s3": {
        title: "Emergency English",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#991b1b;">Don't Panic!</h4>
                <p style="margin:0; font-size:14px; color:#b91c1c;">When someone speaks too fast, or you don't understand, DO NOT just nod your head. Use these polite phrases to take control.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🗣️ When they speak too fast:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Could you please speak a little slower?</strong> (আপনি কি দয়া করে একটু ধীরে বলবেন?)</li>
                <li><strong>I didn't quite catch that.</strong> (আমি কথাটা ঠিক বুঝতে পারিনি।)</li>
                <li><strong>Could you repeat that, please?</strong> (দয়া করে আরেকবার বলবেন?)</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">🤔 When you don't know a word:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>What does [Word] mean?</strong> (এই শব্দটার মানে কী?)</li>
                <li><strong>How do you say [Bangla word] in English?</strong> (এটাকে ইংরেজিতে কী বলে?)</li>
            </ul>
        `,
        aiPrompt: "Act as an incredibly fast-talking British tourist asking for directions in Dhaka. Use a bit of complex vocabulary. When I inevitably ask you to slow down or repeat yourself, apologize politely and speak much simpler and slower.",
        gameData: [
            { bn: "আমি কথাটা ঠিক বুঝতে পারিনি।", en: "I didn't quite catch that.", words: ["I", "didn't", "quite", "catch", "that."] },
            { bn: "আপনি কি দয়া করে একটু ধীরে বলবেন?", en: "Could you please speak a little slower?", words: ["Could", "you", "please", "speak", "a", "little", "slower?"] },
            { bn: "দয়া করে আরেকবার বলবেন?", en: "Could you repeat that, please?", words: ["Could", "you", "repeat", "that,", "please?"] }
        ]
    },

    // ---------------------------------------------------
    // TIER 2: STREET SMART (BD SCENARIOS)
    // ---------------------------------------------------
    "s5": {
        title: "Transport Hacks (Rickshaw & Bus)",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1e40af;">Conquer the Streets</h4>
                <p style="margin:0; font-size:14px; color:#1d4ed8;">How to command transport like a true boss.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🛺 Taking a Rickshaw / CNG:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Will you go to Dhanmondi 27?</strong> (ধানমন্ডি ২৭ যাবেন?)</li>
                <li><strong>How much is the fare?</strong> (ভাড়া কত?)</li>
                <li><strong>That's too much, I will give 50 Taka.</strong> (এটা অনেক বেশি, আমি ৫০ টাকা দেব।)</li>
                <li><strong>Please drop me off at the next signal.</strong> (দয়া করে আমাকে পরের সিগন্যালে নামিয়ে দিন।)</li>
                <li><strong>Can you go a little faster? I am running late.</strong> (একটু জোরে চালাবেন? আমার দেরি হয়ে যাচ্ছে।)</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">🚌 On the Bus:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Are there any empty seats?</strong> (কোনো সিট খালি আছে?)</li>
                <li><strong>Please keep the change.</strong> (ভাংতিটা রেখে দিন।)</li>
            </ul>
        `,
        aiPrompt: "Act as a stubborn Rickshaw Puller in Dhaka. I want to go from Farmgate to TSC. You want 150 Taka, which is way too high. Make me bargain with you in English. Only agree if I offer a reasonable price and speak good English.",
        gameData: [
            { bn: "ধানমন্ডি ২৭ যাবেন?", en: "Will you go to Dhanmondi 27?", words: ["Will", "you", "go", "to", "Dhanmondi", "27?"] },
            { bn: "দয়া করে আমাকে পরের সিগন্যালে নামিয়ে দিন।", en: "Please drop me off at the next signal.", words: ["Please", "drop", "me", "off", "at", "the", "next", "signal."] },
            { bn: "ভাংতিটা রেখে দিন।", en: "Please keep the change.", words: ["Please", "keep", "the", "change."] }
        ]
    },
    "s6": {
        title: "Restaurant & Tong",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #d946ef; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Food & Ordering</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">From ordering a strong tea at the tong to complaining about cold food at a fancy restaurant.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">☕ At the Tong (Tea Stall):</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Give me a strong cup of tea without sugar.</strong> (আমাকে চিনি ছাড়া এক কাপ কড়া চা দিন।)</li>
                <li><strong>Can you toast the bread a little more?</strong> (পাউরুটিটা কি আরেকটু টোস্ট করা যাবে?)</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">🍔 At the Restaurant:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Could we get the menu, please?</strong> (আমরা কি মেনুটা পেতে পারি?)</li>
                <li><strong>I'll have the Kacchi Biryani.</strong> (আমি কাচ্চি বিরিয়ানি নেব।)</li>
                <li><strong>Could we get the bill, please?</strong> (দয়া করে বিলটা দেবেন?)</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">⚠️ Complaining (Politely):</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Excuse me, this soup is cold.</strong> (মাফ করবেন, এই স্যুপটা ঠান্ডা।)</li>
                <li><strong>This is not what I ordered.</strong> (আমি এটা অর্ডার করিনি।)</li>
            </ul>
        `,
        aiPrompt: "Act as a waiter in a nice restaurant. Greet me, ask how many people are in my party, and take my order. If I complain that the food is cold, apologize profusely and offer me a free dessert.",
        gameData: [
            { bn: "আমাকে চিনি ছাড়া এক কাপ কড়া চা দিন।", en: "Give me a strong cup of tea without sugar.", words: ["Give", "me", "a", "strong", "cup", "of", "tea", "without", "sugar."] },
            { bn: "আমি কাচ্চি বিরিয়ানি নেব।", en: "I will have the Kacchi Biryani.", words: ["I", "will", "have", "the", "Kacchi", "Biryani."] },
            { bn: "মাফ করবেন, এই স্যুপটা ঠান্ডা।", en: "Excuse me, this soup is cold.", words: ["Excuse", "me,", "this", "soup", "is", "cold."] }
        ]
    },
    // ---------------------------------------------------
    // TIER 2: STREET SMART (Continued)
    // ---------------------------------------------------
    "s7": {
        title: "Shopping & Bargaining",
        theoryHTML: `
            <div style="background:#fff7ed; padding:15px; border-radius:12px; border-left:4px solid #f97316; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#c2410c;">New Market English</h4>
                <p style="margin:0; font-size:14px; color:#c2410c;">How to ask for prices, sizes, and bargain like a pro without sounding rude.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🛍️ Asking for items:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>How much does this cost?</strong> (এটার দাম কত?)</li>
                <li><strong>Do you have this in a larger size?</strong> (আপনার কাছে কি এর চেয়ে বড় সাইজ হবে?)</li>
                <li><strong>Can you show me a different color?</strong> (আমাকে অন্য একটা রং দেখাতে পারবেন?)</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">💸 Bargaining:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>That is way too expensive.</strong> (এটার দাম অনেক বেশি।)</li>
                <li><strong>Give me your final price.</strong> (আপনার শেষ দামটা বলুন।)</li>
                <li><strong>I will give you 500 Taka, take it or leave it.</strong> (আমি ৫০০ টাকা দিব, দিলে দেন না দিলে নাই।)</li>
            </ul>
        `,
        aiPrompt: "Act as a clever shopkeeper at New Market in Dhaka. I am a customer who wants to buy a pair of jeans. You start by asking 2000 Taka. Make me bargain with you in English. Act slightly offended if my price is too low, but eventually agree if I negotiate well.",
        gameData: [
            { bn: "এটার দাম কত?", en: "How much does this cost?", words: ["How", "much", "does", "this", "cost?"] },
            { bn: "আমাকে অন্য একটা রং দেখাতে পারবেন?", en: "Can you show me a different color?", words: ["Can", "you", "show", "me", "a", "different", "color?"] },
            { bn: "এটার দাম অনেক বেশি।", en: "That is way too expensive.", words: ["That", "is", "way", "too", "expensive."] }
        ]
    },

    // ---------------------------------------------------
    // TIER 3: FORMAL & PROFESSIONAL
    // ---------------------------------------------------
    "s9": {
        title: "Bank & Post Office",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1d4ed8;">Formal Transactions</h4>
                <p style="margin:0; font-size:14px; color:#1e40af;">These are places where you must sound polite and clear about what you want to do.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🏦 At the Bank:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>I would like to open a student account.</strong> (আমি একটি স্টুডেন্ট অ্যাকাউন্ট খুলতে চাই।)</li>
                <li><strong>I need to deposit 5000 Taka into this account.</strong> (আমি এই অ্যাকাউন্টে ৫০০০ টাকা জমা দিতে চাই।)</li>
                <li><strong>Can I withdraw some money, please?</strong> (আমি কি কিছু টাকা তুলতে পারি?)</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">📦 At the Post Office / Courier:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>I would like to send this parcel to Sylhet.</strong> (আমি এই পার্সেলটি সিলেটে পাঠাতে চাই।)</li>
                <li><strong>How long will it take to arrive?</strong> (এটি পৌঁছাতে কতদিন সময় লাগবে?)</li>
            </ul>
        `,
        aiPrompt: "Act as a formal bank manager in Bangladesh. I am a college student trying to open my first bank account. Ask me for my national ID, photographs, and initial deposit amount in a professional, polite tone.",
        gameData: [
            { bn: "আমি একটি স্টুডেন্ট অ্যাকাউন্ট খুলতে চাই।", en: "I would like to open a student account.", words: ["I", "would", "like", "to", "open", "a", "student", "account."] },
            { bn: "আমি কি কিছু টাকা তুলতে পারি?", en: "Can I withdraw some money, please?", words: ["Can", "I", "withdraw", "some", "money,", "please?"] },
            { bn: "এটি পৌঁছাতে কতদিন সময় লাগবে?", en: "How long will it take to arrive?", words: ["How", "long", "will", "it", "take", "to", "arrive?"] }
        ]
    },
    "s10": {
        title: "Doctor & Pharmacy",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#15803d;">Medical English</h4>
                <p style="margin:0; font-size:14px; color:#166534;">Describing your pain accurately so you get the right help.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🩺 Describing Symptoms:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>I have been feeling a bit under the weather.</strong> (আমার শরীরটা একটু খারাপ লাগছে।)</li>
                <li><strong>I have a severe headache and fever.</strong> (আমার প্রচণ্ড মাথাব্যথা এবং জ্বর।)</li>
                <li><strong>My stomach hurts after eating.</strong> (খাওয়ার পর আমার পেট ব্যথা করছে।)</li>
                <li><strong>I feel dizzy.</strong> (আমার মাথা ঘুরছে।)</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">💊 At the Pharmacy:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Do I need a prescription for this medicine?</strong> (এই ওষুধের জন্য কি আমার প্রেসক্রিপশন লাগবে?)</li>
                <li><strong>What is the dosage?</strong> (ওষুধ খাওয়ার নিয়মটা কী?)</li>
            </ul>
        `,
        aiPrompt: "Act as an experienced, caring doctor. I am a patient who just walked into your clinic. Ask me what my symptoms are, how long I have been feeling this way, and then prescribe me some rest and medicine.",
        gameData: [
            { bn: "আমার শরীরটা একটু খারাপ লাগছে।", en: "I have been feeling a bit under the weather.", words: ["I", "have", "been", "feeling", "a", "bit", "under", "the", "weather."] },
            { bn: "আমার প্রচণ্ড মাথাব্যথা এবং জ্বর।", en: "I have a severe headache and fever.", words: ["I", "have", "a", "severe", "headache", "and", "fever."] },
            { bn: "ওষুধ খাওয়ার নিয়মটা কী?", en: "What is the dosage?", words: ["What", "is", "the", "dosage?"] }
        ]
    },

    // ---------------------------------------------------
    // TIER 4: SOCIAL INTELLIGENCE
    // ---------------------------------------------------
    "s13": {
        title: "Agreeing & Disagreeing",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">The Art of Arguing</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">Saying "You are wrong" sounds aggressive. Learn how to disagree politely like a native speaker.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">✅ How to Agree:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>I totally agree with you.</strong> (আমি তোমার সাথে সম্পূর্ণ একমত।)</li>
                <li><strong>That makes a lot of sense.</strong> (কথাটা খুব যুক্তিযুক্ত।)</li>
                <li><strong>You hit the nail on the head.</strong> (তুমি একদম ঠিক কথা বলেছ।)</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">❌ How to Disagree (Politely):</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>I see your point, but...</strong> (আমি তোমার দৃষ্টিভঙ্গি বুঝতে পারছি, কিন্তু...)</li>
                <li><strong>I am not sure I agree with that.</strong> (আমি এই বিষয়ে ঠিক একমত হতে পারছি না।)</li>
                <li><strong>We might have to agree to disagree.</strong> (হয়তো আমাদের দ্বিমত নিয়েই একমত হতে হবে।)</li>
            </ul>
        `,
        aiPrompt: "Act as a university student who strongly believes that mobile phones should be banned in classrooms. I will debate with you. You must defend your point politely, and I will use phrases like 'I see your point, but...' to argue back.",
        gameData: [
            { bn: "আমি তোমার সাথে সম্পূর্ণ একমত।", en: "I totally agree with you.", words: ["I", "totally", "agree", "with", "you."] },
            { bn: "আমি তোমার দৃষ্টিভঙ্গি বুঝতে পারছি, কিন্তু...", en: "I see your point, but...", words: ["I", "see", "your", "point,", "but..."] },
            { bn: "তুমি একদম ঠিক কথা বলেছ।", en: "You hit the nail on the head.", words: ["You", "hit", "the", "nail", "on", "the", "head."] }
        ]
    },
    "s15": {
        title: "Small Talk Mastery",
        theoryHTML: `
            <div style="background:#fefce8; padding:15px; border-radius:12px; border-left:4px solid #eab308; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#854d0e;">Keep the Conversation Alive</h4>
                <p style="margin:0; font-size:14px; color:#a16207;">Small talk is the bridge to real friendship. Learn how to talk to strangers effortlessly.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">⛅ Talking about the Weather/Day:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Beautiful weather today, isn't it?</strong> (আজকের আবহাওয়া বেশ ভালো, তাই না?)</li>
                <li><strong>It's freezing outside!</strong> (বাইরে প্রচণ্ড ঠাণ্ডা!)</li>
                <li><strong>How was your weekend?</strong> (তোমার সপ্তাহান্ত কেমন কাটল?)</li>
            </ul>

            <h4 style="color:#334155; margin-bottom:10px;">✨ Giving Compliments:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>That shirt looks really great on you.</strong> (এই শার্টটা তোমাকে খুব মানিয়েছে।)</li>
                <li><strong>I really admire your confidence.</strong> (আমি সত্যি তোমার আত্মবিশ্বাসের প্রশংসা করি।)</li>
            </ul>
        `,
        aiPrompt: "Act as a friendly stranger waiting next to me at a bus stop during a heavy rainstorm. Start the conversation by commenting on the weather. Keep the small talk going by asking me where I am headed.",
        gameData: [
            { bn: "আজকের আবহাওয়া বেশ ভালো, তাই না?", en: "Beautiful weather today, isn't it?", words: ["Beautiful", "weather", "today,", "isn't", "it?"] },
            { bn: "তোমার সপ্তাহান্ত কেমন কাটল?", en: "How was your weekend?", words: ["How", "was", "your", "weekend?"] },
            { bn: "এই শার্টটা তোমাকে খুব মানিয়েছে।", en: "That shirt looks really great on you.", words: ["That", "shirt", "looks", "really", "great", "on", "you."] }
        ]
    },

    // ---------------------------------------------------
    // TIER 5: NATIVE POLISH
    // ---------------------------------------------------
    "s16": {
        title: "Contractions (Native Slang)",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#991b1b;">Sound Like a Native</h4>
                <p style="margin:0; font-size:14px; color:#b91c1c;">Native speakers are lazy! They squish words together to talk faster. You must learn these to understand movies and foreigners.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🔥 The Core Contractions:</h4>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Want to ➔ Wanna:</strong> <em>I wanna play football.</em> (আমি ফুটবল খেলতে চাই।)</li>
                <li><strong>Going to ➔ Gonna:</strong> <em>I am gonna study now.</em> (আমি এখন পড়তে যাচ্ছি।)</li>
                <li><strong>Let me ➔ Lemme:</strong> <em>Lemme see that book.</em> (আমাকে ওই বইটা দেখতে দাও।)</li>
                <li><strong>Give me ➔ Gimme:</strong> <em>Gimme a few minutes.</em> (আমাকে কয়েক মিনিট সময় দাও।)</li>
                <li><strong>Don't know ➔ Dunno:</strong> <em>I dunno what happened.</em> (আমি জানি না কী হয়েছে।)</li>
            </ul>
        `,
        aiPrompt: "Act as an American teenager talking to a friend online. Use a lot of natural contractions like 'wanna', 'gonna', 'lemme', and 'dunno' in your messages. Ask me what I am planning to do this weekend.",
        gameData: [
            { bn: "আমি ফুটবল খেলতে চাই।", en: "I wanna play football.", words: ["I", "wanna", "play", "football."] },
            { bn: "আমি এখন পড়তে যাচ্ছি।", en: "I am gonna study now.", words: ["I", "am", "gonna", "study", "now."] },
            { bn: "আমাকে কয়েক মিনিট সময় দাও।", en: "Gimme a few minutes.", words: ["Gimme", "a", "few", "minutes."] }
        ]
    },
    "s18": {
        title: "Linking Sounds",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1e40af;">The Flow of English</h4>
                <p style="margin:0; font-size:14px; color:#1d4ed8;">Stop pronouncing every single word separately like a robot. Learn to glide.</p>
            </div>
            
            <h4 style="color:#334155; margin-bottom:10px;">🔗 Consonant to Vowel Linking:</h4>
            <p style="font-size:14px; color:#475569; margin-bottom:15px;">When a word ends with a consonant and the next word starts with a vowel, you push them together!</p>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Check it out</strong> ➔ Sounds like: <em>Che-ki-dout</em></li>
                <li><strong>Hold on</strong> ➔ Sounds like: <em>Hol-don</em></li>
                <li><strong>Turn it off</strong> ➔ Sounds like: <em>Tur-ni-toff</em></li>
                <li><strong>Stop it</strong> ➔ Sounds like: <em>Sto-pit</em></li>
            </ul>
        `,
        aiPrompt: "Act as an English vocal coach. Briefly explain to me the concept of 'Linking Sounds' in English (like how 'Check it out' sounds like 'Che-ki-dout'). Give me one sentence and ask me to practice pronouncing it out loud.",
        gameData: [
            { bn: "এটা একটু দেখো। (Check it out)", en: "Check it out.", words: ["Check", "it", "out."] },
            { bn: "একটু ধরো। (Hold on)", en: "Hold on.", words: ["Hold", "on."] },
            { bn: "এটা বন্ধ করো। (Turn it off)", en: "Turn it off.", words: ["Turn", "it", "off."] }
        ]
    }, 
    "s20": {
        title: "Supermarket & Groceries",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1e40af;">Supermarket Survival</h4>
                <p style="margin:0; font-size:14px; color:#1d4ed8;">How to navigate large stores and checkout counters smoothly.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Excuse me, which aisle has the dairy products?</strong> (মাফ করবেন, দুগ্ধজাত পণ্য কোন সারিতে?)</li>
                <li><strong>Are these on sale?</strong> (এগুলোতে কি ছাড় চলছে?)</li>
                <li><strong>Can I pay by card, or is it cash only?</strong> (আমি কি কার্ডে পেমেন্ট করতে পারি, নাকি শুধু ক্যাশ?)</li>
            </ul>
        `,
        aiPrompt: "Act as a cashier at a busy supermarket in Dhaka. I am checking out my groceries. Ask if I have a membership card, tell me my total, and ask how I want to pay.",
        gameData: [
            { bn: "মাফ করবেন, দুগ্ধজাত পণ্য কোন সারিতে?", en: "Excuse me, which aisle has the dairy products?", words: ["Excuse", "me,", "which", "aisle", "has", "the", "dairy", "products?"] },
            { bn: "আমি কি কার্ডে পেমেন্ট করতে পারি?", en: "Can I pay by card?", words: ["Can", "I", "pay", "by", "card?"] }
        ]
    },
    "s21": {
        title: "Inviting & Hanging Out",
        theoryHTML: `
            <div style="background:#fefce8; padding:15px; border-radius:12px; border-left:4px solid #eab308; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#854d0e;">Making Plans</h4>
                <p style="margin:0; font-size:14px; color:#a16207;">How to casually ask friends to hang out without sounding like a robot.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Are you free this weekend?</strong> (তুমি কি এই উইকএন্ডে ফ্রি আছো?)</li>
                <li><strong>Let's grab a bite to eat.</strong> (চলো বাইরে কিছু খেয়ে আসি।)</li>
                <li><strong>I would love to, but I am tied up.</strong> (আমি যেতে চাই, কিন্তু আমি খুব ব্যস্ত।)</li>
            </ul>
        `,
        aiPrompt: "Act as my friend. Text me and ask if I want to go watch a movie this Friday. When I say I am busy, suggest a different plan for Saturday.",
        gameData: [
            { bn: "তুমি কি এই উইকএন্ডে ফ্রি আছো?", en: "Are you free this weekend?", words: ["Are", "you", "free", "this", "weekend?"] },
            { bn: "চলো বাইরে কিছু খেয়ে আসি।", en: "Let's grab a bite to eat.", words: ["Let's", "grab", "a", "bite", "to", "eat."] }
        ]
    },
    "s22": {
        title: "Apologizing & Forgiving",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Fixing Mistakes</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">Stop just saying 'Sorry' and 'It's OK'. Upgrade your social grace.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>I sincerely apologize for the delay.</strong> (দেরি হওয়ার জন্য আমি আন্তরিকভাবে দুঃখিত।)</li>
                <li><strong>My bad, I completely forgot!</strong> (আমার ভুল, আমি একদম ভুলে গিয়েছিলাম!)</li>
                <li><strong>No worries, it happens.</strong> (কোনো ব্যাপার না, এমনটা হতেই পারে।)</li>
            </ul>
        `,
        aiPrompt: "Act as my classmate. I just accidentally spilled coffee on your notebook. I will apologize. You should forgive me politely but ask me to help you dry it.",
        gameData: [
            { bn: "দেরি হওয়ার জন্য আমি আন্তরিকভাবে দুঃখিত।", en: "I sincerely apologize for the delay.", words: ["I", "sincerely", "apologize", "for", "the", "delay."] },
            { bn: "কোনো ব্যাপার না, এমনটা হতেই পারে।", en: "No worries, it happens.", words: ["No", "worries,", "it", "happens."] }
        ]
    }, 
    "mod_interview": {
        title: "Varsity & Job Interviews",
        theoryHTML: "When answering <i>'Tell me about yourself'</i>, do NOT tell your life story. Use the <b>Present-Past-Future</b> rule.<br><br><b>1. Present:</b> What you do now.<br><b>2. Past:</b> Your background/HSC.<br><b>3. Future:</b> Why you want this spot.",
        aiPrompt: "You are a strict but fair University Admission Interviewer. Ask the user questions about their background and why they want to study at your university.",
        gameData: [
            { bn: "আমি সম্প্রতি আমার এইচএসসি শেষ করেছি।", en: "I have recently completed my HSC.", words: ["have", "my", "recently", "completed", "I", "HSC."] },
            { bn: "আমি এই বিশ্ববিদ্যালয়ে পড়তে চাই কারণ...", en: "I want to study at this university because...", words: ["to", "want", "I", "study", "because...", "at", "this", "university"] },
            { bn: "আমার সবচেয়ে বড় শক্তি হলো আমার আত্মবিশ্বাস।", en: "My greatest strength is my confidence.", words: ["greatest", "My", "is", "confidence.", "strength", "my"] }
        ]
    },
    "mod_doctor": {
        title: "At the Doctor's Clinic",
        theoryHTML: "Don't just say 'I am sick'. Be specific!<br><br>• <b>Under the weather:</b> Feeling slightly ill.<br>• <b>Aching / Pain:</b> Used for body parts (Headache, Backache).<br>• <b>Prescription:</b> The medicine list the doctor gives you.",
        aiPrompt: "You are a doctor at a clinic in Dhaka. The user is a patient. Ask them about their symptoms and prescribe a solution.",
        gameData: [
            { bn: "আমার আজ একটু অসুস্থ লাগছে।", en: "I am feeling a bit under the weather today.", words: ["feeling", "a", "bit", "am", "under", "weather", "the", "today.", "I"] },
            { bn: "আমার প্রচণ্ড মাথা ব্যথা করছে।", en: "I have a terrible headache.", words: ["terrible", "have", "a", "I", "headache."] },
            { bn: "আমার কি কোনো ওষুধের প্রয়োজন?", en: "Do I need any medicine?", words: ["need", "do", "I", "medicine?", "any"] }
        ]
    },
    "mod_restaurant": {
        title: "Restaurant & Cafe Talk",
        theoryHTML: "Never say <i>'Give me a burger'</i>. It sounds rude! Always use <b>'I would like'</b> or <b>'Could I have'</b>.<br><br>• To order: 'I would like the pasta, please.'<br>• Paying: 'Could we get the bill, please?'",
        aiPrompt: "You are a polite waiter at a high-end cafe. The user is a customer ordering food. Ask for their order, offer recommendations, and give them the bill.",
        gameData: [
            { bn: "আমি একটি কফি নিতে চাই, দয়া করে।", en: "I would like a coffee please.", words: ["like", "I", "please.", "a", "would", "coffee"] },
            { bn: "খাবারটি সত্যিই সুস্বাদু ছিল।", en: "The food was really delicious.", words: ["food", "delicious.", "The", "was", "really"] },
            { bn: "আমরা কি বিলটা পেতে পারি?", en: "Could we get the bill?", words: ["get", "we", "the", "Could", "bill?"] }
        ]
    },
    "mod_digital": {
        title: "Digital Life & Zoom",
        theoryHTML: "Modern English requires digital vocabulary. <br><br>• <b>Muted:</b> Mic is off. ('You are on mute').<br>• <b>Lagging/Buffering:</b> Internet is slow.<br>• <b>Screen sharing:</b> Showing your display.",
        aiPrompt: "You are a colleague in a Zoom meeting. The internet connection is bad. Start a conversation about the project while dealing with digital issues.",
        gameData: [
            { bn: "আপনি মিউটে আছেন, আমি আপনাকে শুনতে পাচ্ছি না।", en: "You are on mute, I cannot hear you.", words: ["hear", "cannot", "I", "are", "on", "mute,", "You", "you."] },
            { bn: "আমার ইন্টারনেট খুব ধীরগতিতে কাজ করছে।", en: "My internet connection is very slow.", words: ["internet", "My", "connection", "very", "is", "slow."] },
            { bn: "আপনি কি আপনার স্ক্রিন শেয়ার করতে পারবেন?", en: "Could you share your screen?", words: ["you", "screen?", "share", "Could", "your"] }
        ]
    },
    "mod_directions": {
        title: "Navigating Dhaka",
        theoryHTML: "When asking for directions or talking to a rickshaw puller, use polite structures.<br><br>• Start with: <b>'Excuse me...'</b><br>• Directions: <b>'Go straight'</b>, <b>'Take a left'</b>.<br>• Fares: <b>'How much is the fare?'</b>",
        aiPrompt: "You are a friendly stranger on the streets of Dhaka. The user is lost and trying to find the nearest Metro Rail station. Help them out.",
        gameData: [
            { bn: "মাফ করবেন, মেট্রো স্টেশন কোন দিকে?", en: "Excuse me, which way is the metro station?", words: ["is", "the", "Excuse", "way", "which", "me,", "metro", "station?"] },
            { bn: "সোজা যান এবং বাম দিকে মোড় নিন।", en: "Go straight and take a left.", words: ["take", "a", "left.", "Go", "and", "straight"] },
            { bn: "ভাড়া কত হবে?", en: "How much is the fare?", words: ["is", "the", "fare?", "How", "much"] }
        ]
    }
};
