import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { configurationFactory, typeOrmFactory } from './config/config';
import { FingerprintsModule } from './fingerprints/fingerprints.module';
import { PasswordsModule } from './passwords/passwords.module';
import { RegistrationDataModule } from './registration/data/registration-data.module';
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
    PasswordsModule,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
