import { TestBed } from '@angular/core/testing';

import { RegistrationInstitutionDepartmentNameModule } from './registration-institution-department-name.module';

describe('RegistrationInstitutionDepartmentNameModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationInstitutionDepartmentNameModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationInstitutionDepartmentNameModule).toBeTruthy();
  });
});
