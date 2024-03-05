import { CreateUserDto } from '@app/dto/create-user.dto';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @Inject('USER_MICROSERVICE') private readonly client: ClientKafka,
  ) {}

  register(createUserDto: CreateUserDto) {
    return this.client.send('register-user', JSON.stringify(createUserDto));
  }

  onModuleInit() {
    this.client.subscribeToResponseOf('register-user');
  }
}
