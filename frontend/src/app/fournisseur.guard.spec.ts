import { TestBed } from '@angular/core/testing';

import { FournisseurGuard } from './fournisseur.guard';

describe('FournisseurGuard', () => {
  let guard: FournisseurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FournisseurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
