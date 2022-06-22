import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@banx/users/common';

import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  async find(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<UserEntity | null> {
    return (await this.userRepository.findOneBy({ id })) ?? null;
  }

  async findOneByUsername(username: string): Promise<UserEntity | null> {
    const users = await this.userRepository.findBy({ username });

    return users.length === 1 ? users[0] : null;
  }

  async findOneByPhone(phone: string): Promise<UserEntity | null> {
    const users = await this.userRepository.findBy({ phone });

    return users.length === 1 ? users[0] : null;
  }

  async findOneByPhoneAndBirthdate(phone: string, birthdate: string): Promise<UserEntity | null> {
    const user = await this.userRepository.findOneBy({ phone, birthdate });

    return user ?? null;
  }

  async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    const newUser = await this.userRepository.create(user);

    return this.userRepository.save(newUser);
  }

  async updatePassword(user: Partial<UserEntity>, password: string): Promise<void> {
    return await this.userRepository.update({ id: user.id }, { password }).then();
  }

  async update(id: number, data: Partial<User>): Promise<void> {
    return await this.userRepository.update({ id }, data).then();
  }
}
