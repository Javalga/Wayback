import { Component } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-form-confirmation',
  templateUrl: './form-confirmation.component.html',
  styleUrls: ['./form-confirmation.component.css'],
})
export class FormConfirmationComponent {
  constructor(public loginService: LoginService) {
    this.loginService.isLogged = false;
  }
}
