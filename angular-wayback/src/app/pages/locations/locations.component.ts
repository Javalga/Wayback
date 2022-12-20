import { Component } from '@angular/core';
import {LocationService} from "src/app/shared/location.service"
import { LoginService } from 'src/app/shared/login.service';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent {
  public value: string = 'Filtrar';
  public cols: string[];
  public rows: any;
  public locations: Location[];

  constructor(public LocationService: LocationService) {
    this.LocationService.getLocations().subscribe((data: Location[]) => {
      this.locations = data;

      this.cols = ['Indice', 'Nombre', 'Eliminar'];
      this.rows = [];
      for (let i = 0; i < 4; i++) {
        this.rows.push([this.locations[i].name, 'icono']);
      }
    });

    // console.log(this.locations);                        // hay que meterlo dentro porque sino se carga uno antes que el otro y da error
    // this.cols = ['Indice', 'Nombre', 'Eliminar'];
    // this.rows = [];
    // for (let i = 0; i < 4; i++) {
    //   this.rows.push([this.locations[i].name, 'icono']);
    // }
  }
}
