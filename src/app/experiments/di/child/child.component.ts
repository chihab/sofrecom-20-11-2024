import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-child',
  imports: [],
  template: ` <p>child works!</p> `,
  styles: ``,
})
export class ChildComponent {
  themeService = inject(ThemeService);
}
