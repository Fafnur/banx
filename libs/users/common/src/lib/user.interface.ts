export interface User {
  id: number;
  username: string;
  phone: string;
  email: string;
  birthdate: string;
  createdAt: string;
  updatedAt: string;
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
}

export interface UserJwtCredentials {
  userId: number;
  username: string;
}

export const AUTH_TOKEN = 'authToken';
