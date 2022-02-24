import Tasks from '../Tasks.js';

const deleteTask = (input) => {
  Tasks.tasks.filter((task) => task.description !== input);
  Tasks.tasks.pop();
};

export default deleteTask;