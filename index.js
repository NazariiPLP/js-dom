// const event = new Event('click');
// console.log(event.composedPath());

const button = document.querySelector('button');

button.addEventListener('click', btnClickHandler);

function btnClickHandler(event) {
  console.log('Hi from button click handler');
  // console.log(event.composedPath());
  // console.log(event.target); // той, на кому спрацювала подія
  // target - елемент на якому сталася подія
  // target - елемент, до якого буде занурюватись подія
  // console.log(event.currentTarget); // той, якому належав обробник події
  // currentTarget - елемент, якому належав обробник події
}

function bodyClickHandler(event) {
  console.log('Hi from body click handler');
}

document.body.addEventListener('click', bodyClickHandler);

const clickEvent = new MouseEvent('click');

// button.dispatchEvent(clickEvent);

/*
3 фази події:

1. Фаза занурення.
Подія стається на рівні ОС, ОС передає подію браузеру (Window), то передає подію document -> body -> .....

2. Фаза цілі.
Подія досягла елемента, елемент - це target

3. Фаза сплиття.
Подія починає спливати у зворотньому напрямку, тобто від елемента (таргета) до ОС...
*/