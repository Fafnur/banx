import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { RegistrationFormField } from '@banx/registration/form/common';
import { RegistrationFormSubSteps } from '@banx/registration/process/common';

import { RegistrationOtpService } from './registration-otp.service';

@Controller()
export class RegistrationOtpController {
  constructor(private readonly registrationOtpService: RegistrationOtpService) {}

  @Post(`registration/form/:process/validate/${RegistrationFormSubSteps.Sms}`)
  @UsePipes(new ValidationPipe({ transform: true, groups: [RegistrationFormSubSteps.Sms] }))
  async validateFormSms(
    @Param() params: { process: string },
    @Body() form: { [RegistrationFormField.SmsCode]: string; [RegistrationFormField.MobilePhone]: string }
  ): Promise<void> {
    return this.registrationOtpService.checkAndSave(params.process, form).then();
  }

  @Post(`registration/form/:process/sms/send`)
  async resend(@Param() params: { process: string }, @Body() form: { [RegistrationFormField.MobilePhone]: string }): Promise<void> {
    return this.registrationOtpService.resend(params.process, form[RegistrationFormField.MobilePhone]).then();
  }
}
