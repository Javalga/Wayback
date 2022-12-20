import { Injectable } from '@angular/core';
import {IncidenceType} from 'src/app/models/incidence-type'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IncidenceTypeService {
  public incidence_type: IncidenceType[];
  public url: string;
  constructor(private http: HttpClient) {}

    public getIncidence_type() {
    this.url = 'http://localhost:3000/incidence_type';
    return this.http.get(this.url);
  
  }
  
}
