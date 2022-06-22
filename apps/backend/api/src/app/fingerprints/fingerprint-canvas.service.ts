import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CanvasFingerprint, FingerprintDto } from '@banx/fingerprints/common';

import { md5 } from './fingerprint.utils';
import { FingerprintCanvasEntity } from './fingerprint-canvas.entity';

@Injectable()
export class FingerprintCanvasService {
  constructor(@InjectRepository(FingerprintCanvasEntity) private readonly canvasRepository: Repository<FingerprintCanvasEntity>) {}

  async save({ visitor, data, process }: FingerprintDto<CanvasFingerprint>): Promise<FingerprintCanvasEntity | null> {
    const fingerprint = md5(data.text);
    const record = await this.canvasRepository.findOneBy({ visitor, fingerprint });

    return !record ? await this.canvasRepository.save(this.canvasRepository.create({ visitor, fingerprint, data, process })) : null;
  }
}
