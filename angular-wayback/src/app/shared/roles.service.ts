import { Injectable } from '@angular/core';
import { Roles } from 'src/app/models/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  public roles: Roles[]
  constructor() { 
    this.roles = [new Roles("Super Administrador"), new Roles("Administrador"), new Roles("Operario")]
  }
}