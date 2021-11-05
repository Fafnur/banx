import { TestBed } from '@angular/core/testing';

import { RegistrationMiddleNameModule } from './registration-middle-name.module';

describe('RegistrationMiddleNameModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationMiddleNameModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationMiddleNameModule).toBeTruthy();
  });
});
