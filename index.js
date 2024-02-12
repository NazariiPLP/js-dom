/*
1. Є div
2. Є дві кнопки: одна - "Зробити червоним", друга - "Зробити зеленим"

3. За натисненням на кнопку, фоновий колір div має змінитисб на відповідний, який вказаний на кнопці
*/

const div = document.querySelector("#box");
div.classList.add('bg-color-red');
console.log(div.classList);
div.classList.remove('bg-color-red');
console.log(div.classList);

const [red, green] = document.querySelectorAll(".btn");

red.addEventListener("click", redBtnHandler);

function redBtnHandler(event) {
  // div.style.backgroundColor = "red";
  div.classList.toggle('bg-color-red');
}

green.addEventListener("click", greenBtnHandler);

function greenBtnHandler(event) {
  // div.style.backgroundColor = "green";
  div.classList.toggle('bg-color-green');
}
