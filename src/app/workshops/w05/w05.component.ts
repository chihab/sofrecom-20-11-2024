import { Component } from '@angular/core';
import { User } from '../../core/models/user.model';
import { UserFormComponent } from '../../core/user-form/user-form.component';
import {
  AlertComponent,
  MessageType,
} from '../../experiments/alert/alert.component';
import { UsersComponent } from '../../core/users/users.component';

@Component({
  selector: 'app-w05',
  imports: [UserFormComponent, AlertComponent, UsersComponent],
  template: `
    <h1>Workshop 5</h1>
    <app-user-form (edit)="addUser($event)" />
    @if(message) {
    <app-alert [message]="message" [type]="messageType" />
    }
    <app-users [users]="users" />
  `,
  styles: ``,
})
export class W05Component {
  users: User[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'x@g.com',
    },
  ];
  message = '';
  messageType: MessageType = 'success';

  addUser(user: User) {
    this.message = '';
    this.messageType = 'success';
    if (user.firstName === '' || user.lastName === '' || user.email === '') {
      this.message = 'Please fill in all fields';
      this.messageType = 'warning';
    } else if (this.users.length === 5) {
      this.message = 'You can only add 5 users';
      this.messageType = 'error';
    } else {
      this.message = 'User added';
      this.messageType = 'success';
      this.users.push(user);
    }
  }
}
