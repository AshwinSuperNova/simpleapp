import { Component,EventEmitter,Input, OnInit ,Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/Task';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() Task: any;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  constructor(private datePipe: DatePipe) { }
  faTimes = faTimes;

  formatMyDate(dateString: string): string {
    return this.datePipe.transform(dateString, 'fullDate') || '';
  }
  ngOnInit(): void {
  }
  onDelete(task:Task) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task:Task) {
    this.onToggleReminder.emit(task);
  }
}
