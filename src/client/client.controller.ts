import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
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
  @Get('/:id')
  findUserById(@Param('id') id: string) {
    return this.clientService.findOne(parseInt(id));
  }
  @Get()
  findAllUsersBySpecificField(@Query('email') email: string) {
    return this.clientService.find(email);
  }
  @Delete('/:id')
  removeUserBasedOnId(@Param('id') id: string) {
    return this.clientService.remove(parseInt(id));
  }
}
