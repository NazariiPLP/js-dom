fetch('./uer.json')
.then((response) => {
  return response.json(); // перетворює нулі та одиниці на JS об'єкт
})
.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log(err);
})
.finally(() => {
  console.log('FINALLY question closed');
});
