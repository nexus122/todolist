import { Component, inject, Input } from '@angular/core';
import { Todo } from '../../Models/todo';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../../Services/todos/todos.service';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo!: Todo;
  todoService = inject(TodosService);
  checkTodo() {
    this.todoService.checkTodo(this.todo.id);
  }
  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
  editTodo() {
    this.todoService.editTodo(this.todo.id, this.todo.title);
  }
}
