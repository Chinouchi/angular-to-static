import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Todo } from '../models/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  currentTodos: Todo[] = [{
    name: 'Learn Angular to static website',
    isDone: false
  },
  {
    name: 'Follow Antoine on Twitter',
    isDone: false
  }];
  todoList$: BehaviorSubject<Todo[]>;

  constructor() {
    this.todoList$ = new BehaviorSubject<Todo[]>(this.currentTodos);
  }

  addTodo(name: string) {
    this.currentTodos.push({
      name,
      isDone: false
    });
    this.todoList$.next(this.currentTodos);
  }

  removeTodo(todoToDelete: Todo) {
    const indexToDelete = this.currentTodos.indexOf(todoToDelete);
    this.currentTodos.splice(indexToDelete, 1);

    this.todoList$.next(this.currentTodos);
  }
}
