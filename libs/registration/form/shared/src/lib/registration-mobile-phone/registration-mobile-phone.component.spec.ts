import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMobilePhoneComponent } from './registration-mobile-phone.component';

describe('RegistrationMobilePhoneComponent', () => {
  let component: RegistrationMobilePhoneComponent;
  let fixture: ComponentFixture<RegistrationMobilePhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationMobilePhoneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMobilePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
