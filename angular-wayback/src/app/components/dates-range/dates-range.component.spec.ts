import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesRangeComponent } from './dates-range.component';

describe('DatesRangeComponent', () => {
  let component: DatesRangeComponent;
  let fixture: ComponentFixture<DatesRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatesRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
