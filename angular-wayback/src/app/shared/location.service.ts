import { Injectable } from '@angular/core';
import { Location } from 'src/app/models/location';
import { HttpClient } from '@angular/common/http';
import { ApiPathService } from './api-path.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  public locations: Location[];
  private url: string;

  constructor(
    private http: HttpClient,
    private apiPathService: ApiPathService
  ) {
    // this.locations = [
    //   new Location('Madrid'),
    //   new Location('Sevilla'),
    //   new Location('Avila'),
    //   new Location('Barcelona'),
    // ];
  }

  public getLocations() {
    this.url = `${this.apiPathService.apiPath}/locations`;
    return this.http.get(this.url);
  }

  public postLocation(location: Location) {
    console.log('hola funciono');
    console.log(location)
    this.url = `${this.apiPathService.apiPath}/locations`;
    return this.http.post(this.url, location);
  }
}
