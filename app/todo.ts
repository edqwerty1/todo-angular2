import urls = require('./url');

export interface ITodo{
    id: number;
    message: string; 
    createdDateTime: Date;
    urls: urls.IUrl[]
}