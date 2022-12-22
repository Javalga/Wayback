import { Injectable } from '@angular/core';
import { Incident } from 'src/app/models/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  public incidents: Incident[];
  constructor() { }
  // get en la tabla csv y un insert en la tabla de incidents
  gatherAndPush() {
  }
}
