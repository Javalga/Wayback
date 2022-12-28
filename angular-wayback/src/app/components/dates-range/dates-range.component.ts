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

  constructor(public asideHeaderService: AsideHeaderService) {



  }
  ngOnInit(): void {

  }

  public defaultDateSince() {

    if (this.asideHeaderService.state === 'Dashboard' || this.asideHeaderService.state === 'Pool de solucionadas') {
      let value = this.twoWeeksAgo();
      this.asideHeaderService.dateSince = value
      return value;
    } else if (this.asideHeaderService.state === 'Devoluciones' || this.asideHeaderService.state === 'Histórico') {
      let value = '1970-01-01';
      this.asideHeaderService.dateSince = value;
      return value
    }

  }


  public defaultDateUntil() {

    if (this.asideHeaderService.state === 'Dashboard' || this.asideHeaderService.state === 'Histórico') {
      let value = this.today();
      this.asideHeaderService.dateUntil = value
      return value;
    } else if (this.asideHeaderService.state === 'Devoluciones') {
      let value = this.twoWeeksAgo();
      this.asideHeaderService.dateUntil = value;
      return value;
    } else {
      let value = this.tomorrow();
      this.asideHeaderService.dateUntil = value;
      return value;
    }

  }


  public twoWeeksAgo() {
    
    return moment().subtract(15, "days").format("YYYY-MM-DD");
  }

  public tomorrow() {

    return moment().add(1, "days").format("YYYY-MM-DD");
  }

  public today() {

    return moment().format("YYYY-MM-DD")
  }

  public sendDates() {

    this.asideHeaderService.dateSince = this.dateSince.nativeElement.value;
    this.asideHeaderService.dateUntil = this.dateUntil.nativeElement.value;
    console.log(this.asideHeaderService.dateSince)
    console.log(this.asideHeaderService.dateUntil)
  }
}
