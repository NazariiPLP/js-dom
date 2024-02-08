// console.log(this); // Window object

// alert('test'); // window.alert('test');

// console.dir(document);

/*

1. Всі елементи на сторінці - це окремі об'єкти.
2. Всі елементи можна підписати на події.

*/

function getAlert() {
  alert("Hello user!");
}

const buttonElement = document.getElementById("btn");

buttonElement.addEventListener("click", getAlert);
// 1 варіант: зареєстрували обробник події натискання миші кнопку
// 2 варіант: навісили обробник події натискання миші на кнопку

/*
Зробіть кнопку, додайте їй id
Напишіть функцію, яка виводить в консоль "привіт"
Навісити обробку події наведення миші на цю кнопку
*/

function consoleHello() {
  console.log("Привіт!");
}

const buttonElement2 = document.getElementById("btn2");

buttonElement2.addEventListener('mouseenter', consoleHello);