import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input()
  users: User[] = [];
}
