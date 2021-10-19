import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TrackerEventType, TrackerRecord } from '@banx/trackers/common';

@Entity({
  name: 'trackers',
})
export class TrackerEntity implements TrackerRecord {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'tinytext' })
  uid!: string;

  @Column({ type: 'tinytext' })
  visitor!: string;

  @Column({ type: 'tinytext' })
  type!: TrackerEventType;

  @Column({ type: 'tinytext' })
  element!: string;

  @Column({ type: 'text' })
  value!: string;

  @Column({ type: 'datetime' })
  time!: string;

  @Column({ type: 'tinytext' })
  url!: string;

  @Column({ nullable: true })
  user!: number;

  @Column('tinytext')
  keys!: string;

  @Column({ type: 'json', nullable: true })
  data!: Record<string, any>;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: string;
}
