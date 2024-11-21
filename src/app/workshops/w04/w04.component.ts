import { Component } from '@angular/core';
import { User } from '../../core/models/user.model';
import { NgClass, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-w04',
  imports: [NgIf, NgClass, NgStyle],
  template: `
    <input type="text" placeholder="Enter your first name" #firstNameInput />
    <input type="text" placeholder="Enter your last name" #lastNameInput />
    <input type="email" placeholder="Email" #emailInput />
    <button
      (click)="
        addUser({
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          email: emailInput.value
        })
      "
    >
      Submit
    </button>

    @if(error !== '') {
    <p
      class="alert"
      [ngClass]="{ 'alert-danger': isError, 'alert-warning': isWarning }"
      [ngStyle]="{ 'background-color': isWarning ? 'yellow' : 'red' }"
    >
      {{ error }}
    </p>
    }

    <p *ngIf="error != ''">
      {{ error }}
    </p>

    <!-- <template [ngIf]="error !== ''">
      {{ error }}
    </template> -->

    <h1>Users</h1>
    <ul>
      @for( user of users; track user ){
      <li>{{ user.firstName }} {{ user.lastName }} - {{ user.email }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class W04Component {
  users: User[] = [];
  error = '';
  isError = false;
  isWarning = true;

  addUser(user: User) {
    this.error = '';
    if (user.firstName === '' || user.lastName === '' || user.email === '') {
      this.error = 'Please fill in all fields';
    } else if (this.users.length === 5) {
      this.error = 'You can only add 5 users';
    } else {
      this.users.push(user);
    }
  }
}
