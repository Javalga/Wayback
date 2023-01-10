import { Component } from '@angular/core';
import { IncidenceService } from 'src/app/shared/incidence.service';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';
import { Incidence } from 'src/app/models/incidence';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public incidences: Incidence[];
  public calcTotal: number;
  public calcSolved: number;
  public calcReturn: number;
  public calcRejected: number;
  public calcInWarehouse: number;
  public calcSolvedPercent: string;
  public calcReturnPercent: string;
  public calRejectedPercent: string;
  public calcInWarehousePercent: string;

  constructor(
    private IncidenceService: IncidenceService,
    public asideHeaderService: AsideHeaderService,
    public loginService: LoginService
  ) {
    let since = this.asideHeaderService.twoWeeksAgo();
    this.asideHeaderService.dateSince = since;

    let until = this.asideHeaderService.today();
    this.asideHeaderService.dateUntil = until;

    this.IncidenceService.getIncidenceDashboard(
      this.asideHeaderService.twoWeeksAgo(),
      this.asideHeaderService.today()
    ).subscribe((data: Incidence[]) => {
      this.incidences = data;
      console.log(this.incidences);

      if (this.loginService.user.role_id == 3) {
        this.incidences = this.incidences.filter(
          (elem) => elem.warehouse_id == this.loginService.user.warehouse_id
        );
      } else if (this.loginService.user.role_id == 2) {
        this.incidences = this.incidences.filter(
          (elem) => elem.location_id == this.loginService.user.location_id
        );
      }

      // total de incidencias
      this.calcTotal = this.incidences.length;
      console.log(this.calcTotal);

      // incidencias solucionadas
      this.calcSolved = this.incidences.filter(
        (elem) => elem.status_id == 2 || elem.status_id == 5
      ).length;

      // devoluciones
      this.calcReturn = this.incidences.filter(
        (elem) => elem.status_id == 3
      ).length;

      // Rechazadas
      this.calcRejected = this.incidences.filter(
        (elem) => elem.status_id == 4
      ).length;

      // En almacén
      this.calcInWarehouse = this.incidences.filter(
        (elem) => elem.status_id == 1
      ).length;

      // incidencias solucionadas porcentaje
      let numberS = (this.calcSolved * 100) / this.incidences.length;
      this.calcSolvedPercent = `${Number(numberS.toFixed(2))}%`;
      // console.log(this.calcSolvedPercent);

      // devoluciones porcentaje
      let numberD = (this.calcReturn * 100) / this.incidences.length;
      this.calcReturnPercent = `${Number(numberD.toFixed(2))}%`;
      // console.log(this.calcReturnPercent);

      // Rechazadas porcentaje
      let numberR =
      (this.calcRejected * 100) / this.incidences.length;
      this.calRejectedPercent = `${Number(numberR.toFixed(2))}%`;
      // console.log(this.calRejectedPercent);

      // Rechazadas porcentaje
      let numberW = (this.calcInWarehouse * 100) / this.incidences.length;
      this.calcInWarehousePercent = `${Number(numberW.toFixed(2))}%`;
      // console.log(this.calcInWarehousePercent);
    });
  }
}

