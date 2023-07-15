import { TestBed } from '@angular/core/testing';

import { AddReparationGuard } from './add-reparation.guard';

describe('AddReparationGuard', () => {
  let guard: AddReparationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddReparationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
