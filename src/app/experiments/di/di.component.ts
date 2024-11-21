import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { ChildComponent } from './child/child.component';
// import { ThemeService } from '../../core/services/theme.service';
// import { themeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-di',
  imports: [ChildComponent],
  template: `
    <p>di works!</p>
    <app-child />
  `,
  styles: ``,
  providers: [ThemeService], // = new ThemeService();
})
export class DiComponent {
  themeService = inject(ThemeService);
  constructor() {
    console.log(this.themeService.getCurrentTheme());
  }
}
