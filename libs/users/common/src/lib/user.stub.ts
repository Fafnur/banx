import { User, UserAuth, UserCredentials, UserSecrets } from './user.interface';

export const USER_STUB: User = {
  id: 1,
  username: 'alex',
  phone: '9002002233',
  email: 'alex@alex.ru',
  birthdate: '2020-01-01',
  createdAt: '2021-09-02T23:58:19.100Z',
  updatedAt: '2021-09-02T23:58:19.100Z',
};

export const USER_CREDENTIALS_STUB: UserCredentials = {
  phone: USER_STUB.phone,
  password: 'MySecretPassword2020',
};

export const USER_SECRETS_STUB: UserSecrets = {
  phone: USER_STUB.phone,
  birthdate: USER_STUB.birthdate,
};

export const USER_AUTH_STUB: UserAuth = {
  accessToken: 'accessTokenRand1',
  id: USER_STUB.id,
  username: USER_STUB.username,
};
