import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-wayback';
  public isLogged: boolean
  public appState: string
  constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
    console.log(this.loginService.isLogged)
  }
}
