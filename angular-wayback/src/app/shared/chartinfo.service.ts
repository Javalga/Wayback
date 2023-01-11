import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPathService } from './api-path.service';
import { Incidence } from '../models/incidence';
import { AsideHeaderService } from './aside-header.service';
import { LoginService } from './login.service';
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
  public solvedPercentResult: string;
  public returnPercentResult: string;
  public rejectedPercentResult: string;
  public intoWarehousePercentResult: string;
  public dateSince: string;
  public untilDate: string
  constructor(public apiPathService: ApiPathService, private http: HttpClient, public asideHeaderService: AsideHeaderService, public loginService: LoginService) {
    let since = this.asideHeaderService.twoWeeksAgo();
    this.asideHeaderService.dateSince = since;
    let until = this.asideHeaderService.today();
    this.asideHeaderService.dateUntil = until;
    this.updateChart()

  }
  getIncidenceByDate(dateSince, dateUntil) {
    let url = `${this.apiPathService.apiPath}/incidence_dashboard?since=${dateSince}&until=${dateUntil}`;
    return this.http.get(url);
  }



  updateChart() {
    this.getIncidenceByDate(
      this.asideHeaderService.dateSince,
      this.asideHeaderService.dateUntil
    ).subscribe((data: Incidence[]) => {
      this.incidences = data;
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
      this.solvedPercentResult = `${((this.solvedAmount * 100) / this.incidences.length).toFixed(2)}%`
      this.returnPercentResult = `${((this.returnsAmount * 100) / this.incidences.length).toFixed(2)}%`
      this.rejectedPercentResult = `${((this.rejectedAmount * 100) / this.incidences.length).toFixed(2)}%`;
      this.intoWarehousePercentResult = `${((this.intoWarehouseAmount * 100) / this.incidences.length).toFixed(2)}%`;
      if (this.loginService.user.role_id === 3) {
        this.incidences = this.incidences.filter(
          (elem) => elem.warehouse_id == this.loginService.user.warehouse_id
        );
      } else if (this.loginService.user.role_id === 2) {
        this.incidences = this.incidences.filter(
          (elem) => elem.location_id == this.loginService.user.location_id
        );
      }

    })
  }

}

















