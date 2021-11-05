import { TestBed } from '@angular/core/testing';

import { RegistrationEmployerNameModule } from './registration-employer-name.module';

describe('RegistrationEmployerNameModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationEmployerNameModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationEmployerNameModule).toBeTruthy();
  });
});
