import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { User, UserStatus } from '@banx/users/common';

@Entity({
  name: 'users',
})
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.Created,
  })
  status!: UserStatus;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column({ type: 'date' })
  birthdate!: string;

  @Column()
  password!: string;

  @Column({ length: 50, unique: true })
  username!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: string;

  @UpdateDateColumn({ nullable: true, name: 'updated_at' })
  updatedAt!: string;
}
