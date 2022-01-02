import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegistrationProcessModule } from '../process/registration-process.module';
import { RegistrationConversionController } from './registration-conversion.controller';
import { RegistrationConversionEntity } from './registration-conversion.entity';
import { RegistrationConversionService } from './registration-conversion.service';

@Module({
  controllers: [RegistrationConversionController],
  imports: [TypeOrmModule.forFeature([RegistrationConversionEntity]), RegistrationProcessModule],
  providers: [RegistrationConversionService],
  exports: [RegistrationConversionService],
})
export class RegistrationConversionModule {}
