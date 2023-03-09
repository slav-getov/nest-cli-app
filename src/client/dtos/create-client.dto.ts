import {
  IsString,
  IsEmail,
  IsStrongPassword,
  IsNotEmpty,
} from 'class-validator';
export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
