import addTask from '../__mocks__/addTask.js';
import editTask from '../__mocks__/editTask.js';

describe('change the name of task', () => {
  test('testing editTask 1', () => {
    const task1 = 'go to the bank';
    addTask(task1);
    const newTask = 'deposit money';
    const list = editTask(task1, newTask);
    expect(list[0].description).toBe(newTask);
  });

  test('testing editTask 1', () => {
    const task1 = 'go to the doctor';
    addTask(task1);
    const newTask = 'pay my bills';
    const list = editTask(task1, newTask);
    expect(list[0].description).not.toBe(task1);
  });
});