import { Injectable } from '@angular/core';
import { Warehouse } from 'src/app/models/warehouse';
import { HttpClient } from '@angular/common/http';
import { ApiPathService } from './api-path.service';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  public warehouses: Warehouse[];
  private url: string;
  constructor(
    private http: HttpClient,
    private apiPathService: ApiPathService
  ) {}

  public getWarehouses() {
    this.url = `${this.apiPathService.apiPath}/warehouses`;
    return this.http.get(this.url);
  }

  public postWarehouse(warehouse: Warehouse) {
    this.url = `${this.apiPathService.apiPath}/warehouses`;
    return this.http.post(this.url, warehouse);
  }

  // public putWarehouse(warehouse: Warehouse) {
  //   this.url = 'http://localhost:3000/warehouses';
  //   return this.http.put(this.url, warehouse);
  // }
}
