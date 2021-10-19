import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export interface FinishedStep<T extends string = string> {
  name: T;
  finishedAt: string;
}

@Entity({
  name: 'registration_process',
})
export class RegistrationProcessEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'tinytext', unique: true })
  process!: string;

  @Column({ type: 'tinytext', nullable: true })
  user!: number;

  @Column({ type: 'json', nullable: true, name: 'finished_steps' })
  finishedSteps!: Record<string, FinishedStep>;

  @Column({ type: 'datetime', nullable: true, name: 'finished_at' })
  finishedAt!: string;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn({ nullable: true })
  updatedAt!: string;
}
