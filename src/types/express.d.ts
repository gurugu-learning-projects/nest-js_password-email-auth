import type { SignInData } from '../auth/auth.type';

declare global {
  namespace Express {
    interface Request {
      user?: SignInData; // 👈 This injects the 'user' property into Express Request
    }
  }
}
