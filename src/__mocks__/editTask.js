import Tasks from '../Tasks.js';

const editTask = (oldInput, newInput) => {
  // Edit Task
  if (oldInput === '') return false;

  Tasks.tasks.forEach((task) => {
    if (task.description === oldInput) {
      task.description = newInput;
    }
  });

  return Tasks.tasks;
};

export default editTask;