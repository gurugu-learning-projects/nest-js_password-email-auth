import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';

import { LoginDto } from './auth.dto';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.authenticate(loginDto);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Req() request: Request) {
    if (request.user) {
      return request.user;
    }

    return 'sage';
  }
}
