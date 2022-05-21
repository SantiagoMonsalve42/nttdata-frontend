import { TestBed } from '@angular/core/testing';

import { ApihelperService } from './apihelper.service';

describe('ApihelperService', () => {
  let service: ApihelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApihelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
