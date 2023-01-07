import { Component, ViewChild } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { RolesService } from 'src/app/shared/roles.service';
import { Roles } from 'src/app/models/roles';
import { LocationService } from 'src/app/shared/location.service';
import { Location } from 'src/app/models/location';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { Warehouse } from 'warehouse';
import { NgForm } from '@angular/forms';

// hay que hacer que las opcions de almacén se filtren cuando se indica la localidad

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css'],
})
export class UserAdminComponent {
  @ViewChild('user_id') user_id;
  @ViewChild('username') username;
  @ViewChild('pass') pass;
  @ViewChild('name') name;
  @ViewChild('email') email;
  @ViewChild('role') role;
  @ViewChild('warehouse') warehouse;
  @ViewChild('location') location;
  @ViewChild('active') active;

  public value: string = 'Crear';
  public cols: string[];
  public rows: any;
  public locations: Location[];
  public roles: Roles[];
  public users: User[];
  public warehouses: Warehouse[];
  public user: User;
  public selected;

  constructor(
    public UserService: UserService,
    public RolesService: RolesService,
    public LocationService: LocationService,
    public WarehouseService: WarehouseService
  ) {
    this.user = new User("", "", "", "", "", "", "", false, 0, 0, 0);

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

  sendSelected(selected) {
    if (selected != undefined) {
      this.selected = selected;
      console.log(this.selected);


      this.user.username = this.users[this.selected].username;
      this.user.password = this.users[this.selected].password;
      this.user.name = this.users[this.selected].name;
      this.user.mail = this.users[this.selected].mail;
      this.user.role_id = this.users[this.selected].role_id;
      this.user.warehouse_id = this.users[this.selected].warehouse_id;
      this.user.location_id = this.users[this.selected].location_id;
      this.user.active = this.users[this.selected].active;


      this.username.nativeElement.value = this.user.username;
      this.pass.nativeElement.value = this.user.password;
      this.name.nativeElement.value = this.user.name;
      this.email.nativeElement.value = this.user.mail;
      this.role.nativeElement.value = this.user.role_id;
      this.warehouse.nativeElement.value = this.user.warehouse_id;
      this.location.nativeElement.value = this.user.location_id;
      this.active.nativeElement.checked = this.user.active;
    } else {

      this.user.username = '';
      this.user.password = '';
      this.user.name = '';
      this.user.mail = '';
      this.user.role_id = 0;
      this.user.warehouse_id = 0;
      this.user.location_id = 0;
      this.user.active = false;


      this.username.nativeElement.value = '';
      this.pass.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.email.nativeElement.value = '';
      this.role.nativeElement.value = 'Selecciona una opción';
      this.warehouse.nativeElement.value = 'Selecciona una opción';
      this.location.nativeElement.value = 'Selecciona una opción';
      this.active.nativeElement.checked = false;
    }
  }

  hidePass() {
    let passHide = '';
    for (let i = 0; i < this.users[this.selected].password.length; i++) {
      passHide += '*';
    }
    return passHide;
  }

  showPass() {
    if (this.pass.nativeElement.value === this.hidePass())
      this.pass.nativeElement.value = this.users[this.selected].password;
    else this.pass.nativeElement.value = this.hidePass();
  }

  sendButtonValue(buttonValue) {
    this.value = buttonValue;
  }

  printSelected() {
    console.log(this.selected);
  }

  onSubmit(form: NgForm) {
    console.log(this.user);
    if (this.value === 'Crear') {
      this.UserService.postUser(this.user).subscribe((data) => {
        console.log(data);

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
      });
    } else {
      this.UserService.putUser(this.user).subscribe((data) => {
        console.log(data);

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
      });


    }
  }
}
