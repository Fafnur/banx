import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

import { RegistrationErrorCode, RegistrationErrorType, RegistrationFormField } from '@banx/registration/form/common';

import { RegistrationOtpEntity } from './registration-otp.entity';

export function getCode(): number {
  return Math.floor(1000 + Math.random() * 9000);
}

@Injectable()
export class RegistrationOtpService {
  constructor(
    @InjectRepository(RegistrationOtpEntity) private readonly registrationOtpEntityRepository: Repository<RegistrationOtpEntity>
  ) {}

  async valid(process: string, phone: string): Promise<boolean> {
    const otpEntity = (await this.registrationOtpEntityRepository.findOne({ process, phone })) ?? null;

    return otpEntity ? !!otpEntity.finished : false;
  }

  async checkAndSave(
    process: string,
    data: { [RegistrationFormField.SmsCode]: string; [RegistrationFormField.MobilePhone]: string }
  ): Promise<UpdateResult> {
    const otpEntity =
      (await this.registrationOtpEntityRepository.findOne({ process, phone: data[RegistrationFormField.MobilePhone] })) ?? null;

    if (!otpEntity || otpEntity.code !== +data[RegistrationFormField.SmsCode]) {
      throw new BadRequestException({
        [RegistrationFormField.SmsCode]: {
          [RegistrationErrorType.IsNotValid]: RegistrationErrorCode.IsNotValid,
        },
      });
    }

    return await this.registrationOtpEntityRepository.update({ id: otpEntity.id }, { finished: true });
  }

  async create(process: string, phone: string): Promise<RegistrationOtpEntity> {
    const otpEntity = (await this.registrationOtpEntityRepository.findOne({ process, phone })) ?? null;
    if (!otpEntity) {
      const code = getCode();

      return await this.registrationOtpEntityRepository.save(this.registrationOtpEntityRepository.create({ process, phone, code }));
    }

    return otpEntity;
  }

  async resend(process: string, phone: string): Promise<RegistrationOtpEntity | null> {
    const otpEntity = (await this.registrationOtpEntityRepository.findOne({ process, phone })) ?? null;
    if (otpEntity) {
      const code = getCode();
      await this.registrationOtpEntityRepository.update({ id: otpEntity.id }, { code });

      return (await this.registrationOtpEntityRepository.findOne({ id: otpEntity.id })) as RegistrationOtpEntity;
    }

    return null;
  }
}
