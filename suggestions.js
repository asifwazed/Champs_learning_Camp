/* suggestions.js - Ultimate BOU HSC 1852 Exam Suggestions & Mini Guide */

const suggestionData = {
    // --- MINI GUIDE & EXAM HACKS (ALL PARTS) ---
    tips_60: [
        { 
            title: "📘 The BOU HSC-1852 Blueprint (100 Marks)", 
            content: "<strong>Part A (30 Marks):</strong> MCQ (5), Open Questions (10), Flow Chart (10), Summary (5).<br><strong>Part B (30 Marks):</strong> Vocabulary Match (10), Cloze Test With Clues (10), Cloze Test Without Clues (10).<br><strong>Part C (40 Marks):</strong> Paragraph, Story, Email/Letter, Dialogue (10 marks each)." 
        },
        { 
            title: "🎯 Part A: MCQ & Open Questions (15 Marks)", 
            content: "<strong>MCQs:</strong> Examiners use synonyms. If an option uses the exact same words as the passage, it's usually a trap! Look for the paraphrased answer.<br><strong>Open Questions:</strong> Never copy-paste exact lines. Start with the subject of the question. Keep answers sharp, direct, and exactly 2-3 sentences long." 
        },
        { 
            title: "📊 Part A: Flow Chart & Summary (15 Marks)", 
            content: "<strong>Flow Chart (10):</strong> NEVER write full sentences! Use short phrases starting with a Gerund (V+ing), Participle, or Infinitive (To + V1). Draw boxes and arrows exactly like the question.<br><strong>Summary (5):</strong> Must be exactly 1/3rd the length of the passage. Write in a single paragraph using your own words. Do not include examples or quotes from the text." 
        },
        { 
            title: "🔗 Part B: Vocabulary & Cloze Tests (30 Marks)", 
            content: "<strong>Vocab Match (10):</strong> Always match the Parts of Speech (Noun matches Noun). Use the 'Process of Elimination'.<br><strong>With Clues (10):</strong> You MUST apply Right Form of Verbs to the given clues! Change the base form if grammar requires it.<br><strong>Without Clues (10):</strong> Any grammatically correct synonym works." 
        },
        { 
            title: "✉️ Part C: Email & Letter Formats (10 Marks)", 
            content: "They can ask for EITHER an Email or a Letter. Be ready for both.<br><strong>Email:</strong> Follow the strict format: <em>To:, From:, Subject:</em>. Keep the body short and direct.<br><strong>Letter:</strong> Must include the Date, Salutation, Body (Intro, Main, Conclusion), Subscription, and a drawn 'Stamp/Envelope' box at the bottom." 
        },
        { 
            title: "✂️ Part C: Paragraph & Story Rules (20 Marks)", 
            content: "<strong>Paragraph:</strong> Write in ONE single block. Do not break into multiple paragraphs. Start with a strong Topic Sentence.<br><strong>Story:</strong> You MUST write a Catchy Title at the top. Read the starting prompt carefully and maintain the exact same tense (usually Past Tense) throughout the story." 
        }
    ],

    // --- 40 MARKS: WRITING VAULT (15 EXAMPLES PER CATEGORY) ---
    writing_40: {
        paragraphs: [
            "1. Traffic Education / Traffic Jam (Unit 2)", 
            "2. Food Adulteration and its Dangers (Unit 3)", 
            "3. Etiquette and Manners in Society (Unit 4)", 
            "4. Adolescence and its Challenges (Unit 5)", 
            "5. Human Rights / Universal Declaration (Unit 7)", 
            "6. Hakaluki Haor: A Natural Beauty (Unit 8)", 
            "7. The Sundarbans / Threats to Tigers (Unit 8)", 
            "8. What is a Dream? (Unit 10)", 
            "9. Diaspora and Migration (Unit 11)", 
            "10. Peace Movement / Conflict Resolution (Unit 12)", 
            "11. Folk Music of Bangladesh (Unit 14)", 
            "12. Nelson Mandela & Apartheid (Unit 1)", 
            "13. Deforestation and Tree Plantation", 
            "14. Climate Change & Global Warming", 
            "15. Uses and Abuses of Mobile Phone/Internet"
        ],
        stories: [
            "1. A Thirsty Crow (Where there is a will, there is a way)", 
            "2. The Lion and the Mouse (Even the small can help the great)", 
            "3. An Honest Woodcutter (Honesty is the best policy)", 
            "4. The Ant and the Dove (A friend in need is a friend indeed)", 
            "5. Who will bell the cat? (Easy to say, hard to do)", 
            "6. Bayazid Bostami's Devotion to his Mother", 
            "7. A Liar Shepherd (Nobody believes a liar)", 
            "8. The Goose that Laid Golden Eggs (Grasp all, lose all)", 
            "9. Two Friends and a Bear (A false friend leaves in danger)", 
            "10. Robert Bruce and the Spider (Perseverance brings success)", 
            "11. Dividing the Bread / The Cunning Monkey", 
            "12. The Fox and the Grapes (Grapes are sour)", 
            "13. King Midas and his Golden Touch", 
            "14. Unity is Strength (The Old Man and his Sons)", 
            "15. Sheikh Saadi and his Dress (Dress does not make a man great)"
        ],
        letters: [
            "1. [Email] To a University asking about admission procedures for overseas students", 
            "2. [Email] To an airline/travel agency canceling a booked ticket", 
            "3. [Email] To a hotel manager booking a room for a holiday", 
            "4. [Email] To an authority requesting information about a scholarship", 
            "5. [Email] To your friend congratulating them on brilliant success", 
            "6. [Email] To your father asking for money to buy books", 
            "7. [Letter] Advising your younger brother to be sincere in studies / avoid bad company", 
            "8. [Letter] Consoling a friend on his/her father's/mother's sudden death", 
            "9. [Letter] Describing a recent study tour to Kuakata/Sundarbans", 
            "10. [Letter] Thanking your friend for their warm hospitality", 
            "11. [Letter] Inviting a friend to spend the summer vacation together", 
            "12. [Letter] Describing the importance of reading newspapers daily", 
            "13. [Letter] Describing the importance of learning English", 
            "14. [Letter] Telling your friend about your aim in life", 
            "15. [Letter] Warning a friend about the bad effects of smoking/drug addiction"
        ],
        dialogues: [
            "1. Between you and a doctor regarding your recent illness", 
            "2. Between two friends about preparation for the upcoming HSC Exam", 
            "3. Between two friends on the importance of learning English", 
            "4. Between two friends about the bad effects of smoking / drug addiction", 
            "5. Between two friends about the necessity of Tree Plantation", 
            "6. Between two friends on the proper use of time in student life", 
            "7. Between two friends on the importance of reading daily newspapers", 
            "8. Between two friends about the benefits of early rising", 
            "9. Between two friends comparing City life vs Village life", 
            "10. Between two friends about the uses and abuses of mobile phones/internet", 
            "11. Between two friends discussing their aims in life", 
            "12. Between two friends about the eradication of illiteracy in Bangladesh", 
            "13. Between two friends on the importance of physical exercise", 
            "14. Between two friends about the danger of environmental pollution", 
            "15. Between two friends planning for a picnic or study tour"
        ]
    }
};
