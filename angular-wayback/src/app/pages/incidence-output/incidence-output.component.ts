import { Component, Directive, Input, ViewChild } from '@angular/core';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { Warehouse } from 'src/app/models/warehouse';
import { StatusService } from 'src/app/shared/status.service';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-incidence-output',
  templateUrl: './incidence-output.component.html',
  styleUrls: ['./incidence-output.component.css'],
})
export class IncidenceOutputComponent {
  @ViewChild('myInput') input;

  public value: string = 'Registro';
  public warehouses: Warehouse[];
  public status: Status[];
  public status_query_response: Status[];

  constructor(
    public WarehouseService: WarehouseService,
    public StatusService: StatusService
  ) {
    this.status = [];
    this.status_query_response = [];
    this.WarehouseService.getWarehouses().subscribe((data: Warehouse[]) => {
      this.warehouses = data;
    });

    this.StatusService.getStatus().subscribe((data: Status[]) => {
      this.status_query_response = data;
      for (let i = 0; i < this.status_query_response.length; i++) {
        if (
          this.status_query_response[i].status_id == 3 ||
          this.status_query_response[i].status_id == 5
        ) {
          console.log(this.status_query_response[i]);
          console.log(this.status.length);

          this.status.push(this.status_query_response[i]);
        }
      }
    });
  }
  registerStatus(incidence_ref, warehouse_id, status_id) {
    warehouse_id = Number(warehouse_id);
    status_id = Number(status_id);

    let params = { incidence_ref, warehouse_id, status_id };
    console.log(params);
    this.StatusService.putStatus(params).subscribe((data) => {
      console.log(data);
      const audio = new Audio('assets/pitido.mp3');
      audio.play();
    });
  }
}
