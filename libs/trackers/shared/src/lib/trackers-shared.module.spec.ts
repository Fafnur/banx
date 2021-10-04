import { TestBed } from '@angular/core/testing';

import { TrackersSharedModule } from './trackers-shared.module';

describe('TrackersSharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackersSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(TrackersSharedModule).toBeTruthy();
  });
});
