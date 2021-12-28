import { Controller, Param, Post } from '@nestjs/common';

import { RegistrationStepType } from '@banx/registration/process/common';

import { RegistrationProcessService } from '../process/registration-process.service';
import { RegistrationDecisionService } from './registration-decision.service';

@Controller()
export class RegistrationDecisionController {
  constructor(
    private readonly registrationProcessService: RegistrationProcessService,
    private readonly registrationDecisionService: RegistrationDecisionService
  ) {}

  @Post('registration/:process/decision')
  async resend(@Param() params: { process: string }): Promise<void> {
    await this.registrationDecisionService.decision(params.process);

    return this.registrationProcessService.finishStep(params.process, RegistrationStepType.Decision).then();
  }
}
