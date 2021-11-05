import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPeriodOfEmploymentComponent } from './registration-period-of-employment.component';

describe('RegistrationPeriodOfEmploymentComponent', () => {
  let component: RegistrationPeriodOfEmploymentComponent;
  let fixture: ComponentFixture<RegistrationPeriodOfEmploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationPeriodOfEmploymentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPeriodOfEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
