import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { User } from '../models/user.model';
import { delay, filter, map, Observable, tap } from 'rxjs';

export class UserHttpService {
  http = inject(HttpClient);

  //   async getUsers() {
  //     const resp = await fetch('http://localhost:3000/users');
  //     const users = await resp.json();
  //     console.log('Fetched users', users);
  //     return users;
  //   }

  getUsers() {
    const requestHttp = this.http.get<User[]>('http://localhost:3000/users');
    return requestHttp;
  }

  getUsersCount(): Observable<number> {
    return this.http.get<User[]>('http://localhost:3000/users').pipe(
      delay(1000),
      map((users) => {
        const newUsers = users.filter(
          (user) => user.age !== undefined && user.age > 11
        );
        return newUsers;
      }),
      tap((users) => {
        console.log(users);
      }),
      map((users) => users.length)
    );
  }

  addUser(user: User) {
    const requestHttp = this.http.post<User>(
      'http://localhost:3000/users',
      user
    );
    return requestHttp;
  }
}
