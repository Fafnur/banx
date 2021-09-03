import { createAction } from '@ngrx/store';

import { payload } from '@banx/core/store/utils';
import { UserAuth, UserCredentials, UserSecrets } from '@banx/users/common';

export const init = createAction('[Auth] Init');

export const restore = createAction('[Auth] Restore', payload<{ logged: boolean }>());

export const login = createAction('[Auth] Login', payload<UserCredentials>());

export const loginSuccess = createAction('[Auth/API] Load Auth Success', payload<UserAuth>());

export const loginFailure = createAction('[Auth/API] Load Auth Failure', payload<Record<string, any>>());

export const recovery = createAction('[Auth] Recovery', payload<UserSecrets>());

export const recoverySuccess = createAction('[Auth/API] Recovery Success');

export const recoveryFailure = createAction('[Auth/API] Recovery Failure', payload<Record<string, any>>());
