import { Component } from '@angular/core';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';

@Component({
  selector: 'app-dates-range',
  templateUrl: './dates-range.component.html',
  styleUrls: ['./dates-range.component.css']
})
export class DatesRangeComponent {
  constructor(public asideHeaderService: AsideHeaderService) { }
}
