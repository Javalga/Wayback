import { Component } from '@angular/core';
import {WarehouseService} from 'src/app/shared/warehouse.service'
import { LocationService } from 'src/app/shared/location.service';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.css'],
})
export class WarehousesComponent {
  public value: string = 'Filtrar';
  public cols: string[];
  public rows: any;

  constructor(
    public WarehouseService: WarehouseService,
    public LocationService: LocationService
  ) {
    this.cols = ['Indice', 'Nombre', 'Localidad', 'Eliminar'];
    this.rows = [];
    for (let i = 0; i < WarehouseService.warehouses.length; i++) {
      this.rows.push([
        WarehouseService.warehouses[i].name,
        WarehouseService.warehouses[i].location,
        'icono',
      ]);
    }
  }
}
 