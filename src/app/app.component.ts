import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
  list:any[] = [];
  list1:any[] = [];
  addTask(item:String,desc:String){
    this.list.push({id:this.list.length,name:item,name2:desc})
    console.log(this.list);
  }
  removeTask(id:number){
    this.list = this.list.filter(item=>item.id!==id);
  }
}
