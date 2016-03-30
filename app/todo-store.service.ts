import todos = require('./todos');
import todo = require('./todo');
import { Injectable } from 'angular2/core';
import {TODOS} from './mock-todos';
import {Http, Response, Headers} from 'angular2/http';
import {Observable, Observer} from 'rxjs/RX';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';

@Injectable()
export class TodoStoreService {
    todos$: Observable<todo.ITodo[]>;
    private _todosObserver: Observer<todo.ITodo[]>;
    private _dataStore: {
        todos: todo.ITodo[];
    };

    constructor(private _http: Http) {
        this._dataStore = { todos: [] };

        this.todos$ = new Observable(observer => this._todosObserver = observer)
            .startWith(this._dataStore.todos)
            .share();
    };

    loadTodos() {
        this._http.get('http://localhost:8080/api/todos')
            .map((res: Response) => res.json())
            .subscribe(data => {
                this._dataStore.todos = data.Todos;
                this._todosObserver.next(this._dataStore.todos)
            },
            error => console.log(error)
            );
    };

    removeToDos(id: number) {
        this._http.delete(`http://localhost:8080/api/todos/${id}`)
            .subscribe(response => {
                this._dataStore.todos.forEach((t, index) => {
                    if (t.id === id) { this._dataStore.todos.splice(index, 1); }
                });
                this._todosObserver.next(this._dataStore.todos);
            }, error => console.log(error))
    };

    addTodo(message: string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this._http.post(`http://localhost:8080/api/todos/`, JSON.stringify({ "message": message }), { headers: headers })
            .map(response => response.json())
            .subscribe(data => {
                this._dataStore.todos.push(data);
                this._todosObserver.next(this._dataStore.todos);
            }, error => console.log(error));

    };

}
