import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegistrationFormController } from './registration-form.controller';
import { RegistrationFormEntity } from './registration-form.entity';
import { RegistrationFormService } from './registration-form.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegistrationFormEntity])],
  providers: [RegistrationFormService],
  exports: [RegistrationFormService],
  controllers: [RegistrationFormController],
})
export class RegistrationFormModule {}
