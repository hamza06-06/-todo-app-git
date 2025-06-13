// Événement au clic sur le bouton "Ajouter"
document.getElementById('addBtn').addEventListener('click', () => {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');

  


  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onchange = () => {
    li.classList.toggle('done');
     saveTasks();
  };




  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.onclick = () => li.remove();
   saveTasks();
   updateEmptyMsg();


  
  li.textContent = task;
  li.classList.add('added');

  li.prepend(checkbox);
  li.appendChild(delBtn);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
   saveTasks();
   updateEmptyMsg();
});


// Sauvegarder les tâches dans localStorage
function saveTasks() {
  localStorage.setItem('tasks', document.getElementById('taskList').innerHTML);
}

// Charger les tâches au démarrage
window.onload = () => {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    document.getElementById('taskList').innerHTML = saved;
  }
  updateEmptyMsg();
};

// Filtrer les tâches : toutes, faites ou à faire
function filterTasks(type) {
  const tasks = document.querySelectorAll('#taskList li');
  tasks.forEach(li => {
    const isDone = li.classList.contains('done');
    if (type === 'all') {
      li.style.display = '';
    } else if (type === 'done') {
      li.style.display = isDone ? '' : 'none';
    } else if (type === 'todo') {
      li.style.display = !isDone ? '' : 'none';
    }
  });
}

function updateEmptyMsg() {
  const list = document.getElementById('taskList');
  const msg = document.getElementById('emptyMsg');
  msg.style.display = list.children.length === 0 ? 'block' : 'none';
}


