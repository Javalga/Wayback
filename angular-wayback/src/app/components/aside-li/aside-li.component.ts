import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-li',
  templateUrl: './aside-li.component.html',
  styleUrls: ['./aside-li.component.css']
})
export class AsideLiComponent {
  @Input() value: undefined
  public isActive: boolean
  constructor(private router: Router) { }

  listHandler() {
    switch (this.value) {
      case 'Dashboard':
        this.router.navigateByUrl('/dashboard')
        break;
      case 'Registro incidencias':
        this.router.navigateByUrl('/incident-input')
        break;
      case 'Pool solucionadas':
        this.router.navigateByUrl('/solved-pull')
        break;
      case 'Registro incidencias':
        this.router.navigateByUrl('/incident-input')
        break;
      case 'Devoluciones':
        this.router.navigateByUrl('/returns')
        break;
      case 'Salida incidencias':
        this.router.navigateByUrl('/incident-output')
        break;
      case 'Historico':
        this.router.navigateByUrl('/historical')
        break;
      case 'Administrar Usuarios':
        this.router.navigateByUrl('/user-admin')
        break;
    }
  }
}
