import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/service/todo.service';
import { Observable } from 'rxjs';
import { Todo } from 'src/model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todoList$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.updateList();
  }

  checkedChanged(todo: Todo): void {
    this.todoService.update(todo).subscribe();
  }

  delete(todo: Todo): void {
    this.todoService.delete(todo).subscribe(() => this.updateList());
  }

  add(task: string): void {
    if (task) {
      this.todoService.new({task, done: false}).subscribe(() => this.updateList());
    }
  }

  private updateList(): void {
    this.todoList$ = this.todoService.getTodoList();
  }
}
