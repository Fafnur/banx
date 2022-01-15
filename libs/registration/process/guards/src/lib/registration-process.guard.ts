import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { NavigationService } from '@banx/core/navigation/service';
import { PlatformService } from '@banx/core/platform/service';
import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { getRegistrationPath } from '@banx/registration/process/common';
import { RegistrationProcessFacade } from '@banx/registration/process/state';

@Injectable()
export class RegistrationProcessGuard implements CanActivate {
  constructor(
    private readonly registrationProcessFacade: RegistrationProcessFacade,
    private readonly navigationService: NavigationService,
    private readonly platformService: PlatformService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    if (!this.platformService.isBrowser) {
      return of(true);
    }

    const step = route.data['step'] ?? null;

    return this.registrationProcessFacade.stepWithSubStep$.pipe(
      isNotNullOrUndefined(),
      map((loadedStep) => {
        if (step && loadedStep.step?.name === step) {
          return true;
        }

        const paths = this.navigationService.getPaths();
        const path = loadedStep.step != null ? getRegistrationPath(loadedStep, paths) : paths.home;

        return this.navigationService.createUrlTree(path);
      })
    );
  }
}
