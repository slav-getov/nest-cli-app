import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  BeforeRemove,
} from 'typeorm';

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
  password: string;
  //remember that if you just save entity directly to db hooks will not execute!!!
  @AfterInsert()
  logAfterInsert() {
    console.log(`Inserted client with id ${this.id}`);
  }
  @AfterUpdate()
  logAfterUpdate() {
    console.log(`Updated client with id ${this.id}`);
  }
  @BeforeRemove()
  logAfterRemove() {
    console.log(`Client with id ${this.id} removed`);
  }
}
