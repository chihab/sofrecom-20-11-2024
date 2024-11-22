import { Component, inject, Input } from '@angular/core';
import { User } from '../../core/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  template: ` <p>{{ route.snapshot.paramMap.get('profileId') }}</p> `,
  styles: ``,
})
export class ProfileComponent {
  route = inject(ActivatedRoute);

  profile: User = {
    firstName: 'John',
    lastName: 'Doe',
    email: '',
  };

  @Input()
  profileId = '';

  constructor() {
    console.log(this.profileId);
  }
}
