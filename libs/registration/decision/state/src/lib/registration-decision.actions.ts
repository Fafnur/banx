import { HttpErrorResponse } from '@angular/common/http';
import { createAction } from '@ngrx/store';

import { payload } from '@banx/core/store/utils';

export const makeDecision = createAction('[RegistrationDecision] Make Decision');

export const makeDecisionSuccess = createAction('[RegistrationDecision] Make Decision Success');

export const makeDecisionFailure = createAction('[RegistrationDecision] Make Decision Failure', payload<HttpErrorResponse>());
