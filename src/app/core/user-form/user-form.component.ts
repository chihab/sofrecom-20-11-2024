import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-form',
  imports: [],
  template: `
    <form class="form-group">
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="Enter your first name"
          #firstNameInput
        />
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Enter your last name"
          #lastNameInput
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Email"
          #emailInput
        />
      </div>
      <button
        type="button"
        class="btn btn-primary"
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
    </form>
  `,
  styles: [],
})
export class UserFormComponent {
  @Output()
  edit = new EventEmitter<User>();

  editUser(user: User) {
    this.edit.emit(user);
  }
}
