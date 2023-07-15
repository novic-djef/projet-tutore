import { TestBed } from '@angular/core/testing';

import { UpdateMaterielGuard } from './update-materiel.guard';

describe('UpdateMaterielGuard', () => {
  let guard: UpdateMaterielGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateMaterielGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
