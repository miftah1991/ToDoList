import Tasks from '../Tasks.js';

const clearAllCompleted = () => {
    
    const List = Tasks.tasks.filter((task) => !task.completed);
    return List;
  };
  
  export default clearAllCompleted;