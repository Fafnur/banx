import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationKidsAmountComponent } from './registration-kids-amount.component';

describe('RegistrationKidsAmountComponent', () => {
  let component: RegistrationKidsAmountComponent;
  let fixture: ComponentFixture<RegistrationKidsAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationKidsAmountComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationKidsAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
