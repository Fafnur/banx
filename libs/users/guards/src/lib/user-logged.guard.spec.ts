import { TestBed, waitForAsync } from '@angular/core/testing';
import { UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { readFirst } from '@nrwl/angular/testing';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { AuthFacade } from '@banx/auth/state';
import { NAVIGATION_PATHS, PATHS_STUB } from '@banx/core/navigation/common';
import { NavigationService } from '@banx/core/navigation/service';
import { providerOf } from '@banx/core/testing';

import { UserLoggedGuard } from './user-logged.guard';

describe('UserLoggedGuard', () => {
  let guard: UserLoggedGuard;
  let authFacadeMock: AuthFacade;
  let navigationServiceMock: NavigationService;
  let logged$: ReplaySubject<boolean>;

  const URL_TREE_STUB = {} as UrlTree;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
    authFacadeMock = mock(AuthFacade);

    logged$ = new ReplaySubject<boolean>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [
          UserLoggedGuard,
          providerOf(AuthFacade, authFacadeMock),
          providerOf(NavigationService, navigationServiceMock),
          PATHS_STUB,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(authFacadeMock.logged$).thenReturn(logged$);
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);
    when(navigationServiceMock.createUrlTree(NAVIGATION_PATHS.home)).thenReturn(URL_TREE_STUB);

    guard = TestBed.inject(UserLoggedGuard);
  });

  it('should create an instance', () => {
    expect(guard).toBeTruthy();
  });

  it('canActivate() should return true', async () => {
    logged$.next(false);
    const result = await readFirst(guard.canActivate());

    expect(result).toEqual(URL_TREE_STUB);
  });

  it('canActivate() should redirect to home page', async () => {
    logged$.next(true);
    const result = await readFirst(guard.canActivate());

    expect(result).toBeTruthy();
  });
});
