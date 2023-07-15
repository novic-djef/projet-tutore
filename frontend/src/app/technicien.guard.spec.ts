import { TestBed } from '@angular/core/testing';

import { TechnicienGuard } from './technicien.guard';

describe('TechnicienGuard', () => {
  let guard: TechnicienGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TechnicienGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
