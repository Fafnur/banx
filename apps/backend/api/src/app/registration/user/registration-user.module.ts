import { Module } from '@nestjs/common';

import { PasswordsModule } from '../../passwords/passwords.module';
import { UsersModule } from '../../users/users.module';
import { RegistrationFormModule } from '../form/registration-form.module';
import { RegistrationProcessModule } from '../process/registration-process.module';
import { RegistrationUserController } from './registration-user.controller';
import { RegistrationUserService } from './registration-user.service';

@Module({
  controllers: [RegistrationUserController],
  imports: [RegistrationProcessModule, UsersModule, RegistrationFormModule, PasswordsModule],
  providers: [RegistrationUserService],
})
export class RegistrationUserModule {}
