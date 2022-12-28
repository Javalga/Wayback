import { Component } from '@angular/core';
import { IncidenceService } from 'src/app/shared/incidence.service';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

   constructor(private IncidenceService: IncidenceService, public asideHeaderService: AsideHeaderService) {
    let since = this.asideHeaderService.twoWeeksAgo();
    this.asideHeaderService.dateSince = since;

    let until = this.asideHeaderService.today();
    this.asideHeaderService.dateUntil = until;
  
  console.log(this.asideHeaderService.dateSince);
  console.log(this.asideHeaderService.dateUntil);
  }
}
