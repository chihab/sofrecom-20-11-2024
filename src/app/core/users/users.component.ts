import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {}
