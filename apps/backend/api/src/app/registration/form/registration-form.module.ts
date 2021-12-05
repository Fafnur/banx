import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegistrationOtpModule } from '../otp/registration-otp.module';
import { RegistrationProcessModule } from '../process/registration-process.module';
import { RegistrationFormController } from './registration-form.controller';
import { RegistrationFormEntity } from './registration-form.entity';
import { RegistrationFormService } from './registration-form.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegistrationFormEntity]), RegistrationProcessModule, RegistrationOtpModule],
  providers: [RegistrationFormService],
  exports: [RegistrationFormService],
  controllers: [RegistrationFormController],
})
export class RegistrationFormModule {}
