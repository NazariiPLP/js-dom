/*

    <section id="root">
      <article class="card-wrapper">
        <div class="image-wrapper">
        <img class="card-image" src="https://masterpiecer-images.s3.yandex.net/487ca75268ea11eeaea6da477c0f1ee2:upscaled">
        </div>
        <h2 class="username">John</h2>
        <p class="description">Description for John</p>
      </article>
    </section>

*/

const root = document.querySelector('#root');

function createUserCard(user) {
    // 1. Cтворюємо обгортку для картинки
    const imgWrapper = createImageWrapper(user);

    // 3. Створення h2
    const h2 = createElement('h2', {classNames: ['username']}, user.name);

    // 4. Створення p
    const p = createElement('p', {classNames: ['description']}, user.description);

    // 5. Створюємо і повертаємо article, в який вкладені створені img, h2, p
    return createElement('article', {classNames: ['card-wrapper']}, imgWrapper, h2, p);
}

const cardArray = data.map(user => createUserCard(user));

root.append(...cardArray);

/**
 * @param {String} type - тег елемента, який нам треба створити
 * @param {String[]} classNames - список класів, які треба додати до елемента
 * @param {...Node} childNodes - список дочірніх вузлів
 * @returns {HTMLElement}
 */
function createElement(type, {classNames}, ...childNodes) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...childNodes);

    return elem;
}

function imageLoadHandler({target}) {
  console.log('image successfully loaded');
  const parrentWrapper = document.querySelector(`#wrapper${target.dataset.id}`);
  parrentWrapper.append(target);
}

function imageErrorHandler({target}) {
  target.remove();
  console.log('image loading has error');
}

function createUserImage(user) {
  const img = createElement('img', {classNames: ['card-image']});
  img.setAttribute('src', user.profilePicture);
  img.setAttribute('alt', user.name);
  img.dataset.id = user.id;
  
  img.addEventListener('load', imageLoadHandler);
  img.addEventListener('error', imageErrorHandler);

  return img;
}

function createImageWrapper(user) {
  // 1. Створення заглушки
  const imgWrapper = createElement('div', {classNames: ['image-wrapper']});
  imgWrapper.setAttribute('id', `wrapper${user.id}`);

  // 2. Створення img
  const img = createUserImage(user);

  return imgWrapper;
}