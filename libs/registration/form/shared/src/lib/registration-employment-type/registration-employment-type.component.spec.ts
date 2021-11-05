import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationEmploymentTypeComponent } from './registration-employment-type.component';

describe('RegistrationEmploymentTypeComponent', () => {
  let component: RegistrationEmploymentTypeComponent;
  let fixture: ComponentFixture<RegistrationEmploymentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationEmploymentTypeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationEmploymentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
