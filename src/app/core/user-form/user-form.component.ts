import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-form',
  imports: [],
  template: `
    <input type="text" placeholder="Enter your first name" #firstNameInput />
    <input type="text" placeholder="Enter your last name" #lastNameInput />
    <input type="email" placeholder="Email" #emailInput />
    <button
      (click)="
        editUser({
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          email: emailInput.value
        })
      "
    >
      Submit
    </button>
  `,
  styles: ``,
})
export class UserFormComponent {
  @Output()
  edit = new EventEmitter<User>();

  editUser(user: User) {
    this.edit.emit(user);
  }
}
