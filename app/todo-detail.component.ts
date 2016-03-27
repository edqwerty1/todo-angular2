import { Component } from 'angular2/core';
import todo = require('./todo');
import { RemoveTodoComponent} from './remove-todo.component';

@Component({
  selector: 'todo-detail',
  template: `
  <div class="row">
    <div>{{todo.message}}</div>
    <remove-todo [todo]="todo"></remove-todo>
  </div>
  `,
   inputs: ['todo'],
   directives: [RemoveTodoComponent]
})
export class TodoDetailComponent {

  
}