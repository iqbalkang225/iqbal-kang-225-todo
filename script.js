const todoDeleteBtns = document.getElementsByClassName("todo-delete");
const input = document.querySelector(".input");
const todoContainer = document.querySelector(".todo-list");

// Function to display user input as a list item
const generateTodoItem = function () {
  if (input.value) {
    const todo = input.value;

    const html = `
      <li class="todo-item">
        <span class="todo"> ${todo} </span>
        <span class="todo-btn">
          <i class="todo-delete fa-solid fa-xmark"></i
        ></span>
      </li>
    `;
    todoContainer.insertAdjacentHTML("afterbegin", html);
    input.value = "";
  }
};

// Event Listeners
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generateTodoItem();
  }
});

todoContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo-delete")) {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("completed");
  }
});

todoContainer.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("todo")) {
    e.target.parentElement.remove();
  }
});
