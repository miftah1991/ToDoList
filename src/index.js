// imnpport _ from 'lodash';
import './style.css';

const tasks = [
  {
    description: 'Listing item 1',
    completed: false,
    index: 0,
  },
  {
    description: 'Completed todo list item',
    completed: false,
    index: 7,
  },
  {
    description: 'Drag and drop time',
    completed: false,
    index: 2,
  },
  {
    description: 'Remove all completed items',
    completed: false,
    index: 3,
  },
  {
    description: 'items should be in sorted order',
    completed: false,
    index: 4,
  },
];
const tasksDisplay = () => {
  const inputItem = document.querySelector('#input-item');
  tasks.reverse().forEach((task) => {
    const html = `
      <li class="task-${task.index}">
        <div class="task">
          <input type="checkbox" name="task"> ${task.description}
        </div>
        <i class="fas fa-ellipsis-v three-dot-icon"></i>
      </li>
      `;
    inputItem.insertAdjacentHTML('afterend', html);
  });
};
tasksDisplay();
