import { Component } from '@angular/core';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent {
  public value: string = "Todos";
  public cols: [string];
  public rows: [];

  constructor() {
  }
}
