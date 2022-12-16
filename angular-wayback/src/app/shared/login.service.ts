import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLogged: boolean = false;
  public role: string
  constructor() {
    this.role = 'SUPER'
  }
}

// roles = SUPER || ADMIN || USER