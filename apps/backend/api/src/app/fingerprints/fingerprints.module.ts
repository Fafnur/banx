import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FingerprintController } from './fingerprint.controller';
import { FingerprintService } from './fingerprint.service';
import { FingerprintFontEntity } from './fingerprint-font.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FingerprintFontEntity])],
  providers: [FingerprintService],
  exports: [FingerprintService],
  controllers: [FingerprintController],
})
export class FingerprintsModule {}
