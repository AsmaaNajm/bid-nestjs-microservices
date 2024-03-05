import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@app/dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('register-user')
  async register(@Payload() createUserDto: CreateUserDto) {
    const user = await this.userService.createUser(createUserDto);
    return JSON.stringify(user);
  }

  @MessagePattern('get-user')
  async get(@Payload() username: string) {
    const user = await this.userService.getUserByUsername(username);
    return JSON.stringify(user);
  }

  @MessagePattern('refresh-token')
  async rereshToken(@Payload() { userId, refreshToken }) {
    const user = await this.userService.updateUser(userId, { refreshToken });
    return JSON.stringify(user);
  }
}
