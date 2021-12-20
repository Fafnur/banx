import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegistrationProcessModule } from '../process/registration-process.module';
import { RegistrationDataController } from './registration-data.controller';
import { RegistrationDataEntity } from './registration-data.entity';
import { RegistrationDataService } from './registration-data.service';

@Module({
  controllers: [RegistrationDataController],
  imports: [TypeOrmModule.forFeature([RegistrationDataEntity]), RegistrationProcessModule],
  providers: [RegistrationDataService],
  exports: [RegistrationDataService],
})
export class RegistrationDataModule {}
