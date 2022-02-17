class Tasks {
    static tasks = [];

    constructor(id, description) {
      // this.tasks=[];
      this.id = id;
      this.description = description;
      this.completed = false;
    }

    static storage = (tasks) => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static itemsCount =() => this.tasks.length

    static updateItems =(id, newvalue) => {
      this.tasks.forEach((taskk) => {
        if (taskk.id === id) {
          taskk.description = newvalue;
        }
      });
      this.storage(this.tasks);
    }

    static updateIndex = () => {
      const alltasks = JSON.parse(localStorage.getItem('tasks'));
      for (let i = 0; i < alltasks.length; i += 1) {
        alltasks[i].id = i + 1;
      }
      localStorage.setItem('tasks', JSON.stringify(alltasks));
    };

    static removeItem = (id) => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      this.storage(this.tasks);
      this.updateIndex();
    };

    static updateCompleted = (id) => {
      this.tasks.forEach((taskk) => {
        if (taskk.id === id) {
          taskk.completed = true;
        }
      });
      this.storage(this.tasks);
    }

    static deleteCompletedTask = () => {
      document.querySelectorAll('.completed').forEach((item) => {
        item.parentNode.parentNode.remove();
      });

      this.tasks = this.tasks.filter((task) => !task.completed);
      this.storage(this.tasks);
      this.updateIndex();
      window.location.reload();
    };
}

export default Tasks;