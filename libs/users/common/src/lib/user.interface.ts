export enum UserStatus {
  Created = 'created',
  Registered = 'registered',
  Verified = 'verified',
  Rejected = 'rejected',
  Removed = 'removed',
}

export interface User {
  id: number;
  username: string;
  phone: string;
  email: string;
  birthdate: string;
  createdAt: string;
  updatedAt: string;
  status: UserStatus;
}

export enum UserField {
  Username = 'username',
  Password = 'password',
  Phone = 'phone',
  Birthdate = 'birthdate',
}

export interface UserCredentials {
  phone: string;
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
