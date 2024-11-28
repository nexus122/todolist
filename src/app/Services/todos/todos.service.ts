import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { signal, computed, inject } from '@angular/core';
import { Todo } from '../../Models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  localStorageService = inject(LocalStorageService);
  title = 'todolist';
  // Signal para todos
  todos = signal<Todo[]>([]);

  initTodos() {
    const storedTodos = this.localStorageService.getLocalStorage();
    this.todos.set(storedTodos);
  }

  // Signals Computados
  totalTasks = computed(() => {
    return this.todos().length;
  });

  completedTasksNumber = computed(() => {
    return this.todos().filter((todo) => todo.completed).length;
  });

  completedTasks = computed(() => {
    return this.todos().filter((todo) => todo.completed);
  });

  pendingTasks = computed(() => {
    return this.todos().filter((todo) => !todo.completed);
  });

  addTodo(newTodo: string) {
    if (!newTodo.trim()) return;
    this.todos.set([
      ...this.todos(),
      {
        id: Date.now(),
        title: newTodo.trim(),
        completed: false,
      },
    ]);
    this.localStorageService.setLocalStorage(this.todos());
  }

  checkTodo(id: number) {
    this.todos.set(
      this.todos().map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    this.localStorageService.setLocalStorage(this.todos());
  }

  editTodo(id: number, title: string) {
    if (!title) return;
    this.todos.set(
      this.todos().map((todo) =>
        todo.id === id ? { ...todo, title: title } : todo
      )
    );
    this.localStorageService.setLocalStorage(this.todos());
  }

  deleteTodo(id: number) {
    this.todos.set(this.todos().filter((todo) => todo.id !== id));
    this.localStorageService.setLocalStorage(this.todos());
  }
}
