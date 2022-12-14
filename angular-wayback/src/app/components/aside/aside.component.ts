import { Component } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  public show = false;

  constructor(public loginService: LoginService) {

  }
}
