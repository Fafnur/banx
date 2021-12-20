import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({
  name: 'registration_otp',
})
export class RegistrationDataEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 36,
  })
  process!: string;

  @Column({
    type: 'int',
  })
  code!: number;

  @Column({
    type: 'tinytext',
  })
  phone!: string;

  @Column({
    type: 'boolean',
    nullable: true,
  })
  finished!: boolean | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: string;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt!: string | null;
}
