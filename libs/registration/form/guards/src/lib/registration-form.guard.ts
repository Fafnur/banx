import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

import { NavigationService } from '@banx/core/navigation/service';
import { PlatformService } from '@banx/core/platform/service';
import { REGISTRATION_FIELDS_FOR_COMPLETE } from '@banx/registration/form/common';
import { RegistrationFormFacade } from '@banx/registration/form/state';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';
import { RegistrationProcessFacade } from '@banx/registration/process/state';

@Injectable()
export class RegistrationFormGuard implements CanActivate {
  constructor(
    private readonly registrationFormFacade: RegistrationFormFacade,
    private readonly registrationProcessFacade: RegistrationProcessFacade,
    private readonly navigationService: NavigationService,
    private readonly platformService: PlatformService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    if (!this.platformService.isBrowser) {
      return of(true);
    }

    const check: ((form: Record<string, any>) => boolean) | null = typeof route.data['check'] === 'function' ? route.data['check'] : null;
    const subStep: RegistrationFormSubSteps = route.data['subStep'] ?? RegistrationFormSubSteps.Personal;

    return this.registrationFormFacade.formLoaded$.pipe(
      switchMap(() =>
        this.registrationFormFacade.form$.pipe(
          map((form) => {
            const isCan =
              form && REGISTRATION_FIELDS_FOR_COMPLETE[subStep].every((fieldName) => form[fieldName] != null) && (!check || check(form));
            if (!isCan) {
              this.registrationProcessFacade.setSubStep(RegistrationFormSubSteps.Personal);
            }

            return isCan || this.navigationService.createUrlTree(this.navigationService.getPaths().registrationFormPersonal);
          })
        )
      )
    );
  }
}
