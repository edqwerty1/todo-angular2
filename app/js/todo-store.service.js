System.register(['angular2/core', 'angular2/http', 'rxjs/RX', 'rxjs/add/operator/share', 'rxjs/add/operator/startWith'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, RX_1;
    var TodoStoreService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (RX_1_1) {
                RX_1 = RX_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            let TodoStoreService = class TodoStoreService {
                constructor(_http) {
                    this._http = _http;
                    this._dataStore = { todos: [] };
                    this.todos$ = new RX_1.Observable(observer => this._todosObserver = observer)
                        .startWith(this._dataStore.todos)
                        .share();
                }
                ;
                loadTodos() {
                    this._http.get('http://localhost:8080/api/todos')
                        .map((res) => res.json())
                        .subscribe(data => {
                        this._dataStore.todos = data.todos;
                        this._todosObserver.next(this._dataStore.todos);
                    }, error => console.log(error));
                }
                ;
                removeToDos(id) {
                    this._http.delete(`http://localhost:8080/api/todos/${id}`)
                        .subscribe(response => {
                        this._dataStore.todos.forEach((t, index) => {
                            if (t.id === id) {
                                this._dataStore.todos.splice(index, 1);
                            }
                        });
                        this._todosObserver.next(this._dataStore.todos);
                    }, error => console.log(error));
                }
                ;
                addTodo(message) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this._http.post(`http://localhost:8080/api/todos/`, JSON.stringify({ 'message': message }), { headers: headers })
                        .map(response => response.json())
                        .subscribe(data => {
                        this._dataStore.todos.push(data);
                        this._todosObserver.next(this._dataStore.todos);
                    }, error => console.log(error));
                }
                ;
            };
            TodoStoreService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], TodoStoreService);
            exports_1("TodoStoreService", TodoStoreService);
        }
    }
});

//# sourceMappingURL=todo-store.service.js.map
