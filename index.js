/*
Задача: створення простенької TODO

Базовий рівень. 

1. Зробити input для вводу тексту
2. Зробити кнопку, яка по натисненню текст з input перетворює на елемент списку

<form>
  <input type="text" />
  <button>Click to add<button/>
</form>

<ul>
  <li>Зробити щось одне</li>
  <li>Зробити щось інше</li>
<ul>

Просунутий рівень.

Задача: до кожної li приєднати кнопку, за допомогою якої зі списку можна видалити
*/

const form = document.querySelector('#todo-form');

let taskCount = 0;

form.addEventListener('submit', addItem);

function addItem(event) {
  event.preventDefault();
  
  // Інкрементація лічильника завдань
  taskCount++;
  // Перевірка, чи не забагато завдань на сьогодні
  if(taskCount > 10 ) {
    alert('Досягено максимальної кількості завдань');
    return;
  }

  const {target} = event; 
  const [todoInput] = target; 
  
  // Валідація інпуту
  const value = todoInput.value.trim();
  if(value === '') {
    alert('Текст завдання не може бути порожнім');
    return;
  }
  // Створення елементу списку
  const list = document.querySelector('#todo-list');
  const li = document.createElement('li');
  li.textContent = value;
  list.append(li);

  // Створення кнопки для видалення елементу списку
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'remove task';
  deleteBtn.classList.add('remove-btn');
  deleteBtn.addEventListener('click', deleteHandler);
  li.append(deleteBtn);

  function deleteHandler({target: {parentNode}}) {
    parentNode.remove();
    taskCount--;
  }
  
  // Очищення тексту в формі
  target.reset();
}
