import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/model/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private static baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  new(todo: {task: string, done: boolean}): Observable<Todo> {
    return this.http.post<Todo>(TodoService.baseUrl, todo);
  }

  getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(TodoService.baseUrl);
  }

  update(todo: Todo): Observable<void> {
    return this.http.put<void>(TodoService.baseUrl + `/${todo.id}`, todo);
  }

  delete(todo: Todo): Observable<void> {
    return this.http.delete<void>(TodoService.baseUrl + `/${todo.id}`);
  }
}
