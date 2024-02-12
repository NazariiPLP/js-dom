/*
Якщо ви натискаєте на цю кнопку - на сайті вмикається темний режим
(для тегу body встановіть 
backgroundColor: якийсь_темний_колір;
color: white;    
)

Якщо ви натискаєте на цю кнопку ще раз - на сайті ВИМИКАЄТЬСЯ темний режим

(toggle)
*/

const btn = document.querySelector('#btn');

btn.addEventListener('click', changeMode);

function changeMode(event) {
  document.body.classList.toggle('dark-theme');
}
