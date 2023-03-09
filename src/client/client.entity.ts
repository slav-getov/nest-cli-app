import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  BeforeRemove,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  @Exclude()
  password: string;
  //remember that if you just save entity directly to db hooks will not execute!!!
  @AfterInsert()
  logAfterInsert() {
    console.log(`Inserted user with id ${this.id}`);
  }
  @AfterUpdate()
  logAfterUpdate() {
    console.log(`Updated user with id ${this.id}`);
  }
  @BeforeRemove()
  logAfterRemove() {
    console.log(`User with id ${this.id} removed`);
  }
}
