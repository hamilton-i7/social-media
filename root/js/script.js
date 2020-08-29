const body = document.querySelector(".js--body");
const mainHeader = document.querySelector(".js--header");
const mainTitle = document.querySelector(".js--mainTitle");
const totalFollowers = document.querySelector(".js--totalFollowers");
const mode = document.querySelector(".js--mode");
const button = document.querySelector(".js--button");
const buttonIndicator = document.querySelector(".js--buttonIndicator");
const followersCards = document.querySelectorAll(".js--followersCard");
const usernames = document.querySelectorAll(".js--username");
const followersCounters = document.querySelectorAll(".js--followersCounter");
const followersSpan = document.querySelectorAll(".js--followersSpan");
const rate = document.querySelector(".js--rateNormal");
const overviewHeader = document.querySelector(".js--overviewHeader");
const overviewCards = document.querySelectorAll(".js--overviewCard");
const overviewCardTitles = document.querySelectorAll(".js--overviewCardTitle");
const overviewCardAmounts = document.querySelectorAll(".js--overviewCardAmount");

const singleElements = [body, mainHeader, mainTitle, totalFollowers, mode, button, buttonIndicator, rate, overviewHeader];
const repeatedElements = [followersCards, usernames, followersCounters, followersSpan, overviewCards, overviewCardTitles, overviewCardAmounts];


button.addEventListener("click", toggleTheme);

function toggleTheme() {
    singleElements.forEach(function(el) {
        activeToggle(el);
    });

    repeatedElements.forEach(function(list) {
        list.forEach(function(el) {
            activeToggle(el);
        });
    });

    if (mode.innerText.includes("Dark")) {
        mode.innerText = "light mode";
    } else if (mode.innerText.includes("Light")) {
        mode.innerText = "dark mode";
    }
}

function activeToggle(el) {
    el.classList.toggle("dark");
    el.classList.toggle("light");
}