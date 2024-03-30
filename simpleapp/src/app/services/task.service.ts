import { Injectable } from '@angular/core';
import { TASKS } from 'src/mock-tasks';
import { Task } from 'src/Task';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  constructor() { }
  gettasks():Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks;
  }
}
