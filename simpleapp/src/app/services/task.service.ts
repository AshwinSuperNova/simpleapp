import { Injectable } from '@angular/core';
import { TASKS } from 'src/mock-tasks';
import { Task } from 'src/Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:5001/tasks';
  gettasks():Observable<Task[]>{
    
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
