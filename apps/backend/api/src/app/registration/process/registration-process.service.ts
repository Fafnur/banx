import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { uuidv4 } from '@banx/core/utils';
import { RegistrationProcessDto, RegistrationStepDto, RegistrationStepType } from '@banx/registration/process/common';

import { RegistrationProcessEntity } from './registration-process.entity';

@Injectable()
export class RegistrationProcessService {
  constructor(
    @InjectRepository(RegistrationProcessEntity) private readonly registrationProcessEntityRepository: Repository<RegistrationProcessEntity>
  ) {}

  async getProcess(processId?: string): Promise<RegistrationProcessDto> {
    const processPrevious: RegistrationProcessEntity | undefined = processId
      ? await this.registrationProcessEntityRepository.findOne({ process: processId })
      : undefined;

    const process =
      !processId || !processPrevious
        ? await this.registrationProcessEntityRepository.save(this.registrationProcessEntityRepository.create({ process: uuidv4() }))
        : processPrevious;

    return {
      processId: process.process,
      finished: !!process?.finishedAt,
      steps: this.getSteps(process),
    };
  }

  private getSteps(process: RegistrationProcessEntity): Record<string, RegistrationStepDto> {
    // TODO: Move to envs or config
    const stepsNames: RegistrationStepType[] = [
      RegistrationStepType.Form,
      RegistrationStepType.Data,
      RegistrationStepType.Social,
      RegistrationStepType.User,
      RegistrationStepType.Decision,
      RegistrationStepType.Conversion,
      RegistrationStepType.Finish,
    ];
    const steps: Record<string, RegistrationStepDto> = {};

    stepsNames.forEach((stepName) => {
      steps[stepName] = {
        name: stepName,
        finishedAt: process?.finishedSteps && process?.finishedSteps[stepName] ? process?.finishedSteps[stepName].finishedAt : null,
      };
    });

    return steps;
  }
}
