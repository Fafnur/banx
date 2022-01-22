import { Controller, Get, Param } from '@nestjs/common';

import { RegistrationProcessDto } from '@banx/registration/process/common';

import { RegistrationProcessService } from './registration-process.service';

@Controller()
export class RegistrationProcessController {
  constructor(private readonly registrationProcessService: RegistrationProcessService) {}

  @Get('registration/:processId?')
  async getProcess(@Param() params: { processId?: string }): Promise<RegistrationProcessDto> {
    return this.registrationProcessService.getProcess(params?.processId);
  }
}
