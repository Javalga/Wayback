import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public isLogged: boolean
  constructor() {
    this.isLogged = true
  }
}
