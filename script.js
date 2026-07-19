/* =========================================================
MING AI FOOD
REAL SUPABASE DATABASE CONNECTION
========================================================= */

/* =========================
SUPABASE CONFIGURATION
========================= */

const SUPABASE_URL =
"https://njbfenzwvocqgnseivje.supabase.co";

const SUPABASE_KEY =
"sb_publishable_1wisnEH7RnLI7iMwIke45g_9l7LoUSM";

const supabaseClient =
window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

/* =========================
MING FOOD APP
========================= */

const MingFoodApp = {


currentLanguage: "zh",

currentTheme: "light",

restaurants: [],

lastSearch: "",


/* =========================
TRANSLATIONS
========================= */

translations: {

    zh: {

        navDiscover: "发现美食",

        navHow: "如何运作",

        navTrust: "真实评价",

        eyebrow: "马来西亚本地美食智能",

        heroLineOne: "Discover",

        heroLineTwo: "food you love.",

        heroDescription:
            "不只是评分。Ming 帮你了解一家餐厅真正值不值得去。",

        heroButton: "开始探索",

        heroSecondary: "了解 Ming",

        heroCardText:
            "不只是好吃。真正值得去。",

        featuredTag:
            "MING'S PICK",

        featuredTitle:
            "今天，吃点好的。",

        featuredDescription:
            "根据真实评价、你的喜好和当地情况。",

        assistantEyebrow:
            "ASK MING",

        assistantTitle:
            "今天想吃什么？",

        assistantDescription:
            "告诉 Ming 你真正想要的。我们不只是给你一个评分。",

        inputHint:
            "Ming 会分析你的情况",

        askMing:
            "问 Ming",

        quickLabel:
            "或者告诉 Ming：",

        chipSpicy:
            "辣一点",

        chipComfort:
            "热乎乎的",

        chipBudget:
            "便宜一点",

        chipFamily:
            "适合一家人",

        chipParking:
            "停车方便",

        emptyResultsTitle:
            "Your next meal starts here.",

        emptyResultsText:
            "告诉 Ming 你想吃什么，我们从那里开始调查。",

        resultsEyebrow:
            "MING'S RECOMMENDATION",

        resultsTitle:
            "我觉得你应该看看这些。",

        resultSummary:
            "不是简单按照评分排序，而是根据你的情况。",

        resetButton:
            "重新开始",

        trustEyebrow:
            "BEYOND THE RATING",

        trustTitle:
            "不只是看评分。",

        trustDescription:
            "Ming 帮你了解一家餐厅真正的样子。",

        trustCardOneTitle:
            "Review Consensus",

        trustCardOneText:
            "AI 阅读多个评价，找出大家真正反复提到的优点和问题。",

        trustCardTwoTitle:
            "Creator Coverage",

        trustCardTwoText:
            "看看哪些创作者去过，以及是否公开了付费或赠送餐食。",

        trustCardThreeTitle:
            "Local Intelligence",

        trustCardThreeText:
            "停车、拥挤时间、最后点餐时间，以及真正实用的本地建议。",

        howEyebrow:
            "HOW MING THINKS",

        howTitle:
            "From craving to confidence.",

        stepOneTitle:
            "Tell Ming",

        stepOneText:
            "告诉 Ming 你的心情、预算、地点和你真正想吃的东西。",

        stepTwoTitle:
            "Ming investigates",

        stepTwoText:
            "分析评价、常见优缺点、创作者内容和本地实用信息。",

        stepThreeTitle:
            "You decide",

        stepThreeText:
            "不再盲目跟风。你知道为什么值得去，或者为什么应该避开。",

        footerText:
            "Don't just read the rating. Ask Ming.",

        footerDisclaimer:
            "Built for better food decisions in Malaysia."

    },


    en: {

        navDiscover:
            "Discover",

        navHow:
            "How it works",

        navTrust:
            "Real opinions",

        eyebrow:
            "LOCAL FOOD INTELLIGENCE FOR MALAYSIA",

        heroLineOne:
            "Discover",

        heroLineTwo:
            "food you love.",

        heroDescription:
            "Not just ratings. Ming helps you understand whether a restaurant is actually worth going to.",

        heroButton:
            "Start exploring",

        heroSecondary:
            "How Ming works",

        heroCardText:
            "Not just good food. Actually worth going.",

        featuredTag:
            "MING'S PICK",

        featuredTitle:
            "Eat something good today.",

        featuredDescription:
            "Based on real opinions, your preferences and local context.",

        assistantEyebrow:
            "ASK MING",

        assistantTitle:
            "What do you feel like eating?",

        assistantDescription:
            "Tell Ming what you actually want. We do more than show you a rating.",

        inputHint:
            "Ming will understand your situation",

        askMing:
            "Ask Ming",

        quickLabel:
            "Or tell Ming:",

        chipSpicy:
            "Something spicy",

        chipComfort:
            "Something comforting",

        chipBudget:
            "Keep it affordable",

        chipFamily:
            "Family-friendly",

        chipParking:
            "Easy parking",

        emptyResultsTitle:
            "Your next meal starts here.",

        emptyResultsText:
            "Tell Ming what you feel like eating and we'll investigate from there.",

        resultsEyebrow:
            "MING'S RECOMMENDATION",

        resultsTitle:
            "I think you should look at these.",

        resultSummary:
            "Not simply ranked by rating — matched to your situation.",

        resetButton:
            "Start over",

        trustEyebrow:
            "BEYOND THE RATING",

        trustTitle:
            "More than a rating.",

        trustDescription:
            "Ming helps you understand what a restaurant is actually like.",

        trustCardOneTitle:
            "Review Consensus",

        trustCardOneText:
            "Ming analyses repeated patterns across reviews to find what people consistently love and complain about.",

        trustCardTwoTitle:
            "Creator Coverage",

        trustCardTwoText:
            "See which creators have visited and whether paid or complimentary visits were disclosed.",

        trustCardThreeTitle:
            "Local Intelligence",

        trustCardThreeText:
            "Parking, peak times, last order times and practical local advice.",

        howEyebrow:
            "HOW MING THINKS",

        howTitle:
            "From craving to confidence.",

        stepOneTitle:
            "Tell Ming",

        stepOneText:
            "Tell Ming your mood, budget, location and what you actually feel like eating.",

        stepTwoTitle:
            "Ming investigates",

        stepTwoText:
            "Ming analyses reviews, repeated pros and cons, creator coverage and local information.",

        stepThreeTitle:
            "You decide",

        stepThreeText:
            "Stop blindly following hype. Understand why a place is worth visiting — or why you should skip it.",

        footerText:
            "Don't just read the rating. Ask Ming.",

        footerDisclaimer:
            "Built for better food decisions in Malaysia."

    },


    bm: {

        navDiscover:
            "Terokai",

        navHow:
            "Cara ia berfungsi",

        navTrust:
            "Pendapat sebenar",

        eyebrow:
            "KECERDASAN MAKANAN TEMPATAN MALAYSIA",

        heroLineOne:
            "Discover",

        heroLineTwo:
            "food you love.",

        heroDescription:
            "Bukan sekadar rating. Ming membantu anda memahami sama ada restoran itu benar-benar berbaloi untuk dikunjungi.",

        heroButton:
            "Mula meneroka",

        heroSecondary:
            "Cara Ming berfungsi",

        heroCardText:
            "Bukan sekadar sedap. Betul-betul berbaloi.",

        featuredTag:
            "MING'S PICK",

        featuredTitle:
            "Makan sesuatu yang sedap hari ini.",

        featuredDescription:
            "Berdasarkan pendapat sebenar, pilihan anda dan konteks tempatan.",

        assistantEyebrow:
            "ASK MING",

        assistantTitle:
            "Anda rasa nak makan apa?",

        assistantDescription:
            "Beritahu Ming apa yang anda mahukan. Kami buat lebih daripada sekadar menunjukkan rating.",

        inputHint:
            "Ming akan memahami situasi anda",

        askMing:
            "Tanya Ming",

        quickLabel:
            "Atau beritahu Ming:",

        chipSpicy:
            "Nak pedas",

        chipComfort:
            "Makanan panas",

        chipBudget:
            "Bajet",

        chipFamily:
            "Sesuai untuk keluarga",

        chipParking:
            "Parking mudah",

        emptyResultsTitle:
            "Your next meal starts here.",

        emptyResultsText:
            "Beritahu Ming apa yang anda mahu makan dan kami akan menyiasat dari situ.",

        resultsEyebrow:
            "CADANGAN MING",

        resultsTitle:
            "Saya rasa anda patut tengok yang ini.",

        resultSummary:
            "Bukan sekadar berdasarkan rating — disesuaikan dengan situasi anda.",

        resetButton:
            "Mula semula",

        trustEyebrow:
            "LEBIH DARIPADA RATING",

        trustTitle:
            "Bukan sekadar rating.",

        trustDescription:
            "Ming membantu anda memahami keadaan sebenar sesebuah restoran.",

        trustCardOneTitle:
            "Review Consensus",

        trustCardOneText:
            "Ming menganalisis corak berulang dalam review untuk mengetahui perkara yang selalu dipuji dan dikritik.",

        trustCardTwoTitle:
            "Creator Coverage",

        trustCardTwoText:
            "Lihat pencipta kandungan yang pernah datang dan sama ada lawatan berbayar atau makanan percuma didedahkan.",

        trustCardThreeTitle:
            "Local Intelligence",

        trustCardThreeText:
            "Parking, waktu sibuk, waktu pesanan terakhir dan nasihat tempatan yang praktikal.",

        howEyebrow:
            "CARA MING BERFIKIR",

        howTitle:
            "From craving to confidence.",

        stepOneTitle:
            "Tell Ming",

        stepOneText:
            "Beritahu Ming mood, bajet, lokasi dan apa yang anda sebenarnya mahu makan.",

        stepTwoTitle:
            "Ming investigates",

        stepTwoText:
            "Ming menganalisis review, kelebihan dan masalah berulang, kandungan pencipta serta maklumat tempatan.",

        stepThreeTitle:
            "You decide",

        stepThreeText:
            "Jangan ikut hype secara membuta tuli. Fahami kenapa sesuatu tempat berbaloi — atau patut dielakkan.",

        footerText:
            "Don't just read the rating. Ask Ming.",

        footerDisclaimer:
            "Built for better food decisions in Malaysia."

    }

},


/* =========================
INITIALIZATION
========================= */

async init() {

    this.bindEvents();

    this.loadTheme();

    this.applyLanguage();

    console.log(
        "Ming AI Food loaded."
    );

    await this.testDatabaseConnection();

},


/* =========================
DATABASE TEST
========================= */

async testDatabaseConnection() {

    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from("restaurants")
                .select("*")
                .limit(1);


        if (error) {

            console.error(
                "Supabase connection error:",
                error
            );

            return;

        }


        console.log(
            "Supabase connected successfully.",
            data
        );

    }

    catch (error) {

        console.error(
            "Unexpected Supabase error:",
            error
        );

    }

},


/* =========================
EVENT BINDINGS
========================= */

bindEvents() {

    const themeToggle =
        document.getElementById(
            "themeToggle"
        );


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => this.toggleTheme()
        );

    }


    const languageToggle =
        document.getElementById(
            "languageToggle"
        );


    if (languageToggle) {

        languageToggle.addEventListener(
            "click",
            () => this.cycleLanguage()
        );

    }


    const askMingButton =
        document.getElementById(
            "askMingButton"
        );


    if (askMingButton) {

        askMingButton.addEventListener(
            "click",
            () => this.askMing()
        );

    }


    const resetButton =
        document.getElementById(
            "resetButton"
        );


    if (resetButton) {

        resetButton.addEventListener(
            "click",
            () => this.reset()
        );

    }


    const modalClose =
        document.getElementById(
            "modalClose"
        );


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            () => this.closeModal()
        );

    }


    const restaurantModal =
        document.getElementById(
            "restaurantModal"
        );


    if (restaurantModal) {

        restaurantModal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target.id ===
                    "restaurantModal"
                ) {

                    this.closeModal();

                }

            }
        );

    }


    document
        .querySelectorAll(
            ".preference-chip"
        )
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


                        if (!input) {

                            return;

                        }


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


    const foodInput =
        document.getElementById(
            "foodInput"
        );


    if (foodInput) {

        foodInput.addEventListener(
            "keydown",
            (event) => {

                if (
                    (
                        event.metaKey ||
                        event.ctrlKey
                    )
                    &&
                    event.key ===
                    "Enter"
                ) {

                    this.askMing();

                }

            }
        );

    }

},


/* =========================
ASK MING
========================= */

async askMing() {

    const inputElement =
        document.getElementById(
            "foodInput"
        );


    if (!inputElement) {

        console.error(
            "foodInput element not found."
        );

        return;

    }


    const input =
        inputElement.value.trim();


    if (!input) {

        this.showInputMessage();

        return;

    }


    this.lastSearch =
        input;


    const resultsSection =
        document.getElementById(
            "resultsSection"
        );


    const resultSummary =
        document.getElementById(
            "resultSummary"
        );


    if (resultSummary) {

        resultSummary.textContent =
            this.getResultSummary(
                input
            );

    }


    this.showLoading();


    const restaurants =
        await this.searchRestaurants(
            input
        );


    this.restaurants =
        restaurants;


    this.renderRestaurants();


    if (resultsSection) {

        resultsSection.classList.add(
            "has-results"
        );


        setTimeout(
            () => {

                resultsSection.scrollIntoView(
                    {

                        behavior:
                            "smooth",

                        block:
                            "start"

                    }
                );

            },
            100
        );

    }

},


/* =========================
SEARCH SUPABASE
========================= */

async searchRestaurants(
    input
) {

    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from("restaurants")
                .select("*")
                .eq(
                    "status",
                    "approved"
                )
                .limit(100);


        if (error) {

            console.error(
                "Restaurant query failed:",
                error
            );

            return [];

        }


        if (
            !data ||
            data.length === 0
        ) {

            return [];

        }


        const uniqueRestaurants =
            [];


        const seenRestaurants =
            new Set();


        data.forEach(
            restaurant => {

                const uniqueKey =
                    `${restaurant.name}-${restaurant.address}`
                        .toLowerCase();


                if (
                    !seenRestaurants.has(
                        uniqueKey
                    )
                ) {

                    seenRestaurants.add(
                        uniqueKey
                    );


                    uniqueRestaurants.push(
                        restaurant
                    );

                }

            }
        );


        const searchText =
            input
                .toLowerCase()
                .trim();


        let cuisineFilter =
            null;


        if (
            searchText.includes(
                "chinese"
            )
            ||
            searchText.includes(
                "中餐"
            )
            ||
            searchText.includes(
                "华人"
            )
            ||
            searchText.includes(
                "华人料理"
            )
            ||
            searchText.includes(
                "cantonese"
            )
            ||
            searchText.includes(
                "粤菜"
            )
        ) {

            cuisineFilter =
                "chinese";

        }


        else if (
            searchText.includes(
                "indian"
            )
            ||
            searchText.includes(
                "印度"
            )
            ||
            searchText.includes(
                "印度菜"
            )
        ) {

            cuisineFilter =
                "indian";

        }


        else if (
            searchText.includes(
                "malaysian"
            )
            ||
            searchText.includes(
                "malay"
            )
            ||
            searchText.includes(
                "马来"
            )
            ||
            searchText.includes(
                "马来西亚"
            )
            ||
            searchText.includes(
                "melayu"
            )
        ) {

            cuisineFilter =
                "malaysian";

        }


        let filteredRestaurants =
            uniqueRestaurants;


        if (
            cuisineFilter ===
            "chinese"
        ) {

            filteredRestaurants =
                uniqueRestaurants.filter(
                    restaurant => {

                        const cuisine =
                            (
                                restaurant.cuisine
                                ||
                                ""
                            )
                            .toLowerCase();


                        const cuisineZh =
                            (
                                restaurant.cuisine_zh
                                ||
                                ""
                            )
                            .toLowerCase();


                        return (

                            cuisine.includes(
                                "chinese"
                            )

                            ||

                            cuisine.includes(
                                "cantonese"
                            )

                            ||

                            cuisineZh.includes(
                                "中餐"
                            )

                            ||

                            cuisineZh.includes(
                                "粤菜"
                            )

                            ||

                            cuisineZh.includes(
                                "华人"
                            )

                        );

                    }
                );

        }


        else if (
            cuisineFilter ===
            "indian"
        ) {

            filteredRestaurants =
                uniqueRestaurants.filter(
                    restaurant => {

                        const cuisine =
                            (
                                restaurant.cuisine
                                ||
                                ""
                            )
                            .toLowerCase();


                        const cuisineZh =
                            (
                                restaurant.cuisine_zh
                                ||
                                ""
                            )
                            .toLowerCase();


                        return (

                            cuisine.includes(
                                "indian"
                            )

                            ||

                            cuisineZh.includes(
                                "印度"
                            )

                        );

                    }
                );

        }


        else if (
            cuisineFilter ===
            "malaysian"
        ) {

            filteredRestaurants =
                uniqueRestaurants.filter(
                    restaurant => {

                        const cuisine =
                            (
                                restaurant.cuisine
                                ||
                                ""
                            )
                            .toLowerCase();


                        const cuisineZh =
                            (
                                restaurant.cuisine_zh
                                ||
                                ""
                            )
                            .toLowerCase();


                        return (

                            cuisine.includes(
                                "malaysian"
                            )

                            ||

                            cuisine.includes(
                                "malay"
                            )

                            ||

                            cuisineZh.includes(
                                "马来"
                            )

                            ||

                            cuisineZh.includes(
                                "马来西亚"
                            )

                        );

                    }
                );

        }


        const scoredRestaurants =
            filteredRestaurants
                .map(
                    restaurant => {

                        let score =
                            0;


                        const searchableText =
                            Object
                                .values(
                                    restaurant
                                )
                                .filter(
                                    value =>
                                        typeof value ===
                                        "string"
                                )
                                .join(
                                    " "
                                )
                                .toLowerCase();


                        const words =
                            searchText
                                .split(
                                    /\s+/
                                )
                                .filter(
                                    word =>
                                        word.length >
                                        1
                                );


                        words.forEach(
                            word => {

                                if (
                                    searchableText.includes(
                                        word
                                    )
                                ) {

                                    score +=
                                        10;

                                }

                            }
                        );


                        score +=
                            this.calculatePreferenceScore(
                                restaurant,
                                input
                            );


                        score +=
                            (
                                Number(
                                    restaurant.overall_score
                                )
                                ||
                                0
                            )
                            *
                            2;


                        return {

                            restaurant,

                            score

                        };

                    }
                )
                .sort(
                    (
                        a,
                        b
                    ) =>
                        b.score -
                        a.score
                );


        return scoredRestaurants
            .slice(
                0,
                6
            )
            .map(
                item =>
                    this.normalizeRestaurant(
                        item.restaurant
                    )
            );

    }

    catch (error) {

        console.error(
            "Search error:",
            error
        );

        return [];

    }

},


/* =========================
PREFERENCE INTELLIGENCE
========================= */

calculatePreferenceScore(
    restaurant,
    input
) {

    const text =
        input.toLowerCase();


    let score =
        0;


    const parkingDifficulty =
        (
            restaurant.parking_difficulty
            ||
            ""
        ).toLowerCase();


    const parkingNotes =
        (
            restaurant.parking_notes
            ||
            ""
        ).toLowerCase();


    const cuisine =
        (
            restaurant.cuisine
            ||
            ""
        ).toLowerCase();


    const searchableText =
        Object
            .values(
                restaurant
            )
            .filter(
                value =>
                    typeof value ===
                    "string"
            )
            .join(
                " "
            )
            .toLowerCase();


    if (
        text.includes("辣")
        ||
        text.includes("spicy")
        ||
        text.includes("pedas")
    ) {

        if (
            searchableText.includes("spicy")
            ||
            searchableText.includes("辣")
            ||
            searchableText.includes("pedas")
        ) {

            score +=
                20;

        }

    }


    if (
        text.includes("便宜")
        ||
        text.includes("budget")
        ||
        text.includes("cheap")
        ||
        text.includes("affordable")
        ||
        text.includes("bajet")
    ) {

        const priceMax =
            Number(
                restaurant.price_max
            )
            ||
            999;


        if (
            priceMax <= 50
        ) {

            score +=
                30;

        }

    }


    if (
        text.includes("停车")
        ||
        text.includes("parking")
        ||
        text.includes("parking mudah")
    ) {

        if (
            parkingDifficulty.includes("easy")
            ||
            parkingNotes.includes("easy")
            ||
            parkingNotes.includes("structured")
        ) {

            score +=
                30;

        }


        if (
            parkingDifficulty.includes("difficult")
        ) {

            score -=
                20;

        }

    }


    if (
        text.includes("家庭")
        ||
        text.includes("家人")
        ||
        text.includes("family")
        ||
        text.includes("keluarga")
    ) {

        if (
            searchableText.includes("family")
            ||
            searchableText.includes("group")
            ||
            searchableText.includes("家庭")
            ||
            searchableText.includes("keluarga")
        ) {

            score +=
                20;

        }

    }


    if (
        text.includes("chinese")
        ||
        text.includes("中餐")
        ||
        text.includes("华人")
        ||
        text.includes("cantonese")
        ||
        text.includes("粤菜")
    ) {

        if (
            cuisine.includes("chinese")
            ||
            cuisine.includes("cantonese")
        ) {

            score +=
                30;

        }

    }


    if (
        text.includes("indian")
        ||
        text.includes("印度")
    ) {

        if (
            cuisine.includes("indian")
        ) {

            score +=
                30;

        }

    }


    if (
        text.includes("malay")
        ||
        text.includes("马来")
        ||
        text.includes("melayu")
    ) {

        if (
            cuisine.includes("malaysian")
            ||
            cuisine.includes("malay")
        ) {

            score +=
                30;

        }

    }


    return score;

},


/* =========================
NORMALIZE DATABASE DATA
========================= */

normalizeRestaurant(
    restaurant
) {

    const nameZh =
        restaurant.name_zh
        ||
        restaurant.name;


    const nameEn =
        restaurant.name
        ||
        restaurant.name_zh;


    const nameBm =
        restaurant.name
        ||
        restaurant.name_zh;


    const city =
        restaurant.city
        ||
        "Malaysia";


    const cuisine =
        restaurant.cuisine
        ||
        "Local Food";


    const score =
        Number(
            restaurant.overall_score
        )
        ||
        0;


    let openingHours =
        restaurant.opening_hours;


    if (
        typeof openingHours ===
        "string"
    ) {

        try {

            openingHours =
                JSON.parse(
                    openingHours
                );

        }

        catch {

            openingHours =
                {};

        }

    }


    const pros =
        this.convertToArray(
            restaurant.pros
        );


    const cons =
        this.convertToArray(
            restaurant.cons
        );


    const summaryZh =
        restaurant.ai_summary_zh
        ||
        restaurant.description_zh
        ||
        restaurant.ai_summary
        ||
        restaurant.description
        ||
        "Ming 正在分析这家餐厅。";


    const summaryEn =
        restaurant.ai_summary
        ||
        restaurant.description
        ||
        "Ming is analysing what this restaurant is actually like.";


    const summaryBm =
        restaurant.ai_summary
        ||
        restaurant.description
        ||
        "Ming sedang menganalisis keadaan sebenar restoran ini.";


    const parkingDifficulty =
        restaurant.parking_difficulty
        ||
        "unknown";


    const parkingNotes =
        restaurant.parking_notes
        ||
        "Information being collected";


    return {

        id:
            restaurant.id,


        name: {

            zh:
                nameZh,

            en:
                nameEn,

            bm:
                nameBm

        },


        location: {

            zh:
                `${city} · ${
                    restaurant.cuisine_zh
                    ||
                    cuisine
                }`,

            en:
                `${city} · ${cuisine}`,

            bm:
                `${city} · ${cuisine}`

        },


        image:
            restaurant.image_url
            ||
            "images/featured-ramen.jpg",


        tag: {

            zh:
                "MING 推荐",

            en:
                "MING RECOMMENDED",

            bm:
                "CADANGAN MING"

        },


        score:
            score.toFixed(
                1
            ),


        verdict: {

            zh:
                summaryZh,

            en:
                summaryEn,

            bm:
                summaryBm

        },


        positives: {

            zh:
                pros,

            en:
                pros,

            bm:
                pros

        },


        negatives: {

            zh:
                cons,

            en:
                cons,

            bm:
                cons

        },


        practical: {

            hours:
                openingHours,

            lastOrder:
                restaurant.last_order_time
                ||
                "Not yet verified",


            parking: {

                zh:
                    `${parkingDifficulty} · ${parkingNotes}`,

                en:
                    `${parkingDifficulty} · ${parkingNotes}`,

                bm:
                    `${parkingDifficulty} · ${parkingNotes}`

            },


            bestTime: {

                zh:
                    "Ming 正在收集更多资料",

                en:
                    "Ming is collecting more information",

                bm:
                    "Ming sedang mengumpul lebih banyak maklumat"

            }

        },


        creatorStatus: {

            zh:
                "创作者资料正在收集",

            en:
                "Creator coverage is being collected",

            bm:
                "Maklumat pencipta kandungan sedang dikumpulkan"

        }

    };

},


/* =========================
ARRAY HELPER
========================= */

convertToArray(
    value
) {

    if (
        Array.isArray(
            value
        )
    ) {

        return value;

    }


    if (
        typeof value ===
        "string"
    ) {

        try {

            const parsed =
                JSON.parse(
                    value
                );


            if (
                Array.isArray(
                    parsed
                )
            ) {

                return parsed;

            }

        }

        catch {

            return value
                .split(
                    ","
                )
                .map(
                    item =>
                        item.trim()
                )
                .filter(
                    Boolean
                );

        }

    }


    return [

        "More information is being collected."

    ];

},


/* =========================
RENDER RESTAURANTS
========================= */

renderRestaurants() {

    const grid =
        document.getElementById(
            "restaurantGrid"
        );


    if (!grid) {

        return;

    }


    const language =
        this.currentLanguage;


    if (
        !this.restaurants ||
        this.restaurants.length === 0
    ) {

        grid.innerHTML = `

            <div
                style="
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 60px 20px;
                "
            >

                <h3>

                    ${
                        language === "zh"
                            ? "暂时找不到完全符合的餐厅"
                            : language === "bm"
                                ? "Tiada restoran yang sepadan buat masa ini"
                                : "No matching restaurants found yet"
                    }

                </h3>


                <p>

                    ${
                        language === "zh"
                            ? "我们正在不断增加马来西亚的餐厅资料。"
                            : language === "bm"
                                ? "Kami sedang menambah lebih banyak restoran di Malaysia."
                                : "We are continuously adding more restaurants across Malaysia."
                    }

                </p>

            </div>

        `;

        return;

    }


    grid.innerHTML =
        this.restaurants
            .map(
                restaurant => {

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

                                            ${
                                                language === "zh"
                                                    ? "综合判断"
                                                    : language === "bm"
                                                        ? "Analisis keseluruhan"
                                                        : "Overall analysis"
                                            }

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

                                    ${
                                        language === "zh"
                                            ? "查看 Ming 分析 →"
                                            : language === "bm"
                                                ? "Lihat analisis Ming →"
                                                : "View Ming's analysis →"
                                    }

                                </button>

                            </div>

                        </article>

                    `;

                }
            )
            .join(
                ""
            );

},


/* =========================
OPEN RESTAURANT MODAL
========================= */

openRestaurant(
    id
) {

    const restaurant =
        this.restaurants.find(
            item =>
                String(
                    item.id
                ) ===
                String(
                    id
                )
        );


    if (
        !restaurant
    ) {

        return;

    }


    const language =
        this.currentLanguage;


    const positives =
        restaurant
            .positives[language]
            .map(
                item =>
                    `<li>${item}</li>`
            )
            .join(
                ""
            );


    const negatives =
        restaurant
            .negatives[language]
            .map(
                item =>
                    `<li>${item}</li>`
            )
            .join(
                ""
            );


    const content =
        document.getElementById(
            "modalContent"
        );


    if (!content) {

        return;

    }


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

                ${
                    language === "zh"
                        ? "值得考虑"
                        : language === "bm"
                            ? "Berbaloi dipertimbangkan"
                            : "Worth considering"
                }

            </h3>


            <p>

                ${restaurant.verdict[language]}

            </p>

        </div>


        <div
            class="modal-section"
        >

            <h4>

                ${
                    language === "zh"
                        ? "👍 大家常常喜欢"
                        : language === "bm"
                            ? "👍 Perkara yang sering dipuji"
                            : "👍 What people consistently like"
                }

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

                ${
                    language === "zh"
                        ? "👎 常见问题"
                        : language === "bm"
                            ? "👎 Aduan biasa"
                            : "👎 Common complaints"
                }

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

                ${
                    language === "zh"
                        ? "📍 本地实用信息"
                        : language === "bm"
                            ? "📍 Maklumat tempatan"
                            : "📍 Local intelligence"
                }

            </h4>


            <div
                class="info-grid"
            >

                <div
                    class="info-item"
                >

                    <span>

                        ${
                            language === "zh"
                                ? "营业时间"
                                : language === "bm"
                                    ? "Waktu operasi"
                                    : "Opening hours"
                        }

                    </span>


                    <strong>

                        ${this.formatOpeningHours(
                            restaurant.practical.hours
                        )}

                    </strong>

                </div>


                <div
                    class="info-item"
                >

                    <span>

                        ${
                            language === "zh"
                                ? "最后点餐"
                                : language === "bm"
                                    ? "Pesanan terakhir"
                                    : "Last order"
                        }

                    </span>


                    <strong>

                        ${restaurant.practical.lastOrder}

                    </strong>

                </div>


                <div
                    class="info-item"
                >

                    <span>

                        ${
                            language === "zh"
                                ? "停车难度"
                                : language === "bm"
                                    ? "Kesukaran parking"
                                    : "Parking difficulty"
                        }

                    </span>


                    <strong>

                        ${restaurant.practical.parking[language]}

                    </strong>

                </div>


                <div
                    class="info-item"
                >

                    <span>

                        ${
                            language === "zh"
                                ? "建议时间"
                                : language === "bm"
                                    ? "Masa terbaik"
                                    : "Best time to visit"
                        }

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

                ${
                    language === "zh"
                        ? "创作者覆盖"
                        : language === "bm"
                            ? "Liputan pencipta"
                            : "Creator coverage"
                }

            </h4>


            <p>

                ${restaurant.creatorStatus[language]}

            </p>

        </div>

    `;


    const modal =
        document.getElementById(
            "restaurantModal"
        );


    if (modal) {

        modal.classList.add(
            "visible"
        );

        document.body.style.overflow =
            "hidden";

    }

},


/* =========================
FORMAT OPENING HOURS
========================= */

formatOpeningHours(
    hours
) {

    if (
        typeof hours ===
        "string"
    ) {

        return hours;

    }


    if (
        !hours ||
        typeof hours !==
        "object"
    ) {

        return "Not yet verified";

    }


    const language =
        this.currentLanguage;


    const dayNames = {

        zh: {

            monday: "星期一",
            tuesday: "星期二",
            wednesday: "星期三",
            thursday: "星期四",
            friday: "星期五",
            saturday: "星期六",
            sunday: "星期日"

        },


        en: {

            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            sunday: "Sunday"

        },


        bm: {

            monday: "Isnin",
            tuesday: "Selasa",
            wednesday: "Rabu",
            thursday: "Khamis",
            friday: "Jumaat",
            saturday: "Sabtu",
            sunday: "Ahad"

        }

    };


    return Object
        .entries(
            hours
        )
        .map(
            (
                [
                    day,
                    time
                ]
            ) => {

                return `

                    <div>

                        <strong>

                            ${
                                dayNames[language][day]
                                ||
                                day
                            }

                        </strong>


                        <span>

                            ${time}

                        </span>

                    </div>

                `;

            }
        )
        .join(
            ""
        );

},


/* =========================
CLOSE MODAL
========================= */

closeModal() {

    const modal =
        document.getElementById(
            "restaurantModal"
        );


    if (modal) {

        modal.classList.remove(
            "visible"
        );

    }


    document.body.style.overflow =
        "";

},


/* =========================
RESET
========================= */

reset() {

    const foodInput =
        document.getElementById(
            "foodInput"
        );


    if (foodInput) {

        foodInput.value =
            "";

    }


    const resultsSection =
        document.getElementById(
            "resultsSection"
        );


    if (resultsSection) {

        resultsSection.classList.remove(
            "has-results"
        );

    }


    this.restaurants =
        [];


    const grid =
        document.getElementById(
            "restaurantGrid"
        );


    if (grid) {

        grid.innerHTML =
            "";

    }


    document
        .querySelectorAll(
            ".preference-chip"
        )
        .forEach(
            chip =>
                chip.classList.remove(
                    "active"
                )
        );


    const assistant =
        document.getElementById(
            "food-assistant"
        );


    if (assistant) {

        assistant.scrollIntoView(
            {

                behavior:
                    "smooth"

            }
        );

    }

},


/* =========================
LOADING STATE
========================= */

showLoading() {

    const grid =
        document.getElementById(
            "restaurantGrid"
        );


    if (!grid) {

        return;

    }


    const language =
        this.currentLanguage;


    grid.innerHTML = `

        <div
            style="
                grid-column: 1 / -1;
                text-align: center;
                padding: 60px 20px;
            "
        >

            <h3>

                ${
                    language === "zh"
                        ? "Ming 正在调查餐厅资料..."
                        : language === "bm"
                            ? "Ming sedang menyiasat restoran..."
                            : "Ming is investigating restaurants..."
                }

            </h3>


            <p>

                ${
                    language === "zh"
                        ? "正在分析你的需求。"
                        : language === "bm"
                            ? "Ming sedang menganalisis keperluan anda."
                            : "Ming is analysing what you are looking for."
                }

            </p>

        </div>

    `;

},


/* =========================
RESULT SUMMARY
========================= */

getResultSummary(
    input
) {

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


/* =========================
INPUT MESSAGE
========================= */

showInputMessage() {

    const input =
        document.getElementById(
            "foodInput"
        );


    if (!input) {

        return;

    }


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


/* =========================
LANGUAGE
========================= */

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
            currentIndex +
            1
        )
        %
        languages.length;


    this.currentLanguage =
        languages[
            nextIndex
        ];


    this.applyLanguage();


    const resultsSection =
        document.getElementById(
            "resultsSection"
        );


    if (
        resultsSection &&
        resultsSection.classList.contains(
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
            element => {

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


    if (input) {

        if (
            language ===
            "zh"
        ) {

            input.placeholder =
                input.dataset.placeholderZh;

        }


        if (
            language ===
            "en"
        ) {

            input.placeholder =
                input.dataset.placeholderEn;

        }


        if (
            language ===
            "bm"
        ) {

            input.placeholder =
                input.dataset.placeholderBm;

        }

    }


    const languageToggle =
        document.getElementById(
            "languageToggle"
        );


    const labels =
        {

            zh:
                "中文",

            en:
                "EN",

            bm:
                "BM"

        };


    if (
        languageToggle
    ) {

        const activeLabel =
            languageToggle.querySelector(
                ".language-active"
            );


        if (activeLabel) {

            activeLabel.textContent =
                labels[language];

        }

    }

},


/* =========================
DARK MODE
========================= */

toggleTheme() {

    document.body.classList.toggle(
        "dark-mode"
    );


    const isDark =
        document.body.classList.contains(
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


    const themeIcon =
        document.querySelector(
            ".theme-icon"
        );


    if (themeIcon) {

        themeIcon.textContent =
            isDark
                ? "☀"
                : "☾";

    }

},


loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "mingTheme"
        );


    const themeIcon =
        document.querySelector(
            ".theme-icon"
        );


    if (
        savedTheme ===
        "dark"
    ) {

        document.body.classList.add(
            "dark-mode"
        );


        this.currentTheme =
            "dark";


        if (themeIcon) {

            themeIcon.textContent =
                "☀";

        }

    }


    else {

        document.body.classList.remove(
            "dark-mode"
        );


        this.currentTheme =
            "light";


        if (themeIcon) {

            themeIcon.textContent =
                "☾";

        }

    }

}

};

/* =========================
START APPLICATION
========================= */

document.addEventListener(
"DOMContentLoaded",
() => {

    MingFoodApp.init();

}

);
