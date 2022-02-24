/**
 * @jest-environment jsdom
 */
import addTask from '../__mocks__/addTask.js';
import Tasks from '../Tasks.js';

describe('Add task', () => {
  test('Test if the task is added', () => {
    const input = 'task1';

    addTask(input);

    expect(Tasks.tasks).toHaveLength(1);

    Tasks.tasks.pop();
  });

  test('Check for empty task', () => {
    const input = '   ';
    const input2 = '';

    addTask(input);
    addTask(input2);

    expect(Tasks.tasks).toHaveLength(0);

    expect(addTask(input)).toBeFalsy();
    expect(addTask(input2)).toBeFalsy();
  });

  test('check for ditinct values', () => {
    const input = 'task 1';
    const input2 = 'task 1'; // the same value
    const input3 = 'task 1'; // the same value

    addTask(input);
    addTask(input2);
    addTask(input3);

    expect(Tasks.tasks).toHaveLength(1);

    expect(addTask(input)).toBeFalsy();
    expect(addTask(input2)).toBeFalsy();
  });

  test('Test for emptyp space', () => {
    const input = '          task 1       ';
    const lastInd = Tasks.tasks.length - 1;

    addTask(input);

    expect(Tasks.tasks[lastInd].description).toBe('task 1');
  });
});
