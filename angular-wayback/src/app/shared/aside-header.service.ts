import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AsideHeaderService {
  public state: string;
  public dateSince;
  public dateUntil;
  constructor() {
    this.state = 'Dashboard';
    this.dateSince = 'YYYY-MM-DD';
    this.dateUntil = 'YYYY-MM-DD';

  }

  public aYearAgo() {
    return moment().subtract(365, 'days').format('YYYY-MM-DD');
  }

  public twoWeeksAgo() {
    return moment().subtract(15, 'days').format('YYYY-MM-DD');
  }
  public tomorrow() {
    return moment().add(1, 'days').format('YYYY-MM-DD');
  }
  public today() {
    return moment().format('YYYY-MM-DD');
  }
  public startOfTime() {
    return '1970-01-01';
  }

}
