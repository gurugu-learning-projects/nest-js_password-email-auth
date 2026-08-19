import { Controller, HttpCode, HttpStatus, Post, Body } from '@nestjs/common';

import { LoginDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.authenticate(loginDto);
  }
}
