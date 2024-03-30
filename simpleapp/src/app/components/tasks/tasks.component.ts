import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
import { Task } from 'src/Task';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  showAddTask: boolean = false;
  tasks: Task[] = [];
  constructor(private taskservice:TaskService,private uiservice:UiService) { }
  ngOnInit(): void {
     this.taskservice.gettasks().subscribe((tasks) => this.tasks = tasks);
     this.uiservice.onToggle().subscribe((value) => this.showAddTask = value);
     console.log(this.showAddTask);
  }

  deleteTask(task: Task) {
    this.taskservice.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }
    toggleReminder(task: Task){
      task.reminder = !task.reminder;
      this.taskservice.updateTaskReminder(task).subscribe();
    }
 
    addTask(task: Task){
      console.log(task);
      this.taskservice.addTask(task).subscribe((task)=>this.tasks.push(task));
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
