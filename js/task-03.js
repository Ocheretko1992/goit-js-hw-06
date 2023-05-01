const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900',
    alt: 'Group of Horses Running',
  },
];
// Достукуємося до класу "gallery"
const listImage = document.querySelector(".gallery")
// Робимо реструктурузацію, для того щоб отримати доступ до "image атрибутів",
// і виводимо ці атрибути, а саме "url" якщо все гаразд з картинкою або або адресою до картинки,
// або виводимо "alt", якщо картинка не загрузилась.
const imageEl = ({ url, alt }) => {
  return `<li> <img src = ${url} alt = ${alt}/>`;
}
// Перебираємо масив з картинок, ставимо між картинками проміжок, це все елемент "ul",
// в середину перед усіма дітьми елемента "ul".
const imageForEl = images.map(image => imageEl(image)).join("");
listImage?.insertAdjacentHTML("afterbegin", imageForEl)