import todos = require('./models/todos');
import todo = require('./models/todo');

export var TODOS: todos.ITodos = {
    "todos": [{
        "id": 1,
        "message": "Have a drink",
        "createdDateTime": new Date(),
        "urls": []
    },{
        "id": 2,
        "message": "Go Shopping",
        "createdDateTime": new Date(),
        "urls": []
    }],
    "urls": []
} 