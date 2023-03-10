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
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { CreateClientDto } from './dtos/create-client.dto';
import { UpdateClientDto } from './dtos/update-client.dto';
import { ClientService } from './client.service';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { ClientDto } from './dtos/client.dto';
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
  @Get('/all')
  findAllClients() {
    const client = this.clientService.findAllGeneric();
    if (!client) {
      throw new NotFoundException('No clients currently available');
    }
    return client;
  }
  @UseInterceptors(new SerializeInterceptor(ClientDto))
  @Get('/:id')
  async findClientById(@Param('id') id: string) {
    const client = await this.clientService.findOne(parseInt(id));
    if (!client) {
      throw new NotFoundException('No client found corresponding to this id');
    }
    return client;
  }

  @Get()
  findAllClientsBySpecificField(@Query('email') email: string) {
    const client = this.clientService.find(email);
    if (!client) {
      throw new NotFoundException(
        'No client found corresponding with this email',
      );
    }
    return client;
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
