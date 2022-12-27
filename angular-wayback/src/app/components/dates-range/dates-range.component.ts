import { Component, ViewChild } from '@angular/core';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';

@Component({
  selector: 'app-dates-range',
  templateUrl: './dates-range.component.html',
  styleUrls: ['./dates-range.component.css']
})
export class DatesRangeComponent {

  @ViewChild('dateSince') dateSince;
  @ViewChild('dateUntil') dateUntil;

  constructor(public asideHeaderService: AsideHeaderService) {



  }

  public sendDates() {
    this.asideHeaderService.dateSince = this.dateSince.nativeElement.value;
    this.asideHeaderService.dateUntil = this.dateUntil.nativeElement.value;
    console.log(this.asideHeaderService.dateSince)
    console.log(this.asideHeaderService.dateUntil)
  }
}
