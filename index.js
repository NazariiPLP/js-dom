/*
Регулярні вирази - своєрідний фільтр для текстових даних.

Регулярні вирази- інструмент порівняння якогось рядка із текстових даних.

За допомогою регулярки, ми описуємо, який 

^ - початок рядка
$ - кінець рядка
[a-z] - послідовність символів
[a-zA-Z] - два діапазони одночасно
[abcdef] - перерахунок символів вручну

/^[a-zA-Z]{2, 5}/ - шукаємо набір від 2 до 5 символів
/^[a-zA-Z]{2,}[0-9]/ - шукаємо слово будь-якої довжини більше двох літер, в кінці має бути мінімум 1 цифра і мінімум 1 .
/^[a-zA-Z]{2,}[0-9]+\.$ - шукаємо слово будь-якої довжини більше двох літер, в кінці має бути мінімум 1 цифра і мінімум 1 .
*/

// const regexp = /^Test$/;

const str1 = 'hello';
const str2 = new String('hello');

// RegExp

const reg1 = /^[a-zA-Z]{2, 5}$/;
console.dir(reg1);

const reg2 = new RegExp('^[a-zA-Z]{2, 5}$');
console.dir(reg2);

// Експерементуємо: валідуємо email через регулярку

const testString = 'sunnyday56@gmail.com';
const emailRegExp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

console.log(emailRegExp.exec(testString)); // array
console.log(emailRegExp.test(testString)); // true

console.log(testString.match(emailRegExp)); // array - спрацює як exec

let str = 'Blue SKY';
console.log(str.replace(/[A-Z]{3}/, 'test123'));

