import { Component } from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {TodoStoreService} from './todo-store.service';
import {TodoListComponent} from './todo-list.component';
import {AddTodoComponent} from './add-todo.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [
        HTTP_PROVIDERS,
        TodoStoreService
    ],
    directives: [TodoListComponent, AddTodoComponent]
})
export class AppComponent {
    title = 'To Do List Implemented with Angular 2.0';
}