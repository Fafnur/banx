import { TestBed } from '@angular/core/testing';

import { RegistrationJobDescriptionModule } from './registration-job-description.module';

describe('RegistrationJobDescriptionModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationJobDescriptionModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationJobDescriptionModule).toBeTruthy();
  });
});
