import { HttpErrorResponse } from '@angular/common/http';
import { createAction } from '@ngrx/store';

import { payload } from '@banx/core/store/utils';

export const finishSocial = createAction('[RegistrationSocial] Finish Social');

export const finishSocialSuccess = createAction('[RegistrationData] Finish Social Success');

export const finishSocialFailure = createAction('[RegistrationData] Finish Social Failure', payload<HttpErrorResponse>());
