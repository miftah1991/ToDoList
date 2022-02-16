// imnpport _ from 'lodash';

import './style.css';
import addNewTask from './addTask.js';
import displayAllTasks from './listTask.js';

window.onload = () => {
  displayAllTasks();
};
document.addEventListener('keypress', addNewTask);
