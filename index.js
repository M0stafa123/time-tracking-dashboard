"use strict";
let daily = document.querySelector(".daily");
let weekly = document.querySelector(".weekly");
let monthly = document.querySelector(".monthly");
let cards = document.querySelectorAll(".card");
let hrs = document.querySelectorAll(".hrs");
let prev = document.querySelectorAll(".previous");
let btns = document.querySelectorAll(".card:first-of-type .data p");
fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
    daily.addEventListener("click", function () {
        btns.forEach((e) => {
            e.classList.add("text-paleBlue");
        });
        daily.classList.remove("text-paleBlue");
        for (let i of data) {
            cards.forEach((e, index) => {
                if (e.dataset.activitie == i.title) {
                    if (i.timeframes.daily.current != 1) {
                        hrs[index - 1].innerHTML = `${i.timeframes.daily.current}hrs `;
                    }
                    else {
                        hrs[index - 1].innerHTML = `${i.timeframes.daily.current}hr `;
                    }
                    if (i.timeframes.daily.previous != 1) {
                        prev[index - 1].innerHTML = `yesterday - ${i.timeframes.daily.previous}hrs`;
                    }
                    else {
                        prev[index - 1].innerHTML = `yesterday - ${i.timeframes.daily.previous}hr`;
                    }
                }
            });
        }
    });
    weekly.addEventListener("click", function () {
        btns.forEach((e) => {
            e.classList.add("text-paleBlue");
        });
        weekly.classList.remove("text-paleBlue");
        for (let i of data) {
            cards.forEach((e, index) => {
                if (e.dataset.activitie == i.title) {
                    if (i.timeframes.daily.current != 1) {
                        hrs[index - 1].innerHTML = `${i.timeframes.weekly.current}hrs `;
                    }
                    else {
                        hrs[index - 1].innerHTML = `${i.timeframes.weekly.current}hr `;
                    }
                    if (i.timeframes.daily.previous != 1) {
                        prev[index - 1].innerHTML = `Last Week - ${i.timeframes.weekly.previous}hrs`;
                    }
                    else {
                        prev[index - 1].innerHTML = `Last Week - ${i.timeframes.weekly.previous}hr`;
                    }
                }
            });
        }
    });
    monthly.addEventListener("click", function () {
        btns.forEach((e) => {
            e.classList.add("text-paleBlue");
        });
        monthly.classList.remove("text-paleBlue");
        for (let i of data) {
            cards.forEach((e, index) => {
                if (e.dataset.activitie == i.title) {
                    if (i.timeframes.daily.current != 1) {
                        hrs[index - 1].innerHTML = `${i.timeframes.monthly.current}hrs `;
                    }
                    else {
                        hrs[index - 1].innerHTML = `${i.timeframes.monthly.current}hr `;
                    }
                    if (i.timeframes.daily.previous != 1) {
                        prev[index - 1].innerHTML = `Last Month - ${i.timeframes.monthly.previous}hrs`;
                    }
                    else {
                        prev[index - 1].innerHTML = `Last Month - ${i.timeframes.monthly.previous}hr`;
                    }
                }
            });
        }
    });
});
