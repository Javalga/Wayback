import { Component } from '@angular/core';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.css']
})
export class ReturnsComponent {

  public value: string = "Imprimir Listado de Devoluciones";
  public cols: string[];
  public rows: any
  public show = true;

  constructor() {
    this.cols = ["Índice", "Seleccionar", "N* Expedición", "F.Entrada", "F.Salida", "X", "X", "Etiqueta", "Formulario"];
    this.rows = [
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"]
    ]
  }

  swap() {
    this.show = this.show ? false : true
  }
}
