import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TrackerRecord } from '@banx/trackers/common';

import { TrackerEntity } from './tracker.entity';

@Injectable()
export class TrackerService {
  constructor(@InjectRepository(TrackerEntity) private readonly trackerEntityRepository: Repository<TrackerEntity>) {}

  async add(records: TrackerRecord[]): Promise<TrackerEntity[]> {
    // NOTE: Don't use it on production. Use clickhouse.
    // TODO: You must exclude records that have already been saved.
    return this.trackerEntityRepository.save(this.trackerEntityRepository.create(records));
  }
}
