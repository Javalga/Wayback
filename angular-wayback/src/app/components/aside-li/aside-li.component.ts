import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';
@Component({
  selector: 'app-aside-li',
  templateUrl: './aside-li.component.html',
  styleUrls: ['./aside-li.component.css']
})
export class AsideLiComponent {
  @Input() value: undefined
  public isActive: boolean
  constructor(private router: Router, private asideHeaderService: AsideHeaderService) { }

  listHandler() {

    switch (this.value) {
      case 'Dashboard':
        this.asideHeaderService.state = this.value;
        this.router.navigateByUrl('/dashboard');
        break;
      case 'Registro de incidencias':
        this.asideHeaderService.state = this.value;
        this.router.navigateByUrl('/incidence-input');
        break;
      case 'Pool de solucionadas':
        this.asideHeaderService.state = this.value;
        this.router.navigateByUrl('/solved-pull');
        break;
      case 'Registro de incidencias':
        this.asideHeaderService.state = this.value;
        this.router.navigateByUrl('/incidence-input');
        break;
      case 'Devoluciones':
        this.asideHeaderService.state = this.value;
        this.router.navigateByUrl('/returns');
        break;
      case 'Salida de incidencias':
        this.asideHeaderService.state = this.value;
        this.router.navigateByUrl('/incidence-output');
        break;
      case 'Histórico':
        this.asideHeaderService.state = this.value;
        this.router.navigateByUrl('/historical');
        break;
      case 'Localidades':
        this.asideHeaderService.state = this.value;
        this.router.navigateByUrl('/locations');
        break;
      case 'Almacenes':
        this.asideHeaderService.state = this.value;
        this.router.navigateByUrl('/warehouses');
        break;
      case 'Usuarios':
        this.asideHeaderService.state = this.value;
        this.router.navigateByUrl('/user-admin');
        break;
    }
  }

}
