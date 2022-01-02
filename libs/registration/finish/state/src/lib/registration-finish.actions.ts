import { HttpErrorResponse } from '@angular/common/http';
import { createAction } from '@ngrx/store';

import { payload } from '@banx/core/store/utils';
import { UserStatus } from '@banx/users/common';

export const finishRegistration = createAction('[RegistrationFinish] Finish Registration');

export const finishRegistrationSuccess = createAction(
  '[RegistrationFinish] Finish Registration Success',
  payload<{ status: UserStatus }>()
);

export const finishRegistrationFailure = createAction('[RegistrationFinish] Finish Registration Failure', payload<HttpErrorResponse>());
