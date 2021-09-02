import { Controller, Get, NotFoundException, Request, UseGuards } from '@nestjs/common';

import { User, UserJwtCredentials } from '@banx/users/common';

import { JwtAuthGuard } from '../auth/jwt.guard';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

export function castUser(userEntity: UserEntity): User {
  const { password, ...user } = userEntity;

  return user;
}

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('user/profile')
  async getProfile(@Request() req: { user: UserJwtCredentials }): Promise<User> {
    const user = await this.userService.findOne(req.user.userId);

    if (!user) {
      throw new NotFoundException();
    }

    return castUser(user);
  }
}
