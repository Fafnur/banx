import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({
  name: 'registration_conversion',
})
export class RegistrationConversionEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 36,
  })
  process!: string;

  @Column({
    type: 'float',
  })
  conversion!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: string;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt!: string | null;
}
