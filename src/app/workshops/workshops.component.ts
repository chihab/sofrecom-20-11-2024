import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-workshops',
  imports: [RouterOutlet],
  template: `<h1>Workshops</h1>
    <router-outlet />`,
  styles: ``,
})
export class WorkshopsComponent {
  @Input()
  workshopId = '';
}
