import { TestBed } from '@angular/core/testing';

import { UserModule } from './user.module';

describe('UserModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(UserModule).toBeTruthy();
  });
});
