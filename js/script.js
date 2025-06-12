document.getElementById('addBtn').addEventListener('click', () => {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');

  


  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onchange = () => {
    li.classList.toggle('done');
  };




  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.onclick = () => li.remove();


  
  li.textContent = task;
  li.prepend(checkbox);
  li.appendChild(delBtn);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
});
