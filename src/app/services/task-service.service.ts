import { Injectable } from '@angular/core';

import { Task } from '../models/task';

@Injectable()
export class TaskServiceService {

  tasks: Task[] = [];

  constructor() {
    this.addTask('my first task');
  }

  private getNextPriority() : number {
    const lowestPriority = this.tasks.reduce((priority, current) => {
      return current.priority > priority ? current.priority : priority;
    }, 0);
    return lowestPriority + 1;
  }

  private getRandomTaskId(): string {
    return Math.random() + '';
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  updateTask(task: Task) {
    // @todo store in the server
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    // @todo store in the server
  }

  addTask(taskName: string) {
    const task = new Task();
    task.id = this.getRandomTaskId();
    task.name = taskName;
    task.priority = this.getNextPriority();
    this.tasks.push(task);
  }

}
