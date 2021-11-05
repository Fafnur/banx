import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDriverLicenseComponent } from './registration-driver-license.component';

describe('RegistrationDriverLicenseComponent', () => {
  let component: RegistrationDriverLicenseComponent;
  let fixture: ComponentFixture<RegistrationDriverLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationDriverLicenseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDriverLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
