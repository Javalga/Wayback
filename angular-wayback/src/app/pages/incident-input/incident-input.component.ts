import { Component } from '@angular/core';
import { Incidence } from 'src/app/models/incidence';
import { IncidenceService } from 'src/app/shared/incidence.service';

@Component({
  selector: 'app-incident-input',
  templateUrl: './incident-input.component.html',
  styleUrls: ['./incident-input.component.css']
})
export class IncidentInputComponent {
  public value: string = "Registro";
  public incidence: Incidence = new Incidence(0, "", "", "", "", "", "", "", "", "");


  constructor(public incidenceService: IncidenceService) {

  }

  registrarIncidencia(number_expedient) {

    this.incidenceService.getIncidence(number_expedient)

    this.incidence.number_expedient = this.incidenceService.incidence.number_expedient;
    this.incidence.status = this.incidenceService.incidence.status;
    this.incidence.incidence_type = this.incidenceService.incidence.incidence_type;
    this.incidence.customer_name = this.incidenceService.incidence.customer_name;
    this.incidence.customer_phone = this.incidenceService.incidence.customer_phone;
    this.incidence.customer_mail = this.incidenceService.incidence.customer_mail;
    this.incidence.customer_direction = this.incidenceService.incidence.customer_direction;
    this.incidence.customer_cp = this.incidenceService.incidence.customer_cp;
    this.incidence.customer_poblation = this.incidenceService.incidence.customer_poblation;
    this.incidence.warehouse_ubication = this.incidenceService.incidence.warehouse_ubication;

  }
}
