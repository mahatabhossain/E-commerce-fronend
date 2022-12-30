import { TestBed } from '@angular/core/testing';

import { GetvendorService } from './getvendor.service';

describe('GetvendorService', () => {
  let service: GetvendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetvendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
