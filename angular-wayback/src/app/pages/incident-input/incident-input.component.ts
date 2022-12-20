import { Component } from '@angular/core';
import { Incidence } from 'src/app/models/incidence';
import { IncidenceService } from 'src/app/shared/incidence.service';
import { IncidenceTypeService } from 'src/app/shared/incidence-type.service';
import { IncidenceType } from 'src/app/models/incidence-type';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { Warehouse } from 'src/app/models/warehouse';

@Component({
  selector: 'app-incident-input',
  templateUrl: './incident-input.component.html',
  styleUrls: ['./incident-input.component.css'],
})
export class IncidentInputComponent {
  public value: string = 'Registro';
  public incidence: Incidence = new Incidence(
    0,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  );

  public warehouses: Warehouse[];
  public incidence_type: IncidenceType[];

  constructor(
    public incidenceService: IncidenceService,
    public IncidenceTypeService: IncidenceTypeService,
    public WarehouseService: WarehouseService
  ) {
    this.WarehouseService.getWarehouses().subscribe((data: Warehouse[]) => {
      this.warehouses = data;
    });

    this.IncidenceTypeService.getIncidence_type().subscribe(
      (data: IncidenceType[]) => {
        this.incidence_type = data;
      }
    );
  }

  registrarIncidencia(number_expedient) {
    this.incidenceService.getIncidence(number_expedient);

    this.incidence.number_expedient =
      this.incidenceService.incidence.number_expedient;
    this.incidence.status = this.incidenceService.incidence.status;
    this.incidence.incidence_type =
      this.incidenceService.incidence.incidence_type;
    this.incidence.customer_name =
      this.incidenceService.incidence.customer_name;
    this.incidence.customer_phone =
      this.incidenceService.incidence.customer_phone;
    this.incidence.customer_mail =
      this.incidenceService.incidence.customer_mail;
    this.incidence.customer_direction =
      this.incidenceService.incidence.customer_direction;
    this.incidence.customer_cp = this.incidenceService.incidence.customer_cp;
    this.incidence.customer_poblation =
      this.incidenceService.incidence.customer_poblation;
    this.incidence.warehouse_ubication =
      this.incidenceService.incidence.warehouse_ubication;
  }
}
