import { Component } from '@angular/core';
import { TASKS } from 'src/mock-tasks';
import { Task } from 'src/Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = TASKS;
  constructor() { }
  // deleteTask(task: Task) {
  //   this.tasks = this.tasks.filter(t => t.id !== task.id);
  // }
  // toggleReminder(task: Task) {
  //   task.reminder = !task.reminder;
  // }
  // addTask(task: Task) {
  //   this.tasks.push(task);
  // }

}
