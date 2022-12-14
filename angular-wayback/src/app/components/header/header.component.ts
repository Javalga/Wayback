import { Component, Input } from '@angular/core';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';
import { LoginService } from 'src/app/shared/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() appState: undefined

  constructor(public asideHeaderService: AsideHeaderService, public loginService: LoginService) { }
}
