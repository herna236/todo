document.addEventListener("DOMContentLoaded", function() {
  let todoForm = document.getElementById("newTodoForm");
  let todoList = document.getElementById("todoList");

  todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let removeButton = document.createElement("button");
    removeButton.textContent = "X";

    let newTodo = document.createElement("li");
    newTodo.textContent= document.getElementById("task").value;

   
    newTodo.appendChild(removeButton);
    todoList.appendChild(newTodo);

    todoForm.reset();
  });

  todoList.addEventListener("click", function(event) {
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
      event.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === "button") {
      event.target.parentNode.remove();
    }
  });
});
