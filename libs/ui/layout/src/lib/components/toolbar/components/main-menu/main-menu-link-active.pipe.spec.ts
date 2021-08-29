import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { readFirst } from '@nrwl/angular/testing';
import { ReplaySubject } from 'rxjs';

import { NAVIGATION_PATHS } from '@banx/core/navigation/common';

import { MainMenuLinkActivePipe } from './main-menu-link-active.pipe';

describe('MenuLinkActivePipe', () => {
  let actions$: ReplaySubject<any>;
  let pipe: MainMenuLinkActivePipe;
  const HOME_STUB = {
    route: NAVIGATION_PATHS.home,
    label: 'Bank',
    routerLinkActiveOptions: true,
  };

  beforeEach(() => {
    actions$ = new ReplaySubject<any>(1);
    pipe = new MainMenuLinkActivePipe(actions$);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return true', async () => {
    actions$.next({ type: ROUTER_NAVIGATED, payload: { event: { url: '/bank/deposits' } } });
    const result = await readFirst(pipe.transform(HOME_STUB));

    expect(result).toBeTruthy();
  });

  it('should return false', async () => {
    actions$.next({ type: ROUTER_NAVIGATED, payload: { event: { url: '/business' } } });
    const result = await readFirst(pipe.transform(HOME_STUB));

    expect(result).toBeFalsy();
  });
});
