import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '@banx/core/api/service';
import { castRegistrationProcess, RegistrationProcess, RegistrationProcessDto } from '@banx/registration/process/common';

export const REGISTRATION_PROCESS_API_ROUTES = {
  load: (processId?: string | null): string => '/registration' + (processId ? `/${processId}` : ''),
};

@Injectable()
export class RegistrationProcessApiService {
  constructor(private readonly apiService: ApiService) {}

  load(processId?: string | null): Observable<RegistrationProcess> {
    return this.apiService.get<RegistrationProcessDto>(REGISTRATION_PROCESS_API_ROUTES.load(processId)).pipe(map(castRegistrationProcess));
  }
}
