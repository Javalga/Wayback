import { Injectable } from '@angular/core';
import { DeliveryTime } from '../models/delivery-time';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeliveryTimeService {
  public delivery_time: DeliveryTime[];
  public url: string;
  constructor(private http: HttpClient) {}

  public getDelivery_time() {
    this.url = 'http://localhost:3000/delivery_time';
    return this.http.get(this.url);
  }
}
