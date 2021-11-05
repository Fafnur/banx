import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPeriodOfUnemploymentComponent } from './registration-period-of-unemployment.component';

describe('RegistrationPeriodOfUnemploymentComponent', () => {
  let component: RegistrationPeriodOfUnemploymentComponent;
  let fixture: ComponentFixture<RegistrationPeriodOfUnemploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationPeriodOfUnemploymentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPeriodOfUnemploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
