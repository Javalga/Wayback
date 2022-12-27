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
      return this.twoWeeksAgo();
    } else if (this.asideHeaderService.state === 'Devoluciones' || this.asideHeaderService.state === 'Histórico') {
      return "1970-01-01"
    }

  }


  public defaultDateUntil() {

    if (this.asideHeaderService.state === 'Dashboard' || this.asideHeaderService.state === 'Histórico') {
      return this.today();
    } else if (this.asideHeaderService.state === 'Devoluciones') {
      return this.twoWeeksAgo();
    } else return this.tomorrow();

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
