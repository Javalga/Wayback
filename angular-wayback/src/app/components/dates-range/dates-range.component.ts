import { Component, ViewChild, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';

@Component({
  selector: 'app-dates-range',
  templateUrl: './dates-range.component.html',
  styleUrls: ['./dates-range.component.css']
})
export class DatesRangeComponent implements OnInit {

  @ViewChild('dateSince') dateSince;
  @ViewChild('dateUntil') dateUntil;


  public changeSince = false;
  public changeUntil = false;

  constructor(public asideHeaderService: AsideHeaderService) {



  }
  ngOnInit(): void {

  }

  // public isDefaultSince() {

  //   if (!this.changeSince) {
  //     console.log(this.dateSince.nativeElement.value)
  //     return this.defaultDateSince;
  //   } else return this.dateSince.nativeElement.value;
  // }

  // public isDefaultUntil() {

  //   if (!this.changeUntil) {
  //     return this.defaultDateUntil;
  //   } else return this.dateUntil.nativeElement.value;
  // }

  public defaultDateSince() {

    if (this.asideHeaderService.state === 'Dashboard' || this.asideHeaderService.state === 'Pool de solucionadas') {
      let value = this.asideHeaderService.twoWeeksAgo();
      // this.asideHeaderService.dateSince = value
      return value;
    } else if (this.asideHeaderService.state === 'Devoluciones' || this.asideHeaderService.state === 'Histórico') {
      let value = '1970-01-01';
      // this.asideHeaderService.dateSince = value;
      return value
    }

  }


  public defaultDateUntil() {

    if (this.asideHeaderService.state === 'Dashboard' || this.asideHeaderService.state === 'Histórico') {
      let value = this.asideHeaderService.today();
      // this.asideHeaderService.dateUntil = value
      return value;
    } else if (this.asideHeaderService.state === 'Devoluciones') {
      let value = this.asideHeaderService.twoWeeksAgo();
      // this.asideHeaderService.dateUntil = value;
      return value;
    } else {
      let value = this.asideHeaderService.tomorrow();
      // this.asideHeaderService.dateUntil = value;
      return value;
    }

  }



  public sendDates() {

    this.changeSince = true;
    this.changeUntil = true;

    console.log(this.dateSince.nativeElement.value)

    this.asideHeaderService.dateSince = this.dateSince.nativeElement.value;
    this.asideHeaderService.dateUntil = this.dateUntil.nativeElement.value;

    console.log(this.asideHeaderService.dateSince)
    console.log(this.asideHeaderService.dateUntil)
  }
}
