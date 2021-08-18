import { TestBed } from '@angular/core/testing';

import { SocialGroupsModule } from './social-groups.module';

describe('SocialGroupsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialGroupsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(SocialGroupsModule).toBeTruthy();
  });
});
