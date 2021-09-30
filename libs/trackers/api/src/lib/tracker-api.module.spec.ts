import { TestBed } from '@angular/core/testing';

import { TrackerApiModule } from './tracker-api.module';

describe('TrackerApiModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackerApiModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(TrackerApiModule).toBeTruthy();
  });
});
