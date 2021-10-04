import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TrackerController } from './tracker.controller';
import { TrackerEntity } from './tracker.entity';
import { TrackerService } from './tracker.service';

@Module({
  imports: [TypeOrmModule.forFeature([TrackerEntity])],
  providers: [TrackerService],
  exports: [TrackerService],
  controllers: [TrackerController],
})
export class TrackersModule {}
