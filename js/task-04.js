// @ts-nocheck

const btn1 = document.querySelector('[data-action = "decrement"]');
const btn2 = document.querySelector('[data-action = "increment"]');
const variableData = document.querySelector("#value")

let value = 0;

btn1.addEventListener("click", () => {
    value -= 1;
    variableData.textContent = value
});

btn2.addEventListener("click", () => {
    value += 1;
    variableData.textContent = value
});


