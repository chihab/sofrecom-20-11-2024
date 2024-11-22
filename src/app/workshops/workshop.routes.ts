import { Routes } from '@angular/router';
import { W05Component } from './w05/w05.component';
import { W06Component } from './w06/w06.component';

export const workshopRoutes: Routes = [
  {
    path: '05',
    component: W05Component,
  },
  {
    path: '06',
    component: W06Component,
  },
];
