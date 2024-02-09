const form = document.getElementById('name-form');

form.addEventListener('submit', consoleForm);

function consoleForm(event) {
  event.preventDefault();

  const form = event.target;
  const value = form[0].value;
  console.log(value);
}


/*
Створити форму в HTML
В формі запитувати ім'я користувача

При відправленні форми - привітайте користувача ("привіт ім'я користувача")
Ім'я користувача візьміть з інпуту форми
*/

form.addEventListener('submit', consoleHello);

function consoleHello (event) {
  event.preventDefault();

  const form = event.target;
  const value = form[0].value;
  console.log(`Hello, ${value}!`);
}
