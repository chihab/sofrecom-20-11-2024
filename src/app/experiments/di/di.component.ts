import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
// import { ThemeService } from '../../core/services/theme.service';
// import { themeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-di',
  imports: [],
  template: ` <p>di works!</p> `,
  styles: ``,
})
export class DiComponent {
  themeService = inject(ThemeService);
  constructor() {
    console.log(this.themeService.getCurrentTheme());
  }
}
