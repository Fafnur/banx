import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@banx/core/api/service';
import { RegistrationConversion } from '@banx/registration/conversion/common';

export const REGISTRATION_CONVERSION_API_ROUTES = {
  load: (processId: string) => `/registration/${processId}/conversion`,
  complete: (processId: string) => `/registration/${processId}/conversion`,
};

@Injectable()
export class RegistrationConversionApiService {
  constructor(private readonly apiService: ApiService) {}

  load(processId: string): Observable<RegistrationConversion> {
    return this.apiService.get(REGISTRATION_CONVERSION_API_ROUTES.load(processId));
  }

  complete(processId: string): Observable<void> {
    return this.apiService.post(REGISTRATION_CONVERSION_API_ROUTES.complete(processId));
  }
}
