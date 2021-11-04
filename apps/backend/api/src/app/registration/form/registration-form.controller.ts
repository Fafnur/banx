import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { RegistrationForm } from '@banx/registration/form/common';
import { RegistrationFormSubSteps, RegistrationStepType } from '@banx/registration/process/common';

import { RegistrationProcessService } from '../process/registration-process.service';
import { RegistrationFormDto } from './registration-form.dto';
import { RegistrationFormService } from './registration-form.service';

@Controller()
export class RegistrationFormController {
  constructor(
    private readonly registrationFormService: RegistrationFormService,
    private readonly registrationProcessService: RegistrationProcessService
  ) {}

  @Get('registration/form/:process')
  async getForm(@Param() params: { process: string }): Promise<RegistrationForm> {
    return this.registrationFormService.getForm(params.process);
  }

  @Post('registration/form/:process')
  async postForm(@Param() params: { process: string }, @Body() form: RegistrationForm): Promise<void> {
    return this.registrationFormService.saveForm(params.process, form).then();
  }

  @Post(`registration/form/:process/validate/${RegistrationFormSubSteps.Personal}`)
  @UsePipes(new ValidationPipe({ transform: true, groups: [RegistrationFormSubSteps.Personal] }))
  async validateFormPersonal(@Param() params: { process: string }, @Body() form: RegistrationFormDto): Promise<void> {
    return this.registrationFormService.saveForm(params.process, form).then();
  }

  @Post(`registration/form/:process/validate/${RegistrationFormSubSteps.Family}`)
  @UsePipes(new ValidationPipe({ transform: true, groups: [] }))
  async validateFormFamily(@Param() params: { process: string }, @Body() form: RegistrationFormDto): Promise<void> {
    return this.registrationFormService.saveForm(params.process, form).then();
  }

  @Post(`registration/form/:process/validate/${RegistrationFormSubSteps.Employment}`)
  @UsePipes(new ValidationPipe({ transform: true, groups: [RegistrationFormSubSteps.Employment] }))
  async validateFormEmployment(@Param() params: { process: string }, @Body() form: RegistrationFormDto): Promise<void> {
    return this.registrationFormService.saveForm(params.process, form).then();
  }

  @Post(`registration/form/:process/validate/${RegistrationFormSubSteps.Additional}`)
  @UsePipes(new ValidationPipe({ transform: true, groups: [RegistrationFormSubSteps.Additional] }))
  async validateFormAdditional(@Param() params: { process: string }, @Body() form: RegistrationFormDto): Promise<void> {
    return this.registrationFormService.saveForm(params.process, form).then();
  }

  @Post('registration/form/:process/create')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      groups: [
        RegistrationFormSubSteps.Personal,
        RegistrationFormSubSteps.Family,
        RegistrationFormSubSteps.Employment,
        RegistrationFormSubSteps.Additional,
      ],
    })
  )
  async createForm(@Param() params: { process: string }, @Body() form: RegistrationFormDto): Promise<void> {
    await this.registrationFormService.saveForm(params.process, form);
    await this.registrationProcessService.finishStep(params.process, RegistrationStepType.Form);
  }
}
