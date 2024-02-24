const p = new Promise();

function executor(resolve, reject) {
  setTimeout(() => {
    resolve('It time'); // fulfiled
  }, 15000);
}

const h1 = document.querySelector('#root');

p.then((str) => {
  h1.append(str);
});

