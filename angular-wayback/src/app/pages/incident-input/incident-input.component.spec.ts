import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentInputComponent } from './incident-input.component';

describe('IncidentInputComponent', () => {
  let component: IncidentInputComponent;
  let fixture: ComponentFixture<IncidentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
