import { TestBed, waitForAsync } from '@angular/core/testing';

import { WindowService } from './window.service';

describe('WindowService', () => {
  let service: WindowService;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        providers: [WindowService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    service = TestBed.inject(WindowService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return window', () => {
    expect(service.window).toBeTruthy();
  });
});
