import {
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  NotImplementedException,
  UseGuards,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';

import { AuthService } from './auth.service';
import { PassportLocalGuard } from './guards/passport-local.guard';
import { SignInData } from './auth.type';

@Controller('auth-v2')
export class PassportAuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UseGuards(PassportLocalGuard)
  login(@Req() request: Request) {
    return this.authService.signIn(request.user as unknown as SignInData);
  }

  @Get('me')
  getUserInfo() {
    throw new NotImplementedException();
  }
}
