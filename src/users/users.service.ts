import { Injectable } from '@nestjs/common';

import type { User } from './users.type';

// FIXME: mockup, replace with a real database
const users: User[] = [
  {
    userId: 1,
    username: 'Alice',
    password: 'topsecret', // FIXME: use a hash instead
  },
  {
    userId: 2,
    username: 'Bob',
    password: '123abc',
  },
];

@Injectable()
export class UsersService {}
