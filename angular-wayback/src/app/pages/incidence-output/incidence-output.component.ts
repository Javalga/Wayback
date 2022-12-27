import { Component, Directive, Input, ViewChild } from '@angular/core';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { Warehouse } from 'src/app/models/warehouse';

@Component({
  selector: 'app-incidence-output',
  templateUrl: './incidence-output.component.html',
  styleUrls: ['./incidence-output.component.css'],
})
export class IncidenceOutputComponent {
  @ViewChild('myInput') input;

  public value: string = 'Registro';
  public warehouses: Warehouse[];

  constructor(public WarehouseService: WarehouseService) {
    this.WarehouseService.getWarehouses().subscribe((data: Warehouse[]) => {
      this.warehouses = data;
    });
  }
  registerStatus() {
    const audio = new Audio('assets/pitido.mp3');
    audio.play();
    this.input.nativeElement.focus();
    this.input.nativeElement.value = '';

  }

}
