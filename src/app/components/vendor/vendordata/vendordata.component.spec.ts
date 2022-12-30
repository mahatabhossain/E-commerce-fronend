import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendordataComponent } from './vendordata.component';

describe('VendordataComponent', () => {
  let component: VendordataComponent;
  let fixture: ComponentFixture<VendordataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendordataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendordataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
