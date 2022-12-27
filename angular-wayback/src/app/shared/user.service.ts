import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: User[];
  public url: string;
  public user: User;
  constructor(private http: HttpClient) {
    this.user = new User();
  }

  public getUsers() {
    this.url = 'http://localhost:3000/users';
    return this.http.get(this.url);
  }

  public putUser(user, username) {
    this.url = 'http://localhost:3000/users';
    return this.http.put(this.url, user, username);
  }

  public postUser(user) {
    this.url = 'http://localhost:3000/users';
    return this.http.post(this.url, user);
  }
}
