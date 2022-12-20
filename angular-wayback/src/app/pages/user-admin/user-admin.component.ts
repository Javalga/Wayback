import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { RolesService } from 'src/app/shared/roles.service';
import {Roles} from 'src/app/models/roles'
import { LocationService } from 'src/app/shared/location.service';
import { Location } from 'src/app/models/location';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { Warehouse } from 'src/app/models/warehouse';

// hay que hacer que las opcions de almacén se filtren cuando se indica la localidad


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css'],
})
export class UserAdminComponent {
  public value: string = 'Filtrar';
  public cols: string[];
  public rows: any;
  public locations: Location[];
  public roles: Roles[];
  public users: User[];
  public warehouses: Warehouse[];

  constructor(
    public UserService: UserService,
    public RolesService: RolesService,
    public LocationService: LocationService,
    public WarehouseService: WarehouseService
  ) {
    this.LocationService.getLocations().subscribe((data: Location[]) => {
      this.locations = data;
    });

    this.RolesService.getRoles().subscribe((data: Roles[]) => {
      this.roles = data;
    });

    this.WarehouseService.getWarehouses().subscribe((data: Warehouse[]) => {
      this.warehouses = data;
    });

    this.UserService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      this.cols = [
        'Indice',
        'Username',
        'Nombre',
        'Rol',
        'Mail',
        'Almacén',
        'Localidad',
        'Activo',
        'Elminiar',
      ];
      this.rows = [];
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].active == true) {
          this.users[i].active = true;
        } else {
          this.users[i].active = false;
        }

        this.rows.push([
          this.users[i].username,
          this.users[i].name,
          this.users[i].role,
          this.users[i].mail,
          this.users[i].warehouse,
          this.users[i].location,
          this.users[i].active,
          'icono',
        ]);
      }
    });
  }
}
