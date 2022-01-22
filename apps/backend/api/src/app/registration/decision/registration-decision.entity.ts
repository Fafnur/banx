import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({
  name: 'registration_decision',
})
export class RegistrationDecisionEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 36,
  })
  process!: string;

  @Column({
    type: 'float',
  })
  score!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: string;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt!: string | null;
}
