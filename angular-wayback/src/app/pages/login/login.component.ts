import { Component } from '@angular/core';

import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/toast.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public recovery: boolean
  constructor(public loginService: LoginService, private router: Router, public toastService: ToastService) {
    this.loginService.isLogged = false
    this.recovery = false
  }
  login(form: NgForm) {
    console.log(form.value);
    this.loginService.user = new User(form.value.username, form.value.password, null, null, null, null, null, null)
    this.loginService.fetchLogin().subscribe((data) => {
      if (data[0] != undefined) {
        this.loginService.isLogged = true;
        console.log(data);

        this.loginService.user = new User(data[0].username,
          data[0].password,
          data[0].name,
          data[0].role_id,
          data[0].mail,
          data[0].warehouse_id,
          data[0].location_id,
          data[0].active)
        console.log(this.loginService.user);
        this.router.navigateByUrl('/dashboard');
      } else {
        this.toastService.toast({
          position: 'bottom-end',
          icon: 'error',
          title: `Credenciales incorrectas.`,
          showConfirmButton: false,
          timer: 4000
        })
      }
    })
  }
  recover(form: NgForm) {
    if (form.value.username == '') {
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
      title: `Solicitud de cambio de contraseña enviada para el usuario ${form.value}`,
      showConfirmButton: false,
      timer: 4000
    })
  }
  toggleModal() {
    this.recovery = !this.recovery
    console.log(this.recovery);
  }
}
