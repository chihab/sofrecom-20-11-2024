import { Component } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { InputComponent } from '../../ui/input/input.component';
import { UserFormComponent } from '../../core/user-form/user-form.component';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-inputs-outputs',
  imports: [AlertComponent, InputComponent, UserFormComponent],
  template: `
    <img [src]="logo" (click)="onClick()" />
    <app-alert
      [message]="'My message from parent component'"
      [type]="'success'"
      (close)="onClose()"
    />
    <app-user-form (edit)="onEdit($event)" />
    <!-- appAlert = new AlertComponent() -->
    <!-- appAlert.message = 'My message from parent component -->
    <!-- appAlert.render() -->

    <app-input (change)="onChange($event)" />
  `,
  styles: ``,
})
export class InputsOutputsComponent {
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';

  onClick() {
    console.log('Clicked');
  }

  onClose() {
    console.log('Closed');
  }

  onChange(value: string) {
    console.log('Changed value from input ' + value);
  }

  onEdit(user: User) {
    console.log(user);
  }
}
