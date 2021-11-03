import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { RegistrationForm } from '@banx/registration/form/common';

import { RegistrationFormService } from './registration-form.service';

@Controller()
export class RegistrationFormController {
  constructor(private readonly registrationFormService: RegistrationFormService) {}

  @Get('registration/form/:process')
  async getForm(@Param() params: { process: string }): Promise<RegistrationForm> {
    return this.registrationFormService.getForm(params.process);
  }

  @Post('registration/form/:process')
  async postForm(@Param() params: { process: string }, @Body() form: RegistrationForm): Promise<void> {
    return this.registrationFormService.saveForm(params.process, form).then();
  }

  @Post('registration/form/:process/validate')
  async validateForm(@Param() params: { process: string }, @Body() form: RegistrationForm): Promise<void> {
    // TODO: Add validate
    return this.registrationFormService.saveForm(params.process, form).then();
  }
}
