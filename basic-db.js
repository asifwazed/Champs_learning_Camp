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
    }
};
