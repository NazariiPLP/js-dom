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

const btn = document.querySelector("button");
btn.addEventListener("click", createDiv);

/*
Спробуйте створити декілька HTML елементів через JS, (document.createElement)
Спробуйте додати якісь стильові класи цим елементам. (element.classlist.add)
Спробуйте додати якийсь текстовий вузол для елементів. ( element.append('text...')  )
Причепіть створені елементи до body (  document.body.append(element)  )
*/