import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
import { Task } from 'src/Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];
  constructor(private taskservice:TaskService) { }
  ngOnInit(): void {
     this.taskservice.gettasks().subscribe((tasks) => this.tasks = tasks);
     
  }
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
