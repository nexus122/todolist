import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  localStorageKey = 'todos';
  constructor() {}

  setLocalStorage(data: any) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.localStorageKey, JSON.stringify(data));
    }
  }

  getLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      const data = localStorage.getItem(this.localStorageKey);
      return data ? JSON.parse(data) : [];
    }
    return [];
  }
}
