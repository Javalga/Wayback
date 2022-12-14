import { Component, Input } from '@angular/core';
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
        this.asideHeaderService.state = this.value
        this.router.navigateByUrl('/dashboard')
        break;
      case 'Registro de incidencias':
        this.asideHeaderService.state = this.value
        this.router.navigateByUrl('/incident-input')
        break;
      case 'Pool de solucionadas':
        this.asideHeaderService.state = this.value
        this.router.navigateByUrl('/solved-pull')
        break;
      case 'Registro de incidencias':
        this.asideHeaderService.state = this.value
        this.router.navigateByUrl('/incident-input')
        break;
      case 'Devoluciones':
        this.asideHeaderService.state = this.value
        this.router.navigateByUrl('/returns')
        break;
      case 'Salida de incidencias':
        this.asideHeaderService.state = this.value
        this.router.navigateByUrl('/incident-output')
        break;
      case 'Historico':
        this.asideHeaderService.state = this.value
        this.router.navigateByUrl('/historical')
        break;
      case 'Administrar Usuarios':
        this.asideHeaderService.state = this.value
        this.router.navigateByUrl('/user-admin')
        break;
    }
  }
}
