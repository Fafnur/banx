import { Module } from '@nestjs/common';

import { UsersModule } from '../../users/users.module';
import { RegistrationFormModule } from '../form/registration-form.module';
import { RegistrationProcessModule } from '../process/registration-process.module';
import { RegistrationUserController } from './registration-user.controller';

@Module({
  controllers: [RegistrationUserController],
  imports: [RegistrationProcessModule, UsersModule, RegistrationFormModule],
})
export class RegistrationUserModule {}
