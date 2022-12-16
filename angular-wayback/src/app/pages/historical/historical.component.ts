import { Component } from '@angular/core';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent {
  public cols: string[];
  public rows: any
  public style: string = "height:40vh;";

  constructor() {
    this.cols = ["Índice", "Seleccionar", "N* Expedición", "F.Entrada", "F.Salida", "X", "X", "Etiqueta", "Formulario"];
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
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
    ]
  }

  bigTable() {
    if (this.style === "height:40vh;") {
      this.style = "height:50vh;";
    } else this.style = "height:40vh;";
  }
}
