import { Component } from 'angular2/core';
import { TodoStoreService } from './todo-store.service';
import todo = require('./models/todo');

@Component({
    selector: 'remove-todo',
    template: `
    <button class="btn btn-default" type="button" (click)="remove()">Remove</button>
  `,
    inputs: ['todo']
})
export class RemoveTodoComponent {
    todo: todo.ITodo;

    constructor(private _todoStore: TodoStoreService) {

    }

    remove() {
        this._todoStore.removeToDos(this.todo.id);
    }
}