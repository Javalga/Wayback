import { Injectable } from '@angular/core';
import { Location } from 'src/app/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public locations: Location[];
  constructor() {

    this.locations = [
      new Location('Madrid'),
      new Location('Sevilla'),
      new Location('Avila'),
      new Location('Barcelona'),
    ];
  }

  
}
