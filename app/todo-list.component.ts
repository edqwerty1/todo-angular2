import { Component,OnInit } from 'angular2/core';
import todo = require('./todo');
import { TodoDetailComponent} from './todo-detail.component';
import { TodoStoreService } from './todo-store.service';
import {Observable} from 'rxjs/RX';
@Component({
  selector: 'todo-list',
  template: `
  <div *ngFor="#todo of todos | async"> 
    <todo-detail [todo]="todo"></todo-detail>
    </div>
  `,
   directives: [TodoDetailComponent]
})
export class TodoListComponent implements OnInit{
    
    todos: Observable<todo.ITodo[]>;
    
  constructor(private _todoStore: TodoStoreService){

  }

  ngOnInit() {
     this.todos = this._todoStore.todos$;
     this._todoStore.loadTodos();
      console.log(this.todos);
      this.todos.subscribe(data => console.log(data));
    
  }
}