import { TestBed } from '@angular/core/testing';

import { UpdateLogicielGuard } from './update-logiciel.guard';

describe('UpdateLogicielGuard', () => {
  let guard: UpdateLogicielGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UpdateLogicielGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
