import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { RegistrationFinishResponse } from '@banx/registration/finish/common';
import { UserStatus } from '@banx/users/common';

import { UserService } from '../../users/user.service';
import { RegistrationConversionService } from '../conversion/registration-conversion.service';
import { RegistrationProcessService } from '../process/registration-process.service';

@Injectable()
export class RegistrationFinishService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly registrationProcessService: RegistrationProcessService,
    private readonly registrationConversionService: RegistrationConversionService
  ) {}

  async finish(process: string): Promise<RegistrationFinishResponse> {
    const processEntity = await this.registrationProcessService.getProcess(process);
    const conversionEntity = await this.registrationConversionService.conversion(process);

    if (!processEntity?.user) {
      throw new BadRequestException();
    }

    const user = (await this.userService.findOne(processEntity.user)) ?? null;
    if (!user) {
      throw new BadRequestException();
    }

    const status =
      conversionEntity.conversion >= 0.75
        ? UserStatus.Verified
        : conversionEntity.conversion >= 0.5
        ? UserStatus.Registered
        : UserStatus.Rejected;

    await this.userService.update(processEntity.user, { status });

    return {
      status,
      accessToken: this.jwtService.sign({ username: user.username, userId: user.id }),
      id: user.id,
      username: user?.username,
    };
  }
}
