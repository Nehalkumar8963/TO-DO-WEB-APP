function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDate = document.getElementById("taskDate");
  const taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.innerHTML = `${taskInput.value} <br><small>${taskDate.value ? "📅 " + taskDate.value : ""}</small>`;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.innerText = "✓";
  completeBtn.onclick = () => {
    span.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.innerText = "✎";
  editBtn.onclick = () => {
    let newText = prompt("Edit Task:", taskInput.value);
    if (newText) span.innerHTML = `${newText} <br><small>${taskDate.value ? "📅 " + taskDate.value : ""}</small>`;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "✕";
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = "";
  taskDate.value = "";
}
