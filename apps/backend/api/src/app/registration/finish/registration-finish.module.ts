import { Module } from '@nestjs/common';

import { UsersModule } from '../../users/users.module';
import { RegistrationConversionModule } from '../conversion/registration-conversion.module';
import { RegistrationProcessModule } from '../process/registration-process.module';
import { RegistrationFinishController } from './registration-finish.controller';
import { RegistrationFinishService } from './registration-finish.service';

@Module({
  controllers: [RegistrationFinishController],
  imports: [RegistrationProcessModule, UsersModule, RegistrationConversionModule],
  providers: [RegistrationFinishService],
})
export class RegistrationFinishModule {}
