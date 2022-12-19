import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: User[]
  constructor() {
    this.users = [
      new User('111', '111', '111', '111', '111', '111','111', true),
      new User('222', '222', '222', '222', '222', '222', '111',true),
      new User('333', '333', '333', '333', '333', '333', '111', true),
      new User('444', '444', '444', '444', '444', '444', '111', true),
      new User('555', '555', '555', '555', '555', '555', '111', true),
      new User('666', '666', '666', '666', '666', '666', '111', true),
    ];
   }
}
