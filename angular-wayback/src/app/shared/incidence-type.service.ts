import { Injectable } from '@angular/core';
import {IncidenceType} from 'src/app/models/incidence-type'

@Injectable({
  providedIn: 'root',
})
export class IncidenceTypeService {
  public incidence_type: IncidenceType[];
  constructor() {
    this.incidence_type = [
      new IncidenceType('Ausente'),
      new IncidenceType('Dirección Incorrecta'),
      new IncidenceType('Rechazado'),
    ];
  }
}
