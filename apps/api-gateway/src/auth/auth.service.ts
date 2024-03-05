import { LoginUserDto } from '@app/shared/dto/login-user.dto';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly client: ClientKafka,
  ) {}

  async login(loginUserDto: LoginUserDto) {
    return this.client.send('auth.login', JSON.stringify(loginUserDto));
  }

  async validateUser(username: string, password: string) {
    return this.client.send(
      'auth.validate',
      JSON.stringify({ username, password }),
    );
  }

  async onModuleInit() {
    ['auth.validate', 'auth.login'].forEach((key) =>
      this.client.subscribeToResponseOf(key),
    );
  }
}
