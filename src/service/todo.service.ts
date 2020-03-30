import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodoList(): Observable<Todo[]> {
    let val = [];
    for (let index = 0; index < 20; index++) {
      val.push({ id: index, task: 'asd asdf asdf asdf', done: true });
    }
    return of(val);
  }

  update(todo: Todo): Observable<void> {
    return of();
  }

  delete(todo: Todo): Observable<void> {
    return of();
  }
}
