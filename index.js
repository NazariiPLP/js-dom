function createDiv() {
  const div = document.createElement("div"); // 1. Створення елементу у пам'яті
  div.classList.add("box"); // 2. До цього елементу приєднумо стильовий клас
  div.append("Hello world"); // 3. До цього елемену приєдуємо текстовий вузол
  document.body.append(div); // 4. Приєднуємо текствоий елемент до body
  /*
  <div class="box">Hello world</div>
  */
  // btn.removeEventListener('click', createDiv);
}

const btnDiv = document.querySelector(".btn-div");
btnDiv.addEventListener("click", createDiv);

/*
Спробуйте створити декілька HTML елементів через JS, (document.createElement)
Спробуйте додати якісь стильові класи цим елементам. (element.classlist.add)
Спробуйте додати якийсь текстовий вузол для елементів. ( element.append('text...')  )
Причепіть створені елементи до body (  document.body.append(element)  )
*/

const btnHeader = document.querySelector('.btn-header');
btnHeader.addEventListener('click', createHeader);


function createHeader() {
  const h1 = document.createElement('header');
  h1.classList.add('header');
  h1.append('Main header');
  document.body.append(h1);
}

const btnParagraph = document.querySelector('.btn-paragraph');
btnParagraph.addEventListener('click', createParapraph);

function createParapraph() {
  const paragraph = document.createElement('p');
  paragraph.classList.add('center-paragrapg');
  paragraph.append('Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi fugiat optio, quis repellendus sunt aperiam nostrum aut, autem, accusantium eum adipisci quod pariatur earum dolore cupiditate repellat illum nemo?');
  document.body.append(paragraph);
}