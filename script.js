/* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☾";

}


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const isDarkMode =
        document.body.classList.contains("dark-mode");


    if (isDarkMode) {

        themeToggle.textContent = "☾";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "☼";

        localStorage.setItem("theme", "light");

    }

});


/* =========================
   AI FOOD DEMO
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

openFoodDemo.addEventListener("click", function () {

    foodModal.classList.add("active");

});


/* CLOSE MODAL */

closeFoodDemo.addEventListener("click", function () {

    foodModal.classList.remove("active");

});


/* CLICK OUTSIDE MODAL */

document
    .querySelector(".food-modal-overlay")
    .addEventListener("click", function () {

        foodModal.classList.remove("active");

    });


/* SUGGESTION BUTTONS */

const suggestionButtons =
    document.querySelectorAll(".suggestion-button");


suggestionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const text =
            button.textContent
                .replace(/[^\w\s]/gi, "")
                .trim();

        foodInput.value =
            "I feel like eating " + text.toLowerCase();

    });

});


/* ASK MING AI */

findFoodButton.addEventListener("click", function () {

    const userInput =
        foodInput.value.trim();


    if (!userInput) {

        foodInput.focus();

        foodInput.placeholder =
            "Tell Ming AI what you feel like eating first...";

        return;

    }


    /* HIDE OLD RESULT */

    foodResult.classList.remove("active");


    /* SHOW LOADING */

    foodLoading.classList.add("active");

    findFoodButton.disabled = true;

    findFoodButton.textContent =
        "Ming AI is thinking...";


    /*
    TEMPORARY DEMO RESPONSE

    We will replace this with
    the real Gemini API next.
    */

    setTimeout(function () {

        foodLoading.classList.remove("active");

        foodResult.classList.add("active");

        findFoodButton.disabled = false;

        findFoodButton.textContent =
            "Ask Ming AI ✨";


        resultTitle.textContent =
            "Spicy Tonkotsu Ramen";

        resultDescription.textContent =
            "A rich, warming bowl of ramen with a spicy kick. Perfect when you want something comforting, satisfying and full of flavour.";

    }, 1800);

});
