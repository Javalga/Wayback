import { Component } from '@angular/core';
import {LocationService} from "src/app/shared/location.service"
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent {
  public value: string = 'Filtrar';
  public cols: string[];
  public rows: any;

  constructor(public LocationService: LocationService) {
    this.cols = ['Indice', 'Nombre', 'Eliminar'];
    this.rows = [];
    for(let i = 0; i < LocationService.locations.length; i++){
      this.rows.push([LocationService.locations[i].name, "icono"])
    }
  }
}
