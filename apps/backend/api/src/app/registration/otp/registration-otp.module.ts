import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegistrationProcessModule } from '../process/registration-process.module';
import { RegistrationOtpController } from './registration-otp.controller';
import { RegistrationOtpEntity } from './registration-otp.entity';
import { RegistrationOtpService } from './registration-otp.service';

@Module({
  controllers: [RegistrationOtpController],
  imports: [TypeOrmModule.forFeature([RegistrationOtpEntity]), RegistrationProcessModule],
  providers: [RegistrationOtpService],
  exports: [RegistrationOtpService],
})
export class RegistrationOtpModule {}
