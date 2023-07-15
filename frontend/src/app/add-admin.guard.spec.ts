import { TestBed } from '@angular/core/testing';

import { AddAdminGuard } from './add-admin.guard';

describe('AddAdminGuard', () => {
  let guard: AddAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
