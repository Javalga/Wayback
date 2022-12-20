import { Component } from '@angular/core';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { LocationService } from 'src/app/shared/location.service';
import { Location } from 'src/app/models/location';
import { Warehouse } from 'src/app/models/warehouse';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.css'],
})
export class WarehousesComponent {
  public value: string = 'Filtrar';
  public cols: string[];
  public rows: any;
  public locations: Location[];
  public warehouses: Warehouse[];

  constructor(
    public WarehouseService: WarehouseService,
    public LocationService: LocationService
  ) {
    this.LocationService.getLocations().subscribe((data: Location[]) => {
      this.locations = data;
    });

    this.WarehouseService.getWarehouses().subscribe((data: Warehouse[]) => {
      this.warehouses = data;
      this.cols = ['Indice', 'Nombre', 'Localidad', 'Eliminar'];
      this.rows = [];
      for (let i = 0; i < this.warehouses.length; i++) {
        this.rows.push([
          this.warehouses[i].name,
          this.warehouses[i].location,
          'icono',
        ]);
      }
    });
  }
}
