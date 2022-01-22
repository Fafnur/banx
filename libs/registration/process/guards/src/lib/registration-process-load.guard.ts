import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { filter, Observable, of, switchMap } from 'rxjs';

import { PlatformService } from '@banx/core/platform/service';
import { RegistrationProcessFacade } from '@banx/registration/process/state';

@Injectable()
export class RegistrationProcessLoadGuard implements CanActivate {
  constructor(private readonly registrationProcessFacade: RegistrationProcessFacade, private readonly platformService: PlatformService) {}

  canActivate(): Observable<boolean | UrlTree> {
    if (!this.platformService.isBrowser) {
      return of(true);
    }

    return this.registrationProcessFacade.loaded$.pipe(
      switchMap((loaded) => {
        if (!loaded) {
          this.registrationProcessFacade.load();
        }

        return this.registrationProcessFacade.loaded$.pipe(filter((value) => Boolean(value)));
      })
    );
  }
}
