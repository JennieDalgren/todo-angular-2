import { Component, OnInit } from '@angular/core';

import { Task } from '../../models/task';
import { TaskStatus } from '../../models/enums/task-status.enum';
import { TaskTransition } from '../../models/enums/task-transition.enum';

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrls: ['./playground-page.component.css']
})
export class PlaygroundPageComponent implements OnInit {
  someTask1: Task;
  someTask2: Task;
  someTask3: Task;
  someTasks: Task[];
  constructor() {
    this.someTask1 = new Task();
    this.someTask1.name = 'example todo task';
    this.someTask1.status = TaskStatus.Todo;

    this.someTask2 = new Task();
    this.someTask2.name = 'example doing task';
    this.someTask2.status = TaskStatus.Doing;

    this.someTask3 = new Task();
    this.someTask3.name = 'example done task';
    this.someTask3.status = TaskStatus.Done;

    this.someTasks = [this.someTask1, this.someTask2, this.someTask3];
  }

  ngOnInit() {
  }

  handleTaskMove(direction: TaskTransition) {
    console.log('task transition!', direction);
  }

  handleTaskDelete() {
    console.log('task deleted!');
  }

  handleTaskColumnMove(event) {
    console.log('task transition in the list!', event);
  }

  handleTaskColumnDelete(task: Task) {
    console.log('task deletion in the list!', task);
  }


}
