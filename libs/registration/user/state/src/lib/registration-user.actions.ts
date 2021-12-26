import { HttpErrorResponse } from '@angular/common/http';
import { createAction } from '@ngrx/store';

import { payload } from '@banx/core/store/utils';

export const createUser = createAction('[RegistrationUser] Create User');

export const createUserSuccess = createAction('[RegistrationUser] Create User Success');

export const createUserFailure = createAction('[RegistrationUser] Create User Failure', payload<HttpErrorResponse>());
