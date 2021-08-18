import { TestBed } from '@angular/core/testing';

import { SocialSharedModule } from './social-shared.module';

describe('SocialSharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(SocialSharedModule).toBeTruthy();
  });
});
