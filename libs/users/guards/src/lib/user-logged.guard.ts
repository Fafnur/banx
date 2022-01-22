import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthFacade } from '@banx/auth/state';
import { NavigationService } from '@banx/core/navigation/service';

@Injectable()
export class UserLoggedGuard implements CanActivate {
  constructor(private readonly navigationService: NavigationService, private readonly authFacade: AuthFacade) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authFacade.logged$.pipe(
      map((logged) => logged || this.navigationService.createUrlTree(this.navigationService.getPaths().home))
    );
  }
}
