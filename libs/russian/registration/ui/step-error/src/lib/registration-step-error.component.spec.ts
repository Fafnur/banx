import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStepErrorComponent } from './registration-step-error.component';

describe('RegistrationStepErrorComponent', () => {
  let component: RegistrationStepErrorComponent;
  let fixture: ComponentFixture<RegistrationStepErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationStepErrorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStepErrorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
