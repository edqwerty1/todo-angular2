System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', './todo-store.service', './todo-list.component', './add-todo.component'], function(exports_1, context_1) {
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
    var core_1, http_1, todo_store_service_1, todo_list_component_1, add_todo_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (todo_store_service_1_1) {
                todo_store_service_1 = todo_store_service_1_1;
            },
            function (todo_list_component_1_1) {
                todo_list_component_1 = todo_list_component_1_1;
            },
            function (add_todo_component_1_1) {
                add_todo_component_1 = add_todo_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor() {
                    this.title = 'To Do List Implemented with Angular 2.0';
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    templateUrl: 'app/app.component.html',
                    styleUrls: ['app/app.component.css'],
                    providers: [
                        http_1.HTTP_PROVIDERS,
                        todo_store_service_1.TodoStoreService
                    ],
                    directives: [todo_list_component_1.TodoListComponent, add_todo_component_1.AddTodoComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
