import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegistrationProcessController } from './registration-process.controller';
import { RegistrationProcessEntity } from './registration-process.entity';
import { RegistrationProcessService } from './registration-process.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegistrationProcessEntity])],
  providers: [RegistrationProcessService],
  exports: [RegistrationProcessService],
  controllers: [RegistrationProcessController],
})
export class RegistrationProcessModule {}
