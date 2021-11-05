import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSmsCodeComponent } from './registration-sms-code.component';

describe('RegistrationSmsCodeComponent', () => {
  let component: RegistrationSmsCodeComponent;
  let fixture: ComponentFixture<RegistrationSmsCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationSmsCodeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSmsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
