import { TestBed } from '@angular/core/testing';

import { DeletevendorService } from './deletevendor.service';

describe('DeletevendorService', () => {
  let service: DeletevendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletevendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
