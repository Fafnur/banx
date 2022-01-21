import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

import { NavigationService } from '@banx/core/navigation/service';
import { PlatformService } from '@banx/core/platform/service';
import { REGISTRATION_FIELDS_FOR_COMPLETE } from '@banx/registration/form/common';
import { RegistrationFormFacade } from '@banx/registration/form/state';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';

@Injectable()
export class RegistrationFormGuard implements CanActivate {
  constructor(
    private readonly registrationFormFacade: RegistrationFormFacade,
    private readonly navigationService: NavigationService,
    private readonly platformService: PlatformService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const check: ((form: Record<string, any>) => boolean) | null = typeof route.data['check'] === 'function' ? route.data['check'] : null;
    const subStep: RegistrationFormSubSteps = route.data['subStep'] ?? RegistrationFormSubSteps.Personal;

    return this.platformService.isBrowser
      ? this.registrationFormFacade.formLoaded$.pipe(
          switchMap(() =>
            this.registrationFormFacade.form$.pipe(
              map(
                (form) =>
                  (form &&
                    REGISTRATION_FIELDS_FOR_COMPLETE[subStep].every((fieldName) => form[fieldName] != null) &&
                    (!check || check(form))) ||
                  this.navigationService.createUrlTree(this.navigationService.getPaths().registrationFormPersonal)
              )
            )
          )
        )
      : of(true);
  }
}
