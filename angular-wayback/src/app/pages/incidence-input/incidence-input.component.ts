import { Component } from '@angular/core';
import { Incidence } from 'src/app/models/incidence';
import { IncidenceService } from 'src/app/shared/incidence.service';
import { IncidenceTypeService } from 'src/app/shared/incidence-type.service';
import { IncidenceType } from 'src/app/models/incidence-type';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { Warehouse } from 'src/app/models/warehouse';

@Component({
  selector: 'app-incidence-input',
  templateUrl: './incidence-input.component.html',
  styleUrls: ['./incidence-input.component.css'],
})
export class IncidenceInputComponent {
  public value: string = 'Registro';
  public incidence: Incidence
  public warehouses: Warehouse[];
  public incidence_type: IncidenceType[];

  constructor(
    public incidenceService: IncidenceService,
    public IncidenceTypeService: IncidenceTypeService,
    public WarehouseService: WarehouseService
  ) {
    this.incidence = new Incidence()
    this.WarehouseService.getWarehouses().subscribe((data: Warehouse[]) => {
      this.warehouses = data;
    });

    this.IncidenceTypeService.getIncidence_type().subscribe(
      (data: IncidenceType[]) => {
        this.incidence_type = data;
      }
    );
  }
  registerIncidence(ref) {
    ''
  }
}
