import { Body, Controller,Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '@app/dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async register(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return await this.userService.register(createUserDto);
  }
}
