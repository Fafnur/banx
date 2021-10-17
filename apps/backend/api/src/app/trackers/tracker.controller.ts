import { BadRequestException, Body, Controller, HttpCode, Post } from '@nestjs/common';

import { TrackerRecordsDto } from '@banx/trackers/common';

import { TrackerService } from './tracker.service';

@Controller()
export class TrackerController {
  constructor(private readonly trackerService: TrackerService) {}

  @Post('trackers/records')
  @HttpCode(204)
  async postRecords(@Body() recordsDto: TrackerRecordsDto): Promise<void> {
    if (!recordsDto || !recordsDto?.visitor) {
      throw new BadRequestException();
    } else if (!recordsDto.records.length) {
      return;
    }

    return this.trackerService.add(recordsDto.records.map((record) => ({ ...record, visitor: recordsDto.visitor }))).then();
  }
}
