import { Controller, Get, Param, Post } from '@nestjs/common';

import { RegistrationStepType } from '@banx/registration/process/common';

import { RegistrationProcessService } from '../process/registration-process.service';
import { RegistrationConversionService } from './registration-conversion.service';

@Controller()
export class RegistrationConversionController {
  constructor(
    private readonly registrationProcessService: RegistrationProcessService,
    private readonly registrationDecisionService: RegistrationConversionService
  ) {}

  @Get('registration/:process/conversion')
  async getConversion(@Param() params: { process: string }): Promise<{ conversion: number }> {
    return this.registrationDecisionService.conversion(params.process);
  }

  @Post('registration/:process/conversion')
  async finishConversion(@Param() params: { process: string }): Promise<void> {
    await this.registrationDecisionService.conversion(params.process);

    return this.registrationProcessService.finishStep(params.process, RegistrationStepType.Conversion).then();
  }
}
