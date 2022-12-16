import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLogged: boolean = true;
  public role: string
  constructor() {
    this.role = 'SUPER'
  }
}

// roles = SUPER || ADMIN || USER