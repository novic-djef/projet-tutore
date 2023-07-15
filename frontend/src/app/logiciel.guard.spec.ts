import { TestBed } from '@angular/core/testing';

import { LogicielGuard } from './logiciel.guard';

describe('LogicielGuard', () => {
  let guard: LogicielGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogicielGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
