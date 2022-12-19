import { Component } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  public isExtended_incidences: boolean;
  public isExtended_admin: boolean;
  constructor(public loginService: LoginService, private router: Router) {
    this.isExtended_incidences = false;
  }
  extend_incidences() {
    this.isExtended_incidences = !this.isExtended_incidences;

  }
  extend_admin() {
    this.isExtended_admin = !this.isExtended_admin;
  
  }

  public closeSession() {
    this.loginService.isLogged = false;
    this.router.navigateByUrl('/login');
  }
}
