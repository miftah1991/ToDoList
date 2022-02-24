import deleteTask from '../__mocks__/deleteTask.js';
import Tasks from '../Tasks.js';
import addTask from '../__mocks__/addTask.js';

describe('deleteTask', () => {
  test('removes a task from tasks', () => {
    addTask('hello');
    deleteTask('hello');
    expect(Tasks.tasks).toHaveLength(0);
  });

  test('removes a task from tasks', () => {
    addTask('go shopping');
    deleteTask('go shopping');
    expect(Tasks.tasks).toHaveLength(0);
  });
});