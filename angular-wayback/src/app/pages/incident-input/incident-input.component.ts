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

  
}
