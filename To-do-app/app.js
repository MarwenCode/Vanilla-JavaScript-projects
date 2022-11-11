const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const deleteBtn = document.querySelector("delete-btn");
const container = document.querySelector(".app");

document.addEventListener("DOMContentLoaded", getTodos);

//create Item object
const createItemElement = (id, content) => {
  const element = document.createElement("div");
  return element;
};

// localStorage

const getItemsLocalStorage = () => {
  return JSON.parse(localStorage.getItem("items") || "[] ");
};

// console.log(getItemsLocalStorage());

const setItemsLocalStorage = (notes) => {
  localStorage.setItem("items", JSON.stringify(notes));
};

//const add to do
const addTodo = (e) => {
  const items = getItemsLocalStorage();

  e.preventDefault();

  const valueInput = todoInput.value;

  const itemObject = {
    id: new Date().getTime(),
    content: valueInput,
  };

  console.log(itemObject);

  createItemElement(itemObject.id, itemObject.content);

  const newTodo = document.createElement("li");
  newTodo.textContent = valueInput;

  newTodo.classList.add("todo");
  todoList.appendChild(newTodo);
  items.push(itemObject);

  //create delete button
  const deleteBtn = document.createElement("button");

  deleteBtn.innerHTML = ` <button type="button" class="delete-btn">
  <i class="fas fa-trash"></i>
</button>`;

  deleteBtn.classList.add("delete-btn");
  newTodo.appendChild(deleteBtn);

  todoInput.value = "";

  setItemsLocalStorage(items);
};

function getTodos() {
  let todos;
  if (localStorage.getItem("items") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("items"));
  }
  todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todo.content;
    console.log(todo);
    newTodo.classList.add("todo");
    todoList.appendChild(newTodo);

    const deleteBtn = document.createElement("button");

    deleteBtn.innerHTML = ` <button type="button" class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>`;
    deleteBtn.classList.add("delete-btn");

    newTodo.appendChild(deleteBtn);
    todoList.appendChild(todoDiv);
  });
}

//click button
todoButton.addEventListener("click", addTodo);

//delete items
const deleteItem = (e) => {
 

  if (e.target.parentElement.classList.contains("delete-btn")) {
    e.target.parentElement.parentElement.remove();
     // Remove from local storage
     removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
  console.log(e.target);
};

todoList.addEventListener("click", deleteItem);

// removeTaskFromLocalStorage function
function removeTaskFromLocalStorage(index) {
 
  const items = getItemsLocalStorage();
  console.log(items)
  
  items.splice(index, 1)

  setItemsLocalStorage(items)



}
