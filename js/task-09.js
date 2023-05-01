// @ts-nocheck

// Задаємо рандомні колори через функцію
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Отримуємо доступ до БОДІ і класів
let elBody = document.querySelector("body");
let changeButton = document.querySelector(".change-color");
let changeSpan = document.querySelector(".color");

// Вішаємо клік і зміну фону під час кліку на кнопку
changeButton.addEventListener("click", () => {
  changeSpan.textContent = getRandomHexColor();
  elBody.style.backgroundColor = changeSpan.textContent;
})