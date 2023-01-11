import { Component, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {

  @ViewChild('dashboard') dashboard;

  public isExtended_incidences: boolean;
  public isExtended_admin: boolean;
  public tab = 0;


  constructor(public loginService: LoginService, private router: Router, private asideHeaderService: AsideHeaderService) {
    this.isExtended_incidences = false;
  }
  extend_incidences() {
    this.isExtended_incidences = !this.isExtended_incidences;

  }
  extend_admin() {
    this.isExtended_admin = !this.isExtended_admin;

  }

  public closeSession() {
    this.router.navigateByUrl('/login');
    this.loginService.isLogged = false;
    this.asideHeaderService.state = 'Dashboard'
    console.log(this.dashboard.nativeElement)
    this.tab = 0;
    if (this.isExtended_incidences) this.isExtended_incidences = false;
    if (this.isExtended_admin) this.isExtended_admin = false;

    // console.log(this.dashboard.nativeElement)
  }
}
