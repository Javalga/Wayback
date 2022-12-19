import { TestBed } from '@angular/core/testing';

import { IncidenceTypeService } from './incidence-type.service';

describe('IncidenceTypeService', () => {
  let service: IncidenceTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidenceTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
