const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const container = document.querySelector(".app");


document.addEventListener("DOMContentLoaded", getTodos);

//create Item object
const createItemElement = (id, content) => {
  const element = document.createElement("div");
  return element;
};



// localStorage

// JSON.parse(window.localStorage.getItem('items'));

const getItemsLocalStorage = () => {
  return JSON.parse(localStorage.getItem("items") || "[] ");
};

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

  //   const element = document.createElement("div")
  createItemElement(itemObject.id, itemObject.content);
  // itemElement.classList.add("todo")
  const newTodo = document.createElement("li");
  newTodo.textContent = valueInput;
  //    newTodo.classList.add("todo-item");
  newTodo.classList.add("todo");
  todoList.appendChild(newTodo);
  items.push(itemObject);

  //create delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("trash-btn");
  newTodo.appendChild(deleteButton);
  //   todoList.appendChild(itemElement)
  // todoList.insertBefore(itemElement, deleteButton)
  todoInput.value = "";
  //   localStorage.setItem("todos", JSON.stringify(todos));
  setItemsLocalStorage(items);
//   showTasks()

};
//click button
todoButton.addEventListener("click", addTodo);



function getTodos() {
    // const itemObject = {
    //     id: new Date().getTime(),
    //     content: valueInput,
    //   };
    getitems = getItemsLocalStorage()

    let todos;
    if (localStorage.getItem("items") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("items"));
    }
    todos.forEach(function (todo) {
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todoo");
      const newTodo = document.createElement("li");
      newTodo.innerText = todo;
      console.log(todo)
      newTodo.classList.add("todo");
      todoList.appendChild(newTodo);
    //   todoDiv.appendChild(newTodo);
      const trashButton = document.createElement("button");
      trashButton.innerHTML = '<li class="fas fa-trash"></li>';
      trashButton.classList.add("trash-btn");
    //   todoDiv.appendChild(trashButton);
    newTodo.appendChild(trashButton);
      todoList.appendChild(todoDiv);
    //   container.appendChild(todoList)
    });
  }










// const showTasks = () => {
//     let getLocalStorage = localStorage.getItem("items")
//     if(getLocalStorage == null) {
//         listarray = []
//     }else {
//         listarray = JSON.parse(getLocalStorage)
//     }
// }




// showTasks()







// window.onload(localStorage.getItem("items"))




// create List item

// function setupItems() {
//     let items = getItemsLocalStorage();
  
//     if (items.length > 0) {
//       items.forEach( (item) => {
//         createListItem(item.id, item.value);
//       });
//     //   container.classList.add("todo-container");
//     }
//   }




// const createListItem = (id, value) => {
//   const items = getItemsLocalStorage();
// //   e.preventDefault();

//   const valueInput = todoInput.value;

//   const itemObject = {
//     id: new Date().getTime(),
//     content: "",
//   };

//   console.log(itemObject);

//   createItemElement(itemObject.id, itemObject.content);

//   const newTodo = document.createElement("li");
//   newTodo.textContent = valueInput;

//   newTodo.classList.add("todo");
//   todoList.appendChild(newTodo);
//   items.push(itemObject);

//   //create delete button
//   const deleteButton = document.createElement("button");
//   deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
//   deleteButton.classList.add("trash-btn");
//   newTodo.appendChild(deleteButton);
//   items.push(itemObject);

// };



//   window.addEventListener("DOMContentLoaded", setupItems);
// //  window.addEventListener("load", getItemsLocalStorage())
