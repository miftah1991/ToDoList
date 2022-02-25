import clearAllCompleted from '../__mocks__/clearAllCompleted.js';
import addTask from '../__mocks__/addTask.js';
import { changeStatus } from '../__mocks__/changeStatus.js';

describe('Test "Clear all completed" function', () => {
  test('Add a completed task and delete it', () => {
    const input = 'Task 100';
    addTask(input);
    changeStatus(input);
    const result = clearAllCompleted();
    expect(result).toHaveLength(0);
  });

  test('Add two tasks and delete only the completed task', () => {
    const input = 'Task 1';
    const input2 = 'Task 2';
    addTask(input);
    addTask(input2);
    changeStatus(input);
    const result = clearAllCompleted();
    expect(result).toHaveLength(1);
  });
});