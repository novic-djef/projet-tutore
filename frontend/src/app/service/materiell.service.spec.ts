import { TestBed } from '@angular/core/testing';

import { MateriellService } from './materiell.service';

describe('MateriellService', () => {
  let service: MateriellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
