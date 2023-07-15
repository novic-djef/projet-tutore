import { TestBed } from '@angular/core/testing';

import { ReparationGuard } from './reparation.guard';

describe('reparationGuard', () => {
  let guard: ReparationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReparationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
