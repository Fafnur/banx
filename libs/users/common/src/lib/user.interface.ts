export interface User {
  id: number;
  username: string;
  phone: string;
  email: string;
  birthdate: string;
  createdAt: string;
  updatedAt: string;
}

export enum UserField {
  Username = 'username',
  Password = 'password',
  Phone = 'phone',
  Birthdate = 'birthdate',
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserSecrets {
  phone: string;
  birthdate: string;
}

export interface UserAuth {
  accessToken: string;
  id: number;
  username: string;
}

export interface UserJwtCredentials {
  userId: number;
  username: string;
}

export enum UserStorageKeys {
  AuthToken = 'authToken',
  Id = 'userId',
  Username = 'username',
}
