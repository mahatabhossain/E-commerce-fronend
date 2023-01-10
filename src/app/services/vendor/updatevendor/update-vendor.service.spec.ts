import { TestBed } from '@angular/core/testing';

import { UpdateVendorService } from './update-vendor.service';

describe('UpdateVendorService', () => {
  let service: UpdateVendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateVendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
