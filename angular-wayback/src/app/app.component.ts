import { Component } from '@angular/core';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-wayback';
  public isLogged: boolean
  public appState: string
  constructor(private loginServixce: LoginService) {
    this.isLogged = loginServixce.isLogged
  }
}
