import { TestBed } from '@angular/core/testing';

import { AddFournisseurGuard } from './add-fournisseur.guard';

describe('AddFournisseurGuard', () => {
  let guard: AddFournisseurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddFournisseurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
