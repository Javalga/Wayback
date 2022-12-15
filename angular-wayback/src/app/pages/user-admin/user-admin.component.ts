import { Component } from '@angular/core';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent {
  public value: string = "Filtrar";
  public cols: string[];
  public rows: any

  constructor() {
    this.cols = ["Indice", "Código", "Nombre", "eMail", "Tipo", "Activo", "Ubicación", "Cliente", "Editar Usuario"]
    this.rows = [
      ["MadAlmacen", "Almacen Madrid", "email@email.com", "tipo1", "true", "Calle la pinga", "cliente1", "foto"],
      ["MadAlmacen", "Almacen Madrid", "email@email.com", "tipo1", "true", "Calle la pinga", "cliente1", "foto"],
      ["MadAlmacen", "Almacen Madrid", "email@email.com", "tipo1", "true", "Calle la pinga", "cliente1", "foto"],
      ["MadAlmacen", "Almacen Madrid", "email@email.com", "tipo1", "true", "Calle la pinga", "cliente1", "foto"],
      ["MadAlmacen", "Almacen Madrid", "email@email.com", "tipo1", "true", "Calle la pinga", "cliente1", "foto"]
    ]
  }
}
