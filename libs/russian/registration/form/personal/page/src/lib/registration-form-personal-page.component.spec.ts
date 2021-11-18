import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormPersonalPageComponent } from './registration-form-personal-page.component';

describe('RegistrationFormPersonalPageComponent', () => {
  let component: RegistrationFormPersonalPageComponent;
  let fixture: ComponentFixture<RegistrationFormPersonalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormPersonalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormPersonalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
