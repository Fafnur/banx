import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@banx/core/api/service';
import {
  RegistrationForm,
  RegistrationFormCreate,
  RegistrationFormFieldValidate,
  RegistrationFormValidate,
} from '@banx/registration/form/common';

export const REGISTRATION_FORM_API_ROUTES = {
  create: (processId: string): string => `/registration/${processId}/form`,
  load: (processId: string): string => `/registration/${processId}/form`,
  validate: (processId: string): string => `/registration/${processId}/form/validate`,
  validateUnique: (processId: string): string => `/registration/${processId}/form/validate-unique`,
};

@Injectable()
export class RegistrationFormApiService {
  constructor(private readonly apiService: ApiService) {}

  load(processId: string): Observable<RegistrationForm> {
    return this.apiService.get<RegistrationForm>(REGISTRATION_FORM_API_ROUTES.load(processId));
  }

  create(processId: string, payload: RegistrationFormCreate): Observable<void> {
    return this.apiService.post(REGISTRATION_FORM_API_ROUTES.create(processId), payload);
  }

  validate(processId: string, data: RegistrationFormValidate): Observable<void> {
    return this.apiService.post(REGISTRATION_FORM_API_ROUTES.validate(processId), data);
  }

  validateUnique(processId: string, data: RegistrationFormFieldValidate): Observable<void> {
    return this.apiService.post(REGISTRATION_FORM_API_ROUTES.validateUnique(processId), data);
  }
}
