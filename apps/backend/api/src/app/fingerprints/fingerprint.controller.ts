import { BadRequestException, Body, Controller, HttpCode, Post } from '@nestjs/common';

import { CanvasFingerprint, FingerprintDto, FontsFingerprint } from '@banx/fingerprints/common';

import { FingerprintCanvasService } from './fingerprint-canvas.service';
import { FingerprintFontService } from './fingerprint-font.service';
import { FingerprintGeolocationService } from './fingerprint-geolocation.service';

@Controller()
export class FingerprintController {
  constructor(
    private readonly fontService: FingerprintFontService,
    private readonly canvasService: FingerprintCanvasService,
    private readonly geolocationService: FingerprintGeolocationService
  ) {}

  @Post('data/fonts')
  @HttpCode(204)
  async postFonts(@Body() payload: FingerprintDto<FontsFingerprint>): Promise<void> {
    if (!payload || !payload?.visitor) {
      throw new BadRequestException();
    } else if (!payload.data || !Object.keys(payload.data).length) {
      console.log('Saved fonts is empty');
      return;
    }

    return this.fontService.save(payload).then();
  }

  @Post('data/canvas')
  @HttpCode(204)
  async postCanvas(@Body() payload: FingerprintDto<CanvasFingerprint>): Promise<void> {
    if (!payload || !payload?.visitor) {
      throw new BadRequestException();
    } else if (!payload.data || !Object.keys(payload.data).length) {
      console.log('Canvas data is empty');
      return;
    }

    return this.canvasService.save(payload).then();
  }

  @Post('data/geolocation')
  @HttpCode(204)
  async postGeolocation(@Body() payload: FingerprintDto<GeolocationCoordinates | null>): Promise<void> {
    if (!payload || !payload?.visitor) {
      throw new BadRequestException();
    }

    return this.geolocationService.save(payload).then();
  }
}
