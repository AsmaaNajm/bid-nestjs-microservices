import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '@app/entity/user.entity';
import { CreateUserDto } from '@app/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class UserService {
  constructor(
    @InjectMapper()
    private readonly mapper: Mapper,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    const user = this.mapper.map(userDto, User);

    // const user = new User();
    // user.firstname = userDto.firstname;
    // user.lastname = userDto.lastname;
    // user.email = userDto.email;
    // user.username = userDto.username;
    // user.password = await this.hashData(userDto.password);
    return await this.userRepository.save(user);
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { username } });
  }

  async getUserById(id: number): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async updateUser(id: number, updateUserDto: Partial<User>): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    return await this.getUserById(id);
  }

  async deleteUser(id: number): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return result.affected > 0;
  }

  hashData(data: string) {
    return argon2.hash(data);
  }
}
