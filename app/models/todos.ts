import todo = require('./todo');
import url = require('./url');

export interface ITodos{
    todos: todo.ITodo[];
    urls: url.IUrl[]
}