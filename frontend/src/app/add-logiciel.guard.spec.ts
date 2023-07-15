import { TestBed } from '@angular/core/testing';

import { AddLogicielGuard } from './add-logiciel.guard';

describe('AddLogicielGuard', () => {
  let guard: AddLogicielGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddLogicielGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
