import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsideHeaderService {
  public state: string
  constructor() {
    this.state = 'Dashboard'
  }
}
