import { Component } from '@angular/core';
import { IncidenceService } from 'src/app/shared/incidence.service';
import { Incidence } from 'src/app/models/incidence';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';

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
  public selected;
  public incidences: Incidence[];

  constructor(private IncidenceService: IncidenceService, public asideHeaderService: AsideHeaderService) {
    let since = this.asideHeaderService.startOfTime();
    this.asideHeaderService.dateSince = since;

    let until = this.asideHeaderService.twoWeeksAgo();
    this.asideHeaderService.dateUntil = until;
   
    this.IncidenceService.getIncidenceToReturn(
      this.asideHeaderService.dateSince,
      this.asideHeaderService.dateUntil
    ).subscribe((data: Incidence[]) => {
      this.incidences = data;
    this.cols = [
      'Índice',
      'N* Expedición',
      'Estado',
      'Tipo de Incidencia',
      'Nombre',
      'Teléfono',
      'Email',
      'Dirección',
      'CP',
      'Población',
      'F. Entrada',
      'F. Salida',
      'Próx. Entrega',
      'Horario de Entrega',
      'Almacén',
    ];
    this.rows = [];
      for (let i = 0; i < this.incidences.length; i++) {
          this.rows.push([
            this.incidences[i].incidence_ref,
            this.incidences[i].status,
            this.incidences[i].incidence_type,
            this.incidences[i].customer_name,
            this.incidences[i].customer_phone,
            this.incidences[i].customer_mail,
            this.incidences[i].customer_address,
            this.incidences[i].customer_cp,
            this.incidences[i].customer_city,
            this.incidences[i].input_date === null
              ? null
              : `${new Date(this.incidences[i].input_date).getDate()}-${
                  new Date(this.incidences[i].input_date).getMonth() + 1
                }-${new Date(this.incidences[i].input_date).getFullYear()}`,

            this.incidences[i].output_date === null
              ? null
              : `${new Date(this.incidences[i].output_date).getDate()}-${
                  new Date(this.incidences[i].output_date).getMonth() + 1
                }-${new Date(this.incidences[i].output_date).getFullYear()}`,

            this.incidences[i].next_delivery === null
              ? null
              : `${new Date(this.incidences[i].next_delivery).getDate()}-${
                  new Date(this.incidences[i].next_delivery).getMonth() + 1
                }-${new Date(this.incidences[i].next_delivery).getFullYear()}`,
            this.incidences[i].delivery_time,
            this.incidences[i].warehouse,
          ]);
      }
    })
    console.log(this.asideHeaderService.dateSince);
    console.log(this.asideHeaderService.dateUntil);
  }

  sendSelected(selected) {
    this.selected = selected;
  }

  printSelected() {
    console.log(this.selected)
  }


}
