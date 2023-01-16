import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { ApiPathService } from './api-path.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: User[];
  public url: string;
  public user: User;
  constructor(
    private http: HttpClient,
    private apiPathService: ApiPathService
  ) {
    this.user = new User();
  }
  public getUsers() {
    this.url = `${this.apiPathService.apiPath}/users`;
    return this.http.get(this.url);
  }

  public getOneUser(user) {
    this.url = `${this.apiPathService.apiPath}/users?username=${user}`;
    return this.http.get(this.url);
  }

  public getUserByLocationID(userLocationID) {
    this.url = `${this.apiPathService.apiPath}/admin-recover-password?location_id=${userLocationID}`;
    return this.http.get(this.url);
  }

  public putUser(user: User) {
    this.url = `${this.apiPathService.apiPath}/users`;
    console.log(user);
    return this.http.put(this.url, user);
  }

  public postUser(user: User) {
    console.log('hola funciono');

    console.log(user);
    console.log(user);
    this.url = `${this.apiPathService.apiPath}/users`;
    return this.http.post(this.url, user);
  }
}
