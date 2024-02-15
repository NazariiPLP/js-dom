/*
<article class="card-wrapper">
<img class="card-image" src="https://masterpiecer-images.s3.yandex.net/487ca75268ea11eeaea6da477c0f1ee2:upscaled" alt="John avatar">
<h2 class="username">John</h2>
<p class="description">Description for John</p>
</article> 
*/

const root = document.querySelector('#root');

function createUserCard(user) {
  // 1. Створення article
  const article = document.createElement('article');
  article.classList.add('card-wrapper')

  // 2. Створення img
  const img = document.createElement('img');
  img.setAttribute('src', user.profilePicture);
  img.setAttribute('alt', user.name);
  img.classList.add('card-image');

  // 3. Створення h2
  const h2 = document.createElement('h2');
  h2.append(user.name);
  h2.classList.add('username');

  // 4. Створення p
  const p = document.createElement('p');
  p.append(user.description);
  p.classList.add('description');

  // 5. Приєднати до article (п.1) елементи створенні в п. 2-4 (img, h2, p);
  article.append(img, h2, p);

  // 6. Повертаємо створений article
  return article;
}

const cardArray = data.map(user => createUserCard(user));

root.append(...cardArray);