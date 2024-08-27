import { Injectable } from '@angular/core';
import { PaginatedUsers, User } from '../interfaces/user';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl: string = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}

  loadPage(page: number): Observable<User[]> {
    return this.http
      .get<PaginatedUsers>(this.baseUrl, { params: { page: page } })
      .pipe(map((response) => response.data));
  }
}
