document.getElementById("add-task-btn").addEventListener("click", addTask);
document.getElementById("search-input").addEventListener("input", handleSearch);
document
  .getElementById("show-active-btn")
  .addEventListener("click", () => filterTasks("active"));
document
  .getElementById("show-completed-btn")
  .addEventListener("click", () => filterTasks("completed"));
document
  .getElementById("show-all-btn")
  .addEventListener("click", () => filterTasks("all"));

window.onload = loadTasks;

let draggedTask = null;

// Add a new task
function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = {
    id: Date.now(),
    text: taskText,
    status: "active",
  };

  const taskItem = createTaskElement(task);
  document.getElementById("task-list").appendChild(taskItem);
  saveTasksToLocalStorage();
  taskInput.value = "";
}

// Create a task element
function createTaskElement(task) {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  taskItem.setAttribute("draggable", true);
  taskItem.dataset.id = task.id;
  taskItem.dataset.status = task.status;

  taskItem.innerHTML = `
    <span class="task-text">${task.text}</span>
    <button class="mark-completed-btn">Mark as Completed</button>
    <button class="mark-active-btn" style="display:none;">Mark as Active</button>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  taskItem.addEventListener("dragstart", handleDragStart);
  taskItem.addEventListener("dragover", handleDragOver);
  taskItem.addEventListener("drop", handleDrop);
  taskItem.addEventListener("dragenter", handleDragEnter);
  taskItem.addEventListener("dragleave", handleDragLeave);

  taskItem
    .querySelector(".mark-completed-btn")
    .addEventListener("click", () => markAsCompleted(taskItem));
  taskItem
    .querySelector(".mark-active-btn")
    .addEventListener("click", () => markAsActive(taskItem));
  taskItem
    .querySelector(".edit-btn")
    .addEventListener("click", () => editTask(taskItem));
  taskItem
    .querySelector(".delete-btn")
    .addEventListener("click", () => deleteTask(taskItem));

  return taskItem;
}

// Drag-and-drop functions
function handleDragStart(event) {
  draggedTask = event.target;
  event.dataTransfer.setData("text/plain", draggedTask.dataset.id);
  setTimeout(() => {
    draggedTask.style.display = "none";
  }, 0);
}

function handleDragEnd(event) {
  event.target.classList.remove("dragging");
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  if (
    event.target.classList.contains("task-item") &&
    event.target !== draggedTask
  ) {
    const allTasks = Array.from(document.querySelectorAll(".task-item"));
    const draggedTaskId = draggedTask.dataset.id;
    const targetTaskId = event.target.dataset.id;

    const draggedTaskElement = document.querySelector(
      `.task-item[data-id='${draggedTaskId}']`
    );
    const targetTaskElement = document.querySelector(
      `.task-item[data-id='${targetTaskId}']`
    );

    event.target.parentNode.insertBefore(draggedTaskElement, targetTaskElement);
    reorderTasksInLocalStorage();
  }
  draggedTask.style.display = "block";
}

function handleDragEnter(event) {
  if (event.target.classList.contains("task-item")) {
    event.target.style.border = "2px dashed #3498db";
  }
}

function handleDragLeave(event) {
  if (event.target.classList.contains("task-item")) {
    event.target.style.border = "";
  }
}

// Task actions
function reorderTasksInLocalStorage() {
  const taskList = document.getElementById("task-list");
  const tasks = Array.from(taskList.children).map((taskElement) => ({
    id: taskElement.dataset.id,
    text: taskElement.querySelector(".task-text").textContent,
    status: taskElement.dataset.status,
  }));

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function editTask(taskElement) {
  const taskTextElement = taskElement.querySelector(".task-text");
  const newTaskText = prompt("Edit Task", taskTextElement.textContent);
  if (newTaskText && newTaskText !== taskTextElement.textContent) {
    taskTextElement.textContent = newTaskText;
    saveTasksToLocalStorage();
  }
}

function markAsCompleted(taskElement) {
  taskElement.dataset.status = "completed";
  taskElement.querySelector(".mark-completed-btn").style.display = "none";
  taskElement.querySelector(".mark-active-btn").style.display = "inline-block";
  taskElement.style.textDecoration = "line-through";
  taskElement.style.backgroundColor = "#a3e4d7";
  saveTasksToLocalStorage();
}

function markAsActive(taskElement) {
  taskElement.dataset.status = "active";
  taskElement.querySelector(".mark-active-btn").style.display = "none";
  taskElement.querySelector(".mark-completed-btn").style.display =
    "inline-block";
  taskElement.style.textDecoration = "none";
  taskElement.style.backgroundColor = "#ecf0f1";
  saveTasksToLocalStorage();
}

function deleteTask(taskElement) {
  taskElement.remove();
  saveTasksToLocalStorage();
}

// Search and filter functionality
function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  const taskItems = document.querySelectorAll(".task-item");

  taskItems.forEach((task) => {
    const taskText = task.querySelector(".task-text").textContent.toLowerCase();
    task.style.display = taskText.includes(searchTerm) ? "flex" : "none";
  });
}

function filterTasks(status) {
  const taskItems = document.querySelectorAll(".task-item");

  taskItems.forEach((task) => {
    task.style.display =
      status === "all" || task.dataset.status === status ? "flex" : "none";
  });
}

// Local storage functions
function saveTasksToLocalStorage() {
  const taskList = document.getElementById("task-list");
  const tasks = Array.from(taskList.children).map((taskElement) => ({
    id: taskElement.dataset.id,
    text: taskElement.querySelector(".task-text").textContent,
    status: taskElement.dataset.status,
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => {
    const taskItem = createTaskElement(task);
    document.getElementById("task-list").appendChild(taskItem);
  });
}
