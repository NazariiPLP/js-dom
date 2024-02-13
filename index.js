/*
1. Маємо  div
2. Маємо 5 кнопок, на кожній з ких написано колір
3. Задача: За натисненням на кнопку, фоновий колір (backgroundColor) ось цього діва має змінитися на відповідний колір, вказаний на кнопці
*/

const buttons = document.querySelectorAll('button');
const div = document.querySelector('#root');

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', clickHandler);  
// }

for(let btn of buttons) {
  btn.addEventListener('click', clickHandler);
}

function clickHandler({target: {dataset: {color}, parentNode}}) {
  // const {dataset: {color}} = target;
  // const {parentNode} = target;
  parentNode.style.backgroundColor = color;
}