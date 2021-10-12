import { BadRequestException, Body, Controller, HttpCode, Post } from '@nestjs/common';

import { FingerprintDto, FingerprintFontsDetected } from '@banx/fingerprints/common';

import { FingerprintService } from './fingerprint.service';

@Controller()
export class FingerprintController {
  constructor(private readonly fingerprintService: FingerprintService) {}

  @Post('data/fonts')
  @HttpCode(204)
  async postFonts(@Body() payload: FingerprintDto<FingerprintFontsDetected>): Promise<void> {
    if (!payload || !payload?.visitor) {
      throw new BadRequestException();
    } else if (!payload.data || !Object.keys(payload.data).length) {
      console.log('Saved fonts is empty');
      return;
    }

    return this.fingerprintService.saveFonts(payload).then();
  }
}
