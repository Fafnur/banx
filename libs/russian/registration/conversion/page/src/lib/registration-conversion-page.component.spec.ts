import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationConversionPageComponent } from './registration-conversion-page.component';

describe('RegistrationSocialPageComponent', () => {
  let component: RegistrationConversionPageComponent;
  let fixture: ComponentFixture<RegistrationConversionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationConversionPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationConversionPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
