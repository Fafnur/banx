import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NAVIGATION_PATHS } from '@banx/core/navigation/common';
import { NavigationService } from '@banx/core/navigation/service';

import { NavigationPathPipe } from './navigation-path.pipe';

describe('NavigationPathPipe', () => {
  let pipe: NavigationPathPipe;
  let navigationService: NavigationService;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    navigationService = TestBed.inject(NavigationService);
    pipe = new NavigationPathPipe(navigationService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return external path', () => {
    expect(pipe.transform(NAVIGATION_PATHS.services)).toEqual(['/', NAVIGATION_PATHS.services]);
  });
});
