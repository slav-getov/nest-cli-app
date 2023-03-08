import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { message: 'you have logged in' };
  }

  signUp() {
    return { message: 'you have signed in' };
  }
}
