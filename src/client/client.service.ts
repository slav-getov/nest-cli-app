import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  //this is where i stopped liking ts
  constructor(@InjectRepository(Client) private repo: Repository<Client>) {}
  create(firstName: string, lastName: string, email: string, password: string) {
    //make sure to always create and then save!!!
    const client = this.repo.create({ firstName, lastName, email, password });
    return this.repo.save(client);
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
  find(email: string) {
    return this.repo.find({ where: { email } });
  }
  async update(id: number, attrs: Partial<Client>) {
    const client = await this.findOne(id);
    if (!client) {
      throw new NotFoundException('Client was not found');
    }
    Object.assign(client, attrs);
    return this.repo.save(client);
  }
  async remove(id: number) {
    const client = await this.findOne(id);
    if (!client) {
      throw new NotFoundException(
        'Client was not found. Perhaps they were already deleted?',
      );
    }
    this.repo.remove(client);
  }
}
