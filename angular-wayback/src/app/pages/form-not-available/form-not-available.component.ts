import { Component } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-form-not-available',
  templateUrl: './form-not-available.component.html',
  styleUrls: ['./form-not-available.component.css'],
})
export class FormNotAvailableComponent {
  constructor(public loginService: LoginService) {
    this.loginService.isLogged = false;
  }
}
