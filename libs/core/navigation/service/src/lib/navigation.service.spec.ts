import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NAVIGATION_PATHS, PATHS_STUB } from '@banx/core/navigation/common';

import { NavigationService } from './navigation.service';

describe('CoreNavigationService', () => {
  let service: NavigationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [NavigationService, PATHS_STUB],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(NavigationService);
  });

  it('should return service path', () => {
    expect(service.getRoute(NAVIGATION_PATHS.business)).toEqual(['/', NAVIGATION_PATHS.business]);
  });
});
