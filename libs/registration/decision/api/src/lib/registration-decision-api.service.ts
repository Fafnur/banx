import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@banx/core/api/service';

export const REGISTRATION_DECISION_API_ROUTES = {
  makeDecision: (processId: string) => `/registration/${processId}/decision`,
};

@Injectable()
export class RegistrationDecisionApiService {
  constructor(private readonly apiService: ApiService) {}

  makeDecision(processId: string): Observable<void> {
    return this.apiService.post(REGISTRATION_DECISION_API_ROUTES.makeDecision(processId));
  }
}
