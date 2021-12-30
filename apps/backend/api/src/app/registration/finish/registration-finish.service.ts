import { BadRequestException, Injectable } from '@nestjs/common';

import { UserStatus } from '@banx/users/common';

import { UserService } from '../../users/user.service';
import { RegistrationConversionService } from '../conversion/registration-conversion.service';
import { RegistrationProcessService } from '../process/registration-process.service';

@Injectable()
export class RegistrationFinishService {
  constructor(
    private readonly userService: UserService,
    private readonly registrationProcessService: RegistrationProcessService,
    private readonly registrationConversionService: RegistrationConversionService
  ) {}

  async finish(process: string): Promise<void> {
    const processEntity = await this.registrationProcessService.getProcess(process);
    const conversionEntity = await this.registrationConversionService.conversion(process);

    if (!processEntity?.user) {
      throw new BadRequestException();
    }
    const status =
      conversionEntity.conversion >= 0.75
        ? UserStatus.Verified
        : conversionEntity.conversion >= 0.5
        ? UserStatus.Registered
        : UserStatus.Rejected;

    return this.userService.update(processEntity.user, { status });
  }
}
