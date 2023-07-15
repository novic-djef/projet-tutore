import { TestBed } from '@angular/core/testing';

import { DemandeGuard } from './demande.guard';

describe('DemandeGuard', () => {
  let guard: DemandeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DemandeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
