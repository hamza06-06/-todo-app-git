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


  
  li.textContent = task;
  li.prepend(checkbox);
  li.appendChild(delBtn);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
   saveTasks();
});


function saveTasks() {
  localStorage.setItem('tasks', document.getElementById('taskList').innerHTML);
}


window.onload = () => {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    document.getElementById('taskList').innerHTML = saved;
  }
};
