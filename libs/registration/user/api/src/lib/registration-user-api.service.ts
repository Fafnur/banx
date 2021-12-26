import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@banx/core/api/service';

export const REGISTRATION_USER_API_ROUTES = {
  create: (processId: string) => `/registration/${processId}/user`,
};

@Injectable()
export class RegistrationUserApiService {
  constructor(private readonly apiService: ApiService) {}

  create(processId: string): Observable<void> {
    return this.apiService.post(REGISTRATION_USER_API_ROUTES.create(processId));
  }
}
