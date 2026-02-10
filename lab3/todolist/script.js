let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

render();

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();

  if (!text) return;

  tasks.push({
    id: Date.now(),
    text: text,
    done: false
  });

  input.value = '';
  save();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  save();
  render();
}

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  );
  save();
  render();
}

function save() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function render() {
  const list = document.getElementById('todoList');
  list.innerHTML = '';

  tasks.forEach(task => {
    const item = document.createElement('div');
    item.className = 'todo-item';

    item.innerHTML = `
      <input type="checkbox" ${task.done ? 'checked' : ''}
        onchange="toggleTask(${task.id})">

      <span class="todo-text"
        style="${task.done ? 'text-decoration:line-through;color:gray;' : ''}">
        ${task.text}
      </span>

      <button class="delete-btn" onclick="deleteTask(${task.id})">🗑</button>
    `;

    list.appendChild(item);
  });
}
