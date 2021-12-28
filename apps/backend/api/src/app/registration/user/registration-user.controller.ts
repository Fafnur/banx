import { Controller, Param, Post } from '@nestjs/common';

import { RegistrationStepType } from '@banx/registration/process/common';

import { RegistrationProcessService } from '../process/registration-process.service';
import { RegistrationUserService } from './registration-user.service';

@Controller()
export class RegistrationUserController {
  constructor(
    private readonly registrationProcessService: RegistrationProcessService,
    private readonly registrationUserService: RegistrationUserService
  ) {}

  @Post('registration/:process/user')
  async createUser(@Param() params: { process: string }): Promise<void> {
    const user = await this.registrationUserService.registerUser(params.process);

    return this.registrationProcessService.finishStep(params.process, RegistrationStepType.User, user.id).then();
  }
}
