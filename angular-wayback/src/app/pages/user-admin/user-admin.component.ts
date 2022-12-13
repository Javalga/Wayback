import { Component } from '@angular/core';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent {
  public value: string = "Filtrar";
  public cols: string[];
  public rows;

  constructor() {
    this.cols = ["Código", "Nombre", "eMail", "Tipo", "Activo", "Ubicación", "Cliente", "Editar Usuario"]
  }
}
