import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createHash } from 'crypto';
import { Repository } from 'typeorm';

import { FingerprintDto, FingerprintFontsDetected } from '@banx/fingerprints/common';

import { FingerprintFontEntity } from './fingerprint-font.entity';

export function md5(contents: string): string {
  return createHash('md5').update(contents).digest('hex');
}

@Injectable()
export class FingerprintService {
  constructor(@InjectRepository(FingerprintFontEntity) private readonly fingerprintEntityRepository: Repository<FingerprintFontEntity>) {}

  async saveFonts({ visitor, data }: FingerprintDto<FingerprintFontsDetected>): Promise<FingerprintFontEntity | null> {
    const fingerprint = md5(
      Object.keys(data)
        .filter((key) => data[key])
        .join(',')
    );
    const record = await this.fingerprintEntityRepository.findOne({ visitor, fingerprint });

    return !record
      ? await this.fingerprintEntityRepository.save(this.fingerprintEntityRepository.create({ visitor, fingerprint, data }))
      : null;
  }
}
