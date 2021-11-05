import { TestBed } from '@angular/core/testing';

import { RegistrationEmploymentTypeModule } from './registration-employment-type.module';

describe('RegistrationEmploymentTypeModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationEmploymentTypeModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationEmploymentTypeModule).toBeTruthy();
  });
});
