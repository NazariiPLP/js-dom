/*

Завдання: Створити конвертер валют

Декомпозиція:

+ 1. Створити HTML-сторінку з формою, яка містить два поля вводу:
одне поле для введення суми в одній валюті
інше поле - для вибору валюти, в яку ми будемо цю суму конвертувати

+ 2. Додати в форму кнопку конвертувати

3. Написати JS обробник події відправки форми:
- отримати значення введеної суми та обраної валюти
- ообчислити конвертовану суму, помноживши введену користувачем суму на курс обміну вибраної користувачем валюти
- вивести результат конвертації на сторінку для відображення результату (innerHTML)

4. Підписати форму на подію "submit", в якості лісенера використовувати функцію з п. 3

*/

const CURRENCY = {
  USD_TO_UAH: 37.65,
  EUR_TO_UAH: 40.61,
}

const converterForm = document.querySelector('#currency-converter-form');

converterForm.addEventListener('submit', convertHandler)

function convertHandler(event) {
  event.preventDefault();

  const amount = Number(document.querySelector('#amount').value);
  const currency = document.querySelector('#currency').value;

  let convertedAmount;
  const {USD_TO_UAH: usdCourse, EUR_TO_UAH: eurCourse} = CURRENCY;

  switch (currency) {
    case 'USD': {
      convertedAmount = amount * usdCourse;
      break;
    }
    case 'EUR': {
      convertedAmount = amount * eurCourse;
      break
    }
    default: throw new Error('Something gone wrong!');
  }

  // if(currency === 'USD') {
  //   convertedAmount = amount * usdCourse;
  // } else if (currency === 'EUR') {
  //   convertedAmount = amount * eurCourse;
  // } else {
  //   throw new Error('Something gone wrong!');
  // }

  const relustDiv = document.querySelector('#result');
  relustDiv.innerHTML = `${amount} ${currency} = ${convertedAmount.toFixed(2)} UAH`;
}