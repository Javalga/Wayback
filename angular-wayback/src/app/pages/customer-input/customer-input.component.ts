import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Incident } from 'src/app/models/incident'
import { IncidentService } from 'src/app/shared/incident.service'

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.css'],
})
export class CustomerInputComponent {
  constructor(public incidentService: IncidentService) {}

  onSubmit(ngForm: NgForm) {}
}
