import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServiceDbService } from '../service-db.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {  

  @Output() taskList : EventEmitter<Task> = new EventEmitter();

  allTasks : Task[] = [];
  taskToAdd : string = "";
  _id : string = "";

  // taskForm = new FormGroup({
  //   description : new FormControl("")
  // })

  constructor(private taskData: ServiceDbService){}

  ngOnInit(): void {
    
  }  

  addTask() {    
    if(this.taskToAdd) {
      let addTask = new Task(this.taskToAdd, this._id)
      this.allTasks.push(addTask)
      this.taskToAdd = " "
      this.taskList.emit(addTask)
      console.log(this.allTasks)
      this.taskData.createTask(addTask).subscribe(res => {
        res = addTask.description
      })
    }   
  }  
}


