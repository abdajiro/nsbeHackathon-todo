document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const taskDate = document.getElementById('taskDate');
  const taskDescribe = document.getElementById('taskDescribe');
  const categorySelect = document.getElementById('categorySelect');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const showCompletedBtn = document.getElementById('showCompletedBtn');
  const taskList = document.getElementById('taskList');
  const completedTaskList = document.getElementById('completedTaskList');

  addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    const taskDateTime = taskDate.value.trim();
    const taskDescription = taskDescribe.value.trim();
    const taskCategory = categorySelect.value;

    if (taskText !== '') {
      addTask(taskText, taskDateTime, taskDescription, taskCategory);
      taskInput.value = '';
      taskDate.value = '';
      taskDescribe.value = '';
      taskInput.focus();
    }
  });

  showCompletedBtn.addEventListener('click', function() {
    if (completedTaskList.style.display === 'none') {
      completedTaskList.style.display = 'block';
    } else {
      completedTaskList.style.display = 'none';
    } 
  });

  function addTask(taskText, taskDateTime, taskDescription, taskCategory) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>Title:</strong> ${taskText}</span><br>
      <span><strong>Date:</strong> ${taskDateTime}</span><br>
      <span class="description"><strong>Description:</strong> ${taskDescription}</span><br>
      <span><strong>Category:</strong> ${taskCategory}</span>
      <button class="completeTaskBtn">Complete Task</button>
    `;
    li.classList.add('task-item');
    taskList.appendChild(li);

    li.addEventListener('click', function() {
      // Toggle class to show/hide description
      li.querySelector('.description').classList.toggle('show-description');
    });

    const completeTaskBtn = li.querySelector('.completeTaskBtn');
    completeTaskBtn.addEventListener('click', function() {
      li.classList.toggle('completed');
      // Move the completed task to the completedTaskList
      if (li.classList.contains('completed')) {
        completedTaskList.appendChild(li);
      } else {
        taskList.appendChild(li);
      }
    });
  }
});
