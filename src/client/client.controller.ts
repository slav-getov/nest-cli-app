import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientDto } from './dtos/create-client.dto';
import { UpdateClientDto } from './dtos/update-client.dto';
import { ClientService } from './client.service';

@Controller('auth')
export class ClientController {
  constructor(private clientService: ClientService) {}
  @Post('/signup')
  createClient(@Body() body: CreateClientDto) {
    this.clientService.create(
      body.firstName,
      body.lastName,
      body.email,
      body.password,
    );
  }
  @Get('/:id')
  async findClientById(@Param('id') id: string) {
    const client = await this.clientService.findOne(parseInt(id));
    if (!client) {
      throw new NotFoundException('No client found correspoding to this id');
    }
    return client;
  }
  @Get()
  findAllClientsBySpecificField(@Query('email') email: string) {
    return this.clientService.find(email);
  }
  @Delete('/:id')
  removeClientBasedOnId(@Param('id') id: string) {
    return this.clientService.remove(parseInt(id));
  }
  @Patch('/:id')
  updateClientBasedOnId(
    @Param('id') id: string,
    @Body() body: UpdateClientDto,
  ) {
    return this.clientService.update(parseInt(id), body);
  }
}
