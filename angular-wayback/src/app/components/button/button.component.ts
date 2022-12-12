import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() value: undefined
  @Input() style: undefined
}

// CUANDO SE USE ESTE COMPONENTE, CAMBIAR EL WIDTH SOLAMENTE PARA AJUSTAR AL CONTENEDOR CON UN !IMPORTANT