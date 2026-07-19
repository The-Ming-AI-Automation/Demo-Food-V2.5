const MingFoodApp = {


    currentLanguage: "zh",


    currentTheme: "light",


    restaurants: [


        {


            id: "restaurant-a",


            name: {

                zh: "老街胡椒猪肚汤",

                en: "Old Street Pepper Soup",

                bm: "Sup Lada Jalan Lama"

            },


            location: {

                zh: "怡保 · 旧街场",

                en: "Ipoh · Old Town",

                bm: "Ipoh · Old Town"

            },


            image: "images/featured-ramen.jpg",


            tag: {

                zh: "最适合你的情况",

                en: "BEST MATCH FOR YOU",

                bm: "PALING SESUAI UNTUK ANDA"

            },


            score: 86,


            verdict: {

                zh: "如果你想吃热乎乎的东西，而且希望一家人都吃得舒服，我会优先考虑这里。",

                en: "If you want something comforting and want the whole family to eat comfortably, this would be one of my first choices.",

                bm: "Kalau anda mahukan makanan yang panas dan selesa untuk seisi keluarga, ini antara pilihan pertama saya."

            },


            positives: {

                zh: [

                    "汤底和招牌菜经常被顾客称赞",

                    "适合一家人一起吃",

                    "整体价格相对合理"

                ],

                en: [

                    "Signature dishes are frequently praised",

                    "Suitable for family dining",

                    "Generally reasonable value"

                ],

                bm: [

                    "Hidangan istimewa sering dipuji",

                    "Sesuai untuk makan bersama keluarga",

                    "Nilai keseluruhan agak berpatutan"

                ]

            },


            negatives: {

                zh: [

                    "晚餐高峰期可能需要等待",

                    "周末停车比较困难"

                ],

                en: [

                    "Waiting times may increase during dinner peak hours",

                    "Parking can be difficult on weekends"

                ],

                bm: [

                    "Masa menunggu mungkin lebih lama waktu makan malam",

                    "Parking boleh menjadi sukar pada hujung minggu"

                ]

            },


            practical: {

                hours: "11:00 – 22:00",

                lastOrder: "21:15",


                parking: {

                    zh: "中等难度",

                    en: "Moderate difficulty",

                    bm: "Kesukaran sederhana"

                },


                bestTime: {

                    zh: "建议 17:30 前到达",

                    en: "Arrive before 5:30 PM",

                    bm: "Datang sebelum 5:30 petang"

                }

            },


            creatorStatus: {

                zh: "3 位创作者曾经介绍过",

                en: "Covered by 3 creators",

                bm: "Pernah diliputi oleh 3 pencipta kandungan"

            }

        },


        {


            id: "restaurant-b",


            name: {

                zh: "南方炭烧鸡饭",

                en: "Southern Charcoal Chicken Rice",

                bm: "Nasi Ayam Arang Selatan"

            },


            location: {

                zh: "怡保 · 市中心",

                en: "Ipoh · City Centre",

                bm: "Ipoh · Pusat Bandar"

            },


            image: "images/featured-ramen.jpg",


            tag: {

                zh: "食物评价最高",

                en: "BEST FOOD CONSENSUS",

                bm: "KONSENSUS MAKANAN TERBAIK"

            },


            score: 91,


            verdict: {

                zh: "食物本身可能是这几家里面最强的，但停车和等待时间是你需要考虑的问题。",

                en: "The food may be the strongest of the group, but parking and waiting time are the main trade-offs.",

                bm: "Makanannya mungkin yang terbaik dalam senarai ini, tetapi parking dan masa menunggu perlu dipertimbangkan."

            },


            positives: {

                zh: [

                    "鸡肉和招牌酱料评价非常稳定",

                    "许多顾客认为味道值得专程前往",

                    "价格相对亲民"

                ],

                en: [

                    "Chicken and signature sauce receive consistently strong praise",

                    "Many customers consider it worth travelling for",

                    "Generally affordable"

                ],

                bm: [

                    "Ayam dan sos istimewa menerima pujian konsisten",

                    "Ramai pelanggan rasa berbaloi untuk datang khas",

                    "Harga secara umum berpatutan"

                ]

            },


            negatives: {

                zh: [

                    "高峰期排队问题较明显",

                    "附近停车位有限"

                ],

                en: [

                    "Queues are more noticeable during peak periods",

                    "Limited parking nearby"

                ],

                bm: [

                    "Beratur lebih ketara pada waktu puncak",

                    "Tempat parking berdekatan terhad"

                ]

            },


            practical: {

                hours: "10:30 – 21:30",

                lastOrder: "20:45",


                parking: {

                    zh: "困难",

                    en: "Difficult",

                    bm: "Sukar"

                },


                bestTime: {

                    zh: "避开 12:00 – 14:00",

                    en: "Avoid 12:00 – 2:00 PM",

                    bm: "Elakkan 12:00 – 2:00 petang"

                }

            },


            creatorStatus: {

                zh: "5 位创作者曾经介绍过",

                en: "Covered by 5 creators",

                bm: "Pernah diliputi oleh 5 pencipta kandungan"

            }

        },


        {


            id: "restaurant-c",


            name: {

                zh: "阿姨家常面馆",

                en: "Auntie's Home Noodles",

                bm: "Mi Homemade Auntie"

            },


            location: {

                zh: "怡保 · 新城区",

                en: "Ipoh · New Town",

                bm: "Ipoh · New Town"

            },


            image: "images/featured-ramen.jpg",


            tag: {

                zh: "最划算",

                en: "BEST VALUE",

                bm: "NILAI TERBAIK"

            },


            score: 79,


            verdict: {

                zh: "如果你的预算有限，这里可能是最安全的选择，但食物质量的评价没有前两家那么一致。",

                en: "If budget is your priority, this may be the safest choice, although food consistency is more mixed.",

                bm: "Jika bajet ialah keutamaan anda, ini mungkin pilihan paling selamat walaupun konsistensi makanan agak bercampur."

            },


            positives: {

                zh: [

                    "价格非常亲民",

                    "份量整体令人满意",

                    "适合简单快速用餐"

                ],

                en: [

                    "Very affordable",

                    "Portions are generally satisfying",

                    "Good for a simple meal"

                ],

                bm: [

                    "Sangat berpatutan",

                    "Hidangan secara umum memuaskan",

                    "Sesuai untuk makan ringkas"

                ]

            },


            negatives: {

                zh: [

                    "不同日期的食物质量可能有差异",

                    "整体体验比较简单"

                ],

                en: [

                    "Food consistency can vary",

                    "The overall experience is fairly basic"

                ],

                bm: [

                    "Konsistensi makanan boleh berubah",

                    "Pengalaman keseluruhan agak ringkas"

                ]

            },


            practical: {

                hours: "09:00 – 20:30",

                lastOrder: "20:00",


                parking: {

                    zh: "相对容易",

                    en: "Relatively easy",

                    bm: "Agak mudah"

                },


                bestTime: {

                    zh: "午餐前或下午",

                    en: "Before lunch or in the afternoon",

                    bm: "Sebelum makan tengah hari atau waktu petang"

                }

            },


            creatorStatus: {

                zh: "1 位创作者曾经介绍过",

                en: "Covered by 1 creator",

                bm: "Pernah diliputi oleh 1 pencipta kandungan"

            }

        }

    ],


    translations: {


        zh: {


            navDiscover: "发现美食",

            navHow: "如何运作",

            navTrust: "真实评价",


            eyebrow: "马来西亚本地美食智能",


            heroLineOne: "Discover",

            heroLineTwo: "food you love.",


            heroDescription: "不只是评分。Ming 帮你了解一家餐厅真正值不值得去。",


            heroButton: "开始探索",

            heroSecondary: "了解 Ming",


            heroCardText: "不只是好吃。真正值得去。",


            featuredTag: "MING'S PICK",

            featuredTitle: "今天，吃点好的。",

            featuredDescription: "根据真实评价、你的喜好和当地情况。",


            assistantEyebrow: "ASK MING",

            assistantTitle: "今天想吃什么？",

            assistantDescription: "告诉 Ming 你真正想要的。我们不只是给你一个评分。",


            inputHint: "Ming 会分析你的情况",

            askMing: "问 Ming",


            quickLabel: "或者告诉 Ming：",


            chipSpicy: "辣一点",

            chipComfort: "热乎乎的",

            chipBudget: "便宜一点",

            chipFamily: "适合一家人",

            chipParking: "停车方便",


            emptyResultsTitle: "Your next meal starts here.",

            emptyResultsText: "告诉 Ming 你想吃什么，我们从那里开始调查。",


            resultsEyebrow: "MING'S RECOMMENDATION",

            resultsTitle: "我觉得你应该看看这些。",

            resultSummary: "不是简单按照评分排序，而是根据你的情况。",

            resetButton: "重新开始",


            trustEyebrow: "BEYOND THE RATING",

            trustTitle: "不只是看评分。",

            trustDescription: "Ming 帮你了解一家餐厅真正的样子。",


            trustCardOneTitle: "Review Consensus",

            trustCardOneText: "AI 阅读多个评价，找出大家真正反复提到的优点和问题。",


            trustCardTwoTitle: "Creator Coverage",

            trustCardTwoText: "看看哪些创作者去过，以及是否公开了付费或赠送餐食。",


            trustCardThreeTitle: "Local Intelligence",

            trustCardThreeText: "停车、拥挤时间、最后点餐时间，以及真正实用的本地建议。",


            howEyebrow: "HOW MING THINKS",

            howTitle: "From craving to confidence.",


            stepOneTitle: "Tell Ming",

            stepOneText: "告诉 Ming 你的心情、预算、地点和你真正想吃的东西。",


            stepTwoTitle: "Ming investigates",

            stepTwoText: "分析评价、常见优缺点、创作者内容和本地实用信息。",


            stepThreeTitle: "You decide",

            stepThreeText: "不再盲目跟风。你知道为什么值得去，或者为什么应该避开。",


            footerText: "Don't just read the rating. Ask Ming.",

            footerDisclaimer: "Built for better food decisions in Malaysia."

        },


        en: {


            navDiscover: "Discover",

            navHow: "How it works",

            navTrust: "Real opinions",


            eyebrow: "LOCAL FOOD INTELLIGENCE FOR MALAYSIA",


            heroLineOne: "Discover",

            heroLineTwo: "food you love.",


            heroDescription: "Not just ratings. Ming helps you understand whether a restaurant is actually worth going to.",


            heroButton: "Start exploring",

            heroSecondary: "How Ming works",


            heroCardText: "Not just good food. Actually worth going.",


            featuredTag: "MING'S PICK",

            featuredTitle: "Eat something good today.",

            featuredDescription: "Based on real opinions, your preferences and local context.",


            assistantEyebrow: "ASK MING",

            assistantTitle: "What do you feel like eating?",

            assistantDescription: "Tell Ming what you actually want. We do more than show you a rating.",


            inputHint: "Ming will understand your situation",

            askMing: "Ask Ming",


            quickLabel: "Or tell Ming:",


            chipSpicy: "Something spicy",

            chipComfort: "Something comforting",

            chipBudget: "Keep it affordable",

            chipFamily: "Family-friendly",

            chipParking: "Easy parking",


            emptyResultsTitle: "Your next meal starts here.",

            emptyResultsText: "Tell Ming what you feel like eating and we'll investigate from there.",


            resultsEyebrow: "MING'S RECOMMENDATION",

            resultsTitle: "I think you should look at these.",

            resultSummary: "Not simply ranked by rating — matched to your situation.",

            resetButton: "Start over",


            trustEyebrow: "BEYOND THE RATING",

            trustTitle: "More than a rating.",

            trustDescription: "Ming helps you understand what a restaurant is actually like.",


            trustCardOneTitle: "Review Consensus",

            trustCardOneText: "Ming analyses repeated patterns across reviews to find what people consistently love and complain about.",


            trustCardTwoTitle: "Creator Coverage",

            trustCardTwoText: "See which creators have visited and whether paid or complimentary visits were disclosed.",


            trustCardThreeTitle: "Local Intelligence",

            trustCardThreeText: "Parking, peak times, last order times and practical local advice.",


            howEyebrow: "HOW MING THINKS",

            howTitle: "From craving to confidence.",


            stepOneTitle: "Tell Ming",

            stepOneText: "Tell Ming your mood, budget, location and what you actually feel like eating.",


            stepTwoTitle: "Ming investigates",

            stepTwoText: "Ming analyses reviews, repeated pros and cons, creator coverage and local information.",


            stepThreeTitle: "You decide",

            stepThreeText: "Stop blindly following hype. Understand why a place is worth visiting — or why you should skip it.",


            footerText: "Don't just read the rating. Ask Ming.",

            footerDisclaimer: "Built for better food decisions in Malaysia."

        },


        bm: {


            navDiscover: "Terokai",

            navHow: "Cara ia berfungsi",

            navTrust: "Pendapat sebenar",


            eyebrow: "KECERDASAN MAKANAN TEMPATAN MALAYSIA",


            heroLineOne: "Discover",

            heroLineTwo: "food you love.",


            heroDescription: "Bukan sekadar rating. Ming membantu anda memahami sama ada restoran itu benar-benar berbaloi untuk dikunjungi.",


            heroButton: "Mula meneroka",

            heroSecondary: "Cara Ming berfungsi",


            heroCardText: "Bukan sekadar sedap. Betul-betul berbaloi.",


            featuredTag: "MING'S PICK",

            featuredTitle: "Makan sesuatu yang sedap hari ini.",

            featuredDescription: "Berdasarkan pendapat sebenar, pilihan anda dan konteks tempatan.",


            assistantEyebrow: "ASK MING",

            assistantTitle: "Anda rasa nak makan apa?",

            assistantDescription: "Beritahu Ming apa yang anda mahukan. Kami buat lebih daripada sekadar menunjukkan rating.",


            inputHint: "Ming akan memahami situasi anda",

            askMing: "Tanya Ming",


            quickLabel: "Atau beritahu Ming:",


            chipSpicy: "Nak pedas",

            chipComfort: "Makanan panas",

            chipBudget: "Bajet",

            chipFamily: "Sesuai untuk keluarga",

            chipParking: "Parking mudah",


            emptyResultsTitle: "Your next meal starts here.",

            emptyResultsText: "Beritahu Ming apa yang anda mahu makan dan kami akan menyiasat dari situ.",


            resultsEyebrow: "CADANGAN MING",

            resultsTitle: "Saya rasa anda patut tengok yang ini.",

            resultSummary: "Bukan sekadar berdasarkan rating — disesuaikan dengan situasi anda.",

            resetButton: "Mula semula",


            trustEyebrow: "LEBIH DARIPADA RATING",

            trustTitle: "Bukan sekadar rating.",

            trustDescription: "Ming membantu anda memahami keadaan sebenar sesebuah restoran.",


            trustCardOneTitle: "Review Consensus",

            trustCardOneText: "Ming menganalisis corak berulang dalam review untuk mengetahui perkara yang selalu dipuji dan dikritik.",


            trustCardTwoTitle: "Creator Coverage",

            trustCardTwoText: "Lihat pencipta kandungan yang pernah datang dan sama ada lawatan berbayar atau makanan percuma didedahkan.",


            trustCardThreeTitle: "Local Intelligence",

            trustCardThreeText: "Parking, waktu sibuk, waktu pesanan terakhir dan nasihat tempatan yang praktikal.",


            howEyebrow: "CARA MING BERFIKIR",

            howTitle: "From craving to confidence.",


            stepOneTitle: "Tell Ming",

            stepOneText: "Beritahu Ming mood, bajet, lokasi dan apa yang anda sebenarnya mahu makan.",


            stepTwoTitle: "Ming investigates",

            stepTwoText: "Ming menganalisis review, kelebihan dan masalah berulang, kandungan pencipta serta maklumat tempatan.",


            stepThreeTitle: "You decide",

            stepThreeText: "Jangan ikut hype secara membuta tuli. Fahami kenapa sesuatu tempat berbaloi — atau patut dielakkan.",


            footerText: "Don't just read the rating. Ask Ming.",

            footerDisclaimer: "Built for better food decisions in Malaysia."

        }

    },


    init() {


        this.bindEvents();


        this.loadTheme();


        this.applyLanguage();


    },


    bindEvents() {


        document
            .getElementById("themeToggle")
            .addEventListener(
                "click",
                () => this.toggleTheme()
            );


        document
            .getElementById("languageToggle")
            .addEventListener(
                "click",
                () => this.cycleLanguage()
            );


        document
            .getElementById("askMingButton")
            .addEventListener(
                "click",
                () => this.askMing()
            );


        document
            .getElementById("resetButton")
            .addEventListener(
                "click",
                () => this.reset()
            );


        document
            .getElementById("modalClose")
            .addEventListener(
                "click",
                () => this.closeModal()
            );


        document
            .getElementById("restaurantModal")
            .addEventListener(
                "click",
                (event) => {


                    if (
                        event.target.id === "restaurantModal"
                    ) {


                        this.closeModal();


                    }


                }
            );


        document
            .querySelectorAll(".preference-chip")
            .forEach(
                (chip) => {


                    chip.addEventListener(
                        "click",
                        () => {


                            chip.classList.toggle(
                                "active"
                            );


                            const preference =
                                chip.dataset.preference;


                            const messages = {


                                spicy:
                                    "我想吃辣一点。",


                                comfort:
                                    "我想吃热乎乎、舒服一点的东西。",


                                budget:
                                    "预算不要太高。",


                                family:
                                    "最好适合一家人一起吃。",


                                parking:
                                    "停车方便一点很重要。"


                            };


                            const input =
                                document.getElementById(
                                    "foodInput"
                                );


                            const current =
                                input.value.trim();


                            input.value =
                                current
                                    ? `${current} ${messages[preference]}`
                                    : messages[preference];


                        }
                    );


                }
            );


        document
            .getElementById("foodInput")
            .addEventListener(
                "keydown",
                (event) => {


                    if (
                        (event.metaKey || event.ctrlKey)
                        &&
                        event.key === "Enter"
                    ) {


                        this.askMing();


                    }


                }
            );

    },


    askMing() {


        const input =
            document
                .getElementById("foodInput")
                .value
                .trim();


        if (!input) {


            this.showInputMessage();


            return;


        }


        const resultsSection =
            document.getElementById(
                "resultsSection"
            );


        const resultSummary =
            document.getElementById(
                "resultSummary"
            );


        resultSummary.textContent =
            this.getResultSummary(
                input
            );


        this.renderRestaurants();


        resultsSection.classList.add(
            "has-results"
        );


        setTimeout(
            () => {


                resultsSection.scrollIntoView(
                    {

                        behavior: "smooth",

                        block: "start"

                    }
                );


            },
            100
        );

    },


    getResultSummary(input) {


        const language =
            this.currentLanguage;


        if (
            language === "zh"
        ) {


            return `我根据你的情况分析了这次需求：「${input}」`;


        }


        if (
            language === "bm"
        ) {


            return `Saya menganalisis keperluan anda: “${input}”`;


        }


        return `I analysed what you are looking for: “${input}”`;

    },


    renderRestaurants() {


        const grid =
            document.getElementById(
                "restaurantGrid"
            );


        const language =
            this.currentLanguage;


        grid.innerHTML =
            this.restaurants
                .map(
                    (restaurant) => {


                        return `


                            <article
                                class="restaurant-card"
                            >


                                <div
                                    class="restaurant-card-image"
                                >


                                    <img
                                        src="${restaurant.image}"
                                        alt="${restaurant.name[language]}"
                                        loading="lazy"
                                    >


                                </div>


                                <div
                                    class="restaurant-card-content"
                                >


                                    <span
                                        class="restaurant-tag"
                                    >

                                        ${restaurant.tag[language]}

                                    </span>


                                    <h3>

                                        ${restaurant.name[language]}

                                    </h3>


                                    <div
                                        class="restaurant-location"
                                    >

                                        ${restaurant.location[language]}

                                    </div>


                                    <div
                                        class="restaurant-score-row"
                                    >


                                        <div>


                                            <div
                                                class="score-number"
                                            >

                                                ${restaurant.score}

                                            </div>


                                            <div
                                                class="score-label"
                                            >

                                                MING SCORE

                                            </div>


                                        </div>


                                        <div>


                                            <span
                                                class="status-dot"
                                            ></span>


                                            <span
                                                class="score-label"
                                            >

                                                ${language === "zh"
                                                    ? "综合判断"
                                                    : language === "bm"
                                                        ? "Analisis keseluruhan"
                                                        : "Overall analysis"}

                                            </span>


                                        </div>


                                    </div>


                                    <p
                                        class="restaurant-insight"
                                    >

                                        ${restaurant.verdict[language]}

                                    </p>


                                    <button
                                        class="restaurant-card-button"
                                        onclick="MingFoodApp.openRestaurant('${restaurant.id}')"
                                    >

                                        ${language === "zh"
                                            ? "查看 Ming 分析 →"
                                            : language === "bm"
                                                ? "Lihat analisis Ming →"
                                                : "View Ming's analysis →"}

                                    </button>


                                </div>


                            </article>


                        `;


                    }
                )
                .join("");

    },


    openRestaurant(id) {


        const restaurant =
            this.restaurants.find(
                (item) =>
                    item.id === id
            );


        if (!restaurant) {


            return;


        }


        const language =
            this.currentLanguage;


        const positives =
            restaurant.positives[language]
                .map(
                    (item) =>
                        `<li>${item}</li>`
                )
                .join("");


        const negatives =
            restaurant.negatives[language]
                .map(
                    (item) =>
                        `<li>${item}</li>`
                )
                .join("");


        const content =
            document.getElementById(
                "modalContent"
            );


        content.innerHTML = `


            <h2
                class="modal-title"
            >

                ${restaurant.name[language]}

            </h2>


            <div
                class="modal-location"
            >

                ${restaurant.location[language]}

            </div>


            <div
                class="modal-verdict"
            >


                <div
                    class="modal-verdict-label"
                >

                    MING'S HONEST TAKE

                </div>


                <h3>


                    ${language === "zh"
                        ? "值得考虑"
                        : language === "bm"
                            ? "Berbaloi dipertimbangkan"
                            : "Worth considering"}


                </h3>


                <p>

                    ${restaurant.verdict[language]}

                </p>


            </div>


            <div
                class="modal-section"
            >


                <h4>


                    ${language === "zh"
                        ? "👍 大家常常喜欢"
                        : language === "bm"
                            ? "👍 Perkara yang sering dipuji"
                            : "👍 What people consistently like"}


                </h4>


                <ul
                    class="modal-list"
                >

                    ${positives}

                </ul>


            </div>


            <div
                class="modal-section"
            >


                <h4>


                    ${language === "zh"
                        ? "👎 常见问题"
                        : language === "bm"
                            ? "👎 Aduan biasa"
                            : "👎 Common complaints"}


                </h4>


                <ul
                    class="modal-list"
                >

                    ${negatives}

                </ul>


            </div>


            <div
                class="modal-section"
            >


                <h4>


                    ${language === "zh"
                        ? "📍 本地实用信息"
                        : language === "bm"
                            ? "📍 Maklumat tempatan"
                            : "📍 Local intelligence"}


                </h4>


                <div
                    class="info-grid"
                >


                    <div
                        class="info-item"
                    >

                        <span>

                            ${language === "zh"
                                ? "营业时间"
                                : language === "bm"
                                    ? "Waktu operasi"
                                    : "Opening hours"}

                        </span>


                        <strong>

                            ${restaurant.practical.hours}

                        </strong>

                    </div>


                    <div
                        class="info-item"
                    >

                        <span>

                            ${language === "zh"
                                ? "最后点餐"
                                : language === "bm"
                                    ? "Pesanan terakhir"
                                    : "Last order"}

                        </span>


                        <strong>

                            ${restaurant.practical.lastOrder}

                        </strong>

                    </div>


                    <div
                        class="info-item"
                    >

                        <span>

                            ${language === "zh"
                                ? "停车难度"
                                : language === "bm"
                                    ? "Kesukaran parking"
                                    : "Parking difficulty"}

                        </span>


                        <strong>

                            ${restaurant.practical.parking[language]}

                        </strong>

                    </div>


                    <div
                        class="info-item"
                    >

                        <span>

                            ${language === "zh"
                                ? "建议时间"
                                : language === "bm"
                                    ? "Masa terbaik"
                                    : "Best time to visit"}

                        </span>


                        <strong>

                            ${restaurant.practical.bestTime[language]}

                        </strong>

                    </div>


                </div>


            </div>


            <div
                class="modal-section"
            >


                <h4>

                    🎥

                    ${language === "zh"
                        ? "创作者覆盖"
                        : language === "bm"
                            ? "Liputan pencipta"
                            : "Creator coverage"}

                </h4>


                <p>

                    ${restaurant.creatorStatus[language]}

                </p>


            </div>


        `;


        document
            .getElementById(
                "restaurantModal"
            )
            .classList.add(
                "visible"
            );


        document.body.style.overflow =
            "hidden";

    },


    closeModal() {


        document
            .getElementById(
                "restaurantModal"
            )
            .classList.remove(
                "visible"
            );


        document.body.style.overflow =
            "";

    },


    reset() {


        document
            .getElementById(
                "foodInput"
            )
            .value =
            "";


        document
            .getElementById(
                "resultsSection"
            )
            .classList.remove(
                "has-results"
            );


        document
            .querySelectorAll(
                ".preference-chip"
            )
            .forEach(
                (chip) => {


                    chip.classList.remove(
                        "active"
                    );


                }
            );


        document
            .getElementById(
                "food-assistant"
            )
            .scrollIntoView(
                {

                    behavior: "smooth"

                }
            );

    },


    showInputMessage() {


        const input =
            document.getElementById(
                "foodInput"
            );


        input.focus();


        input.style.boxShadow =
            "0 0 0 2px var(--accent)";


        setTimeout(
            () => {


                input.style.boxShadow =
                    "";


            },
            1000
        );

    },


    cycleLanguage() {


        const languages =
            [

                "zh",

                "en",

                "bm"

            ];


        const currentIndex =
            languages.indexOf(
                this.currentLanguage
            );


        const nextIndex =
            (
                currentIndex + 1
            )
            %
            languages.length;


        this.currentLanguage =
            languages[nextIndex];


        this.applyLanguage();


        if (
            document
                .getElementById(
                    "resultsSection"
                )
                .classList
                .contains(
                    "has-results"
                )
        ) {


            this.renderRestaurants();


        }

    },


    applyLanguage() {


        const language =
            this.currentLanguage;


        const dictionary =
            this.translations[
                language
            ];


        document
            .querySelectorAll(
                "[data-i18n]"
            )
            .forEach(
                (element) => {


                    const key =
                        element.dataset.i18n;


                    if (
                        dictionary[key]
                    ) {


                        element.textContent =
                            dictionary[key];


                    }


                }
            );


        const input =
            document.getElementById(
                "foodInput"
            );


        if (
            language === "zh"
        ) {


            input.placeholder =
                input.dataset.placeholderZh;


        }


        if (
            language === "en"
        ) {


            input.placeholder =
                input.dataset.placeholderEn;


        }


        if (
            language === "bm"
        ) {


            input.placeholder =
                input.dataset.placeholderBm;


        }


        const languageToggle =
            document.getElementById(
                "languageToggle"
            );


        const labels = {


            zh: "中文",

            en: "EN",

            bm: "BM"


        };


        languageToggle
            .querySelector(
                ".language-active"
            )
            .textContent =
            labels[language];


    },


    toggleTheme() {


        document
            .body
            .classList
            .toggle(
                "dark-mode"
            );


        const isDark =
            document
                .body
                .classList
                .contains(
                    "dark-mode"
                );


        this.currentTheme =
            isDark
                ? "dark"
                : "light";


        localStorage.setItem(
            "mingTheme",
            this.currentTheme
        );


        document
            .querySelector(
                ".theme-icon"
            )
            .textContent =
            isDark
                ? "☀"
                : "☾";

    },


    loadTheme() {


        const savedTheme =
            localStorage.getItem(
                "mingTheme"
            );


        if (
            savedTheme === "dark"
        ) {


            document
                .body
                .classList
                .add(
                    "dark-mode"
                );


            this.currentTheme =
                "dark";


            document
                .querySelector(
                    ".theme-icon"
                )
                .textContent =
                "☀";


        }


        else {


            document
                .body
                .classList
                .remove(
                    "dark-mode"
                );


            this.currentTheme =
                "light";


            document
                .querySelector(
                    ".theme-icon"
                )
                .textContent =
                "☾";


        }

    }

};


document.addEventListener(
    "DOMContentLoaded",
    () => {


        MingFoodApp.init();


    }
);
