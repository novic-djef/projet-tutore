import { TestBed } from '@angular/core/testing';

import { InterventionsGuard } from './interventions.guard';

describe('InterventionsGuard', () => {
  let guard: InterventionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InterventionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
