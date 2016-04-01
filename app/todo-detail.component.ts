import { Component } from 'angular2/core';
import todo = require('./models/todo');
import { RemoveTodoComponent} from './remove-todo.component';

@Component({
    selector: 'todo-detail',
    template: `
  <div class="input-group ">
    <input [disabled]="true" [(ngModel)]="todo.message" type="text" class="form-control">
    <remove-todo class="input-group-btn" [todo]="todo"></remove-todo>
  </div>
  `,
    inputs: ['todo'],
    directives: [RemoveTodoComponent]
})
export class TodoDetailComponent {

}