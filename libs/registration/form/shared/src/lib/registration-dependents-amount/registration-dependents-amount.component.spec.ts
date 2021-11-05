import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDependentsAmountComponent } from './registration-dependents-amount.component';

describe('RegistrationDependentsAmountComponent', () => {
  let component: RegistrationDependentsAmountComponent;
  let fixture: ComponentFixture<RegistrationDependentsAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationDependentsAmountComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDependentsAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
