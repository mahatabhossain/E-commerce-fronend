import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupdialogComponent } from './signupdialog.component';

describe('SignupdialogComponent', () => {
  let component: SignupdialogComponent;
  let fixture: ComponentFixture<SignupdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
