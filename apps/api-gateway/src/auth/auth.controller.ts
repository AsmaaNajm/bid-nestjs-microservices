import { LoginUserDto } from '@app/shared/dto/login-user.dto';
import { Body, Controller,Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body(ValidationPipe) loginUserDto: LoginUserDto) {
    return await this.authService.login(loginUserDto);
  }
}
