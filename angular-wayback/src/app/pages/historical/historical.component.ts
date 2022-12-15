import { Component } from '@angular/core';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent {
  public cols: string[];
  public rows: any

  constructor() {
    this.cols = ["Indice", "Seleccionar", "N* Expedicion", "F.Entrada", "F.Salida", "X", "X", "Etiqueta", "Formulario"];
    this.rows = [
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],

    ]
  }
}
