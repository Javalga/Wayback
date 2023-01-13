import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPathService } from './api-path.service';
import { Incidence } from '../models/incidence';
import { AsideHeaderService } from './aside-header.service';
import { LoginService } from './login.service';
import { Chart } from 'chart.js';
@Injectable({
  providedIn: 'root',
})

export class ChartinfoService {
  public incidences: Incidence[]
  public totalAmount: number;
  public solvedAmount: number;
  public returnsAmount: number;
  public rejectedAmount: number;
  public intoWarehouseAmount: number;
  public solvedPercentResult: number;
  public returnPercentResult: number;
  public rejectedPercentResult: number;
  public intoWarehousePercentResult: number;
  public dateSince: string;
  public untilDate: string
  public chart: Chart;
  public chart2: Chart;
  constructor(public apiPathService: ApiPathService, private http: HttpClient, public asideHeaderService: AsideHeaderService, public loginService: LoginService) {


  }
  getIncidenceByDate(dateSince, dateUntil) {
    let url = `${this.apiPathService.apiPath}/incidence_dashboard?since=${dateSince}&until=${dateUntil}`;
    return this.http.get(url);
  }





  updateChart() {
    // console.log(this.asideHeaderService.dateSince)
    // console.log(this.asideHeaderService.dateUntil)

    console.log(this.incidences)
    this.getIncidenceByDate(
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


    })
  }

}

















