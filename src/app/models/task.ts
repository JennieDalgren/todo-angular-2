import { TaskStatus } from './enums/task-status.enum';

export class Task {
  id: string;
  name: string;
  status: TaskStatus;
  priority: number;
  constructor() {
    this.status = TaskStatus.Todo;
  }
}
