/*
Eventloop - механізм, який керує виконанням коду.

Концептуально, ідея Event Loop полягає в тому, щоб не заблокувати основний потік даних.
Технічно ця концепція реалізується через Google Chrome, який написаний на C++
*/

// setTimeout();

// 1. завантажується сторінка
// 2. реєструється таймаут
// 3. після того, як пройде затримка - запускаємо якусь функцію

function func() {
    console.log(2 + 2);
}

// func();
const timeoutID = setTimeout(func, 2000);

func();

/*
Напишіть функцію, яка буде вітати юзера alert('Hello user!')
Вітати функція має юзера не одразу, а тільки через 8 секунд, пясля того, як сторінка завантажиться
*/

function userGreetings() {
    alert('Hello user!');
}

const helloTimeoutID = setTimeout(userGreetings, 8000);