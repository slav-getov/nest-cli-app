import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  //this is where i stopped liking ts
  constructor(@InjectRepository(Client) private repo: Repository<Client>) {}
  create(firstName: string, lastName: string, email: string, password: string) {
    const client = this.repo.create({ firstName, lastName, email, password });
    return this.repo.save(client);
  }
}
