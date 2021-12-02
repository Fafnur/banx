import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormFamilyPageComponent } from './registration-form-family-page.component';

describe('RegistrationFormFamilyPageComponent', () => {
  let component: RegistrationFormFamilyPageComponent;
  let fixture: ComponentFixture<RegistrationFormFamilyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormFamilyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormFamilyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
