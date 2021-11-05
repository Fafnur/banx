import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMonthlyIncomeComponent } from './registration-monthly-income.component';

describe('RegistrationMonthlyIncomeComponent', () => {
  let component: RegistrationMonthlyIncomeComponent;
  let fixture: ComponentFixture<RegistrationMonthlyIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationMonthlyIncomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMonthlyIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
