import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiPathService {

  public apiPath: string;
  constructor() {
    this.apiPath = 'http://localhost:3000';
   }
}
