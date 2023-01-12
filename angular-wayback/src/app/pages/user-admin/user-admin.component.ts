import { Component, ViewChild } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { RolesService } from 'src/app/shared/roles.service';
import { Roles } from 'src/app/models/roles';
import { LocationService } from 'src/app/shared/location.service';
import { Location } from 'src/app/models/location';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { Warehouse } from 'src/app/models/warehouse';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';
import { ToastService } from 'src/app/shared/toast.service';

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
  public rows = [];
  public locations: Location[];
  public roles: Roles[];
  public users: User[];
  public warehouses: Warehouse[];
  public user: User;
  public selected;
  public filteredUsers: User[];
  public auxRows;

  constructor(
    public UserService: UserService,
    public RolesService: RolesService,
    public LocationService: LocationService,
    public WarehouseService: WarehouseService,
    public loginService: LoginService,
    public toastService: ToastService
  ) {
    this.user = new User('', '', '', '', '', '', '', false, 0, 0, 0);

    this.LocationService.getLocations().subscribe((data: Location[]) => {
      this.locations = data;
      if (this.loginService.user.role_id == 2) {
        this.locations = this.locations.filter(
          (elem) => elem.location_id == this.loginService.user.location_id
        )
      }

    });

    this.RolesService.getRoles().subscribe((data: Roles[]) => {
      this.roles = data;
      if (this.loginService.user.role_id == 2) {
        this.roles = [this.roles[2]]
          ;
      }
    });

    this.WarehouseService.getWarehouses().subscribe((data: Warehouse[]) => {
      this.warehouses = data;
      if (this.loginService.user.role_id == 2) {
        this.warehouses = this.warehouses.filter(
          (elem) => elem.location_id == this.loginService.user.location_id
        );
      }
    });

    this.UserService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      this.cols = [
        'Username',
        'Nombre',
        'Rol',
        'Mail',
        'Almacén',
        'Localidad',
        'Activo',
      ];

      if (this.loginService.user.role_id == 2) {
        this.users = this.users.filter(
          (elem) => elem.location_id == this.loginService.user.location_id
        );
      }

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
        ]);
      }
    });
    this.auxRows = this.rows;
  }

  sendSelected(selected) {
    if (selected != undefined) {
      this.selected = selected;
      console.log(this.selected);

      this.user.username = this.users[this.selected].username;
      this.user.password = this.hidePass();
      this.user.name = this.users[this.selected].name;
      this.user.mail = this.users[this.selected].mail;
      this.user.role_id = this.users[this.selected].role_id;
      this.user.warehouse_id = this.users[this.selected].warehouse_id;
      this.user.location_id = this.users[this.selected].location_id;
      this.user.active = this.users[this.selected].active;

      this.username.nativeElement.value = this.user.username;
      this.pass.nativeElement.value = this.hidePass();
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
            'Username',
            'Nombre',
            'Rol',
            'Mail',
            'Almacén',
            'Localidad',
            'Activo',
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
            ]);
          }
        });
      });
      this.toastService.toast({
        position: 'bottom-end',
        icon: 'success',
        title: `Usuario creado correctamente`,
        showConfirmButton: false,
        timer: 4000
      })
    } else {
      this.UserService.putUser(this.user).subscribe((data) => {
        console.log(data);

        this.UserService.getUsers().subscribe((data: User[]) => {
          this.users = data;
          this.cols = [
            'Username',
            'Nombre',
            'Rol',
            'Mail',
            'Almacén',
            'Localidad',
            'Activo',
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
            ]);
          }
        });
      });
      this.toastService.toast({
        position: 'bottom-end',
        icon: 'success',
        title: `Usuario modificado correctamente`,
        showConfirmButton: false,
        timer: 4000
      })
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
      this.filteredUsers = this.users.filter(function (elem) {
        return normalizeString(elem[key]) === normalizeString(params[1]);
      });
      this.users = this.filteredUsers;
      this.rows = [];
      this.filteredUsers.forEach((user, index, arr) => {
        this.rows.push([]);
        this.rows[index].push(
          user.username,
          user.name,
          user.role,
          user.mail,
          user.warehouse,
          user.location,
          user.active
        );
      });
    } else {
      this.rows = this.auxRows;
    }
  }
}


