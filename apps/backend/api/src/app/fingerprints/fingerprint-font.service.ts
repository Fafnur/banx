import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FingerprintDto, FontsFingerprint } from '@banx/fingerprints/common';

import { md5 } from './fingerprint.utils';
import { FingerprintFontEntity } from './fingerprint-font.entity';

@Injectable()
export class FingerprintFontService {
  constructor(@InjectRepository(FingerprintFontEntity) private readonly fontRepository: Repository<FingerprintFontEntity>) {}

  async save({ visitor, data, process }: FingerprintDto<FontsFingerprint>): Promise<FingerprintFontEntity | null> {
    const fingerprint = md5(
      Object.keys(data)
        .filter((key) => data[key])
        .join(',')
    );
    const record = await this.fontRepository.findOne({ visitor, fingerprint });

    return !record ? await this.fontRepository.save(this.fontRepository.create({ visitor, fingerprint, data, process })) : null;
  }
}
