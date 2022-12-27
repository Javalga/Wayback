import { Component, Directive, Input, ViewChild } from '@angular/core';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { Warehouse } from 'src/app/models/warehouse';
import { StatusService } from 'src/app/shared/status.service';
import { Status } from 'src/app/models/status';
import { IncidenceService } from 'src/app/shared/incidence.service';
import { Incidence } from 'src/app/models/incidence';
import * as moment from 'moment';
import { ToastService } from 'src/app/shared/toast.service';


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
  public getOneIncidenceResponse;

  constructor(
    public WarehouseService: WarehouseService,
    public StatusService: StatusService,
    public IncidenceService: IncidenceService,
    public toastService: ToastService
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
          this.status.push(this.status_query_response[i]);
        }
      }
    });
  }
  registerStatus(incidence_ref, warehouse_id, status_id) {
    warehouse_id = Number(warehouse_id);
    status_id = Number(status_id);
    let date = moment().format('YYYY-MM-DD');

    let params = { incidence_ref, warehouse_id, status_id, date };
    console.log(params);

    this.IncidenceService.getOneIncidence(incidence_ref).subscribe(
      (data: Incidence[]) => {
        this.getOneIncidenceResponse = data;
        console.log(this.getOneIncidenceResponse)
        
        if (this.getOneIncidenceResponse[0] == null) {
          this.toastService.toast({
            position: 'bottom-end',
            icon: 'error',
            title: `Incidencia Inexistente en el Sistema`,
            showConfirmButton: false,
            timer: 4000,
          });
        } else if (
          this.getOneIncidenceResponse[0].warehouse_id != warehouse_id
        ) {
          this.toastService.toast({
            position: 'bottom-end',
            icon: 'error',
            title: `Incidencia No Encontrada en el Almacén Indicado`,
            showConfirmButton: false,
            timer: 4000,
          });
          const audio = new Audio('assets/perder-incorrecto-no-valido.mp3');
          audio.play();
        } else if (
          this.getOneIncidenceResponse[0].warehouse_id == warehouse_id &&
          this.getOneIncidenceResponse[0].output_date != null
        ) {
          this.toastService.toast({
            position: 'bottom-end',
            icon: 'error',
            title: `Incidencia con Esado Final Ya Indicado: ${this.getOneIncidenceResponse[0].status} `,
            showConfirmButton: false,
            timer: 4000,
          });
          const audio = new Audio('assets/perder-incorrecto-no-valido.mp3');
          audio.play();
        } else {
          this.StatusService.putStatus(params).subscribe((data) => {
            console.log(data);
            const audio = new Audio('assets/pitido.mp3');
            audio.play();
          });
        }
      }
    );    
  }
}
