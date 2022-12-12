import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvedPullComponent } from './solved-pull.component';

describe('SolvedPullComponent', () => {
  let component: SolvedPullComponent;
  let fixture: ComponentFixture<SolvedPullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolvedPullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolvedPullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
