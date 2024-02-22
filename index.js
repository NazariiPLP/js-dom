const p = new Promise(executor); // pending

function executor (resolve, reject) {
  // задача: знегерувати випадкове ціле число від 0 до 15
  const number = Math.floor(Math.random() * 16);
  
  // якщо число кратне 2 -> резолвимо проміс та повертаємо це число
  // якзл число не кратне 2 -> реджектимо проміс та повертаємо помилку

  if (number % 2 === 0) {
    resolve(number); //fulfilled
  } else {
    const err = new RangeError(`Error happanned: ${number}`);
    reject(err); // reject
  }
}

p.then((number) => {
  console.log(number)
}, (error) => {
  console.log(error);
});
