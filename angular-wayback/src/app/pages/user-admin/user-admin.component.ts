import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { RolesService } from 'src/app/shared/roles.service';
import {Roles} from 'src/app/models/roles'
import { LocationService } from 'src/app/shared/location.service';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css'],
})
export class UserAdminComponent {
  public value: string = 'Filtrar';
  public cols: string[];
  public rows: any;

  constructor(
    public UserService: UserService,
    public RolesService: RolesService,
    public LocationService: LocationService
  ) {
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
    for (let i = 0; i < UserService.users.length; i++) {
      this.rows.push([
        UserService.users[i].username,
        UserService.users[i].name,
        UserService.users[i].role,
        UserService.users[i].mail,
        UserService.users[i].warehouse,
        UserService.users[i].location,
        UserService.users[i].active,
        'icono',
      ]);
    }
  }
}
