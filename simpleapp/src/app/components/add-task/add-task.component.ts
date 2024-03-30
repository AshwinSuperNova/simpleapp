import { Component ,EventEmitter,Output} from '@angular/core';
import { Task } from 'src/Task';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
task: string = "";
day: string = "";
reminder: boolean = false;
showAddTask: boolean = false;
subscription: Subscription;

constructor(private taskService: TaskService,private uiservice:UiService) {
 this.subscription= this.uiservice.onToggle().subscribe((value) => this.showAddTask = value);
  console.log(this.reminder);
 }
onSubmit() {
  if (!this.task) {
    alert('Please add a task!');
    return;
  }


  const newTask:Task={
    text:this.task,
    day:this.day,
    reminder:this.reminder
  };
 this.onAddTask.emit(newTask);
  this.task = '';
  this.day = '';
  this.reminder = false;

  }
}

