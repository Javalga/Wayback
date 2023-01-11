import { Component } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-form-incidence-not-found',
  templateUrl: './form-incidence-not-found.component.html',
  styleUrls: ['./form-incidence-not-found.component.css'],
})
export class FormIncidenceNotFoundComponent {
  constructor(public loginService: LoginService) {
    this.loginService.isLogged = false;
  }
}
