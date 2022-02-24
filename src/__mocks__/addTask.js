import Tasks from '../Tasks.js';

const addTask = (input) => {
  if (input.trim() === '') return;

  // Check duplicate
  const t = Tasks.tasks.filter((task) => input === task.description);
  if (t.length) return;

  // white space
  if (input.startsWith(' ') || input.endsWith(' ')) input = input.trim();

  const id = Tasks.tasks.length + 1;

  const newTask = new Tasks(id, input);
  Tasks.tasks.push(newTask);
};

export default addTask;