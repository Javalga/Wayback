import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Incidence } from 'src/app/models/incidence';
import { IncidenceService } from 'src/app/shared/incidence.service'
import { ActivatedRoute } from '@angular/router';
import { DeliveryTimeService } from 'src/app/shared/delivery-time.service';
import { DeliveryTime } from 'src/app/models/delivery-time';
import * as moment from 'moment';
import { FormAnswer } from 'src/app/models/form-answer';
import { ToastService } from 'src/app/shared/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.css'],
})
export class CustomerInputComponent {
  public incidence: Incidence;
  public ref: number;
  public delivery_time: DeliveryTime[];
  public next_delivery_array: string[];
  public form_awnser: FormAnswer;
  public resultado_put;
  constructor(
    public incidenceService: IncidenceService,
    public deliveryTimeService: DeliveryTimeService,
    public toastService: ToastService,
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.ref = this.activatedRoute.snapshot.params.ref;
    this.incidenceService.getOneIncidence(this.ref).subscribe((data) => {
      this.incidence = data[0];
    });

    this.deliveryTimeService
      .getDelivery_time()
      .subscribe((data: DeliveryTime[]) => {
        this.delivery_time = data;
        console.log(this.delivery_time);
      });

    this.next_delivery_array = [];
    for (let i = 1; i < 6; i++) {
      let date = moment().add(i, 'days').format('DD/MM/YYYY');
      this.next_delivery_array.push(date);
    }

    this.form_awnser = new FormAnswer();
  }
  onSubmit(ngForm: NgForm) {
    console.log(this.incidence);

    let answer = ngForm.value;
    console.log(answer.customer_cp);
    console.log(answer);
    if (
      answer.customer_cp == undefined ||
      answer.customer_direction == undefined ||
      answer.customer_poblation == undefined ||
      answer.customer_mail == undefined ||
      answer.customer_name == undefined ||
      answer.customer_phone == undefined ||
      answer.delivery_time == undefined ||
      answer.next_delivey == undefined
    ) {
      this.toastService.toast({
        position: 'bottom-end',
        icon: 'error',
        title: `Asegurese de rellenar todos los campos`,
        showConfirmButton: false,
        timer: 4000,
      });
    } else {
      if (
        ngForm.value.checkbox_form == undefined ||
        ngForm.value.checkbox_form == false
      ) {
        this.incidence.status_id = 2;
      } else if (ngForm.value.checkbox_form == true) {
        this.incidence.status_id = 4;
      }

      let day = this.incidence.next_delivery.slice(0, 2);
      let month = this.incidence.next_delivery.slice(3, 5);
      let year = this.incidence.next_delivery.slice(-4);
      this.incidence.next_delivery = `${year}/${month}/${day}`;
      console.log(this.incidence.next_delivery);

      this.incidenceService.putIncidence(this.incidence).subscribe((data) => {
        this.resultado_put = data;
        
        if(this.resultado_put.message == "Incidence updated"){
          this.router.navigateByUrl('form-confirmation');
        }
      }
      )};
}
}
  
