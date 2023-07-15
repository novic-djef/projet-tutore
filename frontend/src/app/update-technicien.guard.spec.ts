import { TestBed } from '@angular/core/testing';

import { UpdateTechnicienGuard } from './update-technicien.guard';

describe('UpdateTechnicienGuard', () => {
  let guard: UpdateTechnicienGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateTechnicienGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
