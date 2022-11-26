import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountcontrolComponent } from './accountcontrol.component';

describe('AccountcontrolComponent', () => {
  let component: AccountcontrolComponent;
  let fixture: ComponentFixture<AccountcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountcontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
