import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RegistrationForm } from '@banx/registration/form/common';

import { RegistrationFormEntity } from './registration-form.entity';

@Injectable()
export class RegistrationFormService {
  constructor(
    @InjectRepository(RegistrationFormEntity) private readonly registrationFormEntityRepository: Repository<RegistrationFormEntity>
  ) {}

  async getForm(process: string): Promise<RegistrationForm> {
    return (await this.registrationFormEntityRepository.findOne({ process })) ?? {};
  }

  async saveForm(process: string, form: RegistrationForm): Promise<RegistrationFormEntity> {
    const formEntity = (await this.registrationFormEntityRepository.findOne({ process })) ?? null;

    if (!formEntity) {
      return await this.registrationFormEntityRepository.save(this.registrationFormEntityRepository.create({ process, ...form }));
    } else {
      await this.registrationFormEntityRepository.update({ process }, form);

      return (await this.registrationFormEntityRepository.findOne({ process })) as RegistrationFormEntity;
    }
  }
}
