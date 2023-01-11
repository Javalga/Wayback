import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNotAvailableComponent } from './form-not-available.component';

describe('FormNotAvailableComponent', () => {
  let component: FormNotAvailableComponent;
  let fixture: ComponentFixture<FormNotAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNotAvailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNotAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
