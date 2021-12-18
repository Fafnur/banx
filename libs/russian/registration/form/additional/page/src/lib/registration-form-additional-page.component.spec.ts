import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormAdditionalPageComponent } from './registration-form-additional-page.component';

describe('RegistrationFormAdditionalPageComponent', () => {
  let component: RegistrationFormAdditionalPageComponent;
  let fixture: ComponentFixture<RegistrationFormAdditionalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormAdditionalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormAdditionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
