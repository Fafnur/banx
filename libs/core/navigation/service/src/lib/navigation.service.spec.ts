import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NAVIGATION_PATHS } from '@banx/core/navigation/common';

import { CoreNavigationService } from './navigation.service';

describe('CoreNavigationService', () => {
  let service: CoreNavigationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [CoreNavigationService],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(CoreNavigationService);
  });

  it('should return service path', () => {
    expect(service.getRoute(NAVIGATION_PATHS.services)).toEqual(['/', NAVIGATION_PATHS.services]);
  });
});
