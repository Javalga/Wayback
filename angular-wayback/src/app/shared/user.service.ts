import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: User[];
  public url: string;
  constructor(private http: HttpClient) { }

  public getUsers() {
    this.url = 'http://localhost:3000/users';
    return this.http.get(this.url);
  }

  public putUser(user, user_id) {
    this.url = 'http://localhost:3000/users';
    return this.http.put(this.url, user, user_id);
  }

  public postUser(user) {
    this.url = 'http://localhost:3000/users';
    return this.http.post(this.url, user);
  }
}
