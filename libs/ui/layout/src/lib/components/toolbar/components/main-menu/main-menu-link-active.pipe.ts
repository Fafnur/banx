import { Pipe, PipeTransform } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedPayload } from '@ngrx/router-store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { MenuLink } from '@banx/core/menu/common';
import { NAVIGATION_PATHS } from '@banx/core/navigation/common';
import { RouterUrlState } from '@banx/core/store/root';

@Pipe({
  name: 'mainMenuLinkActive',
})
export class MainMenuLinkActivePipe implements PipeTransform {
  constructor(private readonly actions$: Actions) {}

  transform(link: MenuLink): Observable<boolean> {
    return link.route === NAVIGATION_PATHS.home
      ? this.actions$.pipe(
          ofType(ROUTER_NAVIGATED),
          map((action: { payload: RouterNavigatedPayload<RouterUrlState> }) => {
            return action.payload.event.url.indexOf('/bank') === 0;
          })
        )
      : of(false);
  }
}
