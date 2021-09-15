import { Inject, Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NavigationPaths, PATHS } from '@banx/core/navigation/common';
import { NavigationService } from '@banx/core/navigation/service';
import { PlatformService } from '@banx/core/platform/service';
import { SessionAsyncStorage } from '@banx/core/storage/session';
import { UserStorageKeys } from '@banx/users/common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly navigationService: NavigationService,
    private readonly platformService: PlatformService,
    private readonly sessionAsyncStorage: SessionAsyncStorage,
    @Inject(PATHS) private readonly paths: NavigationPaths
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.sessionAsyncStorage
      .getItem(UserStorageKeys.AuthToken)
      .pipe(map((authToken) => authToken !== null || this.navigationService.createUrlTree(this.paths.user)));
  }
}
