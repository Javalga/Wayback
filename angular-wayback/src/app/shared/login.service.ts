import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPathService } from './api-path.service';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public isLogged: boolean = true;
  public user: User;
  public warehouse_name: string;
  public url: string;
  constructor(
    private http: HttpClient,
    private apiPathService: ApiPathService
  ) {
    this.user = new User();
  }
  fetchLogin() {
    this.url = `${this.apiPathService.apiPath}/login`;
    return this.http.post(this.url, this.user);
  }
  fetchRecover(body) {
    this.url = `${this.apiPathService.apiPath}/mailer`;
    return this.http.post(this.url, body);
  }
}

// roles = SUPER || ADMIN || USER