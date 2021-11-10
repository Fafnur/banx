import { TestBed } from '@angular/core/testing';

import { RegistrationLastNameModule } from './registration-last-name.module';

describe('RegistrationLastNameModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationLastNameModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationLastNameModule).toBeTruthy();
  });
});
