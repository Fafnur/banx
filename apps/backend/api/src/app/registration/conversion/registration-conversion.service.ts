import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RegistrationConversionEntity } from './registration-conversion.entity';

@Injectable()
export class RegistrationConversionService {
  constructor(
    @InjectRepository(RegistrationConversionEntity)
    private readonly registrationConversionEntityRepository: Repository<RegistrationConversionEntity>
  ) {}

  async conversion(process: string): Promise<{ conversion: number }> {
    const conversionEntity = (await this.registrationConversionEntityRepository.findOneBy({ process })) ?? null;
    const conversion = conversionEntity?.conversion ?? Math.random() * 1000;

    if (!conversionEntity) {
      await this.registrationConversionEntityRepository.save(this.registrationConversionEntityRepository.create({ process, conversion }));
    }

    return { conversion };
  }
}
