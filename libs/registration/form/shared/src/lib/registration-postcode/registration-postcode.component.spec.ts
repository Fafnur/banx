import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPostcodeComponent } from './registration-postcode.component';

describe('RegistrationPostcodeComponent', () => {
  let component: RegistrationPostcodeComponent;
  let fixture: ComponentFixture<RegistrationPostcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationPostcodeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
