import { Component } from '@angular/core';
import { Incident } from 'src/app/models/incident';
import { IncidentService } from 'src/app/shared/incident.service';
import { IncidentTypeService } from 'src/app/shared/incident-type.service';
import { IncidentType } from 'src/app/models/incident-type';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { Warehouse } from 'src/app/models/warehouse';

@Component({
  selector: 'app-incident-input',
  templateUrl: './incident-input.component.html',
  styleUrls: ['./incident-input.component.css'],
})
export class IncidentInputComponent {
  public value: string = 'Registro';
  public incident: Incident = new Incident();
  public warehouses: Warehouse[];
  public incident_type: IncidentType[];

  constructor(
    public incidentService: IncidentService,
    public IncidentTypeService: IncidentTypeService,
    public WarehouseService: WarehouseService
  ) {
    this.WarehouseService.getWarehouses().subscribe((data: Warehouse[]) => {
      this.warehouses = data;
    });

    this.IncidentTypeService.getIncident_type().subscribe(
      (data: IncidentType[]) => {
        this.incident_type = data;
      }
    );
  }

  registerIncident(number_expedient) {
    this.incidentService.getIncident(number_expedient);
    this.incident.number_expedient =
      this.incidentService.incident.number_expedient;
    this.incident.status = this.incidentService.incident.status;
    this.incident.incident_type =
      this.incidentService.incident.incident_type;
    this.incident.customer_name =
      this.incidentService.incident.customer_name;
    this.incident.customer_phone =
      this.incidentService.incident.customer_phone;
    this.incident.customer_mail =
      this.incidentService.incident.customer_mail;
    this.incident.customer_direction =
      this.incidentService.incident.customer_direction;
    this.incident.customer_cp = this.incidentService.incident.customer_cp;
    this.incident.customer_poblation =
      this.incidentService.incident.customer_poblation;
    this.incident.warehouse_ubication =
      this.incidentService.incident.warehouse_ubication;
  }
}
