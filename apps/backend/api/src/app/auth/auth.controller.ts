import { Body, Controller, Post } from '@nestjs/common';

import { UserAuth, UserCredentials } from '@banx/users/common';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/login')
  async login(@Body() credentials: UserCredentials): Promise<UserAuth> {
    return this.authService.login(credentials);
  }
}
