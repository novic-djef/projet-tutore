import { TestBed } from '@angular/core/testing';

import { MaterielGuard } from './materiel.guard';

describe('MaterielGuard', () => {
  let guard: MaterielGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MaterielGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
