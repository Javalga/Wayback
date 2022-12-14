import { Component } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  public isExtended: boolean
  constructor(public loginService: LoginService) {
    this.isExtended = false
  }
  extend() {
    this.isExtended = !this.isExtended
  }
}
