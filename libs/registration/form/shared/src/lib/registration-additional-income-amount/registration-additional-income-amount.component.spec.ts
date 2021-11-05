import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAdditionalIncomeAmountComponent } from './registration-additional-income-amount.component';

describe('RegistrationAdditionalIncomeAmountComponent', () => {
  let component: RegistrationAdditionalIncomeAmountComponent;
  let fixture: ComponentFixture<RegistrationAdditionalIncomeAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationAdditionalIncomeAmountComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationAdditionalIncomeAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
