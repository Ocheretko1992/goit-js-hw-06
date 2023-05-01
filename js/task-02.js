const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Перебираємо масив  "ingredients", тут же створюємо "li" в "ul", і додаємо "li - шці" клас "item"
const newIngredients = ingredients.map(el => {
  const newIngredients = document.createElement("li")
  newIngredients.classList.add("item")
  newIngredients.textContent = el
  return newIngredients
})
// Звертаємось до списку "ul" і добавляємо в нього масив "ingredients"
const ul = document.querySelector("ul")
ul?.append(...newIngredients)

































