import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service'
import { Observable } from 'rxjs';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-my-todo-page',
  templateUrl: './my-todo-page.component.html',
  styleUrls: ['./my-todo-page.component.scss']
})
export class MyTodoPageComponent implements OnInit {

  currentTodos$: Observable<Todo[]>
  newTodoName: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.currentTodos$ = this.todoService.todoList$;
  }

  addNewTodo() {
    this.todoService.addTodo(this.newTodoName);
    this.newTodoName = '';
  }

  deleteTodo(todo: Todo) {
    this.todoService.removeTodo(todo);
  }
}
