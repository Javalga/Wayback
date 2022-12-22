import { Injectable } from '@angular/core';
import { Incidence } from 'src/app/models/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidenceService {

  public incidence: Incidence;
  public incidences: Incidence[];

  constructor() {

    this.incidence = new Incidence(
      2686854765919091,
      'En Almacén',
      'DIC INCORECTO',
      'ASOCIACIÓN BASIDA',
      '918923537',
      'ASOCIACIÓN_BASIDA@gmail.com',
      'CTRA ANTIGUA DE TOLEDO KM9',
      '28300',
      'ARANJUEZ',
      'Almacen Fuenlabrada'
    );
    this.incidences = [
      new Incidence(              //instanciamos la clase para hacer un ejemplo de vista del form
        2686854765919091,
        'En Almacén',
        'DIC INCORECTO',
        'ASOCIACIÓN BASIDA',
        '918923537',
        'ASOCIACIÓN_BASIDA@gmail.com',
        'CTRA ANTIGUA DE TOLEDO KM9',
        '28300',
        'ARANJUEZ',
        'Almacen Fuenlabrada'
      ),
    ];                            //Lo tratamos como array debido a su definición en el servico
  }

  getIncidence(number_expedient) {

    this.incidence.number_expedient = number_expedient;
    this.incidence.status = "status1";
    this.incidence.incidence_type = "incidence_type1";
    this.incidence.customer_name = "customer_name1";
    this.incidence.customer_phone = "customer_phone1";
    this.incidence.customer_mail = "customer_mail1";
    this.incidence.customer_direction = "customer_direction1";
    this.incidence.customer_cp = "customer_cp1";
    this.incidence.customer_poblation = "customer_poblation1";
    this.incidence.warehouse_ubication = "warehouse_ubication1";
  }

}
