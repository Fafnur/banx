import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FingerprintController } from './fingerprint.controller';
import { FingerprintCanvasEntity } from './fingerprint-canvas.entity';
import { FingerprintCanvasService } from './fingerprint-canvas.service';
import { FingerprintFontEntity } from './fingerprint-font.entity';
import { FingerprintFontService } from './fingerprint-font.service';

@Module({
  imports: [TypeOrmModule.forFeature([FingerprintFontEntity, FingerprintCanvasEntity])],
  providers: [FingerprintFontService, FingerprintCanvasService],
  controllers: [FingerprintController],
})
export class FingerprintsModule {}
