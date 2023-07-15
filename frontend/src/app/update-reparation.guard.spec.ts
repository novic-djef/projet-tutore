import { TestBed } from '@angular/core/testing';

import { UpdateReparationGuard } from './update-reparation.guard';

describe('UpdatereparationGuard', () => {
  let guard: UpdateReparationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateReparationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
