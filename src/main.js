import './style.css'
import { addItem, removeItem } from './todo';
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <input type="text" id="todoInput" placeholder="Add a new todo..." />
    <button id="addTodo">Add Todo</button>
    <ul id="todoList"></ul>
    <a href='/react-todo'>react-todo</a>
  </div>
`
const DOM = {
  input: document.getElementById('todoInput'),
  addButton: document.getElementById('addTodo'),
  todoList: document.getElementById('todoList')
}
DOM.addButton.addEventListener('click', () => {
  const todoText = DOM.input.value.trim();
  if (!todoText) return;
  addItem(todoText)
  DOM.input.value = ''
});

DOM.todoList.addEventListener('click', function (e) {
  removeItem(e)
})
