import { Component, ViewChild } from '@angular/core';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { LocationService } from 'src/app/shared/location.service';
import { Location } from 'src/app/models/location';
import { Warehouse } from 'warehouse';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.css'],
})
export class WarehousesComponent {
  @ViewChild('name') name;
  @ViewChild('location_id') location_id;

  public value: string = 'Crear';
  // public value: string = 'Filtrar';
  public cols: string[];
  public rows: any;
  public locations: Location[];
  public warehouses: Warehouse[];
  public warehouse: Warehouse;
  public selected;

  constructor(
    public WarehouseService: WarehouseService,
    public LocationService: LocationService
  ) {
    this.warehouse = new Warehouse();

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

  sendSelected(selected) {
    if (selected != undefined) {
      this.selected = selected;
      console.log(this.selected);

      this.warehouse.name = this.warehouse[this.selected].name;
      this.warehouse.location_id = this.warehouse[this.selected].location_id;

      this.name.nativeElement.value = this.warehouse.name;
      this.location_id.nativeElement.value = this.warehouse.location_id;
    } else {
      this.warehouse.name = '';
      this.warehouse.location_id = 0;

      this.name.nativeElement.value = '';
      this.location_id.nativeElement.value = 0;
    }
  }

  sendButtonValue(buttonValue) {
    this.value = buttonValue;
  }

  onSubmit(form: NgForm) {
    console.log(this.warehouse);
    if (this.value === 'Crear') {
      this.WarehouseService.postWarehouse(this.warehouse).subscribe((data) => {
        console.log(data);
      });
    } else {
      // this.WarehouseService.putWarehouse(this.warehouse).subscribe((data) => {
      //   console.log(data);
      // });
    }
  }
}
