export function addItem(text) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.style.marginLeft = '10px';
  li.textContent = text;
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}

export function removeItem(e) {
    if (e.target && e.target.tagName === 'BUTTON') {
      const li = e.target.closest('li');
      li.remove()
    }
}