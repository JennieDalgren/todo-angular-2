import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';

import { Task } from '../../models/task';
import { TaskStatus } from '../../models/enums/task-status.enum';
import { TaskMoveEvent } from '../../models/events/task-move-event';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {

  rawTasks: Task[];
  tasksTodo: Task[];
  tasksDoing: Task[];
  tasksDone: Task[];

  constructor(private taskService: TaskService) {
    this.rawTasks = taskService.getTasks();
    this.updateTaskLists();
  }

  private updateTaskLists() {
    this.tasksTodo = this.rawTasks.filter((task) => {
      return (task.status === TaskStatus.Todo);
    });
    this.tasksDoing = this.rawTasks.filter((task) => {
      return (task.status === TaskStatus.Doing);
    });
    this.tasksDone = this.rawTasks.filter((task) => {
      return (task.status === TaskStatus.Done);
    });
  }

  ngOnInit() {
  }

  handleTaskMove(moveEvent: TaskMoveEvent) {
    console.log(moveEvent);
  }

  handleTaskDelete(task: Task) {
    console.log(task);
  }

}
