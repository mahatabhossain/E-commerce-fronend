import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcontrolComponent } from './productcontrol.component';

describe('ProductcontrolComponent', () => {
  let component: ProductcontrolComponent;
  let fixture: ComponentFixture<ProductcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
