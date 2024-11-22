import { Routes } from '@angular/router';
import { InputsOutputsComponent } from './experiments/inputs-outputs/inputs-outputs.component';
import { workshopRoutes } from './workshops/workshop.routes';
import { WorkshopsComponent } from './workshops/workshops.component';
import { ProfileComponent } from './experiments/profile/profile.component';

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
  },
  //   {
  //     path: '**',
  //     component: NotFoundComponent,
  //   },
];
