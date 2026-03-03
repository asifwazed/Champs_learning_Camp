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
    }, // Don't forget this comma to separate from the previous module!
    "s23": {
        title: "Job Interview Mastery",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">The 'Tell me about yourself' Hack</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">Never tell your life story. Use the <strong>Present-Past-Future</strong> formula to sound professional.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Present:</strong> "Currently, I am a student at..."</li>
                <li><strong>Past:</strong> "Before this, I successfully completed..."</li>
                <li><strong>Future:</strong> "I am looking forward to applying my skills here at your company."</li>
                <li><strong>Weakness trick:</strong> "I sometimes focus too much on details, but I am learning to balance speed and quality."</li>
            </ul>
        `,
        aiPrompt: "Act as a strict HR Manager at a top company. I am applying for a job. Ask me to tell you about myself, my biggest weakness, and why you should hire me.",
        gameData: [
            { bn: "আমি বর্তমানে একজন ছাত্র।", en: "Currently, I am a student.", words: ["Currently,", "I", "am", "a", "student."] },
            { bn: "আমি এখানে আমার দক্ষতা কাজে লাগাতে চাই।", en: "I want to apply my skills here.", words: ["I", "want", "to", "apply", "my", "skills", "here."] },
            { bn: "আপনাদের কোম্পানিতে যোগ দিতে পেরে আমি আনন্দিত।", en: "I am excited to join your company.", words: ["I", "am", "excited", "to", "join", "your", "company."] }
        ]
    },
    "s24": {
        title: "Public Speaking & Presentations",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1e40af;">Command the Room</h4>
                <p style="margin:0; font-size:14px; color:#1d4ed8;">How to start and end a presentation without freezing in fear.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Start:</strong> "Good morning everyone. Today, I would like to talk about..."</li>
                <li><strong>Transition:</strong> "Moving on to the next point..."</li>
                <li><strong>Conclusion:</strong> "To wrap things up, I would like to say..."</li>
                <li><strong>Q&A:</strong> "Thank you for listening. I will now take any questions."</li>
            </ul>
        `,
        aiPrompt: "Act as an audience member at my presentation. I will start my speech. You should interrupt me politely and ask me to explain a point more clearly.",
        gameData: [
            { bn: "আজ আমি কথা বলতে চাই...", en: "Today, I would like to talk about...", words: ["Today,", "I", "would", "like", "to", "talk", "about..."] },
            { bn: "পরবর্তী পয়েন্টে যাওয়া যাক।", en: "Moving on to the next point.", words: ["Moving", "on", "to", "the", "next", "point."] },
            { bn: "আপনাদের শোনার জন্য ধন্যবাদ।", en: "Thank you for listening.", words: ["Thank", "you", "for", "listening."] }
        ]
    },
    "s25": {
        title: "Airport & Immigration",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1e40af;">Crossing Borders</h4>
                <p style="margin:0; font-size:14px; color:#1d4ed8;">How to speak clearly at the check-in desk and immigration counters.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Check-in:</strong> "Here is my passport and booking reference."</li>
                <li><strong>Baggage:</strong> "I have one bag to check in, and this is my carry-on."</li>
                <li><strong>Immigration:</strong> "I am visiting for tourism. I will be staying for two weeks."</li>
                <li><strong>Security:</strong> "Do I need to take my laptop out of the bag?"</li>
            </ul>
        `,
        aiPrompt: "Act as a strict Immigration Officer at JFK Airport. Ask me for my passport, the purpose of my visit, where I am staying, and how long I plan to be in the country.",
        gameData: [
            { bn: "আমি দুই সপ্তাহের জন্য থাকবো।", en: "I will be staying for two weeks.", words: ["I", "will", "be", "staying", "for", "two", "weeks."] },
            { bn: "আমার একটি চেক-ইন ব্যাগ আছে।", en: "I have one bag to check in.", words: ["I", "have", "one", "bag", "to", "check", "in."] },
            { bn: "ভ্রমণের উদ্দেশ্য পর্যটন।", en: "The purpose of my visit is tourism.", words: ["The", "purpose", "of", "my", "visit", "is", "tourism."] }
        ]
    },
    "s26": {
        title: "Hotel Check-In & Issues",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1e40af;">Hotel Survival</h4>
                <p style="margin:0; font-size:14px; color:#1d4ed8;">Booking rooms, asking for WiFi, and complaining about bad service politely.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Arrival:</strong> "I have a reservation under the name Asif."</li>
                <li><strong>Requests:</strong> "What is the WiFi password? Is breakfast included?"</li>
                <li><strong>Complaints:</strong> "Excuse me, the air conditioner in my room isn't working."</li>
                <li><strong>Check-out:</strong> "I would like to check out, please. Could I have the receipt?"</li>
            </ul>
        `,
        aiPrompt: "Act as a Hotel Receptionist. I am checking in. Ask for my ID, give me my room key, and explain what time breakfast is served. If I complain about the AC, offer to send maintenance.",
        gameData: [
            { bn: "আসিফ নামে আমার একটি বুকিং আছে।", en: "I have a reservation under the name Asif.", words: ["I", "have", "a", "reservation", "under", "the", "name", "Asif."] },
            { bn: "ওয়াইফাই পাসওয়ার্ড কী?", en: "What is the WiFi password?", words: ["What", "is", "the", "WiFi", "password?"] },
            { bn: "আমার রুমের এসি কাজ করছে না।", en: "The AC in my room is not working.", words: ["The", "AC", "in", "my", "room", "is", "not", "working."] }
        ]
    },
    "s27": {
        title: "Police & Traffic Sergeants",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Staying Calm</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">How to deal with authority figures politely without getting defensive.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Initial approach:</strong> "Good morning, officer. Is there a problem?"</li>
                <li><strong>Showing documents:</strong> "Here is my driving license and registration."</li>
                <li><strong>Apologizing:</strong> "I am sorry, I didn't realize the speed limit had changed."</li>
                <li><strong>Reporting crime:</strong> "I need to report a stolen phone. It happened near the station."</li>
            </ul>
        `,
        aiPrompt: "Act as a tough Traffic Police Officer. You just pulled me over because I ran a red light. Ask for my license and registration, and tell me I am getting a fine.",
        gameData: [
            { bn: "শুভ সকাল অফিসার, কোনো সমস্যা?", en: "Good morning officer, is there a problem?", words: ["Good", "morning", "officer,", "is", "there", "a", "problem?"] },
            { bn: "এই যে আমার ড্রাইভিং লাইসেন্স।", en: "Here is my driving license.", words: ["Here", "is", "my", "driving", "license."] },
            { bn: "আমি দুঃখিত, আমি খেয়াল করিনি।", en: "I am sorry, I did not realize.", words: ["I", "am", "sorry,", "I", "did", "not", "realize."] }
        ]
    },
    "s28": {
        title: "Renting an Apartment",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">House Hunting</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">How to talk to landlords, brokers, and ask about bills.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Inquiring:</strong> "I am calling about the apartment for rent on Dhanmondi."</li>
                <li><strong>Questions:</strong> "Does the rent include gas and electricity bills?"</li>
                <li><strong>Details:</strong> "How much is the security deposit? Are pets allowed?"</li>
            </ul>
        `,
        aiPrompt: "Act as a strict Landlord in Dhaka. I am calling to ask about renting your apartment. Tell me the rent is 25,000 Taka and ask me what my profession is and how many people will live there.",
        gameData: [
            { bn: "আমি ভাড়ার ফ্ল্যাটের ব্যাপারে কল করেছি।", en: "I am calling about the apartment for rent.", words: ["I", "am", "calling", "about", "the", "apartment", "for", "rent."] },
            { bn: "ভাড়ার সাথে কি গ্যাস বিল যুক্ত আছে?", en: "Does the rent include the gas bill?", words: ["Does", "the", "rent", "include", "the", "gas", "bill?"] },
            { bn: "অগ্রিম জামানত কত টাকা?", en: "How much is the security deposit?", words: ["How", "much", "is", "the", "security", "deposit?"] }
        ]
    },
    "s29": {
        title: "Phone Call Etiquette",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">Professional Calls</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">Stop saying 'Who are you?' on the phone. Use these formal structures.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Answering/Asking:</strong> "Hello, may I ask who is calling?"</li>
                <li><strong>Connecting:</strong> "Could I please speak to Mr. Asif?"</li>
                <li><strong>Taking a message:</strong> "He is not available right now. Can I take a message?"</li>
                <li><strong>Holding:</strong> "Could you hold the line for a moment, please?"</li>
            </ul>
        `,
        aiPrompt: "Act as a secretary for a busy CEO. I am calling to speak to the CEO. Tell me he is in a meeting, and ask if I would like to leave a message.",
        gameData: [
            { bn: "আমি কি জানতে পারি কে বলছেন?", en: "May I ask who is calling?", words: ["May", "I", "ask", "who", "is", "calling?"] },
            { bn: "আমি কি জনাব আসিফের সাথে কথা বলতে পারি?", en: "Could I please speak to Mr Asif?", words: ["Could", "I", "please", "speak", "to", "Mr", "Asif?"] },
            { bn: "দয়া করে একটু লাইনে থাকবেন?", en: "Could you hold the line please?", words: ["Could", "you", "hold", "the", "line", "please?"] }
        ]
    },
    "s30": {
        title: "Asking for Favors",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">The Art of Borrowing</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">If you ask directly, people say no. If you ask politely, they say yes.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Soft start:</strong> "Could you do me a huge favor?"</li>
                <li><strong>The Request:</strong> "Would you mind lending me your laptop for an hour?"</li>
                <li><strong>Gratitude:</strong> "I really appreciate this, I owe you one."</li>
            </ul>
        `,
        aiPrompt: "Act as my classmate. I am going to ask you to lend me your math notebook for a day. Be a little hesitant at first, but agree if I promise to return it tomorrow.",
        gameData: [
            { bn: "তুমি কি আমার একটা বড় উপকার করতে পারবে?", en: "Could you do me a huge favor?", words: ["Could", "you", "do", "me", "a", "huge", "favor?"] },
            { bn: "তোমার কলমটা দিলে কি কিছু মনে করবে?", en: "Would you mind lending me your pen?", words: ["Would", "you", "mind", "lending", "me", "your", "pen?"] },
            { bn: "আমি সত্যিই তোমার কাছে কৃতজ্ঞ।", en: "I really appreciate this.", words: ["I", "really", "appreciate", "this."] }
        ]
    },
    "s31": {
        title: "Expressing Sympathy",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Comforting Others</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">When someone shares bad news, you must know exactly what to say to comfort them.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Immediate reaction:</strong> "I am so sorry to hear that."</li>
                <li><strong>Showing empathy:</strong> "That must be really tough for you."</li>
                <li><strong>Offering help:</strong> "Please let me know if there is anything I can do to help."</li>
            </ul>
        `,
        aiPrompt: "Act as my friend. Tell me that your pet dog passed away yesterday and you are feeling very sad. I will try to comfort you using sympathy phrases.",
        gameData: [
            { bn: "শুনে আমার খুব খারাপ লাগছে।", en: "I am so sorry to hear that.", words: ["I", "am", "so", "sorry", "to", "hear", "that."] },
            { bn: "এটি নিশ্চয়ই তোমার জন্য খুব কষ্টের।", en: "That must be really tough for you.", words: ["That", "must", "be", "really", "tough", "for", "you."] },
            { bn: "আমি সাহায্য করতে পারলে আমাকে জানাবে।", en: "Let me know if I can help.", words: ["Let", "me", "know", "if", "I", "can", "help."] }
        ]
    },
    "s32": {
        title: "Talking About the Future",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Dreams & Goals</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">How to discuss your career plans and ambitions with confidence.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Short term:</strong> "I am planning to take my IELTS exam next month."</li>
                <li><strong>Long term:</strong> "In five years, I hope to start my own software company."</li>
                <li><strong>Uncertainty:</strong> "I haven't decided yet, but I'm leaning towards engineering."</li>
            </ul>
        `,
        aiPrompt: "Act as an older cousin. Ask me what my plans are after I finish my HSC exams. If I say I want to study abroad, ask me which country and why.",
        gameData: [
            { bn: "আমি আগামী মাসে পরীক্ষা দেওয়ার পরিকল্পনা করছি।", en: "I am planning to take the exam next month.", words: ["I", "am", "planning", "to", "take", "the", "exam", "next", "month."] },
            { bn: "আমি এখনও সিদ্ধান্ত নিইনি।", en: "I have not decided yet.", words: ["I", "have", "not", "decided", "yet."] },
            { bn: "পাঁচ বছরের মধ্যে আমি নিজের ব্যবসা শুরু করতে চাই।", en: "In five years, I hope to start my own business.", words: ["In", "five", "years,", "I", "hope", "to", "start", "my", "own", "business."] }
        ]
    },
    "s33": {
        title: "Handling Angry People",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">De-escalation Tactics</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">If someone is shouting at you, fighting back in English makes it worse. Stay calm and use these.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Acknowledge:</strong> "I completely understand why you are upset."</li>
                <li><strong>Calming down:</strong> "Let's take a step back and figure this out."</li>
                <li><strong>Finding solutions:</strong> "How can we resolve this right now?"</li>
            </ul>
        `,
        aiPrompt: "Act as an extremely angry customer at a mobile shop. You bought a phone yesterday and it's broken. I am the shopkeeper. Yell at me, and I will try to calm you down.",
        gameData: [
            { bn: "আমি বুঝতে পারছি আপনি কেন রেগে আছেন।", en: "I completely understand why you are upset.", words: ["I", "completely", "understand", "why", "you", "are", "upset."] },
            { bn: "চলুন শান্ত হয়ে এটা সমাধান করি।", en: "Let's take a step back and figure this out.", words: ["Let's", "take", "a", "step", "back", "and", "figure", "this", "out."] },
            { bn: "আমরা কীভাবে এর সমাধান করতে পারি?", en: "How can we resolve this right now?", words: ["How", "can", "we", "resolve", "this", "right", "now?"] }
        ]
    },
    "s34": {
        title: "Advanced Compliments",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Making Someone's Day</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">Saying 'You look nice' is boring. Upgrade your compliments to build strong relationships.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Work/Skills:</strong> "You did an incredible job on that presentation."</li>
                <li><strong>Personality:</strong> "You always know exactly how to make people smile."</li>
                <li><strong>Impact:</strong> "I really admire your dedication and hard work."</li>
            </ul>
        `,
        aiPrompt: "Act as my colleague. I just finished a very difficult and stressful project at work. Compliment me on my hard work, and I will thank you.",
        gameData: [
            { bn: "তুমি এই কাজে অসাধারণ পারফর্ম করেছো।", en: "You did an incredible job on this.", words: ["You", "did", "an", "incredible", "job", "on", "this."] },
            { bn: "আমি সত্যিই তোমার পরিশ্রমের প্রশংসা করি।", en: "I really admire your hard work.", words: ["I", "really", "admire", "your", "hard", "work."] },
            { bn: "তুমি সবসময় মানুষকে হাসাতে পারো।", en: "You always know how to make people smile.", words: ["You", "always", "know", "how", "to", "make", "people", "smile."] }
        ]
    },
    "s35": {
        title: "Talking to Professors",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1e40af;">Academic Politeness</h4>
                <p style="margin:0; font-size:14px; color:#1d4ed8;">Never say "Give me more time." Use highly formal, passive structures to request favors.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Requesting an Extension:</strong> "Professor, would it be possible to get a short extension on the assignment?"</li>
                <li><strong>Asking for Clarification:</strong> "Could you please elaborate on the second chapter?"</li>
                <li><strong>Apologizing:</strong> "I sincerely apologize for missing yesterday's lecture."</li>
            </ul>
        `,
        aiPrompt: "Act as a strict University Professor. I am your student. I will ask you for a 2-day extension on my final essay because I was sick. Be reluctant, but agree if I promise to submit it by Friday.",
        gameData: [
            { bn: "আমি কি অ্যাসাইনমেন্ট জমা দেওয়ার জন্য একটু বেশি সময় পেতে পারি?", en: "Could I get an extension on the assignment?", words: ["Could", "I", "get", "an", "extension", "on", "the", "assignment?"] },
            { bn: "আপনি কি দ্বিতীয় অধ্যায়টি আরেকটু বুঝিয়ে বলবেন?", en: "Could you please elaborate on the second chapter?", words: ["Could", "you", "please", "elaborate", "on", "the", "second", "chapter?"] },
            { bn: "গতকালের ক্লাস মিস করার জন্য আমি আন্তরিকভাবে দুঃখিত।", en: "I sincerely apologize for missing the lecture.", words: ["I", "sincerely", "apologize", "for", "missing", "the", "lecture."] }
        ]
    },
    "s36": {
        title: "Group Projects",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1e40af;">Leadership & Diplomacy</h4>
                <p style="margin:0; font-size:14px; color:#1d4ed8;">How to assign work fairly and call out lazy group members without starting a fight.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Dividing Work:</strong> "Let's divide the work evenly among us."</li>
                <li><strong>Taking Initiative:</strong> "I can handle the research part if you write the introduction."</li>
                <li><strong>Calling someone out politely:</strong> "We really need your part by tonight so we can compile it."</li>
            </ul>
        `,
        aiPrompt: "Act as a lazy group member in my university project. You haven't done your part yet. I am the group leader. I will politely ask you to finish your work by tonight. Make up an excuse first, then agree.",
        gameData: [
            { bn: "চলো আমরা কাজগুলো সমানভাবে ভাগ করে নিই।", en: "Let's divide the work evenly among us.", words: ["Let's", "divide", "the", "work", "evenly", "among", "us."] },
            { bn: "আমি গবেষণার অংশটি সামলাতে পারবো।", en: "I can handle the research part.", words: ["I", "can", "handle", "the", "research", "part."] },
            { bn: "আমাদের আজ রাতের মধ্যেই তোমার অংশটুকু লাগবে।", en: "We really need your part by tonight.", words: ["We", "really", "need", "your", "part", "by", "tonight."] }
        ]
    },
    "s37": {
        title: "Library & Research",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1e40af;">Navigating Resources</h4>
                <p style="margin:0; font-size:14px; color:#1d4ed8;">Talking to librarians and finding specific academic journals.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Asking for a book:</strong> "I am looking for a specific book on modern history."</li>
                <li><strong>Borrowing:</strong> "How long can I check these books out for?"</li>
                <li><strong>Fines:</strong> "I am returning this late. How much is the overdue fine?"</li>
            </ul>
        `,
        aiPrompt: "Act as a helpful University Librarian. I am a student trying to find a book about 'Artificial Intelligence'. Tell me it's in Section B, and remind me of the late fees.",
        gameData: [
            { bn: "আমি আধুনিক ইতিহাসের উপর একটি বই খুঁজছি।", en: "I am looking for a book on modern history.", words: ["I", "am", "looking", "for", "a", "book", "on", "modern", "history."] },
            { bn: "আমি কতদিনের জন্য এই বইগুলো নিতে পারবো?", en: "How long can I check these books out for?", words: ["How", "long", "can", "I", "check", "these", "books", "out", "for?"] },
            { bn: "দেরি করার জন্য জরিমানা কত?", en: "How much is the overdue fine?", words: ["How", "much", "is", "the", "overdue", "fine?"] }
        ]
    },
    "s38": {
        title: "Giving Bad News",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Softening the Blow</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">English relies heavily on 'cushioning' phrases to make bad news sound less aggressive.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The Warning:</strong> "I am afraid I have some bad news."</li>
                <li><strong>Delivering it gently:</strong> "Unfortunately, we won't be able to make it to the event."</li>
                <li><strong>Apologizing:</strong> "I know this is disappointing, and I am truly sorry."</li>
            </ul>
        `,
        aiPrompt: "Act as my friend. I will tell you that I accidentally broke the laptop you lent me. Be shocked and upset, and see how well I can apologize and soften the blow.",
        gameData: [
            { bn: "দুঃখিত, আমাকে একটি খারাপ খবর দিতে হচ্ছে।", en: "I am afraid I have some bad news.", words: ["I", "am", "afraid", "I", "have", "some", "bad", "news."] },
            { bn: "দুর্ভাগ্যবশত, আমরা অনুষ্ঠানে উপস্থিত হতে পারবো না।", en: "Unfortunately, we will not be able to make it.", words: ["Unfortunately,", "we", "will", "not", "be", "able", "to", "make", "it."] },
            { bn: "আমি জানি এটি হতাশাজনক, এবং আমি সত্যিই দুঃখিত।", en: "I know this is disappointing, and I am sorry.", words: ["I", "know", "this", "is", "disappointing,", "and", "I", "am", "sorry."] }
        ]
    },
    "s39": {
        title: "Rejecting Invitations",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">The Polite 'No'</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">Saying 'No, I won't go' is rude. You must validate the invitation before declining it.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The Formula:</strong> Appreciation + The 'But' + Excuse.</li>
                <li><strong>Example 1:</strong> "I would love to go, but I already have other plans."</li>
                <li><strong>Example 2:</strong> "That sounds amazing, but I am completely swamped with work right now."</li>
            </ul>
        `,
        aiPrompt: "Act as an energetic friend trying to invite me to a big party tonight. Keep insisting I come, while I try to politely reject your invitation because I need to study.",
        gameData: [
            { bn: "আমি যেতে চাই, কিন্তু আমার অন্য কাজ আছে।", en: "I would love to go, but I have other plans.", words: ["I", "would", "love", "to", "go,", "but", "I", "have", "other", "plans."] },
            { bn: "শুনে দারুণ লাগছে, কিন্তু আমি কাজে খুব ব্যস্ত।", en: "That sounds amazing, but I am swamped with work.", words: ["That", "sounds", "amazing,", "but", "I", "am", "swamped", "with", "work."] },
            { bn: "আমন্ত্রণ জানানোর জন্য ধন্যবাদ, হয়তো অন্য কোনোবার।", en: "Thanks for inviting me, maybe some other time.", words: ["Thanks", "for", "inviting", "me,", "maybe", "some", "other", "time."] }
        ]
    },
    "s40": {
        title: "Cheering Someone Up",
        theoryHTML: `
            <div style="background:#fdf4ff; padding:15px; border-radius:12px; border-left:4px solid #c026d3; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#86198f;">Emotional Support</h4>
                <p style="margin:0; font-size:14px; color:#a21caf;">Words of affirmation to motivate a friend who has failed or feels depressed.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Validation:</strong> "It is completely normal to feel this way right now."</li>
                <li><strong>Motivation:</strong> "I know you will bounce back stronger from this."</li>
                <li><strong>Support:</strong> "I am always here for you, no matter what happens."</li>
            </ul>
        `,
        aiPrompt: "Act as my best friend. You just failed an important exam and you are crying. I will try to cheer you up using supportive English phrases.",
        gameData: [
            { bn: "এমন অনুভব করাটা সম্পূর্ণ স্বাভাবিক।", en: "It is completely normal to feel this way.", words: ["It", "is", "completely", "normal", "to", "feel", "this", "way."] },
            { bn: "আমি জানি তুমি আরও শক্তভাবে ফিরে আসবে।", en: "I know you will bounce back stronger.", words: ["I", "know", "you", "will", "bounce", "back", "stronger."] },
            { bn: "যাই ঘটুক না কেন, আমি সবসময় তোমার পাশে আছি।", en: "I am always here for you, no matter what.", words: ["I", "am", "always", "here", "for", "you,", "no", "matter", "what."] }
        ]
    },
    "s41": {
        title: "Asking for a Raise",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">Corporate Negotiation</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">Never demand money. Focus on 'value added' and 'responsibilities'.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Opening:</strong> "I would like to discuss my current salary and role."</li>
                <li><strong>Justifying:</strong> "Over the past year, I have taken on significantly more responsibilities."</li>
                <li><strong>The Ask:</strong> "Based on my performance, I would like to request a review of my compensation."</li>
            </ul>
        `,
        aiPrompt: "Act as a strict Corporate Boss. I am your employee. I will ask you for a salary raise. Ask me to justify why I deserve it, and finally agree to a 10% raise.",
        gameData: [
            { bn: "আমি আমার বর্তমান বেতন নিয়ে আলোচনা করতে চাই।", en: "I would like to discuss my current salary.", words: ["I", "would", "like", "to", "discuss", "my", "current", "salary."] },
            { bn: "গত এক বছরে আমি অনেক বেশি দায়িত্ব নিয়েছি।", en: "Over the past year, I have taken on more responsibilities.", words: ["Over", "the", "past", "year,", "I", "have", "taken", "on", "more", "responsibilities."] },
            { bn: "আমি আমার পারিশ্রমিক পর্যালোচনার অনুরোধ করছি।", en: "I would like to request a review of my compensation.", words: ["I", "would", "like", "to", "request", "a", "review", "of", "my", "compensation."] }
        ]
    },
    "s42": {
        title: "Resigning Gracefully",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">Don't Burn Bridges</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">Quitting a job formally ensures you get a good reference letter for the future.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The Notice:</strong> "I am writing to formally submit my letter of resignation."</li>
                <li><strong>The Timeline:</strong> "My last day of work will be the 15th of next month."</li>
                <li><strong>Gratitude:</strong> "I appreciate the opportunities I have had while working here."</li>
            </ul>
        `,
        aiPrompt: "Act as my Manager. I am handing you my resignation letter because I found a better opportunity. Act surprised, ask why I'm leaving, and wish me luck.",
        gameData: [
            { bn: "আমি আনুষ্ঠানিকভাবে আমার পদত্যাগপত্র জমা দিচ্ছি।", en: "I am formally submitting my letter of resignation.", words: ["I", "am", "formally", "submitting", "my", "letter", "of", "resignation."] },
            { bn: "আমার কাজের শেষ দিন হবে আগামী মাসের ১৫ তারিখ।", en: "My last day of work will be the 15th.", words: ["My", "last", "day", "of", "work", "will", "be", "the", "15th."] },
            { bn: "এখানে কাজ করার সুযোগ পাওয়ায় আমি কৃতজ্ঞ।", en: "I appreciate the opportunities I have had here.", words: ["I", "appreciate", "the", "opportunities", "I", "have", "had", "here."] }
        ]
    },
    "s43": {
        title: "Reporting to HR",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">Professional Complaints</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">How to report a toxic coworker to Human Resources without sounding overly emotional.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Opening:</strong> "I need to report a recurring issue with a colleague."</li>
                <li><strong>The Issue:</strong> "Their behavior has been creating a hostile work environment."</li>
                <li><strong>The Request:</strong> "I would like this matter to be kept strictly confidential."</li>
            </ul>
        `,
        aiPrompt: "Act as an HR Manager. I am coming to you to complain about a coworker who keeps taking credit for my work. Ask me for specific details and assure me you will investigate.",
        gameData: [
            { bn: "আমি এক সহকর্মীর নামে অভিযোগ করতে চাই।", en: "I need to report an issue with a colleague.", words: ["I", "need", "to", "report", "an", "issue", "with", "a", "colleague."] },
            { bn: "তার আচরণ একটি বৈরী কাজের পরিবেশ তৈরি করছে।", en: "Their behavior is creating a hostile work environment.", words: ["Their", "behavior", "is", "creating", "a", "hostile", "work", "environment."] },
            { bn: "আমি চাই বিষয়টি সম্পূর্ণ গোপন রাখা হোক।", en: "I would like this matter to be kept confidential.", words: ["I", "would", "like", "this", "matter", "to", "be", "kept", "confidential."] }
        ]
    },
    "s44": {
        title: "ISP & Tech Support",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1e40af;">Fixing the Internet</h4>
                <p style="margin:0; font-size:14px; color:#1d4ed8;">Stop saying 'Net nai'. Use proper technical phrases to get faster service.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The Problem:</strong> "My internet connection keeps dropping frequently."</li>
                <li><strong>Troubleshooting done:</strong> "I have already tried restarting the router."</li>
                <li><strong>Urgency:</strong> "I work from home, so I need this resolved urgently."</li>
            </ul>
        `,
        aiPrompt: "Act as an Internet Service Provider (ISP) call center agent. I will complain that my WiFi is extremely slow. Ask me to check the router lights and offer to send a technician.",
        gameData: [
            { bn: "আমার ইন্টারনেট কানেকশন বারবার বিচ্ছিন্ন হচ্ছে।", en: "My internet connection keeps dropping frequently.", words: ["My", "internet", "connection", "keeps", "dropping", "frequently."] },
            { bn: "আমি ইতিমধ্যে রাউটার রিস্টার্ট করার চেষ্টা করেছি।", en: "I have already tried restarting the router.", words: ["I", "have", "already", "tried", "restarting", "the", "router."] },
            { bn: "আমি বাসা থেকে কাজ করি, তাই দ্রুত সমাধান দরকার।", en: "I work from home, so I need this resolved urgently.", words: ["I", "work", "from", "home,", "so", "I", "need", "this", "resolved", "urgently."] }
        ]
    },
    "s45": {
        title: "Describing PC Issues",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1e40af;">Digital Disasters</h4>
                <p style="margin:0; font-size:14px; color:#1d4ed8;">Explaining software and hardware problems accurately to a repair shop.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Software:</strong> "The application keeps freezing on startup."</li>
                <li><strong>Hardware:</strong> "The laptop is overheating and making a strange grinding noise."</li>
                <li><strong>Data:</strong> "Is there any way to recover the files from the hard drive?"</li>
            </ul>
        `,
        aiPrompt: "Act as a computer repair shop owner. I bring you a laptop that suddenly went black and won't turn on. Give me a diagnosis and tell me the cost of fixing it.",
        gameData: [
            { bn: "অ্যাপটি চালু করার সময় হ্যাং হয়ে যাচ্ছে।", en: "The application keeps freezing on startup.", words: ["The", "application", "keeps", "freezing", "on", "startup."] },
            { bn: "ল্যাপটপটি খুব গরম হয়ে যাচ্ছে এবং অদ্ভুত শব্দ করছে।", en: "The laptop is overheating and making a strange noise.", words: ["The", "laptop", "is", "overheating", "and", "making", "a", "strange", "noise."] },
            { bn: "হার্ড ড্রাইভ থেকে ফাইলগুলো রিকভার করার কোনো উপায় আছে?", en: "Is there any way to recover files from the hard drive?", words: ["Is", "there", "any", "way", "to", "recover", "files", "from", "the", "hard", "drive?"] }
        ]
    },
    "s46": {
        title: "Guiding Parents (Tech)",
        theoryHTML: `
            <div style="background:#eff6ff; padding:15px; border-radius:12px; border-left:4px solid #3b82f6; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#1e40af;">Patient Instructions</h4>
                <p style="margin:0; font-size:14px; color:#1d4ed8;">How to explain smartphone mechanics over the phone using simple imperative verbs.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>Steps:</strong> "First, open the settings menu on your phone."</li>
                <li><strong>Actions:</strong> "Scroll down until you see the display option, then tap on it."</li>
                <li><strong>Verification:</strong> "Do you see a little gear icon in the top right corner?"</li>
            </ul>
        `,
        aiPrompt: "Act as my grandfather. You are very confused about how to make a video call on WhatsApp. I will try to guide you step-by-step. Keep pressing the wrong buttons initially.",
        gameData: [
            { bn: "প্রথমে, আপনার ফোনের সেটিংস মেনু খুলুন।", en: "First, open the settings menu on your phone.", words: ["First,", "open", "the", "settings", "menu", "on", "your", "phone."] },
            { bn: "ডিসপ্লে অপশন না পাওয়া পর্যন্ত নিচে স্ক্রল করুন।", en: "Scroll down until you see the display option.", words: ["Scroll", "down", "until", "you", "see", "the", "display", "option."] },
            { bn: "আপনি কি উপরে ডান কোণায় একটি গিয়ার আইকন দেখতে পাচ্ছেন?", en: "Do you see a gear icon in the top corner?", words: ["Do", "you", "see", "a", "gear", "icon", "in", "the", "top", "corner?"] }
        ]
    },
    "s47": {
        title: "Calling Emergencies",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Staying Clear Under Panic</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">In an emergency, structure matters. State the need, the state of the victim, and the location.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The Need:</strong> "Please send an ambulance immediately, it is an emergency."</li>
                <li><strong>The Victim:</strong> "Someone has collapsed and they are not breathing."</li>
                <li><strong>The Location:</strong> "We are located at the intersection of Main Street and Park Avenue."</li>
            </ul>
        `,
        aiPrompt: "Act as a 999 Emergency Dispatcher. I will call you to report a house fire. Ask me for my exact address, if anyone is trapped inside, and tell me fire trucks are on the way.",
        gameData: [
            { bn: "দয়া করে একটি অ্যাম্বুলেন্স পাঠান, এটি জরুরি।", en: "Please send an ambulance, it is an emergency.", words: ["Please", "send", "an", "ambulance,", "it", "is", "an", "emergency."] },
            { bn: "কেউ অজ্ঞান হয়ে গেছে এবং শ্বাস নিচ্ছে না।", en: "Someone has collapsed and they are not breathing.", words: ["Someone", "has", "collapsed", "and", "they", "are", "not", "breathing."] },
            { bn: "আমরা মেইন স্ট্রিট মোড়ে অবস্থান করছি।", en: "We are located at the intersection of Main Street.", words: ["We", "are", "located", "at", "the", "intersection", "of", "Main", "Street."] }
        ]
    },
    "s48": {
        title: "At the Dentist",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Medical Accuracy</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">Describing exact pain types helps the doctor diagnose you faster.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The Pain:</strong> "I have a sharp, throbbing pain in my back tooth."</li>
                <li><strong>The Trigger:</strong> "It hurts the most when I drink cold water or chew hard food."</li>
                <li><strong>The Treatment:</strong> "Will I need to get a root canal or just a filling?"</li>
            </ul>
        `,
        aiPrompt: "Act as a friendly Dentist. I am sitting in your chair complaining about tooth pain. Ask me to open my mouth, tell me I have a cavity, and explain the filling process.",
        gameData: [
            { bn: "আমার পেছনের দাঁতে তীব্র ব্যথা হচ্ছে।", en: "I have a sharp pain in my back tooth.", words: ["I", "have", "a", "sharp", "pain", "in", "my", "back", "tooth."] },
            { bn: "ঠান্ডা পানি খেলে এটি সবচেয়ে বেশি ব্যথা করে।", en: "It hurts the most when I drink cold water.", words: ["It", "hurts", "the", "most", "when", "I", "drink", "cold", "water."] },
            { bn: "আমার কি রুট ক্যানেল করতে হবে নাকি শুধু ফিলিং?", en: "Will I need a root canal or just a filling?", words: ["Will", "I", "need", "a", "root", "canal", "or", "just", "a", "filling?"] }
        ]
    },
    "s49": {
        title: "Witness Statement",
        theoryHTML: `
            <div style="background:#fef2f2; padding:15px; border-radius:12px; border-left:4px solid #ef4444; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b91c1c;">Objective Descriptions</h4>
                <p style="margin:0; font-size:14px; color:#991b1b;">When talking to authorities about an accident, use clear past continuous and past simple tenses.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The Action:</strong> "The car ran a red light and hit the van."</li>
                <li><strong>The Speed:</strong> "The driver was speeding and completely lost control of the vehicle."</li>
                <li><strong>The Aftermath:</strong> "The driver fled the scene before the police arrived."</li>
            </ul>
        `,
        aiPrompt: "Act as a Police Detective taking notes. I just witnessed a car accident. Ask me what color the car was, how fast it was going, and if I saw the driver's face.",
        gameData: [
            { bn: "গাড়িটি লাল সংকেত অমান্য করে ভ্যানটিকে ধাক্কা মারে।", en: "The car ran a red light and hit the van.", words: ["The", "car", "ran", "a", "red", "light", "and", "hit", "the", "van."] },
            { bn: "চালক অতিরিক্ত গতিতে চালাচ্ছিল এবং নিয়ন্ত্রণ হারিয়েছিল।", en: "The driver was speeding and lost control.", words: ["The", "driver", "was", "speeding", "and", "lost", "control."] },
            { bn: "পুলিশ আসার আগেই চালক ঘটনাস্থল থেকে পালিয়ে যায়।", en: "The driver fled the scene before police arrived.", words: ["The", "driver", "fled", "the", "scene", "before", "police", "arrived."] }
        ]
    },
    "s50": {
        title: "Discussing Movies",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">Cinematic Reviews</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">How to talk about movies like a critic without giving away the plot.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The Review:</strong> "The cinematography was stunning, but the pacing felt a bit slow."</li>
                <li><strong>The Twist:</strong> "The plot twist at the end was completely mind-blowing."</li>
                <li><strong>Spoiler Warning:</strong> "I don't want to give any spoilers, but you have to watch it."</li>
            </ul>
        `,
        aiPrompt: "Act as a movie fanatic. Ask me what my favorite movie of the year is and why I liked it. Debate with me if I pick a movie you think is overrated.",
        gameData: [
            { bn: "সিনেমাটোগ্রাফি দারুণ ছিল, কিন্তু গতি একটু ধীর মনে হয়েছে।", en: "The cinematography was stunning, but the pacing felt slow.", words: ["The", "cinematography", "was", "stunning,", "but", "the", "pacing", "felt", "slow."] },
            { bn: "শেষের দিককার টুইস্টটি পুরোপুরি অসাধারণ ছিল।", en: "The plot twist at the end was mind-blowing.", words: ["The", "plot", "twist", "at", "the", "end", "was", "mind-blowing."] },
            { bn: "আমি স্পয়লার দিতে চাই না, তবে তোমার এটি দেখা উচিত।", en: "I don't want to give spoilers, but you must watch it.", words: ["I", "don't", "want", "to", "give", "spoilers,", "but", "you", "must", "watch", "it."] }
        ]
    },
    "s51": {
        title: "Recommending Art",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">Cultural Exchange</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">Persuading friends to read a book or listen to an album.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The Pitch:</strong> "You absolutely must read this book; it will change your perspective."</li>
                <li><strong>The Connection:</strong> "Knowing your taste in music, I think you will love this album."</li>
                <li><strong>The Impact:</strong> "The lyrics are so beautifully written, they gave me goosebumps."</li>
            </ul>
        `,
        aiPrompt: "Act as a friend looking for a good book to read. Ask me for a recommendation. I will suggest a science fiction book, and you will ask me what the main theme is.",
        gameData: [
            { bn: "তোমার অবশ্যই এই বইটি পড়া উচিত, এটি দারুণ।", en: "You absolutely must read this book, it is great.", words: ["You", "absolutely", "must", "read", "this", "book,", "it", "is", "great."] },
            { bn: "তোমার পছন্দ অনুযায়ী, আমার মনে হয় অ্যালবামটি তোমার ভালো লাগবে।", en: "Knowing your taste, I think you will love this album.", words: ["Knowing", "your", "taste,", "I", "think", "you", "will", "love", "this", "album."] },
            { bn: "গানের কথাগুলো এত সুন্দর যে আমার গায়ে কাঁটা দিয়ে ওঠে।", en: "The lyrics are so beautiful, they gave me goosebumps.", words: ["The", "lyrics", "are", "so", "beautiful,", "they", "gave", "me", "goosebumps."] }
        ]
    },
    "s52": {
        title: "Debating Pop Culture",
        theoryHTML: `
            <div style="background:#fffbeb; padding:15px; border-radius:12px; border-left:4px solid #f59e0b; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#b45309;">Graceful Arguments</h4>
                <p style="margin:0; font-size:14px; color:#92400e;">How to passionately disagree about actors, music, or sports without being toxic.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The Disagreement:</strong> "I completely disagree with your perspective on that actor."</li>
                <li><strong>The Counter:</strong> "While he is popular, I think his acting range is very limited."</li>
                <li><strong>Agree to Disagree:</strong> "We clearly have different tastes, but that is what makes art subjective."</li>
            </ul>
        `,
        aiPrompt: "Act as a stubborn sports fan. Tell me that Cristiano Ronaldo is objectively better than Lionel Messi. I will debate you respectfully using advanced English.",
        gameData: [
            { bn: "আমি তোমার দৃষ্টিভঙ্গির সাথে সম্পূর্ণ দ্বিমত পোষণ করি।", en: "I completely disagree with your perspective.", words: ["I", "completely", "disagree", "with", "your", "perspective."] },
            { bn: "যদিও সে জনপ্রিয়, আমার মনে হয় তার অভিনয়ের দক্ষতা সীমিত।", en: "While he is popular, I think his acting range is limited.", words: ["While", "he", "is", "popular,", "I", "think", "his", "acting", "range", "is", "limited."] },
            { bn: "আমাদের রুচি আলাদা, তবে এটাই শিল্পকে বিষয়ভিত্তিক করে তোলে।", en: "We have different tastes, but that makes art subjective.", words: ["We", "have", "different", "tastes,", "but", "that", "makes", "art", "subjective."] }
        ]
    },
    "s53": {
        title: "Talking about Regrets",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">The Third Conditional</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">Opening up to friends about things you wish you had done differently.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The Past Truth:</strong> "If I had worked harder, I would have passed the exam."</li>
                <li><strong>The Realization:</strong> "Looking back, I deeply regret not taking that opportunity."</li>
                <li><strong>The Lesson:</strong> "It was a tough lesson to learn, but it made me wiser."</li>
            </ul>
        `,
        aiPrompt: "Act as an empathetic older sibling. I am going to confess that I regret wasting all my time playing video games instead of studying for my HSC exams. Give me mature advice.",
        gameData: [
            { bn: "আমি যদি আরও পরিশ্রম করতাম, তাহলে আমি পাস করতাম।", en: "If I had worked harder, I would have passed.", words: ["If", "I", "had", "worked", "harder,", "I", "would", "have", "passed."] },
            { bn: "পেছনে ফিরে তাকালে, আমি সেই সুযোগটি না নেওয়ায় গভীরভাবে অনুতপ্ত।", en: "Looking back, I deeply regret not taking that opportunity.", words: ["Looking", "back,", "I", "deeply", "regret", "not", "taking", "that", "opportunity."] },
            { bn: "এটি একটি কঠিন শিক্ষা ছিল, কিন্তু এটি আমাকে বুদ্ধিমান করেছে।", en: "It was a tough lesson, but it made me wiser.", words: ["It", "was", "a", "tough", "lesson,", "but", "it", "made", "me", "wiser."] }
        ]
    },
    "s54": {
        title: "Deep Gratitude",
        theoryHTML: `
            <div style="background:#f0fdf4; padding:15px; border-radius:12px; border-left:4px solid #16a34a; margin-bottom:20px;">
                <h4 style="margin:0 0 10px; color:#166534;">Beyond 'Thank You'</h4>
                <p style="margin:0; font-size:14px; color:#15803d;">When someone does something life-changing for you, standard 'thanks' isn't enough.</p>
            </div>
            <ul style="line-height:1.8; color:#475569; font-size:14px; padding-left:20px;">
                <li><strong>The Core Feeling:</strong> "I cannot thank you enough for your incredible support."</li>
                <li><strong>The Impact:</strong> "Your guidance genuinely changed the trajectory of my life."</li>
                <li><strong>The Promise:</strong> "I will never forget what you did for me during my darkest times."</li>
            </ul>
        `,
        aiPrompt: "Act as my mentor. I am coming to you after getting accepted into a top university to express my deepest gratitude for all the extra hours you spent teaching me.",
        gameData: [
            { bn: "আপনার অসামান্য সমর্থনের জন্য আমি কীভাবে ধন্যবাদ জানাবো বুঝতে পারছি না।", en: "I cannot thank you enough for your incredible support.", words: ["I", "cannot", "thank", "you", "enough", "for", "your", "incredible", "support."] },
            { bn: "আপনার দিকনির্দেশনা সত্যিই আমার জীবনের গতিপথ বদলে দিয়েছে।", en: "Your guidance genuinely changed the trajectory of my life.", words: ["Your", "guidance", "genuinely", "changed", "the", "trajectory", "of", "my", "life."] },
            { bn: "আমার সবচেয়ে কঠিন সময়ে আপনি যা করেছেন তা আমি কখনোই ভুলবো না।", en: "I will never forget what you did for me.", words: ["I", "will", "never", "forget", "what", "you", "did", "for", "me."] }
        ]
    }
};
