import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@banx/core/api/service';

export const REGISTRATION_SOCIAL_API_ROUTES = {
  finish: (processId: string) => `/registration/${processId}/social`,
};

@Injectable()
export class RegistrationSocialApiService {
  constructor(private readonly apiService: ApiService) {}

  finish(processId: string): Observable<void> {
    return this.apiService.post(REGISTRATION_SOCIAL_API_ROUTES.finish(processId));
  }
}
