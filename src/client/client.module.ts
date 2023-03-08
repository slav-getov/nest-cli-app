import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { ClientService } from './client.service';
@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class UserModule {}
