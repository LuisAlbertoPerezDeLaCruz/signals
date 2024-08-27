import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersPageComponent } from './users/pages/users-page/users-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'signals';
}
