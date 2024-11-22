import { User } from '../models/user.model';

export class UserService {
  private users: User[] = [];

  addUser(user: User) {
    if (user.firstName === '' || user.lastName === '' || user.email === '') {
      throw {
        type: 'warning',
        message: 'Please fill in all fields',
      };
    } else if (this.users.length === 6) {
      throw {
        type: 'error',
        message: 'You can only add 5 users',
      };
    } else {
      this.users.push(user);
    }
  }

  getUsers() {
    return structuredClone(this.users);
    // to avoid this.userService.getUsers()[0].firstName = 'A';
  }
}
