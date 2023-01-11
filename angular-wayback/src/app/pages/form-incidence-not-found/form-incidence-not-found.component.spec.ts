import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIncidenceNotFoundComponent } from './form-incidence-not-found.component';

describe('FormIncidenceNotFoundComponent', () => {
  let component: FormIncidenceNotFoundComponent;
  let fixture: ComponentFixture<FormIncidenceNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIncidenceNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIncidenceNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
