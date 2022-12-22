import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public isLogged: boolean = false;
  public user: User
  public warehouse_name: string;
  public url: string
  constructor(private http: HttpClient) {
    this.user = new User()
  }
  fetchLogin() {
    this.url = "http://localhost:3000/login"
    return this.http.post(this.url, this.user)
  }
}

// roles = SUPER || ADMIN || USER