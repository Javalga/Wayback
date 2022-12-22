import { Component } from '@angular/core';

import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public recovery: boolean
  constructor(private loginService: LoginService, private router: Router, public toastService: ToastService) {
    this.loginService.isLogged = false
    this.recovery = false
  }
  logIn(username: HTMLInputElement) {

    if (username.value != "") {
      'this.loginService.username = username.value;'
    }

    this.loginService.isLogged = true;
    console.log(this.loginService.isLogged);
    this.router.navigate(['/dashboard']);
    this.loginService.fetchLogin().subscribe((data) => { console.log(data) })
  }
  recover(username) {
    if (username == '') {
      this.toastService.toast({
        position: 'bottom-end',
        icon: 'error',
        title: `Introduce un usuario valido.`,
        showConfirmButton: false,
        timer: 4000
      })
      return
    };

    this.toastService.toast({
      position: 'bottom-end',
      icon: 'info',
      title: `Solicitud de cambio de contraseña enviada para el usuario ${username}`,
      showConfirmButton: false,
      timer: 4000
    })
  }
  toggleModal() {
    this.recovery = !this.recovery
    console.log(this.recovery);

  }
}
