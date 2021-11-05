import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAgreementComponent } from './registration-agreement.component';

describe('RegistrationAgreementComponent', () => {
  let component: RegistrationAgreementComponent;
  let fixture: ComponentFixture<RegistrationAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationAgreementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
