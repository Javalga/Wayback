import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsideHeaderService {
  public state: string
  public dateSince;
  public dateUntil;
  constructor() {
    this.state = 'Dashboard'
  }
}
