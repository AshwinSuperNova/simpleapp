import { Component,EventEmitter,Input, OnInit ,Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() Task: any;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  constructor() { }
  faTimes = faTimes;
  ngOnInit(): void {
  }
  onDelete(task:Task) {
    this.onDeleteTask.emit(task);
  }

}
