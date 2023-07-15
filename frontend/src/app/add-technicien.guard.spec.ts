import { TestBed } from '@angular/core/testing';

import { AddTechnicienGuard } from './add-technicien.guard';

describe('AddTechnicienGuard', () => {
  let guard: AddTechnicienGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddTechnicienGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
