import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-wayback';
  public isLogged: boolean
  public appState: string
  constructor(public loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate([''])
    window.addEventListener("keyup", disableF5);
    window.addEventListener("keydown", disableF5);

    function disableF5(e) {
      if ((e.which || e.keyCode) == 116) e.preventDefault();
    };
  }
}
