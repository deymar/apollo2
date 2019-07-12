import { Injectable } from '@angular/core';
// importando lo necesario
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    public API = 'https://jsonplaceholder.typicode.com';
    constructor(  private http: HttpClient ) { }

    getAllTasks() {
        const path = `${this.API}/todos`;
        return this.http.get<Task>(path);
    }



    getTask(id: string) {
        const path = `${this.API}/todos/${id}`;
        return this.http.get<Task>(path);
    }



    createTask(task: Task) {
        const path = `${this.API}/todos`;
        return this.http.post(path, task);
    }

    updateTask(task: Task) {
        const path = `${this.API}/todos/${task.id}`;
        return this.http.put<Task>(path, task);
    }

    deleteTask(id: string) {
        const path = `${this.API}/todos/${id}`;
        return this.http.delete(path);
    }




}




