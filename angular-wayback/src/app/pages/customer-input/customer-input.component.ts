import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Incidence } from 'src/app/models/incidence';
import { IncidenceService } from 'src/app/shared/incidence.service'
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.css'],
})
export class CustomerInputComponent {
  public incidence: Incidence;
  public delivery_time_options: string[]
  public next_delivery: ""; 
  public delivery_time: "";

  constructor(public incidenceService: IncidenceService,
    public HttpClient: HttpClient) {
    
      this.incidenceService.getOneIncidence(2689296349822351).subscribe((data: Incidence[]) =>
      {
        this.incidence = data[0]
      });
      this.delivery_time_options = [
        moment().add(1, 'day').format('DD-MM-YYYY'),
        moment().add(2, 'day').format('DD-MM-YYYY'),
        moment().add(3, 'day').format('DD-MM-YYYY'),
        moment().add(4, 'day').format('DD-MM-YYYY'),
        moment().add(5, 'day').format('DD-MM-YYYY'),
      ];
  }



  

  onSubmit(ngForm: NgForm) {
    console.log(ngForm)
  }


}
