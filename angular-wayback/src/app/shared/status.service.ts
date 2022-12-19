import { Injectable } from '@angular/core';
import { Status } from 'src/app/models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  public status: Status[];
  constructor() { 
    this.status = [new Status('En Almacén'), new Status('Entrega Concertada'),new Status("Devuelto"),new Status("Rechazo Confirmado"),new Status("Puesto en Reparto")];
  }
}
