// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   @Input() appState: undefined
// }

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AsideHeaderService } from 'src/app/shared/aside-header.service';
import { LoginService } from 'src/app/shared/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() appState: undefined
  @Output() sendDate = new EventEmitter<Array<string>>();


  constructor(public asideHeaderService: AsideHeaderService, public loginService: LoginService) { }

  sendDateHead(date) {
    this.sendDate.emit(date)
    // console.log(date)
  }

}

