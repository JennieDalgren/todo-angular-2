import { Task } from '../task';
import { TaskTransition } from '../enums/task-transition.enum';

export class TaskMoveEvent {
  task: Task;
  direction: TaskTransition;
}
