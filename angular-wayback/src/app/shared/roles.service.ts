import { Injectable } from '@angular/core';
import { Roles } from 'src/app/models/roles';
import { HttpClient } from '@angular/common/http';
import { ApiPathService } from './api-path.service';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  public roles: Roles[];
  private url: string;
  constructor(
    private http: HttpClient,
    private apiPathService: ApiPathService
  ) {}
  public getRoles() {
    this.url = `${this.apiPathService.apiPath}/roles`;
    return this.http.get(this.url);
  }
}