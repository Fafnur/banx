import { Controller, Param, Post } from '@nestjs/common';

import { RegistrationFinishResponse } from '@banx/registration/finish/common';
import { RegistrationStepType } from '@banx/registration/process/common';

import { RegistrationProcessService } from '../process/registration-process.service';
import { RegistrationFinishService } from './registration-finish.service';

@Controller()
export class RegistrationFinishController {
  constructor(
    private readonly registrationProcessService: RegistrationProcessService,
    private readonly registrationUserService: RegistrationFinishService
  ) {}

  @Post('registration/:process/finish')
  async createUser(@Param() params: { process: string }): Promise<RegistrationFinishResponse> {
    const result = await this.registrationUserService.finish(params.process);

    return this.registrationProcessService.finishStep(params.process, RegistrationStepType.Finish).then(() => result);
  }
}
