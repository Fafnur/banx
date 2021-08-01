export interface User {
  id: number;
  username: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserAuth {
  accessToken: string;
  id: number;
}
