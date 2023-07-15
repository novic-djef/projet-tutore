import { TestBed } from '@angular/core/testing';

import { AddMaterielGuard } from './add-materiel.guard';

describe('AddMaterielGuard', () => {
  let guard: AddMaterielGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddMaterielGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
