import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss',
})
export class ThemeSelectorComponent {
  ngOnInit() {
    this.setTheme('synthwave');
  }

  setTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleTheme(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.setTheme('synthwave');
    } else {
      this.setTheme('light');
    }
  }
}
