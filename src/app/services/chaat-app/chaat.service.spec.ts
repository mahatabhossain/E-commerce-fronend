import { TestBed } from '@angular/core/testing';

import { ChaatService } from './chaat.service';

describe('ChaatService', () => {
  let service: ChaatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
