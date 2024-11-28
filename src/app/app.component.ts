import { Component, signal, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { TodoComponent } from './Components/todo/todo.component';
import { TodosService } from './Services/todos/todos.service';
import { ThemeSelectorComponent } from './Components/theme-selector/theme-selector.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NgFor,
    NgIf,
    TodoComponent,
    ThemeSelectorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  todoService = inject(TodosService);
  newTodo = '';
  showCompletedTasks = false;

  ngOnInit() {
    this.todoService.initTodos();
  }

  addTodo() {
    if (!this.newTodo.trim()) return;
    this.todoService.addTodo(this.newTodo);
    this.newTodo = '';
  }

  showCompleted() {
    this.showCompletedTasks = !this.showCompletedTasks;
  }
}
