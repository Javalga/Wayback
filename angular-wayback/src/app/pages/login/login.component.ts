import { Component } from '@angular/core';

import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/toast.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { ChartinfoService } from 'src/app/shared/chartinfo.service';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public recovery: boolean
  constructor(public loginService: LoginService,
    private router: Router,
    public toastService: ToastService,
    public asideHeaderService: AsideHeaderService,
    public chartinfoService: ChartinfoService) {
    this.loginService.isLogged = false
    this.recovery = false
    let since = this.asideHeaderService.twoWeeksAgo();
    this.asideHeaderService.dateSince = since;
    let until = this.asideHeaderService.today();
    this.asideHeaderService.dateUntil = until;
    this.chartinfoService.updateChart()
  }
  login(form: NgForm) {
    console.log(form.value);
    this.loginService.user = new User(form.value.username, form.value.password, null, null, null, null, null, null)
    this.loginService.fetchLogin().subscribe((data) => {
      if (data[0] != undefined) {
        this.loginService.isLogged = true;
        console.log(data);

        this.loginService.user = new User(
          data[0].username,
          data[0].password,
          data[0].name,
          data[0].role,
          data[0].mail,
          data[0].warehouse,
          data[0].location,
          data[0].active,
          data[0].role_id,
          data[0].warehouse_id,
          data[0].location_id
        );
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
    this.loginService.fetchRecover({
      "email": "jalonsogal@gmail.com",
      "subject": "New password recover request received.",
      "html": `<b>The user with username ${form.value.username} requested a new password please contact with him when you're done.</b>`
    })
    this.toastService.toast({
      position: 'bottom-end',
      icon: 'info',
      title: `Solicitud de cambio de contrase??a enviada para el usuario ${form.value}`,
      showConfirmButton: false,
      timer: 4000
    })
  }
  toggleModal() {
    this.recovery = !this.recovery
    console.log(this.recovery);
  }
}
