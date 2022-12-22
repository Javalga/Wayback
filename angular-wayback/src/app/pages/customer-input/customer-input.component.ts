import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Incidence } from 'src/app/models/incidence';
import { IncidenceService } from 'src/app/shared/incidence.service'

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.css'],
})
export class CustomerInputComponent {
  public incidence: Incidence
  constructor(public incidenceService: IncidenceService) {
    this.incidence = new Incidence()
  }
  onSubmit(ngForm: NgForm) { }
}
