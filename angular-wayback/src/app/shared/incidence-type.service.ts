import { Injectable } from '@angular/core';
import { IncidenceType } from 'src/app/models/incidence-type'
import { HttpClient } from '@angular/common/http';
import { ApiPathService } from './api-path.service';

@Injectable({
  providedIn: 'root',
})
export class IncidenceTypeService {
  public incidence_type: IncidenceType[];
  public url: string;
  constructor(
    private http: HttpClient,
    private apiPathService: ApiPathService
  ) {}

  public getIncidence_type() {
    this.url = `${this.apiPathService.apiPath}/incidence_type`;
    return this.http.get(this.url);
  }
}
