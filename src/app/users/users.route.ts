import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./pages/users-page/users-page.component'),
  },
] as Routes;
