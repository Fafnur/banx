import { BadRequestException, Body, Controller, Get, Param, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';

import { RegistrationForm, RegistrationFormCreate } from '@banx/registration/form/common';
import { RegistrationFormSubSteps, RegistrationStepType } from '@banx/registration/process/common';

import { RegistrationOtpService } from '../otp/registration-otp.service';
import { RegistrationProcessService } from '../process/registration-process.service';
import { RegistrationCreateConverterPipe } from './registration-create-converter.pipe';
import { RegistrationFormDto } from './registration-form.dto';
import { registrationFormExceptionFactory } from './registration-form.exception-factory';
import { RegistrationFormService } from './registration-form.service';

export interface RegistrationFormParams {
  process: string;
}

@Controller()
export class RegistrationFormController {
  constructor(
    private readonly registrationOtpService: RegistrationOtpService,
    private readonly registrationFormService: RegistrationFormService,
    private readonly registrationProcessService: RegistrationProcessService
  ) {}

  @Get('registration/:process/form')
  async getForm(@Param() params: RegistrationFormParams): Promise<RegistrationForm> {
    return this.registrationFormService.getForm(params.process);
  }

  @Post('registration/:process/form')
  async postForm(@Param() params: RegistrationFormParams, @Body() form: RegistrationForm): Promise<void> {
    return this.registrationFormService.saveForm(params.process, form).then();
  }

  @Post(`registration/:process/form/validate/${RegistrationFormSubSteps.Personal}`)
  @UsePipes(
    new ValidationPipe({
      transform: true,
      groups: [RegistrationFormSubSteps.Personal],
      exceptionFactory: (validationErrors) => registrationFormExceptionFactory(validationErrors),
    })
  )
  async validateFormPersonal(@Param() params: RegistrationFormParams, @Body() form: RegistrationFormDto): Promise<void> {
    return this.registrationFormService.saveForm(params.process, form).then(() => {
      if (form.mobilePhone) {
        return this.registrationOtpService.create(params.process, form.mobilePhone).then();
      }

      return undefined;
    });
  }

  @Post(`registration/:process/form/validate/${RegistrationFormSubSteps.Family}`)
  @UsePipes(
    new ValidationPipe({
      transform: true,
      groups: [RegistrationFormSubSteps.Family],
      exceptionFactory: (validationErrors) => registrationFormExceptionFactory(validationErrors),
    })
  )
  async validateFormFamily(@Param() params: RegistrationFormParams, @Body() form: RegistrationFormDto): Promise<void> {
    return this.registrationFormService.saveForm(params.process, form).then();
  }

  @Post(`registration/:process/form/validate/${RegistrationFormSubSteps.Employment}`)
  @UsePipes(
    new ValidationPipe({
      transform: true,
      groups: [RegistrationFormSubSteps.Employment],
      exceptionFactory: (validationErrors) => registrationFormExceptionFactory(validationErrors),
    })
  )
  async validateFormEmployment(@Param() params: RegistrationFormParams, @Body() form: RegistrationFormDto): Promise<void> {
    return this.registrationFormService.saveForm(params.process, form).then();
  }

  @Post(`registration/:process/form/validate/${RegistrationFormSubSteps.Additional}`)
  @UsePipes(
    new ValidationPipe({
      transform: true,
      groups: [RegistrationFormSubSteps.Additional],
      exceptionFactory: (validationErrors) => registrationFormExceptionFactory(validationErrors),
    })
  )
  async validateFormAdditional(@Param() params: RegistrationFormParams, @Body() form: RegistrationFormDto): Promise<void> {
    return this.registrationFormService.saveForm(params.process, form).then();
  }

  @Post('registration/:process/form/create')
  @UsePipes(
    new RegistrationCreateConverterPipe(),
    new ValidationPipe({
      transform: true,
      groups: [
        RegistrationFormSubSteps.Personal,
        RegistrationFormSubSteps.Family,
        RegistrationFormSubSteps.Employment,
        RegistrationFormSubSteps.Additional,
      ],
      exceptionFactory: (validationErrors) => registrationFormExceptionFactory(validationErrors),
    })
  )
  async createForm(@Req() req: { params: { process: string }; body: RegistrationFormCreate }): Promise<void> {
    if (!(await this.registrationOtpService.valid(req.params.process, req.body.form.mobilePhone))) {
      throw new BadRequestException({ message: 'The phone is not verified' });
    }
    await this.registrationFormService.saveForm(req.params.process, { ...req.body.form, ...req.body.additional });
    await this.registrationProcessService.finishStep(req.params.process, RegistrationStepType.Form);
  }
}
