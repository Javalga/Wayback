import { Component, Directive, Input, ViewChild } from '@angular/core';
import { WarehouseService } from 'src/app/shared/warehouse.service';

@Component({
  selector: 'app-incident-output',
  templateUrl: './incident-output.component.html',
  styleUrls: ['./incident-output.component.css'],
})
export class IncidentOutputComponent {
  @ViewChild('myInput') input;

  public value: string = 'Registro';

  constructor(public WarehouseService: WarehouseService) {}
  registerStatus() {
    const audio = new Audio('assets/pitido.mp3');
    audio.play();
    this.input.nativeElement.focus();
    this.input.nativeElement.value = '';
  }
}
