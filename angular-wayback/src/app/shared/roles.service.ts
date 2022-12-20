import { Injectable } from '@angular/core';
import { Roles } from 'src/app/models/roles';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  public roles: Roles[];
  private url: string;
  constructor(private http: HttpClient) {}
  public getRoles() {
    this.url = 'http://localhost:3000/roles';
    return this.http.get(this.url);
  }
}