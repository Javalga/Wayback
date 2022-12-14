import { Injectable } from '@angular/core';
import { Incidence } from 'src/app/models/incidence';

@Injectable({
  providedIn: 'root'
})
export class IncidenceService {

  public incidence: Incidence[];
  constructor() {
    this.incidence = [
      new Incidence(              //instanciamos la clase para hacer un ejemplo de vista del form
        2686854765919091,
        'En Almacén',
        'DIC INCORECTO',
        'ASOCIACIÓN BASIDA',
        918923537,
        'ASOCIACIÓN_BASIDA@gmail.com',
        'CTRA ANTIGUA DE TOLEDO KM9',
        28300,
        'ARANJUEZ',
        'Almacen Fuenlabrada'
      ),
    ];                            //Lo tratamos como array debido a su definición en el servico
  }
}
