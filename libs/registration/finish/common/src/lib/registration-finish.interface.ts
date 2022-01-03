import { UserAuth, UserStatus } from '@banx/users/common';

export interface RegistrationFinishResponse extends UserAuth {
  status: UserStatus;
}
