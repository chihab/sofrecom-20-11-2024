import { Router, Routes } from '@angular/router';
import { InputsOutputsComponent } from './experiments/inputs-outputs/inputs-outputs.component';
import { workshopRoutes } from './workshops/workshop.routes';
import { WorkshopsComponent } from './workshops/workshops.component';
import { ProfileComponent } from './experiments/profile/profile.component';
import { inject } from '@angular/core';

// function isAuthenticated() {
//   const authService = inject(AuthService);
//   // return authService.isAuthenticated();
//   const router = inject(Router);
//   if (authService.isAuthenticated) {
//     return true;
//   }
//   router.navigate(['/login']);
// }

// function isAuthorized(role) {
//   return function () {
//     const authService = inject(AuthService);
//     return authService.isAuthorized(role);
//   };
// }

export const routes: Routes = [
  { path: '', redirectTo: 'inputs-outputs', pathMatch: 'full' },
  { path: 'inputs-outputs', component: InputsOutputsComponent },
  {
    path: 'workshops',
    component: WorkshopsComponent,
    children: workshopRoutes,
  },
  {
    path: 'profile/:profileId',
    component: ProfileComponent,
    // canActivate: [isAuthenticated],
  },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [isAuthenticated, isAuthorized('admin')],
  // },
  //   {
  //     path: '**',
  //     component: NotFoundComponent,
  //   },
];
