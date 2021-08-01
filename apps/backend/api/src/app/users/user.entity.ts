import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { User } from '@banx/users/common';

@Entity({
  name: 'users',
})
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  password!: string;

  @Column({ length: 50, unique: true })
  username!: string;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn({ nullable: true })
  updatedAt!: string;
}
