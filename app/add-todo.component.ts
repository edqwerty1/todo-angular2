import { Component } from 'angular2/core';
import { TodoStoreService } from './todo-store.service';
import {NgForm}    from 'angular2/common';

@Component({
  selector: 'add-todo',
  template: `
    <form (ngSubmit)="onSubmit()" #todoForm="ngForm">
    <div class="form-group row">
    <label for="inputmessage">message: </label>
    <input required [(ngModel)]="message" placeholder="your message here" ngControl="inputmessage" 
     #inputmessage="ngForm" class="form-control"/>
    <div [hidden]="inputmessage.valid" class="alert alert-danger"> Message required</div>
    <button type="submit" class="btn btn-default">Add</button>
  </div>
    </form>
  `
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