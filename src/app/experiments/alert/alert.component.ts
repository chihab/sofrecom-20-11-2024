import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export type MessageType = 'success' | 'error' | 'warning';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  template: `<div
    class="alert"
    [ngClass]="{
        'alert-success': type === 'success',
        'alert-danger': type === 'error',
        'alert-warning': type === 'warning',
      }"
  >
    {{ message }}
  </div>`,
  styles: `
    h2 {
      color: red;
    }
  `,
})
export class AlertComponent {
  @Input()
  message = 'This is an alert message';

  @Input()
  type: MessageType = 'success';
}
