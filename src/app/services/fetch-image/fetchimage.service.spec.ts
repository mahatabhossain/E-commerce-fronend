import { TestBed } from '@angular/core/testing';

import { FetchimageService } from './fetchimage.service';

describe('FetchimageService', () => {
  let service: FetchimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
