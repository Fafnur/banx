import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationInstitutionDepartmentNameComponent } from './registration-institution-department-name.component';

describe('RegistrationInstitutionDepartmentNameComponent', () => {
  let component: RegistrationInstitutionDepartmentNameComponent;
  let fixture: ComponentFixture<RegistrationInstitutionDepartmentNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationInstitutionDepartmentNameComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationInstitutionDepartmentNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
