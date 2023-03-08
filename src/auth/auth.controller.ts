import {
  Controller,
  Get,
  Post,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  logIn() {
    return this.authService.login();
  }

  @Get('/:id')
  receiveInfo(@Param('id') id: string) {
    if (id != 'found') {
      throw new NotFoundException("didn't find it");
    }
  }
}
