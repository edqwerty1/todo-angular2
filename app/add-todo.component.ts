import { Component } from 'angular2/core';
import { TodoStoreService } from './todo-store.service';
import {NgForm}    from 'angular2/common';

@Component({
  selector: 'add-todo',
  templateUrl: 'app/add-todo.component.html' 
})
export class AddTodoComponent {
  message: string;
  
  constructor(private _todoStore: TodoStoreService){
      
  }
  
  onSubmit(){
      this._todoStore.addTodo(this.message);
      this.message = '';
  }
}