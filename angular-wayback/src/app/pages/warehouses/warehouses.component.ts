import { Component, ViewChild } from '@angular/core';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { LocationService } from 'src/app/shared/location.service';
import { Location } from 'src/app/models/location';
import { Warehouse } from 'src/app/models/warehouse';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.css'],
})
export class WarehousesComponent {
  @ViewChild('name') name;
  @ViewChild('location_id') location_id;

  public value: string = 'Crear';
  public cols: string[];
  public rows = [];
  public locations: Location[];
  public warehouses: Warehouse[];
  public warehouse: Warehouse;
  public selected;
  public filteredWarehouses: Warehouse[];
  public auxRows;

  constructor(
    public WarehouseService: WarehouseService,
    public LocationService: LocationService,
    public loginService: LoginService
  ) {
    this.warehouse = new Warehouse();

    this.LocationService.getLocations().subscribe((data: Location[]) => {
      this.locations = data;
      if (this.loginService.user.role_id == 2) {
        this.locations = this.locations.filter(
          (elem) => elem.location_id == this.loginService.user.location_id
        );
      }
    });

    this.WarehouseService.getWarehouses().subscribe((data: Warehouse[]) => {
      this.warehouses = data;
      this.cols = ['Nombre', 'Localidad'];
      if (this.loginService.user.role_id == 3) {
        this.warehouses = this.warehouses.filter(
          (elem) => elem.warehouse_id == this.loginService.user.warehouse_id
        );
      } else if (this.loginService.user.role_id == 2) {
        this.warehouses = this.warehouses.filter(
          (elem) => elem.location_id == this.loginService.user.location_id
        );
      }

      for (let i = 0; i < this.warehouses.length; i++) {
        this.rows.push([this.warehouses[i].name, this.warehouses[i].location]);
      }
    });
    this.auxRows = this.rows;
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

        this.LocationService.getLocations().subscribe((data: Location[]) => {
          this.locations = data;
        });

        this.WarehouseService.getWarehouses().subscribe((data: Warehouse[]) => {
          this.warehouses = data;
          this.cols = ['Nombre', 'Localidad'];
          this.rows = [];
          for (let i = 0; i < this.warehouses.length; i++) {
            this.rows.push([
              this.warehouses[i].name,
              this.warehouses[i].location,
            ]);
          }
        });
      });
    }
  }
  useFilter(params: string[]) {
    function normalizeString(text: string) {
      text = text.toLowerCase();
      text = text.replace(/á/gi, 'a');
      text = text.replace(/é/gi, 'e');
      text = text.replace(/í/gi, 'i');
      text = text.replace(/ó/gi, 'o');
      text = text.replace(/ú/gi, 'u');
      text = text.replace(/ñ/gi, 'n');
      return text;
    }
    let key = params[0];
    if (params[1] !== '') {
      this.filteredWarehouses = this.warehouses.filter(function (elem) {
        return normalizeString(elem[key]) === normalizeString(params[1]);
      });
      this.warehouses = this.filteredWarehouses;
      this.rows = [];
      this.filteredWarehouses.forEach((warehouse, index, arr) => {
        this.rows.push([]);
        this.rows[index].push(warehouse.name, warehouse.location);
      });
    } else {
      this.rows = this.auxRows;
    }
  }
}

