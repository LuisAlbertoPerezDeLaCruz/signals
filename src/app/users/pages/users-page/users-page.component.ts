import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';
import { NgFor } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent implements OnInit {
  public users: User[] = [];
  public currentPage: number = 1;

  constructor(private userService: UsersService) {}
  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    this.userService
      .loadPage(page)
      .pipe(filter((users) => users.length > 0))
      .subscribe((users) => {
        this.currentPage = page;
        this.users = users;
      });
  }
}
