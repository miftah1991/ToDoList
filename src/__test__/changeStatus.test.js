import { changeStatus, checkTaskStaus } from '../__mocks__/changeStatus.js';
import addTask from '../__mocks__/addTask.js';

describe('Change item to completed status', () => {
  test('Add task', () => {
    addTask('hello');
    const result = checkTaskStaus('hello');
    expect(result).toBeFalsy();
  });

  test('Checking the status updated', () => {
    addTask('task 1');
    const result = changeStatus('task 1');
    expect(result).toBeTruthy();
  });
});