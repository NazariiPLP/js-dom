const btn = document.querySelector('button');
console.log(btn);

const btn2 = document.querySelector('.super-btn');
console.log(btn2);

const btn3 = document.querySelector('#btnbtn');
console.log(btn3);

const btnCollection = document.querySelectorAll('button');
console.log(btnCollection);

const paragraphCollection = document.querySelectorAll('.paragraph:nth-child(even)');
console.log(paragraphCollection);

for(let p of paragraphCollection) {
  p.style.color = 'red';
}
