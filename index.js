// timeout - виконує функцію один раз після затримки
// interval - виконуватиме функцію багато разів з затримкою

// const intervalID = setInterval(() => {
//     console.log('Logging')
// }, 2000);

/*
Задача: кожну секунду буде виводити в консоль числа від 1 до 10
Виконати цю задачу через інтервали 
*/

function counter() {
    let i = 1;
    const intervalID = setInterval(() => {
        console.log(i++);
        if(i > 10) {
            clearInterval(intervalID);
            console.timeEnd();
        }
    }, 1000);
}

console.time('1');
counter();