import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@banx/core/api/service';

export const REGISTRATION_FINISH_API_ROUTES = {
  finish: (processId: string) => `/registration/${processId}/finish`,
};

@Injectable()
export class RegistrationFinishApiService {
  constructor(private readonly apiService: ApiService) {}

  finish(processId: string): Observable<void> {
    return this.apiService.post(REGISTRATION_FINISH_API_ROUTES.finish(processId));
  }
}
