import { HttpErrorResponse } from '@angular/common/http';
import { createAction } from '@ngrx/store';

import { payload } from '@banx/core/store/utils';

export const runDetect = createAction('[RegistrationData] Run Detect');

export const finishData = createAction('[RegistrationData] Finish Data');

export const finishDataSuccess = createAction('[RegistrationData] Finish Data Success');

export const finishDataFailure = createAction('[RegistrationData] Finish Data Failure', payload<HttpErrorResponse>());
