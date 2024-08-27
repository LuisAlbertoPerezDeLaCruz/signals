import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent implements OnInit {
  public users: User[] = [];
  public currentPage: number = 0;

  constructor(private userService: UsersService) {}
  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    this.userService.loadPage(page).subscribe((users) => {
      this.users = users;
    });
  }
}
