// app.js

// Function to add a new to-do item
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const listItem = createTodoListItem(todoText);
        const todoList = document.getElementById('todoList');
        todoList.appendChild(listItem);
        todoInput.value = '';
    }
}

// Function to create a new to-do list item
function createTodoListItem(todoText) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTodo);
    const todoTextSpan = document.createElement('span');
    todoTextSpan.textContent = todoText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTodo);

    listItem.appendChild(checkbox);
    listItem.appendChild(todoTextSpan);
    listItem.appendChild(deleteButton);
    return listItem;
}

// Function to toggle the 'completed' state of a to-do item
function toggleTodo() {
    const todoItem = this.parentElement;
    if (this.checked) {
        todoItem.classList.add('completed');
        const todoList = document.getElementById('todoList');
        todoList.appendChild(todoItem);
    } else {
        todoItem.classList.remove('completed');
        const todoList = document.getElementById('todoList');
        todoList.insertBefore(todoItem, todoList.firstChild);
    }
}

// Function to delete a to-do item
function deleteTodo() {
    const todoItem = this.parentElement;
    const todoList = document.getElementById('todoList');
    todoList.removeChild(todoItem);
}

// Attach event listener to the 'Add' button
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addTodo);
