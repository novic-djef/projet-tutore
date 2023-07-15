import { TestBed } from '@angular/core/testing';

import { reparationService } from './reparation.service';

describe('reparationService', () => {
  let service: reparationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(reparationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
