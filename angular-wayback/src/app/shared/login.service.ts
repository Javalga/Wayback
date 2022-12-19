import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public isLogged: boolean = true;
  public role: string;
  public username: string;
  public warehouse_name: string;

  constructor() {
    this.role = 'SUPER';
    this.username = 'Alberto';
    this.warehouse_name = "Fuengirola"
  }
}

// roles = SUPER || ADMIN || USER