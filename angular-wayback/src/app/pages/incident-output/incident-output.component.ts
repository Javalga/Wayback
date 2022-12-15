import { Component, Directive, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incident-output',
  templateUrl: './incident-output.component.html',
  styleUrls: ['./incident-output.component.css']
})


export class IncidentOutputComponent {
  @ViewChild("myInput") input;

  public value: string = "Registro";

  registerStatus() {
    const audio = new Audio('assets/pitido.mp3');
    audio.play();
    this.input.nativeElement.focus()
    this.input.nativeElement.value = "";
  }
}
