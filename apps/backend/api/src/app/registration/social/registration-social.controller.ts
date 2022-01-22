import { Controller, Param, Post } from '@nestjs/common';

import { RegistrationStepType } from '@banx/registration/process/common';

import { RegistrationProcessService } from '../process/registration-process.service';

@Controller()
export class RegistrationSocialController {
  constructor(private readonly registrationProcessService: RegistrationProcessService) {}

  @Post('registration/:process/social')
  async finishSocial(@Param() params: { process: string }): Promise<void> {
    return this.registrationProcessService.finishStep(params.process, RegistrationStepType.Social).then();
  }
}
