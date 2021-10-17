import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FingerprintDto } from '@banx/fingerprints/common';

import { md5 } from './fingerprint.utils';
import { FingerprintGeolocationEntity } from './fingerprint-geolocation.entity';

@Injectable()
export class FingerprintGeolocationService {
  constructor(
    @InjectRepository(FingerprintGeolocationEntity) private readonly geolocationEntityRepository: Repository<FingerprintGeolocationEntity>
  ) {}

  async save({ visitor, data }: FingerprintDto<GeolocationCoordinates | null>): Promise<FingerprintGeolocationEntity | null> {
    // Note: DON'T USE IT ON PRODUCTION.
    // Here we are using coordinates as a fingerprint, but this is not correct.
    // You need to use this data to determine the country and subject.
    const fingerprint = md5(data ? `${data.latitude.toFixed(4)}${data.longitude.toFixed(4)}` : 'decline');
    const record = await this.geolocationEntityRepository.findOne({ visitor, fingerprint });

    return !record
      ? await this.geolocationEntityRepository.save(this.geolocationEntityRepository.create({ visitor, fingerprint, data: data ?? {} }))
      : null;
  }
}
