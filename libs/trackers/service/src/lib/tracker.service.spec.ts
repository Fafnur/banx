import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TrackerService } from './tracker.service';

describe('TrackerService', () => {
  let service: TrackerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [TrackerService],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(TrackerService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
