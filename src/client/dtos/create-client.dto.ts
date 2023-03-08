import { IsString, IsEmail } from 'class-validator';
export class CreateClientDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
