import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { uuidv4 } from '@banx/core/utils';
import { REGISTRATION_STEPS, RegistrationProcessDto, RegistrationStepDto, RegistrationStepType } from '@banx/registration/process/common';

import { RegistrationProcessEntity } from './registration-process.entity';

@Injectable()
export class RegistrationProcessService {
  constructor(
    @InjectRepository(RegistrationProcessEntity) private readonly registrationProcessEntityRepository: Repository<RegistrationProcessEntity>
  ) {}

  async getProcess(processId?: string): Promise<RegistrationProcessDto> {
    const processPrevious: RegistrationProcessEntity | undefined | null = processId
      ? await this.registrationProcessEntityRepository.findOneBy({ process: processId })
      : undefined;

    const process =
      !processId || !processPrevious
        ? await this.registrationProcessEntityRepository.save(this.registrationProcessEntityRepository.create({ process: uuidv4() }))
        : processPrevious;

    return {
      processId: process.process,
      finished: !!process?.finishedAt,
      steps: this.getSteps(process),
      user: process.user ?? null,
    };
  }

  async finishStep(process: string, step: string, user?: number): Promise<void> {
    const processEntity = await this.registrationProcessEntityRepository.findOneBy({ process });
    if (processEntity) {
      if (!processEntity.finishedSteps) {
        processEntity.finishedSteps = {};
      }
      processEntity.finishedSteps[step] = {
        name: step,
        finishedAt: new Date().toISOString(),
      };

      if (step === RegistrationStepType.User) {
        processEntity.user = user ?? null;
      } else if (step === RegistrationStepType.Finish) {
        processEntity.finishedAt = new Date().toISOString();
      }

      await this.registrationProcessEntityRepository.save(processEntity);
    }
  }

  private getSteps(process: RegistrationProcessEntity): RegistrationStepDto[] {
    return REGISTRATION_STEPS.map((stepName, index) => ({
      id: index + 1,
      name: stepName,
      finishedAt: process?.finishedSteps && process?.finishedSteps[stepName] ? process?.finishedSteps[stepName].finishedAt : null,
    }));
  }
}
