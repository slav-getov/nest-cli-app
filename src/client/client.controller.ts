import { Controller, Post, Body } from '@nestjs/common';
import { CreateClientDto } from './dtos/create-client.dto';
import { ClientService } from './client.service';

@Controller('auth')
export class ClientController {
  constructor(private clientService: ClientService) {}
  @Post('/signup')
  createUser(@Body() body: CreateClientDto) {
    this.clientService.create(
      body.firstName,
      body.lastName,
      body.email,
      body.password,
    );
  }
}
