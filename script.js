document.addEventListener(
    "DOMContentLoaded",
    function () {


        console.log(
            "Ming AI Food script loaded"
        );


        /* =========================
           DARK MODE
        ========================= */

        const themeToggle =
            document.getElementById(
                "themeToggle"
            );


        if (themeToggle) {


            const savedTheme =
                localStorage.getItem(
                    "theme"
                );


            if (
                savedTheme === "dark"
            ) {

                document.body.classList.add(
                    "dark-mode"
                );

                themeToggle.textContent =
                    "☾";

            } else {

                themeToggle.textContent =
                    "☼";

            }


            themeToggle.addEventListener(
                "click",
                function () {


                    document.body.classList.toggle(
                        "dark-mode"
                    );


                    const isDarkMode =
                        document.body.classList.contains(
                            "dark-mode"
                        );


                    if (
                        isDarkMode
                    ) {

                        themeToggle.textContent =
                            "☾";

                        localStorage.setItem(
                            "theme",
                            "dark"
                        );

                    } else {

                        themeToggle.textContent =
                            "☼";

                        localStorage.setItem(
                            "theme",
                            "light"
                        );

                    }

                }
            );

        }


        /* =========================
           LANGUAGE SELECTOR
        ========================= */

        const languageButton =
            document.getElementById(
                "languageButton"
            );


        const languageMenu =
            document.getElementById(
                "languageMenu"
            );


        if (
            languageButton &&
            languageMenu
        ) {


            languageButton.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    languageMenu.classList.toggle(
                        "active"
                    );

                }
            );


            const languageOptions =
                languageMenu.querySelectorAll(
                    "[data-language]"
                );


            languageOptions.forEach(
                function (option) {


                    option.addEventListener(
                        "click",
                        function (event) {


                            event.stopPropagation();


                            const language =
                                option.getAttribute(
                                    "data-language"
                                );


                            languageButton.textContent =
                                language.toUpperCase() +
                                " ▾";


                            languageMenu.classList.remove(
                                "active"
                            );


                            changeLanguage(
                                language
                            );

                        }
                    );

                }
            );


            document.addEventListener(
                "click",
                function () {

                    languageMenu.classList.remove(
                        "active"
                    );

                }
            );

        }


        /* =========================
           TRANSLATION SYSTEM
        ========================= */

        function changeLanguage(
            language
        ) {


            const translations = {


                en: {

                    navDiscover: "Discover",

                    navTrending: "Trending",

                    navHow: "How it works",

                    tryDemo: "Try the demo ↗",

                    heroEyebrow:
                        "AI-POWERED FOOD DISCOVERY",

                    heroTitle:
                        "Discover food<br><span>you'll love.</span>",

                    heroDescription:
                        "Find your next favourite meal with a little help from AI.",

                    startDiscovering:
                        "Start discovering ↗",

                    trendingLabel:
                        "TRENDING NOW",

                    trendingTitle:
                        "What people are craving",

                    seeAll:
                        "See all →",

                    japanese:
                        "Japanese",

                    ramenTitle:
                        "Rich Tonkotsu Ramen",

                    sushiTitle:
                        "Fresh Sushi",

                    matchaTitle:
                        "Premium Matcha",

                    howLabel:
                        "HOW IT WORKS",

                    howTitle:
                        "Your next favourite meal<br>is closer than you think.",

                    readyLabel:
                        "READY TO EXPLORE?",

                    demoTitle:
                        "Let AI help you<br>find something delicious.",

                    modalBrand:
                        "MING AI FOOD",

                    modalTitle:
                        "What are you<br>craving today?",

                    modalDescription:
                        "Tell Ming AI what you're in the mood for. There are no wrong answers.",

                    warm:
                        "🍜 Something warm",

                    spicy:
                        "🌶️ Something spicy",

                    indulgent:
                        "🍔 Something indulgent",

                    healthy:
                        "🥗 Something healthy",

                    askMingAI:
                        "Ask Ming AI ✨",

                    loadingText:
                        "Ming AI is thinking about food...",

                    recommendationLabel:
                        "MING AI RECOMMENDS",

                    resultDescription:
                        "A rich, warming bowl of ramen with a spicy kick. Perfect when you want something comforting, satisfying and full of flavour.",

                    warmReason:
                        "✓ Warm",

                    comfortingReason:
                        "✓ Comforting",

                    flavourReason:
                        "✓ Full of flavour",

                    nearbyButton:
                        "📍 Find this near me",

                    footerDescription:
                        "Discover something delicious."

                },


                zh: {

                    navDiscover:
                        "探索",

                    navTrending:
                        "热门美食",

                    navHow:
                        "使用方式",

                    tryDemo:
                        "试用演示 ↗",

                    heroEyebrow:
                        "AI 驱动的美食探索",

                    heroTitle:
                        "发现美食<br><span>找到你的最爱。</span>",

                    heroDescription:
                        "让 AI 帮助你找到下一道最喜欢的美食。",

                    startDiscovering:
                        "开始探索 ↗",

                    trendingLabel:
                        "现在热门",

                    trendingTitle:
                        "大家最近想吃什么",

                    seeAll:
                        "查看全部 →",

                    japanese:
                        "日本料理",

                    ramenTitle:
                        "浓郁豚骨拉面",

                    sushiTitle:
                        "新鲜寿司",

                    matchaTitle:
                        "高级抹茶",

                    howLabel:
                        "使用方式",

                    howTitle:
                        "你的下一道最爱美食<br>比你想象的更近。",

                    readyLabel:
                        "准备好探索了吗？",

                    demoTitle:
                        "让 AI 帮助你<br>找到美味的选择。",

                    modalBrand:
                        "MING AI 美食",

                    modalTitle:
                        "今天想吃<br>什么？",

                    modalDescription:
                        "告诉 Ming AI 你现在想吃什么。没有错误的答案。",

                    warm:
                        "🍜 温暖的食物",

                    spicy:
                        "🌶️ 辣的食物",

                    indulgent:
                        "🍔 丰盛的食物",

                    healthy:
                        "🥗 健康的食物",

                    askMingAI:
                        "询问 Ming AI ✨",

                    loadingText:
                        "Ming AI 正在思考美食推荐...",

                    recommendationLabel:
                        "MING AI 推荐",

                    resultDescription:
                        "一碗浓郁温暖的豚骨拉面，带有刺激的辣味。非常适合想要舒适、满足和充满风味的时候。",

                    warmReason:
                        "✓ 温暖",

                    comfortingReason:
                        "✓ 舒服",

                    flavourReason:
                        "✓ 充满风味",

                    nearbyButton:
                        "📍 查找附近的美食",

                    footerDescription:
                        "发现美味的食物。"

                },


                ms: {

                    navDiscover:
                        "Terokai",

                    navTrending:
                        "Trending",

                    navHow:
                        "Cara ia berfungsi",

                    tryDemo:
                        "Cuba demo ↗",

                    heroEyebrow:
                        "PENEMUAN MAKANAN BERKUASA AI",

                    heroTitle:
                        "Temui makanan<br><span>yang anda akan suka.</span>",

                    heroDescription:
                        "Cari hidangan kegemaran anda yang seterusnya dengan bantuan AI.",

                    startDiscovering:
                        "Mula meneroka ↗",

                    trendingLabel:
                        "SEDANG TRENDING",

                    trendingTitle:
                        "Apa yang orang sedang teringin",

                    seeAll:
                        "Lihat semua →",

                    japanese:
                        "Jepun",

                    ramenTitle:
                        "Ramen Tonkotsu Kaya",

                    sushiTitle:
                        "Sushi Segar",

                    matchaTitle:
                        "Matcha Premium",

                    howLabel:
                        "CARA IA BERFUNGSI",

                    howTitle:
                        "Hidangan kegemaran anda yang seterusnya<br>lebih dekat daripada yang anda sangka.",

                    readyLabel:
                        "SEDIA UNTUK MENEROKA?",

                    demoTitle:
                        "Biarkan AI membantu anda<br>mencari sesuatu yang lazat.",

                    modalBrand:
                        "MING AI FOOD",

                    modalTitle:
                        "Apa yang anda<br>teringin hari ini?",

                    modalDescription:
                        "Beritahu Ming AI apa yang anda ingin makan. Tiada jawapan yang salah.",

                    warm:
                        "🍜 Sesuatu yang panas",

                    spicy:
                        "🌶️ Sesuatu yang pedas",

                    indulgent:
                        "🍔 Sesuatu yang mengenyangkan",

                    healthy:
                        "🥗 Sesuatu yang sihat",

                    askMingAI:
                        "Tanya Ming AI ✨",

                    loadingText:
                        "Ming AI sedang memikirkan makanan...",

                    recommendationLabel:
                        "MING AI MENCADANGKAN",

                    resultDescription:
                        "Semangkuk ramen tonkotsu yang kaya dan panas dengan rasa pedas. Sesuai apabila anda mahukan sesuatu yang selesa, mengenyangkan dan penuh rasa.",

                    warmReason:
                        "✓ Panas",

                    comfortingReason:
                        "✓ Menenangkan",

                    flavourReason:
                        "✓ Penuh rasa",

                    nearbyButton:
                        "📍 Cari makanan ini berdekatan",

                    footerDescription:
                        "Temui sesuatu yang lazat."

                }

            };


            const selectedLanguage =
                translations[language];


            if (
                !selectedLanguage
            ) {
                return;
            }


            document
                .querySelectorAll(
                    "[data-i18n]"
                )
                .forEach(
                    function (element) {


                        const key =
                            element.getAttribute(
                                "data-i18n"
                            );


                        if (
                            selectedLanguage[key]
                        ) {

                            element.innerHTML =
                                selectedLanguage[key];

                        }

                    }
                );


            const foodInput =
                document.getElementById(
                    "foodInput"
                );


            if (
                foodInput
            ) {


                const placeholders = {


                    en:
                        "Example: I'm tired, it's raining and I want something warm and comforting...",


                    zh:
                        "例如：我今天很累，外面正在下雨，我想吃一些温暖又舒服的食物...",


                    ms:
                        "Contoh: Saya penat, hujan sedang turun dan saya mahu sesuatu yang panas dan menenangkan..."

                };


                foodInput.placeholder =
                    placeholders[language];

            }

        }


        /* =========================
           DEMO MODAL
        ========================= */

        const openFoodDemo =
            document.getElementById(
                "openFoodDemo"
            );


        const closeFoodDemo =
            document.getElementById(
                "closeFoodDemo"
            );


        const foodModal =
            document.getElementById(
                "foodModal"
            );


        if (
            openFoodDemo &&
            foodModal
        ) {


            openFoodDemo.addEventListener(
                "click",
                function () {

                    foodModal.classList.add(
                        "active"
                    );

                }
            );

        }


        if (
            closeFoodDemo &&
            foodModal
        ) {


            closeFoodDemo.addEventListener(
                "click",
                function () {

                    foodModal.classList.remove(
                        "active"
                    );

                }
            );

        }


        const modalOverlay =
            document.querySelector(
                ".food-modal-overlay"
            );


        if (
            modalOverlay &&
            foodModal
        ) {


            modalOverlay.addEventListener(
                "click",
                function () {

                    foodModal.classList.remove(
                        "active"
                    );

                }
            );

        }


        /* =========================
           FOOD SUGGESTIONS
        ========================= */

        const foodInput =
            document.getElementById(
                "foodInput"
            );


        const suggestionButtons =
            document.querySelectorAll(
                ".suggestion-button"
            );


        suggestionButtons.forEach(
            function (button) {


                button.addEventListener(
                    "click",
                    function () {


                        if (
                            !foodInput
                        ) {
                            return;
                        }


                        const text =
                            button.textContent
                                .replace(
                                    /[^\p{L}\p{N}\s]/gu,
                                    ""
                                )
                                .trim();


                        foodInput.value =
                            "I feel like eating " +
                            text.toLowerCase();

                    }
                );

            }
        );


        /* =========================
           FAKE AI DEMO
        ========================= */

        const findFoodButton =
            document.getElementById(
                "findFoodButton"
            );


        const foodLoading =
            document.getElementById(
                "foodLoading"
            );


        const foodResult =
            document.getElementById(
                "foodResult"
            );


        const resultTitle =
            document.getElementById(
                "resultTitle"
            );


        const resultDescription =
            document.getElementById(
                "resultDescription"
            );


        if (
            findFoodButton &&
            foodInput &&
            foodLoading &&
            foodResult
        ) {


            findFoodButton.addEventListener(
                "click",
                function () {


                    const userInput =
                        foodInput.value.trim();


                    if (
                        !userInput
                    ) {

                        foodInput.focus();

                        return;

                    }


                    foodResult.classList.remove(
                        "active"
                    );


                    foodLoading.classList.add(
                        "active"
                    );


                    findFoodButton.disabled =
                        true;


                    findFoodButton.textContent =
                        "Ming AI is thinking...";


                    setTimeout(
                        function () {


                            foodLoading.classList.remove(
                                "active"
                            );


                            foodResult.classList.add(
                                "active"
                            );


                            findFoodButton.disabled =
                                false;


                            findFoodButton.textContent =
                                "Ask Ming AI ✨";


                            resultTitle.textContent =
                                "Spicy Tonkotsu Ramen";


                            resultDescription.textContent =
                                "A rich, warming bowl of ramen with a spicy kick. Perfect when you want something comforting, satisfying and full of flavour.";

                        },
                        1800
                    );

                }
            );

        }


        /* =========================
           NEARBY FOOD MAP
        ========================= */

        const nearbyFoodButton =
            document.getElementById(
                "nearbyFoodButton"
            );


        const mapContainer =
            document.getElementById(
                "mapContainer"
            );


        const foodMap =
            document.getElementById(
                "foodMap"
            );


        if (
            nearbyFoodButton &&
            mapContainer &&
            foodMap
        ) {


            nearbyFoodButton.addEventListener(
                "click",
                function () {


                    mapContainer.classList.toggle(
                        "active"
                    );


                    if (
                        mapContainer.classList.contains(
                            "active"
                        )
                    ) {


                        foodMap.src =
                            "https://www.openstreetmap.org/export/embed.html?bbox=101.68%2C3.10%2C101.72%2C3.15&layer=mapnik";


                        mapContainer.scrollIntoView(
                            {
                                behavior: "smooth",
                                block: "nearest"
                            }
                        );

                    }

                }
            );

        }


    }

);
