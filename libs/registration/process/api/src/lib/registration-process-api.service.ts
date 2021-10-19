import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '@banx/core/api/service';
import { castRegistrationProcess, RegistrationProcess, RegistrationProcessDto } from '@banx/registration/process/common';

export const REGISTRATION_PROCESS_API_ROUTES = {
  steps: '/registration/steps',
};

@Injectable()
export class RegistrationProcessApiService {
  constructor(private readonly apiService: ApiService) {}

  steps(): Observable<RegistrationProcess> {
    return this.apiService.get<RegistrationProcessDto>(REGISTRATION_PROCESS_API_ROUTES.steps).pipe(map(castRegistrationProcess));
  }
}
