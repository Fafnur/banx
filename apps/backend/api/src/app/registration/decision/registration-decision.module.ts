import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegistrationProcessModule } from '../process/registration-process.module';
import { RegistrationDecisionController } from './registration-decision.controller';
import { RegistrationDecisionEntity } from './registration-decision.entity';
import { RegistrationDecisionService } from './registration-decision.service';

@Module({
  controllers: [RegistrationDecisionController],
  imports: [TypeOrmModule.forFeature([RegistrationDecisionEntity]), RegistrationProcessModule],
  providers: [RegistrationDecisionService],
})
export class RegistrationDecisionModule {}
