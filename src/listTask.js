import Tasks from './Tasks.js';

const displayAllTasks = () => {
  if (JSON.parse(localStorage.getItem('tasks'))) {
    Tasks.tasks = JSON.parse(localStorage.getItem('tasks'));

    let htmlTask = '';
    Tasks.tasks.forEach((task) => {
      htmlTask = `
    <li class="litasks task-${task.id}">
      <div class="task">
        <input type="checkbox" name="task" class="check-${task.id}"> 
        <input type="text" readonly class="task-desc" value="${task.description}" id="input-${task.id}"/>
      </div>
      <i class="fas fa-ellipsis-v three-dot-icon-${task.id}"></i>
      <i class="fas fa-trash trash-${task.id}"></i>
    </li>
    `;
      const inputItem = document.getElementById('input-item');
      inputItem.insertAdjacentHTML('afterend', htmlTask);
      const threeDotIcon = document.querySelector(`.three-dot-icon-${task.id}`);
      threeDotIcon.addEventListener('click', () => {
        const targetInput = document.querySelector(`#input-${task.id}`);
        targetInput.removeAttribute('readonly');
        targetInput.focus();
        const span = document.createElement('span');
        span.textContent = 'Save';
        threeDotIcon.insertAdjacentElement('afterend', span);
        threeDotIcon.classList.add('hidden');
        span.addEventListener('click', () => {
          Tasks.updateItems(task.id, targetInput.value);
          targetInput.setAttribute('readonly', 'readonly');
          threeDotIcon.classList.remove('hidden');
          span.classList.add('hidden');
        });
      });
      const trashIcon = document.querySelector(`.trash-${task.id}`);
      trashIcon.addEventListener('click', () => {
        Tasks.removeItem(task.id);
        const targetTodo = document.querySelector(`.task-${task.id}`);
        targetTodo.remove();
      });
      const checkIcon = document.querySelector(`.check-${task.id}`);
      checkIcon.addEventListener('change', () => {
        const targetTodo = document.querySelector(`#input-${task.id}`);
        targetTodo.classList.toggle('completed');
        Tasks.updateCompleted(task.id);
      });
    });
  }
};

export default displayAllTasks;