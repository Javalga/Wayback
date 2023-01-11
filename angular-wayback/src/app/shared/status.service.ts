import { Injectable } from '@angular/core';
import { Status } from 'src/app/models/status';
import { HttpClient } from '@angular/common/http';
import { ApiPathService } from './api-path.service';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  public status: Status[];
  public url: string;
  constructor(
    private http: HttpClient,
    private apiPathService: ApiPathService
  ) {
    // this.status = [new Status('En Almacén'), new Status('Entrega Concertada'),new Status("Devuelto"),new Status("Rechazo Confirmado"),new Status("Puesto en Reparto")];
  }
  public getStatus() {
    this.url = `${this.apiPathService.apiPath}/status`;
    return this.http.get(this.url);
  }

  public putStatus(params) {
    this.url = `${this.apiPathService.apiPath}/status`;
    return this.http.put(this.url, params);
  }
}
