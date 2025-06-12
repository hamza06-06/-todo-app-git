document.getElementById('addBtn').addEventListener('click', () => {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  

  
  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
});
