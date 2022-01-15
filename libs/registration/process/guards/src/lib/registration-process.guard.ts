import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { NavigationService } from '@banx/core/navigation/service';
import { PlatformService } from '@banx/core/platform/service';
import { isNotNullOrUndefined } from '@banx/core/store/utils';
import { RegistrationStepType } from '@banx/registration/process/common';
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

    const step = route.data['step'] ?? RegistrationStepType.Form;

    return this.registrationProcessFacade.step$.pipe(
      isNotNullOrUndefined(),
      map(
        (selectedStep) => selectedStep.name === step || this.navigationService.createUrlTree(this.navigationService.getPaths().registration)
      )
    );
  }
}
