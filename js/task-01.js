// Рахуємо і виводимо в консоль категорії ul#categories, а саме к-ть елементів li
const categoriesItem = document.getElementById("categories");
// @ts-ignore
const newArray = categoriesItem.children
console.log(`Number of categories: ${newArray.length}`);
// console.dir(newArray)

// Виводимо в консоль значення категорій, і кількість елементів в цих же категоріях.
// @ts-ignore
const subItem = categoriesItem.querySelectorAll(".item");
subItem.forEach(item => {
    // @ts-ignore
    const elementName = item.querySelector("h2").textContent;
    const elementsCount = item.querySelectorAll("li").length;
    console.log(`Category: ${elementName}`);
    console.log(`Elements: ${elementsCount}`);
});














































































































