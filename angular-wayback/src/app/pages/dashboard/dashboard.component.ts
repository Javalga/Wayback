import { Component } from '@angular/core';
import { IncidenceService } from 'src/app/shared/incidence.service';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';
import { Incidence } from 'src/app/models/incidence';
import { LoginService } from 'src/app/shared/login.service';
import { ChartinfoService } from 'src/app/shared/chartinfo.service';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public incidences: Incidence[];
  // public calcTotal: number;
  // public calcSolved: number;
  // public calcReturn: number;
  // public calcRejected: number;
  // public calcInWarehouse: number;
  // public calcSolvedPercent: string;
  // public calcReturnPercent: string;
  // public calcRejectedPercent: string;
  // public calcInWarehousePercent: string;
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
  public pieComp: PieChartComponent;

  constructor(
    private IncidenceService: IncidenceService,
    public asideHeaderService: AsideHeaderService,
    public loginService: LoginService,
    public chartinfoService: ChartinfoService
  ) {

    this.pieComp = new PieChartComponent(this.chartinfoService);

    let since = this.asideHeaderService.twoWeeksAgo();
    this.asideHeaderService.dateSince = since;
    let until = this.asideHeaderService.today();
    this.asideHeaderService.dateUntil = until;
    this.chartinfoService.updateChart()

    // total de incidencias
    // this.calcTotal = this.incidences.length;

    // // incidencias solucionadas
    // this.calcSolved = this.incidences.filter(
    //   (elem) => elem.status_id == 2 || elem.status_id == 5
    // ).length;


    // // devoluciones
    // this.calcReturn = this.incidences.filter(
    //   (elem) => elem.status_id == 3
    // ).length;

    // // Rechazadas
    // this.calcRejected = this.incidences.filter(
    //   (elem) => elem.status_id == 4
    // ).length;

    // // En almacén
    // this.calcInWarehouse = this.incidences.filter(
    //   (elem) => elem.status_id == 1
    // ).length;

    // // incidencias solucionadas porcentaje
    // let numberS = (this.calcSolved * 100) / this.incidences.length;
    // this.calcSolvedPercent = `${Number(numberS.toFixed(2))}%`;
    // // console.log(this.calcSolvedPercent);

    // // devoluciones porcentaje
    // let numberD = (this.calcReturn * 100) / this.incidences.length;
    // this.calcReturnPercent = `${Number(numberD.toFixed(2))}%`;
    // // console.log(this.calcReturnPercent);

    // // Rechazadas porcentaje
    // let numberR =
    //   (this.calcRejected * 100) / this.incidences.length;
    // this.calcRejectedPercent = `${Number(numberR.toFixed(2))}%`;
    // // console.log(this.calRejectedPercent);

    // // En almacén porcentaje
    // let numberW = (this.calcInWarehouse * 100) / this.incidences.length;
    // this.calcInWarehousePercent = `${Number(numberW.toFixed(2))}%`;
    // // console.log(this.calcInWarehousePercent);

    // this.single.push({
    //   "name": "Solucionadas",
    //   "value": this.calcSolved
    // })

  }
  sendDate(date) {

    this.chartinfoService.updateChart()
    this.chartinfoService.chart.destroy()
    this.pieComp.ngOnInit()
    console.log(this.chartinfoService.chart)

    console.log(this.chartinfoService.solvedAmount)
    console.log(date)
  }
}

//   changeDate() {
//     this.IncidenceService.getIncidenceDashboard(
//       this.asideHeaderService.dateSince,
//       this.asideHeaderService.dateUntil

//     ).subscribe((data: Incidence[]) => {
//       this.incidences = data;

//       console.log("estoy funcionando")
//       console.log(this.asideHeaderService.dateSince);
//       console.log(this.asideHeaderService.dateUntil);
//       if (this.loginService.user.role_id == 3) {
//         this.incidences = this.incidences.filter(
//           (elem) => elem.warehouse_id == this.loginService.user.warehouse_id
//         );
//       } else if (this.loginService.user.role_id == 2) {
//         this.incidences = this.incidences.filter(
//           (elem) => elem.location_id == this.loginService.user.location_id
//         );
//       }

//       // total de incidencias
//       this.calcTotal = this.incidences.length;
//       console.log(this.calcTotal);

//       // incidencias solucionadas
//       this.calcSolved = this.incidences.filter(
//         (elem) => elem.status_id == 2 || elem.status_id == 5
//       ).length;


//       // devoluciones
//       this.calcReturn = this.incidences.filter(
//         (elem) => elem.status_id == 3
//       ).length;

//       // Rechazadas
//       this.calcRejected = this.incidences.filter(
//         (elem) => elem.status_id == 4
//       ).length;

//       // En almacén
//       this.calcInWarehouse = this.incidences.filter(
//         (elem) => elem.status_id == 1
//       ).length;

//       // incidencias solucionadas porcentaje
//       let numberS = (this.calcSolved * 100) / this.incidences.length;
//       this.calcSolvedPercent = `${Number(numberS.toFixed(2))}%`;
//       // console.log(this.calcSolvedPercent);

//       // devoluciones porcentaje
//       let numberD = (this.calcReturn * 100) / this.incidences.length;
//       this.calcReturnPercent = `${Number(numberD.toFixed(2))}%`;
//       // console.log(this.calcReturnPercent);

//       // Rechazadas porcentaje
//       let numberR =
//         (this.calcRejected * 100) / this.incidences.length;
//       this.calcRejectedPercent = `${Number(numberR.toFixed(2))}%`;
//       // console.log(this.calRejectedPercent);

//       // En almacén porcentaje
//       let numberW = (this.calcInWarehouse * 100) / this.incidences.length;
//       this.calcInWarehousePercent = `${Number(numberW.toFixed(2))}%`;
//       // console.log(this.calcInWarehousePercent);

//       this.card1Value = this.calcTotal
//       this.card2Value = this.calcSolved
//       this.card3Value = this.calcReturn
//       this.card4Value = this.calcRejected
//       this.card5Value = this.calcInWarehouse
//       this.card6Value = this.calcSolvedPercent
//       this.card7Value = this.calcReturnPercent
//       this.card8Value = this.calcRejectedPercent
//       this.card9Value = this.calcInWarehousePercent

//       // this.single.push({
//       //   "name": "Solucionadas",
//       //   "value": this.calcSolved
//       // })
//     });

//   }
// }

