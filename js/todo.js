const toDoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoIput = toDoForm.querySelector("input");

let toDos = [];
const TODOS_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function todoListDelete(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  span.innerHTML = newToDoObj.text;
  li.appendChild(button);
  button.innerHTML = "X";
  button.addEventListener("click", todoListDelete);

  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoIput.value;
  todoIput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newToDoObj);
  paintTodo(newToDoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((e) => {
    paintTodo(e);
  });
}
