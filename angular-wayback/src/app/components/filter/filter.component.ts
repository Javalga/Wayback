import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() cols: []
  @Output() filterParams = new EventEmitter<Array<any>>();
  @ViewChild('filter_type') filter_type;
  @ViewChild('input_value') input_value;
  @ViewChild('button') button;
  constructor(public asideHeaderService: AsideHeaderService) { }
  catchParams(col, value) {
    let converted;
    // console.log(this.asideHeaderService.state);

    if (this.asideHeaderService.state === 'Localidades') {
      converted = 'name'
    } else if (this.asideHeaderService.state === 'Almacenes') {
      switch (col) {
        case 'Nombre':
          converted = 'name'
          break;
        case 'Localidad':
          converted = 'location'
          break;
      }
    } else if (this.asideHeaderService.state === 'Usuarios') {
      switch (col) {
        case 'Username':
          converted = 'username'
          break;
        case 'Nombre':
          converted = 'name'
          break;
        case 'Rol':
          converted = 'role'
          break;
        case 'Mail':
          converted = 'mail'
          break;
        case 'Almacén':
          converted = 'warehouse'
          break;
        case 'Localidad':
          converted = 'location'
          break;
        case 'Activo':
          converted = 'active'
          break;
      }
    } else {
      switch (col) {
        case 'N* Expedición':
          converted = 'incidence_ref'
          break;
        case 'Estado':
          converted = 'status'
          break;
        case 'Tipo':
          converted = 'incidence_type'
          break;
        case 'Nombre':
          converted = 'customer_name'
          break;
        case 'Teléfono':
          converted = 'customer_phone'
          break;
        case 'Email':
          converted = 'customer_mail'
          break;
        case 'Dirección':
          converted = 'customer_address'
          break;
        case 'CP':
          converted = 'customer_cp'
          break;
        case 'Población':
          converted = 'customer_city'
          break;
        case 'F.Entrada':
          converted = 'input_date'
          break;
        case 'F.Salida':
          converted = 'output_date'
          break;
        case 'Próx.Entrega':
          converted = 'next_delivery'
          break;
        case 'Horario':
          converted = 'delivery_time'
          break;
        case 'Almacén':
          converted = 'warehouse'
          break;
      }
    }
    this.filterParams.emit([converted, value])
  }

  press(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      this.catchParams(this.filter_type.nativeElement.value, this.input_value.nativeElement.value)
    }
  }
}
