System.register(['angular2/core', './todo-detail.component', './todo-store.service'], function(exports_1, context_1) {
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
    var core_1, todo_detail_component_1, todo_store_service_1;
    var TodoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_detail_component_1_1) {
                todo_detail_component_1 = todo_detail_component_1_1;
            },
            function (todo_store_service_1_1) {
                todo_store_service_1 = todo_store_service_1_1;
            }],
        execute: function() {
            let TodoListComponent = class TodoListComponent {
                constructor(_todoStore) {
                    this._todoStore = _todoStore;
                }
                ngOnInit() {
                    this.todos = this._todoStore.todos$;
                    this._todoStore.loadTodos();
                    console.log(this.todos);
                    this.todos.subscribe(data => console.log(data));
                }
            };
            TodoListComponent = __decorate([
                core_1.Component({
                    selector: 'todo-list',
                    template: `
  <div *ngFor="#todo of todos | async"> 
    <todo-detail [todo]="todo"></todo-detail>
    </div>
  `,
                    directives: [todo_detail_component_1.TodoDetailComponent]
                }), 
                __metadata('design:paramtypes', [todo_store_service_1.TodoStoreService])
            ], TodoListComponent);
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});
//# sourceMappingURL=todo-list.component.js.map