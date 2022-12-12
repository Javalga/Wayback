import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentOutputComponent } from './incident-output.component';

describe('IncidentOutputComponent', () => {
  let component: IncidentOutputComponent;
  let fixture: ComponentFixture<IncidentOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
