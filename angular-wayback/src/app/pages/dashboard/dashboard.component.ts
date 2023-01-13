import { Component } from '@angular/core';
import { IncidenceService } from 'src/app/shared/incidence.service';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';
import { Incidence } from 'src/app/models/incidence';
import { LoginService } from 'src/app/shared/login.service';
import { ChartinfoService } from 'src/app/shared/chartinfo.service';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';
import { BarChartComponent } from 'src/app/components/bar-chart/bar-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public incidences: Incidence[];
  public totalAmount: number;
  public solvedAmount: number;
  public returnsAmount: number;
  public rejectedAmount: number;
  public intoWarehouseAmount: number;
  public solvedPercentResult: number;
  public returnPercentResult: number;
  public rejectedPercentResult: number;
  public intoWarehousePercentResult: number;
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
  public card3Percent: string;
  public card6Percent: string;
  public pieComp: PieChartComponent;
  public barComp: BarChartComponent;

  constructor(
    private IncidenceService: IncidenceService,
    public asideHeaderService: AsideHeaderService,
    public loginService: LoginService,
    public chartinfoService: ChartinfoService,
  ) {

    this.pieComp = new PieChartComponent(this.chartinfoService);
    this.barComp = new BarChartComponent(this.chartinfoService);

    let since = this.asideHeaderService.twoWeeksAgo();
    this.asideHeaderService.dateSince = since;
    let until = this.asideHeaderService.today();
    this.asideHeaderService.dateUntil = until;
    this.chartinfoService.updateChart()
    this.card1Value = this.chartinfoService.totalAmount;
    this.card3Value = this.chartinfoService.returnPercentResult;
    this.card6Value = this.chartinfoService.solvedPercentResult;
    this.card3Percent = this.card3Value + " %";
    this.card6Percent = this.card6Value + " %";

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

    // console.log(this.asideHeaderService.dateSince)
    // console.log(this.asideHeaderService.dateUntil)
    // this.chartinfoService.updateChart()
    this.chartinfoService.getIncidenceByDate(
      this.asideHeaderService.dateSince,
      this.asideHeaderService.dateUntil
    ).subscribe((data: Incidence[]) => {
      this.incidences = data;
      if (this.loginService.user.role_id === 3) {
        this.incidences = this.incidences.filter(
          (elem) => elem.warehouse_id == this.loginService.user.warehouse_id
        );
      } else if (this.loginService.user.role_id === 2) {
        this.incidences = this.incidences.filter(
          (elem) => elem.location_id == this.loginService.user.location_id
        );
      }
      console.log(this.incidences)
      this.totalAmount = this.incidences.length;
      this.solvedAmount = this.incidences.filter(
        (elem) => elem.status_id == 2 || elem.status_id == 5
      ).length;
      this.returnsAmount = this.incidences.filter(
        (elem) => elem.status_id == 3
      ).length;
      this.rejectedAmount = this.incidences.filter(
        (elem) => elem.status_id == 4
      ).length;
      this.intoWarehouseAmount = this.incidences.filter(
        (elem) => elem.status_id == 1
      ).length;
      this.solvedPercentResult = parseFloat(((this.solvedAmount * 100) / this.incidences.length).toFixed(2))
      this.returnPercentResult = parseFloat(((this.returnsAmount * 100) / this.incidences.length).toFixed(2))
      this.rejectedPercentResult = parseFloat(((this.rejectedAmount * 100) / this.incidences.length).toFixed(2));
      this.intoWarehousePercentResult = parseFloat(((this.intoWarehouseAmount * 100) / this.incidences.length).toFixed(2));


      this.chartinfoService.totalAmount = this.totalAmount;
      this.chartinfoService.solvedAmount = this.solvedAmount;
      this.chartinfoService.returnsAmount = this.returnsAmount;
      this.chartinfoService.rejectedAmount = this.rejectedAmount;
      this.chartinfoService.intoWarehouseAmount = this.intoWarehouseAmount;
      this.chartinfoService.solvedPercentResult = this.solvedPercentResult;
      this.chartinfoService.returnPercentResult = this.returnPercentResult;
      this.chartinfoService.rejectedPercentResult = this.rejectedPercentResult;
      this.chartinfoService.intoWarehousePercentResult = this.intoWarehousePercentResult;

      this.chartinfoService.chart.destroy()
      this.chartinfoService.chart2.destroy()
      this.pieComp.ngOnInit()
      this.barComp.ngOnInit()

      this.card1Value = this.totalAmount;
      this.card3Value = this.returnPercentResult;
      this.card6Value = this.solvedPercentResult;
      this.card3Percent = this.card3Value + " %";
      this.card6Percent = this.card6Value + " %";



    })


    // console.log(this.chartinfoService.chart)

    // console.log(this.chartinfoService.solvedAmount)
    // console.log(date)
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

