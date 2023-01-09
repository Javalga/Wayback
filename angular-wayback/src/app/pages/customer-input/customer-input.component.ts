import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Incidence } from 'src/app/models/incidence';
import { IncidenceService } from 'src/app/shared/incidence.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.css'],
})
export class CustomerInputComponent {
  public incidence: Incidence;
  public ref: number;
  constructor(public incidenceService: IncidenceService, public activatedRoute: ActivatedRoute) {
    this.ref = this.activatedRoute.snapshot.params.ref
    this.incidenceService.getOneIncidence(this.ref).subscribe((data) => { this.incidence = data[0] });
  }
  onSubmit(ngForm: NgForm) { }
}
