document.addEventListener("DOMContentLoaded", function () {

```
/* =========================
   DARK MODE
========================= */

const themeToggle =
    document.getElementById("themeToggle");


if (themeToggle) {

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeToggle.textContent = "☾";

    }


    themeToggle.addEventListener(
        "click",
        function () {

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

        }
    );

}


/* =========================
   LANGUAGE DROPDOWN
========================= */

const languageButton =
    document.getElementById("languageButton");


const languageMenu =
    document.getElementById("languageMenu");


if (
    languageButton &&
    languageMenu
) {


    languageButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            languageMenu.classList.toggle("active");

        }
    );


    const languageOptions =
        languageMenu.querySelectorAll("[data-language]");


    languageOptions.forEach(
        function (option) {

            option.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();


                    const language =
                        option.getAttribute("data-language");


                    languageButton.textContent =
                        language.toUpperCase() + " ▾";


                    languageMenu.classList.remove("active");


                    changeLanguage(language);

                }
            );

        }
    );


    document.addEventListener(
        "click",
        function () {

            languageMenu.classList.remove("active");

        }
    );

}


/* =========================
   LANGUAGE TRANSLATION
========================= */

function changeLanguage(language) {


    /* =========================
       ENGLISH
    ========================= */

    if (language === "en") {


        /* NAVIGATION */

        document.querySelector(
            '.nav-links a[href="#discover"]'
        ).textContent =
            "Discover";


        document.querySelector(
            '.nav-links a[href="#trending"]'
        ).textContent =
            "Trending";


        document.querySelector(
            '.nav-links a[href="#how-it-works"]'
        ).textContent =
            "How it works";


        document.querySelector(
            ".demo-button"
        ).textContent =
            "Try the demo ↗";


        /* HERO */

        document.querySelector(
            ".hero .eyebrow"
        ).textContent =
            "AI-POWERED FOOD DISCOVERY";


        document.querySelector(
            ".hero h1"
        ).innerHTML =
            "Discover food<br><span>you'll love.</span>";


        document.querySelector(
            ".hero-description"
        ).textContent =
            "Find your next favourite meal with a little help from AI.";


        document.querySelector(
            ".hero-button"
        ).textContent =
            "Start discovering ↗";


        /* TRENDING */

        document.querySelector(
            ".section-header .section-label"
        ).textContent =
            "TRENDING NOW";


        document.querySelector(
            ".section-header h2"
        ).textContent =
            "What people are craving";


        document.querySelector(
            ".section-header > a"
        ).textContent =
            "See all →";


        /* FOOD CARDS */

        const foodCategories =
            document.querySelectorAll(
                ".food-card-content span"
            );


        foodCategories[0].textContent =
            "Japanese";


        foodCategories[1].textContent =
            "Japanese";


        foodCategories[2].textContent =
            "Italian";


        document.querySelector(
            ".food-card:nth-child(1) h3"
        ).textContent =
            "Rich Tonkotsu Ramen";


        document.querySelector(
            ".food-card:nth-child(2) h3"
        ).textContent =
            "Fresh Sushi";


        document.querySelector(
            ".food-card:nth-child(3) h3"
        ).textContent =
            "Handmade Pasta";


        /* HOW IT WORKS */

        document.querySelector(
            ".how-section .section-label"
        ).textContent =
            "HOW IT WORKS";


        document.querySelector(
            ".how-section h2"
        ).innerHTML =
            "Your next favourite meal<br>is closer than you think.";


        /* DEMO SECTION */

        document.querySelector(
            ".demo-section .section-label"
        ).textContent =
            "READY TO EXPLORE?";


        document.querySelector(
            ".demo-section h2"
        ).innerHTML =
            "Let AI help you<br>find something delicious.";


        document.querySelector(
            ".demo-button-large"
        ).textContent =
            "Try the demo ↗";


        /* MODAL */

        document.querySelector(
            ".food-modal-header .section-label"
        ).textContent =
            "MING AI FOOD";


        document.querySelector(
            ".food-modal-header h2"
        ).innerHTML =
            "What are you<br>craving today?";


        document.querySelector(
            ".food-modal-header > p:last-child"
        ).textContent =
            "Tell Ming AI what you're in the mood for. There are no wrong answers.";


        const suggestions =
            document.querySelectorAll(
                ".suggestion-button"
            );


        suggestions[0].textContent =
            "🍜 Something warm";


        suggestions[1].textContent =
            "🌶️ Something spicy";


        suggestions[2].textContent =
            "🍔 Something indulgent";


        suggestions[3].textContent =
            "🥗 Something healthy";


        document.querySelector(
            "#foodInput"
        ).placeholder =
            "Example: I'm tired, it's raining and I want something warm and comforting...";


        document.querySelector(
            "#findFoodButton"
        ).textContent =
            "Ask Ming AI ✨";


        document.querySelector(
            ".food-loading p"
        ).textContent =
            "Ming AI is thinking about food...";


        document.querySelector(
            ".result-label"
        ).textContent =
            "MING AI RECOMMENDS";


        document.querySelector(
            ".result-reasons span:nth-child(1)"
        ).textContent =
            "✓ Warm";


        document.querySelector(
            ".result-reasons span:nth-child(2)"
        ).textContent =
            "✓ Comforting";


        document.querySelector(
            ".result-reasons span:nth-child(3)"
        ).textContent =
            "✓ Full of flavour";


        document.querySelector(
            ".nearby-food-button"
        ).textContent =
            "📍 Find this near me";


        /* FOOTER */

        document.querySelector(
            "footer p"
        ).textContent =
            "Discover something delicious.";


        return;

    }


    /* =========================
       CHINESE
    ========================= */

    if (language === "zh") {


        /* NAVIGATION */

        document.querySelector(
            '.nav-links a[href="#discover"]'
        ).textContent =
            "探索";


        document.querySelector(
            '.nav-links a[href="#trending"]'
        ).textContent =
            "热门美食";


        document.querySelector(
            '.nav-links a[href="#how-it-works"]'
        ).textContent =
            "使用方式";


        document.querySelector(
            ".demo-button"
        ).textContent =
            "立即体验 ↗";


        /* HERO */

        document.querySelector(
            ".hero .eyebrow"
        ).textContent =
            "AI 驱动的美食探索";


        document.querySelector(
            ".hero h1"
        ).innerHTML =
            "发现美食<br><span>找到你的最爱。</span>";


        document.querySelector(
            ".hero-description"
        ).textContent =
            "让 AI 帮助你找到下一道最喜欢的美食。";


        document.querySelector(
            ".hero-button"
        ).textContent =
            "开始探索 ↗";


        /* TRENDING */

        document.querySelector(
            ".section-header .section-label"
        ).textContent =
            "当前热门";


        document.querySelector(
            ".section-header h2"
        ).textContent =
            "大家最近想吃什么";


        document.querySelector(
            ".section-header > a"
        ).textContent =
            "查看全部 →";


        /* FOOD CARDS */

        const foodCategories =
            document.querySelectorAll(
                ".food-card-content span"
            );


        foodCategories[0].textContent =
            "日本料理";


        foodCategories[1].textContent =
            "日本料理";


        foodCategories[2].textContent =
            "意大利料理";


        document.querySelector(
            ".food-card:nth-child(1) h3"
        ).textContent =
            "浓郁豚骨拉面";


        document.querySelector(
            ".food-card:nth-child(2) h3"
        ).textContent =
            "新鲜寿司";


        document.querySelector(
            ".food-card:nth-child(3) h3"
        ).textContent =
            "手工意大利面";


        /* HOW IT WORKS */

        document.querySelector(
            ".how-section .section-label"
        ).textContent =
            "使用方式";


        document.querySelector(
            ".how-section h2"
        ).innerHTML =
            "你的下一道最爱美食<br>可能比你想象中更近。";


        /* DEMO SECTION */

        document.querySelector(
            ".demo-section .section-label"
        ).textContent =
            "准备好探索了吗？";


        document.querySelector(
            ".demo-section h2"
        ).innerHTML =
            "让 AI 帮助你<br>找到美味的选择。";


        document.querySelector(
            ".demo-button-large"
        ).textContent =
            "立即体验 ↗";


        /* MODAL */

        document.querySelector(
            ".food-modal-header .section-label"
        ).textContent =
            "MING AI 美食";


        document.querySelector(
            ".food-modal-header h2"
        ).innerHTML =
            "今天想吃什么？<br>告诉我们你的心情。";


        document.querySelector(
            ".food-modal-header > p:last-child"
        ).textContent =
            "告诉 Ming AI 你现在想吃什么。没有错误的答案。";


        const suggestions =
            document.querySelectorAll(
                ".suggestion-button"
            );


        suggestions[0].textContent =
            "🍜 温暖的食物";


        suggestions[1].textContent =
            "🌶️ 辣一点的食物";


        suggestions[2].textContent =
            "🍔 放纵一下";


        suggestions[3].textContent =
            "🥗 健康的食物";


        document.querySelector(
            "#foodInput"
        ).placeholder =
            "例如：我今天很累，外面正在下雨，我想吃一些温暖又舒服的食物...";


        document.querySelector(
            "#findFoodButton"
        ).textContent =
            "询问 Ming AI ✨";


        document.querySelector(
            ".food-loading p"
        ).textContent =
            "Ming AI 正在思考美食推荐...";


        document.querySelector(
            ".result-label"
        ).textContent =
            "MING AI 推荐";


        document.querySelector(
            ".result-reasons span:nth-child(1)"
        ).textContent =
            "✓ 温暖";


        document.querySelector(
            ".result-reasons span:nth-child(2)"
        ).textContent =
            "✓ 舒适";


        document.querySelector(
            ".result-reasons span:nth-child(3)"
        ).textContent =
            "✓ 充满风味";


        document.querySelector(
            ".nearby-food-button"
        ).textContent =
            "📍 查找附近的美食";


        /* FOOTER */

        document.querySelector(
            "footer p"
        ).textContent =
            "发现美味的食物。";


        return;

    }


    /* =========================
       BAHASA MELAYU
    ========================= */

    if (language === "ms") {


        /* NAVIGATION */

        document.querySelector(
            '.nav-links a[href="#discover"]'
        ).textContent =
            "Terokai";


        document.querySelector(
            '.nav-links a[href="#trending"]'
        ).textContent =
            "Trending";


        document.querySelector(
            '.nav-links a[href="#how-it-works"]'
        ).textContent =
            "Cara ia berfungsi";


        document.querySelector(
            ".demo-button"
        ).textContent =
            "Cuba demo ↗";


        /* HERO */

        document.querySelector(
            ".hero .eyebrow"
        ).textContent =
            "PENEMUAN MAKANAN BERKUASA AI";


        document.querySelector(
            ".hero h1"
        ).innerHTML =
            "Temui makanan<br><span>yang anda akan suka.</span>";


        document.querySelector(
            ".hero-description"
        ).textContent =
            "Cari hidangan kegemaran anda yang seterusnya dengan bantuan AI.";


        document.querySelector(
            ".hero-button"
        ).textContent =
            "Mula meneroka ↗";


        /* TRENDING */

        document.querySelector(
            ".section-header .section-label"
        ).textContent =
            "TRENDING SEKARANG";


        document.querySelector(
            ".section-header h2"
        ).textContent =
            "Apa yang orang sedang mengidam";


        document.querySelector(
            ".section-header > a"
        ).textContent =
            "Lihat semua →";


        /* FOOD CARDS */

        const foodCategories =
            document.querySelectorAll(
                ".food-card-content span"
            );


        foodCategories[0].textContent =
            "Jepun";


        foodCategories[1].textContent =
            "Jepun";


        foodCategories[2].textContent =
            "Itali";


        document.querySelector(
            ".food-card:nth-child(1) h3"
        ).textContent =
            "Ramen Tonkotsu Berkrim";


        document.querySelector(
            ".food-card:nth-child(2) h3"
        ).textContent =
            "Sushi Segar";


        document.querySelector(
            ".food-card:nth-child(3) h3"
        ).textContent =
            "Pasta Buatan Tangan";


        /* HOW IT WORKS */

        document.querySelector(
            ".how-section .section-label"
        ).textContent =
            "CARA IA BERFUNGSI";


        document.querySelector(
            ".how-section h2"
        ).innerHTML =
            "Hidangan kegemaran anda yang seterusnya<br>mungkin lebih dekat daripada yang anda sangka.";


        /* DEMO SECTION */

        document.querySelector(
            ".demo-section .section-label"
        ).textContent =
            "SEDIA UNTUK MENEROKA?";


        document.querySelector(
            ".demo-section h2"
        ).innerHTML =
            "Biarkan AI membantu anda<br>mencari sesuatu yang lazat.";


        document.querySelector(
            ".demo-button-large"
        ).textContent =
            "Cuba demo ↗";


        /* MODAL */

        document.querySelector(
            ".food-modal-header .section-label"
        ).textContent =
            "MING AI MAKANAN";


        document.querySelector(
            ".food-modal-header h2"
        ).innerHTML =
            "Apa yang anda<br>teringin hari ini?";


        document.querySelector(
            ".food-modal-header > p:last-child"
        ).textContent =
            "Beritahu Ming AI apa yang anda ingin makan. Tiada jawapan yang salah.";


        const suggestions =
            document.querySelectorAll(
                ".suggestion-button"
            );


        suggestions[0].textContent =
            "🍜 Sesuatu yang panas";


        suggestions[1].textContent =
            "🌶️ Sesuatu yang pedas";


        suggestions[2].textContent =
            "🍔 Sesuatu yang mengenyangkan";


        suggestions[3].textContent =
            "🥗 Sesuatu yang sihat";


        document.querySelector(
            "#foodInput"
        ).placeholder =
            "Contoh: Saya penat, hari hujan dan saya mahu sesuatu yang panas dan menenangkan...";


        document.querySelector(
            "#findFoodButton"
        ).textContent =
            "Tanya Ming AI ✨";


        document.querySelector(
            ".food-loading p"
        ).textContent =
            "Ming AI sedang memikirkan makanan...";


        document.querySelector(
            ".result-label"
        ).textContent =
            "MING AI MENCADANGKAN";


        document.querySelector(
            ".result-reasons span:nth-child(1)"
        ).textContent =
            "✓ Panas";


        document.querySelector(
            ".result-reasons span:nth-child(2)"
        ).textContent =
            "✓ Menenangkan";


        document.querySelector(
            ".result-reasons span:nth-child(3)"
        ).textContent =
            "✓ Penuh dengan rasa";


        document.querySelector(
            ".nearby-food-button"
        ).textContent =
            "📍 Cari berdekatan";


        /* FOOTER */

        document.querySelector(
            "footer p"
        ).textContent =
            "Temui sesuatu yang lazat.";

    }

}


/* =========================
   AI FOOD DEMO
   FAKE RESPONSE
========================= */

const openFoodDemo =
    document.getElementById("openFoodDemo");


const closeFoodDemo =
    document.getElementById("closeFoodDemo");


const foodModal =
    document.getElementById("foodModal");


const foodInput =
    document.getElementById("foodInput");


const findFoodButton =
    document.getElementById("findFoodButton");


const foodLoading =
    document.getElementById("foodLoading");


const foodResult =
    document.getElementById("foodResult");


const resultTitle =
    document.getElementById("resultTitle");


const resultDescription =
    document.getElementById("resultDescription");


/* OPEN MODAL */

if (
    openFoodDemo &&
    foodModal
) {

    openFoodDemo.addEventListener(
        "click",
        function () {

            foodModal.classList.add("active");

        }
    );

}


/* CLOSE MODAL */

if (
    closeFoodDemo &&
    foodModal
) {

    closeFoodDemo.addEventListener(
        "click",
        function () {

            foodModal.classList.remove("active");

        }
    );

}


/* CLICK OUTSIDE MODAL */

const modalOverlay =
    document.querySelector(".food-modal-overlay");


if (
    modalOverlay &&
    foodModal
) {

    modalOverlay.addEventListener(
        "click",
        function () {

            foodModal.classList.remove("active");

        }
    );

}


/* SUGGESTION BUTTONS */

const suggestionButtons =
    document.querySelectorAll(".suggestion-button");


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
                        .replace(/[^\w\s]/gi, "")
                        .trim();


                foodInput.value =
                    "I feel like eating " +
                    text.toLowerCase();

            }
        );

    }
);


/* FAKE AI RESPONSE */

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


            foodResult.classList.remove("active");


            foodLoading.classList.add("active");


            findFoodButton.disabled =
                true;


            findFoodButton.textContent =
                "Ming AI is thinking...";


            setTimeout(
                function () {


                    foodLoading.classList.remove("active");


                    foodResult.classList.add("active");


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
```

});
