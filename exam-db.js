const examDB = {
    // ==========================================
    // EXAMS FOR UNIT 1
    // ==========================================
    "u1_l1": {
        mcqs: [
            { q: "What does the word 'apartheid' refer to in the text?", options: ["Apartment", "Distance", "Racial discrimination", "Dialogue"], ans: 2 },
            { q: "Nelson Mandela was imprisoned for nearly...", options: ["Two decades", "Three decades", "Four decades", "Ten years"], ans: 1 },
            { q: "The word 'shackles' stands for...", options: ["Freedom", "Chains", "Laws", "Punishments"], ans: 1 },
            { q: "When did Mandela become South Africa's first black president?", options: ["1990", "1993", "1994", "2004"], ans: 2 },
            { q: "What was the clan name by which friends fondly called Mandela?", options: ["Madiba", "Rivonia", "Klerk", "Gordimer"], ans: 0 }
        ],
        openEnded: [
            "Why was Nelson Mandela imprisoned?",
            "What did Mandela say about race discrimination in his acceptance speech?",
            "Why was the Nobel Peace Prize awarded to both Mandela and F.W. de Klerk?"
        ],
        flowChartTopic: "the life and achievements of Nelson Mandela.",
        flowChartBox1: "Guiding South Africa to democracy"
    },
    
    "u1_l2": {
        mcqs: [
            { q: "Where was Valentina Tereshkova born?", options: ["Moscow", "Maslennikovo", "Karnal", "Texas"], ans: 1 },
            { q: "Kalpana Chawla obtained her Ph.D. in Aerospace Engineering from:", options: ["Punjab University", "University of Texas", "University of Colorado", "Zhukovsky Academy"], ans: 2 }
        ],
        openEnded: [
            "How did Valentina Tereshkova prepare for her space flight?"
        ],
        flowChartTopic: "the life and achievements of Kalpana Chawla.",
        flowChartBox1: "Born in Karnal, India"
    }
// ==========================================
// EXAMS FOR UNIT 1
// ==========================================

        // Find "u1_l2" (Two Women) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "Where was Valentina Tereshkova born?", options: ["Moscow", "Maslennikovo", "Karnal", "Texas"], ans: 1 },
                { q: "Kalpana Chawla obtained her Ph.D. in Aerospace Engineering from:", options: ["Punjab University", "University of Texas", "University of Colorado", "Zhukovsky Academy"], ans: 2 },
                { q: "Tereshkova's expertise in which field led to her selection as a cosmonaut?", options: ["Textile engineering", "Skydiving", "Medicine", "Combat flying"], ans: 1 },
                { q: "Space Shuttle Columbia disintegrated over which state?", options: ["Florida", "California", "Texas", "Washington"], ans: 2 },
                { q: "What was the name of Tereshkova's spacecraft?", options: ["Apollo 11", "Vostok-6", "Columbia", "Spartan"], ans: 1 }
            ],
            openEnded: [
                "How did Valentina Tereshkova prepare for her space flight?",
                "What were Kalpana Chawla's responsibilities on her final mission (STS-107)?",
                "What caused the fatal accident of the Space Shuttle Columbia?"
            ],
            flowChartTopic: "the life and achievements of Kalpana Chawla.",
            flowChartBox1: "Born in Karnal, India"
        }

// ==========================================
// EXAMS FOR UNIT 2
// ==========================================

        // Find "u2_l1" (How Your Brain Negotiates Traffic) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "What is the unseen Central Processing Unit (CPU) of a human driver?", options: ["The car engine", "The steering wheel", "The human brain", "The traffic lights"], ans: 2 },
                { q: "Which of the following differentiates a human from a computer?", options: ["Speed", "Conscience", "Memory", "Processing power"], ans: 1 },
                { q: "The traffic in roads and highways must not be compared to:", options: ["A busy market", "A racing circuit", "A pedestrian path", "A parking lot"], ans: 1 },
                { q: "What does the phrase 'Keep your cool' mean?", options: ["Turn on the AC", "Drive fast", "Remain calm and composed", "Stop the car"], ans: 2 },
                { q: "According to the text, a human brain is:", options: ["Artificially intelligent", "Programmed for fixed conditions", "Intelligent by nature", "A mechanical device"], ans: 2 }
            ],
            openEnded: [
                "Why is the human brain compared to a CPU?",
                "What is the difference between a human brain and an artificially intelligent machine?",
                "Why must a driver leave no room for fantasy?"
            ],
            flowChartTopic: "the functions and characteristics of the human brain while driving.",
            flowChartBox1: "Working unseen behind all actions"
        }

        // Find "u2_l2" (Traffic Capital of the World) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "What percentage of Dhaka city is covered by roads?", options: ["7 percent", "25 percent", "60 percent", "70 percent"], ans: 0 },
                { q: "What is the estimated cost of Dhaka's traffic congestion per year?", options: ["$1.5 billion", "$2.75 billion", "$3.8 billion", "$45 million"], ans: 2 },
                { q: "Most people in Bangladesh blame the traffic jams on:", options: ["Buses", "Cars", "CNGs", "Rickshaws"], ans: 3 },
                { q: "How many major intersections are there in Dhaka?", options: ["60", "250", "650", "1000"], ans: 2 },
                { q: "Car owners are a small part of the population, but they are the most:", options: ["Vulnerable", "Influential", "Marginalized", "Poor"], ans: 1 }
            ],
            openEnded: [
                "Why is Dhaka's traffic problem so difficult to solve?",
                "What is the paradox regarding Dhaka's poor infrastructure?",
                "Why is increasing bus capacity complicated in Dhaka?"
            ],
            flowChartTopic: "the causes and effects of traffic congestion in Dhaka.",
            flowChartBox1: "Absence of a planned road network"
        }

        // Find "u2_l3" (The Traffic Police) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "Where does the traffic police stand?", options: ["On the footpath", "Amidst killer speeds", "Inside a booth", "Near a school"], ans: 1 },
                { q: "What does the traffic police do with his hand?", options: ["Hides it", "Stretches it out", "Holds a gun", "Writes tickets"], ans: 1 },
                { q: "The traffic police is often seen on:", options: ["Movie posters", "Kids' books and cartoons", "Billboards", "Television news"], ans: 1 },
                { q: "The word 'plight' means:", options: ["Happiness", "Flight", "Suffering or difficult condition", "Duty"], ans: 2 },
                { q: "He must stand erect, as fit as a:", options: ["Tiger", "Fiddle", "Soldier", "Statue"], ans: 1 }
            ],
            openEnded: [
                "What are the physical sufferings of the traffic policeman mentioned in the poem?",
                "Why does the traffic policeman stand in the middle of the road?",
                "What does the phrase 'as fit as a fiddle' imply here?"
            ],
            flowChartTopic: "the duties and sufferings of a traffic policeman.",
            flowChartBox1: "Facing erratic traffic and killer speeds"
        }

        // Find "u2_l4" (My Brother, the Traffic Policeman) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "Who directed the film 'My Brother, the Traffic Policeman'?", options: ["Lampros", "Antonis Pikrocholos", "Filippos Fylaktos", "Kiki"], ans: 2 },
                { q: "The central character, Antonis Pikrocholos, is described as:", options: ["Lazy", "Corrupt", "Slightly manic and devoted", "Romantic"], ans: 2 },
                { q: "Who is Lampros in the story?", options: ["A bus driver", "A businessman", "A taxi-driver", "The Greek film maker"], ans: 2 },
                { q: "Antonis applies the traffic code with:", options: ["Lenience", "Unyielding severity", "Carelessness", "Favoritism"], ans: 1 },
                { q: "The road to marriage for the couples is strewn with:", options: ["Flowers", "Money", "Obstacles", "Tickets"], ans: 2 }
            ],
            openEnded: [
                "Who is Antonis Pikrocholos and how does he perform his duty?",
                "Why does Antonis issue traffic tickets to Lampros and the bus?",
                "What makes the road to marriage difficult for the couples?"
            ],
            flowChartTopic: "the activities and traits of Antonis Pikrocholos.",
            flowChartBox1: "Working as a dedicated traffic policeman"
        }

// ==========================================
// EXAMS FOR UNIT 3
// ==========================================

        // Find "u3_l1" (Food Adulteration) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "Unsafe levels of pesticides were found in what percentage of vegetables?", options: ["30%", "40%", "50%", "82%"], ans: 2 },
                { q: "Which chemical was found in nearly 30% of turmeric powder samples?", options: ["Aldrin", "Lead chromate", "Formaldehyde", "DDT"], ans: 1 },
                { q: "Arsenic and chromium were detected above safety limits in:", options: ["Milk", "Mangoes", "Rice", "Poultry feed"], ans: 2 },
                { q: "The amounts of pesticide found were how many times greater than European Union limits?", options: ["2 to 5 times", "3 to 20 times", "20 to 50 times", "100 times"], ans: 1 },
                { q: "What was found in the samples of chicken and fish?", options: ["Lead", "Formaldehyde", "Traces of antibiotics", "Chromium"], ans: 2 }
            ],
            openEnded: [
                "What did the National Food Safety Laboratory find in their survey?",
                "What are the fatal effects of consuming adulterated food products?",
                "According to the former DG of Health Services, how should food adulteration be stopped?"
            ],
            flowChartTopic: "the scenario of food adulteration in Bangladesh.",
            flowChartBox1: "Presence of unsafe pesticides in vegetables"
        }

        // Find "u3_l2" (The Luncheon) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "Where was the writer living twenty years ago?", options: ["London", "Rome", "Paris", "Berlin"], ans: 2 },
                { q: "Foyot's is a restaurant at which the:", options: ["French senators eat", "Writers gather", "Tourists eat", "Working class eat"], ans: 0 },
                { q: "How much money did the writer have to last the rest of the month?", options: ["Fifteen francs", "Eighty francs", "One hundred francs", "Three francs"], ans: 1 },
                { q: "The lady repeatedly claimed that she never ate:", options: ["Meat", "More than one thing for luncheon", "Caviare", "Asparagus"], ans: 1 },
                { q: "What was the cheapest dish on the menu that the writer ordered for himself?", options: ["Salmon", "Caviare", "Mutton chop", "Ice cream"], ans: 2 }
            ],
            openEnded: [
                "Why did the writer agree to host the lady at Foyot's despite his poverty?",
                "List the food items the lady consumed during the luncheon.",
                "How did the writer finally have his revenge on the lady?"
            ],
            flowChartTopic: "the series of foods ordered by the lady.",
            flowChartBox1: "Ordering a beautiful salmon"
        }

// ==========================================
// EXAMS FOR UNIT 4
// ==========================================

        // Find "u4_l1" (Etiquette and Manners) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "The word 'Etiquette' originated from which language?", options: ["English", "Latin", "Greek", "French"], ans: 3 },
                { q: "What is considered the best place to harness manners and etiquette?", options: ["School", "Home", "Playground", "Workplace"], ans: 1 },
                { q: "Which of the following is an example of bad manners?", options: ["Saying 'Please'", "Interrupting while others are speaking", "Offering your seat", "Being hospitable"], ans: 1 },
                { q: "What do manners represent?", options: ["Your physical strength", "Your inner self", "Your financial status", "Your educational degree"], ans: 1 },
                { q: "In a mixed group in public, whom should you greet first?", options: ["The youngest", "The richest", "The elders and women", "Your close friends"], ans: 2 }
            ],
            openEnded: [
                "What is the difference between etiquette and manners?",
                "How do good manners help in earning respect?",
                "Mention at least three important 'Table Manners'."
            ],
            flowChartTopic: "the benefits of practicing good manners and etiquette.",
            flowChartBox1: "Representing your inner self positively"
        }

        // Find "u4_l2" (Love and Friendship) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "Who wrote the play 'As You Like It'?", options: ["John Keats", "William Wordsworth", "William Shakespeare", "William Blake"], ans: 2 },
                { q: "According to the poem, what is not as kind as man's ingratitude?", options: ["The summer sun", "The winter wind", "The green holly", "The bitter sky"], ans: 1 },
                { q: "The poet claims that most friendship is:", options: ["Everlasting", "Feigning (fake)", "Jolly", "Sharp"], ans: 1 },
                { q: "Why is the winter wind's tooth not so keen?", options: ["Because it is warm", "Because it is not seen", "Because it is friendly", "Because it brings rain"], ans: 1 },
                { q: "The poem laments the absence of:", options: ["Wealth", "Health", "True love and friendship", "Nature"], ans: 2 }
            ],
            openEnded: [
                "Why does the poet consider man's ingratitude worse than the winter wind?",
                "What is the poet's opinion about love and friendship?",
                "Explain the meaning of the line: 'Most friendship is feigning, most loving mere folly'."
            ],
            flowChartTopic: "the negative traits of human relationships mentioned in the poem.",
            flowChartBox1: "Showing ingratitude to others"
        }

        // Find "u4_l3" (Photograph) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "How old was the boy in the story?", options: ["Eight", "Ten", "Twelve", "Fifteen"], ans: 1 },
                { q: "What was the grandmother doing under the mango tree?", options: ["Reading a book", "Sleeping", "Knitting a woolen scarf", "Cooking"], ans: 2 },
                { q: "What did the boy find in the box of old books?", options: ["A toy", "A small faded photograph", "A letter", "A gold coin"], ans: 1 },
                { q: "When was the photograph taken?", options: ["Ten years ago", "Twenty years ago", "Sixty years ago", "A hundred years ago"], ans: 2 },
                { q: "What insect settled on the grandmother's knitting needle?", options: ["A bee", "A spider", "A lemon coloured butterfly", "A dragonfly"], ans: 2 }
            ],
            openEnded: [
                "Describe the physical appearance of the grandmother as seen by the boy.",
                "How did the girl in the photograph look?",
                "What did the boy realize at the end of the story about the girl in the picture?"
            ],
            flowChartTopic: "the appearance of the girl in the photograph.",
            flowChartBox1: "Having long, loose hair"
        }

// ==========================================
// EXAMS FOR UNIT 5
// ==========================================

        // Find "u5_l1" (Storm and Stress of Adolescence) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "According to WHO, adolescence occurs between:", options: ["Infancy and early childhood", "Childhood and adulthood", "Adulthood and old age", "Birth to age 2"], ans: 1 },
                { q: "What marks the passage from childhood to adolescence?", options: ["Getting a job", "The onset of puberty", "Graduating from school", "Reaching age 18"], ans: 1 },
                { q: "During adolescence, growth and change are second only to:", options: ["Old age", "Early childhood", "Infancy", "Adulthood"], ans: 2 },
                { q: "Many adolescents face pressure to:", options: ["Study engineering", "Use alcohol and drugs", "Travel abroad", "Start businesses"], ans: 1 },
                { q: "Adolescents are particularly vulnerable to:", options: ["Academic failure", "Sexual exploitation and high-risk behaviors", "Viral fevers", "Poverty"], ans: 1 }
            ],
            openEnded: [
                "What are the key developments an individual experiences during adolescence?",
                "Why are adolescents considered vulnerable to high-risk behaviors?",
                "Whose responsibility is it to promote adolescent development and intervene when problems arise?"
            ],
            flowChartTopic: "the risks and challenges faced by adolescents.",
            flowChartBox1: "Facing pressure to use drugs and alcohol"
        }

        // Find "u5_l2" (Adolescence in Bangladesh) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "What is the legal age of marriage for girls in Bangladesh?", options: ["15", "18", "21", "25"], ans: 1 },
                { q: "What percentage of adolescent girls become mothers by the age of 19?", options: ["33 percent", "50 percent", "60 percent", "80 percent"], ans: 2 },
                { q: "What usually happens when a girl gets married early?", options: ["She goes to college", "She drops out of school", "She becomes independent", "She gets a job"], ans: 1 },
                { q: "The maternal mortality rate for adolescents in Bangladesh is:", options: ["Half the national rate", "Equal to the national rate", "Double the national rate", "Zero"], ans: 2 },
                { q: "More than 50 percent of adolescent girls in Bangladesh suffer from:", options: ["Cancer", "Diabetes", "Undernourishment and anaemia", "Tuberculosis"], ans: 2 }
            ],
            openEnded: [
                "What characterizes the situation of adolescent girls in Bangladesh?",
                "What are the negative consequences a girl faces immediately after early marriage?",
                "Why are unemployed or uneducated adolescent boys considered vulnerable?"
            ],
            flowChartTopic: "the negative impacts of early marriage on adolescent girls.",
            flowChartBox1: "Dropping out of school"
        }

        // Find "u5_l3" (Why Does a Child Hate School) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "Who is the poet of 'The School Boy'?", options: ["William Shakespeare", "William Wordsworth", "William Blake", "John Keats"], ans: 2 },
                { q: "What does the boy love to do on a summer morn?", options: ["Go to school", "Rise and hear the birds sing", "Read books", "Sleep late"], ans: 1 },
                { q: "What drives all joy away for the school boy?", options: ["The huntsman's horn", "Going to school in a summer morn", "Singing with the skylark", "Playing in the garden"], ans: 1 },
                { q: "The phrase 'cruel eye outworn' refers to:", options: ["An eagle", "A harsh and exhausted teacher", "The sun", "A strict parent"], ans: 1 },
                { q: "The poet compares the school boy to a:", options: ["Caged bird", "Skylark", "Blooming flower", "Huntsman"], ans: 0 }
            ],
            openEnded: [
                "According to the text, what should an ideal learning-friendly environment look like?",
                "Why is the school boy unhappy in the poem?",
                "How does the poet use the metaphor of a caged bird in the poem?"
            ],
            flowChartTopic: "the feelings and desires of the school boy.",
            flowChartBox1: "Loving to rise on a summer morning"
        }

        // Find "u5_l4" (The Story of Shilpi) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "How old was Shilpi when she married Rashid?", options: ["12", "15", "18", "21"], ans: 1 },
                { q: "What did the local empowerment group teach adolescent girls?", options: ["Computer coding", "Life skills to say no to early marriage", "Cooking", "Farming"], ans: 1 },
                { q: "What was the maternal mortality rate in Bangladesh in 2010 per 100,000 live births?", options: ["143", "194", "322", "500"], ans: 1 },
                { q: "What painful internal injury is caused by obstructed childbirth?", options: ["Hemorrhage", "Anaemia", "Fistula", "Cancer"], ans: 2 },
                { q: "How long did Rashid agree to delay having children?", options: ["Two years", "Five years", "Seven years", "Ten years"], ans: 1 }
            ],
            openEnded: [
                "What kind of support does the empowerment group provide to adolescent girls?",
                "What are the serious health risks for girls who get pregnant early?",
                "How did Shilpi and Rashid handle the pressure from their family to have children?"
            ],
            flowChartTopic: "the actions taken by Shilpi and Rashid to prevent early pregnancy.",
            flowChartBox1: "Joining a local empowerment group"
        }

        // Find "u5_l5" (Amazing Children) and replace its exam: {} with:
        exam: {
            mcqs: [
                { q: "Dylan Mahalingam became the co-founder of Lil' MDGs at the age of:", options: ["Six", "Eight", "Nine", "Thirteen"], ans: 2 },
                { q: "Alexandra 'Alex' Scott was diagnosed with which disease?", options: ["Typhus", "Neuroblastoma (Cancer)", "Leukemia", "Heart disease"], ans: 1 },
                { q: "Ryan Hreljac raised money to build a well in which continent?", options: ["Asia", "South America", "Africa", "Europe"], ans: 2 },
                { q: "Katie Stagliano donated fresh produce to:", options: ["Orphanages", "Soup kitchens", "Hospitals", "Schools"], ans: 1 },
                { q: "Anne Frank is a well-known victim of:", options: ["The Tsunami", "The Hurricane", "The Nazi Holocaust", "Apartheid"], ans: 2 }
            ],
            openEnded: [
                "How did Dylan Mahalingam use digital media to help people?",
                "What inspired Katie Stagliano to start vegetable gardens?",
                "Why is Anne Frank's diary famous?"
            ],
            flowChartTopic: "the achievements of child visionaries.",
            flowChartBox1: "Dylan mobilizing 3 million children"
        }
    // You will just keep pasting all future exams in here!
};
