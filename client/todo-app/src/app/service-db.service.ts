import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http"
import { Observable } from 'rxjs';
import { Task } from './task.model'
import { environment } from 'src/environments/environment.production';

@Injectable({
  providedIn: 'root'
})
export class ServiceDbService {  

  api : string = environment.apiUrl

  constructor(private http: HttpClient) {}

  createTask(task : Task): Observable<any>{
    return this.http.post(`${this.api}`, task )
  }

  getTasks(): Observable<any> {
    return this.http.get(`${this.api}`)
  }
  

  deleteTask(id: string) : Observable<any> {
    return this.http.delete(`${this.api}/:${id}`) 
   
  }
}



