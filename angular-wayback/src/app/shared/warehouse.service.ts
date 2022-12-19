import { Injectable } from '@angular/core';
import { Warehouse } from 'src/app/models/warehouse';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {

  public warehouses: Warehouse[];
  constructor() {
    this.warehouses = [new Warehouse('Carabanchel', 'Madrid'), new Warehouse("Macarena","Sevilla"), new Warehouse ("Toledana","Avila"), new Warehouse("Zona Franca", "Barcelona")];
  }
}
