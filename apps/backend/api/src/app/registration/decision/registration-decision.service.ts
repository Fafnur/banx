import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RegistrationDecisionEntity } from './registration-decision.entity';

@Injectable()
export class RegistrationDecisionService {
  constructor(
    @InjectRepository(RegistrationDecisionEntity)
    private readonly registrationDecisionEntityRepository: Repository<RegistrationDecisionEntity>
  ) {}

  async decision(process: string): Promise<RegistrationDecisionEntity> {
    let decisionEntity = (await this.registrationDecisionEntityRepository.findOneBy({ process })) ?? null;

    const score = Math.random();

    if (decisionEntity) {
      decisionEntity.score = score;
      await this.registrationDecisionEntityRepository.update({ id: decisionEntity.id }, { score });
    } else {
      decisionEntity = await this.registrationDecisionEntityRepository.save(
        this.registrationDecisionEntityRepository.create({ process, score })
      );
    }

    return decisionEntity;
  }
}
