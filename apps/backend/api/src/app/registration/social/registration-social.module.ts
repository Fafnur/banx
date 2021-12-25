import { Module } from '@nestjs/common';

import { RegistrationProcessModule } from '../process/registration-process.module';
import { RegistrationSocialController } from './registration-social.controller';

@Module({
  controllers: [RegistrationSocialController],
  imports: [RegistrationProcessModule],
})
export class RegistrationSocialModule {}
