const button = document.querySelector('button');
const div = document.querySelector('#root');

function eventHandlerButton(event) {
  console.log('hi from button handler');
}

const eventHandlerBody = (event) => {
  console.log('hi from body handler');
  event.stopPropagation();
  console.log(this);
  // Всередині Function Declaratin та Function Expression, this -> body
  // Arrow Function, this -> Window
}

button.addEventListener('click', eventHandlerButton, {capture: true});
// div.addEventListener('click', eventHandler, {capture: true});
document.body.addEventListener('click', eventHandlerBody, {capture: true});
// window.addEventListener('click', eventHandler, {capture: true});

/*
3 фази події:

1. Фаза занурення.
Подія стається на рівні ОС, ОС передає подію браузеру (Window), то передає подію document -> body -> .....

2. Фаза цілі.
Подія досягла елемента, елемент - це target

3. Фаза сплиття.
Подія починає спливати у зворотньому напрямку, тобто від елемента (таргета) до ОС...
*/