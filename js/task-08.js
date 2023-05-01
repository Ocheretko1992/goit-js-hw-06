// @ts-nocheck
// Отримуємо доступ до ФОРМИ, і до атрибутів інпута.
const toForm = document.querySelector(".login-form");
const usereMaill = document.querySelector('[type="email"]');
const toPassword = document.querySelector('[type="password"]');
//  Формі вішаємо "submit", дальше обєкту події даємо дефолтний стан.
toForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = {
    email: usereMaill.value,
    pass: toPassword.value
  }
  if (usereMaill.value === '' || toPassword.value === '') {
    return alert('Всі поля повинні бути заповнені!')
  }
    // Після всього зробленого скидаємо ФОРМУ до дефолтного стану, без перезагрузки сторінки.
  toForm.reset();
  console.log(elements) ;
});


