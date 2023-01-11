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
  public calcRejectedPercent: string;
  public calcInWarehousePercent: string;
  public view: any[];
  public single2: any[];
  public view2: any[];
  public gradient: boolean = true;
  public showLegend: boolean = true;
  public showLabels: boolean = true;
  public isDoughnut: boolean = true;
  public card1Title = 'Total de Incidencias';
  public card1Value;
  public card2Title = 'Incidencias Solucionadas';
  public card2Value;
  public card3Title = 'Devoluciones';
  public card3Value;
  public card4Title = 'Rechazadas';
  public card4Value;
  public card5Title = 'En Almacén';
  public card5Value;
  public card6Title = 'Exito de Solución';
  public card6Value;
  public card7Title = 'Porcentaje Devoluciones';
  public card7Value;
  public card8Title = 'Porcentaje Rechazadas';
  public card8Value;
  public card9Title = 'Porcentaje En Almacén';
  public card9Value;


  public colorScheme = {
    domain: ['#9BBB58', '#4AACC5', '#8064A1', '#C0504E']
  };
  public colorScheme2 = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  public single = [
    {
      "name": "Pendientes",
      "value": 5000000
    },
    {
      "name": "Devoluciones",
      "value": 7200000
    },
    {
      "name": "Rechazadas",
      "value": 6200000
    }
  ];

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
      this.asideHeaderService.dateSince,
      this.asideHeaderService.dateUntil
    ).subscribe((data: Incidence[]) => {
      this.incidences = data;
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
      this.calcRejectedPercent = `${Number(numberR.toFixed(2))}%`;
      // console.log(this.calRejectedPercent);

      // En almacén porcentaje
      let numberW = (this.calcInWarehouse * 100) / this.incidences.length;
      this.calcInWarehousePercent = `${Number(numberW.toFixed(2))}%`;
      // console.log(this.calcInWarehousePercent);

      this.card1Value = this.calcTotal
      this.card2Value = this.calcSolved
      this.card3Value = this.calcReturn
      this.card4Value = this.calcRejected
      this.card5Value = this.calcInWarehouse
      this.card6Value = this.calcSolvedPercent
      this.card7Value = this.calcReturnPercent
      this.card8Value = this.calcRejectedPercent
      this.card9Value = this.calcInWarehousePercent

      // this.single.push({
      //   "name": "Solucionadas",
      //   "value": this.calcSolved
      // })
    });

    console.log(this.asideHeaderService.dateSince);
    console.log(this.asideHeaderService.dateUntil);
  }


  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    this.single[0].value = this.calcSolved
    console.log(this.single[0].value)
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  changeDate() {
    this.IncidenceService.getIncidenceDashboard(
      this.asideHeaderService.dateSince,
      this.asideHeaderService.dateUntil
      
    ).subscribe((data: Incidence[]) => {
      this.incidences = data;
      
      console.log("estoy funcionando")
      console.log(this.asideHeaderService.dateSince);
      console.log(this.asideHeaderService.dateUntil);
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
      this.calcRejectedPercent = `${Number(numberR.toFixed(2))}%`;
      // console.log(this.calRejectedPercent);

      // En almacén porcentaje
      let numberW = (this.calcInWarehouse * 100) / this.incidences.length;
      this.calcInWarehousePercent = `${Number(numberW.toFixed(2))}%`;
      // console.log(this.calcInWarehousePercent);

      this.card1Value = this.calcTotal
      this.card2Value = this.calcSolved
      this.card3Value = this.calcReturn
      this.card4Value = this.calcRejected
      this.card5Value = this.calcInWarehouse
      this.card6Value = this.calcSolvedPercent
      this.card7Value = this.calcReturnPercent
      this.card8Value = this.calcRejectedPercent
      this.card9Value = this.calcInWarehousePercent

      // this.single.push({
      //   "name": "Solucionadas",
      //   "value": this.calcSolved
      // })
    });

  }
}

