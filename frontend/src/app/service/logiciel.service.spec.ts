import { TestBed } from '@angular/core/testing';

import { LogicielService } from './logiciel.service';

describe('LogicielService', () => {
  let service: LogicielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
