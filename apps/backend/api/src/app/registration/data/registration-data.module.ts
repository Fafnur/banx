import { Module } from '@nestjs/common';

import { RegistrationProcessModule } from '../process/registration-process.module';
import { RegistrationDataController } from './registration-data.controller';

@Module({
  controllers: [RegistrationDataController],
  imports: [RegistrationProcessModule],
})
export class RegistrationDataModule {}
