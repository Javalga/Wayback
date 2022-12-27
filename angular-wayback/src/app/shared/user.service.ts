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

  public putUser(user: User) {
    this.url = 'http://localhost:3000/users';
    console.log(user);
    return this.http.put(this.url, user);
  }

  public postUser(user: User) {
    console.log('hola funciono');
    
    console.log(user);console.log(user)
    this.url = 'http://localhost:3000/users';
    return this.http.post(this.url, user);
  }
}
