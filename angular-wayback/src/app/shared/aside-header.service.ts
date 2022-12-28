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
