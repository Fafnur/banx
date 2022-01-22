import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { environment } from '../../../environments/environment';
import { UsersModule } from '../../users/users.module';
import { RegistrationConversionModule } from '../conversion/registration-conversion.module';
import { RegistrationProcessModule } from '../process/registration-process.module';
import { RegistrationFinishController } from './registration-finish.controller';
import { RegistrationFinishService } from './registration-finish.service';

@Module({
  controllers: [RegistrationFinishController],
  imports: [
    RegistrationProcessModule,
    UsersModule,
    RegistrationConversionModule,
    // TODO: Dirty hotfix
    JwtModule.register({
      secret: environment.jwt.secret,
      signOptions: { expiresIn: environment.jwt.expiresIn },
    }),
  ],
  providers: [RegistrationFinishService],
})
export class RegistrationFinishModule {}
