import { TestBed } from '@angular/core/testing';

import { ReadtextService } from './readtext.service';

describe('ReadtextService', () => {
  let service: ReadtextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadtextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
