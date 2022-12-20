import { Injectable } from '@angular/core';
import { Location } from 'src/app/models/location';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  public locations: Location[];
  private url: string;

  constructor(
    private http: HttpClient
    ) {
    // this.locations = [
    //   new Location('Madrid'),
    //   new Location('Sevilla'),
    //   new Location('Avila'),
    //   new Location('Barcelona'),
    // ];
  }

  public getLocations() {
    this.url = 'http://localhost:7455/locations';
    return this.http.get(this.url);
  }
}
