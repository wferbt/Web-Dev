
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


addBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

 
  if (taskText === '') {
    return; 
  }


  const li = document.createElement('li');

 
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });

  
  const span = document.createElement('span');
  span.textContent = taskText;

  
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.className = 'delete-btn';
  
 
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(li); 
  
  });

  
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  
  taskList.appendChild(li);

  
  taskInput.value = '';
}