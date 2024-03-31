import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
   const tasks = [
        { id: 1, text: 'update the topics covered in trello', day: '2024-04-01T09:36', reminder: true },
        { id: 2, text: 'start learning typescript', day: '2024-04-01T09:36', reminder: true },
        { id: 3, text: 'start learning advanced javascript and typescript', day: '2024-04-01T09:36', reminder: false },
        { id: 4, text: 'update the topics covered in trello', day: '2024-04-01T09:36', reminder: true },
        { id: 5, text: 'complete php tasks', day: '2024-04-01T09:36', reminder: false },
        { id: 6, text: 'learn nodejs and mongodb ', day: '2024-04-01T09:36', reminder: true },
        { id: 7, text: 'learn the github commands advanced ', day: '2024-04-01T09:36', reminder: false },
        { id: 8, text: 'revise the topics which you learned ', day: '2024-04-01T09:36', reminder: true },
        { id: 9, text: 'learn about pipelines which is used in mindspark', day: '2024-04-01T09:36', reminder: false },
        { id: 10, text: 'update the topics covered in trello ', day: '2024-04-01T09:36', reminder: true },
        { id: 11, text: 'develop git stats application', day: '2024-04-01T09:36', reminder: true }
      ];
      
    return { tasks }; 
  }
}
