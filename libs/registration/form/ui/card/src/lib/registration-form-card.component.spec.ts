import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormCardComponent } from './registration-form-card.component';

describe('RegistrationFormCardComponent', () => {
  let component: RegistrationFormCardComponent;
  let fixture: ComponentFixture<RegistrationFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
