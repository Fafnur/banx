import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@banx/core/api/service';
import { UserAuth, UserCredentials, UserSecrets } from '@banx/users/common';

export const AUTH_API_ROUTES = {
  login: '/auth/login',
  recovery: '/auth/recovery',
};

@Injectable()
export class AuthApiService {
  constructor(private readonly apiService: ApiService) {}

  login(payload: UserCredentials): Observable<UserAuth> {
    return this.apiService.post(AUTH_API_ROUTES.login, payload);
  }

  recovery(payload: UserSecrets): Observable<void> {
    return this.apiService.post(AUTH_API_ROUTES.recovery, payload);
  }
}
