import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { User, UserAuth, UserCredentials, UserSecrets, UserStatus } from '@banx/users/common';

import { PasswordService } from '../passwords/password.service';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService
  ) {}

  async validateUser(credentials: UserCredentials): Promise<Omit<User, 'password'> | null> {
    const user = await this.userService.findOneByPhone(credentials.phone);

    const valid = user ? await this.passwordService.compareHash(credentials.password, user.password) : false;

    if (user && valid) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async validateUserSecrets(secrets: UserSecrets): Promise<User | null> {
    const user = await this.userService.findOneByPhoneAndBirthdate(secrets.phone, secrets.birthdate);

    return user ?? null;
  }

  async login(credentials: UserCredentials): Promise<UserAuth> {
    const user = await this.validateUser(credentials);

    if (!user || user.status === UserStatus.Created) {
      throw new UnauthorizedException();
    }

    return {
      accessToken: this.jwtService.sign({ username: user.username, userId: user.id }),
      id: user.id,
      username: user.username,
    };
  }

  async recovery(secrets: UserSecrets): Promise<void> {
    const user = await this.validateUserSecrets(secrets);

    if (!user) {
      throw new BadRequestException();
    }
    const password = this.passwordService.generatePassword();
    // NOTE: DON'T USE IT ON PRODUCTION.
    console.log(password);

    const hash = await this.passwordService.getHash(password);

    return await this.userService.updatePassword(user, hash).then(() => undefined);
  }
}
