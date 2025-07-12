let addBtn = document.getElementById("add-btn");

function addTodo() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <button onclick="deleteTodo(this)">Delete</button>
  `;

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}
addBtn.addEventListener("click", addTodo);

function deleteTodo(button) {
  const li = button.parentElement;
  li.remove();
};