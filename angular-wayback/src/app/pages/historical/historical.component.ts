import { Component } from '@angular/core';
import { IncidenceService } from 'src/app/shared/incidence.service';
import { Incidence } from 'src/app/models/incidence';
import { LoginService } from 'src/app/shared/login.service';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';
import { createInjectableType } from '@angular/compiler';

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
  public filteredIncidences: Incidence[];
  public calcTotal: number;
  public auxRows;

  constructor(
    private IncidenceService: IncidenceService,
    public asideHeaderService: AsideHeaderService,
    public loginService: LoginService
  ) {
    this.incidences = []
    this.IncidenceService.getAllIncidence().subscribe((data: Incidence[]) => {
      this.incidences = data;
      this.createTable()
      
    })
  }

  bigTable() {
    if (this.style === 'height:40vh;') {
      this.style = 'height:50vh;';
    } else this.style = 'height:40vh;';
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
      this.filteredIncidences = this.incidences.filter(function (elem) {
        return normalizeString(elem[key]) === normalizeString(params[1]);
      });
      this.incidences = this.filteredIncidences;
      this.rows = [];
      this.filteredIncidences.forEach((incidence, index, arr) => {
        this.rows.push([]);
        this.rows[index].push(
          incidence.incidence_ref,
          incidence.status,
          incidence.incidence_type,
          incidence.customer_name,
          incidence.customer_phone,
          incidence.customer_mail,
          incidence.customer_address,
          incidence.customer_cp,
          incidence.customer_city,
          incidence.input_date === null
            ? null
            : `${new Date(incidence.input_date).getDate()}-${
                new Date(incidence.input_date).getMonth() + 1
              }-${new Date(incidence.input_date).getFullYear()}`,

          incidence.output_date === null
            ? null
            : `${new Date(incidence.output_date).getDate()}-${
                new Date(incidence.output_date).getMonth() + 1
              }-${new Date(incidence.output_date).getFullYear()}`,

          incidence.next_delivery === null
            ? null
            : `${new Date(incidence.next_delivery).getDate()}-${
                new Date(incidence.next_delivery).getMonth() + 1
              }-${new Date(incidence.next_delivery).getFullYear()}`,
          incidence.delivery_time,
          incidence.warehouse
        );
      });
    } else {
      this.rows = this.auxRows;
    }
  }

  changeDate(){    
  this.IncidenceService.getAllIncidenceDateRange(
    this.asideHeaderService.dateSince,
    this.asideHeaderService.dateUntil
  ).subscribe((data: Incidence[]) => {
    this.incidences = data;
    console.log(this.asideHeaderService.dateSince);
    console.log(this.asideHeaderService.dateUntil);
    this.createTable()
  })
}

  createTable(){
    this.cols = [
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

    if (this.loginService.user.role_id == 3) {
      this.incidences = this.incidences.filter(
        (elem) => elem.warehouse_id == this.loginService.user.warehouse_id
      );
    } else if (this.loginService.user.role_id == 2) {
      this.incidences = this.incidences.filter(
        (elem) => elem.location_id == this.loginService.user.location_id
      );
    }
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
  
  this.auxRows = this.rows;
  this.calcTotal = this.incidences.length;
  };
}

