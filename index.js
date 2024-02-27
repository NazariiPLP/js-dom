/*
Задача 1

У вас є сторінка.
На сторінці є кнопка "підвантажити юзера".
При натисненні на цю кнопку, на сторінку має додатися картка юзера.

Картка може містити:
- аватарка
- ім'я, прізвище
- імейл
- країна
- вік

https://randomuser.me/api
*/

const API_BASE = 'https://randomuser.me/api';

const btn = document.querySelector('.btn');

btn.addEventListener('click', buttonClickHandler);

function buttonClickHandler({target}) {
  requaestApi(API_BASE);
}

function requaestApi(API_BASE){
  const url = API_BASE;

  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data)
    displayUser(data)
  });
};

function displayUser(data) {
  // Get avatar image
  const {results: [{picture}]} = data;
  const avatar = picture.large;

  // Get name, lastname
  const {results: [{name}]} = data;
  const {first} = name;
  const firstName = first;
  const {last} = name;
  const lastName = last;

  // Get email
  const {results: [{email}]} = data;
  console.log(email);

  // Get country
  const {results: [{location}]} = data;
  const country = location.country;
  console.log(country);

  //Get age
  const {results: [{dob}]} = data;
  const age= dob.age;
  console.log(age);
  
  const section = document.querySelector('#wrapper');
  section.classList.add('wrapper');

  const userImg = document.querySelector('#user-img');
  userImg.classList.add('user-img');
  userImg.setAttribute('src', avatar);

  const h1 = document.querySelector('#name');
  h1.textContent = `${firstName} ${lastName}`;

  const emailP = document.querySelector('#email');
  emailP.textContent = `Email: ${email}`;

  const counstryP = document.querySelector('#country');
  counstryP.textContent = `Country: ${country}`;
  
  const ageP = document.querySelector('#age');
  ageP.textContent = `Age: ${age}`;
}