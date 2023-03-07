import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('singup')
  signUp(): string {
    return 'this is sign up';
  }

  @Post('/login')
  logIn(): string {
    return 'this is log in';
  }
}
