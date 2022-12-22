import { Injectable } from '@angular/core';
import { IncidentType } from 'src/app/models/incident-type'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IncidentTypeService {
  public incident_type: IncidentType[];
  public url: string;
  constructor(private http: HttpClient) { }

  public getIncident_type() {
    this.url = 'http://localhost:3000/incidence_type';
    return this.http.get(this.url);

  }

}
