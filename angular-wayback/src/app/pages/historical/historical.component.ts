import { Component } from '@angular/core';
import { IncidenceService } from 'src/app/shared/incidence.service';
import { Incidence } from 'src/app/models/incidence';
@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css'],
})
export class HistoricalComponent {
  public cols: string[];
  public rows = [];
  public style: string = 'height:40vh;';
  public incidences: Incidence[];
  public filteredIncidences: Incidence[]
  constructor(private IncidenceService: IncidenceService) {
    this.IncidenceService.getAllIncidence().subscribe((data: Incidence[]) => {
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
      // this.incidences.forEach((elem) => { console.log(Object.keys(elem)) })
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
            : `${new Date(this.incidences[i].input_date).getDate()}-${new Date(this.incidences[i].input_date).getMonth() + 1
            }-${new Date(this.incidences[i].input_date).getFullYear()}`,

          this.incidences[i].output_date === null
            ? null
            : `${new Date(this.incidences[i].output_date).getDate()}-${new Date(this.incidences[i].output_date).getMonth() + 1
            }-${new Date(this.incidences[i].output_date).getFullYear()}`,

          this.incidences[i].next_delivery === null
            ? null
            : `${new Date(this.incidences[i].next_delivery).getDate()}-${new Date(this.incidences[i].next_delivery).getMonth() + 1
            }-${new Date(this.incidences[i].next_delivery).getFullYear()}`,
          this.incidences[i].delivery_time,
          this.incidences[i].warehouse,
        ]);

      }
    });

  }

  bigTable() {
    if (this.style === 'height:40vh;') {
      this.style = 'height:50vh;';
    } else this.style = 'height:40vh;';
  }
  useFilter(params: string[]) {
    // console.log(params);

    let auxIncidences = this.incidences

    // console.log(auxIncidences)

    let key = params[0]
    console.log(key)
    // console.log(key);

    if (params[1] !== "") {
      this.filteredIncidences = this.incidences.filter(function (elem) {
        elem[key] === params[1]
      })

      console.log(this.filteredIncidences);
      this.incidences = this.filteredIncidences
      this.rows = this.filteredIncidences
    } else {
      console.log(params[1])
      console.log(auxIncidences);
      this.incidences = auxIncidences
      this.rows = this.incidences
      console.log(this.rows)
    }

  }

}
