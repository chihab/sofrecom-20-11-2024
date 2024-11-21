import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = 'orange';
  getUserTheme() {
    // fetch()
  }

  getCurrentTheme() {
    return 'orange';
  }

  setTheme(theme: string) {
    console.log('Setting theme to ' + theme);
  }
}

// export const themeService = new ThemeService();
