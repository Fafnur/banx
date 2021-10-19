import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { configurationFactory, typeOrmFactory } from './config/config';
import { FingerprintsModule } from './fingerprints/fingerprints.module';
import { RegistrationProcessModule } from './registration/process/registration-process.module';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
