import { Routes } from '@angular/router';
import UsersPageComponent from './pages/users-page/users-page.component';
import { UsersSignalPageComponent } from './pages/users-signal-page/users-signal-page.component';

export default [
  {
    path: '',
    children: [
      {
        path: '',
        component: UsersPageComponent,
      },
      {
        path: 'list',
        component: UsersPageComponent,
      },
      {
        path: 'list-signals',
        component: UsersSignalPageComponent,
      },
    ],
  },
] as Routes;
