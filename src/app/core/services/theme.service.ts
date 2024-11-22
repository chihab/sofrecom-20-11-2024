import { inject, Injectable } from '@angular/core';
import { UserPreferenceService } from './user-preference.service';
import { HttpClient } from '@angular/common/http';

export class ThemeService {
  userPreferenceService = inject(UserPreferenceService);
  http = inject(HttpClient);
  theme = 'orange';
  constructor() {}

  getUserTheme() {
    // const resp = await fetch('/api/user/theme');
    // const data = await resp.json();
    // const color = await fetch('/api/theme/colors');
    // const colors = await color.json();
    // console.log(colors);
    // return data; // 'orange'
    // timer = new Timer(1000, 200000);
    // observable.subscribe((data) => {
    //   this.user = data;
    // })
    // observable.next('data');
    // observable.complete();
    // httpClient: {
    //   get: (url: string) => {
    //     return new Observable(async (observer) => {
    //       try {
    //         await response = fetch(url);
    //         await data = response.json();
    //         observer.next(data);
    //         observer.complete();
    //       } catch () {
    //         observer.error(error);
    //       }
    //     })
    // }
  }

  getCurrentTheme() {
    return 'orange';
  }

  setTheme(theme: string) {
    console.log('Setting theme to ' + theme);
  }
}

// export const themeService = new ThemeService();
