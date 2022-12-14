import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLogged: boolean = false;
  constructor() {
   
  }
}
