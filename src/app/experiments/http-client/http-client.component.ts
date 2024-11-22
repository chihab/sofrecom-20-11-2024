import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-client',
  imports: [],
  template: ` {{ theme }} `,
  styles: ``,
})
export class HttpClientComponent {
  theme = '';
  error = '';
  http = inject(HttpClient);
  subscription: Subscription = new Subscription();

  constructor() {
    this.getTheme();
  }

  getTheme() {
    const httpRequest = this.http.get<string>('/api/user/theme');
    // get the theme from the user preferences
    this.subscription = httpRequest.subscribe({
      next: (theme) => {
        this.theme = theme;
        // get colors of the theme
        this.http.get('/api/theme/colors').subscribe({
          next: (colors) => {
            console.log(colors);
          },
        });
      },
      error: (error) => {
        this.error = error;
      },
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
