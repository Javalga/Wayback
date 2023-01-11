import { Injectable } from '@angular/core';
import { DeliveryTime } from '../models/delivery-time';
import { HttpClient } from '@angular/common/http';
import { ApiPathService } from './api-path.service';

@Injectable({
  providedIn: 'root',
})
export class DeliveryTimeService {
  public delivery_time: DeliveryTime[];
  public url: string;
  constructor(
    private http: HttpClient,
    private apiPathService: ApiPathService
  ) {}

  public getDelivery_time() {
    this.url = `${this.apiPathService.apiPath}/delivery_time`;
    return this.http.get(this.url);
  }
}
