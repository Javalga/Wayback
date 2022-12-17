import { Component } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  public isExtended: boolean;
  constructor(public loginService: LoginService, private router: Router) {
    this.isExtended = false;
  }
  extend() {
    this.isExtended = !this.isExtended;
  }
  public closeSession() {
    this.loginService.isLogged = false;
    this.router.navigateByUrl('/login');
  }
}
