import { Injectable } from '@angular/core';
import { Incidence } from 'src/app/models/incidence';

@Injectable({
  providedIn: 'root'
})
export class IncidenceService {
  public incidences: Incidence[];
  constructor() { }
  // get en la tabla csv y un insert en la tabla de incidents
  gatherAndPush() {
  }
}
