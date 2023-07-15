import { TestBed } from '@angular/core/testing';

import { UpdateInterventionGuard } from './update-intervention.guard';

describe('UpdateInterventionGuard', () => {
  let guard: UpdateInterventionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateInterventionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
