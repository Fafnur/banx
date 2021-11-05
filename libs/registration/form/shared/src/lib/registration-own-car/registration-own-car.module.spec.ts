import { TestBed } from '@angular/core/testing';

import { RegistrationOwnCarModule } from './registration-own-car.module';

describe('RegistrationOwnCarModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationOwnCarModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RegistrationOwnCarModule).toBeTruthy();
  });
});
