import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FingerprintController } from './fingerprint.controller';
import { FingerprintCanvasEntity } from './fingerprint-canvas.entity';
import { FingerprintCanvasService } from './fingerprint-canvas.service';
import { FingerprintFontEntity } from './fingerprint-font.entity';
import { FingerprintFontService } from './fingerprint-font.service';
import { FingerprintGeolocationEntity } from './fingerprint-geolocation.entity';
import { FingerprintGeolocationService } from './fingerprint-geolocation.service';

@Module({
  imports: [TypeOrmModule.forFeature([FingerprintFontEntity, FingerprintCanvasEntity, FingerprintGeolocationEntity])],
  providers: [FingerprintFontService, FingerprintCanvasService, FingerprintGeolocationService],
  controllers: [FingerprintController],
})
export class FingerprintsModule {}
