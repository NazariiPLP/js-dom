// console.log(this); // Window object

// alert('test'); // window.alert('test')

//console.dir(document);

/*

1. Всі елементи на сторінці - окремі об'єкти
2. Всі елементи можна підписати на події

*/

function getAlert(event) {
  const btn = event.target;

  if (btn.style.backgroundColor === "red") {
    btn.style.backgroundColor = "unset";
  } else {
    btn.style.backgroundColor = "red";
  }
}

const buttonElement = document.getElementById("btn");

buttonElement.addEventListener("click", getAlert);
// 1 варіант: зареєстрували обробник події натискання миші на кнопку
// 2 варіант: навісили обробник натискання миші на кнопку

/*

Зробіть кнопку, додайте їй id
Напишіть функцію, яка виводить в консоль "привіт"
Навісити обробку події наведення миші на цю кнопку


*/

const secondButton = document.getElementById("btn2");

function consoleHello(event) {
  console.log("Привіт");
  event.target.removeEventListener("mouseenter", consoleHello);
}

secondButton.addEventListener("mouseenter", consoleHello);

////

const noButton = document.getElementById("no-btn");

noButton.addEventListener("mouseenter", ghostButton /* (event) => {
    console.log(event);
      const btn = event.target;
      btn.style.display = "none";
    event.target.removeEventListener("mouseenter", ghostButton);
    console.log('test');
  }
  */
  //  Bad practice!
);

function ghostButton(event) {
  console.log(event);
  const btn = event.target;
  btn.style.display = "none";
  event.target.removeEventListener("mouseenter", ghostButton);
  console.log("test");
}
