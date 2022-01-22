import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { configurationFactory, typeOrmFactory } from './config/config';
import { FingerprintsModule } from './fingerprints/fingerprints.module';
import { RegistrationConversionModule } from './registration/conversion/registration-conversion.module';
import { RegistrationDataModule } from './registration/data/registration-data.module';
import { RegistrationDecisionModule } from './registration/decision/registration-decision.module';
import { RegistrationFinishModule } from './registration/finish/registration-finish.module';
import { RegistrationFormModule } from './registration/form/registration-form.module';
import { RegistrationOtpModule } from './registration/otp/registration-otp.module';
import { RegistrationProcessModule } from './registration/process/registration-process.module';
import { RegistrationSocialModule } from './registration/social/registration-social.module';
import { RegistrationUserModule } from './registration/user/registration-user.module';
import { TrackersModule } from './trackers/trackers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../../.env',
      isGlobal: true,
      load: [configurationFactory],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmFactory,
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    TrackersModule,
    FingerprintsModule,
    RegistrationProcessModule,
    RegistrationFormModule,
    RegistrationOtpModule,
    RegistrationDataModule,
    RegistrationSocialModule,
    RegistrationUserModule,
    RegistrationDecisionModule,
    RegistrationConversionModule,
    RegistrationFinishModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
