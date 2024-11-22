import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { User } from '../../core/models/user.model';
import { UserHttpService } from '../../core/services/user-http.service';

// function getX<T>(): T {
//   return 10 as T;
// }
// const users: User[] = getX<string>();

@Component({
  selector: 'app-w08',
  imports: [],
  template: ` {{ usersCount }} `,
  styles: ``,
  providers: [UserHttpService],
})
export class W08Component {
  userService = inject(UserHttpService);
  usersCount = 0;

  constructor() {
    this.userService.getUsersCount().subscribe({
      next: (usersCount) => {
        this.usersCount = usersCount;
      },
    });
    // console.log('End of constructor');
    // const observable = this.http.post<User>('http://localhost:3000/users', user);
  }

  addUser(user: User) {
    // this.userService.addUser(user).subscribe({
    //   next: (user) => {
    //     this.users.push(user);
    //   },
    // });
  }
}
