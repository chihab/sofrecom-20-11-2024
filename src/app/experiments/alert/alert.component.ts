import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
    </div>
    <div (click)="closeAlert()">X</div>`,
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

  @Input()
  isError = false;

  @Output()
  close = new EventEmitter<void>();

  internal = 'This is an internal message';

  constructor() {
    console.log(this.message);
  }

  closeAlert() {
    this.close.emit();
  }
}
