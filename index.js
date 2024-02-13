const button = document.querySelector('button');

button.addEventListener('click', clickHandler);

function clickHandler({target}) {
  console.log(target);
  button.disabled = true;
}

// const clickEvent = new MouseEvent('click');
// button.dispatchEvent(clickEvent);