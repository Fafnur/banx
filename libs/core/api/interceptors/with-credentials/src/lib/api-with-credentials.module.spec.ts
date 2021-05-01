import { TestBed } from '@angular/core/testing';

import { ApiWithCredentialsModule } from './api-with-credentials.module';

describe('ApiWithCredentialsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiWithCredentialsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ApiWithCredentialsModule).toBeTruthy();
  });
});
