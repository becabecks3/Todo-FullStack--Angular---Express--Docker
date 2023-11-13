import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http"
import { Observable } from 'rxjs';
import { Task } from './task.model'

@Injectable({
  providedIn: 'root'
})
export class ServiceDbService {  

  constructor(private http: HttpClient) {}

  createTask(task : Task): Observable<any>{
    return this.http.post('/api/tasks', task )
  }

  getTasks(): Observable<any> {
    return this.http.get('/api/tasks')
  }

  deleteTask(id: string) : Observable<any> {
    return this.http.delete(`/api/tasks:${id}`)   
   
  }
}



