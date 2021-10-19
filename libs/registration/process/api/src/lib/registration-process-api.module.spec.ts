import { TestBed } from '@angular/core/testing';

import { RegistrationProcessApiModule } from './registration-process-api.module';

describe('RegistrationProcessApiModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationProcessApiModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationProcessApiModule).toBeTruthy();
  });
});
