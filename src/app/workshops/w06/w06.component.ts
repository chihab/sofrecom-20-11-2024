import { Component, inject } from '@angular/core';
import { User } from '../../core/models/user.model';
import { UserFormComponent } from '../../core/user-form/user-form.component';
import {
  AlertComponent,
  MessageType,
} from '../../experiments/alert/alert.component';
import { UsersComponent } from '../../core/users/users.component';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-w06',
  imports: [UserFormComponent, AlertComponent, UsersComponent],
  template: `
    <app-user-form (edit)="addUser($event)" />
    @if(message) {
    <app-alert [message]="message" [type]="messageType" />
    }
    <app-users [users]="users" />
  `,
  styles: ``,
  providers: [UserService],
})
export class W06Component {
  userService = inject(UserService);

  users: User[] = [];
  message = '';
  messageType: MessageType = 'success';

  constructor() {
    this.users = this.userService.getUsers();
  }

  addUser(user: User) {
    this.message = '';
    this.messageType = 'success';
    try {
      this.userService.addUser(user);
      this.users = this.userService.getUsers();
      this.message = 'User added';
      this.messageType = 'success';
    } catch (error: any) {
      this.message = error.message;
      this.messageType = error.type;
    }
  }
}
