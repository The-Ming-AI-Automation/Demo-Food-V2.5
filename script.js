
That makes the entire JavaScript file fail to parse, so **dark mode, the language selector, the popup, and the fake AI response all stop working**.

Replace your **entire `script.js`** with this clean version:

```javascript
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       DARK MODE
    ========================= */

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {

            document.body.classList.add("dark-mode");

            themeToggle.textContent = "☾";

        } else {

            themeToggle.textContent = "☼";

        }

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const isDarkMode =
                document.body.classList.contains("dark-mode");

            if (isDarkMode) {

                themeToggle.textContent = "☾";

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            } else {

                themeToggle.textContent = "☼";

                localStorage.setItem(
                    "theme",
                    "light"
                );

            }

        });

    }


    /* =========================
       LANGUAGE DROPDOWN
    ========================= */

    const languageButton =
        document.getElementById("languageButton");

    const languageMenu =
        document.getElementById("languageMenu");


    if (languageButton && languageMenu) {

        languageButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                languageMenu.classList.toggle("active");

            }
        );


        const languageOptions =
            languageMenu.querySelectorAll(
                "[data-language]"
            );


        languageOptions.forEach(function (option) {

            option.addEventListener(
                "click",
                function () {

                    const language =
                        option.getAttribute(
                            "data-language"
                        );


                    languageButton.textContent =
                        language.toUpperCase() + " ▾";


                    languageMenu.classList.remove(
                        "active"
                    );


                    changeLanguage(language);

                }
            );

        });


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
       LANGUAGE TRANSLATION
    ========================= */

    function changeLanguage(language) {


        /* NAVIGATION */

        const navLinks =
            document.querySelectorAll(
                ".nav-links a"
            );


        /* HERO */

        const heroEyebrow =
            document.querySelector(
                ".hero .eyebrow"
            );

        const heroTitle =
            document.querySelector(
                ".hero h1"
            );

        const heroDescription =
            document.querySelector(
                ".hero-description"
            );

        const heroButton =
            document.querySelector(
                ".hero-button"
            );


        /* TRENDING */

        const trendingLabel =
            document.querySelector(
                "#trending .section-label"
            );

        const trendingTitle =
            document.querySelector(
                "#trending h2"
            );

        const seeAll =
            document.querySelector(
                ".section-header > a"
            );


        /* FOOD CARDS */

        const foodCardCategories =
            document.querySelectorAll(
                ".food-card-content span"
            );

        const foodCardTitles =
            document.querySelectorAll(
                ".food-card-content h3"
            );


        /* HOW IT WORKS */

        const howLabel =
            document.querySelector(
                "#how-it-works .section-label"
            );

        const howTitle =
            document.querySelector(
                "#how-it-works h2"
            );


        /* DEMO SECTION */

        const demoLabel =
            document.querySelector(
                "#demo .section-label"
            );

        const demoTitle =
            document.querySelector(
                "#demo h2"
            );

        const demoButton =
            document.querySelector(
                ".demo-button-large"
            );


        /* MODAL */

        const modalLabel =
            document.querySelector(
                ".food-modal-header .section-label"
            );

        const modalTitle =
            document.querySelector(
                ".food-modal-header h2"
            );

        const modalDescription =
            document.querySelector(
                ".food-modal-header > p:last-child"
            );

        const suggestionButtons =
            document.querySelectorAll(
                ".suggestion-button"
            );

        const foodInput =
            document.getElementById(
                "foodInput"
            );

        const findFoodButton =
            document.getElementById(
                "findFoodButton"
            );

        const loadingText =
            document.querySelector(
                ".food-loading p"
            );

        const resultLabel =
            document.querySelector(
                ".result-label"
            );

        const resultTitle =
            document.getElementById(
                "resultTitle"
            );

        const resultDescription =
            document.getElementById(
                "resultDescription"
            );

        const nearbyButton =
            document.querySelector(
                ".nearby-food-button"
            );


        /* FOOTER */

        const footerDescription =
            document.querySelector(
                "footer p"
            );


        /* =========================
           ENGLISH
        ========================= */

        if (language === "en") {

            navLinks[0].textContent =
                "Discover";

            navLinks[1].textContent =
                "Trending";

            navLinks[2].textContent =
                "How it works";


            heroEyebrow.textContent =
                "AI-POWERED FOOD DISCOVERY";

            heroTitle.innerHTML =
                "Discover food<br><span>you'll love.</span>";

            heroDescription.textContent =
                "Find your next favourite meal with a little help from AI.";

            heroButton.textContent =
                "Start discovering ↗";


            trendingLabel.textContent =
                "TRENDING NOW";

            trendingTitle.textContent =
                "What people are craving";

            seeAll.textContent =
                "See all →";


            foodCardCategories[0].textContent =
                "Japanese";

            foodCardCategories[1].textContent =
                "Japanese";

            foodCardCategories[2].textContent =
                "Italian";


            foodCardTitles[0].textContent =
                "Rich Tonkotsu Ramen";

            foodCardTitles[1].textContent =
                "Fresh Sushi";

            foodCardTitles[2].textContent =
                "Handmade Pasta";


            howLabel.textContent =
                "HOW IT WORKS";

            howTitle.innerHTML =
                "Your next favourite meal<br>is closer than you think.";


            demoLabel.textContent =
                "READY TO EXPLORE?";

            demoTitle.innerHTML =
                "Let AI help you<br>find something delicious.";

            demoButton.textContent =
                "Try the demo ↗";


            modalLabel.textContent =
                "MING AI FOOD";

            modalTitle.innerHTML =
                "What are you<br>craving today?";

            modalDescription.textContent =
                "Tell Ming AI what you're in the mood for. There are no wrong answers.";


            suggestionButtons[0].textContent =
                "🍜 Something warm";

            suggestionButtons[1].textContent =
                "🌶️ Something spicy";

            suggestionButtons[2].textContent =
                "🍔 Something indulgent";

            suggestionButtons[3].textContent =
                "🥗 Something healthy";


            foodInput.placeholder =
                "Example: I'm tired, it's raining and I want something warm and comforting...";


            findFoodButton.textContent =
                "Ask Ming AI ✨";


            loadingText.textContent =
                "Ming AI is thinking about food...";


            resultLabel.textContent =
                "MING AI RECOMMENDS";


            resultTitle.textContent =
                "Spicy Tonkotsu Ramen";


            resultDescription.textContent =
                "A rich, warming bowl of ramen with a spicy kick. Perfect when you want something comforting, satisfying and full of flavour.";


            nearbyButton.textContent =
                "📍 Find this near me";


            footerDescription.textContent =
                "Discover something delicious.";

        }


        /* =========================
           CHINESE
        ========================= */

        if (language === "zh") {

            navLinks[0].textContent =
                "探索美食";

            navLinks[1].textContent =
                "热门美食";

            navLinks[2].textContent =
                "运作方式";


            heroEyebrow.textContent =
                "AI 驱动的美食探索";

            heroTitle.innerHTML =
                "发现美食<br><span>找到你的最爱。</span>";

            heroDescription.textContent =
                "让 AI 帮助你找到下一道最喜欢的美食。";

            heroButton.textContent =
                "开始探索 ↗";


            trendingLabel.textContent =
                "当前热门";

            trendingTitle.textContent =
                "大家最近想吃什么";

            seeAll.textContent =
                "查看全部 →";


            foodCardCategories[0].textContent =
                "日本料理";

            foodCardCategories[1].textContent =
                "日本料理";

            foodCardCategories[2].textContent =
                "意大利料理";


            foodCardTitles[0].textContent =
                "浓郁豚骨拉面";

            foodCardTitles[1].textContent =
                "新鲜寿司";

            foodCardTitles[2].textContent =
                "手工意大利面";


            howLabel.textContent =
                "运作方式";

            howTitle.innerHTML =
                "你的下一道最爱美食<br>比你想象中更近。";


            demoLabel.textContent =
                "准备好探索了吗？";

            demoTitle.innerHTML =
                "让 AI 帮助你<br>找到美味的选择。";

            demoButton.textContent =
                "立即体验 ↗";


            modalLabel.textContent =
                "MING AI 美食";

            modalTitle.innerHTML =
                "今天<br>想吃什么？";

            modalDescription.textContent =
                "告诉 Ming AI 你现在想吃什么。没有错误答案。";


            suggestionButtons[0].textContent =
                "🍜 温暖的食物";

            suggestionButtons[1].textContent =
                "🌶️ 辣一点的食物";

            suggestionButtons[2].textContent =
                "🍔 放纵一下";

            suggestionButtons[3].textContent =
                "🥗 健康一点";


            foodInput.placeholder =
                "例如：我今天很累，外面正在下雨，我想吃一些温暖又有安慰感的食物...";


            findFoodButton.textContent =
                "询问 Ming AI ✨";


            loadingText.textContent =
                "Ming AI 正在思考美食推荐...";


            resultLabel.textContent =
                "MING AI 推荐";


            resultTitle.textContent =
                "辣味豚骨拉面";


            resultDescription.textContent =
                "一碗浓郁温暖、带有辣味的豚骨拉面。当你想吃一些温暖、满足又充满风味的食物时，这是一个很好的选择。";


            nearbyButton.textContent =
                "📍 查找附近的美食";


            footerDescription.textContent =
                "发现美味的食物。";

        }


        /* =========================
           MALAY
        ========================= */

        if (language === "ms") {

            navLinks[0].textContent =
                "Terokai";

            navLinks[1].textContent =
                "Trending";

            navLinks[2].textContent =
                "Cara ia berfungsi";


            heroEyebrow.textContent =
                "PENEMUAN MAKANAN BERKUASA AI";

            heroTitle.innerHTML =
                "Temui makanan<br><span>yang anda akan suka.</span>";

            heroDescription.textContent =
                "Cari hidangan kegemaran anda yang seterusnya dengan bantuan AI.";

            heroButton.textContent =
                "Mula meneroka ↗";


            trendingLabel.textContent =
                "SEDANG TRENDING";

            trendingTitle.textContent =
                "Apa yang orang sedang mengidam";

            seeAll.textContent =
                "Lihat semua →";


            foodCardCategories[0].textContent =
                "Jepun";

            foodCardCategories[1].textContent =
                "Jepun";

            foodCardCategories[2].textContent =
                "Itali";


            foodCardTitles[0].textContent =
                "Ramen Tonkotsu Berperisa";

            foodCardTitles[1].textContent =
                "Sushi Segar";

            foodCardTitles[2].textContent =
                "Pasta Buatan Tangan";


            howLabel.textContent =
                "CARA IA BERFUNGSI";

            howTitle.innerHTML =
                "Hidangan kegemaran anda yang seterusnya<br>lebih dekat daripada yang anda sangka.";


            demoLabel.textContent =
                "SEDIA UNTUK MENEROKA?";

            demoTitle.innerHTML =
                "Biarkan AI membantu anda<br>mencari sesuatu yang lazat.";

            demoButton.textContent =
                "Cuba demo ↗";


            modalLabel.textContent =
                "MING AI FOOD";

            modalTitle.innerHTML =
                "Apa yang anda<br>teringin hari ini?";

            modalDescription.textContent =
                "Beritahu Ming AI apa yang anda inginkan. Tiada jawapan yang salah.";


            suggestionButtons[0].textContent =
                "🍜 Sesuatu yang panas";

            suggestionButtons[1].textContent =
                "🌶️ Sesuatu yang pedas";

            suggestionButtons[2].textContent =
                "🍔 Sesuatu yang mengenyangkan";

            suggestionButtons[3].textContent =
                "🥗 Sesuatu yang sihat";


            foodInput.placeholder =
                "Contoh: Saya penat, hari sedang hujan dan saya mahukan sesuatu yang panas dan menenangkan...";


            findFoodButton.textContent =
                "Tanya Ming AI ✨";


            loadingText.textContent =
                "Ming AI sedang memikirkan makanan...";


            resultLabel.textContent =
                "MING AI MENCADANGKAN";


            resultTitle.textContent =
                "Ramen Tonkotsu Pedas";


            resultDescription.textContent =
                "Semangkuk ramen tonkotsu yang kaya dan menghangatkan dengan rasa pedas. Sesuai apabila anda mahukan sesuatu yang menenangkan, mengenyangkan dan penuh dengan rasa.";


            nearbyButton.textContent =
                "📍 Cari berdekatan saya";


            footerDescription.textContent =
                "Temui sesuatu yang lazat.";

        }

    }


    /* =========================
       AI FOOD DEMO POPUP
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

    const foodInput =
        document.getElementById(
            "foodInput"
        );

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


    if (openFoodDemo && foodModal) {

        openFoodDemo.addEventListener(
            "click",
            function () {

                foodModal.classList.add(
                    "active"
                );

            }
        );

    }


    if (closeFoodDemo && foodModal) {

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


    if (modalOverlay && foodModal) {

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
       SUGGESTION BUTTONS
    ========================= */

    const suggestionButtons =
        document.querySelectorAll(
            ".suggestion-button"
        );


    suggestionButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    if (!foodInput) {
                        return;
                    }


                    const text =
                        button.textContent
                            .replace(
                                /[^\w\s]/gi,
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
       FAKE AI RESPONSE
    ========================= */

    if (
        findFoodButton &&
        foodInput &&
        foodLoading &&
        foodResult &&
        resultTitle &&
        resultDescription
    ) {

        findFoodButton.addEventListener(
            "click",
            function () {

                const userInput =
                    foodInput.value.trim();


                if (!userInput) {

                    foodInput.focus();

                    foodInput.placeholder =
                        "Tell Ming AI what you feel like eating first...";

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

});
