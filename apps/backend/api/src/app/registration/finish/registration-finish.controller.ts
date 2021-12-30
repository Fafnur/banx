import { Controller, Param, Post } from '@nestjs/common';

import { RegistrationStepType } from '@banx/registration/process/common';
import { UserStatus } from '@banx/users/common';

import { RegistrationProcessService } from '../process/registration-process.service';
import { RegistrationFinishService } from './registration-finish.service';

@Controller()
export class RegistrationFinishController {
  constructor(
    private readonly registrationProcessService: RegistrationProcessService,
    private readonly registrationUserService: RegistrationFinishService
  ) {}

  @Post('registration/:process/finish')
  async createUser(@Param() params: { process: string }): Promise<UserStatus> {
    const status = await this.registrationUserService.finish(params.process);

    return this.registrationProcessService.finishStep(params.process, RegistrationStepType.Finish).then(() => status);
  }
}
