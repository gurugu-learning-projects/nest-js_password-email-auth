import { Injectable, UnauthorizedException } from '@nestjs/common';

import type { SignInData, AuthResult } from './auth.type';
import { LoginDto } from './auth.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async authenticate(loginDto: LoginDto): Promise<AuthResult> {
    const user = await this.validateUser(loginDto);

    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      accessToken: 'fake-access-token',
      userId: user.userId,
      username: user.username,
    };
  }

  async validateUser(loginDto: LoginDto): Promise<SignInData | null> {
    const user = await this.usersService.findUserByName(loginDto.username);

    if (user && user.password === loginDto.password) {
      return { userId: user.userId, username: user.username };
    }

    return null;
  }
}
