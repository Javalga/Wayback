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
import { LoginService } from 'src/app/shared/login.service';

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
  public incidence_text: string;
  public error;
  constructor(
    public incidenceService: IncidenceService,
    public deliveryTimeService: DeliveryTimeService,
    public toastService: ToastService,
    private router: Router,
    public loginService: LoginService,
    public activatedRoute: ActivatedRoute
  ) {
    
    this.incidence = new Incidence()
    this.loginService.isLogged = false
    this.ref = this.activatedRoute.snapshot.params.ref;
    this.incidenceService.getOneIncidence(this.ref).subscribe((data: Incidence[]) => {
      this.error = data
      console.log(this.error);
      
      if (this.error.code == 'ER_BAD_FIELD_ERROR' || this.error[0] == null) {
        this.router.navigateByUrl('form-incidence-not-found');
        this.incidence = new Incidence();
      } else {
        this.incidence = data[0];

        if (this.incidence.status_id != 1) {
          this.router.navigateByUrl('form-not-avaible');
          this.incidence = new Incidence();
        }

        switch (this.incidence.incidence_type_id) {
          case 1:
            this.incidence_text = `Hola, buenos días, no hemos podido entregar su pedido por una AUSENCIA. Por favor indíquenos un horario de entrega favorable para usted en el siguiente formulario. Compruebe que todos los datos de su pedido son correctos para asegurar el éxito de la entrega, muchas gracias.`;
            break;
          case 2:
            this.incidence_text = `Hola, buenos días, no hemos podido entregar su pedido debido a DIRECCIÓN INCORRECTA o falta de datos. Por favor indíquenos la dirección completa de entrega y no olvide indicar el número de la calle, del piso (si reside en un piso) y del código postal. Indique el horario de entrega que le sea favorable para recibir su pedido, muchas gracias.`;
            break;
          case 3:
            this.incidence_text = `Hola, buenos días, no hemos podido entregar su pedido porque se nos ha notificado que lo ha rechazado. Por favor confirme que ha rechazado su pedido. De lo contrario compruebe los datos de entrega e indíquenos un horario favorable para realizar la entrega de su pedido, muchas gracias.`;
            break;
        }
      }
      
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
    console.log();
    
    console.log(answer);
    
    if (
      answer.checkbox_form == true &&
      ((answer.customer_cp != undefined &&
        answer.customer_direction != undefined &&
        answer.customer_poblation != undefined) &&
        answer.customer_mail != undefined &&
        answer.customer_name != undefined &&
        answer.customer_phone != undefined &&
        answer.customer_cp != '' &&
        answer.customer_direction != '' &&
        answer.customer_poblation != '' &&
        answer.customer_mail != '' &&
        answer.customer_name != '' &&
        answer.customer_phone != '')
    ) {
      console.log('caso1');
      this.incidence.status_id = 4;
      this.incidence.next_delivery = undefined;
      this.incidence.delivery_time = undefined;
      this.incidenceService.putIncidence(this.incidence).subscribe((data) => {
        this.resultado_put = data;

        if (this.resultado_put.message == 'Incidence updated') {
          this.router.navigateByUrl('form-confirmation');
        }
      });
    } else if (
      answer.checkbox_form == true &&
      (answer.customer_cp == undefined ||
        answer.customer_direction == undefined ||
        answer.customer_poblation == undefined ||
        answer.customer_mail == undefined ||
        answer.customer_name == undefined ||
        answer.customer_phone == undefined ||
        answer.customer_cp == '' ||
        answer.customer_direction == '' ||
        answer.customer_poblation == '' ||
        answer.customer_mail == '' ||
        answer.customer_name == '' ||
        answer.customer_phone == '')
    ) {
      console.log('caso2');
      this.toastService.toast({
        position: 'bottom-end',
        icon: 'error',
        title: `Asegurese de rellenar todos los datos de entrega`,
        showConfirmButton: false,
        timer: 4000,
      });
    } else if (
      (answer.checkbox_form == false || answer.checkbox_form == undefined) &&
      (answer.customer_cp == undefined ||
        answer.customer_direction == undefined ||
        answer.customer_poblation == undefined ||
        answer.customer_mail == undefined ||
        answer.customer_name == undefined ||
        answer.customer_phone == undefined ||
        answer.delivery_time == undefined ||
        answer.next_delivey == undefined ||
        answer.customer_cp == '' ||
        answer.customer_direction == '' ||
        answer.customer_poblation == '' ||
        answer.customer_mail == '' ||
        answer.customer_name == '' ||
        answer.customer_phone == '' ||
        answer.delivery_time == '' ||
        answer.next_delivey == '000Z/3-/20' ||
        answer.next_delivey == '2023-01-13T23:00:00.000Z') // este requisito no funciona
    ) {
      console.log('caso3');
      this.toastService.toast({
        position: 'bottom-end',
        icon: 'error',
        title: `Asegurese de rellenar todos los campos`,
        showConfirmButton: false,
        timer: 4000,
      });
    } else if (
      (answer.checkbox_form == false || answer.checkbox_form == undefined) &&
      (answer.customer_cp != undefined &&
        answer.customer_direction != undefined &&
        answer.customer_poblation != undefined &&
        answer.customer_mail != undefined &&
        answer.customer_name != undefined &&
        answer.customer_phone != undefined &&
        answer.delivery_time != undefined &&
        answer.next_delivey != undefined &&
        answer.customer_cp != '' &&
        answer.customer_direction != '' &&
        answer.customer_poblation != '' &&
        answer.customer_mail != '' &&
        answer.customer_name != '' &&
        answer.customer_phone != '' &&
        answer.delivery_time != '' &&
        answer.next_delivey != '000Z/3-/20' &&
        answer.next_delivey != '2023-01-13T23:00:00.000Z') // este requisito no funciona
    ) {
      console.log('caso4');
      console.log(this.incidence.next_delivery);
      let day = this.incidence.next_delivery.slice(0, 2);
      let month = this.incidence.next_delivery.slice(3, 5);
      let year = this.incidence.next_delivery.slice(-4);
      this.incidence.next_delivery = `${year}/${month}/${day}`;
      console.log(this.incidence.next_delivery);

      this.incidenceService.putIncidence(this.incidence).subscribe((data) => {
        this.resultado_put = data;

        if (this.resultado_put.message == 'Incidence updated') {
          this.router.navigateByUrl('form-confirmation');
        }
      });
    };
}
}
  
