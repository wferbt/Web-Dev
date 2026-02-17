// Grab the elements from the DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Event Listener for the Add button
addBtn.addEventListener('click', addTask);

// Optional: Allow pressing 'Enter' to add a task
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  // Prevent adding empty tasks
  if (taskText === '') {
    return; 
  }

  // 1. Create the <li> wrapper
  const li = document.createElement('li');

  // 2. Create the checkbox element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  // Checkbox Event Listener: Toggle the 'completed' class
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });

  // 3. Create the text span element
  const span = document.createElement('span');
  span.textContent = taskText;

  // 4. Create the delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️'; // Using a standard unicode icon
  deleteBtn.className = 'delete-btn';
  
  // Delete Button Event Listener: Remove the <li> from the DOM
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(li); 
    // Note: li.remove() also works in modern browsers
  });

  // 5. Assemble the elements (Append children to the li)
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // 6. Append the fully assembled li to the <ul> on the page
  taskList.appendChild(li);

  // Clear the input field after adding
  taskInput.value = '';
}