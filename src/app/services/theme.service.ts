import { inject, Injectable } from '@angular/core';
import { UserPreferenceService } from './user-preference.service';

export class ThemeService {
  userPreferenceService = inject(UserPreferenceService);
  theme = 'orange';
  constructor() {}

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
