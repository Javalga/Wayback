import { Component } from '@angular/core';

@Component({
  selector: 'app-solved-pull',
  templateUrl: './solved-pull.component.html',
  styleUrls: ['./solved-pull.component.css']
})
export class SolvedPullComponent {
  public value: string = "Imprimir Etiquetas de Incidencias Solucionadas";
  public cols: string[];
  public rows: any
  public show = true;

  constructor()
  {
    this.cols =["Indice","Seleccionar","N* Expedicion","F.Entrada","F.Salida","X","X","Etiqueta","Formulario"];
    this.rows = [
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"],
      ["v", "123456789", "12/12/1212", "15/15/1515", "X", "X", "Etiqeuta", "formulario"]
    ]
  }

  swap()
  {
    this.show = this.show?false:true
  }


}
