import { USER_STUB, UserStatus } from '@banx/users/common';

import { RegistrationFinishResponse } from './registration-finish.interface';

export const REGISTRATION_FINISH_RESPONSE_STUB: RegistrationFinishResponse = {
  accessToken: 'accessTokenRand1',
  id: USER_STUB.id,
  username: USER_STUB.username,
  status: UserStatus.Registered,
};
