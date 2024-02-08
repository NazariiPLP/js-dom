// console.log(this); // Window object

// alert('test'); // window.alert('test');

// console.dir(document);

/*

1. Всі елементи на сторінці - це окремі об'єкти.
2. Всі елементи можна підписати на події.

*/

function getAlert () {
    alert('Hello user!');
}

const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', getAlert);
// 1 варіант: зареєстрували обробник події натискання миші кнопку
// 2 варіант: навісили обробник події натискання миші на кнопку