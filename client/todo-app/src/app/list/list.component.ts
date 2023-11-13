import { Component, OnInit} from '@angular/core';
import { Task } from '../task.model';
import { ServiceDbService } from '../service-db.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  allTask2 : Task[] = []
  
  constructor(private taskData: ServiceDbService){}

  ngOnInit() : void{
    this.taskData.getTasks().subscribe(res => {
      this.allTask2 = res;
      console.log(res)
    })
  }

  taskListHandler(task : Task) {
    return this.allTask2.push(task);
  }

  onDelete(i: number, id: string) {
  this.allTask2.splice(i,1)
  this.taskData.deleteTask(id).subscribe(res => {
    res = this.allTask2.filter((task) => task._id !== id)
    console.log(this.allTask2)
  })
  }

}


