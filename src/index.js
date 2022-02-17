// imnpport _ from 'lodash';

import './style.css';
import addNewTask from './addTask.js';
import displayAllTasks from './listTask.js';
import Tasks from './Tasks.js';

window.onload = () => {
  displayAllTasks();
};
document.addEventListener('keypress', addNewTask);
const clearAll = document.querySelector('#clear-btn');
clearAll.addEventListener('click', Tasks.deleteCompletedTask);
