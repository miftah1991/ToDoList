import Tasks from './Tasks.js';
import displayAllTasks from './listTask.js';

const input = document.querySelector('#task-input');

const addNewTask = (e) => {
  if (e.key === 'Enter') {
    let newIndex;
    if (Tasks.itemsCount() === 0) {
      newIndex = 1;
    } else {
      newIndex = Tasks.itemsCount() + 1;
    }
    const newTask = new Tasks(newIndex, input.value);
    Tasks.tasks.push(newTask);
    Tasks.storage(Tasks.tasks);
    document.querySelectorAll('.litasks').forEach((e) => e.remove());
    displayAllTasks();
    input.value = '';
    input.focus();
  }
};
export default addNewTask;