/**
 * gameCore.js is a common file to be used across all DailyTrojan games. It contains useful functions to initialize the splash screen and return the user back to the home page.
 * 
 * */
let gameSplash;
let splashDate;
function initializeGameCore() {
    gameSplash = document.getElementById("splash")
    splashDate = document.getElementById("splash-date");

    splashDate.innerText = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
    }).format(new Date())

    console.log('GameCore Initialized');
}

function back() {
    redirect("../")
}

function redirect(url) {
    window.location.href = url;
}

function hideSplashScreen() {
    gameSplash.classList.add("game-splash-hidden")
}