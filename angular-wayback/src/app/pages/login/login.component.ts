import { Component } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) {

  }
  logIn() {
    this.loginService.isLogged = true;
    console.log(this.loginService.isLogged)
    this.router.navigate(['/dashboard'])
  }
}
